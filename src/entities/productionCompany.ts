import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity()
class ProductionCompany extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', length: 300 })
  logoPath?: string;

  @Column({ type: 'varchar', length: 50 })
  originCountry!: string;
}

export default ProductionCompany;
