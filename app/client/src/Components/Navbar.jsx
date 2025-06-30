import { Link } from 'react-router-dom'
import "../Styles/Nav.css"

export default function NavBar(){
    return (
        <nav>
            <Link to="/" className='LeftButton'>
            Menu
            </Link>
            <Link to="/Assistidos" className='LeftButton'>
            Assistidos
            </Link>
            <Link to="/Catalogos" className='LeftButton'>
            Catalogos
            </Link>
            <Link to="/Configurações" className='RightButton'>
            Configurações
            </Link>
            <Link to="/MinhaLista" className='LeftButton'>
            Minha Lista
            </Link>
            <Link to="/Perfil" className='RightButton'>
            Perfil
            </Link>
        </nav>
    )
}
    