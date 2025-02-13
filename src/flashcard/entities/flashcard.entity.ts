import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Subject } from 'src/subject/entities/subject.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Flashcard {
  @PrimaryGeneratedColumn()
  @Field(() => String, { description: 'ID gerado' })
  id: number;

  @Column()
  @Field(() => Int, { description: 'ID da Matéria do flashcard' })
  user_id: number;

  @ManyToOne(() => Subject, (subject) => subject.flashcards, { nullable: true, onDelete: 'CASCADE' })
  @Field(() => Int, { description: 'Matéria do Flashcard' })
  subject: Subject;

  @Column()
  @Field(() => String, { description: 'Titulo do flashcard' })
  title: string;

  @Column()
  @Field(() => String, { description: 'Pergunta do flashcard' })
  question: string;

  @Column()
  @Field(() => String, { description: 'Resposta do flashcard' })
  answer: string;

  @Column()
  @Field(() => String, { description: 'Resposta do flashcard' })
  slug: string;
}
