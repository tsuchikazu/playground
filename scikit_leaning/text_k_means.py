from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from sklearn.decomposition import TruncatedSVD
from sklearn.preprocessing import Normalizer

_items = [
    'とても おもしろくて 最高 に よかった！ 途中 で 笑い すぎた',
    '笑った 面白い かった！',
    '最高に 笑った ！',
    '面白い 最高 だった',

    'おもしろく なかった 金 返せ',
    'つまらん 金 の 無駄',
    '最悪 な 映画 金 を 返して つまらん',
    'おもしろくない つまらない 金 の 無駄 です 金 を返して。',
]

vectorizer = TfidfVectorizer(
    use_idf=True
)
X = vectorizer.fit_transform(_items)
print(X)


lsa = TruncatedSVD(8)
X = lsa.fit_transform(X)
print(X)
X = Normalizer(copy=False).fit_transform(X)
print(X)

km = KMeans(
    n_clusters=2,
    random_state=10
)
km.fit(X)

print(km.labels_)

