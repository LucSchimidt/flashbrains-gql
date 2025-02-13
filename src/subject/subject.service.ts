import { Injectable } from '@nestjs/common';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';
import { Subject } from './entities/subject.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(@InjectRepository(Subject) private subjectRepository: Repository<Subject>) {}

  async create(createSubjectInput: CreateSubjectInput) {
    try {
      const new_subject = await this.subjectRepository.create(createSubjectInput);
      this.subjectRepository.save(new_subject);

      return 'Matéria criada com sucesso!';
    } catch(error) {
      return error;
    }
  }

  async findAll() {
    try {
      const subjects = await this.subjectRepository.find();
      return subjects;
    } catch(error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const subject = await this.subjectRepository.findOneOrFail({
        where: { id },
      })
      return subject;
    } catch(error) {
      return error
    }
  }

  async update(id: number, updateSubjectInput: UpdateSubjectInput) {
    try {
      const subject = await this.subjectRepository.findOneOrFail({
        where: { id },
      })
  
      this.subjectRepository.update(subject, updateSubjectInput);

      return `Matéria atualizada com sucesso!`;

    } catch(error) {
      return error
    }
  }

  async remove(id: number) {
    try {
      const subject = await this.subjectRepository.findOneOrFail({
        where: { id },
      })
  
      this.subjectRepository.remove(subject)

      return `Matéria removida com sucesso!`;

    } catch(error) {

      return error;

    }
  }
}
