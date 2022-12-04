import React from "react";
import PropTypes from 'prop-types';

import '../FeedbackOptions/FeedbackOptions.css';
const buttonsList = ['good','neutral','bad']
export function FeedbackOptions({handleOnClick}) {
    return (
        <div className="buttons__container">
            {buttonsList.map(e => {
                return (
                    <button type="button" name={e} onClick={handleOnClick}>{e.toUpperCase()}</button>
                );
            })}
        </div>
    );
}

FeedbackOptions.propTypes = {
    handleOnClick: PropTypes.func,
}