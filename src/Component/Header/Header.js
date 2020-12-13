import './Header.css';
import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {

    const {
        user,
        signOut,
        signInWithGoogle,
    } = props;

    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/players'>Players</Link>
                <Link to='/Table'>Table</Link>
                <Link to='/fixtures'>Fixtures</Link>
            </nav>
            {user?
                <>
                    <p>Hello, {user.displayName}</p>
                    <button onClick={signOut}>Sign out</button>
                </>
                : 
                <>
                    <p>Please sign in.</p>
                    <button onClick={signInWithGoogle}>
                        Sign in with Google
                    </button>
                </>}
        </div>
    )
}

