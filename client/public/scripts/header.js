const header = document.querySelector('header')

const nav = document.createElement('nav')
nav.className = 'banner'

// const bg = document.createElement('img')
// bg.src = '/mangashelf.webp'

const navDiv = document.createElement('div')
navDiv.className = 'nav-container'

const navTitle = document.createElement('h2')
navTitle.className = 'nav-title'
navTitle.textContent = 'MangaShelf'

const navSubtitle = document.createElement('p')
navSubtitle.className = 'nav-subtitle'
navSubtitle.textContent = 'My recommended Manga Collection'

const navBtn = document.createElement('button')
navBtn.className = 'secondary';
navBtn.textContent = 'All Manga';

navBtn.addEventListener('click', () => {
    window.location.href = '/'
})

header.appendChild(nav)
// nav.appendChild(bg)
nav.appendChild(navDiv)
navDiv.appendChild(navTitle)
navDiv.appendChild(navSubtitle)
navDiv.appendChild(navBtn)
