import React from 'react';
import { Media } from 'reactstrap';

const SearchResult = (props) => {
    return (
        <Media tag="li">
            <Media href="#">
                <Media object src="https://images-assets.nasa.gov/image/PIA08656/PIA08656~thumb.jpg" alt="search result image" />
            </Media>
        </Media>
    );
}

export default SearchResult;
