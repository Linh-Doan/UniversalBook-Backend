const { PrismaClient } = require('@prisma/client');
require('../lib/prisma');
const prisma = new PrismaClient();

const main = async () => {
    const fiction = await prisma.genre.upsert({
        where: { genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608' },
        update: {},
        create: {
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            genre_name: 'Fiction',
            genre_image_url: '/img/genre_fiction.png',
            genre_rating: 4
        }
    });

    const fantasy = await prisma.genre.upsert({
        where: { genre_id: '30b8e11f-c632-472a-b58a-5dd3c31ab018' },
        update: {},
        create: {
            genre_id: '30b8e11f-c632-472a-b58a-5dd3c31ab018',
            genre_name: 'Fantasy',
            genre_image_url: '/img/genre_fantasy.png',
            genre_rating: 5
        }
    });

    const mystery = await prisma.genre.upsert({
        where: { genre_id: 'c2b8e21f-9c1d-4422-aeca-f3d3b18f4583' },
        update: {},
        create: {
            genre_id: 'c2b8e21f-9c1d-4422-aeca-f3d3b18f4583',
            genre_name: 'Mystery',
            genre_image_url: '/img/genre_mystery.png',
            genre_rating: 3
        }
    });

    const thriller = await prisma.genre.upsert({
        where: { genre_id: 'ac1d213b-9d2b-473e-b1c2-a11f1e9b2423' },
        update: {},
        create: {
            genre_id: 'ac1d213b-9d2b-473e-b1c2-a11f1e9b2423',
            genre_name: 'Thriller',
            genre_image_url: '/img/genre_thriller.png',
            genre_rating: 4
        }
    });

    const romance = await prisma.genre.upsert({
        where: { genre_id: '51d3138e-1d3b-41c2-b2c1-9f8d7e9c2434' },
        update: {},
        create: {
            genre_id: '51d3138e-1d3b-41c2-b2c1-9f8d7e9c2434',
            genre_name: 'Romance',
            genre_image_url: '/img/genre_romance.png',
            genre_rating: 5
        }
    });

    const sciFi = await prisma.genre.upsert({
        where: { genre_id: '7a3e421f-9c9b-492a-a23b-c3d3b19f4612' },
        update: {},
        create: {
            genre_id: '7a3e421f-9c9b-492a-a23b-c3d3b19f4612',
            genre_name: 'Science Fiction',
            genre_image_url: '/img/genre_scifi.png',
            genre_rating: 5
        }
    });

    const horror = await prisma.genre.upsert({
        where: { genre_id: 'db4e921c-1c3e-43c2-b3c2-c5f8f9e9d234' },
        update: {},
        create: {
            genre_id: 'db4e921c-1c3e-43c2-b3c2-c5f8f9e9d234',
            genre_name: 'Horror',
            genre_image_url: '/img/genre_horror.png',
            genre_rating: 3
        }
    });

    const historical = await prisma.genre.upsert({
        where: { genre_id: 'e2b3e31b-9b2e-4b2c-a8d2-b5e3c91c2145' },
        update: {},
        create: {
            genre_id: 'e2b3e31b-9b2e-4b2c-a8d2-b5e3c91c2145',
            genre_name: 'Historical',
            genre_image_url: '/img/genre_historical.png',
            genre_rating: 4
        }
    });

    const author1 = await prisma.author_group.upsert({
        where: { author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836' },
        update: {},
        create: {
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836'
        }
    });

    const adminRole = await prisma.user_role.upsert({
        where: { user_role_id: "2e6f32c1-43b0-49df-8181-52ad541cd23f" },
        update: {},
        create: {
            user_role_id: "2e6f32c1-43b0-49df-8181-52ad541cd23f",
            name: "admin"
        }
    });

    const account1 = await prisma.account.upsert({
        where: { account_id: "3c23729a-820b-4cfe-9b29-70132bac0c74" },
        update: {},
        create: {
            account_id: "3c23729a-820b-4cfe-9b29-70132bac0c74",
            email: "test1@gmail.com",
            account_name: "test account 1",
            account_password: "12345",
            account_language: "ENG",
            user_role_id: adminRole.user_role_id,
            account_author_group_member: { create: [{ author_group_id: author1.author_group_id }] }
        }
    });

    const account2 = await prisma.account.upsert({
        where: { account_id: "5fc61a7c-f196-417e-9bc7-61132b15cd59" },
        update: {},
        create: {
            account_id: "5fc61a7c-f196-417e-9bc7-61132b15cd59",
            email: "test2@gmail.com",
            account_name: "test account 2",
            account_password: "12345",
            account_language: "ENG",
            user_role_id: adminRole.user_role_id,
            account_author_group_member: { create: [{ author_group_id: author1.author_group_id }] }
        }
    });

    const book1 = await prisma.book.upsert({
        where: { book_id: '7f1de43d-91d5-4cb9-8e42-066673bdc238' }, // Add where clause
        update: {}, // Empty update clause
        create: {
            book_id: '7f1de43d-91d5-4cb9-8e42-066673bdc238',
            book_name: 'The Luminous Veil',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book1.jpeg',
            rating: 24,
            rating_count: 3,
            summary_text: 'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.'
        }
    });

    const book2 = await prisma.book.upsert({
        where: { book_id: '0aa0b2ff-a025-47f0-ac47-12864b1d4c35' }, // Add where clause
        update: {}, // Empty update clause
        create: {
            book_id: '0aa0b2ff-a025-47f0-ac47-12864b1d4c35',
            book_name: 'Songs of the Starbound',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '30b8e11f-c632-472a-b58a-5dd3c31ab018',
            book_image_url: '/img/book2.jpeg',
            rating: 28,
            rating_count: 3,
            summary_text: 'In a galaxy where music controls the stars, a rogue bard must harness this cosmic symphony to prevent an interstellar war. His melodies hold the key to unity or destruction'
        }
    });

    const book3 = await prisma.book.upsert({
        where: { book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708' }, // Add where clause
        update: {}, // Empty update clause
        create: {
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
            book_name: 'The Midnight Tapestry',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: 'c2b8e21f-9c1d-4422-aeca-f3d3b18f4583',
            book_image_url: '/img/book3.jpeg',
            rating: 30,
            rating_count: 3,
            summary_text: 'In a realm woven from dreams, a weaver\'s creation goes rogue, threatening the fabric of reality. She must navigate the dreamscape to reclaim control and restore balance.'
        }
    });

    const book4 = await prisma.book.upsert({
        where: { book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4' }, // Add where clause
        update: {}, // Empty update clause
        create: {
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
            book_name: 'Harbinger of the Crimson Dawn',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: 'ac1d213b-9d2b-473e-b1c2-a11f1e9b2423',
            book_image_url: '/img/book4.jpeg',       
            created_on:  new Date(2023, 5, 17),
            summary_text: 'An ancient prophecy foretells the rise of a hero marked by a crimson sun. A reluctant warrior must embrace his destiny to save his kingdom from an impending apocalypse.'
        }
    });

    const book5 = await prisma.book.upsert({
        where: { book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d' }, // Add where clause
        update: {}, // Empty update clause
        create: {
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
            book_name: 'Echoes of the Crystal Cavern',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '51d3138e-1d3b-41c2-b2c1-9f8d7e9c2434',
            book_image_url: '/img/book5.jpeg',
            created_on:  new Date(2024, 3, 12),
            summary_text: 'Deep within a mystical cavern, crystalline echoes reveal forgotten histories and hidden dangers. A brave explorer uncovers a secret that could reshape her world\'s future.'
        }
    });

    const book6 = await prisma.book.upsert({
        where: { book_id: '7f1de43d-91d5-4cb9-8e42-066673bdc238' }, // Add where clause
        update: {},
        create: {
            book_id: '7f1de43d-91d5-4cb9-8e42-066673bdc238',
            book_name: 'The Luminous Veil',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '30b8e11f-c632-472a-b58a-5dd3c31ab018',
            book_image_url: '/img/book1.jpeg',
            summary_text:
            'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.'
        }
    });

    const book7 = await prisma.book.upsert({
        where: { book_id: '0aa0b2ff-a025-47f0-ac47-12864b1d4c35' }, // Add where clause
        update: {},
        create: {
            book_id: '0aa0b2ff-a025-47f0-ac47-12864b1d4c35',
            book_name: 'Songs of the Starbound',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '30b8e11f-c632-472a-b58a-5dd3c31ab018',
            book_image_url: '/img/book2.jpeg',
            summary_text:
            'In a galaxy where music controls the stars, a rogue bard must harness this cosmic symphony to prevent an interstellar war. His melodies hold the key to unity or destruction.'
        }
    });

    const book8 = await prisma.book.upsert({
        where: { book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708' }, // Add where clause
        update: {},
        create: {
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
            book_name: 'The Midnight Tapestry',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '30b8e11f-c632-472a-b58a-5dd3c31ab018',
            book_image_url: '/img/book3.jpeg',
            summary_text:
            "In a realm woven from dreams, a weaver's creation goes rogue, threatening the fabric of reality. She must navigate the dreamscape to reclaim control and restore balance."
        }
    });

    const book9 = await prisma.book.upsert({
        where: { book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4' }, // Add where clause
        update: {},
        create: {
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
            book_name: 'Harbinger of the Crimson Dawn',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '30b8e11f-c632-472a-b58a-5dd3c31ab018',
            book_image_url: '/img/book4.jpeg',
            summary_text:
            'An ancient prophecy foretells the rise of a hero marked by a crimson sun. A reluctant warrior must embrace his destiny to save his kingdom from an impending apocalypse.'
        }
    });

    const book10 = await prisma.book.upsert({
        where: { book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d' }, // Add where clause
        update: {},
        create: {
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
            book_name: 'Echoes of the Crystal Cavern',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '30b8e11f-c632-472a-b58a-5dd3c31ab018',
            book_image_url: '/img/book5.jpeg',
            summary_text:
            "Deep within a mystical cavern, crystalline echoes reveal forgotten histories and hidden dangers. A brave explorer uncovers a secret that could reshape her world's future."
        }
    });
    const chapter1 = await prisma.chapter.create({
        data: {
            chapter_sequence: 1,
            chapter_content: 'This is chapter 1 contents of Luminous Veil.',
            chapter_rating: 4,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date('2024-08-05'),
            book_id: '7f1de43d-91d5-4cb9-8e42-066673bdc238',
        }
    });

    const chapter2 = await prisma.chapter.create({
        data: {
            chapter_sequence: 1,
            chapter_content: 'This is chapter 1 contents of Songs of the Starbound.',
            chapter_rating: 3,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date('2024-08-05'),
            book_id: '0aa0b2ff-a025-47f0-ac47-12864b1d4c35',
        }
    });

    const chapter3 = await prisma.chapter.create({
        data: {
            chapter_sequence: 1,
            chapter_content: 'This is chapter 1 contents of The Midnight Tapestry.',
            chapter_rating: 5,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date('2024-08-05'),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        }
    });

    const chapter4 = await prisma.chapter.create({
        data: {
            chapter_sequence: 1,
            chapter_content: 'This is chapter 1 contents of Harbinger of the Crimson Dawn.',
            chapter_rating: 4,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date('2024-08-05'),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        }
    });

    const chapter5 = await prisma.chapter.create({
        data: {
            chapter_sequence: 1,
            chapter_content: 'This is chapter 1 contents of Echoes of the Crystal Cavern.',
            chapter_rating: 4,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date('2024-08-05'),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        }
    });

    const accountBookFollow1 = await prisma.account_book_follow.upsert({
        where: {
            account_id_book_id: {
                account_id: "3c23729a-820b-4cfe-9b29-70132bac0c74",
                book_id: "fa3b26b3-1250-432c-8a17-f1593a256708"
            }
        },
        update: {},
        create: {
            account_id: "3c23729a-820b-4cfe-9b29-70132bac0c74",
            book_id: "fa3b26b3-1250-432c-8a17-f1593a256708" 
        }
    });
};

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });