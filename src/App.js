import React from "react";
import Header from './components/Header'
import Image from './components/Image'
import logo from './img/react.jpg'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: "help text",
            userData: "",
        }

        this.inputClick = this.inputClick.bind(this)
    }


    helpText = "help text"
    render() {
        return (
            <div className='name'>
                <Header title="шапка сайта йоу" />
                <h1>{this.state.helpText}</h1>
                <h2>{this.state.userData}</h2>
                <input placeholder={this.state.helpText}
                    onChange={event => this.setState({ userData: event.target.value })}
                    onClick={this.inputClick} onMouseEnter={this.mouseOver} />

                <p>{this.state.helpText === "help text" ? "yes" : "no"}</p>
                <Image image={logo} />
            </div>
        )
    }


    inputClick() {
        this.setState({ helpText: "change" })
        console.log("you clicked");
    }
    mouseOver() { console.log("you over"); }
}

export default App