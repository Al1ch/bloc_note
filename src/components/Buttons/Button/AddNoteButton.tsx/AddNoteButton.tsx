"use client";
import React from "react";
import Button from "../Button";
import AddIcon from "@/assets/vectors/add.svg";
import { useRouter } from "next/navigation";
import { createNote } from "@/app/_action";

type Props = {
  title: string;
  content: string;
};

const AddNoteButton = ({ title, content }: Props) => {
  const router = useRouter();

  const handleClick = async () => {
    await createNote(title, content);
    router.replace("/notes/create");
  };
  return (
    <Button backgroundColor="blue" size="lg" onClick={handleClick}>
      <AddIcon />
      Add Note
    </Button>
  );
};

export default AddNoteButton;
