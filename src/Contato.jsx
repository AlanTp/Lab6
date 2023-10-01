import react from 'react';
import './Contato.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Contato = () => {

    const imagem = 'https://picsum.photos/400/400';

    return     (
        <div id='contato_body'>
         <h1 id='contato_title'> Contato</h1>
         <div>
            <h3>Imagem radom</h3>
         </div>
        <div >
           <img src={imagem} alt='imagem'/>
           <ul>
            <li><b>Nome:</b> Alan Meinberg</li>
            <li><b>Curso:</b> ADS</li>
            <li><b>Prof:</b>: JP</li>
           </ul>
        </div>
        <div >
        <Button variant='contained' color='success' id='contato_botao'> 
        <Link to='/' id='contato_link'> <b>Go Home</b></Link>
        </Button>
        </div>
    </div>
    
    )
}

export default Contato;