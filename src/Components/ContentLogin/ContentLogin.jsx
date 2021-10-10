import React from "react";
import "./ContentLogin.css";
import {
  ContentContainer,
  ContentLocation,
} from "../../UI/ContentLayout/ContentLayout";
import image from "../../Assets/img-1.png";
import { Button } from "../Buttons/Buttons";

function ContentLogin(props) {
  return (
    <>
      <ContentContainer>
        <div className='content-half'>
          <ContentLocation className='content' content_location='content__left'>
            <div className='content-wrapper__info'>
              <div className='info-image'>
                <img src={image} alt='logo' />
              </div>
              <div className='info-text'>
                <h2 className='title'>{props.left_title}</h2>
                <p className='subtitle'>{props.left_subtitle}</p>
              </div>

              <Button
                className='btn'
                type='button'
                buttonStyle='btn--primary'
                path='/Login'
              >
                {props.left_btnTitle}
              </Button>
            </div>
          </ContentLocation>
        </div>

        <div className='content-half'>
          <ContentLocation
            className='content'
            content_location='content__rigth'
          >
            <h1
              className='title'
              style={{ fontWeight: "normal", marginBottom: "30px" }}
            >
              {props.rigth_subtitle}
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
            <Button className='btn' type='button' buttonStyle='btn--outline'>
              {props.rigth_btnTitle}
            </Button>
          </ContentLocation>
        </div>
      </ContentContainer>
    </>
  );
}

export default ContentLogin;
