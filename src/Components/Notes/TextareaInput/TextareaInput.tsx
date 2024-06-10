import React from "react";
import styles from "./TextareaInput.module.scss";

interface TextareaInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onSubmit: () => void;
  onClear: () => void;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
  value,
  onChange,
  onKeyDown,
  onSubmit,
  onClear,
}) => {
  return (
    <div className={styles.textareaContainer}>
      <textarea
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Enter your text here..."
      />
      <div className={styles.buttonContainer}>
        <button className={styles.clearButton} onClick={onClear}>
          ✖
        </button>
        <button className={styles.submitButton} onClick={onSubmit}>
          ➤
        </button>
      </div>
    </div>
  );
};

export default TextareaInput;
