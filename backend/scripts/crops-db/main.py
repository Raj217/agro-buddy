from helper import Helper

print("Initializing")
helper = Helper()

helper.install_requirements()

from api import API
api = API()


backend_url = input("Please enter the backend url: ")
api.set_backend_url(backend_url)

email = input("Please enter your email: ")
password = input("Please enter your password: ")
api.login(email, password)
print("Logged in")

print("Adding data")
api.read_data()
api.add_to_backend()
print("Added data successfully")
