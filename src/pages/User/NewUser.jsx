import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const NewUser = ({ editar = false, id }) => {
  const [title, setTitle] = useState(editar ? "Editar" : "Criar Novo");
  const navigate = useNavigate();
  const [inputNome, setNome] = useState("");
  const [inputSobreNome, setSobreNome] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const voltarPagina = () => navigate(-1);

  async function carregarUser() {
    const response = await api.get(`/users/${id}`);
    const user = response.data.data;
    setNome(user.first_name);
    setSobreNome(user.last_name);
    setEmail(user.email);
  }

  async function criarCadastro() {
    const user = {
      first_name: inputNome,
      last_name: inputSobreNome,
      email: inputEmail,
    };
    await api.post("/users", user);
    setNome();
    setEmail();
    setSobreNome();
    navigate(-1);
  }

  async function editarCadastro() {
    const user = {
      first_name: inputNome,
      last_name: inputSobreNome,
      email: inputEmail,
    };
    await api.put(`/users/${id}`, user);
    setNome();
    setEmail();
    setSobreNome();
    editar = false;
    navigate(-1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputNome.trim() || !inputSobreNome.trim() || !inputEmail.trim()) {
      setErro("Preencha todos os campos!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(inputEmail)) {
      setErro("E-mail inválido!");
      return;
    }

    setErro("");
    editar ? editarCadastro() : criarCadastro();
  }

  useEffect(() => {
      carregarUser()
      }, [editar]);

  return (
    <div className="content">
      <h1>{title} Usuário</h1>
      <form onSubmit={handleSubmit} className="list-user">
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
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <div className="buttons">
          <button type="submit" className="button create">
            {editar ? "Salvar Alterações" : "Cadastrar"}
          </button>
          <button type="button" className="button back" onClick={voltarPagina}>
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
