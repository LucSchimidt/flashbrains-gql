import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Flashcard } from 'src/flashcard/entities/flashcard.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Id da matéria' })
  id: number;

  @Column()
  @Field(() => Int, { description: 'ID do usuário da matéria' })
  user_id: number;

  @Column()
  @Field(() => String, { description: 'Titulo da matéria' })
  title: string;

  @Column()
  @Field(() => String, { description: 'Descrição da matéria' })
  description: string;

  @Column()
  @Field(() => String, { description: 'Slug da pagina da matéria' })
  slug: string;
}
