import React, { Component } from 'react';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { user, signOut } = this.props;
        return (
            <div>
                <button onClick={signOut}>Sign out</button>
                <p>Hello, {user.email}</p>
            </div>
        );
    }
}

export default Home;