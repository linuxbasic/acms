import gql from 'graphql-tag'

export default gql`{
    allClients {
      clientId,
      name,
      clientPin
    }
  }`