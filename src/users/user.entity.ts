import { Report } from '../reports/report.entity';
import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  AfterInsert, 
  AfterUpdate, 
  AfterRemove,
  OneToMany
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    default: true
  })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log('inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('updated User with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id', this.id);
  }
}
