#!/bin/bash

find . -name .git -type d -execdir sh -c '
    REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "No remote found")
    LOCAL_DIR=$(pwd)
    
    echo "\033[34mRemote Repository:\033[0m \033[32m$REMOTE_URL\033[0m"
    echo "\033[34mLocal Directory:\033[0m \033[32m$LOCAL_DIR\033[0m"
    git status
    printf "\n" 

    
' \;
