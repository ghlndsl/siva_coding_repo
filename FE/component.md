
感觉不错
component create 开发一个插件
或者直接项目中使用install
写index.js
利用require来包含相应的library，然后再build.

https://github.com/component/component

component package manager for building a better web

npm install -g component

Features::
write modular commonjs components
write components that include their own styles, images, scripts, or any combo
no registry publishing or account required, uses github repositories
extensible sub-commands via component-YOURCOMMAND git-style
component skeleton creation command
installs dependencies from the command-line or ./component.json
avoid name squatting through github's naming conventions
build your components with --standalone to share them with non-component(1) users
discovery of useful packages is simple with a robust search
view documentation from the command line
simple private registry set up (all you need is a file server)
very fast installs (50 components in ~4.5s)
very fast search (~300ms)

compnent search, component install, etc
component install component/tip


# create a compoent
name: popover
description: Popover UI component
does this component have js? yes
does this component have css? yes
does this component have html? yes
     create : popover
     create : popover/index.js
     create : popover/template.html
     create : popover/popover.css
     create : popover/Makefile
     create : popover/Readme.md
     create : popover/.gitignore
     create : popover/component.json

# create a datepicker
component create datepicker


