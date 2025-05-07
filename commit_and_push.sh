#!/bin/bash
# Usage: ./commit_and_push.sh "Your commit message here"
# This script adds all files, commits with the provided message, and pushes to the current branch.

if [ -z "$1" ]; then
  echo "Error: Please provide a commit message."
  echo "Usage: $0 \"Your commit message here\""
  exit 1
fi

git add ./*
git commit -m "$1"
git push 