import clsx from 'clsx';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import { Card } from '../../../../shared/ui';
import styles from './ApplicationCard.module.css';
import { ApplicationCardFooter } from './ApplicationCardFooter';
import { ApplicationCardText } from './ApplicationCardText';

interface LetterCardBaseProps<E extends ElementType = 'article'> {
  as?: E;
  text: string;
  onDelete?: () => void;
}

type LetterCardProps<E extends ElementType = 'article'> = LetterCardBaseProps &
  Omit<ComponentPropsWithoutRef<E>, keyof LetterCardBaseProps<E>>;

const APPLICATION_CARD_COPY_CLEAR_TIMEOUT = 5000;

export const ApplicationCard = <E extends ElementType = 'article'>({
  text,
  onDelete,
  as = 'article',
  className,
  ...props
}: LetterCardProps<E>) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [_, copyToClipboard] = useCopyToClipboard();

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (isCopied) {
      timeoutRef.current = setTimeout(
        () => setIsCopied(false),
        APPLICATION_CARD_COPY_CLEAR_TIMEOUT,
      );
    }

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      const isCopied = await copyToClipboard(text);

      setIsCopied(isCopied);
    } catch (e) {
      console.error('[ApplicationCard] Could not copy to clipboard', e);
    }
  };

  return (
    <Card as={as} className={clsx(styles.root, className)} {...props}>
      <ApplicationCardText text={text} />
      <ApplicationCardFooter
        isCopied={isCopied}
        onCopy={handleCopy}
        onDelete={onDelete}
      />
    </Card>
  );
};
