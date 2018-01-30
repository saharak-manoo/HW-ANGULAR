# This script is designed to work with Drone IO for Continuous Integration
#
# Drone secret requirements
# HEROKU_API_KEY - Your Heroku API key
# HEROKU_LOGIN - Your Heroku login, probably your email address
# HEROKU_GIT_URL - Your Heroku git url (e.g. - https://git.heroku.com/{your-app-name}.git)
#
# Add a drone secret with the Drone CLI
# drone secret add --image=<image> <org/repo> <secret> <value>

#!/bin/bash

set -e

echo "Installing Heroku Toolbelt..."
wget -q https://cli-assets.heroku.com/branches/stable/heroku-linux-386.tar.gz -O heroku.tar.gz
mkdir -p /usr/local/lib
tar -xzf heroku.tar.gz -C /usr/local/lib
rm heroku.tar.gz
/usr/local/lib/heroku/install

echo "Adding heroku as git remote"
git remote add heroku ${HEROKU_GIT_URL} || echo "Failed to add remote"

# This is how we authenticate with Heroku without having to run `heroku login`
echo "Writing .netrc file"
cat >~/.netrc <<EOF
machine api.heroku.com
  login ${HEROKU_LOGIN}
  password ${HEROKU_API_KEY}
machine git.heroku.com
  login ${HEROKU_LOGIN}
  password ${HEROKU_API_KEY}
EOF

echo "Deploying site to Heroku"
git checkout develop
git push -f heroku develop:master
git remote remove heroku

exit 0
