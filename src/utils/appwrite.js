import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66d17001002ae61dd7e7'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
