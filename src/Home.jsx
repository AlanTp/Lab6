import react from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Home = () =>{

    return(
        <div id='home_body'>
          
            <h1 id='home_title'> Home</h1>
            <div id='home_texto'>
                <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla quis elit vitae mattis. Etiam sed eros cursus, congue nisl in,
                 malesuada diam. Curabitur molestie ligula a odio vehicula, malesuada finibus turpis pulvinar. Nam purus ligula, maximus ac arcu dignissim,
                 eleifend tristique nibh. Quisque ultrices non massa a ullamcorper. Mauris nec urna sit amet justo iaculis dignissim. Vestibulum libero 
                 ligula, euismod ut libero sit amet, sagittis imperdiet urna. Pellentesque vitae tortor non quam finibus posuere. Nam accumsan mollis ipsum 
                    non ullamcorper.

                Vivamus vel porttitor lorem. Cras sem nisl, euismod id metus nec, congue bibendum diam. Fusce eleifend vestibulum tincidunt. Vestibulum bibendum 
                ante semper tempus porta. Sed nulla ante, ornare ut pellentesque mattis, tincidunt eu tellus. Vestibulum gravida in nisi sed iaculis. Sed pretium 
                ex vitae elit consequat, ac rutrum sapien ullamcorper. Vivamus leo mauris, faucibus eu est at, euismod vestibulum nisl. Sed consequat tempor mi, 
                ac tincidunt est bibendum euismod. Aliquam a leo erat. Quisque elementum sed ipsum vitae accumsan. Suspendisse id magna erat. Cras sollicitudin 
                ligula sit amet enim commodo, ut placerat ex efficitur. Proin laoreet porta diam, at convallis lectus egestas ut.

                Nam lacus mauris, pretium vel sollicitudin quis, commodo sed mi. Integer porttitor, nunc vitae aliquet tincidunt, ex dolor volutpat tortor,
                 a aliquam mauris eros in est. Fusce ac pharetra massa. In ullamcorper, massa a eleifend dictum, lacus enim mattis nisl, id ultricies turpis ante nec 
                 ex. Vestibulum at rutrum nulla, ut molestie ante. Morbi scelerisque pharetra diam, eget hendrerit leo hendrerit et. Sed porta interdum erat, 
                 id tincidunt ligula facilisis nec.</b>
                 </p>
            </div>
            <div>
               <Button variant='contained' id='home_botao' color='primary'>
                 <Link to='/Contato' id='home_link'><b>Ir para Contato</b></Link></Button>
            </div>

        </div>
        

      
    )
}

export default Home;