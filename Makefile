build:
	@node-sass src/scss/main.scss public/main.css

run:
	@node app.js

it: build run
