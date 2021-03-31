import React from 'react';
import "./css/User.css"


class UserCard extends React.Component {
    render() {
        return(
            <div className="userCard">
                <div className='userIcon'>1</div>
                <div className='userName'>2</div>
                <div className='logState'>3</div>
                <div className='Btn-linkshare'>4</div>
                <div className='follow'>5</div>
            </div>

        )
    }
}

export default UserCard;