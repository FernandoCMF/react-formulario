import React from "react";
import "./App.css";
import ContentMain from "./Components/ContentMain/ContentMain";

function App() {
  return (
    <div className='App'>
      <ContentMain
        left_title='Seja Bem-vindo'
        left_subtitle='Já faz parte da nossa equipe?'
        btnTitle='Login'
      />
    </div>
  );
}

export default App;
