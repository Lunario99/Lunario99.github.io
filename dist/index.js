"use strict";
let someId;
someId = 1;
someId = "2";
let age = 10;
function swapIdType(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.email, value.username);
    }
}
const newUser = {
    type: 'user',
    username: 'Mario',
    email: 'mario@fungi.com',
    id: someId
};
const newPerson = {
    type: 'person',
    username: 'Luigi',
    email: 'luigi@fungi.com',
    id: age
};
logDetails(newUser);
