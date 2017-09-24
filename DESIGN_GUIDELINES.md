```text
__.-._
'-._"7'  JediFocus
 /'.-c
 |  /T   Do. Or do not.
_)_/LI   There is no try.
```

## **JediFocus** Design Guidelines

> **Note on the Terminology Used**
>
> To maintain flow of text, some of these guidelines are written in third person (*i.e., “you should…”*) and some of them are written in indirect form (*i.e., “the user should…”*).
>
> In either case the intended persona is the person who actively uses **JediFocus**.
>
> Another hidden assumption is that leads to this terminology is the fact that the developer is actually the user of the application, or at least when testing it, she becomes “the user” of the application. So she is both “the user” and also “the person” (*i.e., you*) who reads this guideline.

**JediFocus** is being designed with a *focus* on *simplicity*, *effectiveness*, and *ease of use*.

These design decisions inherently shape the **JediFocus** use experience.

This documents outlines some of these guidelines.

### What’s Done is Done (*and Dead, and Gone*)

**JediFocus** does not keep track or a time log of the done items. 

Once you mark something as “**done**”, you will lose that item for good. 

Keeping track of done items futile and useless; you can and should spend your mental energy not on book-keeping but on getting the next goal done.

So if a goal needs some kind of documentation after being done; or if you need to update a time log after finishing the goal, you should do it externally. 

> The time log of done items is better out of sight and out of mind.

If you have too many cards; you have too much on your plate. So instead of torturing yourself, move some to **backlog**.

## Simplicity Above Everything

When adding a feature we’ll always make a risk/benefit analysis. 

No feature will be added unless it is absolutely necessary **and** simplifies the workflow.

So…

* At all times, there should be a **single way** of doing things. — This is one of the cardinal **JediFocus** UX rules: Provide only one way to edit a card; provide only a single way to move a card. — This will both help the UI keep clutter-free, and also help the code easier to test, robust, and bug-free.
* No visual clutter: No fancy backgrounds, no excessive animations, the focus should be on the cards, and on the cards only. There can be some animations “within reason”, and of course some use of color, but the overall theme is a “zen-like” **simplicity**.
* No popopver menu items on the cards. — The cards are what they are: Cards, that the user reads. — There is only a single way to interact with them and that is by tapping on them. 
* No tags, labels, color codes… — You are not a librarian; you don’t need a taxonomical categorization of goals. Categorizing and sorting your goals gives you a false sense of satisfaction; however you are just slacking while appearing to look productive. — The system is dead simple: If you are working on something, work on it; if not, either move it to backlog or move it to a different column.
* No attachment and multimedia support. — You can always upload your supporting media to somewhere like **Dropbox**, and add a reference link to your goal. — **JediFocus** focuses on goal tracking; **not** asset management.
* No pagination. — If you have too many goals in your plate that you need to paginate; then you have a bigger problem than pagination. — **JediFocus** will only list a certain reasonable subset of your goals.
* No drag and drop interaction for the cards — There are three columns; and you can simply move the card the the next column with the tap of a button. Dragging is much more time-consuming than just tapping a button. Besides, when you move a card to the next column, it moves to the top of the colum by design; and it does not look natural when you try to drag the card in the middle and it does not obey you and bounces to top.
* Related to that: No custom sorting of cards. — Whenever you interact with a card in any way, it moves to the top of the column. That is the unbreakable, cardinal rule of the **JediFocus** UX; it is the core premise: The stuff that you interact with are, by logic, more important than the stuff that you do not interact with; ergo they bubble to top.
* What’s done is done. — **JediFocus** does not track the goals you completed. Once a goal is done, it is irreversibly wiped from the system.
* No search. — Again, if you need to search between your goals; then you have a bigger problem. — You should start from your topmost goal, and move all the way to the bottom; without needing to search for anything.
    * We may include some form of **labeling** and/or **filtering** in the future, though.
* Goals are ephemeral. — If you want to permanently store something before completing your goal, make sure you save it to a more permanent **reference** location.

## Desktop First (*Until MVP*)

Initially, we are assuming a **Desktop** user experience. This is to reduce the initial scope of the project. — Eventually we’ll support phone and tablet user agents too.

This, however, does not mean that **JediFocus** will not be usable on phones and tablets; it’s just, initially we won’t be testing the app in those user agents.

## Markdown Over WYSIWYG

Why? Because what you see is never what you get. Besides, the user is supposed to express her goals, not author her next novel. — So the amount of formatting required is not sophisticated enough to validate the necessity of a MS-word-like WYSIWYG editor.

### You Don’t Need **Search**

If you feels in need of searching your cards, then you have too much on your plate already.

**JediFocus** favors automatic prioritization to search:

The items you interact most “**bubble up**”, the items you don’t touch bubble down, so what’s important is in front of your eyes.

### Don’t Bloat the UI

* If something can be removed, remove it.
* If something can be hidden, hide it.
* When adding a feature consider the risk versus benefit. — If the benefit is not worth it, don’t complicate the user experience.

### You Should not Need a Manual

Anything you see on the UI should be intuitive and self-explanatory.

On rare occasions, you might want to give helpful hints to the user; however user should not have to watch a tutorial or read a manual to get going.

> It is okay to have a separate help document that outlines the user interface; however this document should not be necessary “at all” for the user to accomplish any task.

### Make Advanced Features Explorable

You should be able to **explore** the advanced features as you continue to use the app. 

> Don’t throw everything but the kitchen sink at the user.
>
> Don’t be the MS Word of productivity! 

### Make the Experience Error-Free

You should be able to revert their actions whenever possible; or you should be warned when an action is irreversible.

> Note that this is an “end goal”. — The current version of **JediFocus** does not have **undo** functionality.

### Make the Experience Smooth

The UI should lead the you to where you need to be next. 

For example when you move a goal to a new column, the initial card should fade out and disappear, the column should highlight, the goal should highlight and you should be visually led to where the new goal is.

### Strive for Closure

**Done is Better than Perfect**

Try not to deploy a half-assed version.

### Customization is Evil

Everything should work in their default state. 

The default actions should be the most sensible actions.

Any configuration or customization you provide is an extra mental overload. 

> **Don’t Customize; Optimize**
>
> If you need to add a configuration option; make absolutely sure that it is worth it.
>
> An example might be adding a switch for a high-contrast theme for accessibility purposes.

### No Custom Context

The current contexts that **JediFocus** has are detailed below. — Those contexts are more than adequate to manage one’s goals. 

Adding an extra context forces the user to remember that context; it also forces to user to check that context every once in a while. — Those are extra decisions that the user is better off not making.

See the following guideline:

### Reduce the Number of Decisions the User Makes

The less decision you make managing your goals; the more efficient you will be.

**Don’t let the user think**.

Decision fatigue is **bad**. — Don’t lure the user into it.

## User Interface Behavior and Limitations

Based on the above guidelines here is a list of what the user interface will and will not do:

### Goals auto-sort themselves

The premise is, if you are working on something it should be important.

So any goal that you move, edit, or create goes on **top** of its column. All the other goals shift one place down.

There is no way to sort the goals manually.

> If you need to sort or group items; then it means that there are too many items that you are dealing with. — In that case you need to sort your **priorities**; *not* your goals.

### Goals Age

Any goal that stay in “**to do**” or “**best intentions**” of **Runway** for **more than two weeks** bounce back to **Backlog**.

This is an auto-sanitization rule to keep the Runway always clean.

// More to come…
//
// Or maybe merge these to the above guidelines if there’s not much to add to here.
