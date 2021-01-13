/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAgency = /* GraphQL */ `
  subscription OnCreateAgency {
    onCreateAgency {
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
export const onUpdateAgency = /* GraphQL */ `
  subscription OnUpdateAgency {
    onUpdateAgency {
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
export const onDeleteAgency = /* GraphQL */ `
  subscription OnDeleteAgency {
    onDeleteAgency {
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
export const onCreateOfficer = /* GraphQL */ `
  subscription OnCreateOfficer {
    onCreateOfficer {
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
export const onUpdateOfficer = /* GraphQL */ `
  subscription OnUpdateOfficer {
    onUpdateOfficer {
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
export const onDeleteOfficer = /* GraphQL */ `
  subscription OnDeleteOfficer {
    onDeleteOfficer {
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
export const onCreateCustody = /* GraphQL */ `
  subscription OnCreateCustody {
    onCreateCustody {
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
export const onUpdateCustody = /* GraphQL */ `
  subscription OnUpdateCustody {
    onUpdateCustody {
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
export const onDeleteCustody = /* GraphQL */ `
  subscription OnDeleteCustody {
    onDeleteCustody {
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
