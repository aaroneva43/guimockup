import React from 'react';

class BasePage extends React.Component {

    render() {
        return (
            <div className="wrapper login-bg">
                {this.props.children}
            </div>
        );
    }

}

export default BasePage;
