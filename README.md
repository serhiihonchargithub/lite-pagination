# Pagination Module
<nav class="pagination_preview__nav">
    <ul style="
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
    ">
        <li title="This is prev page">Prev</li>
        <li title="This is page First">1</li>
        <li title="This is 10 pages ago">...</li>
        <li title="This is page 2">2</li>
        <li title="This is page 3, and this page active" class="active">3</li>
        <li title="This is page 4">4</li>
        <li title="This is 10 pages letter">...</li>
        <li title="This is page Last">25</li>
        <li title="This is next page">Next</li>
    </ul>
</nav>
<style>
.pagination_preview__nav ul li {
    border-radius: 3px;
    border: solid 1px #dedede;
    padding: 0 10px;
}
.pagination_preview__nav ul li.active {
    border-radius: 3px;
    border: solid 1px #dedede;
    padding: 0 10px;
    background-color: #dedede;
    color: #fff;
}
</style>
This module is a package for handling pagination in Node.js applications.

## Installation

You can install the module using git or npm:

*GIT*
```bash
git clone https://github.com/serhiihonchargithub/pagination.git
```

*NPM*
```bash
npm install --save path/to/pagination
```

## Usage
```javascript
// Importing the module
let pagination = require('path/to/pagination');
```
## Example Usage
```javascript
// Using the pagination function
let result = pagination.pagination(count, offset, limit);

// Example output
console.log(result);
```

## Return
```json
"pagination": {
    "count": {
      "posts": 282,
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
