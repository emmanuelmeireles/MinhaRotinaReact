import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/emmanuel-meireles-silva/://vitejs.dev" target="_blank">
          <img src="" className="eu" alt="Linkedin Emmanuel" />
        </a>

        <a href="https://github.com/emmanuelmeireles" target="_blank">
          <img src="" className="eu" alt=" GitHub Emmanuel Emmanuel" />
        </a>
        
      </div>
      <h1>Emmanuel Meireles Silva</h1>

      <h2> Essa é minha Rotina </h2>
      <p>
        * acordo de manha sempre atrasado, pois chego muito cansado da faculdade. 
      </p>
      <p>
        * geralmente nao comom nada, pois nao tenho coragem de fazer comida
      </p>
      <p>
        *dou comida a minha gatinha e logo apos vou tomar um banho para me preparar para dormir
      </p>
      
      <h1>

      </h1>
      

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Dê aqui Seu LIKE {count}
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
        click nos icones acima do Linkedin e GitHub para MAIS
      </p>
    </>
  )
}

export default App
