import prisma from './prisma';

export const getNote = async (noteId : string) => {
    try{
        const note = await prisma.note.findUnique({
        
            where: {
                id: Number(noteId),
            }
        });
        return note;
    }
    catch(err){
        console.log(err);
    }

}

export const getNotes = async () => {
    try{
        const notes = await prisma.note.findMany({
            orderBy:{
                id: 'desc',
            }
        });
        return notes;
    }
    catch(err){
        console.log(err);
    }
}

export const updateNoteTable = async (noteId?: string, title? : string, content? : string) => {
    try{
         await prisma.note.update({
            where: {
                id: Number(noteId),
            },
            data: {
                title: title,
                content: content,
            }
        });
    }
    catch(err){
        console.log(err);
    }
}

export const addNote = async(title: string, content : string) => {
    try{
        const note = await prisma.note.create({
            data: {
                title: title,
                content: content,
            }
        });

        return note;
        
    }
    catch(err){
        console.log(err);
    }
}
