const prisma = require('../lib/prisma');

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

    const lifeAdvice = await prisma.genre.upsert({
        where: { genre_id: 'e2b3e31b-9b2e-4b2c-a8d2-b5e3c91c2188' },
        update: {},
        create: {
            genre_id: 'e2b3e31b-9b2e-4b2c-a8d2-b5e3c91c2188',
            genre_name: 'Life advice',
            genre_image_url: '/img/genre_life_advice.png',
            genre_rating: 9
        }
    });

    const spirituality = await prisma.genre.upsert({
        where: { genre_id: 'f1d3e1b4-8a1e-46b9-bdf9-d6a1b36e5319' },
        update: {},
        create: {
            genre_id: 'f1d3e1b4-8a1e-46b9-bdf9-d6a1b36e5319',
            genre_name: 'Spirituality',
            genre_image_url: '/img/spirituality.png',
            genre_rating: 7
        }
    });

    const trueCrime = await prisma.genre.upsert({
        where: { genre_id: '9f2e5c68-6b57-498d-bd13-fb1e872bb682' },
        update: {},
        create: {
            genre_id: '9f2e5c68-6b57-498d-bd13-fb1e872bb682',
            genre_name: 'True Crime',
            genre_image_url: '/img/true_crime.png',
            genre_rating: 9
        }
    });

    const adventure = await prisma.genre.upsert({
        where: { genre_id: 'f2a9f2b8-d7d9-4b6d-91e9-5d4e2a7d5df5' },
        update: {},
        create: {
            genre_id: 'f2a9f2b8-d7d9-4b6d-91e9-5d4e2a7d5df5',
            genre_name: 'Adventure',
            genre_image_url: '/img/adventure.png',
            genre_rating: 5
        }
    });

    const psychologicalThriller = await prisma.genre.upsert({
        where: { genre_id: 'c7d4f9e1-024a-4b72-812b-6c43b2b4f392' },
        update: {},
        create: {
            genre_id: 'c7d4f9e1-024a-4b72-812b-6c43b2b4f392',
            genre_name: 'Psychological Thriller',
            genre_image_url: '/img/psychological_thriller.png',
            genre_rating: 5
        }
    });

    const biography = await prisma.genre.upsert({
        where: { genre_id: 'd2b5b7b7-3b1a-4d88-85b5-fc8a257a6d93' },
        update: {},
        create: {
            genre_id: 'd2b5b7b7-3b1a-4d88-85b5-fc8a257a6d93',
            genre_name: 'Biography',
            genre_image_url: '/img/biography.png',
            genre_rating: 8
        }
    });

    const historicalFiction = await prisma.genre.upsert({
        where: { genre_id: '3e5c81f9-71ea-4d84-a6e8-2b4f77f6d4b3' },
        update: {},
        create: {
            genre_id: '3e5c81f9-71ea-4d84-a6e8-2b4f77f6d4b3',
            genre_name: 'Historical Fiction',
            genre_image_url: '/img/historical_fiction.png',
            genre_rating: 6
        }
    });

    const selfHelp = await prisma.genre.upsert({
        where: { genre_id: '2b3d5c8b-1d2e-4e75-9957-3c9d2e9cbb34' },
        update: {},
        create: {
            genre_id: '2b3d5c8b-1d2e-4e75-9957-3c9d2e9cbb34',
            genre_name: 'Self-Help',
            genre_image_url: '/img/self_help.png',
            genre_rating: 8
        }
    });

    const epicFantasy = await prisma.genre.upsert({
        where: { genre_id: '7c4a51f2-4b6e-47ad-96d1-d5a2b9c74824' },
        update: {},
        create: {
            genre_id: '7c4a51f2-4b6e-47ad-96d1-d5a2b9c74824',
            genre_name: 'Epic Fantasy',
            genre_image_url: '/img/epic_fantasy.png',
            genre_rating: 9
        }
    });

    const dystopian = await prisma.genre.upsert({
        where: { genre_id: '5d3b6e91-7851-4f5f-9b24-0d5a61a8c43e' },
        update: {},
        create: {
            genre_id: '5d3b6e91-7851-4f5f-9b24-0d5a61a8c43e',
            genre_name: 'Dystopian',
            genre_image_url: '/img/dystopian.png',
            genre_rating: 7
        }
    });
    
    const scienceNonFiction = await prisma.genre.upsert({
        where: { genre_id: 'd4f67e39-5bc3-487c-9731-e0b9dbd6a340' },
        update: {},
        create: {
            genre_id: 'd4f67e39-5bc3-487c-9731-e0b9dbd6a340',
            genre_name: 'Science Non-Fiction',
            genre_image_url: '/img/science_nonfiction.png',
            genre_rating: 9
        }
    });

    const poetry = await prisma.genre.upsert({
        where: { genre_id: 'e7c8f521-9b6c-4767-8a54-76d1e65b3f0f' },
        update: {},
        create: {
            genre_id: 'e7c8f521-9b6c-4767-8a54-76d1e65b3f0f',
            genre_name: 'Poetry',
            genre_image_url: '/img/poetry.png',
            genre_rating: 8
        }
    });
    
    const classicalLiterature = await prisma.genre.upsert({
        where: { genre_id: 'd8a4b6d3-6e7a-4fba-b7e2-c7a2a9e4f91e' },
        update: {},
        create: {
            genre_id: 'd8a4b6d3-6e7a-4fba-b7e2-c7a2a9e4f91e',
            genre_name: 'Classical Literature',
            genre_image_url: '/img/classical_literature.png',
            genre_rating: 8
        }
    });
    
    const philosophy = await prisma.genre.upsert({
        where: { genre_id: 'a9f5c7e8-1d2b-4f1e-b5c7-9a8b6f9c72d5' },
        update: {},
        create: {
            genre_id: 'a9f5c7e8-1d2b-4f1e-b5c7-9a8b6f9c72d5',
            genre_name: 'Philosophy',
            genre_image_url: '/img/philosophy.png',
            genre_rating: 8
        }
    });

    const humanScience = await prisma.genre.upsert({
        where: { genre_id: 'b2c6f5d9-3e8f-4a57-a9d2-4b8d3f6e1f23' },
        update: {},
        create: {
            genre_id: 'b2c6f5d9-3e8f-4a57-a9d2-4b8d3f6e1f23',
            genre_name: 'Human Science',
            genre_image_url: '/img/human_science.png',
            genre_rating: 9
        }
    });
    
    const adminRole = await prisma.user_role.upsert({
        where: {user_role_id: "2e6f32c1-43b0-49df-8181-52ad541cd23f"},
        update: {},
        create: {
            user_role_id: "2e6f32c1-43b0-49df-8181-52ad541cd23f",
            name: "admin"
        }
    });

    const userRole = await prisma.user_role.upsert({
        where: {user_role_id: "f45e6a3a-1726-4527-8c4c-f4913f291e37"},
        update: {},
        create: {
            user_role_id: "f45e6a3a-1726-4527-8c4c-f4913f291e37",
            name: "user"
        }
    });

    const english = await prisma.language.upsert({
        where: {language_id: 1},
        update: {},
        create: {
            language_id: 1,
            language_name: "English"
        }
    });
    
    const author1 = await prisma.author_group.upsert({
        where: {author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836'},
        update: {},
        create: {
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            author_group_name: 'Inkwell Society',
            author_group_image_url: '/img/default-author-group.jpeg'
        }
    });

    const author2 = await prisma.author_group.upsert({
        where: {author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f42'},
        update: {},
        create: {
            author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f42',
            author_group_name: 'Writers Circle',
            author_group_image_url: '/img/default-author-group.jpeg'
        }
    });

    const author3 = await prisma.author_group.upsert({
        where: {author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f45'},
        update: {},
        create: {
            author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f45',
            author_group_name: 'test account 1 author',
            author_group_is_single: true
        }
    });

    const author4 = await prisma.author_group.upsert({
        where: {author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f46'},
        update: {},
        create: {
            author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f46',
            author_group_name: 'test account 2 author',
            author_group_is_single: true
        }
    });

    const account1 = await prisma.account.upsert({
        where: {account_id: "3c23729a-820b-4cfe-9b29-70132bac0c74"},
        update: {},
        create: {
            account_id: "3c23729a-820b-4cfe-9b29-70132bac0c74",
            email: "test1@gmail.com",
            account_name: "test account 1",
            account_password: "12345",
            user_role_id: adminRole.user_role_id,
            account_author_group_member: {
                create: [
                    {author_group_id: author1.author_group_id}, 
                    {author_group_id: author2.author_group_id},
                    {author_group_id: author3.author_group_id}
                ]
            }
        }
    });


    const account2 = await prisma.account.upsert({
        where: {account_id: "5fc61a7c-f196-417e-9bc7-61132b15cd59"},
        update: {},
        create: {
            account_id: "5fc61a7c-f196-417e-9bc7-61132b15cd59",
            email: "test2@gmail.com",
            account_name: "test account 2",
            account_password: "12345",
            account_author_group_member: {create: [{author_group_id: author1.author_group_id}, {author_group_id: author4.author_group_id}]}
        }
    });

    //Chapter contents
    const chapterContent1 = {
        chapter_name: 'Chapter 1: The Call of the Veil',
        chapter_sequence: 1,
        chapter_content: 'In the quiet village of Elowen, the young sorceress Elara has always felt a strange connection to the nearby Enchanted Woods. Whispers from her grandmother told of a mysterious Luminous Veil deep within the forest, separating the human world from a forgotten realm. One fateful autumn evening, driven by curiosity and an unshakable yearning, Elara sets off to uncover the truth behind the tales.',
        chapter_rating: 4,
        chapter_image_url: '/img/book1.jpeg',
        created_on: new Date(),
    }
    const chapterContent2 = {
        chapter_name: 'Chapter 2: Crossing the Threshold',
        chapter_sequence: 2,
        chapter_content: 'The forest grew denser, the air thick with ancient magic. Elara’s heartbeat quickened as the light began to shift, glowing brighter with each step. Finally, she arrived at the shimmering curtain of light — the Luminous Veil. With trembling hands, she touched the veil, and the world around her dissolved into a cascade of colors. She was no longer in the realm of men, but in a place where dreams and nightmares intertwined.',
        chapter_rating: 3,
        chapter_image_url: '/img/book1.jpeg',
        created_on: new Date(),
    }
    const chapterContent3 = {
        chapter_name: 'Chapter 3: Into the Realm of Light',
        chapter_sequence: 3,
        chapter_content: 'Elara found herself in a world of breathtaking beauty, where the sky shimmered with shades of gold and lavender, and the trees whispered secrets from long-forgotten ages. But something was wrong. Shadows lurked at the edges of her vision, and a strange presence seemed to be watching her. Her journey through the Realm of Light had only just begun, and already the dangers were closing in.',
        chapter_rating: 4,
        chapter_image_url: '/img/book1.jpeg',
        created_on: new Date(),
    }
    const chapterContent4 = {
        chapter_name: 'Chapter 4: The Guardian of the Veil',
        chapter_sequence: 4,
        chapter_content: 'As Elara ventured deeper, she encountered the Guardian of the Veil, a towering figure cloaked in robes of light. The Guardian spoke in riddles, warning her of the perils that lay ahead and the price she would have to pay for crossing into this realm. Elara, determined to find the truth, vowed to continue, though the weight of the Guardian’s words hung heavy in her heart.',
        chapter_rating: 5,
        chapter_image_url: '/img/book1.jpeg',
        created_on: new Date(),
    }
    const chapterContent5 = {
        chapter_name: 'Chapter 5: The Shadows Awaken',
        chapter_sequence: 5,
        chapter_content: 'Elara soon discovered that she was not alone. The shadows that had haunted her were more than just illusions. Dark creatures, born of forgotten nightmares, began to emerge from the edges of the veil, their eyes glowing with malice. Elara’s magic was tested as she fought to defend herself, but the shadows were relentless, and she knew that this was only the beginning.',
        chapter_rating: 4,
        chapter_image_url: '/img/book1.jpeg',
        created_on: new Date(),
    }

    const book1 = await prisma.book.create({
        data: {
            book_name: 'The Luminous Veil',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book1.jpeg',
            is_published: true,
            summary_text: 'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.'
        }
    });

    const personalBook1 = await prisma.book.create({
        data: {
            book_name: 'My personal book 1',
            author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f45',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book1.jpeg',
            summary_text: 'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.',
            is_published: true
        }
    });

    const personalBook2 = await prisma.book.create({
        data: {
            book_name: 'My personal draft 1',
            author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f45',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book1.jpeg',
            summary_text: 'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.'
        }
    });
    const book2 = await prisma.book.create({
        data: {
            book_name: 'Songs of the Starbound',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book2.jpeg',
            is_published: true,
            summary_text: 'In a galaxy where music controls the stars, a rogue bard must harness this cosmic symphony to prevent an interstellar war. His melodies hold the key to unity or destruction'
        }
    });
    const book3 = await prisma.book.create({
        data: {
            book_name: 'The Midnight Tapestry',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book3.jpeg',
            is_published: true,
            summary_text: 'In a realm woven from dreams, a weaver\'s creation goes rogue, threatening the fabric of reality. She must navigate the dreamscape to reclaim control and restore balance.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        }
    });
    const book4 = await prisma.book.create({
        data: {
            book_name: 'Harbinger of the Crimson Dawn',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book4.jpeg',
            is_published: true,
            created_on:  new Date(2023, 5, 17),
            summary_text: 'An ancient prophecy foretells the rise of a hero marked by a crimson sun. A reluctant warrior must embrace his destiny to save his kingdom from an impending apocalypse.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        }
    });
    const book5 = await prisma.book.create({
        data: {
            book_name: 'Echoes of the Crystal Cavern',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book5.jpeg',
            is_published: true,
            created_on:  new Date(2024, 3, 12),
            summary_text: 'Deep within a mystical cavern, crystalline echoes reveal forgotten histories and hidden dangers. A brave explorer uncovers a secret that could reshape her world\'s future.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        }
    });
    const book6 = await prisma.book.create({
        data: {
            book_name: 'The Forgotten Chronicles',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book6.jpeg',
            is_published: true,
            summary_text: 'Unearthed manuscripts recount the adventures of a long-lost civilization. A historian\'s obsession with these chronicles leads her on a perilous quest for truth and legacy.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        }
    });
    const book7 = await prisma.book.create({
        data: {
            book_name: 'The Silent Aurora',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book7.jpeg',
            is_published: true,
            summary_text: 'In a land where the aurora\'s colors dictate life and death, a mute painter discovers a way to communicate through her art. Her creations might be the key to ending a silent war.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        }
    });
    const book8 = await prisma.book.create({
        data: {
            book_name: 'Raven\'s Whisper',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book8.jpeg',
            is_published: true,
            created_on:  new Date(2023, 9, 12),
            summary_text: 'A mysterious raven guides a grieving knight to uncover a conspiracy against the throne. As whispers of rebellion grow louder, he must decide whom to trust in his quest for justice.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        }
    });
    const book9 = await prisma.book.create({
        data: {
            book_name: 'The Obsidian Key',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book9.jpeg',
            is_published: true,
            created_on:  new Date(2022, 3, 12),
            summary_text: 'An enchanted key made of obsidian unlocks doorways to parallel worlds. A young adventurer must navigate these realms to prevent a malevolent force from conquering them all.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        }
    });
    const book10 = await prisma.book.create({
        data: {
            book_name: 'Winds of the Eclipsed Realm',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book10.jpeg',
            is_published: true,
            created_on:  new Date(2024, 2, 12),
            summary_text: 'When an eternal eclipse shrouds her world, a daring aviator seeks the source of the darkness. She discovers ancient powers and must rally unlikely allies to bring back the light.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        }
    });
    const book11 = await prisma.book.create({
        data: {
            book_name: 'The Shattered Compass',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book11.jpeg',
            is_published: true,
            created_on:  new Date(2024, 5, 12),
            summary_text: 'A magical compass that once guided travelers to hidden treasures is shattered, scattering its pieces across the land. A determined treasure hunter embarks on a quest to reunite them.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        }
    });
    const book12 = await prisma.book.create({
        data: {
            book_name: 'Guardians of the Veiled Forest',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book12.jpeg',
            is_published: true,
            summary_text: 'In a forest cloaked in perpetual mist, guardians protect secrets of immense power. A curious outsider stumbles into their realm, triggering events that could either protect or destroy their world.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        }
    });
    const book13 = await prisma.book.create({
        data: {
            book_id: '7f1de43d-91d5-4cb9-8e42-066673bdc238',
            book_name: 'The Luminous Veil',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
        //   genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book1.jpeg',
            is_published: true,
            summary_text:
            'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        },
    });
        
    const book14 = await prisma.book.create({
        data: {
            book_id: '0aa0b2ff-a025-47f0-ac47-12864b1d4c35',
            book_name: 'Songs of the Starbound',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book2.jpeg',
            is_published: true,
            summary_text:
            'In a galaxy where music controls the stars, a rogue bard must harness this cosmic symphony to prevent an interstellar war. His melodies hold the key to unity or destruction.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        },
    });

    const book15 = await prisma.book.create({
        data: {
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
            book_name: 'The Midnight Tapestry',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book3.jpeg',
            is_published: true,
            summary_text:
            "In a realm woven from dreams, a weaver's creation goes rogue, threatening the fabric of reality. She must navigate the dreamscape to reclaim control and restore balance.",
        },
    });

    const book16 = await prisma.book.create({
        data: {
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
            book_name: 'Harbinger of the Crimson Dawn',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book4.jpeg',
            is_published: true,
            summary_text:
            'An ancient prophecy foretells the rise of a hero marked by a crimson sun. A reluctant warrior must embrace his destiny to save his kingdom from an impending apocalypse.',
        },
    });

    const book17 = await prisma.book.create({
        data: {
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
            book_name: 'Echoes of the Crystal Cavern',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book5.jpeg',
            is_published: true,
            summary_text:
            "Deep within a mystical cavern, crystalline echoes reveal forgotten histories and hidden dangers. A brave explorer uncovers a secret that could reshape her world's future.",
        },
    });
    
    const book18 = await prisma.book.create({
        data: {
            book_id: 'df3d40f0-efcd-4d16-b803-c5b0b31b767d',
            book_name: 'The Silent Predator',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            book_image_url: '/img/book13.jpg',
            is_published: true,
            summary_text: 'In the dead of night, a silent predator hunts down its prey in the shadows of a bustling metropolis. Detective Elena must piece together the clues before the predator strikes again.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        },
    });
    
    const book19 = await prisma.book.create({
        data: {
            book_id: 'df3d40f0-7acd-4d16-b803-c5b0b31b767d',
            book_name: 'Whispers in the Fog',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            book_image_url: '/img/book14.jpg',
            is_published: true,
            summary_text: 'A small town shrouded in fog holds deep secrets. When a young journalist starts investigating a series of unsolved disappearances, she uncovers a truth that’s darker than anyone imagined.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        },
    });
    
    const book20 = await prisma.book.create({
        data: {
            book_id: 'df3d40f0-1b2a-4d16-b803-c5b0b31b767d',
            book_name: 'Love Across the Divide',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            book_image_url: '/img/book15.jpg',
            is_published: true,
            summary_text: 'A forbidden romance blossoms between two people on opposite sides of a century-old feud. As tensions rise, they must fight for their love amidst the chaos of their divided world.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        },
    });
    
    const book21 = await prisma.book.create({
        data: {
            book_id: 'df3d40f0-3e21-4d16-b803-c5b0b31b767d',
            book_name: 'The Haunted Asylum',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            book_image_url: '/img/book16.jpg',
            is_published: true,
            summary_text: 'A group of paranormal investigators enters an abandoned asylum, but what they find is far worse than ghosts. As the walls close in, they must escape before becoming part of the asylum’s dark history.',
            chapter: {
                create: [chapterContent1, chapterContent2, chapterContent3, chapterContent4, chapterContent5]
            }
        },
    });
    
          
    const bookgenre1 =  await prisma.book_genre.upsert({
        where: {
            book_id_genre_id: {
                book_id: "7f1de43d-91d5-4cb9-8e42-066673bdc238",
                genre_id: "40e6215d-b5c6-4896-987c-f30f3678f608"
            }
        },
        update: {},
        create: {
            book_id: "7f1de43d-91d5-4cb9-8e42-066673bdc238",
            genre_id: "40e6215d-b5c6-4896-987c-f30f3678f608"
        }
        
    });
    const bookgenre2 =  await prisma.book_genre.upsert({
        where: {
            book_id_genre_id: {
                book_id: "7f1de43d-91d5-4cb9-8e42-066673bdc238",
                genre_id: "30b8e11f-c632-472a-b58a-5dd3c31ab018"
            }
        },
        update: {},
        create: {
            book_id: "7f1de43d-91d5-4cb9-8e42-066673bdc238",
            genre_id: "30b8e11f-c632-472a-b58a-5dd3c31ab018" 
        }
        
    });
    const bookgenre3 =  await prisma.book_genre.upsert({
        where: {
            book_id_genre_id: {
                book_id: "0aa0b2ff-a025-47f0-ac47-12864b1d4c35",
                genre_id: "40e6215d-b5c6-4896-987c-f30f3678f608"
            }
        },
        update: {},
        create: {
            book_id: "0aa0b2ff-a025-47f0-ac47-12864b1d4c35",
            genre_id: "40e6215d-b5c6-4896-987c-f30f3678f608"
        }
    });
    const bookgenre4 =  await prisma.book_genre.upsert({
        where: {
            book_id_genre_id: {
                book_id: "0aa0b2ff-a025-47f0-ac47-12864b1d4c35",
                genre_id: "30b8e11f-c632-472a-b58a-5dd3c31ab018"
            }
        },
        update: {},
        create: {
            book_id: "0aa0b2ff-a025-47f0-ac47-12864b1d4c35",
            genre_id: "30b8e11f-c632-472a-b58a-5dd3c31ab018"
        }
    });
    const bookgenre5 =  await prisma.book_genre.upsert({
        where: {
            book_id_genre_id: {
                book_id: "fa3b26b3-1250-432c-8a17-f1593a256708",
                genre_id: "30b8e11f-c632-472a-b58a-5dd3c31ab018"
            }
        },
        update: {},
        create: {
            book_id: "fa3b26b3-1250-432c-8a17-f1593a256708",
            genre_id: "30b8e11f-c632-472a-b58a-5dd3c31ab018"
        }
    });
    const bookgenre6 =  await prisma.book_genre.upsert({
        where: {
            book_id_genre_id: {
                book_id: "fa3b26b3-1250-432c-8a17-f1593a256708",
                genre_id: "30b8e11f-c632-472a-b58a-5dd3c31ab018"
            }
        },
        update: {},
        create: {
            book_id: "fa3b26b3-1250-432c-8a17-f1593a256708",
            genre_id: "30b8e11f-c632-472a-b58a-5dd3c31ab018"
        }
    });

    
    const bookgenre7 = await prisma.book_genre.upsert({
        where: {
            book_id_genre_id: {
                book_id: book18.book_id,
                genre_id: 'ac1d213b-9d2b-473e-b1c2-a11f1e9b2423'   
            }
        },
        update: {},
        create: {
            book_id: book18.book_id,
            genre_id: 'ac1d213b-9d2b-473e-b1c2-a11f1e9b2423'
        }
    });
    
    const bookgenre8 = await prisma.book_genre.upsert({
        where: {
            book_id_genre_id: {
                book_id: book19.book_id,
                genre_id: 'c2b8e21f-9c1d-4422-aeca-f3d3b18f4583'  
            }
        },
        update: {},
        create: {
            book_id: book19.book_id,
            genre_id: 'c2b8e21f-9c1d-4422-aeca-f3d3b18f4583'
        }
    });

    const bookgenre9 = await prisma.book_genre.upsert({
        where: {
            book_id_genre_id: {
                book_id: book20.book_id,
                genre_id: '51d3138e-1d3b-41c2-b2c1-9f8d7e9c2434'   
            }
        },
        update: {},
        create: {
            book_id: book20.book_id,
            genre_id: '51d3138e-1d3b-41c2-b2c1-9f8d7e9c2434'
        }
    });

    const bookgenre10 = await prisma.book_genre.upsert({
        where: {
            book_id_genre_id: {
                book_id: book21.book_id,
                genre_id: 'db4e921c-1c3e-43c2-b3c2-c5f8f9e9d234'   
            }
        },
        update: {},
        create: {
            book_id: book21.book_id,
            genre_id: 'db4e921c-1c3e-43c2-b3c2-c5f8f9e9d234'
        }
    });
    

    // Chapters for The Luminous Veil (book1)
    const chapter1  = await prisma.chapter.create({
        data: {
            chapter_name: 'The Luminous Veil - Chapter 1: The Call of the Veil',
            chapter_sequence: 1,
            chapter_content: 'In the quiet village of Elowen, the young sorceress Elara has always felt a strange connection to the nearby Enchanted Woods. Whispers from her grandmother told of a mysterious Luminous Veil deep within the forest, separating the human world from a forgotten realm. One fateful autumn evening, driven by curiosity and an unshakable yearning, Elara sets off to uncover the truth behind the tales.',
            chapter_rating: 4,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date(),
            book_id: book1.book_id,
        },
    });

    const chapter2  = await prisma.chapter.create({
        data: {
            chapter_name: 'The Luminous Veil - Chapter 2: Crossing the Threshold',
            chapter_sequence: 2,
            chapter_content: 'The forest grew denser, the air thick with ancient magic. Elara’s heartbeat quickened as the light began to shift, glowing brighter with each step. Finally, she arrived at the shimmering curtain of light — the Luminous Veil. With trembling hands, she touched the veil, and the world around her dissolved into a cascade of colors. She was no longer in the realm of men, but in a place where dreams and nightmares intertwined.',
            chapter_rating: 3,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date(),
            book_id: book1.book_id,
        },
    });

    const chapter3  = await prisma.chapter.create({
        data: {
            chapter_name: 'The Luminous Veil - Chapter 3: Into the Realm of Light',
            chapter_sequence: 3,
            chapter_content: 'Elara found herself in a world of breathtaking beauty, where the sky shimmered with shades of gold and lavender, and the trees whispered secrets from long-forgotten ages. But something was wrong. Shadows lurked at the edges of her vision, and a strange presence seemed to be watching her. Her journey through the Realm of Light had only just begun, and already the dangers were closing in.',
            chapter_rating: 4,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date(),
            book_id: book1.book_id,
        },
    });

    const chapter4  = await prisma.chapter.create({
        data: {
            chapter_name: 'The Luminous Veil - Chapter 4: The Guardian of the Veil',
            chapter_sequence: 4,
            chapter_content: 'As Elara ventured deeper, she encountered the Guardian of the Veil, a towering figure cloaked in robes of light. The Guardian spoke in riddles, warning her of the perils that lay ahead and the price she would have to pay for crossing into this realm. Elara, determined to find the truth, vowed to continue, though the weight of the Guardian’s words hung heavy in her heart.',
            chapter_rating: 5,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date(),
            book_id: book1.book_id,
        },
    });

    const chapter5  = await prisma.chapter.create({
        data: {
            chapter_name: 'The Luminous Veil - Chapter 5: The Shadows Awaken',
            chapter_sequence: 5,
            chapter_content: 'Elara soon discovered that she was not alone. The shadows that had haunted her were more than just illusions. Dark creatures, born of forgotten nightmares, began to emerge from the edges of the veil, their eyes glowing with malice. Elara’s magic was tested as she fought to defend herself, but the shadows were relentless, and she knew that this was only the beginning.',
            chapter_rating: 4,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date(),
            book_id: book1.book_id,
        },
    });

    const chapter6  = await prisma.chapter.create({
        data: {
            chapter_name: 'The Luminous Veil - Chapter 6: Allies in the Light',
            chapter_sequence: 6,
            chapter_content: 'In the heart of the Realm of Light, Elara encountered unexpected allies — ancient spirits who had once walked the land as mortals. These spirits, bound to the light, offered her guidance and protection, but warned that the balance between the realms was shifting. A great darkness was stirring, and Elara would need all the help she could find to survive what was coming.',
            chapter_rating: 5,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date(),
            book_id: book1.book_id,
        },
    });

    const chapter7  = await prisma.chapter.create({
        data: {
            chapter_name: 'The Luminous Veil - Chapter 7: The Lost City',
            chapter_sequence: 7,
            chapter_content: 'Elara’s journey took her to a forgotten city, hidden beneath the veil’s glow. Here, the remnants of an ancient civilization lay in ruins, their stories etched into the walls. As Elara explored the city, she uncovered clues about the veil’s true purpose and the forces that had once tried to control it. But danger lurked in every shadow, and Elara would soon learn that some secrets were better left buried.',
            chapter_rating: 4,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date(),
            book_id: book1.book_id,
        },
    });

    const chapter8  = await prisma.chapter.create({
        data: {
            chapter_name: 'The Luminous Veil - Chapter 8: A Prophecy Revealed',
            chapter_sequence: 8,
            chapter_content: 'In the heart of the Lost City, Elara discovered an ancient prophecy, one that spoke of a sorceress who would one day breach the veil and unlock its power. The prophecy told of a choice — one that would either save or destroy both realms. As Elara read the final lines, she realized with a chill that she was the sorceress of legend, and the fate of two worlds rested on her shoulders.',
            chapter_rating: 5,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date(),
            book_id: book1.book_id,
        },
    });

    const chapter9  = await prisma.chapter.create({
        data: {
            chapter_name: 'The Luminous Veil - Chapter 9: The Darkness Within',
            chapter_sequence: 9,
            chapter_content: 'The shadows that had followed Elara throughout her journey were more than just monsters. They were reflections of her own doubts and fears, brought to life by the veil’s magic. To fulfill the prophecy, Elara would need to confront not only the external darkness but the darkness within herself. Only by mastering her own inner turmoil could she hope to succeed.',
            chapter_rating: 4,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date(),
            book_id: book1.book_id,
        },
    });

    const chapter10  = await prisma.chapter.create({
        data: {
            chapter_name: 'The Luminous Veil - Chapter 10: The Final Choice',
            chapter_sequence: 10,
            chapter_content: 'In the final moments of her journey, Elara stood at the heart of the veil, where the boundaries between worlds were thinnest. The choice was before her — to use the veil’s power to protect both realms or to destroy it and let the chaos consume everything. With the fate of two worlds in her hands, Elara made her choice, one that would echo through the ages.',
            chapter_rating: 5,
            chapter_image_url: '/img/book1.jpeg',
            created_on: new Date(),
            book_id: book1.book_id,
        },
    });

    
        const chapter11 = await prisma.chapter.create({
        data: {
            chapter_name: 'Songs of the Starbound - Chapter 1: The Melody of War',
            chapter_sequence: 1,
            chapter_content: 'In the distant galaxy of Eos, music held the power to control the very fabric of the universe. Varren, a rogue bard, discovered a melody hidden deep within the stars, one that could either unite the galaxy or plunge it into chaos. With the threat of war looming, Varren set out to uncover the secrets of the Starbound song before it was too late.',
            chapter_rating: 4,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date(),
            book_id: book2.book_id,
        },
    });

    const chapter12 = await prisma.chapter.create({
        data: {
            chapter_name: 'Songs of the Starbound - Chapter 2: The Rogue Bard',
            chapter_sequence: 2,
            chapter_content: 'Varren’s journey took him to the outer edges of the galaxy, where law and order were little more than myths. There, he encountered a band of outcasts who, like him, sought to control the power of music. But not all of them had noble intentions. Varren would have to navigate a dangerous game of alliances if he hoped to survive the coming storm.',
            chapter_rating: 3,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date(),
            book_id: book2.book_id,
        },
    });

    const chapter13 = await prisma.chapter.create({
        data: {
            chapter_name: 'Songs of the Starbound - Chapter 3: The Harmonic Convergence',
            chapter_sequence: 3,
            chapter_content: 'In the heart of the galaxy, the Harmonic Convergence was drawing near — a cosmic event that only occurred once every thousand years. The music of the stars was growing stronger, and with it, the forces of both light and darkness. Varren knew that the Convergence would either unite the galaxy or tear it apart, and the outcome would depend on the song he played.',
            chapter_rating: 4,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date(),
            book_id: book2.book_id,
        },
    });

    const chapter14 = await prisma.chapter.create({
        data: {
            chapter_name: 'Songs of the Starbound - Chapter 4: The Star’s Edge',
            chapter_sequence: 4,
            chapter_content: 'Varren stood at the edge of the Convergence, watching as the stars themselves seemed to pulse with music. He could feel the pull of both light and darkness, and his song was the key to tipping the balance. But as he prepared to play, a shadowy figure from his past emerged, threatening to derail everything he had worked for.',
            chapter_rating: 5,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date(),
            book_id: book2.book_id,
        },
    });

    const chapter15 = await prisma.chapter.create({
        data: {
            chapter_name: 'Songs of the Starbound - Chapter 5: The Symphony of Shadows',
            chapter_sequence: 5,
            chapter_content: 'Varren’s music had always been his strength, but now, it was his greatest vulnerability. The shadowy figure revealed itself as an old rival, bent on using the power of music to control the galaxy for their own ends. As the Symphony of Shadows rose, Varren realized he would need more than just his song to win this battle — he would need allies.',
            chapter_rating: 4,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date(),
            book_id: book2.book_id,
        },
    });

    const chapter16 = await prisma.chapter.create({
        data: {
            chapter_name: 'Songs of the Starbound - Chapter 6: Allies in the Stars',
            chapter_sequence: 6,
            chapter_content: 'In his quest for allies, Varren found himself aboard a ship of mercenaries, each with their own musical talents. Together, they crafted a song unlike any the galaxy had ever heard. But time was running out, and the forces of darkness were closing in. With the Convergence just days away, Varren would need to harmonize the galaxy’s disparate melodies to create the ultimate symphony.',
            chapter_rating: 5,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date(),
            book_id: book2.book_id,
        },
    });

    const chapter17 = await prisma.chapter.create({
        data: {
            chapter_name: 'Songs of the Starbound - Chapter 7: The Battle of Notes',
            chapter_sequence: 7,
            chapter_content: 'As the Convergence neared, the battle between light and darkness began in earnest. The forces of light, guided by Varren’s symphony, clashed with the dark armies of the shadowy rival. The battlefield was filled with the sounds of clashing melodies, each side trying to overpower the other. It was a battle of notes, where every chord could mean victory or defeat.',
            chapter_rating: 4,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date(),
            book_id: book2.book_id,
        },
    });

    const chapter18 = await prisma.chapter.create({
        data: {
            chapter_name: 'Songs of the Starbound - Chapter 8: The Lost Chord',
            chapter_sequence: 8,
            chapter_content: 'In the heat of battle, Varren stumbled upon an ancient piece of music, a Lost Chord said to be capable of controlling the Convergence itself. But playing the Lost Chord would come at a cost — one that Varren wasn’t sure he was willing to pay. As the battle raged on, Varren would have to decide whether to use the chord and risk everything, or find another way to win.',
            chapter_rating: 5,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date(),
            book_id: book2.book_id,
        },
    });

    const chapter19 = await prisma.chapter.create({
        data: {
            chapter_name: 'Songs of the Starbound - Chapter 9: The Crescendo of Light',
            chapter_sequence: 9,
            chapter_content: 'With the Lost Chord in his hands, Varren faced the final choice: to wield its power for good or to destroy it to prevent anyone from ever using it again. As the melodies of light and darkness built to a crescendo, Varren’s decision would shape the future of the galaxy. The time had come for the final performance.',
            chapter_rating: 4,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date(),
            book_id: book2.book_id,
        },
    });

    const chapter20 = await prisma.chapter.create({
        data: {
            chapter_name: 'Songs of the Starbound - Chapter 10: The Symphony of Fate',
            chapter_sequence: 10,
            chapter_content: 'As the final notes of the Starbound song echoed through the galaxy, Varren stood on the edge of destiny. His melody would either bring peace or destruction, and the fate of countless worlds rested on his shoulders. With the eyes of the galaxy upon him, Varren strummed the first chord, and the symphony of fate began.',
            chapter_rating: 5,
            chapter_image_url: '/img/book2.jpeg',
            created_on: new Date(),
            book_id: book2.book_id,
        },
    });
    
    const chapter21 = await prisma.chapter.create({
        data: {
            chapter_name: 'The Midnight Tapestry - Chapter 1: Threads of Destiny',
            chapter_sequence: 1,
            chapter_content: 'In the twilight realm where dreams and reality blend, the weaver crafts the Midnight Tapestry, an intricate creation that holds the fate of both worlds. But as the final thread is woven, something goes terribly wrong.',
            chapter_rating: 5,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date(),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
    });
    
    const chapter22 = await prisma.chapter.create({
        data: {
            chapter_name: 'The Midnight Tapestry - Chapter 2: The Rogue Thread',
            chapter_sequence: 2,
            chapter_content: 'A single thread from the tapestry unravels, threatening the balance between dreams and reality. The weaver must journey deep into the dreamscape to find the rogue thread before it causes irreversible damage.',
            chapter_rating: 4,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date(),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
    });
    
    const chapter23 = await prisma.chapter.create({
        data: {
            chapter_name: 'The Midnight Tapestry - Chapter 3: The Loom of Nightmares',
            chapter_sequence: 3,
            chapter_content: 'As the weaver ventures into the Loom of Nightmares, she discovers that the rogue thread has created its own fabric, a living nightmare that feeds on the fears of the dreamers. Time is running out as the fabric grows stronger.',
            chapter_rating: 5,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date(),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
    });
    
    const chapter24 = await prisma.chapter.create({
        data: {
            chapter_name: 'The Midnight Tapestry - Chapter 4: The Dream Walker',
            chapter_sequence: 4,
            chapter_content: 'In her quest to mend the tapestry, the weaver encounters a mysterious Dream Walker who claims to have the power to navigate both dreams and reality. Together, they set off to repair the damage, but the Dream Walker has secrets of his own.',
            chapter_rating: 4,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date(),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
    });
    
    const chapter25 = await prisma.chapter.create({
        data: {
            chapter_name: 'The Midnight Tapestry - Chapter 5: The Lost Patterns',
            chapter_sequence: 5,
            chapter_content: 'The weaver discovers ancient patterns hidden within the tapestry, long forgotten by her predecessors. These patterns hold the key to restoring the fabric, but unlocking them may unravel her own memories.',
            chapter_rating: 5,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date(),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
    });
    
    const chapter26 = await prisma.chapter.create({
        data: {
            chapter_name: 'The Midnight Tapestry - Chapter 6: Weaving the Void',
            chapter_sequence: 6,
            chapter_content: 'To mend the damage caused by the rogue thread, the weaver must weave a new section of the tapestry from the very fabric of the void, a dangerous task that could cost her everything if she fails.',
            chapter_rating: 4,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date(),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
    });
    
    const chapter27 = await prisma.chapter.create({
        data: {
            chapter_name: 'The Midnight Tapestry - Chapter 7: The Woven Guardians',
            chapter_sequence: 7,
            chapter_content: 'As the weaver attempts to restore the tapestry, she is confronted by the Woven Guardians—ancient beings created to protect the fabric of dreams. They warn her of an even greater threat lurking beyond the loom.',
            chapter_rating: 5,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date(),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
    });
    
    const chapter28 = await prisma.chapter.create({
        data: {
            chapter_name: 'The Midnight Tapestry - Chapter 8: The Thread of Fate',
            chapter_sequence: 8,
            chapter_content: 'The weaver finds the thread of fate—an unbreakable thread that controls the destiny of every dreamer. To repair the tapestry, she must use this thread carefully, knowing that one wrong move could change the fate of countless lives.',
            chapter_rating: 4,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date(),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
    });
    
    const chapter29 = await prisma.chapter.create({
        data: {
            chapter_name: 'The Midnight Tapestry - Chapter 9: The Final Weave',
            chapter_sequence: 9,
            chapter_content: 'With the tapestry nearly restored, the weaver faces her final challenge: weaving the rogue thread back into the fabric without unraveling the rest of the tapestry. It is a delicate task that will determine the future of both the dreamscape and reality.',
            chapter_rating: 5,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date(),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
    });
    
    const chapter30 = await prisma.chapter.create({
        data: {
            chapter_name: 'The Midnight Tapestry - Chapter 10: The Dream Reborn',
            chapter_sequence: 10,
            chapter_content: 'With the tapestry finally mended, the dreamscape begins to stabilize. But the weaver realizes that her journey has changed her forever. The fabric of dreams has been altered, and so has her role as the keeper of the Midnight Tapestry.',
            chapter_rating: 5,
            chapter_image_url: '/img/book3.jpeg',
            created_on: new Date(),
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
    });
    
    const chapter31 = await prisma.chapter.create({
        data: {
            chapter_name: 'Harbinger of the Crimson Dawn - Chapter 1: The Prophecy Unfolds',
            chapter_sequence: 1,
            chapter_content: 'In a distant kingdom, an ancient prophecy foretells the rise of a hero marked by the Crimson Dawn. The reluctant warrior, Kaelen, is thrust into a destiny he never sought, as the dawn’s red hue signals the start of a great upheaval.',
            chapter_rating: 4,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date(),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
    });
    
    const chapter32 = await prisma.chapter.create({
        data: {
            chapter_name: 'Harbinger of the Crimson Dawn - Chapter 2: The Awakening',
            chapter_sequence: 2,
            chapter_content: 'Kaelen struggles to accept his role as the chosen one. Plagued by nightmares of a blood-red sky, he journeys to the sacred temple to seek answers. There, the ancient seer reveals the true nature of his power and the danger that awaits.',
            chapter_rating: 5,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date(),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
    });
    
    const chapter33 = await prisma.chapter.create({
        data: {
            chapter_name: 'Harbinger of the Crimson Dawn - Chapter 3: The First Battle',
            chapter_sequence: 3,
            chapter_content: 'As the Crimson Dawn approaches, the kingdom faces its first major assault. Kaelen leads his people into battle against a mysterious force that emerges from the shadows. Victory comes at a great cost, and Kaelen realizes the true scale of the threat.',
            chapter_rating: 4,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date(),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
    });
    
    const chapter34 = await prisma.chapter.create({
        data: {
            chapter_name: 'Harbinger of the Crimson Dawn - Chapter 4: Allies and Enemies',
            chapter_sequence: 4,
            chapter_content: 'Kaelen seeks to rally allies to his cause, but not everyone believes in the prophecy. He journeys to the neighboring kingdoms, where old grudges and new threats await. Along the way, he encounters both unexpected friends and dangerous foes.',
            chapter_rating: 5,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date(),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
    });
    
    const chapter35 = await prisma.chapter.create({
        data: {
            chapter_name: 'Harbinger of the Crimson Dawn - Chapter 5: The Crimson Blade',
            chapter_sequence: 5,
            chapter_content: 'During his quest, Kaelen discovers an ancient weapon forged in the fires of the Crimson Dawn. The blade, imbued with the power of the rising sun, becomes both his greatest strength and the source of his deepest fears.',
            chapter_rating: 4,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date(),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
    });
    
    const chapter36 = await prisma.chapter.create({
        data: {
            chapter_name: 'Harbinger of the Crimson Dawn - Chapter 6: Shadows of Betrayal',
            chapter_sequence: 6,
            chapter_content: 'As Kaelen’s influence grows, so do the forces that oppose him. Betrayal comes from within as trusted allies reveal hidden agendas. The Crimson Dawn’s power stirs the hearts of men, turning friends into enemies.',
            chapter_rating: 5,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date(),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
    });
    
    const chapter37 = await prisma.chapter.create({
        data: {
            chapter_name: 'Harbinger of the Crimson Dawn - Chapter 7: The Siege of Dawnspire',
            chapter_sequence: 7,
            chapter_content: 'The ancient city of Dawnspire, where the prophecy was first written, comes under siege. Kaelen must defend the city and protect its secrets, for within its walls lies the key to defeating the rising darkness.',
            chapter_rating: 4,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date(),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
    });
    
    const chapter38 = await prisma.chapter.create({
        data: {
            chapter_name: 'Harbinger of the Crimson Dawn - Chapter 8: The Trial of Fire',
            chapter_sequence: 8,
            chapter_content: 'To fulfill his destiny, Kaelen must pass the Trial of Fire, a deadly test that only the chosen of the Crimson Dawn can endure. Within the flames, he faces visions of his past and glimpses of a possible future.',
            chapter_rating: 5,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date(),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
    });
    
    const chapter39 = await prisma.chapter.create({
        data: {
            chapter_name: 'Harbinger of the Crimson Dawn - Chapter 9: The Dark Herald',
            chapter_sequence: 9,
            chapter_content: 'A dark figure emerges, proclaiming itself the Herald of the Crimson Dawn. This twisted being seeks to unleash the full power of the dawn to bring about the end of the world. Kaelen must confront this new enemy before it’s too late.',
            chapter_rating: 4,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date(),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
    });
    
    const chapter40 = await prisma.chapter.create({
        data: {
            chapter_name: 'Harbinger of the Crimson Dawn - Chapter 10: The Final Eclipse',
            chapter_sequence: 10,
            chapter_content: 'As the sun rises for the final time, Kaelen faces the ultimate battle. The Crimson Dawn has arrived, and the world teeters on the brink of destruction. In a climactic showdown, Kaelen must embrace his fate or risk the annihilation of everything he holds dear.',
            chapter_rating: 5,
            chapter_image_url: '/img/book4.jpeg',
            created_on: new Date(),
            book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
    });
    
    
    const chapter41 = await prisma.chapter.create({
        data: {
            chapter_name: 'Echoes of the Crystal Cavern - Chapter 1: The Whispering Stones',
            chapter_sequence: 1,
            chapter_content: 'Deep within the Crystal Cavern, echoes of a forgotten past whisper through the air. Aria, an explorer driven by curiosity, stumbles upon ancient ruins hidden within the caverns. The crystals hum with energy, hinting at long-buried secrets.',
            chapter_rating: 4,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date(),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
    });
    
    const chapter42 = await prisma.chapter.create({
        data: {
            chapter_name: 'Echoes of the Crystal Cavern - Chapter 2: The Forgotten Legend',
            chapter_sequence: 2,
            chapter_content: 'As Aria delves deeper into the cavern, she uncovers fragments of a legend passed down through generations. The legend speaks of a great power hidden within the crystals, a force capable of shaping the future of their world.',
            chapter_rating: 5,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date(),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
    });
    
    const chapter43 = await prisma.chapter.create({
        data: {
            chapter_name: 'Echoes of the Crystal Cavern - Chapter 3: The First Echo',
            chapter_sequence: 3,
            chapter_content: 'A strange phenomenon occurs as Aria touches one of the largest crystals — an echo from the past. The crystal reveals visions of an ancient civilization, one that harnessed the crystal’s power for both good and evil. But the vision also warns of a great catastrophe.',
            chapter_rating: 4,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date(),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
    });
    
    const chapter44 = await prisma.chapter.create({
        data: {
            chapter_name: 'Echoes of the Crystal Cavern - Chapter 4: The Guardian Awakes',
            chapter_sequence: 4,
            chapter_content: 'As Aria explores further, she awakens an ancient guardian who has protected the cavern for centuries. The Guardian is both a protector and a test. To proceed deeper into the cavern, Aria must prove her worth by solving the Guardian’s riddle.',
            chapter_rating: 5,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date(),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
    });
    
    const chapter45 = await prisma.chapter.create({
        data: {
            chapter_name: 'Echoes of the Crystal Cavern - Chapter 5: The Crystalline Key',
            chapter_sequence: 5,
            chapter_content: 'Upon solving the riddle, the Guardian grants Aria access to a hidden chamber within the cavern. There, she discovers a crystalline key, said to unlock the greatest secret of the cavern. But with the key comes responsibility, and not all who seek its power have good intentions.',
            chapter_rating: 4,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date(),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
    });
    
    const chapter46 = await prisma.chapter.create({
        data: {
            chapter_name: 'Echoes of the Crystal Cavern - Chapter 6: The Echo of Betrayal',
            chapter_sequence: 6,
            chapter_content: 'Aria soon realizes that she is not the only one seeking the power of the cavern. A former ally reveals their true motives, attempting to take the key for themselves. In a race against time, Aria must protect the key and unlock the secrets before it falls into the wrong hands.',
            chapter_rating: 5,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date(),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
    });
    
    const chapter47 = await prisma.chapter.create({
        data: {
            chapter_name: 'Echoes of the Crystal Cavern - Chapter 7: The Crystals’ Song',
            chapter_sequence: 7,
            chapter_content: 'The deeper Aria ventures, the more she hears the crystals’ song — a melody that seems to be calling to her. It is said that those who understand the song can harness the true power of the cavern, but it is a power that comes with great risk.',
            chapter_rating: 4,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date(),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
    });
    
    const chapter48 = await prisma.chapter.create({
        data: {
            chapter_name: 'Echoes of the Crystal Cavern - Chapter 8: The Collapse',
            chapter_sequence: 8,
            chapter_content: 'As Aria nears the heart of the cavern, the structure begins to crumble. The ancient forces within the crystals react violently to the presence of outsiders. With time running out, Aria must find a way to calm the cavern or risk being trapped forever.',
            chapter_rating: 5,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date(),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
    });
    
    const chapter49 = await prisma.chapter.create({
        data: {
            chapter_name: 'Echoes of the Crystal Cavern - Chapter 9: The Truth Revealed',
            chapter_sequence: 9,
            chapter_content: 'In the final chamber, Aria discovers the truth behind the crystal’s power. It was not meant to be controlled but to be protected. The ancient civilization that once thrived within the cavern perished because they sought to dominate the crystals instead of respecting them.',
            chapter_rating: 4,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date(),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
    });
    
    const chapter50 = await prisma.chapter.create({
        data: {
            chapter_name: 'Echoes of the Crystal Cavern - Chapter 10: The Final Echo',
            chapter_sequence: 10,
            chapter_content: 'With the cavern on the brink of destruction, Aria must make a choice — to leave the crystals in peace and preserve what remains of their power or to risk everything by taking the key. As the final echo of the cavern rings out, Aria’s decision will shape the fate of the world.',
            chapter_rating: 5,
            chapter_image_url: '/img/book5.jpeg',
            created_on: new Date(),
            book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
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