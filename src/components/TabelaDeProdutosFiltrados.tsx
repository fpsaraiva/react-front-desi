import BarraDePesquisa from './BarraDePesquisa'
import TabelaDeProdutos from './TabelaDeProdutos'

function TabelaDeProdutosFiltrados({produtos}) {
    return (
        <div>
            <BarraDePesquisa />
            <TabelaDeProdutos produtos={produtos} />
        </div>
    )
 }

 export default TabelaDeProdutosFiltrados;