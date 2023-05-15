import React from "react";

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddTrack = this.handleAddTrack.bind(this);
        this.handleRemoveTrack = this.handleRemoveTrack.bind(this);
    }

    handleAddTrack() {
        this.props.onAdd(this.props.track);
    }

    handleRemoveTrack() {
        this.props.onRemove(this.props.track);
    }

    render() {
        return (
            <div className='Track'>
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>Artist: {this.props.track.artist} | Album: {this.props.track.album}</p>
                </div>
                {
                    this.props.isRemoval ?
                    <button className="Track-action" onClick={this.handleRemoveTrack}>-</button>
                    :
                    <button className="Track-action" onClick={this.handleAddTrack}>+</button>
                }
                
            </div>
        );
    }
}

export default Track;