import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {

    const [ term, setTerm ] = useState('');

    const submitForm = ev => {
        ev.preventDefault();
        onFormSubmit(term);
    };

    const inputChange = event => {
        setTerm(event.target.value);
    };

    return (
        <div className="ui segment search-bar">
            <form onSubmit={submitForm} className="ui form">
                <div className="ui field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={inputChange} />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;