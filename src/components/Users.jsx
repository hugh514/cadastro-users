import { useState, useEffect } from "react";
import CardUser from "./CardUser";
import api from "../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const usersFromApi = await api.get("/users");
    setUsers(usersFromApi.data.data);
  }

  useEffect(() => {
    getUsers();
  }, [users]);
  return (
    <main className="content">
      <header className="cabecalho">
        <h1 className="title">Usuários</h1>
        <button type="button" className="add-user">
          + Novo Usuário
        </button>
      </header>
      <section className="list-user">
        {users.map((user) => (
          <CardUser
            key={user.id}
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
