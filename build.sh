echo -n "Compile build version:\n"

echo -n "build client"
npm --prefix ./client/ run build

echo -n "build client"
npm --prefix ./server/ run build

# echo -n "replace client with new files"
# mv ./client/build ./server/client

