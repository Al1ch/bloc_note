"use client";
import React from "react";
import Button from "../Button";
import AddIcon from "@/assets/vectors/add.svg";
import { useRouter } from "next/navigation";

const AddNoteButton = () => {
  const router = useRouter();

  const handleClick = async () => {
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
