import { Component } from "react/cjs/react.production.min";

class Contact extends Component{
    constructor(){
        super()
        this.state = {
            message: ' "Welcome to My Contact page!!!!" '
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you Sending a Text Message '
        })
    }
    render(){
        return(
            <div >
                <h1>{this.state.message}</h1>
                <button class="sendButton" onClick={()=>this.changeMessage()}>Send</button>               
            </div>

        )
    }
}
export default Contact;