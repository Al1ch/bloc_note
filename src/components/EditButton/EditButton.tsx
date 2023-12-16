import React from "react";
import styles from "./EditButton.module.scss";
import Button from "@/components/Buttons/Button/Button";
import { updateNote } from "@/app/_action";
import Tick from "@/assets/vectors/tick.svg";

type Props = {
  title?: string;
  content?: string;
  noteId?: string;
};

const EditButton = ({ title, content, noteId }: Props) => {
  const handleSavePost = async () => {
    await updateNote(noteId, title, content);
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

export default EditButton;
