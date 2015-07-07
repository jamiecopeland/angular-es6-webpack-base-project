#Angular ES6 Webpack base project


##Notes
Fully functional but in need of some refinement. (See Roadmap)

##Getting started
Note: Assume all terminal commands need to be run from the root of the project.

#####Installing
1. Clone repository.
2. Install project dependencies:
	- ```npm install```

#####Compiling
1. Ensure webpack is installed globally:
	- ```sudo npm install webpack -g```
	
2. Start up Webpack live compilation:
	- ```webpack --colors --progress --watch```

#####Serving
1. Start the development server (in another terminal):
	- ```node server/server.js```

#####Viewing
1. See it running in a browser at: ```http://localhost:3000```

##Roadmap
- Move generated CSS out of index.html and into its own file
- Separate project and library code
- Switch from JSHint to ESLint
- Add system notifications for Webpack compilation errors

##Thanks
Much wisdom borrowed from [ShMcK's tutorials and examples](https://github.com/ShMcK/WebpackAngularDemos)
