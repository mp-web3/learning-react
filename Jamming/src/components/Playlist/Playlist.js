import React from "react";
import TrackList from "../SearchResults/TrackList";

class Playlist extends React.Component {

    render() {

        const { playlistTracks, onRemove, onSave } = this.props

        return (
            <div className='Playlist'>
                <input defaultValue={'New Playlist'} />
                <button className="Playlist-save" onClick={onSave}>Save Playlist</button>

                <TrackList 
                tracks={playlistTracks}
                onRemove={onRemove}
                isRemoval={true} />


            </div>

        );
    }
}

export default Playlist;