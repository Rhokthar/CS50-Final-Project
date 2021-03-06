# Simone Molino's Portfolio Website-Application
### Video Demo:  <https://www.youtube.com/watch?v=GsV_TAXoX3Y&ab_channel=SimoneMolino>

### Description:
#### Overall:
My Harvard CS50's Final Project is a Portfolio Website-Application.
The purpose of that was to make a project that we needed. Well, that's why I've chosen to build a Portfolio Website: I needed one very much.

The project is structured with a Back-End part made with Python and the Flask's framework, and a Front-End part made with HTML, CSS, JS and some frameworks, like Bootstrap and GSAP.

There are some UX settings, such as Language or Theme Selection, that will be stored locally just for not asking the user to choose them every time he visits the Website.

#### First Visit:
When a new user lands on the website, it will prompt him a Language Selection page, where he can choose the language he preferes between Italian or English (I'm an italian guy, so I had to make the
italian version).

Once the language has been choosen, the choice will be stored locally with a script, and won't change until the user decides so by clicking on a link in the footer of any of the next pages.

#### Site Structure:
The website is based on 5 Main Pages and 2 Extra Pages.
Main Pages are: Home, About Me, Projects, Skills and Contacts.

The main difference between Main Pages and Extra Pages is that Main Pages can be accessed via nav-bar or sections, while Extra Pages are prompted if something happens.
Indeed, Extra Pages are a "work-in-progress" page for sections that I'm currently working on - such the Password Manager App page - and the "Mail Sends Success" page, that will be prompted only if the mail has been sent correctly.

Every Page is going to wait for the content to load with a loading screen.

Every Main Page is built upon a layout structure, where are defined the main rules for the structure of the pages. It also contains Header section, Menu Mobile section, Switch Theme Button and Footer section.

In the Header section, we'll see a navigation bar to access the other pages and a Switch Theme Button, which can be used by the user to choose the preferred theme between a Light-Theme version or a Dark-Theme version.

In the Footer section, you can see two links to choose the language and three social icons to see my profiles in those social networks. By choosing the language, the language choice picked in the landing page the first time the user visited the website, will be overwritten and will remain the same until a next change. Every other page will be displayed in that choosen language.

If the theme will be changed via Switch Theme Button, the choice is going to be saved locally, so the preference won't change even if the user closes the browser.
The Switch Theme Button, when the window's width shrinks, is going to be inside the Mobile Menu, wich will appear in the top right corner of the pages.

Every Main Page, except for the Home Page, has a top-left icon semi-visible that can be clicked to go back to the Home Page directly.

Every page, both Main or Extra, is fully responsive, so every device can display the Website correctly.

#### Home Page:
The Home Page is just a reassure for every other page. If you don't have time to read the other pages and want to know me a little bit, you can just read the informations that are in the Home Page.
Is structured in four sections:
    - Home: the hero of the page.
    - About Me: anagraphic informations and a short description of myself.
    - Projects: three projects will be displayed there. The first is a class project, the second is a personal project and the third is a professional project.
    - Contacts: schematic informations to contact me, and a map that shows the little town where I live, embedded with the Google Maps API.

Each of those sections, Home excluded, has links to the full page, where the user can find more informations.

The Home Page has also a left nav-bar, which can be used to access its sections really quickly.

#### About Me:
The About Me Page is just a description page, where you can find a brief story of my life until now and a recap of curiosities.

There are also two carousels made with JS, just for fun.

#### Projects:
The Projects Page contains, and will contain, all the projects that I've been working and I will work on.

A disclaimer says that all the projects actually displayed are made for course purpose, but that will change soon when I'll load real projects to the page.

Each of the projects displayed has an illustrative image and a description for what that program does. They also redirect to the code of the project or to the actual application, it depends on the project.

#### Skills:
The Skills Page has a recap of what I'm capable of. 
It has an overview of which programming language I know and how much I know about it.

The Skills Page has also a Soft Skills section and a Secondary Skill sections, where I've listed what I know.

At the end of the page, there is also a section where I've listed what I've planned to study and other CS related stuff that I'm interested in learning about.

#### Contacts:
The Contacts Page has a form where the user can contact me via e-mail.

