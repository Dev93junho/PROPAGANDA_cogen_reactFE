import React from 'react';
import { BiGhost } from 'react-icons/bi';
import { BiLinkAlt } from 'react-icons/bi';
import "./css/User.css";


class UserCard extends React.Component {
    render() {
        return(
            <div className="userCard">
                <div className="userdata">
                    <div className='userIcon'>
                        <BiGhost size="30"/>
                    </div>
                    <div className='userName'>
                        <span>다크드래곤</span>
                        <span>내 소개 문구</span>
                    </div>
                    <button className='logState'>LogIn</button>
                </div>

                <div className="cardState">
                <div className='Btn-linkshare'><BiLinkAlt size="30" /></div>
                <div className='Follow'>
                    <div className="FollowData">
                        <span>Follow</span>
                        <span>200</span>
                    </div>
                    <div>
                        <div className="FollowerData">
                            <span>Follower</span>
                            <span>200</span>
                        </div>
                    </div>
                </div>
                </div>

            </div>

        )
    }
}

export default UserCard;