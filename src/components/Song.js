import React, {Component} from 'react';

class Song extends Component {
  render () {
    return (
      <div className="song">
        <a href={this.props.audio}><img src={this.props.children} alt=""></img></a>
        <h5><a href={this.props.audio}>{this.props.title}</a></h5>
        <h5>{this.props.artist}</h5>
        <h5>{this.props.category}</h5>
      </div>

    );
  }

}

export default Song;
