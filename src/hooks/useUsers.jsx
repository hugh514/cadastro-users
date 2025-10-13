import { useState } from "react";
import api from "../services/api";

export function useUsers() {
  const [usuario, setUsuario] = useState(null);

  async function carregarUsuarios(id) {
    const response = await api.get(`/users/${id}`);
    setUsuario(response.data.data);
  }
  return { usuario, carregarUsuarios};
}
