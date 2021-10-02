import React from "react";
import "./ContentMain.css";
import image from "../../Assets/img-1.png";

function ContentMain(props) {
  return (
    <div className='content-main'>
      <div className='content-half'>
        <div className='content-wrapper__left'>
          <div className='content-wrapper__info'>
            <div className='info-image'>
              <img src={image} alt='logo' />
            </div>
            <div className='info-text'>
              <h2 className='title'>{props.left_title}</h2>
              <p className='subtitle'>{props.left_subtitle}</p>
            </div>
            <button className='info-button' type='button'>
              {props.namebtn}
            </button>
          </div>
        </div>
      </div>

      <div className='content-half'>
        <div className='content-wrapper__right'>
          <h1
            className='title'
            style={{ fontWeight: "normal", marginBottom: "30px" }}
          >
            Faça parte da nossa equipe
          </h1>
          <form className='form'>
            <div className='input-form'>
              <input type='text' name='name' placeholder='Email' />
            </div>

            <div className='input-form'>
              <input type='password' name='password' placeholder='Senha' />
            </div>

            <div className='input-form'>
              <input
                type='password'
                name='confpassword'
                placeholder='Confirmar Senha'
              />
            </div>
          </form>
          <button
            className='info-button'
            type='submit'
            style={{ background: "#5dcad1", marginTop: "40px" }}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentMain;
