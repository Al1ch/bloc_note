import React from "react";
import styles from "./EditButton.module.scss";
import Button from "@/components/Buttons/Button/Button";

const EditButton = () => {
  return (
    <Button
      backgroundColor="blue"
      size="md"
      type="submit"
      onClick={() => console.log("cc")}
    >
      Edit
    </Button>
  );
};

export default EditButton;
