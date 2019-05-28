import React, {Component} from 'react';

class Song extends Component {
  render () {
    return (
      <div className="song">
        <img src={this.props.children} alt=""></img>
        <h5><a href={this.props.audio}>{this.props.title}</a></h5>
        <h5>{this.props.artist}</h5>
        <h5>{this.props.category}</h5>
      </div>

    );
  }

}

export default Song;
