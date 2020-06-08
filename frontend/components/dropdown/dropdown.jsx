import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dropdownShow: false}
    }

    toggleClass() {
        debugger
        const currentState = this.state.dropdownShow;
        this.setState({dropdownShow: !currentState});
    } 

    render () {
    return (
    <div className="dropdown"> 
        <button className="dropdown-btn" onClick={this.toggleClass}>
            <img src={window.dropdown} alt="dropdown-icon" />
        </button>
        <div className={this.state.dropdownShow ? "dropdown-content-show" : "dropdown-content"} id="myDropdown">
            <h4>Item1</h4>
            <h4>Item2</h4>
            <h4>Item3</h4>
            <h4>Item4</h4>
        </div>
    </div>
    )
}};

export default Dropdown;