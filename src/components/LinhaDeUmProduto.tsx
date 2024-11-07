function LinhaDeUmProduto({produto}) {
    const name = produto.stocked ? produto.name : 
    <span style={{color: 'red'}}>
        {produto.name}
    </span>
    return (
        <tr>
            <td>{name}</td>
            <td>{produto.price}</td>
        </tr>
    )
}

export default LinhaDeUmProduto;