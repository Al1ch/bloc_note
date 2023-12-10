import React from "react";
import styles from "./SideBar.module.scss";
import NoteCard from "../NoteCard/NoteCard";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bloc notes </h1>
      <div className={styles.noteList}>
        <NoteCard title="Note 1" date="01/01/2021" />
        <NoteCard title="Note 1" date="01/01/2021" />
      </div>
    </div>
  );
};

export default SideBar;
