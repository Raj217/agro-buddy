# Setup

### .env

_Create a .env(root level) file with the following params:_

    MONGO_URL=[example: mongodb://localhost:27017/agro-buddy]
    API_PORT=[example: 4002]
    TOKEN_KEY=[example: test]
    SALT_ROUNDS=[example:10]

## Routes

# Auth Routes

<details>
<summary> <b> 1. POST - /api/auth/sign-up </b> </summary>

<br>
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
<br>
</details>
<details>
<summary><b>2. POST - /api/auth/login </b></summary>

<br>
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
- otp will be sent for verification if email is not verified
<br>
</details>

<details>
<summary><b>3. GET - /api/auth/user/:id </b></summary>
<br>
Example:

```
http://localhost:4002/api/auth/user/:id
```

<h2>Headers:</h2> 'authorization'
<br>
</details>
<details>
<summary><b>4. POST - /api/auth/generate-otp</b></summary>
<br>
Example:

```
{
  "email": "johndoe@example.com"
}
```

**email**: required | String <br>

<h2>Logic:</h2>

- create an otp with email and sent through mail
<br>
</details>
<details>
<summary><b>5. POST - /api/auth/forget-password</b></summary>
<br>
Example:

```
{
  "email": "johndoe@example.com",
  "password": "buar13@iep"
}
```

**email**: required | String <br>

<h2>Logic:</h2>
<br>
</details>
-

# Crop Routes

<detials>
<summary><b>1. POST - /api/crop/register</b></summary>
<br>
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
  <br></details>
