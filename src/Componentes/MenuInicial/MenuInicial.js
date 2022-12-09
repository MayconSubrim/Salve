import { useNavigate } from "react-router-dom";
import "./MenuInicial.css"





export default function MenuInicial() {

    const navigate = useNavigate();

    return(
    
  
      <div className="content"> 
          
          <div className='banner-principal'>
          <img className='img' src="/images/SALVE.png" alt=""/> 
          </div>

        <h1 className="acesso">Acesse agora:</h1>

          <div className='banner-story'>
            <img className='img-story' src="/images/Story.png" alt=""/>
  
            <img className='img-videos' src="/images/Videos.png" onClick={()=>{navigate("/cursos")} } alt=""/>  
         
          </div>
  
      
  
    </div>
         
           
    );
  }