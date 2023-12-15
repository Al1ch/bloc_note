import React from "react";
import styles from "./EditButton.module.scss";
import Button from "@/components/Buttons/Button/Button";
import { updateNote } from "@/app/_action";

type Props = {
  title?: string;
  content?: string;
  noteId?: string;
};

const EditButton = ({ title, content, noteId }: Props) => {
  const handleSavePost = async () => {
    console.log("CCC");
    console.log("content", content);
    await updateNote(noteId, title, content);
  };

  return (
    <Button
      backgroundColor="blue"
      size="md"
      type="submit"
      onClick={() => handleSavePost()}
    >
      Edit
    </Button>
  );
};

export default EditButton;
