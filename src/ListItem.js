import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        const name = this.props.name;
        const handleNavigation = this.props.onNavigation;
        return (
            <div className="list-item">
                <div>{name}</div>
                <a href="/" onClick={(e) => {
                    e.preventDefault();
                    handleNavigation()
                }}>View</a>
            </div>
        )
    }
}
