import React from 'react';
import ReactQuill from 'react-quill';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { BsFolderPlus } from 'react-icons/bs';
import { BsTable } from 'react-icons/bs';
import { GrSchedule } from 'react-icons/gr';
import { BsLink45Deg } from 'react-icons/bs';
import "./css/article.css"
import SelectSubject from './SelectSubject';

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
      }
     
      handleChange(value) {
        this.setState({ text: value })
      }
    render() {
        return (
            <div>
            <div className="article">
               
                <div className="seriesGraph">
                </div>
                <div className="editoolbar">
                    <ul className="upper">
                        <li><HiOutlinePhotograph size="55"/></li>
                        <li><AiOutlineVideoCameraAdd size="55"/></li>
                        <li><BsFolderPlus size="55"/></li>
                        <li><BsTable size="55"/></li>
                        <li><GrSchedule size="55"/></li>
                        <li><BsLink45Deg size="55" /></li>
                    </ul>
                    <ul className="below">

                    </ul>
                </div>
                <form className="editor">
                    <span className="date"></span>
                    <span>뒤로가기</span>
                    <span style={{color: "#A567F3", size: "5px"}}>주제를 입력하세요</span>
                    <div className="middleRow">
                        <input style={{border: "none", width: "50%"}} placeholder="제목을 입력하세요"/>
                        <span>user</span>
                    </div>
                    <SelectSubject />
                    <input placeholder="[부제목을 입력하세요]" />
                    <textarea placeholder="내용을 입력하세요" />
                </form>
            </div>
            </div>

        );
    }
}

export default Article;