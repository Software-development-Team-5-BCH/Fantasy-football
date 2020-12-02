import './Header.css';
import React from 'react'

export default function Header(props) {

    const {
        user,
        signOut,
        signInWithGoogle,
      } = props;

    return (
        <div className='header'>
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

