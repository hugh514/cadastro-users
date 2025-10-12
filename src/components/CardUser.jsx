import { useState } from "react";

const CardUser = ({ id, nome, email, imagem }) => {
  return (
    <li className="card-user">
      <div className="data-user">
        <img src={imagem} alt="Imagem do usuário!" />

        <p>Nome: {nome}</p>
        <small>
          <p>Email: {email}</p>
        </small>
      </div>
      <div className="buttons">
        <button type="button" className="edit">Editar</button>
        <button type="button" className="delete">Excluir</button>
      </div>
    </li>
  );
};

export default CardUser;
