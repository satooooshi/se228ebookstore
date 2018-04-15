/* @flow */
import React from 'react';
import { Route } from 'react-router-dom';

import { Container, Navbar, } from 'reactstrap';

import Home from '../home';
import About from '../about';
import SignIn from '../signin'
import AppNav from '../appnav';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardColumns, Table } from 'reactstrap';


//********************************************************************

class Contact extends React.Component {

    render() {
    return (
    <div>
       <Header />
    </div>
);
}
}

const CardThumbnail = (props) => {
    return (
        <div>
            <Card class="w-25 p-3">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

class Header extends React.Component {

    render() {
    return (
    <div>

        <InputTop />

    <Navbar color="light" light expand="md">
        <div>
            <h1>About Page</h1>
            <p>Boilerplate application to demonstrate how to wire up Spring, JWT Authentication, React, Redux and Websockets</p>
        </div>
    </Navbar>

        <br />
        <Card/>
        <br />

        <CardColumns>
        <CardThumbnail />
            <CardThumbnail />
            <CardThumbnail />
            <CardThumbnail />
            <CardThumbnail />
            <CardThumbnail />
            <CardThumbnail />
            <CardThumbnail />

        </CardColumns>

    </div>
    );
}
}

class InputTop extends React.Component {

    render() {
        return (
            <div>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
                    <Input />
                </InputGroup>
            </div>
        );
    }
}



//********************************************************************

class Cart extends React.Component {

    render() {
        return (
            <div>
                <CartList/>
            </div>
        );
    }
}


class CartList extends React.Component {
    render() {
        return (
            <div>
            <br />
            <Table responsive striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                </tbody>
            </Table>
            </div>
        );
    }
}


const App = () => (
  <div>
      <AppNav/>
      <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={Cart} />
      </Container>
  </div>
);

export default App;
