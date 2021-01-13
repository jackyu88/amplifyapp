/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAgency = /* GraphQL */ `
  mutation CreateAgency(
    $input: CreateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    createAgency(input: $input, condition: $condition) {
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
export const updateAgency = /* GraphQL */ `
  mutation UpdateAgency(
    $input: UpdateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    updateAgency(input: $input, condition: $condition) {
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
export const deleteAgency = /* GraphQL */ `
  mutation DeleteAgency(
    $input: DeleteAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    deleteAgency(input: $input, condition: $condition) {
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
export const createOfficer = /* GraphQL */ `
  mutation CreateOfficer(
    $input: CreateOfficerInput!
    $condition: ModelOfficerConditionInput
  ) {
    createOfficer(input: $input, condition: $condition) {
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
export const updateOfficer = /* GraphQL */ `
  mutation UpdateOfficer(
    $input: UpdateOfficerInput!
    $condition: ModelOfficerConditionInput
  ) {
    updateOfficer(input: $input, condition: $condition) {
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
export const deleteOfficer = /* GraphQL */ `
  mutation DeleteOfficer(
    $input: DeleteOfficerInput!
    $condition: ModelOfficerConditionInput
  ) {
    deleteOfficer(input: $input, condition: $condition) {
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
export const createCustody = /* GraphQL */ `
  mutation CreateCustody(
    $input: CreateCustodyInput!
    $condition: ModelCustodyConditionInput
  ) {
    createCustody(input: $input, condition: $condition) {
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
export const updateCustody = /* GraphQL */ `
  mutation UpdateCustody(
    $input: UpdateCustodyInput!
    $condition: ModelCustodyConditionInput
  ) {
    updateCustody(input: $input, condition: $condition) {
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
export const deleteCustody = /* GraphQL */ `
  mutation DeleteCustody(
    $input: DeleteCustodyInput!
    $condition: ModelCustodyConditionInput
  ) {
    deleteCustody(input: $input, condition: $condition) {
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
