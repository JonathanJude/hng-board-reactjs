import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logOut } from "reducers/actions/authActions";
import { Button, Form, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
	logOut = () => {
		this.props.logOut();
		this.props.history.push("/login");
	};

	viewProfile = () => {
		this.props.history.push(`${this.props.user.role === "intern" ? "/user" : "/admin"}/profile`);
	};

	render() {
		const { user } = this.props;
		const notification = (
			<div>
				<i className="fa fa-globe" />
				<b className="caret" />
				<span className="notification">5</span>
				<p className="hidden-lg hidden-md">Notification</p>
			</div>
		);
		return (
			<div>
				<Nav>
					<NavItem eventKey={1} href="#sidebar">
						{/* <i className="fa fa-dashboard" /> */}
						<p className="hidden-lg hidden-md">Dashboard</p>
					</NavItem>
					{/**/}
					{/* <NavItem eventKey={3} href="#">
						<i className="fa fa-search" />
						<p className="hidden-lg hidden-md">Search</p>
					</NavItem> */}
				</Nav>
				<Nav pullRight>
					<NavDropdown eventKey={2} title={notification} noCaret id="basic-nav-dropdown">
						<MenuItem eventKey={2.1}>Notification 1</MenuItem>
						<MenuItem eventKey={2.2}>Notification 2</MenuItem>
						<MenuItem eventKey={2.3}>Notification 3</MenuItem>
						<MenuItem eventKey={2.4}>Notification 4</MenuItem>
						<MenuItem eventKey={2.5}>Another notifications</MenuItem>
					</NavDropdown>
					<NavItem eventKey={1} href="#">
						{user ? user.email : "Loading..."}
					</NavItem>
					<NavDropdown eventKey={2} title="Actions" id="basic-nav-dropdown-right">
						<MenuItem eventKey={2.1}>Change Track</MenuItem>
						<MenuItem eventKey={2.2}>Change Course</MenuItem>
						<MenuItem eventKey={2.3}>Make Submission</MenuItem>
						<MenuItem divider />
						<MenuItem onClick={this.viewProfile} eventKey={2.5}>
							View Profile
						</MenuItem>
					</NavDropdown>
					<Button
						style={{
							backgroundColor: "#5bc0de",
							color: "#FFF",
							outline: "none",
							marginRight: "auto",
							marginLeft: "auto",
							display: "block",
						}}
						onClick={this.logOut}
						bsStyle="info"
						type="button"
						pullRight
						fill
					>
						LOG OUT
					</Button>
				</Nav>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		isAuth: state.auth.isAuth,
		user: state.auth.user,
	};
};

export default withRouter(connect(mapState, { logOut })(AdminNavbarLinks));
