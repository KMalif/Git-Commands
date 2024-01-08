# Git-Commands Cheat sheet

# Setup
| Command   |Description   |Example   |  
|---|---|---|
| Git Config  | Configure informasi user secara global  | git config --global user.name "[Firstname Lastname]"  |  
| Git Config  | Configure informasi email secara global  | git config --global user.email "[email]"  |  
| Git Config  | Configure informasi user secara global  | git config --global color.ui auto  |  

# Setup & Init
| Command   |Description   |Example   | 
|---|---|---|
| Git init  | Inisialisasi git repository  | git init   |  
| Git Clone  | Mengunduh repository dari remote url  | git clone [url]   |  

# Stage & Snapshot
| Command   |Description   |Example   | 
|---|---|---|
|Git status   | Melihat status file di dalam repository   |git status   |  
| Git add  | Menambahkan file changes ke dalam staging area   |git add. atau git add [nama-file]   |  
| Git reset  | Mengembalikan file dari stagisng area  | git reset [nama-file]   | 
| Git commit  | commit perubahan file dari staging & pemberian pesan perubahan  | git commit -m "[commit-message]"   | 

# Branch & Merge
| Command   |Description   |Example   | 
|---|---|---| 
| git branch  |  Melihat seluruh branch yang ada di dalam repository | git branch  |  
| git branch  | menambah branch baru di dalam repository  | git branch -M nama-branch  |  
| git checkout  | berpindah branch di dalam 1 repository  | git checout nama-branch  |  
| git merge  | menggabungkan branch lain ke dalam current branch  | git merge nama-branch  |  

# Share & Update
| Command   |Description   |Example   | 
|---|---|---| 
| git remote  |  Cek list remote yang sudah ditambahkan ke dalam repository | git remote -v  |  
| git remote add  | menambahkan url git ke dalam repo lokal dan menambahkan alias  | git remote add [alias][url] |  
| git fetch  | melihat semua branch dari remote url | git fetch [alias]  |  
| git merge   | menggabungkan branch di remote url ke dalam current branch lokal  | git merge [nama-branch]  |  
| git pull   | menarik semua perubahan yang ada di remote repository dari branch tertentu  | git pull [alias][nama-branch]  |  



