## About This Repository

This repository contains the source code of **JediFocus**.

If you want to tweak the way **JediFocus** works for you, that’s the place to get started.

**Contributions** and **pull request** are welcome.

## Installation

> This section is only for those who want to install **JediFocus** from the source code.

0. Make sure you have a recent version of [**Node.js**][node] and [**yarn**][yarn] installed on your system.
1. First, **fork** this project from **GitHub**.
2. Then rename `src/config.example.json` to `src/config.json` and fill in appropriate [**Firebase**][firebase] credentials and variables.
3. Install the project using `yarn install`.
4. Run the development server using `npm run serve`.

## Dependencies

* You will need the **current** version of [**Node.JS**][node] with all the bells and whistles — [You can install it from nodejs.org][node].
* You will need [**yarn**][yarn] to install dependencies.
* You will need to setup a [**Firebase** database][firebase], and configure your app by using the variables that you fetch from the **Firebase console**.

## Package Scripts

Here are the helper npm scripts that you can run via `npm`:

* `npm run lint`: Check the files for syntactical issues.
* `npm run serve`: Run the development server.
* `npm run watch`: Run the bundler in “watch” mode (*you’ll need to run a separate server in this case*).

## Important Files and Folders

I am leaving this section blank for now since things change a lot.

I will update here when the file system stabilizes more.

If you want to contribute to the source code, **fork this repository** and **create a pull request**.

> In lieu of a formal style guide, take care to maintain the existing coding style.

Also, don’t forget to add unit tests for any new or changed functionality.

## I’ve Found a Bug; I Have an Idea

[For bug reports and suggestions, please file an issue][ticket].


[email]: mailto:me@volkan.io
[firebase]: https://firebase.google.com "Firebase helps you build better mobile apps"
[jfdi-manifesto]: https://gist.github.com/v0lkan/2731233 "The JFDI Manifesto"
[jfdi]: https://github.com/v0lkan/jfdi "JFDI: A Hacker’s Way of Getting Stuff Done"
[limited-resources]: https://www.youtube.com/watch?v=FKTxC9pl-WM "Making Badass Developers"
[node]: https://nodejs.org/en/ "Node.js"
[ticket]: https://github.com/jsbites/jedifocus/issues/new "Create a New Issue"
[vidcast]: https://bytesized.tv/ "ByteSized.TV"
[yarn]: https://yarnpkg.com "Yarn: Fast, Reliable, and Secure Dependency Management"
