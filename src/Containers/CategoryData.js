import React from 'react';


class Tab extends React.Component {
    render() {
        if (this.props.isSelected){
            return (
                <div>
                    { this.props.children}
                </div>
                


            );
        }
        return null;
    }
}

// export const CategoryData = [
//     {
//         title: 'tab1',
//         url: '#',
//         cName: 'menu-icon'
//     },
//     {
//         title: 'tab2',
//         url: '#',
//         cName: 'menu-icon'
//     },    
//     {
//         title: 'tab3',
//         url: '#',
//         cName: 'menu-icon'
//     }
// ]