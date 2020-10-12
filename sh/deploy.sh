#!/bin/bash

# COLORS
COLOR_YELLOW='\033[0;33m'
COLOR_NONE='\033[0m'

# Constants
DIST_DIR="./dist"
TMP_DIR="/tmp/deploy-irushavm.github.io.dist"
DEPLOY_BRANCH="deploy"
SRC_BRANCH="master"

# Helper functions
display_step=1
function display {
  printf "${COLOR_YELLOW}======\nSTEP ${display_step}: ${1}...\n======${COLOR_NONE}\n"
  display_step=$((display_step+1))
}

# ####################
# Script starts here #
# ####################

if [ -d ${TMP_DIR} ] 
then
  display "Removing existing ${TMP_DIR}"
  rm -r ${TMP_DIR}
fi
display "Checkout to ${SRC_BRANCH}" &&
git checkout ${SRC_BRANCH} &&
display "Build app" && 
npm run build &&
display "Copy ${DIST_DIR} to ${TMP_DIR}" && 
cp -r ${DIST_DIR} ${TMP_DIR} &&
git checkout ${DEPLOY_BRANCH} && 
display "Replace ${DIST_DIR} in ${DEPLOY_BRANCH} branch with files from ${TMP_DIR}" && 
rm -r ${DIST_DIR} && 
cp -r ${TMP_DIR} ${DIST_DIR} && 
display "Push a new commit to ${DEPLOY_BRANCH}" &&
git add ${DIST_DIR} && 
git commit -m 'New deployment' && 
git push -f origin ${DEPLOY_BRANCH} &&
display "Deploy Successful" &&
display "Checkout to ${SRC_BRANCH}" &&
git checkout ${SRC_BRANCH} &&
exit 0