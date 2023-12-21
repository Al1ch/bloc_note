'use server'
import { updateNoteTable , addNote, getNotes} from "@/lib/notes"
import { revalidatePath } from "next/cache";

export const updateNote = async(noteId? : string, title? : string, content? : string) =>{
    await updateNoteTable(noteId, title, content);
    revalidatePath(`/notes/${noteId}`);

}


export const createNote = async(title: string, content : string) => {
    const note = await addNote (title, content);
    revalidatePath(`/notes/${note?.id}`);
    return note?.id;
}

export const getAllNotes = async() => {
    const notes = await getNotes();
    revalidatePath('/notes/2');
    return notes;
}