import type { FC } from 'react';
import { ApplicationCard } from '../ApplicationCard';
import type { ApplicationCardListData } from './model';

interface ApplicationCardListItemProps extends ApplicationCardListData {
  onDelete: (id: ApplicationCardListData['id']) => void;
}

export const ApplicationCardListItem: FC<ApplicationCardListItemProps> = ({
  id,
  text,
  onDelete,
}) => {
  const handleDelete = () => onDelete(id);

  return <ApplicationCard text={text} onDelete={handleDelete} />;
};
