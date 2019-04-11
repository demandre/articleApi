# Article API

## Overview
The API allows users to retrieve all of the article of the application in micro service through a REST architecture.

### [POST] Create article
Allows the creation of a single article.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → article/create

#### Parameters :
```javascript
{
  'title': String, // Required
  'content ': String, // Required
  'cover_img_url': String // Optional
}
```

#### Response :
```javascript
  {
    _id: Object_ID,
    title: String,
    content: String,
    cover_img_url: String,
    date: String,
    comment: Array
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