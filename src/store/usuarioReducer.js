const INITIAL_STARE = {
  usuarioEmail: '',
  usuarioLogado: 0,
};
//pega o usuário logado com o estado 1 true
function usuarioReducer(state = INITIAL_STARE, action) {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, usuarioLogado: 1, usuarioEmail: action.usuarioEmail }
    case 'LOG_OUT':
      return { ...state, usuarioLogado: 0, usuarioEmail: '' }
    default:
      return state;
  }
}

export default usuarioReducer;