import { Component } from "react";
import './Acessibilidade.css';
import { MdSettingsAccessibility } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { IoMdContrast } from 'react-icons/io'
import Modal from 'react-bootstrap/Modal';

class Acessibilidade extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
            space: 0,
            zoom: 0
        }
        this.inverterContraste = this.inverterContraste.bind(this);
        this.removeContrasteInverso = this.removeContrasteInverso.bind(this);
        this.modoEscuro = this.modoEscuro.bind(this);
        this.removeModoEscuro = this.removeModoEscuro.bind(this);
        this.dislexia = this.dislexia.bind(this);
        this.espacamento = this.espacamento.bind(this);
        this.zoom = this.zoom.bind(this);
    }

    inverterContraste() {
        this.removeModoEscuro();
        const html = document.querySelector('html');
        const icon = document.querySelector('#contrast-invert')
        icon.classList.toggle('active-icon');
        html.classList.toggle('contInvert');
    }

    modoEscuro() {
        this.removeContrasteInverso();
        const icon = document.querySelector('#modo-escuro');
        icon.classList.toggle('active-icon');
        document.querySelector('.content').classList.toggle('dark-theme');
        document.querySelector('.content').querySelectorAll('div').forEach(function (e) {
            e.classList.toggle('dark-theme');
        })
    }

    removeModoEscuro() {
        const icon = document.querySelector('#modo-escuro');
        icon.classList.remove('active-icon');
        document.querySelector('.content').classList.remove('dark-theme');
        document.querySelector('.content').querySelectorAll('div').forEach(function (e) {
            e.classList.remove('dark-theme');
        })
    }

    removeContrasteInverso() {
        const html = document.querySelector('html');
        const icon = document.querySelector('#contrast-invert')
        icon.classList.remove('active-icon');
        html.classList.remove('contInvert');
    }

    dislexia() {
        const bloco = document.querySelector('#bloco-dislexia');
        bloco.classList.toggle('active-texto');
        document.querySelectorAll('p').forEach(function (e) {
            e.classList.toggle('dislexia');
        })
        document.querySelectorAll('span').forEach(function (e) {
            e.classList.toggle('dislexia');
        })
        document.querySelectorAll('h1').forEach(function (e) {
            e.classList.toggle('dislexia');
        })
    }

    espacamento() {
        const bloco = document.querySelector('#bloco-espaco');
        let espacamento = this.state.space;
        if (espacamento === 3) {
            espacamento = 0
        } else {
            espacamento++
        }

        switch (espacamento) {
            case 0:
                bloco.classList.remove('active-texto');
                document.querySelector('#espacamento-3').classList.remove('active-indicator')
                document.querySelectorAll('p').forEach(function (e) {
                    e.classList.remove('espaco3');
                })
                document.querySelectorAll('span').forEach(function (e) {
                    e.classList.remove('espaco3');
                })
                document.querySelectorAll('h1').forEach(function (e) {
                    e.classList.remove('espaco3');
                })
                break;
            case 1:
                bloco.classList.add('active-texto');
                document.querySelector('#espacamento-1').classList.add('active-indicator')
                document.querySelectorAll('p').forEach(function (e) {
                    e.classList.add('espaco1');
                })
                document.querySelectorAll('span').forEach(function (e) {
                    e.classList.add('espaco1');
                })
                document.querySelectorAll('h1').forEach(function (e) {
                    e.classList.add('espaco1');
                })
                break;
            case 2:
                document.querySelector('#espacamento-1').classList.remove('active-indicator')
                document.querySelector('#espacamento-2').classList.add('active-indicator')
                document.querySelectorAll('p').forEach(function (e) {
                    e.classList.remove('espaco1');
                    e.classList.add('espaco2');
                })
                document.querySelectorAll('span').forEach(function (e) {
                    e.classList.remove('espaco1');
                    e.classList.add('espaco2');
                })
                document.querySelectorAll('h1').forEach(function (e) {
                    e.classList.remove('espaco1');
                    e.classList.add('espaco2');
                })
                break;
            case 3:
                document.querySelector('#espacamento-2').classList.remove('active-indicator')
                document.querySelector('#espacamento-3').classList.add('active-indicator')
                document.querySelectorAll('p').forEach(function (e) {
                    e.classList.remove('espaco2');
                    e.classList.add('espaco3');
                })
                document.querySelectorAll('span').forEach(function (e) {
                    e.classList.remove('espaco2');
                    e.classList.add('espaco3');
                })
                document.querySelectorAll('h1').forEach(function (e) {
                    e.classList.remove('espaco2');
                    e.classList.add('espaco3');
                })
                break;
        }
        this.setState({ space: espacamento })
    }

    zoom() {
        const bloco = document.querySelector('#bloco-zoom');
        let zoom = this.state.zoom;
        if (zoom === 4) {
            zoom = 0
        } else {
            zoom++
        }

        switch (zoom) {
            case 0:
                bloco.classList.remove('active-texto');
                document.querySelector('#zoom-4').classList.remove('active-indicator')
                document.querySelectorAll('p').forEach(function (e) {
                    e.classList.remove('zoom4');
                })
                document.querySelectorAll('span').forEach(function (e) {
                    e.classList.remove('zoom4');
                })
                document.querySelectorAll('h1').forEach(function (e) {
                    e.classList.remove('zoom4');
                })
                break;
            case 1:
                bloco.classList.add('active-texto');
                document.querySelector('#zoom-1').classList.add('active-indicator')
                document.querySelectorAll('p').forEach(function (e) {
                    e.classList.add('zoom1');
                })
                document.querySelectorAll('span').forEach(function (e) {
                    e.classList.add('zoom1');
                })
                document.querySelectorAll('h1').forEach(function (e) {
                    e.classList.add('zoom1');
                })
                break;
            case 2:
                document.querySelector('#zoom-1').classList.remove('active-indicator')
                document.querySelector('#zoom-2').classList.add('active-indicator')
                document.querySelectorAll('p').forEach(function (e) {
                    e.classList.remove('zoom1');
                    e.classList.add('zoom2');
                })
                document.querySelectorAll('span').forEach(function (e) {
                    e.classList.remove('zoom1');
                    e.classList.add('zoom2');
                })
                document.querySelectorAll('h1').forEach(function (e) {
                    e.classList.remove('zoom1');
                    e.classList.add('zoom2');
                })
                break;
            case 3:
                document.querySelector('#zoom-2').classList.remove('active-indicator')
                document.querySelector('#zoom-3').classList.add('active-indicator')
                document.querySelectorAll('p').forEach(function (e) {
                    e.classList.remove('zoom2');
                    e.classList.add('zoom3');
                })
                document.querySelectorAll('span').forEach(function (e) {
                    e.classList.remove('zoom2');
                    e.classList.add('zoom3');
                })
                document.querySelectorAll('h1').forEach(function (e) {
                    e.classList.remove('zoom2');
                    e.classList.add('zoom3');
                })
                break;
            case 4:
                document.querySelector('#zoom-3').classList.remove('active-indicator')
                document.querySelector('#zoom-4').classList.add('active-indicator')
                document.querySelectorAll('p').forEach(function (e) {
                    e.classList.remove('zoom3');
                    e.classList.add('zoom4');
                })
                document.querySelectorAll('span').forEach(function (e) {
                    e.classList.remove('zoom3');
                    e.classList.add('zoom4');
                })
                document.querySelectorAll('h1').forEach(function (e) {
                    e.classList.remove('zoom3');
                    e.classList.add('zoom4');
                })
                break;
        }
        this.setState({ zoom: zoom })
    }

    render() {
        return (
            <div id="access-wrapper">
                <div id="access-button" title="Acessibilidades adicionais" onClick={() => this.setState({ show: true })}>
                    <MdSettingsAccessibility color="white" fontSize="19px" />
                </div>
                <div id="access-menu">
                    <Modal id="modal-access-menu" show={this.state.show} scrollable={true} backdrop={true} onHide={() => this.setState({ show: false })}>
                        <Modal.Header id="modal-access-head" closeButton closeVariant="white">
                            <Modal.Title>Acessibilidades Adicionais</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="linha-acess">
                                <div className="bloco-full">
                                    <div id="contrast-invert" className="bloco-icon" title="Contraste Invertido" onClick={this.inverterContraste}>
                                        <IoMdContrast />
                                    </div>
                                    <div id="modo-escuro" className="bloco-icon" title="Modo Escuro" onClick={this.modoEscuro}>
                                        <BsFillMoonFill />
                                    </div>
                                </div>
                            </div>
                            <div className="linha-acess">
                                <div className="bloco-half" >
                                    <div id="bloco-espaco" onClick={this.espacamento} className="bloco-texto">
                                        <img src="/img/espacamento.png" alt="espaçamento" />
                                        <p>Espaçamento</p>
                                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                                            <div id="espacamento-1" className="indicator" ></div>
                                            <div id="espacamento-2" className="indicator" ></div>
                                            <div id="espacamento-3" className="indicator" ></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bloco-half">
                                    <div id="bloco-zoom" className="bloco-texto" onClick={this.zoom}>
                                        <img src="/img/zoom.png" alt="zoom" />
                                        <p>Zoom</p>
                                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                                            <div id="zoom-1" className="indicator" ></div>
                                            <div id="zoom-2" className="indicator" ></div>
                                            <div id="zoom-3" className="indicator" ></div>
                                            <div id="zoom-4" className="indicator" ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="linha-acess">
                                <div className="bloco-half">
                                    <div id="bloco-dislexia" className="bloco-texto" onClick={this.dislexia}>
                                        <img src="/img/dislexia.png" alt="dislexia" />
                                        <p>Dislexia</p>
                                    </div>
                                </div>
                            </div>

                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Acessibilidade;
