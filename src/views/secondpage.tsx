import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const Example = (props: any) => {
  return (
    <div>
      <h1>Welcome to the second page</h1>
        <a href="landingpage"> go to the main page</a>

        <div>
          <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>To the Left!</InputGroupText>
          </InputGroupAddon>
          <Input />
          </InputGroup>

          <div>
          <Button outline color="primary">primary</Button>{' '}
          <Button outline color="secondary">secondary</Button>{' '}
          <Button outline color="success">success</Button>{' '}
          <Button outline color="info">info</Button>{' '}
          <Button outline color="warning">warning</Button>{' '}
          <Button outline color="danger">danger</Button>
          </div>
  
        </div>

    </div>
  );
}




export default Example;