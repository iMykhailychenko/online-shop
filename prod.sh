# COLORS
G='\033[0;32m' # green
N='\033[0m'    # none

# INPUT
echo -n "${G}Commit message: ${N}"
read COMMIT

echo "${G}\n\nSTART BACK-END UPLOAD #######${N}"
# LINT
echo "${G}LINTING #######${N}"
yarn run lint

# GIT
echo "${G}\n\nPUSH BACK-END ON GIT #######${N}"
git add .

if [[ -z "$COMMIT" ]]; then
        git commit -m 'general commit'
elif [[ -n "$COMMIT" ]]; then
        git commit -m "$COMMIT"
fi

git push
echo "${G}DONE WITH GIT #######${N}"


# PUSH ON SERVER
#echo "${G}\n\nUPLOAD ON SERVER #######${N}"
#git push heroku master
#echo "${G}FINISH #######${N}"