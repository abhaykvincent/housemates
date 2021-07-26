import React, { useState } from 'react'
import sha256 from 'crypto-js/sha256';
import './Home.scss'
function Home() {
    const [user, setUser] = useState({
        name: 'John Doe',
        houseId: '..'
    })
    let haveHome = user.houseId ? true : false
    console.log(haveHome)
    const [house, setHouse] = useState({
        name: '432 ABC St',
        members: [
            {name:'Abhay Vincent',
            points:89},
            {name:'Greeshma',
            points:78},
            {name:'Tom Varghese',
            points:67},
            {name:'Ashish Joseph',
            points:55},
            {name:'Deepak Hari',
            points:33},
            {name:'Abin Jacob',
            points:45},
            {name:'Alex Joseph',
            points:33},
            {name:'Joel Joseph',
            points:33},
        ]
    })
    console.log(setUser,setHouse)
    return (
        <div className="home">
            <div className="greetings">
                <p className="hi-user">Hi <br/> <span className="name">{user.name}</span></p>
            </div>
            {
                haveHome ?  <HousePanel house={house}/> : <JoinHome/>
            }
            
        </div>
    )
}




function Post(props) {
    const house = props.house
    return (
        <div className="post">
            <div className="author">{sha256('nonce' + house.members[0].name).toString().substring(0,10)}</div>
            <div className="post-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, sed quasi corporis ea numquam reprehenderit nisi enim id obcaecati eligendi voluptas pariatur odio! Eius nihil ipsa inventore aspernatur. Reiciendis voluptate nam adipisci?</div>
        </div>
    )
}
function Poll(props) {
    const house = props.house
    return (
        <div className="poll">
            <div className="author">{sha256('nonce' + house.members[0].name).toString().substring(0,10)}</div>
            <div className="poll-question">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, maiores?</div>
            <PollButton/>
        </div>
    )
}
function PollButton() {
    
    return (
        <div className="poll-button-wrapper">
            <div className="poll-button">
                <div className="alpha">Yes</div>
                <div className="beta">No</div>
            </div>
        </div>
    )
}

function HousePanel(props) {
    const [isExpandHomePanel, setIsExpandHomePanel] = useState(false)
    const [homePanelClass, setHomePanelClass] = useState('')
    const house = props.house
    return (
        <div>
            
            <div className={`house ${homePanelClass}`}>
                <div className="house-title"
                    onClick={()=>{
                        setIsExpandHomePanel(!isExpandHomePanel)
                        setHomePanelClass(isExpandHomePanel ? "expand" : '')
                    }}
                >
                    <p>{house.name}</p>
                    <div className="close">X</div>
                </div>
                <div className="top-members__wrapper">
                    <div className="label">TOP MEMBERS</div>
                    <div className="top-members">
                    {
                        house.members.map(member => {
                            return(
                                <div className="top-member">
                                    <div className="profile">
                                        <div className="points">{member.points}</div>
                                    </div>
                                    <p className="member">{sha256('nonce' + member.name).toString().substring(0,10)}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="tools__wrapper">
                    <div className="label">ADD</div>
                    <div className="tools">
                        <div className="tool">
                            <p className="icon"></p>
                            <div className="name">Post</div>
                        </div>
                        <div className="tool">
                            <p className="icon"></p>
                            <div className="name">Poll</div>
                        </div>
                        <div className="tool">
                            <p className="icon"></p>
                            <div className="name">Task</div>
                        </div>
                    </div>
                </div>
                <div className="posts-polls">
                    <div className="label">POSTS</div>
                    <div className="posts">
                        <Post house={house}/>
                        <Poll house={house}/>
                        <Post house={house}/>
                        <Post house={house}/>
                        <Post house={house}/>
                        <Post house={house}/>
                        <Post house={house}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Home
