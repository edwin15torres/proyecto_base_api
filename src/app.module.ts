import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MuseumModule } from './museum/museum.module';
import { ExhibitionModule } from './exhibition/exhibition.module';
import { ArtistModule } from './artist/artist.module';
import { ArtworkModule } from './artwork/artwork.module';
import { ImageModule } from './image/image.module';
import { MovementModule } from './movement/movement.module';
import { SponsorModule } from './sponsor/sponsor.module';

@Module({
  imports: [MuseumModule, ExhibitionModule, ArtistModule, ArtworkModule, ImageModule, MovementModule, SponsorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
