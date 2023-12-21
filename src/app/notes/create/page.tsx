import React from "react";
import styles from "./page.module.scss";
import { getNote } from "@/lib/notes";
import Note from "@/components/Note/Note";
import EditNote from "@/components/NoteForm/NoteForm";
import NoteForm from "@/components/NoteForm/NoteForm";

export default async function CreateNotePage({
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

  return <NoteForm {...note} noteId={params.noteId as string} type="create" />;
}
