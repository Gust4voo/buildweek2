const param = 'queen';

async function search(param){

    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${param}`

    try{

        const response = await fecth (url);

        if(response.ok) {

            const elementsArray = await (response.json()).value;

            onsole.log(elementsArray);

        }

    }catch(err){console.log(err)}

}

search()