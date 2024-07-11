import React from "react";
import cn from "classnames";
import styles from "./Card.module.scss";

interface CardProps {
  title?: string;
  text?: string;
  handleClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  text,
  handleClick = () => {},
  className,
}) => {
  if (!title && !text) {
    return null;
  }

  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.cardDetails}>
        <p className={styles.textTitle}>{title}</p>
        <p className={styles.textBody}>{text}</p>
      </div>
      <button className={styles.cardButton} onClick={handleClick}>
        More info
      </button>
    </div>
  );
};
