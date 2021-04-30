import React from 'react';
import "./css/TabMenuDisplay.css";
import Post from './Post';
import Portfolio from './Portfolio';
import Article from './Editor';
import { BiPin } from 'react-icons/bi';
import { FiBookmark } from 'react-icons/fi';
import { BiBookAlt } from 'react-icons/bi';
import { HiOutlineTrash } from 'react-icons/hi';

const obj = {
    0:<Portfolio />,
    1:<Post />,
    2:<Article />
}

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state ={activeTab: 0};
    }

    clickHandler = (id) => {
        this.setState({activeTab: id})
    }

    render() {
        return(
            <div className="wrapper">
                <div className="head-row">
                    <ul className="tabs">
                        <li onClick={()=>this.clickHandler(0)}>Portfolio</li>
                        <li onClick={()=>this.clickHandler(1)}>Post</li>
                        <li onClick={()=>this.clickHandler(2)}>Series</li>
                        <li onClick={()=>this.clickHandler(3)}>Bookmark</li>                    
                        <li onClick={()=>this.clickHandler(4)}>Setting</li>   
                    </ul>

                    <ul className="SortContainer">
                        <li><BiPin size="24" /></li>
                        <li><FiBookmark size="24" /></li>
                        <li><BiBookAlt size="24" /></li>
                        <li><HiOutlineTrash  size="24" /></li>
                    </ul>
                </div>
                <div className="TabContents">
                    {obj[this.state.activeTab]}
                </div>
            </div>
        );
    }
}

export default Tabs;


