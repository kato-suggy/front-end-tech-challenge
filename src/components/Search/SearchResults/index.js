import React from 'react';
import { Container, Media } from 'reactstrap';
import SearchResult from '../SearchResult';

const SearchResults = (props) => {
    return (
        <Container fluid >
            <div className="d-flex align-content-start flex-wrap">
                <Media list>
                    <SearchResult />
                </Media>
            </div>
        </Container>
    );
}

export default SearchResults;