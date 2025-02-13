import { Module } from '@nestjs/common';
import { FlashcardService } from './flashcard.service';
import { FlashcardResolver } from './flashcard.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flashcard])],
  providers: [FlashcardResolver, FlashcardService],
  exports: [TypeOrmModule],
})
export class FlashcardModule {}
