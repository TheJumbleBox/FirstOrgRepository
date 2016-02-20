@extends('')


@section('')


@stop('')

<!--
Before we get started, lets touch base on a few basic notes on git. Git is a "distributed" version control system, this means it is not a central VCS.
A central VCS can only be accessed if you have a solid connection to that network. If something happens to that network you fucked.
"Commits" are versions of your project that you and your team can work on together.

By the way, here are a fwe handy dandy terminal commands that will surly help along the road to gitopia!
`mkdir` (Makes a directory.)
`touch` (Makes an empty file.)
`rm -R` (Removes whatever you type and everything inside it.)
`curl` http://www.blahblah.com (This will download all the files that are downloadable from this site.)
`cat` or `less` (They both will allow you to peak inside a file or directory and list their contents, `less` will list less then `cat`.)
`ls -a` (This will list everything, or all, of what is inside the typed file or directory, if you have already `cd` to it of course.)
`sudo` (This will allow you to make a root command.)
`nano` (This will open programs, you could `cd` to a program but what you are really doing is simply making a blank file named as the program you were trying to switch to.)
`pwd` (This stands for "print working directory", this will simply print the name of whatever directory you are currently in.)
`ls` or `ls -l` (The `ls` stands or list, this will list the content of the file you are in. `ls -l` stands for list long, so list everything with its permissions).
`clear` (This will clear your terminal page, really just moving your page down, giving you a fresh start, simply scroll up to see what you had before.)

________That should be enough to get started, onward to gitopia!________

First we need to make sure git knows who you are on the machine you are working on.

`git config --list` (This will list out the credentials, if there are any, that git has stored about you.)
`git config --global user.name "First LastName"` (You need establish with git who you are, encase you are someone else or if git has no info on you.)
`git config --global user.email "emailAdress@blah.com` (Make sure to enter an email as well.) Note: Make sure the email you use is the email that is assocaited
with your github acccount!


