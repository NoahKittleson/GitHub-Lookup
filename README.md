#_README for GitHub Lookup_#
###Created by Noah Kittleson###

##**Description**##
This is a webpage that allows the user to lookup the repositories of GitHub users.  Enter the name of whoever's repositories you want to view and the GitHub API will fetch their data and display the name, description, primary language, and size of each repository.

##**Setup**##
This page requires Node.js to manage dependencies, which you can download [here](https://nodejs.org/en/download/). Once you have downloaded both Node and this project, go to the command line and type:

* `npm install`

This should install all node dependencies, including those for bower and gulp, although you may also have to `install bower`, I can't remember.  After you have done that, run:

* `gulp build`
* `gulp serve`

and that should open up the webpage for you.  However, note that I have not provided the API key needed to use this program.  If you have your own key you can make a .env file in the head of the project directory and title with the code

```javascript
exports.apiKey = "YOUR_API_KEY_HERE";
```

##**Technologies Used**
* CSS
* BootStrap
* JavaScript
* Gulp
* Bower
* Node Package Manager
* HTML

##**Licensing**##
This is protected under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license.
