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
            style={{ fontWeight: "normal", margin: "30px 0 20px 0" }}
          >
            Faça parte da nossa equipe
          </h1>
          <form className='form'>
            <input
              className='input-form'
              type='text'
              name='name'
              placeholder='Email'
            />
            <input
              className='input-form'
              type='password'
              name='password'
              placeholder='Senha'
            />
            <input
              className='input-form'
              type='password'
              name='confpassword'
              placeholder='Confirmar Senha'
            />
          </form>
          <div className='form-office'></div>
          <button
            className='info-button'
            type='submit'
            style={{ background: "#5dcad1" }}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentMain;
