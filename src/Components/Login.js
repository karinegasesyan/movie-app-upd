import React from 'react';
import LoginForm from './Loginform';

class Login extends React.Component{  
    render(){
        return(
           <div className="outer-wrapper">
                <div className="login-wrapper">
                    <div className="flex justify-center align-center">
                        <img className="logo flex justify-center align-center" src="film-icon.png" />
                    </div>
                    <LoginForm/>
                </div>
           </div>
        )
    }
}

export default Login;