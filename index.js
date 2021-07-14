// pararrel == 2 things running at the same time
// async == they never run at the same time (exceptions) [you basically set the time of the running time] in javascript is the famous promise

//axios
const axios = require('axios').default;

function printGoogle(){
    getGoogle()
    .then((html)=>{
        console.log(html);
    })
    .catch((err)=>{
        console.error(err);
    })
    .finally(()=>{//skips the catch and runs the function anyway
        console.log('something');
    })
}

async function printGooglePeroMejor(){// uses a syncronous sintax to 'substitute' the resolve and reject
    try{
        const getGooglePromise = getGoogle();   
        console.log('alguma brisa');
        const promiseHtml = await getGooglePromise;//this guys makes the whole Promise process in the back.
        console.log(promiseHtml);
    }
    catch(err){
        console.error(err);
    }
    finally{
        console.log('é tetra');
    }

}

function getGoogle(){
    
    return new Promise((resolve, reject)=>{
        axios.get('https://www.google.com/')
            .then((response)=>{
                resolve(response.data);
            })
            .catch((err)=>{
                reject(err);
            })    
    });
}

function getUserName(){
    //const user;
    var getIdPromise = getId('xd');


    getIdPromise.then((userId)=>{// you can pass any parameterName in .then, it shall give you what is in the resolve. 
        console.log(userId);
    })
    .catch((err)=>{
        console.error(err);// its the .then but if the reject
    });
}

function getId(email){
    return new Promise((resolve, reject)=>{ // resolve == return as async  reject == a throw err
        setTimeout(()=>{
            var userId = 10;
            var err = 'Being unprepared for a presentation';
            if(err) reject(err)
            else resolve(userId);
        }, 3000);
    });
}


//print

console.log(printGooglePeroMejor());
console.log(printGoogle());