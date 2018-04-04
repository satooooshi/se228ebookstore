
import React from 'react';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

const BookInsideSearchedList = () => (
    <Modal trigger={<Button className="ui right floated primary button add-button">See Detail<Icon name='right chevron' /></Button>} closeIcon>
        <Modal.Header>Description</Modal.Header>
        <Modal.Content image>
            <Image wrapped size='medium' src="http://icons.indats.com/sewlong/skiing-modal.jpg" />
            <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                Add Cart <Icon name='right chevron' />
            </Button>
        </Modal.Actions>
    </Modal>
)

const MATCHING_ITEM_LIMIT = 25;

class BookSearch extends React.Component {
    state = {
        books: [],
        showRemoveIcon: false,
        searchValue: '',
    };

    onSearchChange = (e) => {
        const value = e.target.value;

        this.setState({
            searchValue: value,
        });

        if (value === '') {
            this.setState({
                showRemoveIcon: false,
            });
        } else {
            this.setState({
                showRemoveIcon: true,
            });

            /*
            Client.search(value, (foods) => {
              this.setState({
                foods: foods.slice(0, MATCHING_ITEM_LIMIT),
              });
            });
            */


            const isMatchBook = book => book.name==value;
            let books=[
                {
                    "id" : "978-0641723445",
                    "cat" : ["book","hardcover"],
                    "name" : "The Lightning Thief",
                    "author" : "Rick Riordan",
                    "series_t" : "Percy Jackson and the Olympians",
                    "sequence_i" : 1,
                    "genre_s" : "fantasy",
                    "inStock" : true,
                    "price" : 12.50,
                    "pages_i" : 384
                }
                ,
                {
                    "id" : "978-1423103349",
                    "cat" : ["book","paperback"],
                    "name" : "The Sea of Monsters",
                    "author" : "Rick Riordan",
                    "series_t" : "Percy Jackson and the Olympians",
                    "sequence_i" : 2,
                    "genre_s" : "fantasy",
                    "inStock" : true,
                    "price" : 6.49,
                    "pages_i" : 304
                }
                ,
                {
                    "id" : "978-1857995879",
                    "cat" : ["book","paperback"],
                    "name" : "Sophie's World : The Greek Philosophers",
                    "author" : "Jostein Gaarder",
                    "sequence_i" : 1,
                    "genre_s" : "fantasy",
                    "inStock" : true,
                    "price" : 3.07,
                    "pages_i" : 64
                }
                ,
                {
                    "id" : "978-1933988177",
                    "cat" : ["book","paperback"],
                    "name" : "a",
                    "author" : "Michael McCandless",
                    "sequence_i" : 1,
                    "genre_s" : "IT",
                    "inStock" : true,
                    "price" : 30.50,
                    "pages_i" : 475
                }
                ,
                {
                    "id" : "978-1933988188",
                    "cat" : ["book","ebook"],
                    "name" : "Lucene in Action, Second Edition",
                    "author" : "Michael McCandless",
                    "sequence_i" : 1,
                    "genre_s" : "IT",
                    "inStock" : true,
                    "price" : 25.50,
                    "pages_i" : 475
                }
                ,
                {
                    "id" : "978-1933988188",
                    "cat" : ["book","ebook"],
                    "name" : "Lucene in Action, Second Edition",
                    "author" : "Michael McCandless",
                    "sequence_i" : 1,
                    "genre_s" : "IT",
                    "inStock" : true,
                    "price" : 25.50,
                    "pages_i" : 475
                }
                ,
                {
                    "id" : "978-1933988188",
                    "cat" : ["book","ebook"],
                    "name" : "Lucene in Action, Second Edition",
                    "author" : "Michael McCandless",
                    "sequence_i" : 1,
                    "genre_s" : "IT",
                    "inStock" : true,
                    "price" : 25.50,
                    "pages_i" : 475
                }
            ].filter(isMatchBook);
            this.setState({
                books: books.slice(0, MATCHING_ITEM_LIMIT),
            });





        }
    };

    onRemoveIconClick = () => {
        this.setState({
            books: [],
            showRemoveIcon: false,
            searchValue: '',
        });
    };

    render() {
        return (
            <div id='food-search'>

                            <div className='ui fluid search'>
                                <div className='ui icon input'>
                                    <input
                                        className='prompt'
                                        type='text'
                                        placeholder='Search books...'
                                        value={this.state.searchValue}
                                        onChange={this.onSearchChange}
                                    />
                                    <i className='search icon' />
                                </div>
                                {
                                    this.state.showRemoveIcon ? (
                                        <i
                                            className='remove icon'
                                            onClick={this.onRemoveIconClick}
                                        />
                                    ) : ''
                                }
                            </div>



                <tbody>
                {
                    this.state.books.map((book, idx) => (
                        <tr
                            key={idx}
                            onClick={() => this.props.onBookClick(book)}
                        >
                            <div className="ui divided items">

                            <div className="item">
                                <div className="image">
                                    <img src="http://icons.indats.com/sewlong/dogsled.jpg"></img>
                                </div>
                                <div className="content">
                                    <a className="header">{book.name}</a>
                                    <div className="meta">
                                        <b>Written By: </b>{book.author}
                                    </div>
                                    <div className="description">
                                        <p>Lorem ipsum dolor sit amet, pri ei sale sonet ornatus. Usu dicunt omnium cu. In vix dicam fuisset adipiscing, cibo delenit ius id, eu regione fuisset vix. Ne modo eruditi vim. Mea nostro mentitum conceptam in. Ei cum quaestio eleifend oportere.</p>
                                    </div>
                                    <div className="extra">
                                        <BookInsideSearchedList />
                                        <div className="ui label">21 and Over</div>
                                    </div>
                                </div>
                            </div>

</div>
                        </tr>
                    ))
                }
                </tbody>



            </div>
        );
    }
}


export default BookSearch;
