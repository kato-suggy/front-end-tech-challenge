import React from 'react';
import { Button, Form, FormGroup, Label, Input,  InputGroup, InputGroupAddon } from 'reactstrap';

const SearchForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label htmlFor="NASA-search">NASA search</Label>
                <InputGroup>
                    <Input type="search" name="NASA-search" id="NASA-search" placeholder="Moon" />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary">Search</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
            
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Images
                </Label>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Audio
                </Label>
            </FormGroup>
        </Form>
    );
}

export default SearchForm;