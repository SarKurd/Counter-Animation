import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import "../styles/App.scss";

class App extends Component {
  state = {
    count: 0,
    animateType: "",
    startAnimateUp: ""
  };
  increamentHandler = () => {
    if (this.state.count < 100) {
      this.setState(
        {
          animateType: "",
          startAnimateUp: ""
        },
        () => {
          setTimeout(() => {
            this.setState(
              {
                startAnimateUp: "start-animate-up"
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    count: this.state.count + 1,
                    animateType: "move-up",
                    startAnimateUp: ""
                  });
                }, 250);
              }
            );
          }, 0);
        }
      );
    }
  };

  decreamentHandler = () => {
    if (this.state.count > 0) {
      this.setState(
        {
          animateType: "",
          startAnimateUp: ""
        },
        () => {
          setTimeout(() => {
            this.setState(
              {
                startAnimateUp: "start-animate-down"
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    count: this.state.count - 1,
                    animateType: "move-down",
                    startAnimateUp: ""
                  });
                }, 250);
              }
            );
          }, 0);
        }
      );
    }
  };
  render() {
    return (
      <div id="app">
        <div className="wrapper">
          <div className="counter--container">
            <i className="fas fa-minus" onClick={this.decreamentHandler} />
            <div className={`counts--container`}>
              <div
                className={`count ${this.state.startAnimateUp} ${
                  this.state.animateType
                }`}
              >
                {this.state.count}
              </div>
            </div>
            <i className="fas fa-plus" onClick={this.increamentHandler} />
          </div>
        </div>
      </div>
    );
  }
}
export default hot(App);
