import LinhaDeUmProduto from "./LinhaDeUmProduto";
import LinhasCategoria from "./LinhasCategoria";

function TabelaDeProdutos({produtos}) {
    const linhas = [];
    let ultimaCategoria = null;

    produtos.forEach((produto) => {
        if (produto.category !== ultimaCategoria) {
          linhas.push(
            <LinhasCategoria categoria={produto.category} key={produto.category} />
          );
        }

        linhas.push(
          <LinhaDeUmProduto
            produto={produto}
            key={produto.name} />
        );

        ultimaCategoria = produto.category;
      });
    
      return (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </table>
      );
}

export default TabelaDeProdutos;