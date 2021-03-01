# COLORS
G='\033[0;32m' # green
N='\033[0m' # none

# PUSH ON GIT
./git.sh

echo -n "${G}deploy${N}"
git push heroku main
