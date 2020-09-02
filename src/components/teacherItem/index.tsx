import React from 'react';


import wppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

export default function TeacherItem() {
    return ( 
        <article className="teacher-item">
            <header>
                <img 
                src="https://avatars2.githubusercontent.com/u/66017333?s=460&u=a09e503ca515e932cb7a9b5b91dd451e56f9d481&v=4" 
                alt="Gustaf Toledo"
                />
                <div>
                    <strong>Gustaf Toledo</strong>
                    <span>Química</span>
                </div>
            </header>

                <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                </p>

            <footer>
                <p>
                Preço/hora
                <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={wppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}