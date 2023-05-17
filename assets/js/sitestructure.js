// ---------- LOAD FRIENDS ----------

// friends array
const friends = [
    {
        friendName: 'Charlie Hookham',
        firendImg: 'https://cf.geekdo-images.com/8rUOCMRZMfVVbb-FtZMYKQ__original/img/EAskRArHqD99IwSZnTns9kE7nH0=/0x0/filters:format(jpeg)/pic5643678.jpg',
        prefArtists: ['queen', 'beatles', 'red hot chili peppers'],
        lastLog: '4 ore'
    },
    {
        friendName: 'lightdark02',
        firendImg: 'https://media.licdn.com/dms/image/C4E03AQFlExT8101tLw/profile-displayphoto-shrink_800_800/0/1641477990484?e=2147483647&v=beta&t=4BiFquEdQ8eeBwapDiLoP1yzTx6LvoSteqEK_OFW4cw',
        prefArtists: ['tiziano ferro', 'marco mengoni', 'annalisa'],
        lastLog:'2 giorni'
    },
    {
        friendName: 'smith1234',
        firendImg: 'https://www.nuvodental.ca/wp-content/uploads/2019/02/JD1301-Nuvo-Dental_Brett-21533-600-x-600.jpg',
        prefArtists: ['club dogo', 'ernia', 'lazza'],
        lastLog:'8 ore'
    }
]

// single friend
async function singleFriend(obj){

    const result = await search(obj.prefArtists[Math.floor(Math.random()*3)])

    const currentSong = result[Math.floor(Math.random()*25)];
    
    const firendsActivity = document.getElementById('firendsActivity');

    const row = document.createElement('div');

    row.classList.add('row', 'd-flex', 'mb-4', 'backgroundBlack');

    row.innerHTML = `<div class="col-8 d-flex text-truncate">
        <div class="me-2">
            <img src="${obj.firendImg}" class="rounded-circle" width="40px" alt="...">
        </div>
        <div class="">
            <p style="font-size: 0.9em;" class="m-0">${obj.friendName}</p>
            <p style="font-size: 0.7em;" class="m-0">${currentSong.title}<i class="bi bi-dot"></i>${currentSong.artist.name}</p>
            <p style="font-size: 0.7em;" class="m-0"><i class="bi bi-disc"></i> ${currentSong.album.title}</p>
        </div>
    </div>
    <div class="col text-end">
        <p style="font-size: 0.7em;" class="m-0 pe-2">${obj.lastLog}</p>
    </div>`

    firendsActivity.appendChild(row);
}

// load friends function
function loadFriends(){

    friends.forEach(friend => singleFriend(friend))

}  

// ---------- LOAD NAVBAR ----------

