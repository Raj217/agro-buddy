# Setup

### .env

_Create a .env(root level) file with the following params:_

    MONGO_URL=[example: mongodb://localhost:27017/agro-buddy]
    API_PORT=[example: 4002]
    TOKEN_KEY=[example: test]
    SALT_ROUNDS=[example:10]
    FORGOT_PASS_FRONTEND_URL=[example:http://localhost:4002/api/auth]
    NODEMAILER_HOST
    NODEMAILER_PORT
    NODEMAILER_AUTH_USER
    NODEMAILER_AUTH_PASS

### Script

**Python must be installed**

Add the dataset at _backend/scripts/crops.xlsx_

```
pnpm run add-crops
```

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
- otp will be sent for verification at the provided email automatically
<br>
</details>

<details>
<summary><b>2. POST - /api/auth/login </b></summary>

<br>
Example:

```
{
  "email": "johndoe@example.com",
  "password": "buar13@iep",
  "isGoogleSignedIn": "false"
}
```

**email**: required | String <br>
**password**: optional | String <br>
**isGoogleSignIn**: required | String <br>
**name**: optional | String <br>
**role**: optional | String <br>

<h2>Logic:</h2>

- if email and password are valid and correct data will be retrieved
- If google sign in
  - Not Required:
    - password
  - Required:
    - name
    - role
- If not google sign in
  - Not Required:
    - name
    - role
  - Required:
    - password
<br>
</details>

<details>
<summary><b>3. POST - /api/auth/generate-otp</b></summary>
<br>
Example:

```
{
  "email": "johndoe@example.com"
}
```

**email**: required | String <br>

<h2>Logic:</h2>

- create an otp with email and sent through mail for mail verification
<br>
</details>

<details>
<summary><b>4. POST - /api/auth/validate-otp</b></summary>
<br>
Example:

```
{
  "email": "johndoe@example.com",
  "otp": "yVNrv7"
}
```

**email**: required | String <br>

<h2>Logic:</h2>

- Validate otp for email verification
<br>
</details>

<details>
<summary><b>5. GET - /api/auth/user </b></summary>
<br>
Example:

```
http://localhost:4002/api/auth/user
```

<h2>Headers:</h2> 'authorization'
<br>

<h2>Logic:</h2>
- returns the data of the user with the associated token
</details>

<details>
<summary><b>6. POST - /api/auth/forgot-password</b></summary>
<br>
Example:

```
{
  "email": "johndoe@example.com"
}
```

**email**: required | String <br>

<br>
<h2>Logic:</h2>
- sends email at the email provided
</details>

<details>
<summary><b>7. POST - /api/auth/forgot-password?token</b></summary>
<br>
Example:

- URL: http://localhost:8080/api/auth/forgot-password?token="123"

```
{
  "email": "johndoe@example.com",
  "newPassword": "testpassword"
}
```

**email**: required | String <br>
**newPassword**: required | String <br>

<br>
<h2>Logic:</h2>
- The url of this api is generated by the API 6.
- If the token is valid and matches with the email, the password changes.
</details>

<details>
<summary><b>8. POST - /api/auth/change-password </b></summary>
<br>
Example:

```
{
  "oldPassword": "oldPassword",
  "newPassword": "newPassword"
}
```

**oldPassword**: required | String <br>
**newPassword**: required | String <br>

<h2>Headers:</h2> 'authorization'
<br>
<h2>Logic:</h2>
- The logged in user can change their password
</details>

# Crop Routes

<details>
<summary><b>1. POST - /api/crop/register</b></summary>
<br>
Example:

```
{
  "name": "rice",
  "nitrogen": 10,
  "phosphorous": 100,
  "potassium": 100,
  "temperature": 19.2,
  "humidity": 19.2,
  "pH": 8.3,
  "rainfall": 20.2
  "images": ["test", "test2"]
}
```

**name**: required | String <br>
**details**: optional | List <br>
**details.nitrogen**: optional | number <br>
**details.phosphorous**: optional | number <br>
**details.potassium**: optional | number <br>
**details.temperature**: optional | number <br>
**details.pH**: optional | number <br>
**details.humidity**: optional | number <br>
**details.rainfall**: optional | number <br>
**images**: optional | [String] <br>
**description**: optional | String <br>

<h2>Logic:</h2>

- if name found all the data will be saved to that else will create and store
- images will be concatenated (unique urls)
- details will be stored as an object and will be concatenated with previous ones.
- if description is already present for the crop it overwrites the description.
<br>
</details>

<details>
<summary><b>2. GET-/api/crop<quries></b></summary>
<br>
Example:

```
http://localhost:4002/api/crop?nitrogen=10&name=rice
```

- Queries
  <br>
  **name**: optional | String <br>
  **nitrogen**: optional | number <br>
  **fromNitrogenLevel**: optional | number <br>
  **toNitrogenLevel**: optional | number <br>
  **phosphorous**: optional | number <br>
  **fromphosphorousLevel**: optional | number <br>
  **tophosphorousLevel**: optional | number <br>
  **potassium**: optional | number <br>
  **fromPotassiumLevel**: optional | number <br>
  **toPotassiumLevel**: optional | number <br>
  **temperature**: optional | number <br>
  **fromTemperatureLevel**: optional | number <br>
  **toTemperatureLevel**: optional | number <br>
  **humidity**: optional | number <br>
  **fromHumidityLevel**: optional | number <br>
  **toHumidityLevel**: optional | number <br>
  **ph**: optional | number <br>
  **fromPHLevel**: optional | number <br>
  **toPHLevel**: optional | number <br>
  **rainfall**: optional | number <br>
  **fromRainfallLevel**: optional | number <br>
  **toRainfallLevel**: optional | number <br>

<br>
<h2>Logic:</h2>
- Get crops grouped preview (gives mean of all of the data grouped by crop name)
- images are also provided for the crops
- If no argument is provided then all the crops are returned
</details>

<details>
<summary><b>3. GET-/api/crop/details<quries></b></summary>
<br>
Example:

```
http://localhost:4002/api/crop/details?nitrogen=10&name=rice
```

- Queries
  <br>
  **name**: optional | String <br>
  **nitrogen**: optional | number <br>
  **fromNitrogenLevel**: optional | number <br>
  **toNitrogenLevel**: optional | number <br>
  **phosphorous**: optional | number <br>
  **fromphosphorousLevel**: optional | number <br>
  **tophosphorousLevel**: optional | number <br>
  **potassium**: optional | number <br>
  **fromPotassiumLevel**: optional | number <br>
  **toPotassiumLevel**: optional | number <br>
  **temperature**: optional | number <br>
  **fromTemperatureLevel**: optional | number <br>
  **toTemperatureLevel**: optional | number <br>
  **humidity**: optional | number <br>
  **fromHumidityLevel**: optional | number <br>
  **toHumidityLevel**: optional | number <br>
  **ph**: optional | number <br>
  **fromPHLevel**: optional | number <br>
  **toPHLevel**: optional | number <br>
  **rainfall**: optional | number <br>
  **fromRainfallLevel**: optional | number <br>
  **toRainfallLevel**: optional | number <br>

<br>
<h2>Logic:</h2>
- Get crops details grouped which satisfy the above conditions
- Images are not provided
</details>

<details>
<summary><b>4. GET-/api/crop/params-range<quries></b></summary>
<br>
Example:

```
http://localhost:4002/api/crop/params-range
```

<br>
<h2>Logic:</h2>
- Get ranges of each params i.e. get min and max of each param
</details>

<details>
<summary><b>5. DELETE - /api/crop/delete </b></summary>
<br>
Example:

```
http://localhost:4002/api/crop/delete?crop=rice
```

- Queries
  <br>
  **id**: optional | String <br>
  **crop**: optional | String <br>

</details>

<details>
<summary><b>6. PATCH - /api/crop/update </b></summary>
<br>
Example:

```
{
  "id": 167834,
  "nitrogen": 10
}
```

NOTE: If name is provided, it is meant to update the images so images must be passed

- Queries
  <br>
  **id**: optional | String <br>
  **name**: optional | String <br>
  **images**: optional | [String] <br>
  **nitrogen**: optional | number <br>
  **phosphorous**: optional | number <br>
  **potassium**: optional | number <br>
  **temperature**: optional | number <br>
  **humidity**: optional | number <br>
  **pH**: optional | number <br>
  **rainfall**: optional | number <br>

</details>
