sep="#############################################################"

./build.sh
./git.sh

echo "$sep"
echo "deploy"
git push heroku main
