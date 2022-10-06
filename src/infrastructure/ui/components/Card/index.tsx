import { FunctionComponent } from 'react';
import { Info } from '~/domain/entities';
import styles from './styles.module.css';

export const Card: FunctionComponent<Info> = ({ head, description, link }) => {
  return (
    <a href={link} className={styles.card}>
      <h2>{head} &rarr;</h2>
      <p>{description}</p>
    </a>
  );
};
