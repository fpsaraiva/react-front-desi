import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [numeroBotao, setNumeroBotao] = useState(0);
  const [nome, setNome] = useState("");
  const [mostrarNome, setMostrarNome] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const incrementarContagem = () => {
    setNumeroBotao(numeroBotao + 1)
  }

  const atualizarNome = (nome: string) => {
    setNome(nome)
    setMostrarNome(false)
  }

  const exibirNome = () => {
    setMostrarNome(true)
  }

  useEffect(() => {
   const timer = setTimeout(() => {
    if (numeroBotao > 0) {
      setMensagem(`O botão foi clicado ${numeroBotao} vezes.`)
    }
   }, 2000)

  return () => {
    clearTimeout(timer)
  }
  }, [numeroBotao])  

  return (
    <>
      <div>
        <h1>Utilizando hooks na página</h1>
      </div>
      <div>
        <button onClick={incrementarContagem}>
          Clique aqui para contar {numeroBotao}
        </button>
        <div>
          {mensagem && <p>{mensagem}</p>}
        </div>
      </div>
      <div>
        <input type="text" placeholder='Digite o seu nome' value={nome} onChange={(e) => atualizarNome(e.target.value)}/>
        <button onClick={exibirNome}>Imprime</button>
        {mostrarNome && <h2>Seja bem-vindo, { nome }</h2>}
      </div>
    </>
  )
}

export default App
