import { useFormContext } from 'react-hook-form';
import type { ApplicationFormValues } from '../model';

export const useApplicationFormContext = useFormContext<ApplicationFormValues>;
