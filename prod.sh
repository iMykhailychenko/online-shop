sep="#############################################################"

rm -rf ./server/client/
rm -rf ./client/build/

./git.sh

echo "$sep"
echo "deploy"
git push heroku main
