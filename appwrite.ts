import { ID,Account, Client, Databases ,Storage} from 'appwrite';
import {APPWRITE_PROJECT_ID} from '@/lib/configs'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(APPWRITE_PROJECT_ID!);

const account =new Account(client)
const database=new Databases(client)
const storage=new Storage(client)

export {client,account,database,storage,ID}