The form is handled both via JS and Back-End Python Application.

JavaScript just does a check for the input fields value to be valid.
The Name field must be at least 2 characters long.
The Surname field must be at least 2 characters long.
The E-Mail field must match a RegEX which check if an E-Mail is valid or not.
The More Information field must be at least 50 characters long.

The Back-End Python Application does two things:
    - Check if input fields have been bypassed, so it makes another check on the input that the user gave.
    - Handles the mail construction and sends it to my personal e-mail.

If the E-Mail won't be sent, an error message will be displayed in the same page.
If the E-Mail will be sent, the user will be redirected to the Extra Page that says that the e-mail has been correctly send. In this page, a script will redirect the user to the Home Page automatically after 5 seconds, or he can click on the link to go back manually.

#### Extra Features soon implemented:
In the top navigation bar, a deactivated link can be seen.
Is the Blog Page link, which I haven't implemented yet.
That's because for now I don't know what to actually write in this Blog, so I've decided to wait a bit and to implement it a bit further in time.

When projects will be too many to display in column, I'll make a grid of them. There's no reason to do that right now, because the projects I've made are not so many. Also, minor projects will be erased once major projects will come.

### Project Structure
Files projects are organized in specific folders.
The root folder, the "project" one, contains two main sub-folders:
    - Static: contains CSS files, JS files and Images.
    - Templates: contains HTML files.

There are also 2 more sub-folders in the project root:
    - __pycache__: contains temporary files of the application.
    - venv: contains other files for the virtual environment.

Also, the project root has the "app.py" Python application and the README.md file, that you're looking at right now.

#### Templates
The Templates folder contains all the HTML files organized in sub-folders.
The root of the Templates folder contains the "index.html" page and the "layout-landing.html" file.

The "index.html" page is the landing page provided to the user the first time he visits my Portfolio Website-Application.
It is built upon the "layout-landing.html" file, that gives it the structure.

The "layout-landing.html" file just give the structure to the "index.html" page. Is the one who has the "html" root tag.

##### Templates Sub-folders
The Templates folder has two sub-folders:
    - en: contains HTML files for the English Version of the Portfolio Website-Application.
    - it: contains HTML files for the Italian Version of the Portfolio Website-Application.

Inside those sub-folders, you can find a "layout.html" file that gives the other pages contained in the subfolder the structure. You will also find all the pages, both Main and Extra ones.
Obviously, in the "en" subfolder, the "layout.html" file will be in english, while in the "it" subfolder it will be in italian.

Every other page will have the content translated in both english or italian, depending on which sub-folder is selected.

#### Static
The Static folder contains all the CSS files, JavaScript files and Images, organized in sub-folders.
The Static folder itself doesn't contain any file, except for three sub-folders:
    - css: contains CSS files.
    - imgs: contains Images files.
    - js: contains JavaScript files.

##### Static Sub-folders
The "css" subfolder of the Static folder has been organized to have other subfolders. Each of its subfolders is named according to the name of the page to which the CSS of that particular subfolder will be applied. For example, the "about-me-css" subfolder will contain the CSS rules for the About Me Page; the "index-css" will contain the CSS rules that will be applied to the Home Page, and so on.

The "css" subfolder contains, also, a "layout-css" subfolder. In that one, there are all the main css files, such as "main-layout.css" that contains main rules for the layouts.

"main-rules.css" is a CSS file that contains a small framework built by me to better implement my ideas.
"resize.css" is a CSS file that contains @media queries for the responsiveness side of the Portfolio Website-Application.
"keyframes.css" is a CSS file that contains some @keyframes for CSS animations. Some of those are resized in the "resize.css" when necessary.

Similarly to the "css" subfolder, the "imgs" and "js" subfolders have been organized with subfolders. Each of their subfolders is named according to the name of the page to wich the files of that particular subfolders will be applied. 

In the "imgs" subfolder, for example, you can find the "index-imgs" subfolder, which contains images used in the Home Page; you can find the "about-me-imgs" subfolder, which contains images used in the About Me Page, and so on. 

The "other" subfolders found in the "imgs" and "js" subfolders, contains files applied to the Extra Pages.

