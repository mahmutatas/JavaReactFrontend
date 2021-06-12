import React, {useState} from 'react'
import { useHistory } from 'react-router'
import {  Container, Menu } from 'semantic-ui-react'
import Signedin from './Signedin'
import SignedOut from './SignedOut'

export default function Navi() {
    
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const history = useHistory()


    function handleSignOut(params){
        setisAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(){
        setisAuthenticated(true)
    }
    
    return (
        <div>
            <Menu inverted fixed="top">
                <Container >
                    <Menu.Item name='home'/>
                    <Menu.Item name='Jobs'/>

                    <Menu.Menu position='right'>
                    
                        {isAuthenticated?<Signedin signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}  
                    
                    </Menu.Menu>

                </Container>
            </Menu>
        </div>
    )
}
