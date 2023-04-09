import requests
import os
import pandas as pd
import json
from helper import Helper


class API:
    _backend_url = ""
    _email = ""
    _password = ""
    _token = ""
    _login_path = "/api/auth/login"
    _details_df = pd.DataFrame()
    _images_df = pd.DataFrame()
    _create_crop_path = "/api/crop/"

    def __init__(self):
        os.environ["NO_PROXY"] = "localhost"

    def set_backend_url(self, url: str):
        self._backend_url = url

    def save_credentials(self, email: str, password: str):
        self._email = email
        self._password = password

    def login(self, email: str, password: str):
        res = requests.post(self._backend_url + self._login_path, headers={"content-type": "application/json"},
                            json={"email": email, "password": password})
        if 200 <= res.status_code < 300:
            self._token = res.json()["token"]
        else:
            print(res.json())
            exit(0)

    def create_crop(self, name: str, images: list, details: pd.Series):
        res = requests.post(
            self._backend_url+self._create_crop_path,
            headers={"content-type": "application/json", "authorization": self._token},
            json=self._to_dict({"name": name, "images": images, "details": details})
        )
        if res.status_code < 200 or res.status_code >= 300:
            print(res.json())
            exit(0)

    def read_data(self):
        self._details_df = pd.read_excel("scripts/crops.xlsx", sheet_name=0)
        self._images_df = pd.read_excel("scripts/crops.xlsx", sheet_name=1)

    @staticmethod
    def _to_dict(data: dict) -> dict:
        out = {"name": data["name"], "images": data['images'], "details": {}}

        if data["details"].notnull().any():
            if not pd.isna(data["details"]["Nitrogen"]):
                out["nitrogen"] = data["details"]["Nitrogen"]
            if not pd.isna(data["details"]["Phosphorus"]):
                out["phosphorus"] = data["details"]["Phosphorus"]
            if not pd.isna(data["details"]["Potassium"]):
                out["potassium"] = data["details"]["Potassium"]
            if not pd.isna(data["details"]["Temperature"]):
                out["temperature"] = data["details"]["Temperature"]
            if not pd.isna(data["details"]["pH"]):
                out["pH"] = data["details"]["pH"]
            if not pd.isna(data["details"]["Rainfall"]):
                out["rainfall"] = data["details"]["Rainfall"]
            if not pd.isna(data["details"]["Humidity"]):
                out["humidity"] = data["details"]["Humidity"]

        return out

    def add_to_backend(self):
        image_index = 0
        details_index = 0
        iteration = 0
        total = len(self._details_df)
        while details_index < len(self._details_df):
            crop = self._details_df.iloc[details_index]
            current_crop = crop.Crop
            images = []
            while image_index < len(self._images_df) and self._images_df.iloc[image_index, 0] == current_crop:
                if not pd.isna(self._images_df.iloc[image_index, 1]):
                    images.append(self._images_df.iloc[image_index, 1])
                image_index += 1

            Helper.print_progress_bar(iteration=iteration, total=total)
            self.create_crop(crop.Crop, images, crop.iloc[1:-1])
            iteration += 1
            details_index += 1
            while details_index < len(self._details_df) and self._details_df.iloc[details_index, 0] == current_crop:
                Helper.print_progress_bar(iteration=iteration, total=total)
                iteration += 1
                crop = self._details_df.iloc[details_index]
                self.create_crop(crop.Crop, [], crop.iloc[1:-1])
                details_index += 1
        Helper.print_progress_bar(iteration=iteration, total=total, print_end="\n")
