import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BookList = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}

export default connect(null, null)(BookList);