// import React,{useState} from "react";
// export default function JustAnotherCounter(){
//     const [count, setCount]=useState(0);
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count+1)}>Click to count</button>
//         </div>
//     )

// }
import React, { Component } from 'react';

class JustAnotherCounter extends Component {
    state={
        count:0,
    }
    setCount=()=>{
        this.setState({count: this.state.count+1});

    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.setCount}>Count up to the moon</button>
            </div>
        );
    }
}

export default JustAnotherCounter;