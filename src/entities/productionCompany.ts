import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity()
class ProductionCompany extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100, comment: '사명' })
  name!: string;

  @Column({
    type: 'varchar',
    length: 300,
    nullable: true,
    comment: 'TMDb에서의 로고 경로'
  })
  logoPath?: string;

  @Column({ type: 'varchar', length: 50, comment: '국가' })
  originCountry!: string;
}

export default ProductionCompany;
