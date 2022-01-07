import React from "react"

class Item extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            clicks: 0,
            totalRemaining: 100
        }
    }

    clickMe() {
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemaining: this.state.totalRemaining - 1
        })
        console.log("I was clicked!", this.props.name);
    }

    render() {
      return (
        //   this.props.name <- this is name="Gully" from App.js
        // <h1>THIS IS A WAY TO USE class name <small>"Item"</small></h1>,
    // CONNECTING A HTML WITH JAVASCRIPT
        <div>
            {/* onClick, RUN this.clickMe() FUNCTION */}
            <h1 onClick={() => this.clickMe()}> Hello {this.props.name} </h1>
            <span> {this.state.clicks} is the the number of clicks and {this.state.totalRemaining} is the remaining number of clicks</span>
        </div>
        
      )
    }
}

export default Item;