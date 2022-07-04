# IMPORTANT

Branch is dead? At least the game that this api was going to be built for. Branch as a company is still around and are working on a new game called castaways. although old branch (again the game this api is made for) is still playable but its yk dead.

~~Branch is literally dying. Going downhill fast. I will NOT be pushing updates. I was offered to work on this legit under branch but with current news I don't think this will be happening nor will I work on this repo either. I'm sorry for this update and have a good rest of your day.~~

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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
