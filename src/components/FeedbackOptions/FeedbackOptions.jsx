import React from "react";
import PropTypes from 'prop-types';

import '../FeedbackOptions/FeedbackOptions.css';

export function FeedbackOptions({handleOnClick}) {
    
    return (
        <div className="buttons__container">
           <button type="button" name='good' onClick={handleOnClick}>Good</button>
           <button type="button" name='neutral' onClick={handleOnClick}>Neutral</button>
           <button type="button" name='bad' onClick={handleOnClick}>Bad</button>
        </div>
    );
}

FeedbackOptions.propTypes = {
    handleOnClick: PropTypes.func,
}