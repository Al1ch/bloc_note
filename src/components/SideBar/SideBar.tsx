import React, { useEffect } from "react";
import styles from "./SideBar.module.scss";
import NoteCard from "../NoteCard/NoteCard";
import { getNotes } from "@/lib/notes";

const SideBar = async () => {
  const notes = await getNotes();

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bloc notes </h1>
      <div className={styles.noteList}>
        {notes?.map((note) => (
          <NoteCard
            key={note.id}
            content={note.content}
            id={note.id}
            title={note.title}
            date={note.createdAt.toLocaleDateString("en-GB", options)}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
