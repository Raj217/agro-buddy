import os
import pandas

class Helper:
    # ============================== Scripts ==============================
    _build_virtual_env = "python -m venv venv"
    proxy = ""
    _did_ask_for_proxy = False

    def build_virtual_env(self):
        if not os.path.exists(os.path.join(os.path.curdir, 'venv')):
            try:
                print("Creating Virtual Environment")
                os.system(self._build_virtual_env)
                print("Virtual environment created successfully")
            except:
                print("Encountered Error. Exiting...")
                exit(0)

    def ask_for_proxy(self):
        if not self._did_ask_for_proxy:
            self._did_ask_for_proxy = True
            self.proxy = input("Enter your proxy")

    def install_package(self, module: str):
        self.ask_for_proxy()
        os.system(f"python -m {f'--proxy {self.proxy}' if (len(self.proxy)>0) else ''} {module}")

    def activate_virtual_env(self):
        os.system(f"source venv/bin/activate")



