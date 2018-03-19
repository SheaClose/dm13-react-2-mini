import React, { Component } from "react";

export default class TextContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="textContainer">
        <textarea
          style={{
            color: this.props.color,
            fontSize: this.props.size,
            fontFamily: this.props.family
          }}
          onChange={this.updateText}
          value={this.state.text}
          placeholder="Start typing your thoughts here!"
          cols="90"
          rows="30"
        />
      </div>
    );
  }
}
