import gql from 'graphql-tag'

export default gql`
mutation registerContainer($containerId: String!, $trackerId: String!) {
    registerContainer(containerId: $containerId, trackerId: $trackerId) {
      ok
      container {
        trackerId
        containerId
      }
    }
  }`