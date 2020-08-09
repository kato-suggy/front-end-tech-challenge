import React from 'react';
import { Container, Media } from 'reactstrap';

const AssetView = (props) => {
    return (
        <Container fluid className="mx-auto mt-3">

            <h1>
                Asset Title
            </h1>
            <p>
                This is the asset description... 
            </p>

            <Media>
                <Media object src="https://images-assets.nasa.gov/image/PIA21073/PIA21073~medium.jpg" alt="Image alt" />
            </Media>

        </Container>
    );
}

export default AssetView;