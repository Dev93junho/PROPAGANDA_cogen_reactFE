import React from 'react';
import { CategoryData } from "./CategoryData";
import "./css/CategoryMenu.css"
import { Link } from 'react-router-dom'


class Category extends React.Component {
    state = {clicked : false}

    handleClick = () => {
        this.setState({clicked: this.state.clicked})
    }
    render() {
        return (
            <ul className={this.state.clicked ? 'Category active' : 'Category'}>
            {CategoryData.map((item, index) =>{
                return(
                    <>
                        <Link className={item.cName} to={item.url}>
                        <button key={index}>
                            {item.title}
                            <p>Headline</p>
                            <p>Headline</p>
                        </button>                        
                        </Link>
                    </>

                )
            })}
        </ul>
      );
    }
}

export default Category;