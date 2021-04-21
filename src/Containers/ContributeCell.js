import React from 'react';

// const ContributeColorbox = ['#CDB1F9', '#934FFC', '#6B10F9']

export default class ContributeCell extends React.Component {
    constructor(props) {
        super(props)
        this.canvasRef = React.createRef();
        this.ctx = null;
    }

    componentDidMount() {
        this.ctx = this.canvasRef.current.getContext("2d")
    }

    render(){
        return (
            <canvas ref={this.canvasRef} className="Cell" style={{background: "#DDDDDD", width: "1px", height: "1px"}}>
                
            </canvas>
        )}
}