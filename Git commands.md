## Start a new repository
git init

## Copy/Clone an existing repository into your directory
git clone <repo url>

## Add untracked file or unstaged changes
git add <file>

## Add all untracked file or unstaged changes
git add .

## Choose which parts of a file to stage
git add -p

## Move file
git mv <old> <new>

## Delete file
git rm <file>

## Forget file
git rm --cached <file>

## Unstage one file
git reset <file>

## Unstage everything
git reset

## Check added
git status

## Make a commit (write message on text editor if not specified)
git commit -m 'message'

## Commit all unstaged changes
git commit -am 'message'

## Create a new branch
git switch -c <name> or git checkout -b <name>

## Switch branch
git switch <name> or git checkout <name>

## List branches
git branch

## List branches by most recently committed to
git branch --sort=-committerdate

## Delete a branch (Capital 'd' to force delete)
git branch -d <name>

## Show diff between a commit and its parent
git show <commit>

## Show diff between two commits
git diff <commit> <commit>

##More found on: https://git-scm.com/cheat-sheet
