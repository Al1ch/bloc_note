"use client";
import React from "react";
import styles from "./SaveEditButton.module.scss";
import Button from "@/components/Buttons/Button/Button";
import { updateNote } from "@/app/_action";
import Tick from "@/assets/vectors/tick.svg";
import { useRouter } from "next/navigation";

type Props = {
  title?: string;
  content?: string;
  noteId?: string;
};

const SaveEditButton = ({ title, content, noteId }: Props) => {
  const router = useRouter();

  const handleSavePost = async () => {
    await updateNote(noteId, title, content);
    router.replace(`/notes/${noteId}`);
  };

  return (
    <span className={styles.button}>
      <Button
        backgroundColor="blue"
        size="md"
        type="submit"
        borderRadius="circle"
        onClick={() => handleSavePost()}
      >
        <span className={styles.buttonContent}>
          <Tick className={styles.vector} /> DONE
        </span>
      </Button>
    </span>
  );
};

export default SaveEditButton;
