# Change Prompt
#
# \w : Current path
# \h : Machine name
# \u : User name
# \n : Newline
# ---------------------------

# Without color tags:
# export PS1="\n\u: \w\n=>"
export PS1="\[\e[0;33m\]\n\u:\[\e[m\] \[\e[0;93m\]\w\n\[\e[m\]=> "

# Setting PATH for Python 3.5
# The orginal version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.5/bin:${PATH}"
export PATH

# Set up nvm
export NVM_DIR="/Users/bling/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Aliases
alias mfly="mediafly-create-app"
alias update-mfly="npm un -g @mediafly/create-app && npm i -g @mediafly/create-app"
