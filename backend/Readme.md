# Setup

### .env

_Create a .env(root level) file with the following params:_

    MONGO_URL=[example: mongodb://localhost:27017/agro-buddy]
    API_PORT=[example: 4002]
    TOKEN_KEY=[example: test]
    SALT_ROUNDS=[example:10]

## Routes

# Crop Routes

**1. _POST - /api/crop/register_**

Example:

```
{
  "name": "rice",
  "details": {
    "nitrogen": 10,
    "phosphorus": 100,
    "potassium": 100,
    "temperature": 19.2,
    "pH": 8.3,
    "rainfall": 20.2
  },
  "images": ["test", "test2"]
}
```


**name**: required | String <br>
**details**: optional | List <br>
**details.nitrogen**: optional | number <br>
**details.phosphorus**: optional | number <br>
**details.potassium**: optional | number <br>
**details.temperature**: optional | number <br>
**details.pH**: optional | number <br>
**details.rainfall**: optional | number <br>
**images**: optional | [String] <br>


<h2>Logic:</h2>

- if name found all the data will be saved to that else will create and store
- images will be concatenated (unique urls)
- details will be stored as an object and will be concatenated with previous ones.
