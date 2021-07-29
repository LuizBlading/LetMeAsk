import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

// criando uma var de parametro p/ sempre receber o código que o usuário copiou
type RoomCodeProps = {
    code: string
}


export function RoomCode(props: RoomCodeProps){

    function copyRoomCodeToClipboard(){
        // api do navegador que permite copiar o texto
        navigator.clipboard.writeText(props.code);
    }

    return(
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code"/>
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}