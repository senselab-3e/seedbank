#!/bin/bash
server=$(pm2 jlist | jq -Rr 'fromjson? | .[] | select(.name == "server") | .pm2_env.status')
status=${server:-"none"}
if [ $status = "online" ]; then
	echo "Process is running." >/dev/null 2>&1 # can redirect this to console or log file as needed
elif [ $status = "none" ]; then
	echo "No processes running." >/dev/null 2>&1
	npm run start
else
	echo "Process is not running." >/dev/null 2>&1
	pm2 stop server
	npm run start
fi
