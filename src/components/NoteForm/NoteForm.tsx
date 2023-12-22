"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./NoteForm.module.scss";
import SaveEditButton from "@/components/Buttons/Button/SaveEditButton/SaveEditButton";
import Button from "../Buttons/Button/Button";
import NoteWithMarkdown from "../NoteWithMarkdown/NoteWithMarkdown";
import AddNoteButton from "../Buttons/Button/AddNoteButton.tsx/AddNoteButton";
import CreateNoteButton from "../CreateNote/CreateNoteButton";

type Props = {
  title?: string;
  content?: string;
  createdAt?: Date;
  noteId?: string;
  type: "edit" | "create";
};

const NoteForm = ({ title, content, createdAt, noteId, type }: Props) => {
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
        {type === "edit" ? (
          <SaveEditButton
            title={titleState}
            content={contentState}
            noteId={noteId}
          />
        ) : (
          <CreateNoteButton
            title={titleState as string}
            content={contentState as string}
          />
        )}

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
            <h2 className={styles.title}>{titleState}</h2>
            <NoteWithMarkdown text={contentState as string} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
