package xyz.aniways.features.anime.db

import org.ktorm.database.Database
import org.ktorm.entity.Entity
import org.ktorm.entity.sequenceOf
import org.ktorm.schema.Table
import org.ktorm.schema.int
import org.ktorm.schema.timestamp
import org.ktorm.schema.varchar
import java.time.Instant

interface Anime : Entity<Anime> {
    var id: String
    var name: String
    var jname: String
    var poster: String
    var genre: String
    var hianimeId: String
    var malId: Int?
    var anilistId: Int?
    var lastEpisode: Int?
    var createdAt: Instant
    var updatedAt: Instant
    var metadata: AnimeMetadata?

    companion object : Entity.Factory<Anime>()
}

object AnimeTable : Table<Anime>("animes") {
    val id = varchar("id").primaryKey().bindTo { it.id }
    val name = varchar("name").bindTo { it.name }
    val jname = varchar("jname").bindTo { it.jname }
    val poster = varchar("poster").bindTo { it.poster }
    val genre = varchar("genre").bindTo { it.genre }
    val hianimeId = varchar("hi_anime_id").bindTo { it.hianimeId }
    val malId = int("mal_id").bindTo { it.malId }.references(AnimeMetadataTable) { it.metadata }
    val anilistId = int("anilist_id").bindTo { it.anilistId }
    val lastEpisode = int("last_episode").bindTo { it.lastEpisode }
    val createdAt = timestamp("created_at").bindTo { it.createdAt }
    val updatedAt = timestamp("updated_at").bindTo { it.updatedAt }
}

val Database.animes get() = this.sequenceOf(AnimeTable)
