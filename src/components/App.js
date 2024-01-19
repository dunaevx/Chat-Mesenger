import React from "react"
import Content from "./Content";

class App extends React.Component {
    render(){
        return(
            <Content />
        )
    }
    
    // textH1 = 'Good day!'
  
    // render(){
    //   return(
    //     <div className="div">
    //     <Header title='this is header bro' />
    //     <h1>HI bro ! {this.textH1}</h1>
    //     <input  placeholder={this.textH1} onClick={this.cliched} onMouseEnter={this.mouseEnter} />
    //     <h2></h2>
    //     <h3>{1 === 1 ? 'yes':'no'}</h3>
    //     <p></p>
    //   </div>
    //   )
    // }
  
    // mouseEnter() {
    //   let p = document.querySelector('p');
    //   p.innerHTML = "MOUSE OVER!";
    //   console.log("MOUSE OVER!")
    // }
  
    // cliched() {
    //   let h2 = document.querySelector('h2')
    //   h2.innerHTML = 'YOU CLICKED ME!'
    //   console.log('YOU CLICKED ME!')
    // }
  }

  export default App