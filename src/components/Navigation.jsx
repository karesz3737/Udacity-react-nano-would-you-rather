import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { resetAuthUser } from "../actions/authUser";
class Navigation extends Component {
  logOut = () => {
    const { dispatch } = this.props;
    dispatch(resetAuthUser());
  };
  render() {
    const { users, current, LoadingBar } = this.props;

    return (
      <div>
        {!users ? (
          <LoadingBar />
        ) : (
          <div
            className="ui secondary pointing menu"
            style={{ marginTop: "10px" }}
          >
            <Link className="ui mini button " to="/">
              <p className="cl">Home</p>
            </Link>

            <Link className="ui button mini cl" to="/add">
              <p className="cl">New Poll</p>
            </Link>
            <Link className="mini ui button cl" to="/leaderbord">
              <p className="cl">Leader Bord</p>
            </Link>
            <div className="right menu">
              <div className="name">{current.name}</div>
              <div className="ui image">
                <img
                  src={current.avatarURL}
                  className="ui mini spaced image"
                  alt={current.name}
                />
              </div>
              <Link to="/">
                <button
                  className="ui right labeled icon button"
                  style={{ marginLeft: "10px" }}
                  onClick={this.logOut}
                >
                  <i className="right arrow icon"></i>
                  <p className="cl"> Logout</p>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser, LoadingBar }) => {
  return {
    users,
    current: users[authedUser],
    LoadingBar: users === null,
  };
};
export default connect(mapStateToProps)(Navigation);
