import {useState} from "react";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const navigate = useNavigate();
  const [inputNome, setNome] = useState();
  const [inputSobreNome, setSobreNome] = useState();
  const [inputEmail, setEmail] = useState();


  const voltarPagina = () => navigate(-1);
  return (
    <div className="content">
      <h1>Criar Novo Usuário</h1>
      <form action="" className="list-user">
        <input
          type="text"
          placeholder="Nome"
          value={inputNome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={inputSobreNome}
          onChange={(e) => setSobreNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={inputEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="buttons">
        <button type="button" className="button create">Cadastrar</button>
        <button type="button" className="button back" onClick={voltarPagina}>Voltar</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
