import "../../App.css";
import React from "react";
import ContentHome from "../../Components/ContentHome/ContentHome";

function Home() {
  return (
    <>
      <ContentHome
        left_title='Seja Bem-vindo'
        left_subtitle='Já faz parte da nossa equipe?'
        left_btnTitle='Login'
        rigth_subtitle='Faça parte da nossa equipe'
        rigth_btnTitle='Cadastrar'
      />
    </>
  );
}

export default Home;
