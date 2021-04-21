import React from 'react';
import ContributeCell from './ContributeCell';

const monthMap =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const Calender = [
    
    {
        title: monthMap[0],
        contents: <ContributeCell />
    },
    {
        title: monthMap[1],
        contents: <ContributeCell />
    },
    {
        title: monthMap[2],
        contents: <ContributeCell />
    },
    {
        title: monthMap[3],
        contents: <ContributeCell />
    },
    {
        title: monthMap[4],
        contents: <ContributeCell />
    },
    {
        title: monthMap[5],
        contents: <ContributeCell />
    },
    {
        title: monthMap[6],
        contents: <ContributeCell />
    },
    {
        title: monthMap[7],
        contents: <ContributeCell />
    },
    {
        title: monthMap[8],
        contents: <ContributeCell />
    },
    {
        title: monthMap[9],
        contents: <ContributeCell />
    },
    {
        title: monthMap[10],
        contents: <ContributeCell />
    },
    {
        title: monthMap[11],
        contents: <ContributeCell />
    },


]

class ContributeContainer extends React.Component {
    render() {
        return(
            <div className="yearMap">
                <div className="monthlyMap" style={{display: "flex"}}>
                    {Calender.map((value, index)=> 
                    <div>
                        <h6>{value.title}</h6>
                        <div>
                            {value.contents}
                        </div>

                </div>)}
                </div>
            </div>
        );
    }

}

export default ContributeContainer;