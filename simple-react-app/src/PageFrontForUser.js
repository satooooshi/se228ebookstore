import React, {Component}　from 'react';
import Login from './Login';
import SearchContent from './SearchContent';
import CartPage from './CartPage';
import CheckOutPage from './CheckOutPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Header, Icon, Image,Card,Grid,Segment } from 'semantic-ui-react'


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const Contact = () => (
    <div>
        <h2>My Profile</h2>
        <CardExampleImageCard />
    </div>
);



class PageFrontForUser extends Component {
    state = {
        selectedBooks: [],
        order:0,
        searchBy:1,
    };


    toggleOrder = (num) => {
        this.setState({
            order:num,
        })
    };

    toggleSearchOrder = (str) => {
        this.setState({
            searchBy:str,
        })
    };

    removeBook = (bookId) => {
        let nextSelectedBooks=this.state.selectedBooks.filter( function( book ) {
            return book.id !== bookId;
        });
        this.setState({
            selectedBooks:nextSelectedBooks,
        })
    };

    getSelectedBooks=(books)=>{
        this.setState({
            selectedBooks:books,
        })
    };



    render() {
        return (
            <div className="fad">
                <Router>
                    <div className="ui bottom attached segment">
                        <div className="sidebar-container">
                            <div className="ui  visible inverted left vertical sidebar menu">
                                <Segment inverted>
                                    <div className="item">
                                        <div className="header">
                                            <Header as='h3' inverted color='gray'>
                                                <Image circular src='./static/db/img/avatar.png' />
                                                {' '}Username
                                            </Header>
                                        </div>
                                        <Header as='h3'>
                                            <Grid reversed='tablet vertically'>
                                                <Grid.Row>
                                                    <Grid.Column><Link to="/">Home</Link></Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column><Link to="/search">Search</Link></Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column> <Link to="/cart">Cart</Link></Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column><Link to="/login">Login</Link></Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Header>
                                    </div>
                                </Segment>
                            </div>
                        </div>
                        <div className="pusher">
                            <hr />
                            <Route exact path="/" render={() => <Home />} />
                            <Route path="/login" render={() => <Login />} />
                            <Route path="/search" render={() => <SearchContent selectedBooks={this.state.selectedBooks}  getSelectedBooks={this.getSelectedBooks} />} />
                            <Route path="/cart" render={() => <CartPage selectedBooks={this.state.selectedBooks} removeBook={this.removeBook} />} />
                            <Route path="/checkout" render={() => <CheckOutPage selectedBooks={this.state.selectedBooks} />} />
                            <Route path="/myprofile" component={Contact}/>
                            <hr />
                        </div>
                    </div>
                </Router>
            </div>

        )
    }
}

const CardExampleImageCard = () => (
    <Card fluid>
        <Image src='book.jpg' />
        <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                10 Friends
            </a>
        </Card.Content>
    </Card>
);

export default PageFrontForUser;