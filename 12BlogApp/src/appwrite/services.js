import { Client, Databases, ID,Query } from "appwrite";
import { appwriteUrl, projectId, databaseId, collectionId, bucketId } from "../conf/conf";


class Services {
    client;
    databases;
    storage;

    constructor() {

        this.client = new Client()
            .setEndpoint(appwriteUrl)
            .setProject(projectId);

        this.databases = new Databases(this.client);
        this.storage=new Storage(tis.client);
    }

    // To Add blogs ..................................................................
    addBlog({ title, content, featuredImage, status, userId }) {

        promise = this.databases.createDocument(
            databaseId,
            collectionId,
            ID.unique(),
            { title, content, featuredImage, status, userId }
        );

        promise.then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    }

    //To update an blog....................................................................
    updateBlog({ id, title, content, featuredImage, status, userId }) {

        promise = databases.updateDocument(databaseId, collectionId, id, { id, title, content, featuredImage, status, userId });

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }

    //To get all blogs........................................................................
    getAllBlogs() {
        queries=[Query.equal("status","active")]
        promise = databases.listDocuments(databaseId, collectionId,queries);

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }


    //To get a particular...........................................................................
    async getBlog(id){
        try{
            return await databases.getDocument(databaseId, collectionId, id);
        }catch(error){
            console.log("fetching document error ",error);
            return false;
        }
    }

    //To delete a blog................................................................................
    async deleteBlog(id){
        try{
            return await databases.deleteDocument(databaseId, collectionId, id);
        }catch(error){
            console.log("error while deleting a document ",error);
        }
    }

    //To upload a file ................................................................................
    async uploadImage(file){
        try{
            return await storage.createFile(bucketId, ID.unique(), file);
        }catch(error){
            console.log("uploading image error ",error);
            return false;
        }
    }

    // To delete a file ..................................................................................
   async deleteImage(id){
        try{
            return await storage.deleteFile(bucketId, id);
        }catch(error){
            console.log("error while deleting file in appwrite ",error);
        }
    }

    //To get a file preview..............................................................................
    getImagePreview(id){
        try{
            return storage.getFilePreview(bucketId, id);
        }catch(error){
            console.log("error while previewing image ",error);
            return false;
        }
    }
}