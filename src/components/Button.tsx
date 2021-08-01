import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

export function Button({isOutlined = false, ...props}: ButtonProps){
    return(
        <button className={`button ${isOutlined ? 'outlined' : ''}`}
         {...props}/>
    )
}

// {...props} passa todos os parametros para o botão