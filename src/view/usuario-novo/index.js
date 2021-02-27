import React, { useState } from 'react';
import firebase from '../../config/firebase';
import Navbar from '../../components/navbar'
import 'firebase/auth';
import './usuario-novo.css';

function NovoUsuario() {
  //guardar o que foi digitado em um lugar da memória
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();
  const [carregando, setCarregando] = useState();

  //da informações se foi cadastrado ou não.
  //a api que cudia da análise é o Firebase
  function cadastrar() {
    //valor 1 e de verdade
    setCarregando(1);

    //mensagem começa null
    setMsgTipo(null);
    //a função verifica se o usuário digitou algo
    if (!email || !senha) {
      setMsgTipo('erro');
      setMsg('Informe Email e Senha!');
      return;
    }
    //firebase na biblioteca auth envia email e password para cadastro
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((resultado) => {
        setCarregando(0);
        setMsgTipo('sucesso');
      }) //caso de errado os recados que vem em inglês são traduzidos
      .catch((erro) => {
        setCarregando(0);
        setMsgTipo('erro');
        switch (erro.message) {
          case 'Password should be at least 6 characters':
            setMsg('A senha deve ter pelo menos 6 caracteres!');
            break;
          case 'The email address is already in use by another account.':
            setMsg('Este email já está sendo utilizado por outro usuário!');
            break;
          case 'The email address is badly formatted.':
            setMsg('O formato do seu email é inválido!');
            break;
          default:
            setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
            break;
        }
      });
  }
  //aqui e construido a tela, lembre que estamos usando o bootstrap
  return (
    <>
      <Navbar />
      <div className="form-cadastro">
        <form className="text-center form-login mx-auto mt-5">
          <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control my-2"
            placeholder="Email"
          />
          <input
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            className="form-control my-2"
            placeholder="Senha"
          />
          {carregando ? (
            <div class="spinner-border text-danger" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
              <button
                onClick={cadastrar}
                type="button"
                className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
              >
                Cadastrar
              </button>
            )}
          <div className="msg-login text-black text-center my-5">
            {msgTipo === 'sucesso' && (
              <span>
                <strong>WoW!</strong>Usuário cadastrado com sucesso! &#128526;{' '}
              </span>
            )}
            {msgTipo === 'erro' && (
              <span>
                <strong>Ops!</strong> {msg} &#128546;{' '}
              </span>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default NovoUsuario;
