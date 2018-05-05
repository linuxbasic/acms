import gql from 'graphql-tag'

export default gql`
mutation registerClient($clientId: String!, $name:String!){
  registerClient(name: $name, clientId: $clientId){
    ok,
    client{
      clientId,
      name,
      clientPin
    }
  }
}`