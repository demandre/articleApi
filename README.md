# API Users

## Overview
The API allows users to retrieve all of the users of the application in micro service through a REST architecture. This API will be mainly used for registed Accounts.

It will also create own users to recover data to the platform but is in no way related to the users collected via the crawling of profiles on Social Networks.

### [POST] Create user
Allows the creation of a single user.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → user/create

#### Parameters :
```javascript
{
  'name': String, // Required
  'age': Number, // Optional
  'sexe': String // Optional
}
```

#### Response :
```javascript
  {
    _id: Object_ID,
    name: String,
    age: String,
    sexe: String
  }
```

### Requirements
* node 10
* npm
* yarn
* git
* mongodb (please configure config.js for link mongodb with your localhost)

### Install
```yarn install```

### Build
```yarn build```

### Start (prod mode)
``` yarn start```

### Start (dev mode)
``` yarn dev```

### Launch tests
```yarn test```