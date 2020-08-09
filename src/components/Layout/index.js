import React from 'react';
import { Container } from 'reactstrap';
import Search from '../Search';
import AssetView from '../AssetView';

const Layout = (props) => {
    return (
        <Container fluid >
            <Search />
            <AssetView />
        </Container>
    );
}

export default Layout;