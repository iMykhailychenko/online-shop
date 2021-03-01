echo -n "Compile build version:"

echo -n "yarn run build client"
cd ./client/ && yarn run build && cd ../

echo -n "remove old client"
cd ./server && rm -rf client

echo -n "yarn run build server"
yarn run build && cd ../

echo -n "replace client with new files"
mv ./client/build ./server/client

