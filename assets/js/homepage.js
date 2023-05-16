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



// ---------- FETCHES ----------

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
];

// search fetch
const search = async (param) => {

    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${param}`

    try{

        const response = await fetch(url);

        if(response.ok) {

            const elementsArray = (await response.json()).data;

            console.log(elementsArray);

            return elementsArray

        }

    }catch(err){console.log(err)}

}



window.onload = () => {

    loadFriends();

}