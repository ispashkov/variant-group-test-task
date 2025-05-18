import { createContext, useContext } from 'react';

export type FormFieldContextValue = {
  id?: string;
  required?: boolean;
  isInvalid?: boolean;
};

export const FormFieldContext = createContext<FormFieldContextValue>({});

export const useFormFieldContext = (): FormFieldContextValue => {
  const context = useContext(FormFieldContext);

  if (!context) {
    throw new Error(
      'useFormFieldContext must be used as FormFieldContextProvider',
    );
  }

  return context;
};
