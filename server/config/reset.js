import { pool } from './database.js';
import dotenv from './dotenv.js';
import mangaData from '../data/mangaData.js';

// create the table 
const createMangaTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS manga (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            genre VARCHAR(100) NOT NULL,
            vols INT,
            description TEXT,
            coverimage TEXT,
            isbn VARCHAR(13) NOT NULL UNIQUE
        );`;
    try {
        const res = await pool.query(createTableQuery);
        console.log('Manga table created.');
    } catch (error) {
        console.error('Error creating manga table:', error);
    }
};
//  Load the data to the table 
const seedMangaData = async () => {
    try {
        await createMangaTable();
        
        // Use for...of loop to handle async operations properly
        for (const manga of mangaData) {
            try {
                // Check if manga already exists
                const checkQuery = 'SELECT * FROM manga WHERE isbn = $1';
                const existingManga = await pool.query(checkQuery, [manga.isbn10]);
                
                if (existingManga.rows.length > 0) {
                    console.log(`Manga with ISBN ${manga.isbn10} already exists. Skipping insertion.`);
                    continue;
                }
                
                // Insert new manga
                const insertQuery = `
                    INSERT INTO manga (title, author, genre, vols, description, coverimage, isbn)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                `;
                const values = [
                    manga.title,
                    manga.author,
                    manga.genre,
                    manga.vols,
                    manga.description,
                    manga.coverimage,
                    manga.isbn10
                ];
                
                await pool.query(insertQuery, values);
                console.log(`✅ Inserted manga: ${manga.title}`);
                
            } catch (err) {
                console.error(`Error processing manga ${manga.title}:`, err.message);
            }
        }
        
        console.log('Manga data seeding completed successfully.');
        
    } catch (error) {
        console.error('Error in seedMangaData:', error.message);
    }
};

seedMangaData();
