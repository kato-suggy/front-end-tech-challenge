import React from 'react';
import { Container } from 'reactstrap';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const Search = (props) => {
    return (
        <Container fluid className="mx-auto mt-3">
            <SearchForm />
            <SearchResults />
        </Container>
    );
}

export default Search;