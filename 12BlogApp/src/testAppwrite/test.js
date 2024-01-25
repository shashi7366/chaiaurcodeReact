import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('65a50c7e24aa639deb8f') // Your project ID
;

const promise = account.get();

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log("error in getting current user:",error); // Failure
});