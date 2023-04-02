# Setup

### .env

_Create a .env(root level) file with the following params:_

    MONGO_URL=[example: mongodb://localhost:27017/agro-buddy]
    API_PORT=[example: 4002]
    TOKEN_KEY=[example: test]
    SALT_ROUNDS=[example:10]

## Routes

# Auth Routes

**1. _POST - /api/auth/sign-up_**

Example:

```
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@example.com",
  "password": "buar13@iep",
  "role": "USER"
}
```

**firstName**: required | String <br>
**lastName**: required | String <br>
**email**: required | String <br>
**password**: required | String <br>
**role**: required | String <br>

<h2>Logic:</h2>

- if email and password are valid then data will be saved
- password will be hashed before being saved
- otp will be sent for verification ot the provided email automatically

**2. _POST - /api/auth/login_**

Example:

```
{
  "email": "johndoe@example.com",
  "password": "buar13@iep"
}
```

**email**: required | String <br>
**password**: required | String <br>

<h2>Logic:</h2>

- if email and password are valid and correct data will be retrieved
- otp will be sent for verification

**3. _GET - /api/auth/user_**

Example:

```
{
  "email": "johndoe@example.com",
  "role": "USER"
}
```

**email**: required | String <br>
**role**: required | String <br>

<h2>Logic:</h2>

- if email and password are valid and exists data will be retrieved

**4. _POST - /api/auth/generate-otp_**

Example:

```
{
  "email": "johndoe@example.com"
}
```

**email**: required | String <br>

<h2>Logic:</h2>

- create an otp with email and sent through mail

**5. _POST - /api/auth/forget-password_**

Example:

```
{
  "email": "johndoe@example.com",
  "password": "buar13@iep"
}
```

**email**: required | String <br>

<h2>Logic:</h2>

- 

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
