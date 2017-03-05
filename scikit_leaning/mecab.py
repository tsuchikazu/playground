import MeCab
tagger = MeCab.Tagger ("-Ochasen")
text = "python3が大好きです"
print(tagger.parse(text))

node = tagger.parseToNode(text)
while node:
    print(node.surface)
    print(node.surface + '\t' + node.feature)
    # printは文ではなくなったのでカッコで囲う必要がある
    node = node.next
