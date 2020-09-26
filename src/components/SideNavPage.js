import React from "react";
import Sidebar from "react-sidebar";
import { Button } from "react-bootstrap";
import "../styles/styles1.css";
import showUser from "../config/showUser";
import fire from "../config/fire";
class SideNavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <b>
            GAYATRI COTTONS INDUSTRIES
            <br />
            <Button
              variant="secondary"
              className="LogOutBtn"
              onClick={() => fire.auth().signOut()}
            >
              Log Out
            </Button>
          </b>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        shadow={true}
        pullRight={true}
        styles={{ sidebar: { background: "#180D44" } }}
      >
        <div className="slideBtn">
          <i
            class="fa fa-bars  fa-2x"
            aria-hidden="true"
            onClick={() => this.onSetSidebarOpen(true)}
          ></i>
        </div>
        {/* <Button variant="secondary" className="slide" >
          |||
        </Button> */}
      </Sidebar>
    );
  }
}

export default SideNavPage;
