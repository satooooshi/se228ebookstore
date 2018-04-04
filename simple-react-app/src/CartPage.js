import React from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';




class CartPage extends React.Component {

    removeBook = (bookId) => {
        this.props.removeBook(bookId)
    };

    render() {

        let bookComponents;
        bookComponents = this.props.selectedBooks.map((book) => (
            <BookCard book={book} removeBook={this.removeBook}/>
        ));
        if(bookComponents.length!==0){
            return (
                <div>
                    {bookComponents}
                    <h1>In Total: ${sum(this.props.selectedBooks, 'price')}　/　{sumItem(this.props.selectedBooks)} items</h1>
                    <Link to="/search">
                        <Button primary>
                            <Icon name='left chevron'/>Continue Shopping
                        </Button>
                    </Link>
                    <Link to="/checkout">
                        <Button primary>
                            Proceed<Icon name='right chevron'/>
                        </Button>
                    </Link>

                </div>
            )
        }else{
            return(
                <div>
                    <h1>Your shopping basket is currently empty.</h1>
                    <Link to="/search">

                    </Link>
                </div>
            )
        }
    }
}


function sum(books, prop) {
    return books.reduce((memo, book) => (
        parseFloat(book[prop].slice(1)) + memo
    ), 0.0).toFixed(2);
}
function sumItem(books) {
    return books.length;
}



export default CartPage;