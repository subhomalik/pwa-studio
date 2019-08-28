import React from 'react'
import Blogimage from './Blogimage';

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



const Accuride = ({ contacts1 }) => {
    return (
        <div>
            <center><h1>Blog List</h1></center>
            <ul style={ulStyle}>
                {contacts1.map((contact2) =>
                    <div key={contact2.id}>
                        <li style={liStyles}>

                            <a href={"singlepost.html?id=" + contact2.id}>
                                <Blogimage featured_media={contact2.featured_media} data={contact2.featured_media} />

                                {contact2.title.rendered}

                            </a>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    )
};



export default Accuride