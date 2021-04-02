import React from 'react';
import ReactQuill from 'react-quill';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { BsFolderPlus } from 'react-icons/bs';
import { BsTable } from 'react-icons/bs';
import { GrSchedule } from 'react-icons/gr';
import { BsLink45Deg } from 'react-icons/bs';
import "./css/article.css"

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
                        <li><HiOutlinePhotograph size="80"/></li>
                        <li><AiOutlineVideoCameraAdd size="80"/></li>
                        <li><BsFolderPlus size="80"/></li>
                        <li><BsTable size="80"/></li>
                        <li><GrSchedule size="80"/></li>
                        <li><BsLink45Deg size="80" /></li>
                    </ul>
                    <ul className="below">

                    </ul>
                </div>
                    <ReactQuill value={this.state.text}
                    onChange={this.handleChange} className="editor" >
                    <div className="my-editng-area">
                    </div>
                    
                    </ReactQuill>

                <form className="editor">
                    <span className="date"></span>
                    <span>뒤로가기</span>
                    <span>주제를 입력하세요</span>
                    <div className="middleRow">
                        <input placeholder="제목을 입력하세요"/>
                        <span>user</span>
                    </div>
                    <input placeholder="[부제목을 입력하세요]" />
                    <textarea placeholder="내용을 입력하세요" />
                </form>
            </div>
            </div>

        );
    }
}

export default Article;