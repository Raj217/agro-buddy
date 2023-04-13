import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
from sklearn.impute import SimpleImputer


class Analyser:
    _kmeans_kwards = {
        "init": "random",
        "n_init": 10,
        "max_iter": 300
    }

    def __init__(self):
        self._labels = []
        self._base_index = 0
        self._groups = {}
        self._name = None
        self._data = None
        self._num_encoder = SimpleImputer(strategy="median")    # To fill the missing data to analyse
        self._scaler = StandardScaler()


    def preprocess(self):
        self._data = pd.DataFrame(self._num_encoder.fit_transform(self._data), columns=self._data.columns)

    def analyse(self):
        self.preprocess()
        score = 0
        upper_lim = min(5, self._data.shape[0])+1
        for k in range(2, upper_lim):
            kmeans = KMeans(n_clusters=k, **self._kmeans_kwards)
            kmeans.fit(self._data)
            if 2 <= k < self._data.shape[0] and (k == 2 or score < silhouette_score(self._data, kmeans.labels_)):
                score = silhouette_score(self._data, kmeans.labels_)
                self._labels = kmeans.labels_

    def map_data_with_labels(self):
        groups = {}
        _labels = {}
        if len(self._labels) > 0:
            for index, label in enumerate(self._labels):
                if groups.__contains__(label):
                    groups[label].append(self._data.iloc[index, :])
                    _labels[label].append(index)
                else:
                    groups[label] = [self._data.iloc[index, :]]
                    _labels[label] = [index]

            for group in groups.keys():
                _df = pd.DataFrame(columns=self._data.columns)
                for val in groups[group]:
                    _df = pd.concat([_df, pd.DataFrame([val.values], columns=self._data.columns)])
                _df = _df.median(axis=0, numeric_only=True)
                _df['name'] = self._name
                _df['labels'] = np.array(_labels[group])+self._base_index
                groups[group] = _df

            self._groups[self._name] = groups
        else:
            n_rows = self._data.shape[0]
            self._data = self._data.median(axis=0, numeric_only=True)
            self._data['labels'] = [i for i in range(self._base_index, self._base_index+n_rows)]
            self._data['name'] = self._name
            self._groups[self._name] = {0: self._data}

    def set_crop(self, data, name, base_index):
        self._data = data.drop(['name'], axis=1)
        self._base_index = base_index
        self._name = name
        self._labels = []

    @property
    def groups(self):
        return self._groups

