# Sitecore Helix For Frontend - A Sitecore User Group Tale (WIP)

The repository is an extended example of a possible front-end solution to Sitecore helix projects that [David Moore](https://twitter.com/Moorag81) and I presented in the [Cardiff Sitecore user group](https://www.meetup.com/sug-uk/events/252868135/)

## Project Goals (WIP)

* Provide the Sitecore community with an example of a front-end solution setup within a Sitecore Helix project
* Help Front-end developers understand Sitecore Helix principles


## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites
* Visual Studio Code
* Visual Studio
* Latest version of [node.js](https://nodejs.org/en/)

### Installing
1. Clone this repository to your local machine, this can be any directory.
2. Create a folder in your inetpub directory C:\inetpub\wwwroot\SugukDemo
3. CD to the root directory and run ```npm install```
4. Run ```npm run build``` in command line and this will compile the frontend application and push them to the inetpub directory

## Folder structure
```text
src
    Feature
        products
            code
                src
                    products
                        __tests__
                            // tests here
                        scripts
                            // scripts here
                        index.js
            Views
    Foundation
        // nothing in here yet
    Project
        Commercial.Website
            code
                dist
                src
                    feature
                        products
                            filter
                                __mocks__
                                // mocks here
                                __tests__
                                // tests here
                                filter.js
                                _filter.scss
                    foundation
                        // foundation files here such as breakpoints, variables, placeholders etc...
                    index.js
                    index.scss
        Residential.Website
            code
                dist
                src
                    feature
                        products
                            filter
                                __mocks__
                                // mocks here
                                __tests__
                                // tests here
                                filter.js
                                _filter.scss
                    foundation
                        // foundation files here such as breakpoints, variables, placeholders etc...
                    index.js
                    index.scss

```

## Built With
* [Webpack](https://webpack.js.org/)
* [Lerna](https://lerna.js.org/) - Mono-repo dependency manager and script runner
* [NPM](https://www.npmjs.com/) - Dependency management
* [sass](http://sass-lang.com/)

## Authors

* **Matthew Neil** - *Initial work* - [Pheon1x84](https://github.com/Phoen1x84)