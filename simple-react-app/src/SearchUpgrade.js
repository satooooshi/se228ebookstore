import _ from 'lodash';
import React, { Compenent } from 'react';
import Books from './static/db/books.json';
import { Button, Header, Image, Modal, Icon, Search } from 'semantic-ui-react';


class BookDetail extends React.Component {
    render() {
            return(
                <Modal trigger={<Button className="ui right floated primary button add-button">See Detail<Icon name='right chevron' /></Button>} closeIcon>
                    <Modal.Header>Description</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src={this.props.book.book_image} />
                        <Modal.Description>
                            <Header>{this.props.book.title}</Header>
                            <p> <b>Written By:</b>{this.props.book.author}</p>
                            <p> <b>Genre:</b>{this.props.book.category}</p>
                            <p> <b>Price:</b>{this.props.book.price}</p>
                            <p> <b>Description:</b>{this.props.book.description}</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button primary>
                            Add Cart <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                </Modal>
            )
        }
}



const source = Books;


class SearchUpgrade extends React.Component {

    state={
        searchedBooks:[],
        results:[],
    };

    componentDidMount() {
        this.setState({ results: source });
    }

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: source, value: '' });

    handleResultSelect = (e, { result }) => this.setState({ value: result.title });

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');

            //**************use search*****************
            let isMatch;
            if(this.props.searchBy==='title')isMatch= result => re.test(result.title);
            else if(this.props.searchBy==='author')isMatch= result => re.test(result.author);
            else isMatch= result => re.test(result.title);
            //*****************************************
            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 500)
    };

    render() {

        let resultas=this.state.results;
        if(this.state.results!==undefined) {
            if (this.props.order === 1) {
                resultas = this.state.results.sort((a, b) => (
                    a.title > b.title ? 1 : -1

                ));
            }else if(this.props.order === 2){
                resultas = this.state.results.sort((a, b) => (
                    b.sales > a.sales ? 1 : -1
                ));
            }else if(this.props.order === 3){
                resultas = this.state.results.sort((a, b) => (
                    a.price.slice(1) > b.price.slice(1) ? 1 : -1
                ));
            }

            let resultasBeforeGenre=resultas;

            if (this.props.genreBy === 'SciFi') {
                resultas = resultas.filter( function( book ) {
                    return book.category === 'SciFi';
                })
            }else if (this.props.genreBy === 'Biography') {
                resultas = resultas.filter( function( book ) {
                    return book.category === 'Biography';
                })
            }else if (this.props.genreBy === 'SchoolBook') {
                resultas = resultas.filter( function( book ) {
                    return book.category === 'SchoolBook';
                })
            }else if (this.props.genreBy === 'Fiction') {
                resultas = resultas.filter( function( book ) {
                    return book.category === 'Fiction';
                })
            }else if (this.props.genreBy === 'History') {
                resultas = resultas.filter( function( book ) {
                    return book.category === 'History';
                })
            }else{
                resultas=resultasBeforeGenre;
            }
        }

        const { isLoading, value, results } = this.state;
        return (

            <div>
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={this.handleSearchChange}
                        value={value}
                        results={results}
                        placeholder='Search books...'
                        {...this.props}
                    />

            <tbody>
            {
                resultas.map((book, idx) => (
                    <tr>
                    <div className="ui divided items">

                        <div className="item">
                            <div className="image">
                                <image src={book.book_image} alt={book.title}/>
                            </div>
                            <div className="content">
                                <a className="header">{book.title}</a>
                                <div className="meta">
                                    <b>Written By: </b>{book.author}
                                </div>
                                <div>
                                <b>Genre: </b>{book.category}
                                </div>
                                <div className="price">
                                    <b>Price: {book.price}</b>
                                </div>
                                <span>
                                <div className="extra">
                                    <Button primary key={idx}
                                            onClick={() => this.props.onBookClick(book)}>
                                    Add Cart
                                    </Button>
                                    <div className="ui label">{book.sales} sales</div>
                                    <BookDetail book={book}/>
                                </div>

                                </span>
                            </div>
                        </div>

                    </div>
                </tr>
            ))
    }
    </tbody>
</div>
        )
    }
}

export default SearchUpgrade;