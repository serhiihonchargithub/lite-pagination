# Light Pagination Module

This Node.js module is utilized for crafting a pagination API. For example, if you need pagination on the frontend similar to what is shown in the image.

<img src="./pagination.jpg" alt="img">

To accomplish this, you will require an API. This script is very straightforward. Simply integrate this script into your project following the instructions.

This module takes three arguments:

<ul>
    <li>count - This is the number of posts returned from your database or another external source.</li>
    <li>offset - It represents how many posts need to be skipped, for instance, if you are not on the first page.</li>
    <li>limit - This is the limit of posts displayed per page.</li>
</ul>

## Installation

You can install the module using git or npm:

*GIT*
```bash
git clone https://github.com/serhiihonchargithub/lite-pagination.git
```

*NPM*
```bash
npm install --save lite-pagination@1.0.0
```

## Usage
```javascript
// Importing the module
let pagination = require('path/to/lite-pagination');
```
## Example Usage

For example, you have an address like **domain/posts?offset=50&limit=5** in your API. The script behind it sends a request to the database, and the database returns the count of posts as 285. Your limit is set to 5, and you are currently on page 50.

```javascript
// Using the pagination function
let result = pagination.pagination(285, 50, 5);

// Example output
console.log(result);
```

## Return
```json
"pagination" : {
    "count": {
      "posts": 285,
      "pages": 11
    },
    "control": {
      "prev": {
        "number": 10,
        "offset": 45
      },
      "current": {
        "number": 11,
        "offset": 50
      },
      "next": {
        "number": 12,
        "offset": 55
      },
      "last": {
        "number": 57,
        "offset": 280
      }
    },
    "nav": [
      {
        "number": 1,
        "offset": 0,
        "current": false
      },
      {
        "number": "...",
        "offset": 40,
        "current": false
      },
      {
        "number": 10,
        "offset": 45,
        "current": false
      },
      {
        "number": 11,
        "offset": 50,
        "current": true
      },
      {
        "number": 12,
        "offset": 55,
        "current": false
      },
      null,
      {
        "number": "...",
        "offset": 60,
        "current": false
      },
      {
        "number": 57,
        "offset": 280,
        "current": false
      }
    ]
  }
```
