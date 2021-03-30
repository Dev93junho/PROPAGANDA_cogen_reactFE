import React from 'react';
import Category from '../Containers/Category';
import Editor from '../Containers/Editor';
import userCard from '../Containers/userCard';

function Mypage(){
        return (
            <>
                <Category />
                <userCard />
                <Editor />
            </>

        );
    }


export default Mypage;