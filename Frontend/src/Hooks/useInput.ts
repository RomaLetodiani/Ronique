import { useEffect, useState } from "react";

/**
 * Represents the shape of the state object returned by the useInput hook.
 */
export type InputState<T> = {
  /** The current value of the input field. */
  value: T;
  /** Indicates whether the input field is currently focused. */
  focus: boolean;
  /** Event handler for input changes. */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Event handler for input blur. */
  onBlur: () => void;
  /** Event handler for input focus. */
  onFocus: () => void;
  /** Indicates whether there is an error in the input value. */
  hasError: boolean;
  /** Function to clear the input value. */
  clear: () => void;
};

/**
 * A custom React hook for managing the state of an input field.
 * @param validate A function to validate the input value.
 * @returns An object containing input state and event handlers.
 */
export const useInput = <T>(validate: (value?: T) => boolean, initialValue: T): InputState<T> => {
  const [value, setValue] = useState<T>(initialValue);

  // TODO: BUG: FIXME: This is a bug, the touched state should be set to false when the initialValue is falsy
  const [touched, setTouched] = useState<boolean>(!!initialValue);
  const [focus, setFocus] = useState<boolean>(false);

  const isValid: boolean = validate(value);
  const hasError: boolean = !isValid && touched;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  };

  const onBlur = (): void => {
    setTouched(true);
    !value && setFocus(false);
  };

  const onFocus = (): void => {
    setFocus(true);
  };

  const clear = (): void => {
    setValue(initialValue);
    setTouched(false);
    setFocus(false);
  };

  useEffect(() => {
    value && initialValue && onFocus();
  }, [value, initialValue]);

  return {
    value,
    focus,
    onChange,
    onBlur,
    onFocus,
    hasError,
    clear,
  };
};

// Example usage
// Email Input
// const {
//     value: emailValue,
//     focus: emailFocus,
//     hasError: emailHasError,
//     onChange: emailOnChange,
//     onBlur: emailOnBlur,
//     onFocus: emailOnFocus,
//   } = useInput((email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

// Phone Input
//   const {
//     value: phoneValue,
//     focus: phoneFocus,
//     hasError: phoneHasError,
//     onChange: phoneOnChange,
//     onBlur: phoneOnBlur,
//     onFocus: phoneOnFocus,
//   } = useInput((phone: string) => {
//     const phoneRegex = /^(\+\d{3}\s?)?\(?[\s.-]?\d{3}\)?[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2}$/;
//     const phoneRegexVol2 = /^(\+\d{3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{3}$/;
//     const sanitizedPhone = phone.replace(/[-\s]/g, '');
//     const shortPhoneRegex = /^\d{9}$/;

//     return (
//       phoneRegex.test(phone) || phoneRegexVol2.test(phone) || shortPhoneRegex.test(sanitizedPhone)
//     );
//   });
