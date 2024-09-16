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
            author_group_name: 'Inkwell Society'
        }
    });

    const author2 = await prisma.author_group.upsert({
        where: {author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f42'},
        update: {},
        create: {
            author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f42',
            author_group_name: 'Writers Circle'
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
            author_group_name: 'test account 1 author',
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


    const book1 = await prisma.book.create({
        data: {
            book_name: 'The Luminous Veil',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book1.jpeg',
            rating: 4.3,
            rating_count: 3,
            summary_text: 'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.'
        }
    });

    const personalBook1 = await prisma.book.create({
        data: {
            book_name: 'My personal book 1',
            author_group_id: '8876bea8-fa6f-4672-8333-77d3f8133f45',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book1.jpeg',
            rating: 4.3,
            rating_count: 3,
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
            rating: 4.3,
            rating_count: 3,
            summary_text: 'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.'
        }
    });
    const book2 = await prisma.book.create({
        data: {
            book_name: 'Songs of the Starbound',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book2.jpeg',
            rating: 4.7,
            rating_count: 3,
            summary_text: 'In a galaxy where music controls the stars, a rogue bard must harness this cosmic symphony to prevent an interstellar war. His melodies hold the key to unity or destruction'
        }
    });
    const book3 = await prisma.book.create({
        data: {
            book_name: 'The Midnight Tapestry',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book3.jpeg',
            rating: 5,
            rating_count: 3,
            summary_text: 'In a realm woven from dreams, a weaver\'s creation goes rogue, threatening the fabric of reality. She must navigate the dreamscape to reclaim control and restore balance.'
        }
    });
    const book4 = await prisma.book.create({
        data: {
            book_name: 'Harbinger of the Crimson Dawn',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book4.jpeg',       
            created_on:  new Date(2023, 5, 17),
            summary_text: 'An ancient prophecy foretells the rise of a hero marked by a crimson sun. A reluctant warrior must embrace his destiny to save his kingdom from an impending apocalypse.'
        }
    });
    const book5 = await prisma.book.create({
        data: {
            book_name: 'Echoes of the Crystal Cavern',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book5.jpeg',
            created_on:  new Date(2024, 3, 12),
            summary_text: 'Deep within a mystical cavern, crystalline echoes reveal forgotten histories and hidden dangers. A brave explorer uncovers a secret that could reshape her world\'s future.'
        }
    });
    const book6 = await prisma.book.create({
        data: {
            book_name: 'The Forgotten Chronicles',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book6.jpeg',
            summary_text: 'Unearthed manuscripts recount the adventures of a long-lost civilization. A historian\'s obsession with these chronicles leads her on a perilous quest for truth and legacy.'
        }
    });
    const book7 = await prisma.book.create({
        data: {
            book_name: 'The Silent Aurora',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book7.jpeg',
            rating: 4.6,
            rating_count: 3,
            summary_text: 'In a land where the aurora\'s colors dictate life and death, a mute painter discovers a way to communicate through her art. Her creations might be the key to ending a silent war.'
        }
    });
    const book8 = await prisma.book.create({
        data: {
            book_name: 'Raven\'s Whisper',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book8.jpeg',
            created_on:  new Date(2023, 9, 12),
            summary_text: 'A mysterious raven guides a grieving knight to uncover a conspiracy against the throne. As whispers of rebellion grow louder, he must decide whom to trust in his quest for justice.'
        }
    });
    const book9 = await prisma.book.create({
        data: {
            book_name: 'The Obsidian Key',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book9.jpeg',
            created_on:  new Date(2022, 3, 12),
            summary_text: 'An enchanted key made of obsidian unlocks doorways to parallel worlds. A young adventurer must navigate these realms to prevent a malevolent force from conquering them all.'
        }
    });
    const book10 = await prisma.book.create({
        data: {
            book_name: 'Winds of the Eclipsed Realm',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book10.jpeg',
            created_on:  new Date(2024, 2, 12),
            summary_text: 'When an eternal eclipse shrouds her world, a daring aviator seeks the source of the darkness. She discovers ancient powers and must rally unlikely allies to bring back the light.'
        }
    });
    const book11 = await prisma.book.create({
        data: {
            book_name: 'The Shattered Compass',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book11.jpeg',
            created_on:  new Date(2024, 5, 12),
            summary_text: 'A magical compass that once guided travelers to hidden treasures is shattered, scattering its pieces across the land. A determined treasure hunter embarks on a quest to reunite them.'
        }
    });
    const book12 = await prisma.book.create({
        data: {
            book_name: 'Guardians of the Veiled Forest',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book12.jpeg',
            summary_text: 'In a forest cloaked in perpetual mist, guardians protect secrets of immense power. A curious outsider stumbles into their realm, triggering events that could either protect or destroy their world.'
        }
    });
    const book13 = await prisma.book.create({
        data: {
            book_id: '7f1de43d-91d5-4cb9-8e42-066673bdc238',
            book_name: 'The Luminous Veil',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
        //   genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book1.jpeg',
            summary_text:
            'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.',
        },
    });
        
    const book14 = await prisma.book.create({
        data: {
            book_id: '0aa0b2ff-a025-47f0-ac47-12864b1d4c35',
            book_name: 'Songs of the Starbound',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book2.jpeg',
            summary_text:
            'In a galaxy where music controls the stars, a rogue bard must harness this cosmic symphony to prevent an interstellar war. His melodies hold the key to unity or destruction.',
        },
    });

    const book15 = await prisma.book.create({
        data: {
            book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
            book_name: 'The Midnight Tapestry',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            // genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: '/img/book3.jpeg',
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
            summary_text:
            "Deep within a mystical cavern, crystalline echoes reveal forgotten histories and hidden dangers. A brave explorer uncovers a secret that could reshape her world's future.",
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
    const chapter1 = await prisma.chapter.create({
      data: {
        chapter_name: 'The Luminous Veil',
        chapter_sequence: 1,
        chapter_content: 'In the ancient land of Elowen, where the mountains kissed the sky and rivers sang to the stars, there was a place few dared to speak of—a place known only as the Luminous Veil. Legends told of a shimmering barrier deep within the Enchanted Woods, a veil of light that danced with the colors of the dawn. It was said to separate the world of men from a realm forgotten by time, a world where dreams and nightmares walked hand in hand, and where the past and future intertwined like the threads of a tapestry. The villagers of Elowen whispered tales of the Veils origins. Some believed it was woven by the spirits of the ancient ones, who sought to protect their world from the greed and violence of humanity. Others claimed it was the last remnant of the old gods, a boundary that kept their secrets hidden from mortal eyes. But no one knew the truth, for no one who entered the Luminous Veil had ever returned—until now. It was on a quiet autumn evening that Elara, a young woman with a curious mind and a restless heart, found herself standing at the edge of the Enchanted Woods. Her grandmother had often told her stories of the Veil, warning her to stay away, but Elara could not resist its call. She had always felt a pull toward the unknown, a yearning for something beyond the mundane life of the village. As the sun dipped below the horizon, casting the woods in a golden glow, Elara took a deep breath and stepped into the forest. The trees seemed to whisper her name as she walked, their leaves rustling like secrets on the wind. The deeper she ventured, the more the light around her began to change, growing softer and more vibrant, until it seemed as though she were walking through a dream.',
        chapter_rating: 4,
        chapter_image_url: '/img/book1.jpeg',
        created_on: new Date('2024-08-05'),
        book_id: '7f1de43d-91d5-4cb9-8e42-066673bdc238',
      },
    });
    
    const chapter2 = await prisma.chapter.create({
      data: {
        chapter_name: 'Songs of the Starbound',
        chapter_sequence: 1,
        chapter_content: 'This is chapter 1 contents of Songs of the Starbound.',
        chapter_rating: 3,
        chapter_image_url: '/img/book2.jpeg',
        created_on: new Date('2024-08-05'),
        book_id: '0aa0b2ff-a025-47f0-ac47-12864b1d4c35',
      },
    });
    
    const chapter3 = await prisma.chapter.create({
      data: {
        chapter_name: 'The Midnight Tapestry',
        chapter_sequence: 1,
        chapter_content: 'This is chapter 1 contents of The Midnight Tapestry.',
        chapter_rating: 5,
        chapter_image_url: '/img/book3.jpeg',
        created_on: new Date('2024-08-05'),
        book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
      },
    });
    
    const chapter4 = await prisma.chapter.create({
      data: {
        chapter_name: 'Harbinger of the Crimson Dawn',
        chapter_sequence: 1,
        chapter_content: 'This is chapter 1 contents of Harbinger of the Crimson Dawn.',
        chapter_rating: 4,
        chapter_image_url: '/img/book4.jpeg',
        created_on: new Date('2024-08-05'),
        book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
      },
    });
    
    const chapter5 = await prisma.chapter.create({
      data: {
        chapter_name: 'Echoes of the Crystal Cavern',
        chapter_sequence: 1,
        chapter_content: 'This is chapter 1 contents of Echoes of the Crystal Cavern.',
        chapter_rating: 4,
        chapter_image_url: '/img/book5.jpeg',
        created_on: new Date('2024-08-05'),
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