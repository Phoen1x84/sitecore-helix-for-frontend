# Sitecore Helix For Frontend - A Sitecore User Group Tale

The repository is an extended example of a possible front-end solution to Sitecore helix projects that [David Moore](https://twitter.com/Moorag81) and I presented in the [Cardiff Sitecore user group](https://www.meetup.com/sug-uk/events/252868135/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites
* Visual Studio Code
* Latest version of [node.js](https://nodejs.org/en/)

### Installing
1. Clone this repository to your local machine, this can be any directory.
2. Create a folder in your inetpub directory C:\inetpub\wwwroot\SugukDemo
3. CD to the root directory and run ```npm install```
4. Run `gulp build` or `gulp build project=ProjectName` in command line and this will compile the frontend assets and push them to the inetpub directory

## Folder structure
```text
dist
src
    Feature
        products
            index.js
            Views
                ProductFeature
                    ProductFeature.cshtml
                    productFeature.js
                    __tests__
                        // tests here
    Foundation
        // nothing in here yet
    Project
        Commercial.Website
            Feature
                products
                    ProductFeature
                        product-feature.js
                        _product-feature.scss
                        __tests__
                            // mocks here
                            // tests here
            Foundation
                // foundation files here such as breakpoints, variables, placeholders etc...
            index.js
            index.scss
        Residential.Website
            Feature
                products
                    ProductFeature
                        product-feature.js
                        _product-feature.scss
                        __tests__
                            // mocks here
                            // tests here
            Foundation
                // foundation files here such as breakpoints, variables, placeholders etc...
            index.js
            index.scss

```

## Built With
* [sass](http://sass-lang.com/) - The preprocessor used
* [gulp](http://gulpjs.com/) - Used to generate the Front-End assets
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Babel](http://babeljs.io) - ES6 Transpiler
* [Browserify](http://browserify.org/) - Bundling dependencies

## Authors

* **Matthew Neil** - *Initial work* - [Pheon1x84](https://github.com/Phoen1x84)
* **Pete Davis** - [petedavisdev](https://github.com/petedavisdev) Twitter: [@petedavisdev](https://twitter.com/petedavisdev)
