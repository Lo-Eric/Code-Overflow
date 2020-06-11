import React from 'react';
import { Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.removeErrors()
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        // .then(() => <Redirect to='/home'/>);
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.formType === 'Signup') {
            
            var SignupForm =
             <form onSubmit={this.handleSubmit} className="login-form-container">
             
             <div className="signup-form">
                <br />
                <div className="form_group">
                <label>Username:
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="signup-input"
                    />
                    <div className="signup_error">{this.renderErrors()}</div>
                </label>
                </div>
                <br />
                <div className="form_group">
                <label>Email:
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="signup-input"
                    />
                </label>
                </div>
                <br />
                <label>Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="signup-input"
                    />
                </label>
                <br />
                <input className="session-submit" type="submit" value={this.props.formType} /> </div> </form>
        };

        if (this.props.formType === 'Login') {
            var LoginForm = 
            <form onSubmit={this.handleSubmit} className="login-form-container">
            
            <div className="login-form">
                <br />
                <div className="form_group">
                <label>Email:
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                    />
                    <div className="login_error">{this.renderErrors()}</div>
                </label>
                </div>
                <br />
                <div className="form_group">
                <label>Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                    />
                </label>
                </div>
                <br />
                <input className="session-submit" type="submit" value={this.props.formType} /> </div> </form>
        };

        return (
            <div className="login-background">
                <img className="logo" src={window.logo} alt="logo-icon"/>
                {SignupForm}
                {LoginForm}
            </div>

        );
    }
}

export default SessionForm;
