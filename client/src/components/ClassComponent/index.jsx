import React, { Component } from "react";
import styles from "./ClassComponent.module.scss";

class ClassComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {};
  render() {
    return (
      <div className={styles.flex}>
        <p>Hello</p>
        <input />
      </div>
    );
  }
}

export default ClassComponent;
