import React from "react";
import prisma from "@/lib/prisma";
import Button from "@/components/Buttons/Button/Button";
import styles from "./Note.module.scss";

type Props = {
  title?: string;
  content?: string;
  createdAt?: Date;
};

const Note = ({ title, content, createdAt }: Props) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return (
    <div className={styles.notesContainer}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1> {title}</h1>
          <p className={styles.date}>
            {" "}
            {createdAt?.toLocaleDateString("en-GB", options)}{" "}
          </p>
        </div>
        <Button size="md" backgroundColor="blue">
          Edit
        </Button>
      </div>
      <div className={styles.content}>
        <p className={styles.text}> {content}</p>
      </div>
    </div>
  );
};

export default Note;
