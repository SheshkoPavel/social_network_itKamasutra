import React from "react";

class Test_ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: this.props.count};
    }

    // componentDidMount() {
    //     this.setState({
    //         count: this.props.count
    //     });
    // }

    updateCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    updateCountToMinus = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <button onClick={this.updateCountToMinus}>Click me to -1</button>
                <button onClick={this.updateCount}>Click me</button>
                <p>I've been clicked {this.state.count}!</p>
            </div>
        );
    }

}
export default Test_ClassComponent;