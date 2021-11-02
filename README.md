# api.gg

api.gg is an API designed to work with the [Branch.GG](https://branch.gg/) api and allows for ease of use when making requests and posts!

## Installation

To implement into your code simply:

```javascript
const branch = require("./userConstructor.js")
```

## Usage

```javascript
const branch = require("./userConstructor.js")
const token = "YOUR-TOKEN-HERE";
var client = new branch.User(token); 

(async () => {
    await client.fetchData(); // when data is fetched it'll go to client's var .userData
    console.log(client.userData);
})()
```

## Warning
Usage of this program breaks [Branch TOS](https://www.branch.gg/privacy)
Following with that production and work on this repo might be delayed with current circumstances. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
