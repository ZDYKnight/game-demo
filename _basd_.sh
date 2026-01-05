

# 1. initital the git
git init

# 2. add the respots  name 
git remote add  origin https://github.com/ZDYKnight/bulkRNA-tut.git

# 3. add the all  in  this repo
git add .

# 4. commit to  this change 
git commit -m "Initial commit"

# 5. then finially 
    git branch -M main 
    git push -u origin main


    git pull --rebase origin main 
    git push origin main



# create the new branch
git checkout -b branch-v1
git push origin my-branch


git add . 
git commit -m "更新代码" 
git push origin tree-v1



$ git push origin tree-v1
To https://github.com/user/bulkRNA.git
 ! [rejected]        tree-v1 -> tree-v1 (non-fast-forward)
error: failed to push some refs to 'https://github.com/user/bulkRNA.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.



# 1. 确认在 tree-v1 分支
git checkout tree-v1

# 2. 查看当前状态，确认有哪些文件改动
git status

# 3. 把所有改动加入暂存区
git add .

# 4. 提交改动（修改提交信息为你想要的）
git commit -m "更新代码或描述改动"

# 5. 推送到远程 GitHub 的 tree-v1 分支
git push origin tree-v1
