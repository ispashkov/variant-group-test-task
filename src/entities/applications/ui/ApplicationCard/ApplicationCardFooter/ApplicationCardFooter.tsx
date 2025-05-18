import type { FC } from 'react';
import { CheckIcon, CopyIcon, TrashIcon } from '../../../../../shared/icons';
import { Button } from '../../../../../shared/ui';
import styles from './ApplicationCardFooter.module.css';

interface ApplicationCardFooterProps {
  isCopied: boolean;
  onCopy: () => void;
  onDelete?: () => void;
}

export const ApplicationCardFooter: FC<ApplicationCardFooterProps> = ({
  isCopied,
  onCopy,
  onDelete,
}) => {
  return (
    <div className={styles.root}>
      {onDelete && (
        <Button variant="ghost" size="small" onClick={onDelete}>
          <TrashIcon />
          Delete
        </Button>
      )}

      <Button
        className={styles.copyButton}
        variant="ghost"
        size="small"
        disabled={isCopied}
        onClick={onCopy}
      >
        {isCopied ? (
          <>
            Copied!
            <CheckIcon />
          </>
        ) : (
          <>
            Copy to clipboard
            <CopyIcon />
          </>
        )}
      </Button>
    </div>
  );
};
