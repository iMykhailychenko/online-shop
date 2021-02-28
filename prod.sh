# COLORS
G='\033[0;32m' # green
N='\033[0m' # none

# COMPILE PROD
echo -n "${G}Compile build version:${N}"

echo -n "${G}yarn run build client${N}"
cd ./client/ && yarn run build && cd ../

echo -n "${G}remove old client${N}"
cd ./server && rm -rf client

echo -n "${G}yarn run build server${N}"
yarn run build && cd ../

echo -n "${G}replace client with new files${N}"
mv ./client/build ./server/client


# PUSH ON GIT
./git.sh


# yarn --cwd ./server run start
