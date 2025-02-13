import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubjectService } from './subject.service';
import { Subject } from './entities/subject.entity';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';

@Resolver(() => Subject)
export class SubjectResolver {
  constructor(private readonly subjectService: SubjectService) {}

  @Mutation(() => String, { name: 'createSubject' })
  createSubject(@Args('createSubjectInput') createSubjectInput: CreateSubjectInput) {
    return this.subjectService.create(createSubjectInput);
  }

  @Query(() => [Subject], { name: 'findAllSubjects' })
  findAllSubjects() {
    return this.subjectService.findAll();
  }

  @Query(() => Subject, { name: 'findOneSubject' })
  findOneSubject(@Args('id', { type: () => Int }) id: number) {
    return this.subjectService.findOne(id);
  }

  @Mutation(() => String, { name: 'updateSubject' })
  updateSubject(@Args('updateSubjectInput') updateSubjectInput: UpdateSubjectInput) {
    return this.subjectService.update(updateSubjectInput.id, updateSubjectInput);
  }

  @Mutation(() => String, { name: 'removeSubject' })
  removeSubject(@Args('id', { type: () => Int }) id: number) {
    return this.subjectService.remove(id);
  }
}
