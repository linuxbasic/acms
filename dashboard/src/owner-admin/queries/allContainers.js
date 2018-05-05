import gql from 'graphql-tag'

export default gql`{
    allContainers {
      containerId
      trackerId
    }
  }`