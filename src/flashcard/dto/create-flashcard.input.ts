import { InputType, Int, Field } from '@nestjs/graphql';
import { Subject } from 'src/subject/entities/subject.entity';

@InputType()
export class CreateFlashcardInput {
  @Field(() => String, { description: 'Titulo do flashcard' })
  title: string;

  @Field(() => Int, { description: 'ID do Usuário do flashcard' })
  user_id: number;

  @Field(() => Int, { nullable:true, description: 'ID da Matéria do flashcard' })
  subject_id?: number;

  @Field(() => String, { description: 'Pergunta do flashcard' })
  question: string;

  @Field(() => String, { description: 'Resposta do flashcard' })
  answer: string;

  @Field(() => String, { description: 'Resposta do flashcard' })
  slug: string;
}
