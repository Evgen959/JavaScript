//  promises

const promiseExemple = new Promise(

    (resolve, reject) => {

        // const timeHandler = () => {
        //     const fortuna = Math.random();
        //     if (fortuna > 0.5) {
        //         resolve(fortuna);
        //     } else {
        //         reject(fortuna)
        //     }
        // }
        // setTimeout(timeHandler, 5000);

        const fortuna = Math.random();
        resolve(fortuna);        
    }
);

const collbackForPromiseFullfild = (d) => {console.log('Размер алмаза ' + d)}

promiseExemple
   .then(collbackForPromiseFullfild)

console.log(promiseExemple);



// fetch

// fetch('https://jsonplaceholder.typicode.com/todos').then()
    
const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos');

console.log(fetchResult);


fetchResult
    .then((response) => {return response.json()})
    .then((date) => {console.log(date.slice(0, 4))})
    .catch((error) => {console.log(error)})
    .finally(() => {console.log('Наконец-то')})





// fetchResult
//     .then((response) => {return response.json()})
//     .then((date) => {console.log(date)})
    // .catch((error) => {console.log(error)})
    // .finally(() => {console.log('Наконец-то')})







