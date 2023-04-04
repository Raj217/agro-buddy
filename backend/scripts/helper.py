import os
import pandas
from sys import platform


class Helper:
    # ============================== Scripts ==============================
    _build_virtual_env = " -m venv venv"
    proxy = ""
    _did_ask_for_proxy = False

    def build_virtual_env(self):
        if not os.path.exists(os.path.join(os.path.curdir, 'venv')):
            try:
                print("Creating Virtual Environment")
                os.system(("python" if platform.startswith("win") else "python3") + self._build_virtual_env)
                print("Virtual environment created successfully")
            except:
                print("Encountered Error. Exiting...")
                exit(0)

    def ask_for_proxy(self):
        if not self._did_ask_for_proxy:
            self._did_ask_for_proxy = True
            self.proxy = input("Enter your proxy: ")

    def install_requirements(self):
        self.ask_for_proxy()
        os.system(f"python -m pip --proxy ${self.proxy} install -r requirements.txt")

    @staticmethod
    def activate_virtual_env():
        try:
            os.system("cd venv/Scripts")
            os.system("activate")
            print("Activated Virtual Environment")
        except:
            print("Couldn't activate virtual environment. Exiting...")
            exit(0)

    @staticmethod
    # Print iterations progress
    def print_progress_bar(iteration, total, prefix='', suffix='', decimals=1, length=100, fill='█', print_end="\r"):
        """
        Call in a loop to create terminal progress bar
        @params:
            iteration   - Required  : current iteration (Int)
            total       - Required  : total iterations (Int)
            prefix      - Optional  : prefix string (Str)
            suffix      - Optional  : suffix string (Str)
            decimals    - Optional  : positive number of decimals in percent complete (Int)
            length      - Optional  : character length of bar (Int)
            fill        - Optional  : bar fill character (Str)
            printEnd    - Optional  : end character (e.g. "\r", "\r\n") (Str)
        """
        percent = ("{0:." + str(decimals) + "f}").format(100 * (iteration / float(total)))
        filledLength = int(length * iteration // total)
        bar = fill * filledLength + '-' * (length - filledLength)
        print(f'\r{prefix} |{bar}| {percent}% {suffix}', end=print_end)
        if iteration == total:
            print()


