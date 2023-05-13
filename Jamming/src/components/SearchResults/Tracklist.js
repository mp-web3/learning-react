import React  from 'react';
import Track from './Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className='TrackList'>
                {
                    // If this.props.tracks is defined, map over it
                    this.props.tracks ? this.props.tracks.map(track => {
                        return <Track key={track.id} track={track} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />;
                    // Otherwise, return null (i.e., render nothing)
                    }) : null
                }
            </div>
        );
    }
}

export default TrackList;
