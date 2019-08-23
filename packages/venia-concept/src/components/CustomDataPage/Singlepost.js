import React, { Component, Fragment } from 'react';
import { withRouter, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { compose } from 'redux';
import classify from 'src/classify';

const childDivStyle = {
    margin: 0,
    padding: '3px 10px 5px 20px',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc'
};
const mainDivStyles = {
    margin: '1em 0',
    padding: 0
};

class Singlepost extends Component {
    constructor() {
        super();
        this.state = {
            single_contact: [],
            writers: {
                title: {
                    rendered: ''
                },
                content: {
                    rendered: ''
                }
            },
            loading: true
        };
    }


    async componentDidMount() {
        const url = 'https://staging.blog.accuride.com/wp-json/wp/v2/posts';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ single_contact: data });
        const getQuery = window.location.search.substring(1);
        var getId = getQuery.split('=')[1];
        let selectedproduct = this.state.single_contact.find(product => product.id == getId);
        this.setState({ writers: selectedproduct });
        console.log(selectedproduct);
    }
    testing() {
        return 88;
    }
    render() {
        /* const parsed = qs.parse(this.props.location.search);
         console.log(this.props.location.search);
         const qq = new URLSearchParams(parsed);
         console.log(queryString.parse(this.props.location.search));*/

        //console.log(this.state.single_contact[0].id);

        return (
            <div style={mainDivStyles}>
                <div style={childDivStyle}><a href={this.state.writers.link}><h1 align="center"><b>{this.state.writers.title.rendered}</b></h1></a></div>
                <div dangerouslySetInnerHTML={{ __html: this.state.writers.content.rendered }} style={childDivStyle}></div>
            </div>


        );

    }



}

export default Singlepost;
