import React, {Component}　from 'react';
import Login from './Login';
import PageFrontForUser from './PageFrontForUser';
import './App.css';

class App extends Component {

    state={login:'user'};

    getName=()=>{
        return 'I am logging in!!'
    };


    render() {

        if(this.state.login==='none'){
            return (
                <div>
                    <Login/>
                    <div>

                    </div>
                </div>
            )
        }else if(this.state.login==='user'){
            return (
                <PageFrontForUser userType={this.getName} />
            )
        }else if(this.state.login==='provider'){
            return (
                <PageFrontForUser userType={this.getName} />
            )
        }else if(this.state.login==='guest'){
            return (
                <div>Welcome Guest!</div>
            )
        }


    }
}

export default App;