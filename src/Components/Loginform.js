import React from 'react';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            username:'',
            password:''
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    login(){
        let url = 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=1d1620c73f08ab33b4763a7a15fcda29';
        let data = {username: ''};
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        return(
            <form className="login-form">
                <label>Username or email address</label>
                <input className="user-input" type="text" name="username" placeholder="username" onChange={this.onChange}/>
                <label>Password</label>
                <input className="user-input" type="password" name="password" placeholder="password" onChange={this.onChange}/>
                <button className="onSubmit btn" type="submit" onClick={this.login}> <a href="">Sign In</a></button>
            </form>
        )
    }
}

export default LoginForm;