// const fetch = require("node-fetch");// ესე დაიმპორტებამ რატომღაც არ იმუშავა ერორს მაძლევდა.

import fetch from "node-fetch";
const url = "https://jsonplaceholder.typicode.com/users";

function isConnected(res) {
    if (res.status === 200) {
        return res
    } else {
        let err = new Error(res.statusText);
        err.response = res;
        throw err;
    }
}

function getUser(res) {
    return res.json()
  }

fetch(url)
    .then(isConnected)
    .then(getUser)
    .then(json => console.log(json))
    .catch(err => console.error(err))

