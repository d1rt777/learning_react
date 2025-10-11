import React from "react";
import Header from './components/Header'
import Image from './components/Image'
import logo from './img/react.jpg'

class App extends React.Component {
    helpText = "help text"
    render() {
        return (
            <div className='name'>
                <Header title="шапка сайта йоу"/>
                <h1>{this.helpText}</h1>

                <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver} />

                <p>{this.helpText === "help text" ? "yes" : "no"}</p>
                <Image image = {logo}/>
            </div>
        )
    }


    inputClick (){console.log("you clicked");}
    mouseOver (){console.log("you over");}
}

export default App