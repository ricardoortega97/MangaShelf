const renderManga = async () => {
    const response = await fetch('/manga');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');

    if (data) {
        data.map(manga => {
            const mangaCard = document.createElement('div');
            mangaCard.classList.add('card');
            
            const mangaLink = document.createElement('a');
            mangaLink.href = `/manga/${manga.id}`;
            mangaLink.className = 'manga-link';
            
            const mangaImg = document.createElement('img');
            mangaImg.src = manga.coverImage;
            mangaImg.alt = "Cover image of " + manga.title;
            mangaImg.className = 'manga-cover';
            
            const mangaTitle = document.createElement('h2');
            mangaTitle.textContent = manga.title;
            mangaTitle.className = 'manga-title';
            
            mangaLink.appendChild(mangaImg);
            mangaLink.appendChild(mangaTitle);
            mangaCard.appendChild(mangaLink);
            mainContent.appendChild(mangaCard);
        });
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No manga found.';
        mainContent.appendChild(message);
    }
}

// const requestedUrl = window.location.href.split('/').pop()

// if (requestedUrl) {
//     window.location.href = '../404.html';

// } else {
//     renderManga();
// }

renderManga();

const renderMangaDetails = async () => {
    const request_id = window.location.href.split('/').pop();
    
    const response = await fetch('/manga');
    const data = await response.json();

    const mangaContext = document.getElementById('manga-context');

    let manga

    manga = data.find(manga => manga.id === request_id);

    if (manga) {
        document.getElementById('manga-cover').src = manga.coverImage;
        document.getElementById('manga-title').textContent = manga.title;
        document.getElementById('manga-author').textContent = `Author: ${manga.author}`;
        document.getElementById('manga-genre').textContent = `Genre: ${manga.genre}`;
        document.getElementById('manga-vols').textContent = `Volumes: ${manga.vols}`;
        document.getElementById('manga-description').textContent = manga.description;
        
    } else {
        const message = document.createElement('h2');
        message.textContent = 'Manga not found.';
        mangaContext.appendChild(message);
    } 
}

renderMangaDetails();
