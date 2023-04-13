import os

print("Initializing")

proxy = input("Enter your proxy: ")
os.system(f"python -m pip {f'--proxy {proxy} ' if len(proxy) > 0 else ''}install -r scripts/cluster/requirements.txt")