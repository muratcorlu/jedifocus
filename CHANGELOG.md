```text
__.-._  
'-._"7'  JediFocus
 /'.-c
 |  /T   Do. Or do not.
_)_/LI   There is no try.
```

## **JediFocus** (*v.0.17.0*)

* Added some nifty `svg` icons.
* Code needs some cleanup; however, the app is working fine, so I’ll deal with that later.

## **JediFocus** (*v.0.16.0*)

* Code cleanup.
* Organized CSS to make it more maintainable.
* Build process is now exporting sass file (before they were inlined to the index.html).
* Got rid of redundant CSS rules.
* Minor bugfixes.
* Removed `will-change` declerations because they were doing more harm than good.
* Body text is more readable; buttons and heading are more “lickable” (*i.e. thinner*).
* Increased the card width just a tiny bit.

## **JediFocus** (*v.0.13.0*)

* While **JediFocus** is loading the goals of any context, it now displays random motivational quotes.
* Bug fixes.
* Style fixes and tpographic changes.

## **JediFocus** (*v.0.12.0*)

* Added animations between modal dialog transitions.
* When modal dialog is visible, no other action can be taken until modal dialog is dismissed.
* Minor stylistic improvements.

## **JediFocus** (*v.0.10.0*)

* Scrolling improvements (*each column is separately scrollable now*).
* Actively-edited card moves to top.
* Other usability improvements.
* Card auto-sort-ordering implemented: 
     * The goals that you interact with will “*bubble up*” to top because the more you interact with something, the more important it is to you, and the cards’ sort oder shall reflect that.
* Minor bug fixes and refactorings.

## **JediFocus** (*v.0.9.0*)

* Removed the “Done” column. — You don’t need it. If something is done, it is done; keeping track of done items is a counter-productive. Say “bye” do things you do, and move on. No need to overload your mind. — You are a **doer**; not an accountant!
* Usability enhancements code cleanup.
* Theme and typography improvement
* Minor bug fixes.
* Drafted a “README” (*I’ll probably work on it further*).
* Started using **JediFocus** to track **ALL** of my goals; which helps me improve the product **faster** and **better**.

## **JediFocus** (*v.0.7.1*)

* Now the CSS that we use are syntactically awesome (*integrated [sass](http://sass-lang.com), to the codebase*).
* Minor refactorings and bugfixes.
* Performance improvements for web fonts.
* Minor stylistic changes.

## **JediFocus** (*v.0.6.0*)

* Bug fix: Clicking on a link inside a card now opens the link istead of activating the card.
* Bug fix: Creating a new card resets the context to the active context.
* Other minor bug fixes and refactorings.
* Minor style changes.
* Using antialiased fonts (better readability for retina screens).
* Using **Georgia Pro** and **Input Mono Condensed** as fonts; they load fast enough and when they are loading the fallback font the the browser renders is good enough.

## **JediFocus** (*v.0.5.0*)

* Performance improvements when saving goals.
* Added contexts, so if you don’t want the default board to be too crowded, you can move some of the goals to **backlog** or **ice box**, for example.
* Bugfixes and code improvements.
* Removed the web fonts thaI used because it was causing delay. The UI uses “Georgia” because it is a quite legible serif font that is default in **most** of the systems.

## **JediFocus** (*v.0.4.0*)

* Added markdown support, now you can write your card in [**GFM**](https://help.github.com/articles/about-writing-and-formatting-on-github/)

## **JediFocus** (*v.0.3.0*)

* Added drag capability to the modal window.
* Fixed an anchoring problem with the edit links.
* Minor stylistic changes.

## **JediFocus** (*v.0.2.0*)

* Muted colors, and did some visual changes to make the app more usable.
* App minimally usable for a single user / single firedb table; authentication and multiple users are not supported yet.
* App cannot run on a web server (securely) yet; it only runs on `localhost`.
