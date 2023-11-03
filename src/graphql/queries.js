/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHike = /* GraphQL */ `
  query GetHike($id: ID!) {
    getHike(id: $id) {
      id
      name
      difficulty
      location
      lat
      long
      length
      time
      coverImg
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listHikes = /* GraphQL */ `
  query ListHikes(
    $filter: ModelHikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        difficulty
        location
        lat
        long
        length
        time
        coverImg
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncHikes = /* GraphQL */ `
  query SyncHikes(
    $filter: ModelHikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        difficulty
        location
        lat
        long
        length
        time
        coverImg
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
