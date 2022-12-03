import "./GamePage.css";

export default function  GamePage () {

    return(


        <div class="content">
            <h2>Selecione o game:</h2>

            <div className="Wraper">
            <div className="imagem">
                <div className="games">
                    
                    <h3>Salvinhoinho</h3>
                    <p>Um jogo ends-runner, onde o jogador caminha por um cenario com o objetivo de ficar o maximo de tempo possivel vivo.</p>
                    <button>Jogar</button>
                    
                </div>
                </div>
                <div className="games">
                    <h3 className="embreve">EM BREVE</h3>
                </div>
                <div className="games">
                    <h3 className="embreve">EM BREVE</h3>
                </div>
            </div>
        </div>

    )

}