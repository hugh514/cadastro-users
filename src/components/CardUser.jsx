import "../styles/index.css";
import { useNavigate } from "react-router-dom";


const CardUser = ({ id, nome, email, imagem }) => {
  const navigate = useNavigate();

  const Navegar = (tipo) => {
    navigate("/" + tipo + "/"+ id)
  }
  return (
    <li className="card-user">
      <div className="data-user">
        <img src={imagem} alt="Imagem do usuário!" />
        <p>
          <strong>Nome:</strong> {nome}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
      <div className="buttons">
        <button type="button" className="button edit" onClick={() => Navegar("editar")}>
          Editar
        </button>
        <button type="button" className="button delete" onClick={() => Navegar("excluir")}>
          Excluir
        </button>
      </div>
    </li>
  );
};

export default CardUser;
