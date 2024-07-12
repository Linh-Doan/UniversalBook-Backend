const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const main = async () =>{
    const fiction = await prisma.genre.upsert({
        where: { genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608' },
        update: {},
        create: {
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            genre_name: 'fiction'
        }
    })
    const author1 = await prisma.author_group.upsert({
        where: { author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836' },
        update: {},
        create: {
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836'
        }
    })
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