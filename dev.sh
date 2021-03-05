sep="#############################################################"

echo "$sep"
echo "kill open ports 3001 and 4000"

FRONT_PID=$(sudo lsof -i :4000)
BACK_PID=$(sudo lsof -i :3001)

if [[ -n "$FRONT_PID" ]]; then
    echo "$sep"
    echo "{$FRONT_PID} \n"
    echo -n "enter PID for port 4000"
    read pid_1
    kill "$pid_1"
fi

if [[ -n "$BACK_PID" ]]; then
    echo "$sep"
    echo "{$BACK_PID}"
    echo -n "enter PID for port 3001"
    read pid_2
    kill "$pid_2"
fi

echo "$sep"
echo "Start"
cd ./server && yarn run start:dev & cd ./client && yarn run start
