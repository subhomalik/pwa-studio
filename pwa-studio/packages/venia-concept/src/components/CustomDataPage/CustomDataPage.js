import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import classify from 'src/classify';
import Accuride from './Accuride';
import Singlepost from './Singlepost';

class CustomDataPage extends Component {

    //let dddddd = this.componentDidMount();
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Accuride contacts1={this.state.contacts_1} />
            </div>
        );
    }


    state = {
        contacts_1: []
    };
    componentDidMount() {
        fetch('https://staging.blog.accuride.com/wp-json/wp/v2/posts')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    contacts_1:
                        data
                })
            })
            .catch(console.log);
    }
}


export default compose(
    withRouter
)(CustomDataPage);