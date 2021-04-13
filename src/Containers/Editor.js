import React from 'react';
import ReactQuill from 'react-quill';
import "./css/article.css"
import SelectSubject from './SelectSubject';
import UserCardsm from './UserCard-sm';
import { RiArrowGoBackFill } from 'react-icons/ri';

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
                    <span className="head">
                      1분전
                      <RiArrowGoBackFill />
                    </span>

                    <span style={{color: "#A567F3", size: "5px" }}><b>주제를 입력하세요</b></span>
                    <div className="middleRow">
                        <input style={{border: "none", width: "50%"}} placeholder="제목을 입력하세요"/>
                        <span style={{border: "none", width: "50%", marginLeft:"auto"}}><UserCardsm /></span>
                    </div>

                    <div className="bottom">
                      <SelectSubject />
                      <input style={{padding: ".7rem", marginBottom: ".5rem"}} placeholder="[ 부제목을 입력하세요 ]" />
                      <ReactQuill />  
                    </div>
                </form>
             </div>
            </div>

        );
    }
}

export default Article;