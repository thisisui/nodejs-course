# NodeJS

- JavaScript Runtime
- Written in C++
- Build on the V8 JS engine
- Allows run JS code on server

# Why use NodeJs

- event driven, non blocking I/O model
- highly scalable
- the same language on front and back

# Non Blocking

- works on a single thread using non block I/O calls
- supports many concurrent connections
- fast and efficients
- CPU intensive apps are not recommended for NodeJS

- Event Emitter class is used to bind events and listeners

# Best types of project for Node

- REST API & Microservices
- Real Time Services
- CRUD Apps
- Tools & Utilities

# Node Modules

- Node Core Modules (path, fs, http, etc)
- 3rd party modules
- custom modules

# Module Wrapper Function

`(function (exports, require, module, __filename, __dirname){`

`})`

- the code above wraps around our modules

# Import in Nodejs

- by adding `type: module` in package.json we can use import syntax
