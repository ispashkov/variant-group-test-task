import clsx from 'clsx';
import { type FC, type UIEvent, useEffect, useRef } from 'react';
import { ScrollArea, Typography } from '../../../../../shared/ui';
import styles from './ApplicationCardText.module.css';

interface ApplicationCardTextProps {
  text: string;
}

export const ApplicationCardText: FC<ApplicationCardTextProps> = ({ text }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const shadowTopRef = useRef<HTMLDivElement>(null);
  const shadowBottomRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollAreaRef.current?.dispatchEvent(new Event('scroll'));
  }, []);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const rootOffsetHeight = rootRef.current?.offsetHeight ?? 0;
    const scrollAreaScrollHeight =
      event.target instanceof HTMLElement ? event.target.scrollHeight : 0;
    const contentScrollHeight = scrollAreaScrollHeight - rootOffsetHeight;
    const currentScroll =
      event.target instanceof HTMLElement ? event.target.scrollTop : 0;

    if (shadowTopRef.current) {
      const opacity = currentScroll > 0 ? 1 : 0;
      shadowTopRef.current.style.opacity = `${opacity}`;
    }

    if (shadowBottomRef.current) {
      const opacity = currentScroll < contentScrollHeight ? 1 : 0;
      shadowBottomRef.current.style.opacity = `${opacity}`;
    }
  };

  return (
    <div className={styles.root} ref={rootRef}>
      <div className={styles.shadowTop} ref={shadowTopRef} />

      <ScrollArea ref={scrollAreaRef} onScroll={handleScroll}>
        <Typography className={clsx(styles.text)} color="secondary">
          {text}
        </Typography>
      </ScrollArea>

      <div className={styles.shadowBottom} ref={shadowBottomRef} />
    </div>
  );
};
