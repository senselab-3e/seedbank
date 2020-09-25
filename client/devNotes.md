Remember, you can not define setState() inside render() function. Why??? Because setState() function changes the state of the application and causing a change in the state called the render() function again. So if you write something like this then calling the function stack will go for infinity and application gets the crash.

You can define some variables, perform some operation inside render() function, but never use the setState function. In general cases, We are logging out some variable’s output in the render() method. It is the function that calls in mounting lifecycle methods.

componentDidMount() method is the perfect place, where we can call the setState() method to change the state of our application and render() the updated data loaded JSX. For example, we are going to fetch any data from an API then API call should be placed in this lifecycle method, and then we get the response, we can call the setState() method and render the element with updated data.

Fonts were installed via https://github.com/KyleAMathews/typefaces/tree/master/packages

componentWillMount
componentWillReceiveProps
componentWillUpdate

AS i suspected: These lifecycle methods have often been misunderstood and subtly misused; furthermore, we anticipate that their potential misuse may be more problematic with async rendering. Because of this, we will be adding an “UNSAFE\_” prefix to these lifecycles in an upcoming release. (Here, “unsafe” refers not to security but instead conveys that code using these lifecycles will be more likely to have bugs in future versions of React, especially once async rendering is enabled.)

Unfortunately p5 won't work with isomorphic react apps due to window and documentrequirements.

Compiled successfully!

You can now view client in the browser.

Local: http://localhost:3000/
On Your Network: http://10.0.2.15:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.

^C
vagrant [client]> npm run dev
npm ERR! missing script: dev

npm ERR! A complete log of this run can be found in:
npm ERR! /home/vagrant/.npm/\_logs/2020-02-06T00_39_27_771Z-debug.log
vagrant [client]> cd ../
vagrant [seedbank]> cd anarchive
vagrant [anarchive]> npm run dev

> anarchive@1.0.0 dev /vagrant/seedbank-org/seedbank/anarchive
> NODE_ENV=development HTTP_PORT=3001 concurrently "npm run dev-server" "npm run client"

[0][0] > anarchive@1.0.0 dev-server /vagrant/seedbank-org/seedbank/anarchive
[0] > nodemon server.js
[0][1]
[1] > anarchive@1.0.0 client /vagrant/seedbank-org/seedbank/anarchive
[1] > cd ../client && npm start
[1][1]
[1] > client@0.1.0 start /vagrant/seedbank-org/seedbank/client
[1] > react-scripts start
[1][0] [nodemon] 1.19.1
[0][nodemon] to restart at any time, enter `rs`
[0][nodemon] watching: _._
[0][nodemon] starting `node server.js`
[0] Running in development mode
[0] Listening on port 3001
[0] Connected to database
[0] ::ffff:10.0.2.2 - - [06/Feb/2020:00:40:52 +0000] "GET / HTTP/1.1" 404 139 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
[1] ℹ ｢wds｣: Project is running at http://10.0.2.15/
[1] ℹ ｢wds｣: webpack output is served from /
[1] ℹ ｢wds｣: Content not from webpack is served from /vagrant/seedbank-org/seedbank/client/public
[1] ℹ ｢wds｣: 404s will fallback to /index.html
[1] Starting the development server...
[1][0] ::ffff:10.0.2.2 - - [06/Feb/2020:00:40:55 +0000] "GET / HTTP/1.1" 404 139 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
[1] Compiled successfully!
[1][1] You can now view client in the browser.
[1][1] Local: http://localhost:3000/
[1] On Your Network: http://10.0.2.15:3000/
[1][1] Note that the development build is not optimized.
[1] To create a production build, use npm run build.
[1]
^C[1] npm run client exited with code SIGINT
[0] npm run dev-server exited with code SIGINT

vagrant [anarchive]> cd ../
vagrant [seedbank]> git status
On branch hotreloadingmethod2
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

    modified:   client/src/components/header.js
    modified:   client/src/index.css

