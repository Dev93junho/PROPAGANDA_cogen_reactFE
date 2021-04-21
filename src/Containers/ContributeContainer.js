import React from 'react';

const Calender = [
    {
        title: 'Jan'
    },
    {
        title: 'Fab'
    },
    {
        title: 'Mar'
    },
    {
        title: 'Apr'
    },
    {
        title: 'May'
    },
    {
        title: 'Jun'
    },
    {
        title: 'July'
    },
    {
        title: 'Aug'
    },
    {
        title: 'Sep'
    },
    {
        title: 'Oct'
    },
    {
        title: 'Nov'
    },
    {
        title: 'Dec'
    }
]

class Contribute extends React.Component {
    render() {
        return(
            <div>
                {Calender.map((value, index)=> 
                <div style={{width: "auto-layout"}}>
                    {value.title}
                </div>)}
            </div>
        );
    }

}

export default Contribute;