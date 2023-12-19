import React from "react";
import styles from "./NoteCard.module.scss";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  key: number;
  id: number;
};

const NoteCard = ({ title, date, key, id }: Props) => {
  return (
    <Link href={`/notes/${id}`} className={styles.link}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{date}</p>
      </div>
    </Link>
  );
};

export default NoteCard;
