import React from "react";
import CardUser from "./CardUser";

const Users = () => {
  return (
    <main>
      <header>
        <h1 className="title">Usuários</h1>
        <button type="button">Novo Usuário</button>
      </header>
      <section className="list-user">
        <CardUser id={0} nome={"Hugão"} email={"santos.email.com"} imagem={"https://i.pravatar.cc/150"}/>
      </section>
    </main>
  );
};

export default Users;
