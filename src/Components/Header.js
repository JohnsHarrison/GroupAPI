import {NavLink} from 'react-router-dom'

function Header() {
    return(<div>

        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/currently-playing'>Currently Playing</NavLink>
            <NavLink to='/movie-posters'>Movie Posters</NavLink>
        </nav>


    </div>)
}

export default Header