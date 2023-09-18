import { useState } from "react";

import ArticleList from "./Components/ArticleList/ArticleList";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";

const App = () => {
  const [user, setUser] = useState();
  const usuarioExiste = Boolean(user);
  console.log(user)
  return (
    <div className="h-screen">
    <Header user={user}/>
    {usuarioExiste && <ArticleList/>}
    {usuarioExiste || <Form addUsuario={setUser}/>}
    
    </div>
  )
}

export default App;

