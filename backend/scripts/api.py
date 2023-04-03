import requests
import os


class API:
    _backend_url = ""
    _email = ""
    _password = ""
    _token = ""
    _login_path = "/api/auth/login"

    def __init__(self):
        os.environ["NO_PROXY"] = "localhost"

    def set_backend_url(self, url: str):
        self._backend_url = url

    def save_credentials(self, email: str, password: str):
        self._email = email
        self._password = password

    def login(self, email: str, password: str):
        res = requests.post(self._backend_url+self._login_path, headers={"content-type": "application/json"}, json={"email": email, "password": password})
        if res.status_code:
            self._token = res.json()["token"]

    def create_crop(self, name: str, images: list, details: map):
        requests.post(self._backend_url, data={name: name, images: images, details: details})
