import React from 'react';
import SearchUpgrade from './SearchUpgrade';
import { Dropdown, } from 'semantic-ui-react'





const options = [
    { key: 1, text: 'Alphabet', value: 1 },
    { key: 2, text: 'Popular', value: 2 },
    { key: 3, text: 'Price', value: 3 },
]

class SortBy extends React.Component {
    state={value:1}
    handleChange=(event, data)=>{
        this.setState({value: data.value});
        this.props.toggleOrder(data.value);
    }

    render() {

        return(
            <Dropdown
                button
                className='icon'
                floating
                labeled
                icon='sort content descending icon'
                options={options}
                search
                text="Sort By"
                onChange={this.handleChange}
            />
        )

    }
}





const searchOptions = [
    { key: 1, text: 'Title', value: 'title' },
    { key: 2, text: 'Author', value: 'author' },
]

class SearchBy extends React.Component {
    state={value:'title'}
    handleChange=(event, data)=>{
        this.setState({value: data.value});
        this.props.toggleSearchOrder(data.value);
    }

    render() {

        return(
            <Dropdown
                button
                className='icon'
                floating
                labeled
                icon='sort content descending icon'
                options={searchOptions}
                search
                text="Search By"
                onChange={this.handleChange}
            />
        )

    }
}


const genres = [
    { key: 'All', text: 'All', value: 'All' },
    { key: 'SciFi', text: 'SciFi', value: 'SciFi' },
    { key: 'SchoolBook', text: 'SchoolBook', value: 'SchoolBook' },
    { key: 'Biography', text: 'Biography', value: 'Biography' },
    { key: 'Fiction', text: 'Fiction', value: 'Fiction' },
    { key: 'History', text: 'History', value: 'History' },
]

class GenreBy extends React.Component {
    state={value:'All'}
    handleChange=(event, data)=>{
        this.setState({value: data.value});
        this.props.toggleGenre(data.value);
    }

    render() {

        return(
            <Dropdown text="Genre"
                      floating
                      button
                      labeled
                      options={genres}
                      onChange={this.handleChange}
            />

        )

    }
}


class SearchContent extends React.Component {
    state = {
        selectedBooks: [],
        order:0,
        searchBy:'title',
        genreBy:'All',
    }

    componentDidMount(){
        this.setState({
            selectedBooks:this.props.selectedBooks
        })
    }

    toggleOrder = (num) => {
        this.setState({
            order:num,
        })
    }

    toggleSearchOrder = (str) => {
        this.setState({
            searchBy:str,
        })
    }

    toggleGenre=(str)=>{
        this.setState({
            genreBy:str,
        })
    }



    getSelectedBooks=(books)=>{
        this.props.getSelectedBooks(books)
    }

    render() {

        return(
            <div className="ui container">
                <div className="ui basic segment">


                    <h1 className="ui header">Search Books</h1>
                    <p>
                        <SearchBy toggleSearchOrder={this.toggleSearchOrder} />
                        <SortBy toggleOrder={this.toggleOrder}/>
                        <GenreBy toggleGenre={this.toggleGenre}/>
                        <SearchUpgrade onBookClick={
                            (book) => {
                                if(this.state.selectedBooks.findIndex(selected_book=>selected_book.id===book.id)===-1) {
                                    let nextBooks=this.state.selectedBooks.concat(book)
                                    this.setState({
                                        selectedBooks: nextBooks,//cant be overwritten soon!!
                                    })
                                    //
                                    //because state value cant be overwritten till rendered, use nextBooks
                                    //
                                    this.getSelectedBooks(nextBooks)
                                }

                            }
                        }
                                       order={this.state.order}
                                       searchBy={this.state.searchBy}
                                       genreBy={this.state.genreBy}
                        />
                    </p>

                </div>
            </div>
        )

    }
}

export default SearchContent;