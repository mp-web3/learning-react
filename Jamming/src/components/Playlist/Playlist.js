import React from "react";
import TrackList from "../SearchResults/TrackList";

class Playlist extends React.Component {

    render() {

        const { playlistTracks, onRemove, onSave } = this.props

        return (
            <div className='Playlist'>
                <input defaultValue={'New Playlist'} />

                <TrackList 
                tracks={playlistTracks}
                onRemove={onRemove}
                isRemoval={true} />

                <button className="Playlist-save" onCLick={onSave}>Save Playlist</button>

            </div>

        );
    }
}

export default Playlist;