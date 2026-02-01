# Week 09 assignment

## Neon Game Reviews Version 3 (Added social features with logins)

### Requirements

    ✅ Set up user sign-up and user login using Clerk.
    ✅ Create and display an error/not found page if the user visits a page that doesn’t exist.
    ✅ Use 1 or more Radix UI Primitive component, or something similar (e.g. use of a different component library to enhance UX, not just Tailwind).
    ✅ Enable users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information should be stored in their own table in the database and handled with an appropriate route.
    ✅ Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.

## Premise of this project

This project - akin to the past two weeks, was to build a game review website and community. This version (version 3) included social features and logins, which is a significant expansion over the past weeks where I had no member persistency (viewers could simply submit reviews without needing to register, meaning the user can spoof any author name).

I unfortunately didn't get the time in order to link the reviews with member accounts ... BUT I did manage to get members to share blerbs (posts) on what they were feeling, and keep track of who made the post and such, which is found on the /main (timeline) route.

In a real world scenario for a site such as this, I would never restrict unregistered users from basic 'read Only' access of the site, but in this assignment I did that for the purposes of the requirements.

## Hickups

1. On friday, I planned to continue working on this assignment at my partner's house, only to realize that when pushing my changes to the github repo my environment variables file (.env) gets firmly .gitignored by design, I managed to do some work on it while at my partner's house but wasn't able to test and debug it due to the lack of the environment vars to access the backend.

2. While I wouldn't call it another hickup, but this week I had a bad cold so it made focusing on this assignment just a bit harder than it needed to be. I've come to realize that's lead to increased typos names which kept me stuck trying to debug problems for a day or two from thursday (thanks to the help of others for managing to spot what the typos were with eagle eyes, haha).

## Technical challenges

I had bigger aspirations of what I wanted to do with this website but had to tone them down due to time constraints. I wanted to have the TIMELINE show the most recent reviews made on games, describing what game they were referencing, who wrote them and the content, there were some challenges to this when it came to .mapping the individual results to the corresponding game (the same issue would've been relevant to the account_target foreign key to indicate who wrote the review, as members are on a separate table).

If this were a real site and I managed to fulfil the entirety of my plans for this - I would also intergrate alot more features per game page. I would feature curated community trivia under the game synopsis, links, where to buy/obtain the game, links to the game's relevant third party communities and modding news per game. I would also have put much more thought into the design, responsivity and splice the design intertwined with more skeumorphistic traits reflecting a neon light dominated backdrop.

## Thanks for reading!
