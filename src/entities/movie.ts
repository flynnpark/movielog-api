import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Movie extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number;

  @Column({ type: 'int', comment: 'TMDb 고유 ID' })
  tmdbId!: number;

  @Column({ type: 'varchar', length: 200, comment: '한글 제목' })
  title!: string;

  @Column({ type: 'varchar', length: 200, comment: '원본 제목' })
  originalTitle!: string;

  @Column({ type: 'varchar', length: 200, nullable: true, comment: '태그라인' })
  tagline?: string;

  @Column({ type: 'text', nullable: true, comment: '개요' })
  overview?: string;

  @Column({ type: 'int', unsigned: true, comment: '상영 시간' })
  runtime!: number;

  @Column({ type: 'date', comment: '개봉일' })
  releaseDate!: Date;

  @Column({ type: 'varchar', length: 200, comment: 'TMDb 포스터 경로' })
  posterPath!: string;

  @Column({ type: 'varchar', length: 200, comment: 'TMDb 배경 경로' })
  backdropPath!: string;

  @Column({ type: 'varchar', length: 50, comment: '원어' })
  originalLanguage!: string;

  @Column({ type: 'bool', comment: '성인영화 여부' })
  adult!: boolean;

  @Column({ type: 'int', unsigned: true, comment: '제작비' })
  budget!: number;
}

export default Movie;
