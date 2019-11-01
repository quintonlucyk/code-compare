import React, { Component } from 'react';
import { handleChange } from '../actions/handleChange';
import { connect } from 'react-redux';

class Sign extends Component {
    onChange = (event) => {
        this.props.handleChange([event.target.name], event.target.value);
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
                                // value={this.state.password}
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
                                // value={this.state.email}
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
                                // value={this.state.password}
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

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    handleChange: () => dispatch(handleChange)
})

export default connect(mapStateToProps, mapDispatchToProps)(Sign);