import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.employeeRepository.create(createEmployeeDto);
    const toCreate = await this.employeeRepository.insert(employee);
    return toCreate;
  }

  findAll() {
    return this.employeeRepository.find();
  }

  findOne(id: number) {
    return this.employeeRepository.findOneBy({ id: id });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    let employee = await this.employeeRepository.findOneBy({ id: id });
    employee = {
      ...employee,
      ...updateEmployeeDto,
    };
    const toUpdate = await this.employeeRepository.save(employee);
    return toUpdate;
  }

  async remove(id: number) {
    const toDelete = await this.employeeRepository.delete(id);
    return toDelete;
  }
}
