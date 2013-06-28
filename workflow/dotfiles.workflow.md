## dotfile

### intro
dotfiles means your settings & profile for bash, etc...

### info
install the necessary apps: bomebrwe, z, nave, etc..
automatic config for ack, vim..
shell environment for .aliases, .bash_profile, .bash_prompt, .bashrc, .exports, functions
# git, gitconfig, gitignore
# .jshintrc, editorconfig,

syntax highlight



# jshintrc
setting for sublime_linter

# csslint

# editorconfig
it helps developers define and maintain consistent coding styles between different editors and IDEs.The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles
https://github.com/sindresorhus/editorconfig-sublime#readme

# hack sublime
Mac OS X

Open Terminal and enter the following:

1. cd /Applications/Sublime\ Text\ 2.app/Contents/MacOS/
2. edit file ->> “vim Sublime\ Text\ 2″
3. change to hex mode ->> “:$!xxd”
4. find and replace ->> “:%s/5BE509C33B020111/5BE509C32B020111/g”

