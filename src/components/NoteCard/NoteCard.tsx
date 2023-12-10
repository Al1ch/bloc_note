import React from "react";
import styles from "./NoteCard.module.scss";

type Props = {
  title: string;
  date: string;
};

const NoteCard = ({ title, date }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.date}>{date}</p>
    </div>
  );
};

export default NoteCard;
