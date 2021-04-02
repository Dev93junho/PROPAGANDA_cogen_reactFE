import React from 'react';
import { CategoryData } from "./CategoryData";
import "./css/CategoryMenu.css"
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';


class Category extends React.Component {
    state = {clicked : false}

    handleClick = () => {
        this.setState({clicked: this.state.clicked})
    }
    render() {
        return (
            <Container>
            <ul className={this.state.clicked ? 'Category active' : 'Category'}>
            {CategoryData.map((item, index) =>{
                return(
                    <>
                        <Link to={item.url}>
                        <button key={index}>
                            <span className={item.cName}><h5>{item.title}</h5></span>
                            <p>#1 - Headline</p>
                            <p>#2 - Headline</p>
                          

                        </button>                        
                        </Link>
                    </>
                )
            })}
        </ul>
        </Container>
      );
    }
}

export default Category;