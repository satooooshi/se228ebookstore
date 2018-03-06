/* eslint-disable no-param-reassign, operator-assignment */
//
//1. Think about and organize your app into components
//2. JSX and the render method
//3. Data flow from parent to children through props
//4. Event flow from children to parent through functions
//5. State vs props
//6. How to manipulate state
//7. Utilizing React lifecycle methods
//
class ProductList extends React.Component {

  //Arrange state
  state = {
    products: [],
    order:true,
  };

  //Act
  componentDidMount() {
    this.setState({ products: Seed.products });
  }

  //ActWhen
  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  }

  handleProductDownVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes - 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  }

  ascendingOrder = () => {
    const nextProducts = this.state.products.sort((a, b) => (
      a.votes - b.votes
    ));
    this.setState({
      products: nextProducts,
    });
  }

  descendingOrder = () => {
    const nextProducts = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));
    this.setState({
      products: nextProducts,
    });
  }


  render() {

    const products =this.state.products;
    //const products = this.state.products.sort((a, b) => (
    //  b.votes - a.votes
    //));

    const productComponents = products.map((product) => (

      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        upVote={this.handleProductUpVote}
        downVote={this.handleProductDownVote}
      />
    ));
    return (
      <div>
      <div className='toggle order'>
        <a onClick={this.ascendingOrder}>
          <i className='large caret up icon' />
        </a>
        <a onClick={this.descendingOrder}>
          <i className='large caret down icon' />
        </a>
      </div>
      <div className='ui unstackable items'>
        {productComponents}
      </div>
      </div>
    );
  }
}




class Product extends React.Component {
  handleUpVote = () => (
    this.props.upVote(this.props.id)
  );
  handleDownVote = () => (
    this.props.downVote(this.props.id)
  );

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            <a onClick={this.handleDownVote}>
              <i className='large caret down icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
