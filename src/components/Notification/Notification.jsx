import React from "react";
import PropTypes from 'prop-types';

export function Notification({ message}){

    return (
        <p>{message}</p>
    );
}

Notification.propTypes = {
    good: PropTypes.string,
}