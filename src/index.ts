let someId: number | string

someId = 1;
someId = "2";

let age: number = 10;

type Id = number | string;

function swapIdType(id: Id){
    if (typeof id === "string"){
        return parseInt(id);
    }else{
        return id.toString();
    }
}

interface User{
    type: 'user';
    username: string
    email: string
    id: Id;
}

interface Person{
    type: 'person';
    username: string
    email: string
    id: Id;
}


function logDetails(value: User | Person){
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.email, value.username);
    }
}

const newUser: User = {
    type: 'user',
    username: 'Mario',
    email: 'mario@fungi.com',
    id: someId
}

const newPerson: Person = {
    type: 'person',
    username: 'Luigi',
    email: 'luigi@fungi.com',
    id: age
}

logDetails(newUser);
logDetails(newPerson);
