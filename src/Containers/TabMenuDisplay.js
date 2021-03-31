import React from 'react';
import Contents from './Contents';
import Editor from './Editor';
import ListArticle from './ListArticle';

const obj = {
    0:<Editor />,
    1:<Contents />,
    2:<ListArticle />
}

class Tabs extends React.Component {
    state ={
        activeTab: 0
    }
    clickHandler = (id) => {
        this.setState({activeTab: id})
    }
    render() {
        return(
            <div className="wrapper">
                <ul className="tabs">
                    <li onClick={()=>this.clickHandler(0)}>1</li>
                    <li onClick={()=>this.clickHandler(1)}>1</li>
                    <li onClick={()=>this.clickHandler(2)}>1</li>
                </ul>
                <div>
                    {obj[this.state.activeTab]}
                </div>
            </div>
        );
    }
}

export default Tabs;


