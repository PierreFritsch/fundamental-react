import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Table = props => {
    const { headers, tableData, className, ...rest } = props;

    const tableClasses = classnames(
        'fd-table',
        className
    );

    return (
        <table className={tableClasses} {...rest}>
            <thead>
                <tr>
                    {headers.map((header, index) => {
                        return <th key={index}>{header}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.rowData.map((rowData, cellIndex) => {
                                return <td key={cellIndex}>{rowData}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
Table.propTypes = {
    tableData: PropTypes.arrayOf(
        PropTypes.shape({
            rowData: PropTypes.array
        }).isRequired
    ).isRequired,
    className: PropTypes.string,
    headers: PropTypes.array
};
