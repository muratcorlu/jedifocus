```text
__.-._  
'-._"7'  Jedi Focus
 /'.-c
 |  /T   Do. Or do not.
_)_/LI   There is no try.
```

**JediFocus** gives you an a **simple** and **opinionated** way to handle your goals. 

## What Makes **JediFocus** Different?

Simply, “simplicity”.

**JediFocus** is an **opinionated** goal organizer that offers…

* **Less** confusion
* **Less** configuration
* And **less** clutter

**JediFocus** is designed to be as intuitive, simple; but not “simpler”.

The experience has everything you need, and nothing you don’t need so that you don’t [die by a thousand micro decisions][limited-resources].

## Try **JediFocus** Online

> **In Progress**
>
> I’m working on an online version. 
>
> Until the web app is ready, the only way to use **JediFocus** is to build it from the source and run it locally.
>
> See the **Installation** section below.

## Installation

> This section is only for those who want to install **JediFocus** from the source code.

0. Make sure you have a recent version of [**Node.js**][node] and [**yarn**][yarn] installed on your system.
1. First, **fork** this project from **GitHub**.
2. Then rename `src/config.example.json` to `src/config.json` and fill in appropriate [**Firebase**][firebase] credentials and variables.
3. Install the project using `yarn install`.
4. Run the development server using `npm run serve`.

## A [ByteSized.TV][vidcast] Project

This repository is a part of the [Byte-Sized JavaScript VideoCasts][vidcast].

### Byte-Sized What?!

[Byte-Sized JavaScript][vidcast].

It is a compilation of short (*around ten minutes*) screencasts about **JavaScript** and related technologies.

## About This Repository

This repository contains the source code of **JediFocus**.

If you want to tweak the way **JediFocus** works for you, that’s the place to get started.

**Contributions** and **pull request** are welcome.

## I Need Help

If you need help, [file an issue][ticket], or [send me an email at me@volkan.io][email].

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

## How It Began

Long time ago (*around 2013*), [I created a project (*called “**JFDI**”*) to manage my goals and action items][jfdi] — [I even wrote a manifesto about it][jfdi-manifesto].

The reason I created *JFDI* was because I was thinking that an offline *command line* app that you can run from the comfort of your terminal was much faster, efficient, and effective. — Those shiny/bloated GTD apps with pretty user interfaces were just an overkill, even a **friction** in actually getting things done. 

For a while, it was good. — *JFDI* became “**the**” command line application that I used to manage my goals. The simple interface that it provided, and its speed and portability was doing wonders for my productivity. — And I still think, [**JFDI as a methodology**][jfdi-manifesto] is the most **efficient** way of getting things done, regardless of which app you use to implement it.

Though, after using *JFDI* for a few years, it hit me: If there was one single application that was open all the time on my computer, it was **my browser**!

> I was in a delusion that the command-line terminal is all that I need, while the epicenter of my life was my browser.

Also, in time, synchronizing my goals **to the cloud**, and accessing them **in real time** became more and more important. — As an offline, desktop app; *JFDI* was not capable of that. — Yes I could integrate it with a cloud REST-ful database, but that was not my only issue with *JFDI*. 
 
My other problem was the user interface (*or the lack, thereof*). See, clicking a “clone this goal” button turned is much easier than remembering which command-line flag was required to clone a task. 

> After all, if I had [limited mental focus][limited-resources], why waste it on memorizing command-line trivia?

In addition, Internet connectivity **improved** over the last couple of years: Mobile internet connectivity today is much better than Internet five years ago. You can have a decent mobile wifi from almost anywhere you roam. 

So you don’t need an offline-first app as badly as you needed ten years ago. — The irony is: there was no concept of an “offline web app” when you badly needed it back in those days.

And the last but not the least, a browser interface opens a wide variety of options to **interact** with the UI which is simply not possible with a terminal emulator.

> However, with great power also comes great responsibility. In **JediFocus** I’ll continue to maintain the same minimalistic philosophy keep the interface **fast**, **simple**, and **usable**.
> 
> That might, at times, mean that I will be **intentionally** making the app **less** flexible, or I will be **hiding** things that the user doesn’t have to see immediately. — Less is **more**.

## Doesn’t Trello/Asana/Omnifocus/etc… Do the Same Thing?

There are other “getting things done” web applications around that you can use 

I tried almost all of them; however, they did not serve what I needed: They were either too bloated, or too simplistic, or too different.

So, I decided to scratch my own itch (*once more, after JFDI*); and created **JediFocus**.

The issue with task management is: It so personal that it’s virtually impossible to find a universall application that solves everybody’s problems at the same time.

I’m sure some will like **JediFocus**, and some will feel more comfortable using a different app.
 
> Let me tell you a secret: It’s not the app that you use; it’s the focus, discipline, dedication, and repetition that makes you succeed.

## Wanna Help?

Any help is more than appreciated.

If you want to contribute to the source code, **fork this repository** and **create a pull request**.

> In lieu of a formal style guide, take care to maintain the existing coding style.

Also, don’t forget to add unit tests for any new or changed functionality.

If you want to report a bug; or share a comment or suggestion, [file an issue][ticket].

## I’ve Found a Bug; I Have an Idea

[For bug reports and suggestions, please file an issue][ticket].

## Contact Information

* **Project Maintainer**: [Volkan Özçelik](https://volkan.io/)
* **Project Website**: [bytesized.tv](https://bytesized.tv/)

## License

MIT-licensed. — [See the license file for details](LICENSE.md).

## Code of Conduct

We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.

[See the code of conduct for details](CODE_OF_CONDUCT.md).

[email]: mailto:me@volkan.io
[firebase]: https://firebase.google.com "Firebase helps you build better mobile apps"
[jfdi-manifesto]: https://gist.github.com/v0lkan/2731233 "The JFDI Manifesto"
[jfdi]: https://github.com/v0lkan/jfdi "JFDI: A Hacker’s Way of Getting Stuff Done"
[limited-resources]: https://www.youtube.com/watch?v=FKTxC9pl-WM "Making Badass Developers"
[node]: https://nodejs.org/en/ "Node.js"
[ticket]: https://github.com/jsbites/jedifocus/issues/new "Create a New Issue"
[vidcast]: https://bytesized.tv/ "ByteSized.TV"
[yarn]: https://yarnpkg.com "Yarn: Fast, Reliable, and Secure Dependency Management"
