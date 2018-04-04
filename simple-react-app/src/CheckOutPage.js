import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon} from 'semantic-ui-react'


class CheckOutPage extends React.Component {

    componentDidMount(){
        this.setState({
            selectedBooks:this.props.selectedBooks
        })
    }

    render() {

        return(
            <div>
                <div><h1>Check out</h1></div>
                <Link to="/cart">
                    <Button primary>
                        Go Back<Icon name='right chevron'/>
                    </Button>
                </Link>
            </div>
        )
    }
}


export default CheckOutPage;