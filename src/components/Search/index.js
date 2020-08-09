import React from 'react';
import { Container } from 'reactstrap';
import SearchForm from './SearchForm';

const Search = (props) => {
    return (
        <Container fluid className="mx-auto mt-3">
            <SearchForm />
        </Container>
    );
}

export default Search;