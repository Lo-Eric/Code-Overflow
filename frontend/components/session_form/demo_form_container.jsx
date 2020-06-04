import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeSessionErrors } from '../../actions/session_actions';
import DemoForm from './demo_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'DemoLogin',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoForm);