From the home dir.
`git init` (Followed by the repository name.)
`cd` (Followed by the repository name.)
`nano` (You can use nano or whatever other terminal text editor you like to create a file, after the text editor, in our case `nano` type the name of the file you wish to create.)
(Fill out the file and hit cmd + o to save the file, then cmd + x to exit the file.)
`git add` (Once you have exited the file and wish to commit it to the repository simply use the `git add` command. The reason git is set up like this simple, encase you have something you do not wish to share and at the same time out of version control. So you would type `git add` followed by the file name you wish to commit.)
`git commit` (This will commit everything that was added to your git folder to the  repository, allowing the rest of your team to access the version you have just committed.)
(This will open a file up. This file will contain all your #comments about the version you are committing and is opened via nano. It will also contain who is making the commit, what branch we are on, and a brief description of what was changed. In the "changes to be committed" there will be all the changes. It is recommended to be as short and meaningful as possible when adding comments to commits.)
(Once you have entered a comment, all messages should be towards the top, press enter + enter. You will be taken back to the repository and greeted with a success message, stating that the commit has been committed to the repository. This success message will also contain a list of your information, being the committer, allowing those who may have questions about your commit to contact you.)
`git config --global user.name` (This command will allow you to enter your user info. You will simply type the `git config --global user.name` command followed by your name in a set of "".)
`git config --global user.email` (Just as before, you will simply type the `git config --global user.email` command followed by your email in a set of "".)
`nano` (Type nano, or the terminal editor of your choice, followed by a file name you have created in the git repository. This will open that file, allowing you to "edit" that file.)
(Once you have finished editing that file, saved it, exited it, you may now commit it, if you like.)
(Committing as much as possible, without being to over zealous, is a very good habit to get into.)
`git commit -a -m` (Just as before, you must commit the changes that have been made. The -a flag stands for "all", This is telling git to commit all of the changes that have been made, that it can find, another words if you made any changes in a file that has been already added and you also added a new file this time to the repository without adding it tensional, it will only commit what has been added on purpose and "ignore" that which has not been "added" for commit. The -m flag stands for "message" You may dd a message within a pair of "". This message is what you would normally place inside the commit, the hash tag area that has the changes information.)
(Once you finished typing out your comment within the commits "", hit enter, you will be greeted with a brief success message.)



___Now its time to learn about the "Staging Area"____
How to commit separate files


`git status` (This command is just meant to view files that have been modified and not "added" or not committed yet, rather because of a change in added files or they are simply new and not added or committed. Once you have added a newly created file, and then type `git status` it will show files that need to be committed in one section (known as the staging area), and files that need to be added and committed in another.)
(Once you have committed all of your "staged" files, you will receive a success message for each individual file added this way.)
(Lets say for instance you use `nano` on a file, and make some changes to that file, the `git status` will take effect and let you know you need to re added and commit these changes, even if these files were already added.)
(A good thing to take into consideration is committing each each file with its own `-m` flag, encase the changes have nothing to do with one another and you would like to leave notes as to what is different in each file.)
(If you wish to commit everything at once, without leaving an individual message per file or perhaps one for all of them you may simply just use the `git commit` with a `-a` flag.)

___Now its time to learn how to view out past commits___


`git log` (This will show you the history of your commits. Starting with the most recent at the top and the oldest to the bottom.)
(You will notice that within this log there is some pretty general information about each commit. The log string of letters and numbers is kind of like the "address" or check out key to that commit / version of your project, this is typically refereed to as the commits "hash". There is also some other basic  intuitive information such as who committed it and when, followed by a list of the files within that commit.)
`git checkout` (Now let say you want to view a previous versions code. This is were the "hash" comes into play. With the `git checkout` command you actually need to just use the first five to six characters of the commit you wish to view. You will be greeted with a warning message. This warning message is just letting you know you should NOT write within this file, or else straaannge things could occour OOOooOOOOoOOOOOO!! To make sure something like that dose not happen, try sticking with a command like `cat` or `less`. Something that will allow you to just "peak" inside".)
`git checkout master' (Once you have checked out a file and you are ready to go back to the "master" commit, simply use the `git checkout master` command. We are simply checking out or switching to the most recent commit, the most recent commit will be the "safest" to write in.)
`git diff` (The `git diff` command will "get" the difference between two commits / versions. To use this command simply write the `git diff` command followed by a hash identifier with a space and the other identifier of the other commit you wish to get the difference of. With the oldest first. Once you run the command it may look a little confusing. Just like with a Json viewer you can download a plugin that will generate a more "friendly" result to view. In the mean time, the +++ means it was added and the --- means it was present.)


___Now its time to talk about "Branching", and why its important___

Think of branches are "different" alternate realities for your repository. Allowing the development of different courses of action in your project, running
parallel with one another.
Now lets talk about how easy it is to create and switch between branches.
The "Master branch" is the default branch in any new git repository. You can find out what branch you are on by typing `git status`.
The master branch is always the branch that is deployed / pushed to production. You can push a different branch if you choose, or choose to not even have a "master"
branch at all, but the most common way, and the propose of using Github is to communicate, is to have a master branch.
Its best to not work on the master branch if you are going to be making alot of changes. That being said, lets learn how to make a new branch!

`git branch` (`git branch` is the command to create a new branch, followed by the branch name you wish to create.)
(Note: It is wise to make your branch names as relevant to the work that will be going on inside them as possible, just as your commit messages.)

`git checkout` (The command `git checkout` is the same command we use to "switch" to different branch. When you use the `git checkout` command to switch to a
different branch, git will know to switch to whats called "head commit" for that branch, the head commit is the ~latest~ commit for that branch.)
(Once again in order to find out what branch you are on `git status` command, it will spit out the branch name.)
(If you would like to switch back to the master branch, you would just treat it as if it were the last command and its name was/is "master", `git checkout master`.)
(Since we are in a branch other than the master branch, all changes and commits you make in this branch will NOT effect the other branches files, especially the master branch.)
(You can add a `-b`, followed by the desired branch name, if it dos'nt exist yet that is, to the end of the `git checkout` command to make a branch and switch
to it all in one command!)
(Note: When you create a new branch, it starts off as a copy of whatever branch you are currently using in git, so it would be wise to switch to your master
branch first, before making a new branch. This way each branch you create will start from the same "copy" as your master branch, unless you want otherwise, this
is why you could call it "branching" off.)

(You can run the `git branch` command followed by nothing to get a list of the current branches in your repository, it will indicate which branch you are
currently on with a "*".)
(The `git branch` command followed by a `-D` and the branch name, will delete a branch, just keep in mind you can not delete a branch you are currently in. Once
you do delete the branch, you will receive a conversion message back from git, confirming its deletion.)


___Now its time to learn about "Merging"___

(All's merging is copying the commits form one branch and adding them into another one, most likely the master branch.)
(You can continue working on the branch you merged from.)
`git merge` (As long as you don't have any files that may conflict with one another, the `git merge` command, followed by
the branch name you want to merge from will pull all of its commits into the branch you are currently residing in.)
(This "merges" the branch histories of both branches. Once you do type the `git merge` command, you will be given a
success message.)
(Merge conflicts will arses and need to be resolved if both files have the same file edited differently.)
(Most of the time git will resolve these issues automatically if the changes are different lines of code.)
(If you have a "README" file in two branchs, and that read me file has 2 lines of code. If you make a change to line
one in one branch and make a change to line two in the other branch, yes they are the same file yet the lines of code
were being edited on different lines. So git will accept both changes thus making the change on line one from the first
branch and the change on line two from the other branch.)
(Now if you make a change in both branches, on the same line and they are different changes, git will first five you an
error stating that there was a conflict error that could not be resolved, and you must fix this manually. The best way to address
this change will be to `nano` open the file. Git will show the changes from both branches with what is called "conflict
markers". The conflict markers show both commits from each branch, with the equal signs separating both commits.)
(The >>> are around the area of the problems, just remove witch one you want to pair with all the code outside of the >>>>.)
(The one under HEAD is the latest commit of the to. The other will have its branch name displayed. You can make all of your changes on
this screen directly, git will accept any changes you apply.)
(Once you have finished with your editing, you must tell git it has been taken care of. In order to finish up this process
you just need to `git add` followed by the file name, then `git commit`. From here, git will recognize that you are
resolving a merge conflict, and prompt you to add a message before committing.)


___Now its time to learn about "Remote Repositories"___

(A remote repository is a repository on someone else's computer. Lets say a girl named Ashley has been working on her
own personal project. She has been adding and making commits to this repository, keeping track of her project.)
(Ashley wants to bring up another developer, Jordan, to help her get the project done faster, having an extra pair of eyes on the code.)
(In order for Ashley and Jordan to collaborate, she must give Jordan a copy, known as a "Clone", of her repository, that's on her computer.)
(They can merge history of copies of the same repository. This is known as "pushing" or "pulling". Ashley would "Push"
her changes of her local repository history to the remote repository and Jordan would then "Pull" Ashleys history to his
local repository history.)
(If this was not a personal project of Ashley's, the remote repository would be called a "Central Repository", this
central repository would act as the official version of the code and it would be stationed on a company server in a data warehouse.)
(The entire "remote" team would be constantly pulling and pushing there work, ensuring there code is in sync with the rest of the project team.)
(Every time someone joins this team, they need to get a cloned copy of the repository from the central server, allowing
them to start the eb and flow of Push and Pull.)
`git clone` (You can use the `git clone` command, followed by the remote repository network information(a network address),
followed by a name you would like to give it, in your local repository. NOTE: it is wise to add a _git at the end of the name, this way you know its the git
directory and not the project it self that is saved on your computer.)
(Once you run the command above, you will be given a success message. At this point you can `cd` to your copy of the
repository, and use the `ls` command or the `git log` command to view the project files you pulled. Git will set up
the repository you pulled from to be the remote "origin" for your cloned version.)
`git remote` (You may the run the `git remote` command to get a list of all the origins the repository you are in is
cloned from.)
`remote add` (In order to set up a remote repository on the origin machine you must use the `remote add` command, followed
by the name you wish to give that repository, followed by the network address.)

___Now its time to learn about "Push and Pull"___

(In order for you to push your branch to the remote repository, you must simply take the following steps.
First thing is to commit your code, and make sure you added it encase anything is new or you had
to resolve any mistakes thus making a new file.)
`git push` (The next step is to use the `git push` command, followed by the remote repository name, then the branch name
you wish to push.)
(At this point you no longer are required to specify the entire network address each time you wish to push.)
 (However if someone on the other side pushes their work, you will not be able to make a push until you pull
their push.)
`git pull` (In order for you pull their push, you must use the `git pull` command, followed by the remote repository
name, followed by the branch name.)
(Once you have seen their push and made any changes to the push you were originally going to push you may push so they
may pull. This is the way that git makes sure no one gets confused and or errors arise along the way.)
(Now that all of this is be taken into consideration, you now know that a master branch is the repository you are
cloning from, from the central server.)
(If you wish to push from another branch your on computer to the repository on your company that can push pull to the
remote central server repository, just `git push` followed by the name of the repository on your computer that can do
so.)





___git flow___

Note: Tommy from Team Treehouse said that the Team Treehouse team reefers to their master branch as their "canonical" branch.

Starting your day: Lets say you are working on a preexisting project. If you are going to add a new feature, refactor something substantially big, or just
redesign a large feature, you will create what is most commonly known as a "feature branch". You will work on the entire new feature, or change,  in a
separate branch and keep your feature isolated from the live master branch until it is finished - working - ready to go in the production version of the site,
(the master branch, it is live after all).



There is an extension you can add to git that allows you to apply the idea, above this sentence, constantly to each and every each and every task for your
project, its called "Git-Flow". To install Git-Flow go to github and type in "gitflow". Scroll down to installing git-flow and click on installation
Instructions, choose the system that you want to install git-flow on. Go to terminal and use `brew install git-flow` from the ~ directory for mac.
Git flow will simplify your need to manually do things by providing a few basic "sub commands". Sub commands are commands made for programs you install to
your terminal, such as git flow. Sub commands for git would be git init, git commit, etc. Below is a list of the basic sub commands for git flow.


`git integration` (The first thing you will need to do is use the `git integration` command.)

`git flow` (Running the `git flow init` command will let us set up how git flow will work for us, by asking our preferred work flow. It will first prompt you
to select what branch we want to make our production branch, out production branch will most likely be the master or canonical branch, the live branch. If
however you do want to change this, simply change the name to the branch in the [] that the `git flow init` prompts you with.)
(You will then be prompted to choose the "release" branch. The release branch is the branch you use before they go live on the site. Think of this as the branch
that holds the "features", so the feature branch. When you ran `git integration` you already created this branch. It is called "git integration". If you wish to
change this branch to something else, like a feature branch name, you may change what is between the []. Next you will be prompted to fill out the branch
"Prefixes". Branch prefixes in git flow are like index numbers for different kinds of branches. The four default branches it comes with are feature branches,
release branches, hot fix branches and support branches. We will talk about hotfix branches in just a moment. If you wish to modify this, by adding more prefix
branches or changing the ones that are already saved by default, you may read the docs on the github page for git flow. Otherwise just leave it as is for all
four, by pressing enter each time, for features, releases, hot fixes and support branches. At this point you will be prompted for adding the version tag prefix.
The version tag prefix ability is a way to tag commits by a name. So anytime we make a commit to the master branch, git flow will tag it with a special message.
so we can find it later on, the message being like an a commits "index" number, for now you can just leave it blank and now you are done with the initialisation.)
(You may start using the git flow sub commands, such as the following.)

`git flow` (You may now select what branch you wish to "checkout". You may do this by typing the `git flow` command followed by the prefix branch type, followed
followed by `start`, followed by the name of the branch. You will then be greeted with a success message stating what has been done.)
(Once you are ready to commit your code to the integration branch, you may simply type the `git flow` command, followed by the prefix type, followed by
`finish` followed by the branch name. It will merge your current branch to the integration branch, delete it and switch us to the integration branch, to
allow us to continue working on something else.)

(We mentioned before that we would talk about hotfix branches. That time has come, first things first. To create a hot fix branch simply run `git flow` followed
by `hotfix`, followed by `start` followed by the name of the branch. Just as the feature branch greeted you with a message, creating a hotfix branch will greet
you with a very similar message. The only difference is that this branch is based off directly the master branch, not the integration branch. The hotfix branch
is based off of master because the master branch so we can make "quick" fixes to the live branch, hence the name. At this point you just make your fixes and
just as with the feature branch you type `git flow` followed by `hotfix`, which is the prefix type, followded by `finished`, followed by then the branch name.
You will also be given the option of leaving a "tag" name. A tag name is like leaving a message for a commit, only it recommends yo give it a basic name so you
can find it later on. Just as git flow deleted the feature branch upon merging, it will delete the hotfix branch as well.)

Note: Visiting the github project page for git flow will give you more ways you can use git flow and its sub commands.






___GitHub day!___


Knowing your way around
(By going to www.github.com/explore you can browser through all of the latest trends and whats hot on github.
You can also access the explore page by click on your profile picture in the top right hand corner and selecting the explore keyword. Think of this as just
the main new section on twitter but for github.
With the search bar, you may search for projects via language, username, and of course name of the project.
Once you have entered in some desired material via the search bar or chose something off the main screen, you will see a brief introduction about the project
at the top of the screen. You will also see the number of commits, branches, releases and how many people have contributed to the project, right under the project
introduction. By scrolling towards the bottom of the project page you will be able to view the read.me file, and several other files describing the project.
Above the introduction are several tabs each taking you to the page they are named after. The first tab is where the code files lye for the project. The issues
tab is a list of reported issues that need to be handled. Once you click on the issues tab you will see a tab on this page indicating all of the open and closed
issues. Back on the main project page, the next tab, right of the issues tab, you wll see the pull requests tab. A pull request represents a change; such as
deleting, adding, or modifying code and or entire files. On this page you will also see a tab for open and one for closed. Pull requests are generally used
resolving issues. With pull requests you may also communicate with one another, thanks to the github GUI. If you click on the closed tab, in the pull request page,
you will see tabs that leads to the conversation on the topic, the commits involved and the files changed as well.)

Knowing your way around part two
(On the main project page, you may click the "watch" button to stay up to date with changes. When you watch a project on github it is like watching an item on
ebay. Instead of being updated on bids, you are updated regarding any changes made to the project; such as commits, newly created issues, and or pull requests.
You may "star" a project; staring a project lets the project owner know you like there project. Its like "liking" a facebook post. You can go to your stars page
to view all of the projects that you have stared. A fork repository is similar to a branch; it is used when yo do not have access to a project. Forking allows
you to experiment with the files of a project without actually effecting the project. Forks are mostly used to propose changes to the current project; or forks
are used to take someones code as a starting point for your own person project.
Just like in twitter; you can go to a users profile and follow them, receiving updates from that user, just as you will for projects you are watching.)

Creating a repository
(To create a new repository on github, simply click the + symbol next to your profile picture, in the top right hand corner. Once you have
filled out the general information, select public, unless you upgrade to to a paid membership, it must be public. When filling out the form to create your
repository, you can check the small box to indicate you wish to create a README.me file. If a README.me file is already present in the project you wish to
use this repository for, don't select the box, other wise select the box and one will be created for you. If you select the box to create a README.me file and
you already have one an error will be thrown. At this point just select the green "create repository" button and bam, your done.)

Lets now talk about pushing your projects to github
(.)


 -->

<!--
___NOTE___
Lets say I have a project I work on vagrant. I don't want to move the entire project out of Code/projectone into the repository because that would mess with
the homestead.yaml file. So instead we are making a directory to hold a clone of the project in, ditto command, like so ditto ~/Code/projectone/ ~/projectone_clone/
will clone the copy from and to. Then move that cloned project into your .git folder that will let you push that cloned copy to the remote github repository.
Whenever you make changes, just make the changes and clone another copy to a directory, and push the changes with that directory.
That way you wont mess with the homestead.yaml file while at the same time having a copy of the project on github!
Note: Yes you could just ditto a copy of your project into your .git folder but then all of the files would be all over the place, this way they are all stored
in one file, its alot cleaner. Here is a list of the commands to use.

mkdir project_clone
ditto ~/Code/projectname ~/project_clone
mv ~/project_clone ~/projectname_git
then push to origin via git flow OR add then commit to origin. origin is the remote repository.
-->