import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

// Importa ele aqui por que esse aquivo só sera carregado se esta página for chamada
import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth'; // Importando o useContext e o AuthContext

export function Home(){ 
    // Criando uma navegação para a proxima "pagina" (btn Criar sala com Google)
    const history = useHistory();
    const { signInWithGoogle , user} = useAuth();

    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }
        history.push('/rooms/new');             
    }


    return(
        <div id="page-auth">
            {/* Barra lateral com infos */}
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua aula em tempo-real</p>
            </aside>

            {/* Conteúdo principal com um "bloco" interno para a imagem e os botões */}
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk"/>
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google"/>
                        Crie sua sala com o Google
                    </button>

                    {/*  */}
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                            type='text'
                            placeholder="Digite o código da sala"
                        />

                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}