import { getServersOfEpisode, getStreamingData } from '$lib/api/anime';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url, parent, params }) => {
  const parentPromise = parent();

  const episode = Number(url.searchParams.get('episode') || 1);
  const server = url.searchParams.get('server') ?? 'sub';
  const type = url.searchParams.get('type');

  let key = url.searchParams.get('key');
  if (!key) {
    key = (await parentPromise).episodes.find((ep) => ep.number === episode)?.id ?? null;
  }

  if (!key) {
    return error(404, 'Episode not found');
  }

  const servers = await getServersOfEpisode(fetch, key);
  const selectedServer =
    servers.find((srv) => srv.type === type && srv.serverName === server) ??
    servers.find((srv) => srv.type === 'sub' || srv.type === 'raw') ??
    servers[0];

  const serversByType = servers.reduce(
    (acc, srv) => {
      if (!acc[srv.type]) {
        acc[srv.type] = [];
      }

      acc[srv.type].push(srv);

      return acc;
    },
    {} as Record<string, typeof servers>
  );

  const streamInfo = await getStreamingData(fetch, selectedServer.serverId);

  return {
    title: `${(await parentPromise).anime.jname} - Episode ${episode}`,
    query: {
      id: params.id,
      episode,
      key,
      server: selectedServer.serverName,
      type: selectedServer.type
    },
    data: {
      servers,
      serversByType,
      selectedServer,
      streamInfo
    }
  };
};
