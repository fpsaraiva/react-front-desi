function BarraDePesquisa() {
    return (
        <form>
            <input type="text" placeholder="Realize sua busca..." />
            <label>
                <input type="checkbox" />
                {' '}
                Mostrar apenas produtos em estoque
            </label>
        </form>
    )
}

export default BarraDePesquisa;