ROOT_UID="0"
if [ "$UID" -ne "$ROOT_UID" ]; then
	echo "Running non-sudo installation"
	npm -v >/dev/null 2>&1 || { echo >&2 "I require NPM but it's not installed.";exit 1; }
	bower -v >/dev/null 2>&1 || { echo >&2 "I require BOWER but it's not installed. Try 'sudo npm install -g bower'";exit 1;}
	gulp -v >/dev/null 2>&1 || { echo >&2 "I require GULP but it's not installed. Try 'sudo npm install -g gulp'";exit 1;}
else
	npm -v >/dev/null 2>&1 || { echo >&2 "I require NPM but it's not installed.";exit 1; }
	echo 'Checking BOWER...'
	bower -v >/dev/null 2>&1 || { echo 'BOWER not found, installing ...'; sudo npm install -g bower; }
	echo 'Checking GULP...'
	gulp -v >/dev/null 2>&1 || { echo 'GULP not found, installing ...'; sudo npm install -g gulp; }
fi

npm install
bower install
gulp || gulp webserver