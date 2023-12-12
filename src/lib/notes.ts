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
        const notes = await prisma.note.findMany();
        return notes;
    }
    catch(err){
        console.log(err);
    }
}