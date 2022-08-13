# Robot Gladiators

## Description
Week 3 | Project
An MVP (minimal viable product) browser-based video game created within a 24 hour deadline. Robot Gladiators is a combat simulator. During the game, players coach their robot through a series of fights-gaining cash, attack power, and repairs along the way. The robot that survives with the most cash will be remembered in the browser's storage system.

## Table of Contents
* [Usage](#usage)
* [Links](#links)
* [Tools](#tools)
* [Credits](#credits)
* [Challenge Guidelines](#challenge-guidelines)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Mock Up](#Mock-Up)
* [Steps](#Steps)
* [Technical Acceptance Criteria](#Technical-Acceptance-Criteria)
* [Deployment](#Deployment)
* [Application Quality](#Application-Quality)
* [Repository Quality](#Repository-Quality)
* [Submission](#Submission)

## Usage
Personal Entertainment
[Mock Up Screenshot](/assets/images/mock-up.png)

## Links
### Links that Helped me along the way:
* [javascriptbook](https://javascriptbook.com/code/) 
* [W3Schools - JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)
* [W3Schools - JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)

## Tools
* HTML
* CSS
* JavaScript

## Credits
GitHub: [Brian Lockhart](https://github.com/bslockhart)

### Challenge Guidelines
Create an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. 

### Game Sequence
1. The game will prompt the player to name their robot.
2. The player's robot will be initialized with the following properties:
* 100 health points
* 10 attack points
* 10 money points
3. The player's opponent, Roborto, will be initialized with the following properties:
* 50 health points
* 12 attack points
4. The game will display "Welcome to Robot Gladiators!"
5. The game will prompt the player to either fight the round or skip it.
6. If the player chooses to skip:
* A penalty of 10 money points will be deducted from the player's robot.
* The game will end.
7. If the player chooses to fight:
* The player's robot will attack Roborto, and the player-robot's attack points will be deducted from Roborto's health points.
* The game will display Roborto's remaining health points.
* Roborto will attack the player's robot, and Roberto's attack points will be deducted from the player's robot's health points.
* The game will display the player-robot's remaining health points.
8. The game will end.

### Acceptance Criteria:
* The game must be created by a single developer in 24 hours.
* The game must run in a web browser.
* The game must use the provided index.html file.
* Only the title element of index.html may be changed.
* Participants cannot use CSS.
* All game code must be contained in the game.js JavaScript file.
* Extra points will be given for high-quality code.

## Mock Up
The following mock up image shows required display:
![Mock Up](/images/mock-up.png)

### Steps:
1. Set up the project in GitHub. We'll create a new GitHub repository, issues, and branches. These are the basic steps for any new project.
2. Create the project files and structure. We'll set up the index.html and game.js file structure according to the Con Solo instructions.
3. Use JavaScript functions to display the game status to the player. JavaScript has some built-in functions that do this, and we'll also create our own functions to control when these messages appear.
4. Use JavaScript variables and operators to manage game data. We'll do a little math to keep track of robot health, player money, and other game values.
5. Make decisions using JavaScript conditions. For example, the game should allow a robot to fight if it still has health points, but not if its health points reach 0.
6. Allow the player to decide whether they would like to fight or skip the fight.

### Technical Acceptance Criteria
* Satisfies all of the acceptance criteria.

### Deployment
* Application deployed at live URL.
* Application loads with no errors.
* Application GitHub URL submitted.
* GitHub repository contains application code.

### Application Quality
* Application user experience is intuitive and easy to navigate.
* Application user interface style is clean and polished.
* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains quality readme with description, screenshot, link to deployed application.

### Submission
* Date Submitted: August #, 2022
* The URL of the deployed application: https://bslockhart.github.io/robot-gladiators/
* The URL of the GitHub repository that contains your code: https://github.com/bslockhart/robot-gladiators
Give the repository a unique name and include a README file that describes the project.