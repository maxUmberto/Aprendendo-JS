// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'http://api.github.com/users/maxUmberto');
// xhr.send(null);

// xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4){
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// let minhaPromise = () => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();

//         xhr.open('GET', 'http://api.github.com/users/maxUmberto');
//         xhr.send(null);

//         xhr.onreadystatechange = () => {
//             if(xhr.readyState === 4){
//                 if(xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//                 else{
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     })
// }

axios.get('http://api.github.com/users/maxUmberto')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.warn(error);
    });