// playlist array 
const playlistNames = [
    "Be The Young Seasons 1-5",
    "Be The Young Seasons 6-8",
    "persona di m*rda (gen-feb 2023)",
    "Musical 2022",
    "pippo, pluto e paperino (nov-dec 2022)",
    "early stage emily syndrome (sett-ott 2022)",
    "Be the young",
    "'...' cit. Kimiko (lug-ago 2022)",
    "saggio vibes 💃🩰",
    "main character energy (mag-giu 2022)",
    "that fucking mood 🔪☠️",
    "VEE, CARLOTTA E GIACOMO VANNO A BOSIO",
    "An Emily Winchester kind of mood 🔪🖕",
    "landing page (mar-apr 2022)",
    "2021 lol",
    "cosa cazzo vuol dire questa affermazione (gen-feb 2022)",
    "honey and glass (nov-dic 2021)",
    "(Revenge) Training Arc 🦍",
    "Lidia 🤝 Emily",
    "minecraft e nintendo switch (sep-oct 2021)",
    "silvano d'orba? I hardly know her (lug - ago 2021)",
    "Culo 2021",
    "Frah Quintale Mix",
    "Francesco Guccini Mix",
    "Lo Stato Sociale Mix",
    "chapter 4/? (mag-giu 2021)",
    "Strive School <> The Hunt Motivation",
    "mi stavo dimenticando (mar-apr 2021)",
    "high school musical 1,2,3",
    "quanto trash cazzo",
    "The 2020 Playlist",
    "ma(ncanza) che cazzo ne so io (gen-feb 2021)",
    "VEE, CARLOTTA E GIACOMO VANNO A BOSIO",
    "An Emily Winchester kind of mood 🔪🖕",
    "landing page (mar-apr 2022)",
    "2021 lol",
    "cosa cazzo vuol dire questa affermazione (gen-feb 2022)",
    "honey and glass (nov-dic 2021)",
    "(Revenge) Training Arc 🦍",
    "Lidia 🤝 Emily",
    "minecraft e nintendo switch (sep-oct 2021)",
    "silvano d'orba? I hardly know her (lug - ago 2021)",
    "Culo 2021",
    "Frah Quintale Mix",
    "Francesco Guccini Mix",
    "Lo Stato Sociale Mix",
    "chapter 4/? (mag-giu 2021)",
    "Strive School <> The Hunt Motivation",
    "mi stavo dimenticando (mar-apr 2021)",
    "high school musical 1,2,3",
    "quanto trash cazzo",
    "The 2020 Playlist",
    "ma(ncanza) che cazzo ne so io (gen-feb 2021)",
    
];

// populate playlist column
function populatePlaylistColumn(){

    const playlistColumn = document.getElementById('playlistColumn');

    playlistNames.forEach(playlistName => {

        const element = document.createElement('a');

        element.setAttribute('href', 'javascript:void(0)');

        element.innerHTML = playlistName;

        playlistColumn.appendChild(element);

    })

}

// ---------- ALBUM COPERTINA ----------

// load album anteprima
async function loadSuggestedAlbum(obj){

    const jumbotron = document.getElementById('jumbotron');

    const result = await album(obj);

    // console.log(result)

    const div = document.createElement('div');

    div.classList.add('mx-2', 'my-1', 'py-3', 'px-2', 'd-flex');

    div.innerHTML = `<div id="imgJumbotron" class="me-4">
        <img src="${result.cover_medium}" alt="Album cover">
    </div>
    <div class="container-fluid">

        <div class="d-flex justify-content-between">

            <div class="d-flex align-items-start">
                <p>ALBUM</p>
            </div>

            <div>
                <p class="btn btn-sm bg-dark text-secondary rounded-pill">NASCONDI ANNUNCI</p>
            </div>

        </div>
        
        <div>
        
            <h2>${result.title}</h2>

            <p>${result.artist.name}</p>

            <p>Rievoca la memoria dei ${result.artist.name}</p> 
        </div>
        <div>

            <button class="btn btn-success rounded-pill px-4">Play</button>
            <button class="btn btn-dark rounded-pill px-4 ms-2">Salva</button>
            <a href="javascript:void(0)"><i class="bi bi-three-dots text-secondary ms-3"></i></a>

        </div>
    </div>`;

    jumbotron.appendChild(div);
    
}

// ---------- BUONASERA ----------

// array album buonasera
const albumsId = [119420782, 87420682, 309377597, 262561252, 315720947, 420621057]

// popola buonasera
function populateBuonasera(){
    
    albumsId.forEach(e => loadBuonasera(e));
    
}

// carica album buonasera
async function loadBuonasera(obj){

    const buonaseraAlbums = document.getElementById('buonaseraAlbums');

    const resultAlbum = await album(obj);

    console.log(resultAlbum)

    const div = document.createElement('div');

    div.classList.add('col', 'mb-3');

    div.innerHTML = `<div class="d-flex bg-dark rounded align-items-center">
    <div class="me-3">
        <img src="${resultAlbum.cover_big}" width="100px" alt="">
    </div>
    <div>
        <h5 class="m-1">${resultAlbum.title}</h5>
    </div>
</div>`

    buonaseraAlbums.appendChild(div);

}

// ---------- SUGGERITI ----------

