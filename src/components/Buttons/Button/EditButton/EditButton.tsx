"use client";
import React, { useState } from "react";
import Button from "@/components/Buttons/Button/Button";
import { useRouter } from "next/navigation";

const EditButton = () => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(!isEditing);
    router.replace(`?isEditing=${!isEditing}`);
  };
  return (
    <Button size="md" backgroundColor="blue" onClick={handleClick}>
      Edit
    </Button>
  );
};

export default EditButton;
