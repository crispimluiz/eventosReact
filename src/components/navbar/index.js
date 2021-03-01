import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand text-white font-weigt-bold">Eventos</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="text-white">Menu</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            {//Se o usuário está logado
              useSelector(state => state.usuarioLogado) > 0 ?
                <>
                  <li className="nav-item"><Link className="nav-link" to="/usuarionovo">Publicar Eventos</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/">Meus Eventos</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/">Sair</Link></li>
                </>

                : //senão
                <>
                  <li className="nav-item"><Link className="nav-link" to="/usuarionovo">Cadastrar</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
                </>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;