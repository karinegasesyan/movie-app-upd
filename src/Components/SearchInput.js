import React from 'react';

class SearchInput extends React.Component {
    render() {
        return (
            <form className="search-field">
                <input
                    placeholder="Search for..."
                    onChange={e => this.onChange(e)}
                />
            </form>
        )
    }

    onChange = ({target: {value}}) => {
        this.props.onChange(value);
    };
}

export default SearchInput;