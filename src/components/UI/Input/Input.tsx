import { FC } from "react";
import searchIcon from "@/assets/icons/search.svg";
import cn from "classnames";
import styles from "./Input.module.scss";

interface InputProps {
  onChange: (value: string) => void;
  placeholder?: string;
  initialValue?: string;
  className?: string;
}

export const Input: FC<InputProps> = ({
  placeholder,
  onChange,
  initialValue,
  className,
}) => {
  return (
    <div className={styles.group}>
      <img className={styles.icon} src={searchIcon} alt="Search icon" />
      <input
        placeholder={placeholder}
        type="search"
        onChange={(e) => onChange(e.target.value)}
        defaultValue={initialValue}
        className={cn(styles.input, className)}
      />
    </div>
  );
};
