// write code submit form and store to firebase database

import db from '../dbconnect/firebaseconfig';
import { doc, setDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server.js';
import { v4 as uuidv4 } from 'uuid';


export async function POST(req) {
    const body = await req.json();
    const { name, email, message } = body;
    const id = uuidv4();

    try {
        await setDoc(doc(db, 'contacts', id), {
            id: id,
            name: name,
            email: email,
            message: message,
            created_at: new Date().toISOString()
        });


        return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
    } catch (e) {
        console.error('Error adding document:', e);
        return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
    }

}

