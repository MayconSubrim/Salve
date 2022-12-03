import { Component } from "react";
import { BsFillGearFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Perfil.css";
import { withRouter } from "../../RouterCLass/withRouter";
import authContext from "../../context/authContext";


class Perfil extends Component {
  static contextType = authContext;


  constructor(props) {
    super(props);
    this.Rota = this.Rota.bind(this);
    this.state = {
      show: false,
    };
  }

  Rota() {
    this.context.setLoged(false);
    localStorage.removeItem("Dados");
    localStorage.removeItem("theme");
    this.props.navigate("/");
  }

  render() {
    return (
      <div class="content">
        <div id="wrapper">
          <div className="linha">
            <div id="nome-perfil">
              <img src={this.props.linkImg} alt="perfil" />
              <div id="nome-texto" className="inline-block">
                <p>{this.props.nome}</p>
                <p>{this.props.escola}</p>
                <i onClick={() => this.setState({ show: true })}>
                  <BsFillGearFill />
                </i>
                <i onClick={this.Rota}>
                  {" "}
                  <FiLogOut className="logout" />
                </i>
              </div>
            </div>
            <div className="linha">
            <div id="perfil-detalhe" className="inline-block">
              <p>Rank: {this.props.rank}</p>
              <p>Assistiu: {this.props.qtCursos} cursos</p>
              <p>Recorde no game: {this.props.recorde}</p>
            </div>
            <div className="inline-block" style={{}}>
              <span style={{ float: "right",  color: " #F56928", fontSize: "30px" }}>
                "O dinheiro cresce na árvore da persistência"
              </span>
            </div>
          </div>
          </div>
          
          <Modal
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <p className="texto-laranja">Configuração de usuario:</p>
              <p className="campo">Nome: {this.props.nome}</p>
              <p className="campo">Idade: {this.props.idade}</p>
              <p className="campo">E-mail: {this.props.email}</p>
              <p className="campo">Endereço: {this.props.endereco}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="success"
                onClick={() => this.setState({ show: false })}
              >
                Salvar
              </Button>
              <Button
                variant="danger"
                onClick={() => this.setState({ show: false })}
              >
                Cancelar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(Perfil);
