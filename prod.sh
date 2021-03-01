sep="#############################################################"
# PUSH ON GIT
./git.sh

echo "$sep"
echo "deploy"
git push heroku main
