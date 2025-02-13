import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FlashcardService } from './flashcard.service';
import { Flashcard } from './entities/flashcard.entity';
import { CreateFlashcardInput } from './dto/create-flashcard.input';
import { UpdateFlashcardInput } from './dto/update-flashcard.input';
import { error } from 'console';

@Resolver(() => Flashcard)
export class FlashcardResolver {
  constructor(private readonly flashcardService: FlashcardService) {}

  @Mutation(() => String, { name: 'createFlashcard' })
  createFlashcard(@Args('createFlashcardInput') createFlashcardInput: CreateFlashcardInput): Promise<string> {
    return this.flashcardService.create(createFlashcardInput);
  }

  @Query(() => [Flashcard], { name: 'findAllFlashcards' })
  findAllFlashcards(): Promise<Flashcard[]> {
    return this.flashcardService.findAll();
  }

  @Query(() => Flashcard, { name: 'findOneFlashcard' })
  findOneFlashcard(@Args('id', { type: () => Int }) id: number) {
    return this.flashcardService.findOne(id);
  }

  @Mutation(() => String, { name: 'updateFlashcard' })
  updateFlashcard(@Args('updateFlashcardInput') updateFlashcardInput: UpdateFlashcardInput): Promise<String> {
    return this.flashcardService.update(updateFlashcardInput.id, updateFlashcardInput);
  }

  @Mutation(() => String, { name: 'removeFlashcard' })
  removeFlashcard(@Args('id', { type: () => Int }) id: number) {
    try {
      return this.flashcardService.remove(id);
    } catch(error) {
      return error
    }
  }
}
