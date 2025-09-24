const renderManga = async () => {
    const response = await fetch('/manga');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

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

renderManga();