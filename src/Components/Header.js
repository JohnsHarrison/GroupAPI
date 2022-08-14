import {NavLink} from 'react-router-dom'

function Header() {
    return(<div className='header'>


        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/currently-playing'>Currently Playing</NavLink>
            <NavLink to='/movie-posters'>Movie Posters</NavLink>
            <NavLink to='/streaming'>Streaming</NavLink>
            <NavLink to='/wow'>Wow</NavLink>
        </nav>


    </div>)
}

export default Header