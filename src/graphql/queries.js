/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncAgencies = /* GraphQL */ `
  query SyncAgencies(
    $filter: ModelAgencyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAgencies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        abbreviation
        emailDomain
        type
        media {
          type
          name
          url
          createdAt
        }
        officers {
          items {
            id
            username
            firstName
            lastName
            badgeNumber
            deviceToken
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          nextToken
          startedAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAgency = /* GraphQL */ `
  query GetAgency($id: ID!) {
    getAgency(id: $id) {
      id
      name
      abbreviation
      emailDomain
      type
      media {
        type
        name
        url
        createdAt
      }
      officers {
        items {
          id
          agency {
            id
            name
            abbreviation
            emailDomain
            type
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          username
          firstName
          lastName
          badgeNumber
          deviceToken
          custodies {
            nextToken
            startedAt
          }
          responses {
            id
            type
            createdAt
          }
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const listAgencys = /* GraphQL */ `
  query ListAgencys(
    $filter: ModelAgencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgencys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        abbreviation
        emailDomain
        type
        media {
          type
          name
          url
          createdAt
        }
        officers {
          items {
            id
            username
            firstName
            lastName
            badgeNumber
            deviceToken
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          nextToken
          startedAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOfficers = /* GraphQL */ `
  query SyncOfficers(
    $filter: ModelOfficerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOfficers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        agency {
          id
          name
          abbreviation
          emailDomain
          type
          media {
            type
            name
            url
            createdAt
          }
          officers {
            nextToken
            startedAt
          }
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        username
        firstName
        lastName
        badgeNumber
        deviceToken
        custodies {
          items {
            id
            age
            gender
            height
            weight
            initialCooperationLevel
            currentAgencyId
            currentOfficerId
            status
            active
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          nextToken
          startedAt
        }
        responses {
          id
          type
          createdAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOfficer = /* GraphQL */ `
  query GetOfficer($id: ID!) {
    getOfficer(id: $id) {
      id
      agency {
        id
        name
        abbreviation
        emailDomain
        type
        media {
          type
          name
          url
          createdAt
        }
        officers {
          items {
            id
            username
            firstName
            lastName
            badgeNumber
            deviceToken
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          nextToken
          startedAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      username
      firstName
      lastName
      badgeNumber
      deviceToken
      custodies {
        items {
          id
          age
          gender
          height
          weight
          initialCooperationLevel
          currentAgencyId
          currentOfficerId
          officer {
            id
            username
            firstName
            lastName
            badgeNumber
            deviceToken
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          status
          active
          media {
            type
            name
            url
            createdAt
          }
          states {
            priority
            type
            title
            message
            instructions
            iconName
            createdAt
          }
          events {
            type
            createdAt
          }
          sensors {
            make
            model
            deviceId
            signalStrength
            batteryLevel
            currentHeartRate
            state
            createdAt
          }
          locations {
            type
            description
            latitude
            longitude
            createdAt
          }
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      responses {
        id
        type
        createdAt
      }
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const listOfficers = /* GraphQL */ `
  query ListOfficers(
    $filter: ModelOfficerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOfficers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        agency {
          id
          name
          abbreviation
          emailDomain
          type
          media {
            type
            name
            url
            createdAt
          }
          officers {
            nextToken
            startedAt
          }
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        username
        firstName
        lastName
        badgeNumber
        deviceToken
        custodies {
          items {
            id
            age
            gender
            height
            weight
            initialCooperationLevel
            currentAgencyId
            currentOfficerId
            status
            active
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          nextToken
          startedAt
        }
        responses {
          id
          type
          createdAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustodies = /* GraphQL */ `
  query SyncCustodies(
    $filter: ModelCustodyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustodies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        age
        gender
        height
        weight
        initialCooperationLevel
        currentAgencyId
        currentOfficerId
        officer {
          id
          agency {
            id
            name
            abbreviation
            emailDomain
            type
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          username
          firstName
          lastName
          badgeNumber
          deviceToken
          custodies {
            nextToken
            startedAt
          }
          responses {
            id
            type
            createdAt
          }
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        status
        active
        media {
          type
          name
          url
          createdAt
        }
        states {
          priority
          type
          title
          message
          instructions
          iconName
          createdAt
        }
        events {
          type
          notifications {
            type
            createdAt
          }
          createdAt
        }
        sensors {
          make
          model
          deviceId
          signalStrength
          batteryLevel
          currentHeartRate
          state
          createdAt
        }
        locations {
          type
          description
          latitude
          longitude
          createdAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCustody = /* GraphQL */ `
  query GetCustody($id: ID!) {
    getCustody(id: $id) {
      id
      age
      gender
      height
      weight
      initialCooperationLevel
      currentAgencyId
      currentOfficerId
      officer {
        id
        agency {
          id
          name
          abbreviation
          emailDomain
          type
          media {
            type
            name
            url
            createdAt
          }
          officers {
            nextToken
            startedAt
          }
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        username
        firstName
        lastName
        badgeNumber
        deviceToken
        custodies {
          items {
            id
            age
            gender
            height
            weight
            initialCooperationLevel
            currentAgencyId
            currentOfficerId
            status
            active
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          nextToken
          startedAt
        }
        responses {
          id
          type
          createdAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      status
      active
      media {
        type
        name
        url
        createdAt
      }
      states {
        priority
        type
        title
        message
        instructions
        iconName
        createdAt
      }
      events {
        type
        notifications {
          type
          responses {
            id
            type
            createdAt
          }
          createdAt
        }
        createdAt
      }
      sensors {
        make
        model
        deviceId
        signalStrength
        batteryLevel
        currentHeartRate
        state
        createdAt
      }
      locations {
        type
        description
        latitude
        longitude
        createdAt
      }
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const listCustodys = /* GraphQL */ `
  query ListCustodys(
    $filter: ModelCustodyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustodys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        age
        gender
        height
        weight
        initialCooperationLevel
        currentAgencyId
        currentOfficerId
        officer {
          id
          agency {
            id
            name
            abbreviation
            emailDomain
            type
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          username
          firstName
          lastName
          badgeNumber
          deviceToken
          custodies {
            nextToken
            startedAt
          }
          responses {
            id
            type
            createdAt
          }
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        status
        active
        media {
          type
          name
          url
          createdAt
        }
        states {
          priority
          type
          title
          message
          instructions
          iconName
          createdAt
        }
        events {
          type
          notifications {
            type
            createdAt
          }
          createdAt
        }
        sensors {
          make
          model
          deviceId
          signalStrength
          batteryLevel
          currentHeartRate
          state
          createdAt
        }
        locations {
          type
          description
          latitude
          longitude
          createdAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
