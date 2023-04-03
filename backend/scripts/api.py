import requests


class API:
    _backend_url = ""
    _email = ""
    _password = ""
    _token = ""
    _login_path = "/api/auth/login"

    def set_backend_url(self, url):
        self._backend_url = url

    def save_credentials(self, email, password):
        self._email = email
        self._password = password

    def login(self, email, password):
        requests.post(self._backend_url+self._login_path, data={email: email, password: password})

    def create_crop(self, name, images, details):
        requests.post(self._backend_url, data={name: name, images: images, details: details})
