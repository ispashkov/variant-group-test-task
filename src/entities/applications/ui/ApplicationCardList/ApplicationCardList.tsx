import type { FC } from 'react';
import styles from './ApplicationCardList.module.css';
import { ApplicationCardListItem } from './ApplicationCardListItem.tsx';
import type { ApplicationCardListData } from './model';

interface ApplicationCardListProps {
  data: ApplicationCardListData[];
  onDelete: (id: ApplicationCardListData['id']) => void;
}

export const ApplicationCardList: FC<ApplicationCardListProps> = ({
  data,
  onDelete,
}) => (
  <div className={styles.root}>
    {data.map(({ id, text }) => (
      <ApplicationCardListItem
        key={id}
        id={id}
        text={text}
        onDelete={onDelete}
      />
    ))}
  </div>
);
