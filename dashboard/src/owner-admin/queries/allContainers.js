import gql from 'graphql-tag'

export default gql`{
    allContainers {
      containerId
      lat
      lon
    }
  }`