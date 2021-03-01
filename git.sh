sep="#############################################################\n"

echo "$sep"
echo -n "Commit message:"
read COMMIT

# LINT
echo "$sep"
echo "LINTING"
npm --prefix ./client/ run lint
npm --prefix ./server/ run lint

# GIT
echo "$sep"
echo "PUSH ON GIT"
git add .

if [[ -z "$COMMIT" ]]; then
        git commit -m 'general commit'
elif [[ -n "$COMMIT" ]]; then
        git commit -m "$COMMIT"
fi

git push

echo "$sep"
echo "DONE WITH GIT"


