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

If you have too many cards; you probably have too much on your plate and you need to discipline yourself.
 
The best way to do it is to move some of your items that you cannot timeley to the backlog.

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
