console.log("person1: shows a tickets")
console.log("person2: shows a tickets")

function wifehavetickets(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("wife have a tickets")
        }, 1000);
    })
}

function husbandrequest(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Now we can go inside.")
        }, 2000);
    })
}

function wiferejects(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("No i am hungry.")
        }, 3000);
    })
}
function food(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Husband bought some popcorn for her.")
        }, 2000);
    })
}

function butter(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("wife want's some butter on popcorn.")
        }, 2000);
    })
}

function popcorn_butter(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("husband bought butter for popcorn.")
        }, 2000);
    })
}

function getColdDrinks(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve("husband bought some cold drinks also.")
        },2000)
    })
}



async function trying_something_new (){
    
        let bringticks = await wifehavetickets();
        console.log(bringticks);

        let husbandsreq = await husbandrequest();
        console.log(husbandsreq);

        let wifesayingno = await wiferejects();
        console.log(wifesayingno);

        let popcorn = await food();
        console.log(popcorn);

        let butteronpopcorn = await butter();
        console.log(butteronpopcorn);

        let popcornwithbutter = await popcorn_butter();
        console.log(popcornwithbutter);

        let ColdDrinks = await getColdDrinks();
        console.log(ColdDrinks);
    
}
trying_something_new();



console.log("person4: shows a tickets")
console.log("person5: shows a tickets")