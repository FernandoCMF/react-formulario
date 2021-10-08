import "../../App.css";
import React from "react";
import ContentHome from "../../Components/ContentMain/ContentHome";

function Home() {
  return (
    <>
      <ContentHome
        left_title='Seja Bem-vindo'
        left_subtitle='Já faz parte da nossa equipe?'
        btnTitle='Login'
      />
    </>
  );
}

export default Home;
