import type { FC } from 'react';
import { useApplicationStorageContext } from '../../contexts/ApplicationStorageContext';
import { ApplicationCardList } from '../../entities/applications';

export const ApplicationCardListWidget: FC = () => {
  const { data, remove } = useApplicationStorageContext();

  if (!data) return null;

  return <ApplicationCardList data={data} onDelete={remove} />;
};
