import React from 'react';
import { Container } from 'react-bootstrap';
import { BiGhost } from 'react-icons/bi'
import './css/UserCard-sm.css';

export default function UserCardsm () {
    return (
        <Container className="col-1">
            <div className="usercardsm">
                <BiGhost size="24"/>
            </div>                
        </Container>
    );
}