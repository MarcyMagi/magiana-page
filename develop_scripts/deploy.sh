#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git --work-tree="dist" add *
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:MarcyMagi/magiana-page.git master:gh-pages

rm -r dist