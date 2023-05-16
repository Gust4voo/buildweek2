const param = 'queen';

search(param);

async function search(param){

    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${param}`

    try{

        const response = await fetch(url);

        if(response.ok) {

            const elementsArray = (await response.json()).data;

            console.log(elementsArray);

        }

    }catch(err){console.log(err)}

}