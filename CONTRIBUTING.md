
# Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process. We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project. 
Thank you for helping out and remember, NO CONTRIBUTION IS TOO SMALL !


# Submitting Contribution 

Below you will find all the necessary guides, workflow and process need to review and merge your changes

# Step 1 : Find an Issue

-  Take a look at the Existing Issues or create your own Issues!
-  Wait for the Issue to be assigned to you after which you can start working on it.
-  Note : Every change in this project should/must have an associated issue.


# Step 2 : Fork the Repo.

- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile. Keep a reference to the original project in upstream remote.

  ```
  git clone https://github.com/<your-username>/<repo-name>
  ```  
  
  ```
  cd <repo-name> 
  ```
  
  ```
  git remote add upstream https://github.com/<upstream-owner>/<repo-name> 
  ```
  
- If you already have the repo forked, update your repo before working!!

  ```
  git remote update
  ```
  
  ```
  git checkout <branch-name> git rebase
  upstream/<branch-name
  ```

# Step 3 : Branch 

- Create a new branch. Use its name to identify the issue your addressing.
- REMEMBER TO USE A DETAILED BRANCH NAME.
 
  ```
  git checkout -b branch_name
  ```
 
# Step 4 : Commit your Changes

- To commit give a descriptive message for the convenience of reviewer by:

  ```  
  git status
  ```
  ```
  git add .
  ```
  ```
  git commit -m "your commit message"
  ```

# Step 5 : Work Remotely
 
- Now you are ready to your work to the remote repository.
- When your work is ready and complies with the project conventions, upload your changes to your fork. To push your work to your remote repository

  ```
  git push -u origin branch_name
  ```

#  Step 6 : Pull Request 

- Go to your repository in browser and click on compare and pull requests. 
Then add a title and description to your pull request that explains your contribution.
