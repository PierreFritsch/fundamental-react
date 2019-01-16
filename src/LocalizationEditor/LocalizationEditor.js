import classnames from 'classnames';
import { Popover } from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';

// ------------------------------------------- Menu ------------------------------------------
export const LocalizationEditor = ({ control, menu, id, compact, textarea, className, ...props }) => {
    const localizationEditorClasses = classnames(
        'fd-localization-editor',
        className
    );

    const localizationEditorCompactClasses = classnames(
        'fd-input-group',
        {
            'fd-input-group--compact': compact && !!textarea === false
        },
        'fd-input-group--after'
    );

    const localizationEditorInputClasses = classnames(
        {
            'fd-input fd-input--compact': compact
        }
    );

    const localizationEditorTextareaClasses = classnames(
        'fd-input-group__addon',
        'fd-input-group__addon--after',
        'fd-input-group__addon--button',
        {
            'fd-input-group__addon--textarea': textarea
        }
    );

    const localizationEditorAddonClasses = classnames(
        'fd-input-group__addon',
        'fd-input-group__addon--after',
        {
            'fd-input-group__addon--textarea': textarea
        }
    );

    return (
        <div className={localizationEditorClasses} {...props}>
            <Popover
                body={
                    <nav className='fd-menu'>
                        <ul className='fd-menu__list fd-localization-editor__list'>
                            {menu.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div
                                            className={localizationEditorCompactClasses}>
                                            {textarea ? (
                                                <textarea />
                                            ) : (
                                                <input
                                                    className={localizationEditorInputClasses}
                                                    placeholder={item.placeholder}
                                                    type='text' />
                                            )}
                                            <span
                                                className={localizationEditorAddonClasses}>
                                                {item.language}
                                            </span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                }
                control={
                    <div>
                        <label className='fd-form__label' htmlFor={id}>
                            {control.label}
                        </label>
                        <div
                            className={localizationEditorCompactClasses}>
                            {textarea ? (
                                <textarea />
                            ) : (
                                <input
                                    className={localizationEditorInputClasses}
                                    placeholder={control.placeholder}
                                    type='text' />
                            )}
                            <span
                                className={localizationEditorTextareaClasses}>
                                <button className='fd-button--light fd-localization-editor__button'>
                                    {control.language}
                                </button>
                            </span>
                        </div>
                    </div>
                }
                id={id}
                noArrow />
        </div>
    );
};

LocalizationEditor.propTypes = {
    control: PropTypes.shape({
        label: PropTypes.string,
        placeholder: PropTypes.string,
        language: PropTypes.string
    }).isRequired,
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            placeholder: PropTypes.string,
            language: PropTypes.string
        }).isRequired
    ).isRequired,
    className: PropTypes.string,
    compact: PropTypes.bool,
    id: PropTypes.string,
    textarea: PropTypes.bool
};
