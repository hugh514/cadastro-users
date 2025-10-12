import React from "react";
import CardUser from "./CardUser";

const Users = () => {
  return (
    <main className="content">
      <header className="cabecalho">
        <h1 className="title">Usuários</h1>
        <button type="button" className="add-user">+ Novo Usuário</button>
      </header>
      <section className="list-user">
        <CardUser id={0} nome={"Hugão"} email={"santos@email.com"} imagem={"https://i.pravatar.cc/150"}/>
        <CardUser id={0} nome={"Hugão"} email={"santos@email.com"} imagem={"https://i.pravatar.cc/150"}/>
      </section>
    </main>
  );
};

export default Users;
