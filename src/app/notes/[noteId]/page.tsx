import React, { useState } from "react";
import styles from "./page.module.scss";
import { getNote } from "@/lib/notes";
import Note from "@/components/Note/Note";
import EditNote from "@/components/EditNote/EditNote";

export default async function NotesPage({
  params,
}: {
  readonly params: { readonly noteId: string };
}) {
  const note = await getNote(params.noteId);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return (
    // <div className={styles.container}>
    //   <Note {...note} />
    // </div>

    <EditNote {...note} noteId={params.noteId} />
  );
}
