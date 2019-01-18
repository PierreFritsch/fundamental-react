import classnames from 'classnames';
import { Popover } from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';

// ------------------------------------------- Combobox Input ------------------------------------------
export const ComboboxInput = ({ placeholder, menu, compact, className, ...props }) => {
    const comboboxInputClasses = classnames(
        'fd-combobox-input',
        className
    );

    const comboboxPopoverClasses = classnames(
        'fd-input-group',
        'fd-input-group--after',
        {
            'fd-input-group--compact': compact
        }
    );

    const comboboxPopoverInputClasses = classnames(
        'fd-input',
        {
            'fd-input--compact': compact
        }
    );

    return (
        <div {...props} className={comboboxInputClasses}>
            <Popover
                body={menu}
                control={
                    <div className='fd-combobox-control'>
                        <div
                            className={comboboxPopoverClasses}>
                            <input
                                className={comboboxPopoverInputClasses}
                                id=''
                                placeholder={placeholder}
                                type='text' />
                            <span className='fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button'>
                                <button className=' fd-button--light sap-icon--navigation-down-arrow' />
                            </span>
                        </div>
                    </div>
                }
                noArrow />
        </div>
    );
};

ComboboxInput.propTypes = {
    menu: PropTypes.object.isRequired,
    className: PropTypes.string,
    compact: PropTypes.bool,
    placeholder: PropTypes.string
};

ComboboxInput.defaultTypes = {
    compact: false,
    placeholder: ''
};