// array suggeriti
const suggeriti = [
    {
        suggName: 'La tua estate da film',
        suggImg: './assets/img/main/image-2.jpg',
        description: 'La colonna sonora della tua estate'
    },
    {
        suggName: 'Street Culto',
        suggImg: './assets/img/main/image-19.jpg',
        description: 'La migliore musica rap underground' 
    },
    {
        suggName: 'Massima Concentrazione',
        suggImg: './assets/img/main/image-3.jpg',
        description: 'Musica di sottofondo' 
    },
    {
        suggName: 'Peaceful Piano',
        suggImg: './assets/img/main/image-4.jpg',
        description: 'Musica classica per tutti i gusti' 
    },
    {
        suggName: 'Estate 2022',
        suggImg: './assets/img/main/image-18.jpg',
        description: 'Classici intramontabili' 
    },
    {
        suggName: 'Lavora da casa',
        suggImg: './assets/img/main/image-16.jpg',
        description: 'Lavora al meglio' 
    },
    {
        suggName: 'Casa Dolce Casa',
        suggImg: './assets/img/main/image-15.jpg',
        description: 'Day-off & chill' 
    },
    {
        suggName: 'lofi Beats',
        suggImg: './assets/img/main/image-5.jpg',
        description: 'Se cerchi ispirazione' 
    },
    {
        suggName: 'New Music Friday',
        suggImg: './assets/img/main/image-17.jpg',
        description: 'Nuove uscite settimanali' 
    },
    {
        suggName: 'Jazz Vibes',
        suggImg: './assets/img/main/image-6.jpg',
        description: 'Libera la mente' 
    },
    {
        suggName: 'Caffè del Buongiorno',
        suggImg: './assets/img/main/image-7.jpg',
        description: 'Per una marcia in più' 
    },
    {
        suggName: 'sanguegiovane',
        suggImg: './assets/img/main/image-8.jpg',
        description: 'Band emergenti' 
    },
    {
        suggName: 'Canta Sotto la Doccia',
        suggImg: './assets/img/main/image-9.jpg',
        description: 'Libera il cantante che è in te' 
    },
    {
        suggName: 'Operazione Buonumore',
        suggImg: './assets/img/main/image-10.jpg',
        description: 'Ma perchè i capelli in faccia?' 
    },
    {
        suggName: 'Pulizie di casa',
        suggImg: './assets/img/main/image-13.jpg',
        description: 'Ti facciamo compagnia' 
    },
    {
        suggName: 'Allenamento a Casa',
        suggImg: './assets/img/main/image-14.jpg',
        description: 'Allenati al massimo' 
    },
]

// popola suggeriti
function populateSuggestion(){

    suggeriti.forEach(e => {

        const suggestionBox = document.getElementById('suggestionBox');

        const div = document.createElement('div');

        div.classList.add('col', 'mb-4');

        div.innerHTML = `<div class="card p-0 bg-dark h-100 mb-4">
        <img src="${e.suggImg}" class="card-img-top" alt="...">
        <div class="card-body text-white">
        <h5 class="card-title">${e.suggName}</h5>
        <p class="card-text">${e.description}</p>
        </div>
    </div>`

        suggestionBox.appendChild(div);

    })

}

// ---------- FETCHES ----------

// search fetch
const search = async (param) => {

    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${param}`

    try{

        const response = await fetch(url);

        if(response.ok) {

            const elementsArray = (await response.json()).data;

            return elementsArray

        }

    }catch(err){console.log(err)}

}

// album fetch
const album = async (param) => {

    const url = `https://striveschool-api.herokuapp.com/api/deezer/album/${param}`

    try{

        const response = await fetch(url);

        if(response.ok) {

            const elementsArray = await response.json();

            return elementsArray

        }

    }catch(err){console.log(err)}

}



window.onload = () => {

    loadFriends();

    populatePlaylistColumn();

    loadSuggestedAlbum(75621062);

    populateBuonasera();

    populateSuggestion();

}