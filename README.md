# simple-cli
学习使用 js 简单搭建一个自己的前端脚手架工具，同时了解交互式命令行工具的实现。

[相关记录](https://daief.github.io/2018-08-31/a-simple-cli.html#more)。

# 使用
```bash
$ git clone git@github.com:daief/simple-cli.git

$ cd simple-cli && yarn link

$ cd ~/Desktop && simple-cli init

Project name: test
Description: some description
Created /Users/daief/Desktop/test/.travis.yml
Created /Users/daief/Desktop/test/README.md
Created /Users/daief/Desktop/test/CONTRIBUTING.md
Created /Users/daief/Desktop/test/package.json
Created /Users/daief/Desktop/test/nwb.config.js
Created /Users/daief/Desktop/test/tests/.eslintrc
Created /Users/daief/Desktop/test/tests/App-test.js
Created /Users/daief/Desktop/test/src/App.css
Created /Users/daief/Desktop/test/src/App.js
Created /Users/daief/Desktop/test/src/index.css
Created /Users/daief/Desktop/test/src/index.html
Created /Users/daief/Desktop/test/src/index.js
Created /Users/daief/Desktop/test/src/react.svg
now excuting: cd /Users/daief/Desktop/test && yarn

 √ Generation completed!
```