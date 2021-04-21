import React from 'react';
import ContributeCell from './ContributeCell';

const monthMap =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const Calender = [
    
    {
        title: monthMap[0],
        contents: <ContributeCell />
    },

]

class ContributeContainer extends React.Component {
    render() {
        return(
            <div className="yearMap">
                <div className="monthlyMap">
                    {Calender.map((value, index)=> 
                    <div style={{width: "auto-layout"}}>
                        {value.title}
                        {value.contents}
                </div>)}
                </div>
            </div>
        );
    }

}

export default ContributeContainer;