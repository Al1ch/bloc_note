"use client";
import React, { useState } from "react";
import Button from "@/components/Buttons/Button/Button";
import { useRouter } from "next/navigation";
import { createNote } from "@/app/_action";

type Props = {
  title: string;
  content: string;
};

const CreateNoteButton = ({ title, content }: Props) => {
  const router = useRouter();

  const handleClick = async () => {
    const idNote = await createNote(title, content);
    router.replace(`/notes/${idNote}`);
  };
  return (
    <Button size="md" backgroundColor="blue" onClick={handleClick}>
      Create
    </Button>
  );
};

export default CreateNoteButton;