no changes added to commit (use "git add" and/or "git commit -a")
vagrant [seedbank]> git stash
Saved working directory and index state WIP on hotreloadingmethod2: b18b7b2 attempting another hot reload work around in index
HEAD is now at b18b7b2 attempting another hot reload work around in index
vagrant [seedbank]> git checkout styling
Switched to branch 'styling'
vagrant [seedbank]> git status
On branch styling
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

    modified:   client/src/App.js
    modified:   client/src/components/color.js
    modified:   client/src/components/header.js
    modified:   client/src/pages/About.js
    modified:   client/src/style/Header.css

no changes added to commit (use "git add" and/or "git commit -a")
vagrant [seedbank]> git add .
vagrant [seedbank]> git commit -m 'just playing around with small header changes and different jsx ways of inject css vs traditional css'
[styling af247e7] just playing around with small header changes and different jsx ways of inject css vs traditional css
5 files changed, 87 insertions(+), 82 deletions(-)
rewrite client/src/components/header.js (68%)
vagrant [seedbank]> git push origin styling
Counting objects: 12, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (12/12), done.
Writing objects: 100% (12/12), 1.64 KiB | 0 bytes/s, done.
Total 12 (delta 7), reused 0 (delta 0)
remote: Resolving deltas: 100% (7/7), completed with 7 local objects.
To git@github.com:senselab-3e/seedbank.git
1dbfcc4..af247e7 styling -> styling
vagrant [seedbank]> npm install styled-components --save
npm WARN saveError ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/package.json'
npm WARN styled-components@5.0.1 requires a peer of react@>= 16.8.0 but none is installed. You must install peer dependencies yourself.
npm WARN styled-components@5.0.1 requires a peer of react-dom@>= 16.8.0 but none is installed. You must install peer dependencies yourself.
npm WARN seedbank No description
npm WARN seedbank No repository field.
npm WARN seedbank No README data
npm WARN seedbank No license field.

- styled-components@5.0.1
  added 42 packages from 59 contributors and audited 93 packages in 8.249s
  found 0 vulnerabilities

vagrant [seedbank]> ls
anarchive client LICENSE.md node_modules package-lock.json README.md
vagrant [seedbank]> cd client
vagrant [client]> npm install styled-components --save
npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: minimist@1.2.0 (node_modules/jest-haste-map/node_modules/fsevents/node_modules/rc/node_modules/minimist):
npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/client/node_modules/jest-haste-map/node_modules/fsevents/node_modules/rc/node_modules/minimist/package.json.2525475132'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/webpack-dev-server/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/watchpack/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: minimist@1.2.0 (node_modules/webpack-dev-server/node_modules/fsevents/node_modules/rc/node_modules/minimist):
npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/client/node_modules/webpack-dev-server/node_modules/fsevents/node_modules/rc/node_modules/minimist/package.json.1352106465'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/jest-haste-map/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

- styled-components@5.0.1
  added 11 packages from 9 contributors and audited 918531 packages in 35.862s
  found 0 vulnerabilities

vagrant [client]> git add .
vagrant [client]> git status
On branch styling
Changes to be committed:
(use "git reset HEAD <file>..." to unstage)

    modified:   package-lock.json
    modified:   package.json
    modified:   src/App.js
    modified:   src/components/header.js

