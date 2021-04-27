import React from 'react';
import ReactQuill from 'react-quill';
import "./css/article.css"
import SelectSubject from './SelectSubject';
import UserCardsm from './UserCard-sm';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { BiGitBranch } from 'react-icons/bi';
import { BiBookmark } from 'react-icons/bi';
import { GrBlockQuote } from 'react-icons/gr';
import  { BiBookAlt }  from 'react-icons/bi';
import Fab from "@material-ui/core/Fab";



const fabs = [
  {
    cName: '',
    icon: <BiBookmark size="24px"/>,
    label: 'bookmark',
    top: "40%",
  },
  {
    cName: '',
    icon: <BiBookAlt size="24px"/>,
    label: 'series',
    top: "50%",

  },
  {
    cName: 'origin',
    icon: <BiGitBranch  size="24px"/>,
    label: 'origin',
    top: "60%",

  },
  {
    cName: 'response',
    icon: <BiGitBranch rotateY="180deg" size="24px"/>,
    label: 'response',
    top: "70%",

  },
  {
    cName: 'quote',
    icon: <GrBlockQuote size="24px"/>,
    label: 'quote',
    top: "80%",

  },
]

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

              {/* Go to FAB button  */}
              {fabs.map((value, index) => (
                <Fab  color="second" aria-label={value.label} className={value.cName}  style={{top: value.top, left: "85%", position: "fixed"}}> 
                {value.icon}
              </Fab>                
              ))}
     

            </div>

        );
    }
}

export default Article;