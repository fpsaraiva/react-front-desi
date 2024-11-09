import { useState } from 'react'

import axios from 'axios'

import './App.css'

function App() {
  const [fotoAvatar, setFotoAvatar] = useState(null)

  /*const fazerRequisicao = () => {
    fetch("")
    .then(response => response.json())
    .then(data => atualizarFoto(data))
  }*/

  async function fazerRequisicao() {
    try {
      await axios.get("https://api.github.com/users/fpsaraiva")
      .then(resposta => atualizarFoto(resposta.data))
    } catch (error) {
      console.error("erro ao mostrar informações", error)
    }
  }

  const atualizarFoto = (data: string) => {
    console.log(data.avatar_url)
    setFotoAvatar(data.avatar_url)
  }

  return (
    <>
      <h1>Requisições de sexta</h1>
      <div className="card">
        <button onClick={fazerRequisicao}>
          Buscar perfil
        </button>
        {fotoAvatar && <img src={fotoAvatar} alt='' width="200"/>}
      </div>
    </>
  )
}

export default App
