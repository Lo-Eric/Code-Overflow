import React from 'react';

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
        // debugger
        e.preventDefault();
        this.props.removeErrors()
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
             <div className="Signup_Error">{this.renderErrors()}</div>
             <div className="signup-form">
                <br />
                <div className="form_group">
                <label>Username:
                            <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="signup-input"
                    />
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
            <div className="login_error">{this.renderErrors()}</div>
            <div className="login-form">
                <br />
                <div className="form_group">
                <label>Email:
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                    />
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
            // <div className="login-form-container">
            //     <form onSubmit={this.handleSubmit} className="login-form-box">
            //         Welcome to Code Overflow!
            <div>
                    {SignupForm}
                    {LoginForm}
            </div>

        );
    }
}

export default SessionForm;
