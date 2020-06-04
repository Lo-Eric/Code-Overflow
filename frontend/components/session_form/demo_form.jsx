import React from 'react';

class DemoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'DemoEmail@gmail.com',
            password: 'Demopw',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.removeErrors();
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

    // demoLogin() {
    //     const demoUser = this.state;
    //     this.props.processForm(demoUser);
    // }

    render() {
        if (this.props.formType === 'DemoLogin') {
            var LoginForm =
                <form onSubmit={this.handleSubmit} className="login-form-container">
                    <div className="login-form">
                        <br />
                        <label>Email:
                         <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} /> </div> </form>
        };

        return (
            // <div className="login-form-container">
            //     <form onSubmit={this.handleSubmit} className="login-form-box">
            //         Welcome to Code Overflow!
            <div>
                {this.renderErrors()}
                {LoginForm}
            </div>

        );
    }
}

export default DemoForm;
