import { useState } from "react";
import "../pages/index.css";

const CardUser = ({ id, nome, email, imagem }) => {
  return (
    <li className="card-user">
      <div className="data-user">
        <img src={imagem} alt="Imagem do usuário!" />
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      <div className="buttons">
        <button type="button" className="button edit">
          Editar
        </button>
        <button type="button" className="button delete">
          Excluir
        </button>
      </div>
    </li>
  );
};

export default CardUser;