vagrant [client]> git add commit -m 'adding styled component library to allow for css script writing directly in react components'
error: unknown switch `m'
usage: git add [<options>][--] <pathspec>...

    -n, --dry-run         dry run
    -v, --verbose         be verbose

    -i, --interactive     interactive picking
    -p, --patch           select hunks interactively
    -e, --edit            edit current diff and apply
    -f, --force           allow adding otherwise ignored files
    -u, --update          update tracked files
    -N, --intent-to-add   record only the fact that the path will be added later
    -A, --all             add changes from all tracked and untracked files
    --ignore-removal      ignore paths removed in the working tree (same as --no-all)
    --refresh             don't add, only refresh the index
    --ignore-errors       just skip files which cannot be added because of errors
    --ignore-missing      check if - even missing - files are ignored in dry run

vagrant [client]> git commit -m 'adding styled-component library to allow for css script writing directly in react components'
[styling 0627ed2] adding styled-component library to allow for css script writing directly in react components
4 files changed, 103 insertions(+), 4 deletions(-)
vagrant [client]> git push origin styling
Counting objects: 9, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (9/9), done.
Writing objects: 100% (9/9), 2.53 KiB | 0 bytes/s, done.
Total 9 (delta 7), reused 0 (delta 0)
remote: Resolving deltas: 100% (7/7), completed with 7 local objects.
To git@github.com:senselab-3e/seedbank.git
af247e7..0627ed2 styling -> styling
vagrant [client]> npm i styled-icons --save
npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: minimist@1.2.0 (node_modules/jest-haste-map/node_modules/fsevents/node_modules/rc/node_modules/minimist):
npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/client/node_modules/jest-haste-map/node_modules/fsevents/node_modules/rc/node_modules/minimist/package.json.4178874425'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/webpack-dev-server/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/watchpack/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: minimist@1.2.0 (node_modules/webpack-dev-server/node_modules/fsevents/node_modules/rc/node_modules/minimist):
npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/client/node_modules/webpack-dev-server/node_modules/fsevents/node_modules/rc/node_modules/minimist/package.json.2971808021'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/jest-haste-map/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

- styled-icons@9.3.0
  added 17 packages from 1 contributor and audited 918627 packages in 252.667s
  found 0 vulnerabilities

vagrant [client]> git status
On branch styling
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

    modified:   package-lock.json
    modified:   package.json
    modified:   src/components/header.js

no changes added to commit (use "git add" and/or "git commit -a")
vagrant [client]> git add .
vagrant [client]> git commit -m 'getting to know styled-components and installed another react style library for icons

> '
> [styling f2cc0e3] getting to know styled-components and installed another react style library for icons
> 3 files changed, 256 insertions(+), 69 deletions(-)
> rewrite client/src/components/header.js (63%)
> vagrant [client]> git push origin styling
> Counting objects: 8, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (8/8), done.
> Writing objects: 100% (8/8), 3.11 KiB | 0 bytes/s, done.
> Total 8 (delta 6), reused 0 (delta 0)
> remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
> To git@github.com:senselab-3e/seedbank.git
> 0627ed2..f2cc0e3 styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'adding conditional statements for the application of styles on header buttons'
> [styling b153556] adding conditional statements for the application of styles on header buttons
> 1 file changed, 4 insertions(+), 3 deletions(-)
> vagrant [client]> git push origin styling
> Counting objects: 6, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (6/6), done.
> Writing objects: 100% (6/6), 633 bytes | 0 bytes/s, done.
> Total 6 (delta 5), reused 0 (delta 0)
> remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
> To git@github.com:senselab-3e/seedbank.git
> f2cc0e3..b153556 styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'small debug setting primary to true in the inline statement of the navbutton component this will set things up in the future to dynamically setting that value to true or false depending on the current route and allowing then button color feedback for the current location users are in'
> [styling d587c3f] small debug setting primary to true in the inline statement of the navbutton component this will set things up in the future to dynamically setting that value to true or false depending on the current route and allowing then button color feedback for the current location users are in
> 1 file changed, 1 insertion(+), 1 deletion(-)
> vagrant [client]> git push origin styling
> Counting objects: 6, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (6/6), done.
> Writing objects: 100% (6/6), 625 bytes | 0 bytes/s, done.
> Total 6 (delta 5), reused 0 (delta 0)
> remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
> To git@github.com:senselab-3e/seedbank.git
> b153556..d587c3f styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'just re adding the nav buttons with the new logics of the styling components'
> [styling 71437e1] just re adding the nav buttons with the new logics of the styling components
> 1 file changed, 16 insertions(+), 3 deletions(-)
> vagrant [client]> git push origin styling
> Counting objects: 6, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (6/6), done.
> Writing objects: 100% (6/6), 795 bytes | 0 bytes/s, done.
> Total 6 (delta 5), reused 0 (delta 0)
> remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
> To git@github.com:senselab-3e/seedbank.git
> d587c3f..71437e1 styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'throwing around a bit of state values for eventual css component conditional checks'
> [styling 39f89f9] throwing around a bit of state values for eventual css component conditional checks
> 1 file changed, 5 insertions(+), 1 deletion(-)
> vagrant [client]> git push origin styling
> Counting objects: 6, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (6/6), done.
> Writing objects: 100% (6/6), 571 bytes | 0 bytes/s, done.
> Total 6 (delta 5), reused 0 (delta 0)
> remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
> To git@github.com:senselab-3e/seedbank.git
> 71437e1..39f89f9 styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'setting up a basic increment decrement state and setstate logic test based on button clicks a logic that can be imported to other events'
> [styling 6291f9b] setting up a basic increment decrement state and setstate logic test based on button clicks a logic that can be imported to other events
> 1 file changed, 20 insertions(+), 1 deletion(-)
> vagrant [client]> git push origin styling
> Counting objects: 6, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (6/6), done.
> Writing objects: 100% (6/6), 779 bytes | 0 bytes/s, done.
> Total 6 (delta 5), reused 0 (delta 0)
> remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
> To git@github.com:senselab-3e/seedbank.git
> 39f89f9..6291f9b styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'slight mod in wrapper css as width had accidentally been set to button size creating vertical column'
> [styling a052621] slight mod in wrapper css as width had accidentally been set to button size creating vertical column
> 1 file changed, 9 insertions(+), 4 deletions(-)
> vagrant [client]> git push origin styling
> Counting objects: 6, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (6/6), done.
> Writing objects: 100% (6/6), 612 bytes | 0 bytes/s, done.
> Total 6 (delta 5), reused 0 (delta 0)
> remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
> To git@github.com:senselab-3e/seedbank.git
> 6291f9b..a052621 styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'begining to take advantage of how stylingcomponents allows for the passing of theme props down to all children wrapped in the themeprovider component creating theme object in APP and adding css values through key names'
> [styling 2ee1529] begining to take advantage of how stylingcomponents allows for the passing of theme props down to all children wrapped in the themeprovider component creating theme object in APP and adding css values through key names
> 3 files changed, 77 insertions(+), 40 deletions(-)
> rewrite client/src/index.css (72%)
> vagrant [client]> git push origin styling
> Counting objects: 8, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (8/8), done.
> Writing objects: 100% (8/8), 1.90 KiB | 0 bytes/s, done.
> Total 8 (delta 7), reused 0 (delta 0)
> remote: Resolving deltas: 100% (7/7), completed with 7 local objects.
> To git@github.com:senselab-3e/seedbank.git
> a052621..2ee1529 styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'just more css tweaks'
> [styling 7d4c030] just more css tweaks
> 1 file changed, 2 insertions(+), 1 deletion(-)
> vagrant [client]> git push origin styling
> Counting objects: 6, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (6/6), done.
> Writing objects: 100% (6/6), 520 bytes | 0 bytes/s, done.
> Total 6 (delta 5), reused 0 (delta 0)
> remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
> To git@github.com:senselab-3e/seedbank.git
> 2ee1529..7d4c030 styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'figuring out how to pass down a theme as a prop from app to all children a combination of themeprovider and wrapping the child in a withTheme is necessary'
> [styling 47b2c59] figuring out how to pass down a theme as a prop from app to all children a combination of themeprovider and wrapping the child in a withTheme is necessary
> 2 files changed, 29 insertions(+), 23 deletions(-)
> vagrant [client]> git push origin styling
> Counting objects: 7, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (7/7), done.
> Writing objects: 100% (7/7), 943 bytes | 0 bytes/s, done.
> Total 7 (delta 6), reused 0 (delta 0)
> remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
> To git@github.com:senselab-3e/seedbank.git
> 7d4c030..47b2c59 styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'adding theme prop to state on child component header'
> [styling 121a1b8] adding theme prop to state on child component header
> 1 file changed, 1 insertion(+), 1 deletion(-)
> vagrant [client]> git push origin styling
> Counting objects: 6, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (6/6), done.
> Writing objects: 100% (6/6), 513 bytes | 0 bytes/s, done.
> Total 6 (delta 5), reused 0 (delta 0)
> remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
> To git@github.com:senselab-3e/seedbank.git
> 47b2c59..121a1b8 styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'yahooitworks now the theme can be called down from the parent App as props directly in the styling components in the child so that the color values or anything else can be all set and controlled from one spot like a theme should'
> [styling 6a26c7b] yahooitworks now the theme can be called down from the parent App as props directly in the styling components in the child so that the color values or anything else can be all set and controlled from one spot like a theme should
> 1 file changed, 2 insertions(+), 1 deletion(-)
> vagrant [client]> git push origin styling
> Counting objects: 6, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (6/6), done.
> Writing objects: 100% (6/6), 652 bytes | 0 bytes/s, done.
> Total 6 (delta 5), reused 0 (delta 0)
> remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
> To git@github.com:senselab-3e/seedbank.git
> 121a1b8..6a26c7b styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'add more of the prop values as theme colors applied to nav component'
> [styling 9773603] add more of the prop values as theme colors applied to nav component
> 1 file changed, 2 insertions(+)
> vagrant [client]> git push origin styling
> Counting objects: 6, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (6/6), done.
> Writing objects: 100% (6/6), 548 bytes | 0 bytes/s, done.
> Total 6 (delta 5), reused 0 (delta 0)
> remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
> To git@github.com:senselab-3e/seedbank.git
> 6a26c7b..9773603 styling -> styling
> vagrant [client]> git add .
> vagrant [client]> git commit -m 'quick notes and removal of comments'
> [styling 65d9382] quick notes and removal of comments
> 1 file changed, 1 insertion(+), 7 deletions(-)
> vagrant [client]> git push origin styling
> Counting objects: 5, done.
> Delta compression using up to 2 threads.
> Compressing objects: 100% (5/5), done.
> Writing objects: 100% (5/5), 514 bytes | 0 bytes/s, done.
> Total 5 (delta 4), reused 0 (delta 0)
> remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
> To git@github.com:senselab-3e/seedbank.git
> 9773603..65d9382 styling -> styling
> vagrant [client]> logout
> Connection to 127.0.0.1 closed.
> fa-ev10785sens2:seedbank-org lplumb$ git status
fatal: Not a git repository (or any of the parent directories): .git
fa-ev10785sens2:seedbank-org lplumb$ ls
> seedbank
> fa-ev10785sens2:seedbank-org lplumb$ cd seedbank/
fa-ev10785sens2:seedbank lplumb$ git status
> On branch styling
> Changes not staged for commit:
> (use "git add <file>..." to update what will be committed)
> (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   client/src/pages/About.js

no changes added to commit (use "git add" and/or "git commit -a")
fa-ev10785sens2:seedbank lplumb$ git add .
fa-ev10785sens2:seedbank lplumb$ git commit -m 'small note for tomorrow'
[styling 25712c9] small note for tomorrow
Committer: LesliePlumb <lplumb@fa-ev10785sens2.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

1 file changed, 5 insertions(+)
fa-ev10785sens2:seedbank lplumb$ git status
On branch styling
nothing to commit, working tree clean
fa-ev10785sens2:seedbank lplumb$ git push origin styling
The authenticity of host 'github.com (140.82.113.4)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,140.82.113.4' (RSA) to the list of known hosts.
no such identity: /Users/lplumb/.ssh/id_rsa: No such file or directory
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
fa-ev10785sens2:seedbank lplumb\$ vagrant up
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Machine already provisioned. Run `vagrant provision` or use the `--provision`
==> default: flag to force provisioning. Provisioners marked to run always will still run.
fa-ev10785sens2:seedbank lplumb\$ vagrant ssh
Welcome to Ubuntu 16.04.3 LTS (GNU/Linux 4.4.0-87-generic x86*64)
.-='-. \_db* .--==-,
(_ ( \_IIII_ _( ) `. ( |" " |-.(` ,_ `) '-._HHHHHH`)---' `'--' |. |--`
| | Lighthouse Labs
\_H**_,=====;_**| Built # 20171219-141500-8dc7a2e
n\_/\_**\_/\_\_**/``\__\
 /\_\_|:: :|. .|:::|::| Direct complaints to /dev/null
_%&|**&%_"_|_"_|\_ H|**|\_\_

- Documentation: https://help.ubuntu.com
- Management: https://landscape.canonical.com
- Support: https://ubuntu.com/advantage
  Last login: Wed Feb 5 22:29:20 2020 from 10.0.2.2
  vagrant [vagrant]> cd seedbank-org/
  vagrant [seedbank-org]> cd seedbank/
  lsvagrant [seedbank]> ls
  anarchive client LICENSE.md README.md
  vagrant [seedbank]> git status
  On branch styling
  nothing to commit, working directory clean
  vagrant [seedbank]> git add .
  gvagrant [seedbank]> git commit -m 'just removing a placeholder script that causng the app to break'
  [styling 245674c] just removing a placeholder script that causing the app to break
  1 file changed, 5 deletions(-)
  vagrant [seedbank]> git push origin styling
  Counting objects: 7, done.
  Delta compression using up to 2 threads.
  Compressing objects: 100% (7/7), done.
  Writing objects: 100% (7/7), 879 bytes | 0 bytes/s, done.
  Total 7 (delta 4), reused 0 (delta 0)
  remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
  To git@github.com:senselab-3e/seedbank.git
  65d9382..245674c styling -> styling
  vagrant [seedbank]> git status
  On branch styling
  nothing to commit, working directory clean
  vagrant [seedbank]> npm install --save typeface-lato
  npm WARN saveError ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/package.json'
  npm notice created a lockfile as package-lock.json. You should commit this file.
  npm WARN enoent ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/package.json'
  npm WARN seedbank No description
  npm WARN seedbank No repository field.
  npm WARN seedbank No README data
  npm WARN seedbank No license field.

* typeface-lato@0.0.75
  added 1 package from 1 contributor and audited 1 package in 1.15s
  found 0 vulnerabilities

vagrant [seedbank]> cd client
vagrant [client]> npm install --save typeface-lato
npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: minimist@1.2.0 (node_modules/jest-haste-map/node_modules/fsevents/node_modules/rc/node_modules/minimist):
npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/client/node_modules/jest-haste-map/node_modules/fsevents/node_modules/rc/node_modules/minimist/package.json.2718207271'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/webpack-dev-server/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/watchpack/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: minimist@1.2.0 (node_modules/webpack-dev-server/node_modules/fsevents/node_modules/rc/node_modules/minimist):
npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/client/node_modules/webpack-dev-server/node_modules/fsevents/node_modules/rc/node_modules/minimist/package.json.566250386'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/jest-haste-map/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

- typeface-lato@0.0.75
  added 1 package from 1 contributor and audited 918628 packages in 36.911s
  found 0 vulnerabilities

╭────────────────────────────────────────────────────────────────╮
│ │
│ New minor version of npm available! 6.12.0 → 6.13.7 │
│ Changelog: https://github.com/npm/cli/releases/tag/v6.13.7 │
│ Run npm install -g npm to update! │
│ │
╰────────────────────────────────────────────────────────────────╯

vagrant [client]> npm install --save typeface-clear-sans
npm WARN rollback Rolling back node-pre-gyp@0.14.0 failed (this is probably harmless): EPERM: operation not permitted, scandir '/vagrant/seedbank-org/seedbank/client/node_modules/watchpack/node_modules/fsevents/node_modules'
npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: minimist@1.2.0 (node_modules/jest-haste-map/node_modules/fsevents/node_modules/rc/node_modules/minimist):
npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/client/node_modules/jest-haste-map/node_modules/fsevents/node_modules/rc/node_modules/minimist/package.json.1299861665'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/webpack-dev-server/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/watchpack/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: minimist@1.2.0 (node_modules/webpack-dev-server/node_modules/fsevents/node_modules/rc/node_modules/minimist):
npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT: no such file or directory, open '/vagrant/seedbank-org/seedbank/client/node_modules/webpack-dev-server/node_modules/fsevents/node_modules/rc/node_modules/minimist/package.json.3756430958'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/jest-haste-map/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

- typeface-clear-sans@0.0.44
  added 1 package from 1 contributor and audited 918629 packages in 33.184s
  found 0 vulnerabilities

vagrant [client]> npm install react-p5-wrapper --save
npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

// import { withTheme } from "styled-components";

///NOTES For CSS grid: CSS Grid has a new unit that solves our problem elegantly. The fractional unit (fr)
// The fractional unit solves the problem of automatically distributing space.
// If you have three grid columns aligned as shown below, the fractional unit will automatically distribute the space equally.
///this gets me away from having to do things like this: body {
// ...not maintainable:
// grid-template-rows: calc(100% - 100px) 100px;
// grid-template-columns: 50px calc(100%-50px)
// If for some reasons you have to change any of the the fixed widths, then you must always change the calc definition.
//instead
//body {
// ...
// grid-template-rows: 1fr 100px;
// grid-template-columns: 50px 1fr;

//below: The code block above says, let the .main class have an area name of content. Let the .footer class have an area name of footer. Finally, let the aside class have a grid name of sidebar
// Now the grid items have all been assigned area names.
//Note that the entries in the property value are the names of the grid items!
// import styled from "styled-components";

NOTES FOR REFACTORING for functional components:

https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc

No this Keyword
As you can see above, the stateless component is just a function. Thus, all the annoying and confusing quirks with Javascript’s this keyword are avoided. The entire component becomes easier to understand without the this keyword. Just compare the click handler in each approach:

onClick={this.sayHi.bind(this)}>Say Hi</a>
onClick={sayHi}>Say Hi</a>
Note that the bind keyword isn’t necessary for the stateless component. Dumping classes eliminates the need for calling bind to pass the this context around. Given how confusing JavaScript’s this keyword is to many developers, avoiding it is a nice win.

Oh, as a side note, there are five different ways to handle binding in React. Here’s a short post on the merits of each approach.

Enforced Best Practices
Stateless functional components are useful for dumb/presentational components. Presentational components focus on the UI rather than behavior, so it’s important to avoid using state in presentational components. Instead, state should be managed by higher-level “container” components, or via Flux/Redux/etc. Stateless functional components don’t support state or lifecycle methods. This is a good thing. Why? Because it protects from laziness.

See, it’s always tempting to add state to a presentational component when you’re in a hurry. It’s a quick way to hack in a feature. Since stateless functional components don’t support local state, you can’t easily hack in some state in a moment of laziness. Thus, stateless functional components programatically enforce keeping the component pure. You’re forced to put state management where it belongs: in higher level container components.

///The updates to context values doesn't trigger re-render for all the children of the provider, rather only components that are rendered from within the Consumer, so in your case although number component contains the Consumer, Number component isn't re-rendered, rather just the render function within the Consumer and hence the value changes on context updates. This way it is quite a lot performant as it doesn't trigger re-renders for all of its children.

https://stackoverflow.com/questions/50817672/does-new-react-context-api-trigger-re-renders
