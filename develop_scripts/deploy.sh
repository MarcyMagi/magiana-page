#!/usr/bin/env sh

# abort on errors
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git remote add origin https://github.com/MarcyMagi/magiana-page.git
git push origin master:gh-pages --force

cd -

rm -rf dist

