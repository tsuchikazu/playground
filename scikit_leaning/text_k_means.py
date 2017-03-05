from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from sklearn.decomposition import TruncatedSVD
from sklearn.preprocessing import Normalizer
import MeCab

def split_text(text):
    tagger = MeCab.Tagger()
    # なぜか1度parseしないとエラーになる
    tagger.parse(text)
    node = tagger.parseToNode(text)

    words = []
    while node:
        pos = node.feature.split(",")[0]
        words.append(node.surface)
        node = node.next
    return " ".join(words)

_items = [
    'とてもおもしろくて最高に笑った！途中で笑いすぎた',
    '笑った面白いかった！',
    '最高に笑った！',
    '面白い最高だった',

    'おもしろくなかった金返せ',
    'つまらん金の無駄',
    '最悪な映画金を返してつまらん',
    'おもしろくないつまらない金の無駄です金を返して。',
]
print(_items)
_items = list(map(split_text, _items))
print(_items)

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

clusters_num = 5
km = KMeans(
    n_clusters=clusters_num,
    random_state=10
)
km.fit(X)

labels = km.labels_
result = {}
for label in range(clusters_num):
    result[label] = []
for label, head in zip(labels, _header):
    result[label].append(head)

for label in range(clusters_num):
    print(label)
    print("\n".join(result[label]))
