Igniting OUR APP

Diffrent Ways to implement React in our JS Application
    1. CDN
    2. Using Package - npm install react 

What is PROP?
> Props are basically any thing. This is same as attibutes of the tag. React Passes these Props.
> Parcel is zero config bundlers

Production Ready Parameters - 
1. We need to minify our app
2. Remove the console.logs
3. Optimisation
4. And Bundlle
5. Caching

The Jobs of Bundlers

1. Webpack
2. VIT 
3. Parcel
This bundlers are responsible for many thing today and its provides lots of powerful features

We will use Parcel - 
Parcel is easy to use and Learn 

QUESTION - 
Diff between Parcel and Webpack.

-D means dev dependecies. 
Tilda and Caret in Package-lock.json


Package-lock.json

"integrity" -  this is the same version which is running on the localsysten and will wants to same version at the sercer. 
 

 node_modules are data base of our project.


 When we declear as import in js file(import React) then this should be src as type="module" 


 HMR - Hot Module Reload 
 File watcher algoritham helps HMR to relload the server automatically. This algorithm is written in C++

 2.0

1. What is transitive dependency
> Inception of dependencies is known as Transitive dependency.
When a package manager or bundlers use dependecies to execute then those kind of dependencies know as Transitive dependencies.
2. How can I make my app compatible with Older browsers?
> use browserList in Package.json


browserlist.dev

What we study in 2nd Class
1. npm
2. npm init (to instialize the repo with package.json)
3. npm install 
4. Execute our project [npx parcel index.html {entry point of the project} ]
5. it load all the dev build, creeated the .parcle-cache, create a live server, enabling the HMR etc
6. Install React
7. Then its install react and broke the app 
8. use type="module" in script. H/W - how many types of scrit type in HTML
9. Diff between Package and package-lock.json
10. Should I push package-lock in git 
11. 