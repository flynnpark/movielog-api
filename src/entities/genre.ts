import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
class Genre extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column({ type: 'varchar', length: 30, comment: '장르명' })
  name!: string;
}

export default Genre;
