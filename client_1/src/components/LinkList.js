import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


class LinkList extends Component {
    render () {
        console.log(this.props);
        return (
            <div>
                LinkList is my friend
            </div>
        );
    }
}

const query = gql`
    query {
        allLinks {
            id
            url
            description
        }
    }
`;

export default graphql(query)(LinkList);