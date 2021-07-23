import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

// Importa ele aqui por que esse aquivo só sera carregado se esta página for chamada
import '../styles/auth.scss';

export function Home(){ 
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
                    <button>
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

                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}