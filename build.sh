sep="#############################################################"

echo "$sep"
echo "build client"
npm --prefix ./client/ run build

echo "$sep"
echo "build client"
npm --prefix ./server/ run build

echo "$sep"
echo "cleaning"
rm -rf ./server/client/

echo "$sep"
 echo "replace client with new files"
 mv ./client/build ./server/client

