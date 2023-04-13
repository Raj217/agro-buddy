import sys
import pandas as pd
from sklearn.metrics import silhouette_score
from sklearn.impute import SimpleImputer
from sklearn.cluster import KMeans
import numpy as np
from analyse import Analyser


df = pd.DataFrame(eval(sys.argv[1]))

df.drop(['_id', 'createdAt', 'updatedAt', '__v'], inplace=True, axis=1)

analyser = Analyser()
crops = dict(tuple(df.groupby('name')))
index = 0
for crop in crops.keys():
    analyser.set_crop(crops[crop], crop, index)
    index += len(crops[crop])
    analyser.analyse()
    analyser.map_data_with_labels()

final_df = pd.DataFrame(columns=list(df.columns)+['labels'])

for crop in analyser.groups.keys():
    for part in analyser.groups[crop].keys():
        data = pd.DataFrame(analyser.groups[crop][part])
        final_df = pd.concat([final_df, data.T])

final_df = final_df.astype(srt).T

json_data = []
for i in range(df.shape[1]):
    json_data.append(final_df.iloc[:, i].to_json())

print(fr"{json_data}")