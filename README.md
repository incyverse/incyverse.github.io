# incyverse.github.io

GitHub 블로그를 만들기 위해서는 GitHub에 repository 생성해야 하며, repository name은 username.github.io 형식으로 작성한다.

Get started by creating a new file or uploading an existing file. We recommend every repository include a README, 
LICENSE, and .gitignore

...or create a new repository on the command line
```shell
$ git init --initial-branch=main
$ git remote add origin git@github.com:incyverse/incyverse.github.io.git
$ git pull origin main
$ echo "# incyverse.github.io" >> README.md
$ git add README.md
$ git commit -m "initial commit"
$ git branch -M main
$ git push -u origin main
```

...or push an existing repository from the command line
```shell
$ git remote add origin git@github.com:incyverse/incyverse.github.io.git
$ git branch -M main
$ git push -u origin main
```

...or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
