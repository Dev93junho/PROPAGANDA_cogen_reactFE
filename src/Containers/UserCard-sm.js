import React from 'react';
import { Container } from 'react-bootstrap';
import { BiGhost } from 'react-icons/bi'
import './css/UserCard-sm.css';

export default function UserCardsm () {
    return (
        <Container className="col-4">
            <div className="usercardsm">
                <BiGhost size="24"/>
                <div className="field">
                <span>User Name</span>
                <span>Major</span>
                </div>

            </div>                
        </Container>
    );
}