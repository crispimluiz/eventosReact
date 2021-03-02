import React, { useState } from 'react';
import './usuario-recuperar-senha.css';
import Navbar from '../../components/navbar'

import firebase from '../../config/firebase';
import 'firebase/auth'

function UsuarioRecuperarSenha() {

  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  function recuperarSenha() {
    firebase.auth().sendPasswordResetEmail(email).then(resultado => {
      setMsg('Enviamos no seu email um link para redefinir sua senha.');
    }).catch(erro => {
      setMsg('Verifique se seu email está correto!')
    });
  }

  return (
    <>
      <Navbar />

      <form className='text-center form-login mx-auto mt-5'>
        <h1>Recuperar Senha</h1>
        <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control my-2' placeholder=' Coloque seu Email' />
        <div className='msg my-4 text-center'>
          <span>{msg}</span>
        </div>
        <button onClick={recuperarSenha} type='button' className='btn btn-lg btn-enviar'>
          Recuperar Senha</button>
      </form>


    </>
  )
}
export default UsuarioRecuperarSenha;