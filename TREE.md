```
/aniways/./
     ├─ .env.example
     ├─ .git/
     ├─ .github/
     │     └─ workflows/
     │           └─ deploy.yaml
     ├─ .gitignore
     ├─ .tree.sh.swp
     ├─ api/
     │     ├─ .gitignore
     │     ├─ build.gradle.kts
     │     ├─ Dockerfile
     │     ├─ gradle/
     │     │     ├─ libs.versions.toml
     │     │     └─ wrapper/
     │     │           ├─ gradle-wrapper.jar
     │     │           └─ gradle-wrapper.properties
     │     ├─ gradle.properties
     │     ├─ gradlew
     │     ├─ gradlew.bat
     │     ├─ README.md
     │     ├─ settings.gradle.kts
     │     └─ src/
     │           ├─ main/
     │           │     ├─ kotlin/
     │           │     │     ├─ Application.kt
     │           │     │     ├─ cache/
     │           │     │     │     └─ AniwaysCache.kt
     │           │     │     ├─ database/
     │           │     │     │     └─ AniwaysDatabase.kt
     │           │     │     ├─ Env.kt
     │           │     │     ├─ features/
     │           │     │     │     ├─ anime/
     │           │     │     │     │     ├─ AnimeDiModule.kt
     │           │     │     │     │     ├─ AnimeRoute.kt
     │           │     │     │     │     ├─ api/
     │           │     │     │     │     │     ├─ anilist/
     │           │     │     │     │     │     │     ├─ AnilistApi.kt
     │           │     │     │     │     │     │     ├─ models/
     │           │     │     │     │     │     │     │     ├─ AnilistAnime.kt
     │           │     │     │     │     │     │     │     └─ Graphql.kt
     │           │     │     │     │     │     │     └─ Queries.kt
     │           │     │     │     │     │     ├─ mal/
     │           │     │     │     │     │     │     ├─ MalApi.kt
     │           │     │     │     │     │     │     └─ models/
     │           │     │     │     │     │     │           ├─ MalAnimeList.kt
     │           │     │     │     │     │     │           ├─ MalAnimeMetadata.kt
     │           │     │     │     │     │     │           └─ UpdateAnimeListDtos.kt
     │           │     │     │     │     │     └─ shikimori/
     │           │     │     │     │     │           ├─ models/
     │           │     │     │     │     │           │     └─ FranchiseResponse.kt
     │           │     │     │     │     │           └─ ShikimoriApi.kt
     │           │     │     │     │     ├─ dao/
     │           │     │     │     │     │     ├─ AnimeDao.kt
     │           │     │     │     │     │     └─ DbAnimeDao.kt
     │           │     │     │     │     ├─ db/
     │           │     │     │     │     │     ├─ AnimeMetadataTable.kt
     │           │     │     │     │     │     └─ AnimeTable.kt
     │           │     │     │     │     ├─ dtos/
     │           │     │     │     │     │     ├─ AnimeDto.kt
     │           │     │     │     │     │     ├─ AnimeListDto.kt
     │           │     │     │     │     │     ├─ EpisodeDto.kt
     │           │     │     │     │     │     ├─ ScrapedAnimeDto.kt
     │           │     │     │     │     │     ├─ ScrapedAnimeInfoDto.kt
     │           │     │     │     │     │     └─ ScrapedTopAnimeDto.kt
     │           │     │     │     │     ├─ scrapers/
     │           │     │     │     │     │     ├─ AnimeScraper.kt
     │           │     │     │     │     │     └─ HianimeScraper.kt
     │           │     │     │     │     └─ services/
     │           │     │     │     │           └─ AnimeService.kt
     │           │     │     │     ├─ auth/
     │           │     │     │     │     ├─ AuthDiModule.kt
     │           │     │     │     │     ├─ AuthRoute.kt
     │           │     │     │     │     ├─ daos/
     │           │     │     │     │     │     ├─ SessionDao.kt
     │           │     │     │     │     │     └─ TokenDao.kt
     │           │     │     │     │     ├─ db/
     │           │     │     │     │     │     ├─ SessionTable.kt
     │           │     │     │     │     │     └─ TokenTable.kt
     │           │     │     │     │     ├─ oauth/
     │           │     │     │     │     │     ├─ MalOauthProvider.kt
     │           │     │     │     │     │     └─ OauthProvider.kt
     │           │     │     │     │     └─ services/
     │           │     │     │     │           ├─ AuthService.kt
     │           │     │     │     │           └─ MalUserService.kt
     │           │     │     │     ├─ library/
     │           │     │     │     │     ├─ daos/
     │           │     │     │     │     │     ├─ HistoryDao.kt
     │           │     │     │     │     │     ├─ LibraryDao.kt
     │           │     │     │     │     │     └─ SyncLibraryDao.kt
     │           │     │     │     │     ├─ db/
     │           │     │     │     │     │     ├─ HistoryTable.kt
     │           │     │     │     │     │     ├─ LibraryTable.kt
     │           │     │     │     │     │     └─ SyncLibraryTable.kt
     │           │     │     │     │     ├─ dtos/
     │           │     │     │     │     │     ├─ HistoryDto.kt
     │           │     │     │     │     │     └─ LibraryDto.kt
     │           │     │     │     │     ├─ LibraryModule.kt
     │           │     │     │     │     ├─ LibraryRoutes.kt
     │           │     │     │     │     └─ LibraryService.kt
     │           │     │     │     ├─ settings/
     │           │     │     │     │     ├─ dao/
     │           │     │     │     │     │     ├─ DBSettingsDao.kt
     │           │     │     │     │     │     └─ SettingsDao.kt
     │           │     │     │     │     ├─ db/
     │           │     │     │     │     │     └─ SettingsTable.kt
     │           │     │     │     │     ├─ dtos/
     │           │     │     │     │     │     └─ SettingsDto.kt
     │           │     │     │     │     ├─ services/
     │           │     │     │     │     │     └─ SettingsService.kt
     │           │     │     │     │     ├─ SettingsDiModule.kt
     │           │     │     │     │     └─ SettingsRoute.kt
     │           │     │     │     ├─ tasks/
     │           │     │     │     │     ├─ FreshServerInstallSeeder.kt
     │           │     │     │     │     ├─ HourlyRecentlyUpdatedScraperTask.kt
     │           │     │     │     │     └─ plugins/
     │           │     │     │     │           ├─ Task.kt
     │           │     │     │     │           ├─ TaskPlugin.kt
     │           │     │     │     │           └─ TaskScheduler.kt
     │           │     │     │     └─ users/
     │           │     │     │           ├─ dao/
     │           │     │     │           │     ├─ DbUserDao.kt
     │           │     │     │           │     └─ UserDao.kt
     │           │     │     │           ├─ db/
     │           │     │     │           │     └─ UserTable.kt
     │           │     │     │           ├─ dtos/
     │           │     │     │           │     ├─ AuthDto.kt
     │           │     │     │           │     ├─ CreateUserDto.kt
     │           │     │     │           │     ├─ UpdateUserDto.kt
     │           │     │     │           │     └─ UserDto.kt
     │           │     │     │           ├─ UserModule.kt
     │           │     │     │           ├─ UserRoutes.kt
     │           │     │     │           └─ UserService.kt
     │           │     │     ├─ models/
     │           │     │     │     └─ Pagination.kt
     │           │     │     ├─ plugins/
     │           │     │     │     ├─ Auth.kt
     │           │     │     │     ├─ Cors.kt
     │           │     │     │     ├─ Koin.kt
     │           │     │     │     ├─ Monitoring.kt
     │           │     │     │     ├─ Routing.kt
     │           │     │     │     ├─ Serialization.kt
     │           │     │     │     ├─ Session.kt
     │           │     │     │     ├─ StatusPage.kt
     │           │     │     │     └─ TaskScheduler.kt
     │           │     │     └─ utils/
     │           │     │           ├─ HttpClient.kt
     │           │     │           ├─ Int.kt
     │           │     │           ├─ Retry.kt
     │           │     │           └─ String.kt
     │           │     └─ resources/
     │           │           ├─ application.yaml
     │           │           ├─ db/
     │           │           │     └─ migration/
     │           │           │           ├─ V10__move_to_nanoid.sql
     │           │           │           ├─ V11__add_user_table.sql
     │           │           │           ├─ V12__add_auto_resume_field.sql
     │           │           │           ├─ V13__add_cascading_delete_to_token_session.sql
     │           │           │           ├─ V14__change_settings_to_user_id.sql
     │           │           │           ├─ V15__add_library_tables.sql
     │           │           │           ├─ V16__add_updated_at_field_to_history.sql
     │           │           │           ├─ V17__add_incognito_mode.sql
     │           │           │           ├─ V18__add_sync_library_table.sql
     │           │           │           ├─ V1__create_settings_table.sql
     │           │           │           ├─ V2__create_anime_tablles.sql
     │           │           │           ├─ V3__add_genre_field_to_anime_table.sql
     │           │           │           ├─ V4__move_description_field_from_anime_to_metadat.sql
     │           │           │           ├─ V5__make_id_auto_gen.sql
     │           │           │           ├─ V6__added_updated_at_field_to_anime_table.sql
     │           │           │           ├─ V7__change_column_mean_to_double.sql
     │           │           │           ├─ V8__add_search_vectors.sql
     │           │           │           └─ V9__add_season_field.sql
     │           │           └─ logback.xml
     │           └─ test/
     │                 └─ kotlin/
     │                       └─ ApplicationTest.kt
     ├─ docker-compose.yaml
     ├─ LICENSE
     ├─ README.md
     ├─ streaming/
     │     ├─ .gitignore
     │     ├─ bun.lockb
     │     ├─ Dockerfile
     │     ├─ esbuild.mjs
     │     ├─ megacloud.wasm
     │     ├─ package.json
     │     ├─ src/
     │     │     ├─ handlers/
     │     │     │     ├─ info.ts
     │     │     │     └─ proxy.ts
     │     │     ├─ index.ts
     │     │     ├─ route.ts
     │     │     ├─ scrapers/
     │     │     │     ├─ decoded-png.js
     │     │     │     └─ getSources.ts
     │     │     ├─ server.ts
     │     │     └─ utils/
     │     │           ├─ headers.ts
     │     │           └─ logger.ts
     │     └─ tsconfig.json
     ├─ TREE.md
     ├─ tree.sh
     └─ website/
           ├─ .env.example
           ├─ .gitignore
           ├─ .npmrc
           ├─ .prettierignore
           ├─ .prettierrc
           ├─ bun.lockb
           ├─ components.json
           ├─ eslint.config.js
           ├─ package.json
           ├─ postcss.config.js
           ├─ README.md
           ├─ src/
           │     ├─ app.css
           │     ├─ app.d.ts
           │     ├─ app.html
           │     ├─ hooks.server.ts
           │     ├─ lib/
           │     │     ├─ api/
           │     │     │     ├─ anime/
           │     │     │     │     ├─ index.ts
           │     │     │     │     └─ types.ts
           │     │     │     ├─ auth/
           │     │     │     │     ├─ index.ts
           │     │     │     │     └─ types.ts
           │     │     │     ├─ index.ts
           │     │     │     ├─ library/
           │     │     │     │     ├─ index.ts
           │     │     │     │     └─ types.ts
           │     │     │     └─ settings/
           │     │     │           ├─ index.ts
           │     │     │           └─ types.ts
           │     │     ├─ assets/
           │     │     │     ├─ logo.png
           │     │     │     ├─ miku.png
           │     │     │     ├─ search.png
           │     │     │     └─ sorry.png
           │     │     ├─ components/
           │     │     │     ├─ anime/
           │     │     │     │     ├─ anime-grid.svelte
           │     │     │     │     ├─ library-btn.svelte
           │     │     │     │     ├─ library-sync.svelte
           │     │     │     │     ├─ metadata.svelte
           │     │     │     │     ├─ other-anime-sections.svelte
           │     │     │     │     ├─ player/
           │     │     │     │     │     ├─ create-player.svelte.ts
           │     │     │     │     │     ├─ index.svelte
           │     │     │     │     │     └─ plugins.ts
           │     │     │     │     ├─ ranked-anime-grid.svelte
           │     │     │     │     ├─ seasonal.svelte
           │     │     │     │     └─ trailer.svelte
           │     │     │     ├─ auth/
           │     │     │     │     ├─ auth.svelte
           │     │     │     │     ├─ change-password.svelte
           │     │     │     │     ├─ login-form.svelte
           │     │     │     │     └─ register-form.svelte
           │     │     │     ├─ navigation/
           │     │     │     │     ├─ footer.svelte
           │     │     │     │     ├─ navbar.svelte
           │     │     │     │     └─ search.svelte
           │     │     │     ├─ settings/
           │     │     │     │     └─ sync.svelte
           │     │     │     └─ ui/
           │     │     │           ├─ button/
           │     │     │           │     ├─ button.svelte
           │     │     │           │     └─ index.ts
           │     │     │           ├─ carousel/
           │     │     │           │     ├─ carousel-content.svelte
           │     │     │           │     ├─ carousel-item.svelte
           │     │     │           │     ├─ carousel-next.svelte
           │     │     │           │     ├─ carousel-previous.svelte
           │     │     │           │     ├─ carousel.svelte
           │     │     │           │     ├─ context.ts
           │     │     │           │     └─ index.ts
           │     │     │           ├─ command/
           │     │     │           │     ├─ command-dialog.svelte
           │     │     │           │     ├─ command-empty.svelte
           │     │     │           │     ├─ command-group.svelte
           │     │     │           │     ├─ command-input.svelte
           │     │     │           │     ├─ command-item.svelte
           │     │     │           │     ├─ command-link-item.svelte
           │     │     │           │     ├─ command-list.svelte
           │     │     │           │     ├─ command-separator.svelte
           │     │     │           │     ├─ command-shortcut.svelte
           │     │     │           │     ├─ command.svelte
           │     │     │           │     └─ index.ts
           │     │     │           ├─ dialog/
           │     │     │           │     ├─ dialog-content.svelte
           │     │     │           │     ├─ dialog-description.svelte
           │     │     │           │     ├─ dialog-footer.svelte
           │     │     │           │     ├─ dialog-header.svelte
           │     │     │           │     ├─ dialog-overlay.svelte
           │     │     │           │     ├─ dialog-portal.svelte
           │     │     │           │     ├─ dialog-title.svelte
           │     │     │           │     └─ index.ts
           │     │     │           ├─ dropdown-menu/
           │     │     │           │     ├─ dropdown-menu-checkbox-item.svelte
           │     │     │           │     ├─ dropdown-menu-content.svelte
           │     │     │           │     ├─ dropdown-menu-group-heading.svelte
           │     │     │           │     ├─ dropdown-menu-item.svelte
           │     │     │           │     ├─ dropdown-menu-label.svelte
           │     │     │           │     ├─ dropdown-menu-radio-group.svelte
           │     │     │           │     ├─ dropdown-menu-radio-item.svelte
           │     │     │           │     ├─ dropdown-menu-separator.svelte
           │     │     │           │     ├─ dropdown-menu-shortcut.svelte
           │     │     │           │     ├─ dropdown-menu-sub-content.svelte
           │     │     │           │     ├─ dropdown-menu-sub-trigger.svelte
           │     │     │           │     └─ index.ts
           │     │     │           ├─ form/
           │     │     │           │     ├─ form-button.svelte
           │     │     │           │     ├─ form-description.svelte
           │     │     │           │     ├─ form-element-field.svelte
           │     │     │           │     ├─ form-field-errors.svelte
           │     │     │           │     ├─ form-field.svelte
           │     │     │           │     ├─ form-fieldset.svelte
           │     │     │           │     ├─ form-label.svelte
           │     │     │           │     ├─ form-legend.svelte
           │     │     │           │     └─ index.ts
           │     │     │           ├─ input/
           │     │     │           │     ├─ index.ts
           │     │     │           │     └─ input.svelte
           │     │     │           ├─ label/
           │     │     │           │     ├─ index.ts
           │     │     │           │     └─ label.svelte
           │     │     │           ├─ pagination/
           │     │     │           │     ├─ index.ts
           │     │     │           │     ├─ pagination-content.svelte
           │     │     │           │     ├─ pagination-ellipsis.svelte
           │     │     │           │     ├─ pagination-item.svelte
           │     │     │           │     ├─ pagination-link.svelte
           │     │     │           │     ├─ pagination-next-button.svelte
           │     │     │           │     ├─ pagination-prev-button.svelte
           │     │     │           │     └─ pagination.svelte
           │     │     │           ├─ popover/
           │     │     │           │     ├─ index.ts
           │     │     │           │     └─ popover-content.svelte
           │     │     │           ├─ select/
           │     │     │           │     ├─ index.ts
           │     │     │           │     ├─ select-content.svelte
           │     │     │           │     ├─ select-group-heading.svelte
           │     │     │           │     ├─ select-item.svelte
           │     │     │           │     ├─ select-label.svelte
           │     │     │           │     ├─ select-scroll-down-button.svelte
           │     │     │           │     ├─ select-scroll-up-button.svelte
           │     │     │           │     ├─ select-separator.svelte
           │     │     │           │     └─ select-trigger.svelte
           │     │     │           ├─ separator/
           │     │     │           │     ├─ index.ts
           │     │     │           │     └─ separator.svelte
           │     │     │           ├─ sheet/
           │     │     │           │     ├─ index.ts
           │     │     │           │     ├─ sheet-content.svelte
           │     │     │           │     ├─ sheet-description.svelte
           │     │     │           │     ├─ sheet-footer.svelte
           │     │     │           │     ├─ sheet-header.svelte
           │     │     │           │     ├─ sheet-overlay.svelte
           │     │     │           │     ├─ sheet-portal.svelte
           │     │     │           │     └─ sheet-title.svelte
           │     │     │           ├─ skeleton/
           │     │     │           │     ├─ index.ts
           │     │     │           │     └─ skeleton.svelte
           │     │     │           ├─ sonner/
           │     │     │           │     ├─ index.ts
           │     │     │           │     └─ sonner.svelte
           │     │     │           ├─ switch/
           │     │     │           │     ├─ index.ts
           │     │     │           │     └─ switch.svelte
           │     │     │           └─ tabs/
           │     │     │                 ├─ index.ts
           │     │     │                 ├─ tabs-content.svelte
           │     │     │                 ├─ tabs-list.svelte
           │     │     │                 └─ tabs-trigger.svelte
           │     │     ├─ context/
           │     │     │     └─ state.svelte.ts
           │     │     ├─ index.ts
           │     │     └─ utils.ts
           │     └─ routes/
           │           ├─ (home)/
           │           │     ├─ +layout.svelte
           │           │     ├─ +layout.ts
           │           │     ├─ +page.svelte
           │           │     └─ +page.ts
           │           ├─ +error.svelte
           │           ├─ +layout.svelte
           │           ├─ +layout.ts
           │           ├─ account/
           │           │     ├─ +page.svelte
           │           │     └─ +page.ts
           │           ├─ anime/
           │           │     └─ [id]/
           │           │           ├─ +layout.ts
           │           │           ├─ +page.svelte
           │           │           ├─ +page.ts
           │           │           └─ watch/
           │           │                 ├─ +layout.ts
           │           │                 ├─ +page.svelte
           │           │                 └─ +page.ts
           │           ├─ continue-watching/
           │           │     ├─ +page.svelte
           │           │     └─ +page.ts
           │           ├─ error/
           │           │     └─ +page.ts
           │           ├─ genre/
           │           │     └─ [genre]/
           │           │           ├─ +page.svelte
           │           │           └─ +page.ts
           │           ├─ history/
           │           │     ├─ +page.svelte
           │           │     └─ +page.ts
           │           ├─ library/
           │           │     ├─ +page.svelte
           │           │     └─ +page.ts
           │           ├─ plan-to-watch/
           │           │     ├─ +page.svelte
           │           │     └─ +page.ts
           │           ├─ random/
           │           │     ├─ +server.ts
           │           │     └─ [genre]/
           │           │           └─ +server.ts
           │           └─ search/
           │                 ├─ +page.svelte
           │                 └─ +page.ts
           ├─ static/
           │     ├─ android-chrome-192x192.png
           │     ├─ android-chrome-512x512.png
           │     ├─ anilist.svg
           │     ├─ apple-touch-icon.png
           │     ├─ favicon-16x16.png
           │     ├─ favicon-32x32.png
           │     ├─ favicon.ico
           │     ├─ kitsu.png
           │     ├─ logo.png
           │     ├─ mal.svg
           │     └─ site.webmanifest
           ├─ svelte.config.js
           ├─ tailwind.config.ts
           ├─ tsconfig.json
           └─ vite.config.ts

```

