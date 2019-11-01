import React, { Component } from 'react';
import { handleChange } from '../actions/handleChange';
import { connect } from 'react-redux';

class Sign extends Component {
    handleInput = (event) => {
        this.props.handleChange(event);
    }

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
                                // value={this.state.email}
                                onChange={this.handleInput}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                    <input
                                type="text"
                                name="inPassword"
                                // value={this.state.password}
                                onChange={this.handleInput}
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
                                // value={this.state.email}
                                onChange={this.handleInput}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                    <input
                                type="text"
                                name="upPassword"
                                // value={this.state.password}
                                onChange={this.handleInput}
                            />
                        </label>
                    </div>
                    <input type="submit" value="Sign up with Email, Password" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => {
    return {
        handleChange: (data) => dispatch(handleChange(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sign);