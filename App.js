import React, {Component} from 'react';
import "./index.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            number : 0

        }

    }
    add = () => {
        this.setState({number : this.state.number+1})
    }
    reduce = () => {
        this.setState({number : this.state.number-1})
    }

    render() {
        return (
            <div className={"App"}>
                <button onClick={this.add} className={"button"}>+</button>
                <button onClick={this.reduce} className={"button"}>-</button>
                <h3 className={"count"}>{this.state.number}</h3>
                
            </div>
        );
    }
}

export default App;