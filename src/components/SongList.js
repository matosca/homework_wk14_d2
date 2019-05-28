import React, { Component } from 'react';
import Song from '../components/Song';

class SongList extends Component {
  render() {
    const songsNodes = this.props.songs.map((song) => {
      return (
        <Song
        title={ song["im:name"].label }
        artist={song["im:artist"].label}
        category={song.category.attributes.label}
        audio={song.link[1].attributes.href}
        audioType={song.link[1].attributes.type}
        key={song.id.attributes["im:id"]}
        >{song["im:image"][2].label}</Song>
      );
    });

    return(
      <div className="songs-list">
        {songsNodes}
      </div>
    );
  }
}

export default SongList;
