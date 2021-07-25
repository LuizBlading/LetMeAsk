import { createContext, useState, useEffect, ReactNode } from 'react'
import { firebase, auth } from '../services/firebase';

type User = {
    id: string;
    name: string;
    avatar: string;
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

// Criando um contexto para que os componentes compartilhem dados entre si
export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            // Se ja tiver um usuario com login feito
            // Apenas preenche as informações dele na tela novamente no estado da aplicação
            if (user) {
                const { displayName, photoURL, uid } = user;

                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google Account.');
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        // "descadastrar" o evento para que o eventListener pare de ouvir e de erro
        return () => {
            unsubscribe();
        }
    }, [])

    async function signInWithGoogle() {
        // Fazendo a autenticação do usuario
        const provider = new firebase.auth.GoogleAuthProvider();

        const result = await auth.signInWithPopup(provider);


        // Se houver um usuario como resposta
        // pegue as informações dele
        // E depois verifique se ele Não tem nome ou foto
        if (result.user) {
            const { displayName, photoURL, uid } = result.user

            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google Account.');
            }

            //  Setando as informações do usuario caso ele tenha nome e foto (ou seja, se a autenticação deu certo)
            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }

    }

    return (
        // user e signInWithGoogle estão sendo compartilhados com todos os componentes / rotas 
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}