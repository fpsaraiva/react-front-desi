function LinhaDeUmProduto({produto}) {
    return (
        <tr>
            <td>{produto.name}</td>
            <td>{produto.price}</td>
        </tr>
    )
}

export default LinhaDeUmProduto;