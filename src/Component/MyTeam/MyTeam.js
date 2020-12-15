import React,{ useEffect, useState } from 'react'
import { firebase } from '../../firebase'
import './MyTeam.css'

export default function MyTeam({user}) {

    const [myTeam,setMyTeam] = useState([])
    const [newPlayer, setNewPlayer] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    useEffect(() => {
        if(user){
            console.log('update')
            setIsLoading(true)
            const db = firebase.firestore();
            let userId = firebase.auth().currentUser.uid
            db.collection('users').doc(userId).get()        
                .then((data) => {
                    let teamData = data.data()
                    if(teamData){
                        setMyTeam(teamData.team)
                        setIsLoading(false)
                    }
                })      
        }   
    }, [user])

    const handleAddToMyTeam=()=>{
        let updatedTeam = [...myTeam,newPlayer]
        saveTeam(updatedTeam)
    }

    const handleDeletePlayer = (player) =>{
        let updatedTeam = [...myTeam].filter(name => name!==player)
        saveTeam(updatedTeam)
    }

    const saveTeam=(updatedTeam)=>{
        const db = firebase.firestore();
        let userId = firebase.auth().currentUser.uid
        let newData = {team: updatedTeam}
        db.collection('users').doc(userId).set(newData)
        .then((data) => {
            setMyTeam(updatedTeam)
            setNewPlayer('')
        })
        .catch((error) => {
            console.log('Storing Error', error)
        })  
    }

    return (
        <div className='myTeam'>
            <div className='myTeamHeader'><h3>{`My Team (${myTeam.length} players)`}</h3><i>&#x25BC;</i> </div>
            <input value={newPlayer} type='text' onChange={e => setNewPlayer(e.target.value)}/>
            <button onClick={handleAddToMyTeam}>Add new player</button>
            {isLoading && <div>Loading...</div>}
            {myTeam.map((player,index) =>
                <div className='myTeamPlayer' key={index}>
                    <label></label>
                    <p>{player}</p>
                    <button onClick={e => handleDeletePlayer(player)} >X</button>
                </div>
            )}
        </div>
    )
}
