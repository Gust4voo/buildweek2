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

// ---------- POPOLA ARTISTA ----------
async function popolaArtista(id){

    // inserimento immagine artista come sfondo
    const coverArtist = document.getElementById('coverArtist');

    const imgArtist = (await artist(id)).picture_xl;
    
    coverArtist.style.backgroundImage = `url(${imgArtist})`

    // ricerca degli album popolari
    const nameArtist = (await artist(id)).name;

    const album = (await search(nameArtist));

    // info su cover
    const covername = document.getElementById('nomeArtista');

    covername.innerHTML = nameArtist.toUpperCase();

    const ascoltatori = document.getElementById('ascoltatori');

    ascoltatori.innerHTML = (await artist(id)).nb_fan.toLocaleString();

    if(id === '7917'){

        const btnEaster = document.createElement('button');

        btnEaster.type = 'button';

        btnEaster.setAttribute('onclick', 'fronte()');

        btnEaster.classList.add('btn', 'bg-warning');

        btnEaster.innerHTML = 'ELIMINA FRONTE';

        const easterEggDue = document.getElementById('easterEggDue');

        easterEggDue.appendChild(btnEaster);

    }
    
    let c = 0;

    // inserimento album popolari
    for(i = 0; i < 5; i++){

        c++
        
        const albums = document.getElementById('albums');

        const row = document.createElement('div');

        row.classList.add('row', 'mb-4', 'albumOver', 'p-2');

        const thisAlbum = album[i];
        console.log(thisAlbum)

        row.innerHTML = `<div class="col-6 me-3 d-flex align-items-center">
        <p class="m-0 me-3">${c}</p>
        <img class="me-3" src="${thisAlbum.album.cover_xl}" width="75px" alt="">
        <a href="./albumpage.html?id=${thisAlbum.album.id}"><p class="m-0">${thisAlbum.title}</p></a> 
    </div>
    <div class="col d-flex align-items-center justify-content-end">
        <p class="m-0">${thisAlbum.rank.toLocaleString()}</p>
    </div>
    <div class="col d-flex align-items-center justify-content-end">
        <p class="m-0">${(timeConverter(thisAlbum.duration))}</p>
    </div>`

        albums.appendChild(row);

    }

    // brani che ti piacciono
    const likes = document.getElementById('likes');

    const likesArtist = document.createElement('div');

    likesArtist.classList.add('d-flex');

    likesArtist.innerHTML = `<div class="me-3 position-relative">
    <img src="${imgArtist}" width="100px" class="rounded-circle" alt="">
    <div class="pt-1 px-1 rounded-circle position-absolute bottom-0 end-0" style="background-color: #00D052;">
        <i class="bi bi-heart-fill text-white"></i> 
    </div>

</div>
<div class="d-flex flex-column align-items-start justify-content-center">
    <h5>Hai messo mi piace a ${Math.floor(Math.random()*30)} brani</h5>
    <p class="m-0">Di ${nameArtist}</p>
</div>`;

    likes.appendChild(likesArtist);

}

// minuti e secondi
function timeConverter(sec){

    const minuti = Math.floor(sec/60);

    const secondi = sec % 60;


    if(sec > 500){
        return minuti + ' minuti ' + secondi + ' dadegi.';
    }else{
        return minuti + ':' + secondi;
    }
    
}

// populate player
async function populatePlayer(id, trackId){

    const tracklist = (await album(id)).tracks.data;
    
    for(i = 0; i < tracklist.length; i++){
        if(tracklist[i].id === trackId){

            const currentPlay = document.getElementById('currentPlay');

            currentPlay.innerHTML = '';

            const div = document.createElement('div');

            div.classList.add('d-flex', 'justify-content-start', 'p-2', 'gap-2');

            div.innerHTML = `<div class="mx-1 bg-secondary">
            <img src="${tracklist[i].album.cover_big}" style="max-width: 75px; max-height: 75px" alt="Album Cover"/>
        </div>
        <div class="pt-2">
            <h6 class="text-truncate">${tracklist[i].title}</h6>
            <p>${tracklist[0].artist.name}</p>
        </div>
        <button class="btn text-light" style="background-color: transparent">
            <i class="bi bi-heart"></i>
        </button>`

            currentPlay.appendChild(div);

            localStorage.setItem('data', JSON.stringify([id, trackId]));
            
        }
    }

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

// artist fetch
const artist = async (param) => {

    const url = `https://striveschool-api.herokuapp.com/api/deezer/artist/${param}`

    try{

        const response = await fetch(url);

        if(response.ok) {

            const elementsArray = await response.json();

            return elementsArray

        }

    }catch(err){console.log(err)}

}

//fronte
function fronte(){

    const infoArtist = document.getElementById('infoArtist');

    infoArtist.innerHTML = '';

    const coverArtist = document.getElementById('coverArtist');
    
    coverArtist.style.backgroundImage = 'url(./assets/img/easter_egg_2.jpeg)';

}

window.onload = () => {

    loadFriends();

    populatePlaylistColumn();

    const param = new URLSearchParams(location.search)
    const id = param.get("id");

    popolaArtista(id);

    const data = JSON.parse(localStorage.getItem('data'));
    
    if(localStorage.getItem('data')){
        populatePlayer(...data);
    }

}