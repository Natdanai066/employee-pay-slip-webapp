import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  f_name: string;

  @Column()
  l_name: string;

  @Column()
  department: string;

  @Column()
  tel: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salary: number;

  @Column({ type: 'date', nullable: true })
  start_date: Date | null;

  @Column({ type: 'date', nullable: true })
  end_date: Date | null;

  @Column()
  iden_no: number;

  @Column()
  circulation: number;

  @Column({ type: 'int', default: 5 })
  commission: number;

  @Column()
  ot_money: number;

  @Column()
  ot_hour: number;

  @Column()
  prefix: string;

  @Column()
  detail: string;

  @Column()
  social_secure: string;

  @Column()
  personal_leave: number;

  @Column()
  sick_leave: number;

  @Column()
  bank: string;

  @Column()
  stage: string;

  @Column()
  acc_num: string;

  @Column()
  bank_branch: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  edit_at: Date;
}
