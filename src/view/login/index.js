import React, { useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom'

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';


function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const dispatch = useDispatch();

  function logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resultado) => {
        setMsgTipo('sucesso');
        setTimeout(() => {
          dispatch({ type: 'LOG_IN', usuarioEmail: email });
        }, 2000);
      })
      .catch((erro) => {
        setMsgTipo('erro');
      });
  }

  return (
    <div className="login-content d-flex align-items-center">
      {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='home' /> : null}
      <form className="form-signin mx-auto">
        <img className="mb-4" src="" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal text-center text-white font-weight-bold">
          Login
        </h1>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="inputEmail"
          class="form-control my-2"
          placeholder="Seu Email"
          required=""
          autofocus=""
        />

        <input
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          id="inputPassword"
          class="form-control"
          mt-3
          placeholder="Senha"
          required=""
        />

        <button
          onClick={logar}
          class="w-100 btn btn-lg btn-primary"
          type="button"
        >
          Login
        </button>

        <div className="msg-login text-white" text-center my-5>
          {msgTipo === 'sucesso' && (
            <span>
              <strong>Uauu!!! </strong> Você está conectado!
            </span>
          )}
          {msgTipo === 'erro' && (
            <span>
              <strong>Ops!!! </strong> Não deu certo!
            </span>
          )}
        </div>

        <div className="opcoes-login">
          <Link to="/usuarioRecuperarSenha" className="mx-2">
            Recuperar Senha
          </Link>
          <span className="text-white">&#9733;</span>
          <Link to='usuarionovo' className="mx-2">
            Fazer Cadastro
          </Link>
        </div>
        <p className="mt-5 mb-3 text-muted">© 2021</p>
      </form>
    </div>
  );
}

export default Login;
