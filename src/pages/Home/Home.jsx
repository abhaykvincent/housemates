import React, { useState } from 'react'

function Home() {
    const [user, setUser] = useState({
        name: 'Abhay Vincent'
    })
    const [house, setHouse] = useState({
        name: '1881 Dalhousie',
        members: [
            'Abhay Vincent',
            'Greeshma',
            'Tom Varghese',
            'Ashish Joseph',
            'Deepak Hari',
            'Abin Jacob',
            'Alex Joseph',
            'Joel Joseph',
        ]
    })
    return (
        <div className="home">
            <div className="greetings">
                <h2 className="hi-user">Hi {user.name}</h2>
            </div>
            <div className="create-new-house">
                <button className="create-house">Create House</button>
            </div>
            <div className="home">
                <div className="home-title">
                    <h2>{house.name}</h2>
                </div>
                <div className="top-members">
                    top members
                    {
                        house.members.map(member => {
                            return(
                                <div className="top-member">
                                    <h3 className="member">{member}</h3>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
