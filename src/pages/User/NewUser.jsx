import {useState} from "react";

const NewUser = () => {
  const [inputNome, setNome] = useState();
  const [inputSobreNome, setSobreNome] = useState();
  const [inputEmail, setEmail] = useState();
  return (
    <div>
      <h1>Criar Novo Usuário</h1>
      <form action="">
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
        <button type="button">Cadastrar Novo Usuário</button>
      </form>
    </div>
  );
};

export default NewUser;
