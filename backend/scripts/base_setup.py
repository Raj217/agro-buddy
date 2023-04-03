import os


class BaseSetup:
    # ============================== Scripts ==============================
    _build_virtual_env = "python -m venv venv"

    def build_virtual_env(self):
        try:
            print("Creating Virtual Environment")
            os.system(self._build_virtual_env)
            print("Virtual environment created successfully")
        except:
            print("Encountered Error. Exiting...")
            exit(0)


