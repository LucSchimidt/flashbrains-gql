import { InputType, Int, Field } from '@nestjs/graphql';
import { Flashcard } from 'src/flashcard/entities/flashcard.entity';

@InputType()
export class CreateSubjectInput {
  @Field(() => Int, { description: 'ID do usuário da matéria' })
  user_id: number;

  @Field(() => String, { description: 'Titulo da matéria' })
  title: string;

  @Field(() => String, { nullable:true, description: 'Titulo da matéria' })
  flashcards?: Flashcard[];

  @Field(() => String, { description: 'Descrição da matéria' })
  description: string;

  @Field(() => String, { description: 'Slug da pagina da matéria' })
  slug: string;
}
