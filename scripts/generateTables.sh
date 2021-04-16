# Only runs if file contians
if [ $# -eq 1 ]
then
    # If it is a directory, then run
    if [ -d "$1" ]; then
        # Check node, npm, cheerio and marked are installed
        if [ ! command -v node &> /dev/null  || ! command -v npm &> /dev/null ]
        then
            echo "node not installed."
            exit
        fi
        
        # Make sure cheerio and marked is installed, if not then it is installed
        dev=$(npm list | grep cheerio || npm install cheerio --no-shrinkwrap)
        dev=$(npm list | grep marked || npm install marked --no-shrinkwrap)
        
        
        echo "Generating tables..."
        
        SECONDS=0
        
        # Iterate through all files and folders
        find $1 -name '*.md' -type f -exec ./generateTables.sh {} \;
        
        duration=$SECONDS
        echo "Tables generated in $(($duration / 60)) minutes and $(($duration % 60)) seconds."
        exit
    fi
    
    if [ ! -f "$1" ]; then
        echo "File '$1' doesn't exist."
        exit
    fi
    exists=$(grep '<equation-table>' $1 | wc -l)
    
    if [ "$exists" -gt 0 ]    # ← see 'man bash' for valid conditional statements.
    then
        node generateTable.js $1 $1
    fi
    
else
    # No directory so run in current directory
    ./generateTables.sh ./
fi

