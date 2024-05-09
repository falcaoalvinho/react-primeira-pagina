import './App.css';
import LoginButton from "./components/LoginButton";
import LoginInput from './components/LoginInput';

function App() {
  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <p>Aula de REACT PWFE</p>

      <form>
        <LoginInput name="Usuário"></LoginInput>
        <LoginInput name="Senha"></LoginInput>

        <a>Esqueci a <span>Senha</span></a>
        
        <LoginButton></LoginButton>
      </form>
    </div>
  );
}

export default App;
