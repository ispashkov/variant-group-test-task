import { useDocumentTitle } from 'usehooks-ts';
import { useConfigContext } from '../../contexts/ConfigContext';

export const usePageTitle = (title: string): void => {
  const { appTitle } = useConfigContext();

  const pageTitle = `${appTitle} - ${title}`;

  useDocumentTitle(pageTitle);
};
