import React, { useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import styles from "./Note.module.scss";
import prisma from "@/lib/prisma";
import Button from "@/components/Button/Button";

export default async function NotesPage({
  params,
}: {
  readonly params: { readonly userName: string };
}) {
  const note = await prisma.note.findUnique({
    where: {
      id: Number(params.userName),
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.notesContainer}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h1> Title</h1>
            <p className={styles.date}> Date</p>
          </div>
          <Button size="md" backgroundColor="blue">
            Edit
          </Button>
        </div>
        <div className={styles.content}>
          <p className={styles.text}> Content sEE YOUU SMILEEE smileee</p>
        </div>
      </div>
    </div>
  );
}
