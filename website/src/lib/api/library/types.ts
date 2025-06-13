import { type } from 'arktype';
import { anime } from '../anime/types';

export const libraryStatusSchema = type(
  '"planning"|"watching"|"completed"|"dropped"|"paused"|"all"'
);

export const libraryItemSchema = type({
  id: 'string',
  animeId: 'string',
  userId: 'string',
  watchedEpisodes: 'number.integer',
  status: libraryStatusSchema,
  createdAt: 'number.integer',
  updatedAt: 'number.integer',
  anime
});

export const librarySchema = type({
  pageInfo: type({
    totalPage: 'number.integer',
    currentPage: 'number.integer',
    hasNextPage: 'boolean',
    hasPreviousPage: 'boolean'
  }),
  items: libraryItemSchema.array()
});

export const historyItemSchema = type({
  id: 'string',
  animeId: 'string',
  userId: 'string',
  watchedEpisodes: 'number.integer',
  createdAt: 'number.integer',
  anime
});

export const historySchema = type({
  pageInfo: type({
    totalPage: 'number.integer',
    currentPage: 'number.integer',
    hasNextPage: 'boolean',
    hasPreviousPage: 'boolean'
  }),
  items: historyItemSchema.array()
});

export const updateLibrarySchema = type({
  status: libraryStatusSchema,
  watchedEpisodes: 'number.integer'
});

export const syncStatusResponseSchema = type({
  syncId: 'string'
});

export const runningSchema = type({
  statuses: 'string[]'
});

export const statusSchema = type({
  status: '"completed"|"syncing"|"failed"'
});
