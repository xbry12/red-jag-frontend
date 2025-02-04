import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import LandingPortal from '../Landing/LandingPortal';
import DashBoardPortal from '../Dashboard/DashBoardPortal'; 
import UserPortal from '../Profile/UserPortal';

function Content({ currentUser }) {
    console.log(currentUser)
    let conditionalContent = currentUser !== null ?
            <Container>
                <Route 
                    path='/portal' 
                    render={() => {
                        return <DashBoardPortal />
                    }}
                />
                <Route 
                    path='/profile' 
                    render={() => {
                        return <UserPortal />
                    }}
                />
            </Container>
        : 
            <Container>
                <Redirect  to='/' />
            </Container>

    return (
        <Container>
            {conditionalContent}
        </Container>
    )
}

export default Content
