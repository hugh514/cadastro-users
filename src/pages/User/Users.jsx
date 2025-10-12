import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardUser from "../../components/CardUser";
import api from "../../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function getUsers() {
    const usersFromApi = await api.get("/users");
    setUsers(usersFromApi.data.data);
  }

  useEffect(() => {
    getUsers();
  }, [users]);

  const NewUser = () => {
    navigate("/cadastrar")
  }
  return (
    <main className="content">
      <header className="cabecalho">
        <h1 className="title">Usuários</h1>
        <button type="button" className="button create" onClick={NewUser}>
          + Novo Usuário
        </button>
      </header>
      <section className="list-user">
        {users.map((user) => (
          <CardUser
            key={user.id}
            id={user.id}
            nome={`${user.first_name} ${user.last_name}`}
            email={user.email}
            imagem={user.avatar}
          />
        ))}
      </section>
    </main>
  );
};

export default Users;
