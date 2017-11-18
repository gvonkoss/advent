build:
	@node-sass scss/main.scss public/main.css

run:
	@node app.js

it: build run
