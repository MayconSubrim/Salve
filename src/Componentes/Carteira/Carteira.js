import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carteira.css'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
class Carteira extends Component {
    render() {
        return (
            <div class="content">
                <div id="wrapper">
                    <div className="linha">
                        <div id="numero-coins">
                            <p className="salveqtd">Seus SalveCoins: <span className="texto-roxo">{this.props.coins}</span> <img src="/img/coin-dollar-2686.png" alt="" height='30px' /></p>
                        </div>
                    </div>
                    <div className="bg-gradiente">
                        &nbsp;
                    </div>
                    <div id="carteira-simulacao">
                        <p style={{ color: 'blue', marginTop: '10px', marginBottom: '10px', fontSize: '30px' }}>Simulador de investimento a longo prazo</p>
                        <div id="simulacoes">
                            <div id="simulacoes-blocos">
                                <div id="bloco-main">
                                    <AiOutlineQuestionCircle />
                                    <span style={{ float: 'right', fontSize: '40px' }}><p className="breve">EM BREVE</p>00</span>
                                </div>
                                <div className="bloco">
                                    <div className="inline-block" style={{paddingTop:'30px',marginRight:'30px'}}>
                                        <p>CDB:</p>
                                    </div>
                                    <div className="inline-block">
                                        <p>118,05% do CDI</p>
                                        <p className="texto-laranja">13,65% ao ano</p>
                                    </div>
                                </div>
                                <div className="bloco">
                                    <div className="inline-block" style={{paddingTop:'30px',marginRight:'30px'}}>
                                        <p>CDB:</p>
                                    </div>
                                    <div className="inline-block">
                                        <p>118,05% do CDI</p>
                                        <p className="texto-laranja">13,65% ao ano</p>
                                    </div>
                                </div>
                                <div className="bloco">
                                    <div className="inline-block" style={{paddingTop:'30px',marginRight:'30px'}}>
                                        <p>CDB:</p>
                                    </div>
                                    <div className="inline-block">
                                        <p>118,05% do CDI</p>
                                        <p className="texto-laranja">13,65% ao ano</p>
                                    </div>
                                </div>
                                <div className="bloco">
                                    <div className="inline-block" style={{paddingTop:'30px',marginRight:'30px'}}>
                                        <p>CDB:</p>
                                    </div>
                                    <div className="inline-block">
                                        <p>118,05% do CDI</p>
                                        <p className="texto-laranja">13,65% ao ano</p>
                                    </div>
                                </div>
                            </div>
                            <div id="simulacoes-texto">
                                <p>Simule aqui o quanto seu investimento vai gerar ao ano</p>
                            </div>
                        </div>
                    </div>
                    <div id="premios">
                        <p className="texto-gradiente">Resgate aqui seus premios culturais:</p>
                        <div className="premio">
                            <img style={{borderRadius:'5px 0px 5px 0px'}} src="https://cidadedesaopaulo.com/wp-content/uploads/2017/03/vitral.jpg" height="150" width="200"/>
                            <div className="premio-texto">
                                <h1 className="texto-laranja">OFICINA FAAP</h1>
                                <p>Dias: 10,24,30</p>
                                <p><span className="texto-laranja">Preço: </span> 35 <img src="/img/coin-dollar-2686.png" alt="" height='30px' /></p>
                            </div>
                        </div>
                        <div className="premio">
                            <img style={{borderRadius:'5px 0px 5px 0px'}} src="https://cidadedesaopaulo.com/wp-content/uploads/2017/03/vitral.jpg" height="150" width="200"/>
                            <div className="premio-texto">
                                <h1 className="texto-laranja">OFICINA FAAP</h1>
                                <p>Dias: 10,24,30</p>
                                <p><span className="texto-laranja">Preço: </span> 35 <img src="/img/coin-dollar-2686.png" alt="" height='30px' /></p>
                            </div>
                        </div>
                        <div className="premio">
                            <img style={{borderRadius:'5px 0px 5px 0px'}} src="https://cidadedesaopaulo.com/wp-content/uploads/2017/03/vitral.jpg" height="150" width="200"/>
                            <div className="premio-texto">
                                <h1 className="texto-laranja">OFICINA FAAP</h1>
                                <p>Dias: 10,24,30</p>
                                <p><span className="texto-laranja">Preço: </span> 35 <img src="/img/coin-dollar-2686.png" alt="" height='30px' /></p>
                            </div>
                        </div>
                        <div className="premio">
                            <img style={{borderRadius:'5px 0px 5px 0px'}} src="https://cidadedesaopaulo.com/wp-content/uploads/2017/03/vitral.jpg" height="150" width="200"/>
                            <div className="premio-texto">
                                <h1 className="texto-laranja">OFICINA FAAP</h1>
                                <p>Dias: 10,24,30</p>
                                <p><span className="texto-laranja">Preço: </span> 35 <img src="/img/coin-dollar-2686.png" alt="" height='30px' /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carteira;