import React, { Component } from 'react';

class Sign extends Component {
    render() {
        const { user, signUp, signIn } = this.props;

        return (
            <div>
                <p>Please sign in.</p>
                <form onSubmit={this.signIn}>
                    <div>
                        <label>
                            Email:
                    <input
                                type="text"
                                name="inEmail"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                    <input
                                type="text"
                                name="inPassword"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <input type="submit" value="Sign in with Email, Password" />
                </form>
                <form onSubmit={this.signUp}>
                    <div>
                        <label>
                            Email:
                    <input
                                type="text"
                                name="upEmail"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                    <input
                                type="text"
                                name="upPassword"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <input type="submit" value="Sign up with Email, Password" />
                </form>
            </div>
        );
    }
}

export default Sign;