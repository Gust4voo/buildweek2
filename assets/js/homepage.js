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


// ---------- ALBUM COPERTINA ----------
async function loadSuggestedAlbum(obj){

    const songContainer = document.getElementById('songContainer');

    const resultArray = await album(obj);

    const result = resultArray[Math.floor(Math.random()*25)];

    console.log(result)

    const div = document.createElement('div');

    div.classList.add('bg-dark', 'my-2', 'rounded', 'jumbotronContainer');

    div.innerHTML = `<div class="mx-2 my-1 py-3 px-3 d-flex">
    <div id="imgJumbotron">
        <img src="${result.album.cover_big}" alt="Album cover">
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
            <h2>VIOLA (feat. Salmo)</h2>

            <p>Fedez,&nbsp;Salmo</p>

            <p>Ascolta il nuovo singolo di Fedez e salmo</p> 
        </div>
        <div>

            <button class="btn btn-success rounded-pill px-4">Play</button>
            <button class="btn btn-dark rounded-pill px-4 ms-2">Salva</button>
            <a href="javascript:void(0)"><i class="bi bi-three-dots text-secondary ms-3"></i></a>

        </div>

    </div>

</div>`;
}

// ---------- FETCHES ----------

// fecth album copertina
const album = async (query) => {

    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;

    try{

        const response = await fetch(url);

        if(response.ok){

            const getAlbums = (await response.json()).data;

            return getAlbums;

        } 


    }catch{err => console.log(err)}

}

// ---------- LOAD PAGINA MAIN ----------
loadSuggestedAlbum('queen');