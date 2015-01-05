#!/bin/bash

# Pre-commit hook to combine and compress the webbooker code

#DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_LIB="../js/lib"
FILES_LIB=(
	"bootstrap.min.js"
	"knockout.min.js"
	"store.js"
	"path.js"
	"jquery.nouislider.min.js"
)

BASE_APP="../js/app"
FILES_APP=(
	"app.js"
	"api.js"
	"catalog.js"
	"cart.js"
	"home.js"
	"activity.js"
	"checkout.js"
	"dashboard.js"
	"itinerary.js"
	"analytics.js"
	"init.js"
)

COMBINED="$BASE_APP/webbooker.js"
COMPRESSED="$BASE_APP/webbooker.min.js"

# Erase old
> $COMBINED
> $COMPRESSED

for file in ${FILES_LIB[@]}; do
	if [ "$BASE_LIB/$file" != "$COMBINED" ];then
	    cat "$BASE_LIB/$file" >> $COMBINED;
	fi
done
for file in ${FILES_APP[@]}; do
	if [ "$BASE_APP/$file" != "$COMBINED" ];then
	    cat "$BASE_APP/$file" >> $COMBINED;
	fi
done

# check if  UGLIFYJS gives us an error
if uglifyjs -o $COMPRESSED $COMBINED 2>&1 | grep 'Error' ; 
then
    exit 1
else
    echo "oh beans..."
fi

exit 0
