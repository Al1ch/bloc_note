import React from "react";
import styles from "./page.module.scss";
import { getNote } from "@/lib/notes";
import Note from "@/components/Note/Note";
import EditNote from "@/components/NoteForm/NoteForm";
import NoteForm from "@/components/NoteForm/NoteForm";

export default async function NotesPage({
  params,
  searchParams,
}: {
  readonly params: {
    readonly noteId: string | string | string[] | undefined;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const note = await getNote(params.noteId as string);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return (
    <>
      {searchParams.isEditing === "true" ? (
        <NoteForm
          {...note}
          noteId={params.noteId as string}
          type="edit"
        ></NoteForm>
      ) : (
        <div className={styles.container}>
          <Note {...note} />
        </div>
      )}
    </>
  );
}
