import React from 'react';
import ReactQuill from 'react-quill';
import "./css/article.css"
import SelectSubject from './SelectSubject';
import UserCardsm from './UserCard-sm';

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
                <form className="editor">
                    <span className="date"></span>
                    <span>뒤로가기</span>
                    <span style={{color: "#A567F3", size: "5px", padding: "1rem"}}>주제를 입력하세요</span>
                    <div className="middleRow">
                        <input style={{border: "none", width: "50%"}} placeholder="제목을 입력하세요"/>
                        <span><UserCardsm /></span>
                    </div>
                    <SelectSubject />
                    <input  style={{padding: ".7rem"}} placeholder="[부제목을 입력하세요]" />
                    <ReactQuill style={{height: "600px", position: "relative", }}/>
                </form>
            </div>
            </div>

        );
    }
}

export default Article;