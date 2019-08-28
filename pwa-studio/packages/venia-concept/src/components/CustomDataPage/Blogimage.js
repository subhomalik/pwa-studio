import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import classify from 'src/classify';
import ReactDOM from 'react-dom';

import Accuride from './Accuride';


const liStyles = {
    margin: 0,
    padding: '3px 10px 5px 20px',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc'
};
const ulStyle = {
    margin: '1em 0',
    padding: 0
};



//const Accuride = ({ contacts1 }) => {






export const Blogimage1 = ({ featured_media }) => {
    console.log(featured_media);
    return (
        { featured_media }
    );
}
class Blogimage extends Component {
    constructor() {
        super();
        this.state = {
            blogimageurl: {
                guid: {
                    rendered: null
                }
            },
            loading: true
        };
    }

    componentDidMount() {

        fetch('https://staging.blog.accuride.com/wp-json/wp/v2/media/' + this.props.featured_media)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    blogimageurl:
                        data
                })
            })
            .catch(console.log);



    }

    render() {
        /* const parsed = qs.parse(this.props.location.search);
         console.log(this.props.location.search);
         const qq = new URLSearchParams(parsed);
         console.log(queryString.parse(this.props.location.search));*/

        console.log(this.state.blogimageurl);

        return (
            <div >
                <div ><img width="200px" src={this.state.blogimageurl.guid ? this.state.blogimageurl.guid.rendered : null} /></div>
            </div>


        );

    }
}



export default Blogimage