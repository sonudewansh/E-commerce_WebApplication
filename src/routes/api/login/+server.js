import { json } from '@sveltejs/kit';
import dbClient from '../../../db/dbClient.js';

export async function POST({ request }) {
    const client = await dbClient; // dbClient is from the db folder

    // Connect to the database
    const db = client.db("registration"); // 'registration' is the name of the database in MongoDB

    // Access the collection
    const collection = db.collection("register"); // 'register' is the name of the collection in MongoDB
    const requestData = await request.json();

    const {Username, Password} = requestData
    console.log(Username,Password);

        try {
            const user = await collection.findOne({ Username, Password });
            console.log(user);
            if (user) {
                return json({ success: true, message: 'Login successful', id:user._id });
            } else {
                return json ({ success: false, error: "Invalid userid and password"});
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            return json ({ success: false, error: 'Internal server error' })
        }
}




