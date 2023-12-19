'use server'
import { updateNoteTable } from "@/lib/notes"

export const updateNote = async(noteId? : string, title? : string, content? : string) =>{
    await updateNoteTable(noteId, title, content);
}