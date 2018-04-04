import React from 'react';

export default function SelectedBooks(props) {
    return (


                <div>
            <thead>

                    <h3>Selected Books</h3>
            </thead>

            <tbody>
            {
                props.books.map((book, idx) => (
                    <tr
                        key={idx}
                        onClick={() => props.onBookClick(idx)}
                    >

                        <div className="ui four cards">
                            <div className="card">
                                <div className="content">
                                    <div className="header">{book.name}</div>
                                    <div className="description">
                                        {book.author}
                                        {book.price_g}
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    Add Friend
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
