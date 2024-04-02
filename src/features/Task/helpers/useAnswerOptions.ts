import { useState } from "react";

interface IUseAnswerOptionsReturn {
  isAnswerOptions: boolean;
  optionsTrue: () => void;
  optionsFalse: () => void;
}

export const useAnswerOptions = (): IUseAnswerOptionsReturn => {
  const [isAnswerOptions, setIsAnswerOptions] = useState(false);
  return {
    isAnswerOptions,
    optionsTrue: () => setIsAnswerOptions(true),
    optionsFalse: () => setIsAnswerOptions(false),
  };
};
