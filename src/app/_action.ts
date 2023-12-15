'use server'
import { updateNoteTable } from "@/lib/notes"

export const updateNote = async(noteId? : string, title? : string, content? : string) =>{
    console.log("CA RENTRE ")
    await updateNoteTable(noteId, title, content);
}