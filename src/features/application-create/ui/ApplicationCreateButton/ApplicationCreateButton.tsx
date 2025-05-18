import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { genApplicationCreatePagePath } from '../../../../routing';
import { PlusIcon } from '../../../../shared/icons';
import { Button, type ButtonProps } from '../../../../shared/ui';

type CreateNewLetterButtonProps = Pick<ButtonProps<'a'>, 'size'>;

export const ApplicationCreateButton: FC<CreateNewLetterButtonProps> = ({
  size,
}) => (
  <Button as={Link} to={genApplicationCreatePagePath()} size={size}>
    <PlusIcon />
    Create New
  </Button>
);
