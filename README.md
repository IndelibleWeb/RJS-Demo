# Using Require - with R.JS

## What is R.JS

R.js is the require.js included compiler tool.

Download R.js from: http://requirejs.org/docs/download.html#rjs

## Pre-requisites

You need to have node.js/npm installed, and you also need to have requirejs installed using '$ npm install -g requirejs'.

## Usage

'$ node r.js -o js/main.build.js'

## Files
	
	r.js - The compilation tool (you should run your rjs command from this location)

	JS folder

		main.js - The main JS file.

		main.build.js - The build file (configuration and overrides to require config)

		LIB Folder:

			requirejs.js - The require logic

		App Folder:

			some-module.js - A sample module


