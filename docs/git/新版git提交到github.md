---
title: 新版git提交到github
date: 2022-07-13 15:35:01
tags:
categories: git
---

### …or create a new repository on the command line



```
echo "# rain-ui" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:zhengzhuang96/rain-ui.git
git push -u origin main
```

### …or push an existing repository from the command line



```
git remote add origin git@github.com:zhengzhuang96/rain-ui.git
git branch -M main
git push -u origin main
```

