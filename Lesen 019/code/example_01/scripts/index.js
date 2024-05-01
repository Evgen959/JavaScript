const urlApi = 'https://jsonplaceholder.typicode.com/todos';
let dataResponse;

// async function getData(params) {
// }

const getData = async (api) => {

    try {
        const serverResponse = await fetch(api);
        dataResponse = await serverResponse.json();
        dataWork(dataResponse);
    } 
    catch (err) {
        console.log(err);
    }
   
}
getData(urlApi);

// const promiseFromAsync = getData(urlApi);
// promiseFromAsync.catch();

function dataWork (data) {
    console.log(data);
}






