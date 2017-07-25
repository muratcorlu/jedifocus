```
  __
 |::|    Jedi Focus
 |::|
_|//|_  Do. Or do not.
|____|  There is no try.
 || |  
 | ||
 | ||
```

## **JediFocus** (*v.0.7.1*)

* Now the CSS that we use are syntactically awesome (*integrated [sass](http://sass-lang.com), to the codebase*).
* Minor refactorings and bugfixes.
* Performance improvements for web fonts.
* Minor stylistic changes.

## **Jedi Focus** (*v.0.6.0*)

* Bugfix: Clicking on a link inside a card now opens the link istead of activating the card.
* Bugfix: Creating a new card resets the context to the active context.
* Other minor bugfixes and refactorings.
* Minor style changes.
* Using antialiased fonts (better readability for retina screens).
* Using **Georgia Pro** and **Input Mono Condensed** as fonts; they load fast enough and when they are loading the fallback font the the browser renders is good enough.

## **Jedi Focus** (*v.0.5.0*)

* Performance improvements when saving goals.
* Added contexts, so if you don’t want the default board to be too crowded, you can move some of the goals to **backlog** or **ice box**, for example.
* Bugfixes and code improvements.
* Removed the web fonts thaI used because it was causing delay. The UI uses “Georgia” because it is a quite legible serif font that is default in **most** of the systems.

## **Jedi Focus** (*v.0.4.0*)

* Added markdown support, now you can write your card in [**GFM**](https://help.github.com/articles/about-writing-and-formatting-on-github/)

## **Jedi Focus** (*v.0.3.0*)

* Added drag capability to the modal window.
* Fixed an anchoring problem with the edit links.
* Minor stylistic changes.

## **Jedi Focus** (*v.0.2.0*)

* Muted colors, and did some visual changes to make the app more usable.
* App minimally usable for a single user / single firedb table; authentication and multiple users are not supported yet.
* App cannot run on a web server (securely) yet; it only runs on `localhost`.
