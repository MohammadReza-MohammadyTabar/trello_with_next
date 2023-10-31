import { APPWRITE_DATABASE_ID,APPWRITE_TODOS_COLLECTION_ID } from "./configs";
import { database } from "@/appwrite"

export const getTodosGroupedByColumn=async ()=>{
    const data=await database.listDocuments(
        APPWRITE_DATABASE_ID!,
        APPWRITE_TODOS_COLLECTION_ID!
    )

    console.log(data);
    
}