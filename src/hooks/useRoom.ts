import { useState, useEffect } from 'react'
import { database } from '../services/firebase'

type FirebaseQuestions = Record<string , {
    author: {
        name: string;
        avatar: string;
    }

    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}>

type QuestionType = {
    id:string;
    author: {
        name: string;
        avatar: string;
    }

    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}

export function useRoom(roomId: string){
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [title, setTitle] = useState('');

    

    // Para consumir as perguntas do firebase

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
            // Object.entries() transforma os valores objeto em uma lista ("matriz") 
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                }
            })

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        })
    }, [roomId]);

    return { questions, title }
}