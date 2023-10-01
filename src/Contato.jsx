import react from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Contato.css';

const Contato = () => {

    const imagem = 'https://picsum.photos/400/400';

    return     (
        <div id='contato_body'>
         <h1 id='contato_title'>  Contato</h1>
        <div>
            <h3>Lorem Picsum</h3>
           <img src={imagem} alt='imagem'/>
        </div>
        <div >
            <ul >
                <li><b>Nome:</b> Alan Meinberg</li>
                <li><b>Curso:</b> Analise e Desenvolvimento de Sistemas</li>
                <li><b>Prof:</b> JP</li>
            </ul>
        </div>
        <div>
            <Button variant='contained' color='primary' id='contato_botao'>
                <Link to='/' id='contato_link'><b>Go Home</b></Link>
            </Button>
        </div>
    </div>
    
    )
}

export default Contato;