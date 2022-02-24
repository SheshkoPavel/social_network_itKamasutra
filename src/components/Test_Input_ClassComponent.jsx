import React from "react";

class Test_Input_ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text:""}
    }

    handleInput = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return(
            <div>
                <h1>Hello, {this.props.name}</h1>
                <input type="text" placeholder="Type here" value = {this.state.text} onChange={this.handleInput} />
                <p>Your text is: {this.state.text}</p>
            </div>
        )
    }

}

export default Test_Input_ClassComponent;