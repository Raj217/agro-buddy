from base_setup import BaseSetup
from api import API

base_setup = BaseSetup()
api = API()

base_setup.build_virtual_env()

backend_url = input("Please enter the backend url: ")
api.set_backend_url(backend_url)

email = input("Please enter your email: ")
password = input("Please enter your password: ")
api.login(email, password)
