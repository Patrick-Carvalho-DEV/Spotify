document.addEventListener('DOMContentLoaded', () => {


    const artistsData = [
        { name: 'Akon', image: './assets/artists/Akon.jpg' },
        { name: 'Curbi', image: './assets/artists/Curbi.jpg' },
        { name: 'Direct', image: './assets/artists/Direct.jpg' },
        { name: 'Ezgod', image: './assets/artists/Ezgod.jpg' },
        { name: 'Fella', image: './assets/artists/Fella.jpg' },
        { name: 'Timbaland', image: './assets/artists/Timbaland.jpg' },
        { name: 'Robin', image: './assets/artists/Robin.jpg' }
    ];
    
    const albumsData = [
        {name: 'Royalty', artist: 'Ezgod', image: './assets/Royalty.jpg'},
        {name: 'Ghost', artist: 'Direct', image: './assets/Ghost.jpg'},
        {name: 'SleepLess (AVAION)', artist: 'AVAION', image: './assets/SleepLess.jpg'},
        {name: 'Dream of us', artist: 'Fella', image: './assets/Dreamofus.jpg'},
        {name: 'Kill the lights', artist: 'Curbi', image: './assets/Killthelights.jpg'},
        {name: 'Fly', artist: 'San Holo', image: './assets/Fly.jpg'},
        {name: 'Fearless', artist: 'Robin', image: './assets/Fearless.jpg'}
    ]; 

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
           <img src="${artist.image}" alt="imagem do ${artist.name}">
           <div>
           <h3>${artist.name}</h3>
           <p>artista</p>
           </div>
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
           <img src="${album.image}" alt="imagem do ${album.name}">
           <div>
           <h3>${album.name}</h3>
           <p>${album.artist}</p>
           </div>
        `

        albumsGrid.appendChild(albumCard)
    })
})

