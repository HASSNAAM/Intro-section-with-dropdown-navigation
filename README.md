# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop Design](./design/desktop-design.jpg)
![Mobile Design](./design/mobile-design.jpg)

### Links

- Solution URL: [Solution URL](https://github.com/HASSNAAM/Intro-section-with-dropdown-navigation.git)
- Live Site URL: [Live site URL](https://website-page-two.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [JavaScript](https://www.javascript.com/) - For interactivity

### What I learned

During this project, I learned how to create responsive dropdown navigation menus using HTML, CSS, and JavaScript. I also reinforced my understanding of mobile-first design principles and learned how to manage different layout needs for desktop and mobile views.

Here's a code snippet that I'm particularly proud of:

```html
<nav>
  <ul>
    <li class="desktop" id="features" style="position: relative;">
      <a href="#">Features <img src="images/icon-arrow-down.svg"></a>
      <div class="features hidden">
        <ul>
          <li><a href="#"><img src="images/icon-todo.svg" alt="To Do"> Todo List</a></li>
          <li><a href="#"><img src="images/icon-calendar.svg" alt="Calendar"> Calendar</a></li>
          <li><a href="#"><img src="images/icon-reminders.svg" alt="Reminders"> Reminders</a></li>
          <li><a href="#"><img src="images/icon-planning.svg" alt="Planning"> Planning</a></li>
        </ul>
      </div>
    </li>
  </ul>
</nav>
```
### Continued development

In future projects, I want to continue improving my skills in:

- Advanced CSS techniques, such as animations and transitions
- JavaScript frameworks and libraries, like React or Vue.js
- Ensuring accessibility in all projects

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - A great resource for HTML, CSS, and JavaScript documentation.
- [CSS Tricks](https://css-tricks.com/) - Helpful for understanding CSS and responsive design techniques.
- [Frontend Mentor](https://www.frontendmentor.io/) - Provides great challenges to practice front-end development skills.

## Author

- Github - [Hassnaa Mahmoud](https://github.com/HASSNAAM)
- Frontend Mentor - [@HASSNAAM](https://www.frontendmentor.io/profile/HASSNAAM)

## Acknowledgments

I would like to thank the Frontend Mentor community for their support and feedback. Special thanks to anyone who reviewed my solution and provided constructive feedback.
