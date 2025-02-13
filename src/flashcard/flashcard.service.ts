import { Injectable } from '@nestjs/common';
import { CreateFlashcardInput } from './dto/create-flashcard.input';
import { UpdateFlashcardInput } from './dto/update-flashcard.input';
import { Flashcard } from './entities/flashcard.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FlashcardService {
  constructor(@InjectRepository(Flashcard) private flashcardRepository: Repository<Flashcard>) {}

  async create(createFlashcardInput: CreateFlashcardInput): Promise<string> {
    try {
      const new_flashcard = await this.flashcardRepository.create(createFlashcardInput);
      this.flashcardRepository.save(new_flashcard);

      return 'Flashcard criado com sucesso!';
    } catch(error) {
      return error;
    }
  }

  async findAll(): Promise<Flashcard[]> {
    try {
      const flashcards = await this.flashcardRepository.find();
      return flashcards;
    } catch(error) {
      return error;
    }
  }

  async findOne(id: number): Promise<Flashcard> {
    try {
      const flashcard = await this.flashcardRepository.findOneOrFail({
        where: { id },
        relations: ['subject'],
      })
      return flashcard;
    } catch(error) {
      return error
    }
  }

  async update(id: number, updateFlashcardInput: UpdateFlashcardInput): Promise<string> {
    try {
      const flashcard = await this.flashcardRepository.findOneOrFail({
        where: { id },
        relations: ['subject'],
      })
  
      this.flashcardRepository.update(flashcard, updateFlashcardInput);

      return `Flashcard atualizado com sucesso!`;

    } catch(error) {
      return error
    }    
  }

  async remove(id: number) {
    try {
      const flashcard = await this.flashcardRepository.findOneOrFail({
        where: { id },
      })
  
      this.flashcardRepository.remove(flashcard)

      return `Flashcard removido com sucesso!`;

    } catch(error) {

      return error;

    }
  }
}
