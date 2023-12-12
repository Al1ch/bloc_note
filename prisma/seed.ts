import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const note  = await prisma.note.create({
    data :{
      id: 1,
      content: 'alice@prisma.io',
      title: 'Alice',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    }
      
  )

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })