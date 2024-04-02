import { useState } from "react";

interface IUseErrorHandlerReturn {
  isErrorHandler: boolean;
  error: () => void;
  noError: () => void;
}

export const useErrorHandler = (): IUseErrorHandlerReturn => {
  const [isErrorHandler, setIsErrorHandler] = useState(false);
  return {
    isErrorHandler,
    error: () => setIsErrorHandler(true),
    noError: () => setIsErrorHandler(false),
  };
};
