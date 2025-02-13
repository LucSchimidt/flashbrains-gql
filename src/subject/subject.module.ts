import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectResolver } from './subject.resolver';
import { Subject } from './entities/subject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Subject])],
  providers: [SubjectResolver, SubjectService],
  exports: [TypeOrmModule],
})
export class SubjectModule {}
