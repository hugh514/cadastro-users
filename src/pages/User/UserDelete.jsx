import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUsers } from "../../hooks/useUsers";
import api from "../../services/api";

const UserDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { usuario, carregarUsuarios } = useUsers();
  useEffect(() => {
    carregarUsuarios(id);
  }, [id]);

  async function deletarUser() {
    await api.delete(`/users/${id}`);
    navigate(-1);
  }

  return (
    <div className="content">
      <h1>Deletar Usuário</h1>
      {usuario ? (
        <>
          <p>
            Deseja deletar o usuário <strong>{usuario.first_name}</strong>?
          </p>
          <div className="buttons delete-buttons">
            <button className="button delete" onClick={deletarUser}>
              Excluir Usuário
            </button>
            <button className="button back" onClick={() => navigate(-1)}>
              Voltar
            </button>
          </div>
        </>
      ) : (
        <p>Carregando usuário...</p>
      )}
    </div>
  );
};

export default UserDelete;
