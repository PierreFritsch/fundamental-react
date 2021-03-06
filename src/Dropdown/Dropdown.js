import PropTypes from 'prop-types';
import React from 'react';

export const Dropdown = props => {
    const { standard, children, className, ...rest } = props;
    return (
        <div {...rest} className={`fd-dropdown${standard ? ' fd-dropdown--standard' : ''}${className ? ' ' + className : ''}`}>
            {children}
        </div>
    );
};

Dropdown.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    standard: PropTypes.bool
};
