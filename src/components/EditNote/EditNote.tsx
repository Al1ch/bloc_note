"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./EditNote.module.scss";
import { updateNote } from "@/app/_action";
import SaveEditButton from "@/components/Buttons/Button/SaveEditButton/SaveEditButton";
import Button from "../Buttons/Button/Button";

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

  // useEffect(() => {
  //   adjustTextAreaHeight();
  // }, [textAreaRef]);

  // const adjustTextAreaHeight = () => {
  //   const textArea = textAreaRef.current;
  //   if (textArea) {
  //     textArea.style.height = "auto"; // Réinitialise la hauteur à la valeur par défaut pour recalculer la hauteur réelle.
  //     textArea.style.height = textArea.scrollHeight + "px"; // Ajuste la hauteur en fonction du contenu réel.
  //   }
  // };

  return (
    <div className={styles.editPageContainer}>
      <form
        ref={formRef}
        className={styles.container}
        onSubmit={(e) => {
          e.preventDefault();
        }}
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
      </form>
      <div className={styles.previewContainer}>
        <SaveEditButton
          title={titleState}
          content={contentState}
          noteId={noteId}
        />
        <div className={styles.notePreview}>
          <Button
            backgroundColor="lightBlue"
            size="md"
            type="submit"
            borderRadius="circle"
          >
            <span className={styles.buttonText}>PREVIEW</span>
          </Button>
          <div className={styles.notePreviewContent}>
            <h1>{titleState}</h1>
            <p>{contentState}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
