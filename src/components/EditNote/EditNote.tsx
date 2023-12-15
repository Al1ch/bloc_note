"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./EditNote.module.scss";
import { updateNote } from "@/app/_action";
import EditButton from "../EditButton/EditButton";

type Props = {
  title?: string;
  content?: string;
  createdAt?: Date;
  noteId: string;
};

const EditNote = ({ title, content, createdAt, noteId }: Props) => {
  const [titleState, setTitle] = useState(title);
  const [contentState, setContent] = useState(content);
  const formRef = useRef<HTMLFormElement>(null);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    adjustTextAreaHeight();
  }, [textAreaRef]);

  const adjustTextAreaHeight = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto"; // Réinitialise la hauteur à la valeur par défaut pour recalculer la hauteur réelle.
      textArea.style.height = textArea.scrollHeight + "px"; // Ajuste la hauteur en fonction du contenu réel.
    }
  };

  const handdleChangePost = async (data: FormData) => {
    const content = data.get("content")?.toString();
    const titleContent = data.get("titleContent")?.toString();
    console.log("content", content);
    await updateNote(noteId, titleContent, content);
  };

  return (
    <div className={styles.editPageContainer}>
      <form
        ref={formRef}
        className={styles.container}
        action={handdleChangePost}
      >
        <input
          type="text"
          placeholder="Title"
          value={titleState}
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
          name="titleContent"
        />
        <textarea
          ref={textAreaRef}
          placeholder="Content"
          value={contentState}
          className={styles.contentContainer}
          onChange={(e) => setContent(e.target.value)}
          name="content"
        />
        <EditButton />
      </form>
      <div className={styles.previewContainer}>
        <div className={styles.notePreview}></div>
      </div>
    </div>
  );
};

export default EditNote;