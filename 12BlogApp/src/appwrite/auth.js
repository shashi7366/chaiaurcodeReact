import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf"



class auth {
    client;
    account;
    promise;

    constructor() {
       // console.log(conf);
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.projectId);

        this.account = new Account(this.client);
    }

    async userCreateAccount(email, password) {

        try{
            return await this.account.create(ID.unique(), email, password);
        }catch(error){
            console.log("error occured while creating account");
            return error;
        }
        
    }

   async userLogin(email, password) {

        try{
            return await this.accountaccount.createEmailSession(email, password);
        }catch(error){
            console.log("appwrite error occured while login ",error);
        }
       
    }

    async userLogout() {
        console.log("logout called");
        try{
            return await this.account.deleteSessions();
        }catch(error){
            return error;
        }
    }

    async getUser() {
       try{
       // console.log("hi from get user");
       return data=await this.account.get();
       }catch(error){
        return false;
       }
    }

}

export const authObj = new auth();

export default auth;
