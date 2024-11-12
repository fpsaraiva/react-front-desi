import { Link, Outlet } from "react-router-dom"

function SideBar() {
    return (
        <>
        <div id="sidebar">
            <h1> Agenda de endereços </h1>
            <div>
                <form>
                <input 
                        id="q"
                        placeholder="Buscar"
                        type="text" 
                        name="q"
                />
                </form>
                <form>
                    <button type="submit">Novo</button>
                </form>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={`contatos/1`}>Contato 1</Link>
                    </li>
                    <li>
                        <Link to={`contatos/2`}>Contato 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
        </>
    )
}

export default SideBar