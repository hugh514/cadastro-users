import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./User/users.jsx";
import UserEdit from "./User/UserEdit.jsx";
import NewUser from "./User/NewUser.jsx";
import UserDelete from "./User/UserDelete.jsx";
import "../styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />}/>
        <Route path="/editar/:id" element={<UserEdit />} />
        <Route path="/excluir/:id" element={<UserDelete />} />
        <Route path="/cadastrar" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
