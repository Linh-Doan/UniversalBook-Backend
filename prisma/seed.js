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
    const book1 = await prisma.book.create({
        data: {
            book_name: 'The Luminous Veil',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book1.jpeg',
            summary_text: 'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.'
        }
    })
    const book2 = await prisma.book.create({
        data: {
            book_name: 'Songs of the Starbound',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book2.jpeg',
            summary_text: 'In a galaxy where music controls the stars, a rogue bard must harness this cosmic symphony to prevent an interstellar war. His melodies hold the key to unity or destruction'
        }
    })
    const book3 = await prisma.book.create({
        data: {
            book_name: 'The Midnight Tapestry',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book3.jpeg',
            summary_text: 'In a realm woven from dreams, a weaver\'s creation goes rogue, threatening the fabric of reality. She must navigate the dreamscape to reclaim control and restore balance.'
        }
    })
    const book4 = await prisma.book.create({
        data: {
            book_name: 'Harbinger of the Crimson Dawn',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book4.jpeg',
            summary_text: 'An ancient prophecy foretells the rise of a hero marked by a crimson sun. A reluctant warrior must embrace his destiny to save his kingdom from an impending apocalypse.'
        }
    })
    const book5 = await prisma.book.create({
        data: {
            book_name: 'Echoes of the Crystal Cavern',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book5.jpeg',
            summary_text: 'Deep within a mystical cavern, crystalline echoes reveal forgotten histories and hidden dangers. A brave explorer uncovers a secret that could reshape her world\'s future.'
        }
    })
    const book6 = await prisma.book.create({
        data: {
            book_name: 'The Forgotten Chronicles',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book6.jpeg',
            summary_text: 'Unearthed manuscripts recount the adventures of a long-lost civilization. A historian\'s obsession with these chronicles leads her on a perilous quest for truth and legacy.'
        }
    })
    const book7 = await prisma.book.create({
        data: {
            book_name: 'The Silent Aurora',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book7.jpeg',
            summary_text: 'In a land where the aurora\'s colors dictate life and death, a mute painter discovers a way to communicate through her art. Her creations might be the key to ending a silent war.'
        }
    })
    const book8 = await prisma.book.create({
        data: {
            book_name: 'Raven\'s Whisper',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book8.jpeg',
            summary_text: 'A mysterious raven guides a grieving knight to uncover a conspiracy against the throne. As whispers of rebellion grow louder, he must decide whom to trust in his quest for justice.'
        }
    })
    const book9 = await prisma.book.create({
        data: {
            book_name: 'The Obsidian Key',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book9.jpeg',
            summary_text: 'An enchanted key made of obsidian unlocks doorways to parallel worlds. A young adventurer must navigate these realms to prevent a malevolent force from conquering them all.'
        }
    })
    const book10 = await prisma.book.create({
        data: {
            book_name: 'Winds of the Eclipsed Realm',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book10.jpeg',
            summary_text: 'When an eternal eclipse shrouds her world, a daring aviator seeks the source of the darkness. She discovers ancient powers and must rally unlikely allies to bring back the light.'
        }
    })
    const book11 = await prisma.book.create({
        data: {
            book_name: 'The Shattered Compass',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book11.jpeg',
            summary_text: 'A magical compass that once guided travelers to hidden treasures is shattered, scattering its pieces across the land. A determined treasure hunter embarks on a quest to reunite them.'
        }
    })
    const book12 = await prisma.book.create({
        data: {
            book_name: 'Guardians of the Veiled Forest',
            author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
            book_image_url: 'img/book12.jpeg',
            summary_text: 'In a forest cloaked in perpetual mist, guardians protect secrets of immense power. A curious outsider stumbles into their realm, triggering events that could either protect or destroy their world.'
        }
    })

    const book13 = await prisma.book.create({
        data: {
          book_id: '7f1de43d-91d5-4cb9-8e42-066673bdc238',
          book_name: 'The Luminous Veil',
          author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
          genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
          book_image_url: 'img/book1.jpeg',
          summary_text:
            'A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.',
        },
      });
    
      const book14 = await prisma.book.create({
        data: {
          book_id: '0aa0b2ff-a025-47f0-ac47-12864b1d4c35',
          book_name: 'Songs of the Starbound',
          author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
          genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
          book_image_url: 'img/book2.jpeg',
          summary_text:
            'In a galaxy where music controls the stars, a rogue bard must harness this cosmic symphony to prevent an interstellar war. His melodies hold the key to unity or destruction.',
        },
      });
    
      const book15 = await prisma.book.create({
        data: {
          book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
          book_name: 'The Midnight Tapestry',
          author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
          genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
          book_image_url: 'img/book3.jpeg',
          summary_text:
            "In a realm woven from dreams, a weaver's creation goes rogue, threatening the fabric of reality. She must navigate the dreamscape to reclaim control and restore balance.",
        },
      });
    
      const book16 = await prisma.book.create({
        data: {
          book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
          book_name: 'Harbinger of the Crimson Dawn',
          author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
          genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
          book_image_url: 'img/book4.jpeg',
          summary_text:
            'An ancient prophecy foretells the rise of a hero marked by a crimson sun. A reluctant warrior must embrace his destiny to save his kingdom from an impending apocalypse.',
        },
      });
    
      const book17 = await prisma.book.create({
        data: {
          book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
          book_name: 'Echoes of the Crystal Cavern',
          author_group_id: '6ecd8c99-4036-403d-bf84-cf8400f67836',
          genre_id: '40e6215d-b5c6-4896-987c-f30f3678f608',
          book_image_url: 'img/book5.jpeg',
          summary_text:
            "Deep within a mystical cavern, crystalline echoes reveal forgotten histories and hidden dangers. A brave explorer uncovers a secret that could reshape her world's future.",
        },
      });
    const chapter1 = await prisma.chapter.create({
        data: {
          
          chapter_sequence: 1,
          chapter_content: 'This is chapter 1 contents of Luminous Veil.',
          chapter_rating: 4,
          chapter_image_url: 'img/book1.jpeg',
          created_on: new Date('2024-08-05'),
          book_id: '7f1de43d-91d5-4cb9-8e42-066673bdc238',
        },
      });
    
      const chapter2 = await prisma.chapter.create({
        data: {
      
          chapter_sequence: 1,
          chapter_content: 'This is chapter 1 contents of Songs of the Starbound.',
          chapter_rating: 3,
          chapter_image_url: 'img/book2.jpeg',
          created_on: new Date('2024-08-05'),
          book_id: '0aa0b2ff-a025-47f0-ac47-12864b1d4c35',
        },
      });
    
      const chapter3 = await prisma.chapter.create({
        data: {
      
          chapter_sequence: 1,
          chapter_content: 'This is chapter 1 contents of The Midnight Tapestry.',
          chapter_rating: 5,
          chapter_image_url: 'img/book3.jpeg',
          created_on: new Date('2024-08-05'),
          book_id: 'fa3b26b3-1250-432c-8a17-f1593a256708',
        },
      });
    
      const chapter4 = await prisma.chapter.create({
        data: {
      
          chapter_sequence: 1,
          chapter_content: 'This is chapter 1 contents of Harbinger of the Crimson Dawn.',
          chapter_rating: 4,
          chapter_image_url: 'img/book4.jpeg',
          created_on: new Date('2024-08-05'),
          book_id: '9934ff55-1c44-44e1-875f-f7762d774fd4',
        },
      });
    
      const chapter5 = await prisma.chapter.create({
        data: {
        
          chapter_sequence: 1,
          chapter_content: 'This is chapter 1 contents of Echoes of the Crystal Cavern.',
          chapter_rating: 4,
          chapter_image_url: 'img/book5.jpeg',
          created_on: new Date('2024-08-05'),
          book_id: 'df2c39f0-d3bc-4d16-b803-c4a9a20a656d',
        },
      });
};
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })