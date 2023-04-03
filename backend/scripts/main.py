from base_setup import BaseSetup
from api import API

base_setup = BaseSetup()
api = API()

try:
    import requests
except ModuleNotFoundError:
    print("requests module not found. Downloading...")
    base_setup.install_package('requests')


base_setup.build_virtual_env()

backend_url = input("Please enter the backend url: ")
api.set_backend_url(backend_url)

email = input("Please enter your email: ")
password = input("Please enter your password: ")
api.login(email, password)
