import React from 'react';
import { Container } from 'reactstrap';
import Search from '../Search';

const Layout = (props) => {
    return (
        <Container fluid >
            <Search />
        </Container>
    );
}

export default Layout;