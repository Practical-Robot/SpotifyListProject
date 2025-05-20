import React, { useCallback } from "react";

import "./Track.css";

function Track(props){

    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]

    )

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track]
    );

    function trackAction() {
        if(props.isRemoval) {
            return (
                <button className="plusMinus" onClick={removeTrack}>
                    -
                </button>
            );
        }
        else{
            return(
                <button className="plusMinus" onClick={addTrack}>
                    +
                </button>
            );
        }
    }

}

export default Track;