import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login( $email: String!, $password: String!){
    login(email: $email, password: $password){
        token
        user{
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
        token
        user{
            _id
            username
        }
    }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($author: [String!], $description: String, $title: String!, $bookId:String!, $image: String, $link: String){
    saveBook(author: $author, description: $description, title: $title, bookId: $bookId, image: $image, link: $link){
       savedBooks{
        id
        authors
        title
        description
        image
        link
        }
        _id
        username
        email
        bookCount
    }
}
`;

// export const REMOVE_BOOK = gql`
// mutation removeBook($bookId: String!){
//     removeBook(bookId: $bookId){
//         id
//     }
// }
// `;

export const REMOVE_BOOK =gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            bookCount
            savedBooks {
                id
                authors
                description
                title
                image
                
            }
        }
    }
`;