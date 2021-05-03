Background
----------

JSproject is a 2D dungeon crawler game, where the player controls a character through a dungeon to discover new skills that will help them throughout their exploration. Players can unlock new weapons, skills, and hearts to increase their maximum health. 

Functionality & MVP
-------------------

Players will be able to:

* Start, pause, restart, and exit the game.
* Move their character using either the W,S,A,D or Arrow keys
* Fire their weapon of choice or use their skills with spacebar
* Switch betweeen 2 different types of weapon
* Switch between difficulties
* The game will include instructions in the options menu

Wireframe
---------
![alt text](https://github.com/Junghyun2006/JSArcher/blob/main/src/images/WireFrame.png)

Architecture and Technology
-----------------
Technologies used:
  * Javascript for the game logic
  * Canvas for implementing player movement, monster movement, and projectile movement
  * HTML and CSS for design
  
Architecture:
  * game.js will hold all aspects of the game and game logic
  * player.js handles all player based logic including control and player animations
  * weapons.js handles the logic behind all weapons
  * monster.js handles the logic behind all the unique monsters and boss including their movement and skills
  * skill.js handles the logic behind all the skills obtained by the player


Timeline
--------
Day 1: Setup webpack and make sure the game is able to render on the browser
  * Make sure the characeter, ui, and dungeon renders on canvas
  * Research how to randomize monster placement and movement
  * Research how to incorporate various types of projectiles into the game
  
Day 2: Build controls and incorporate character movement with user input & Monster movement 
  * make sure the character responds to user input 
  * ensure character movement speed varies based on different velocity
  * randomize monster movement and make sure they deal damage to the player if they come in contact
  
Day 3: Build the logic behind skills and weapons & finalize game logic
  * incorporate various weapons and make sure their projectiles are working as intended
  * incorporate various skills and make sure they are working as intended
  * make sure monsters are dealt damage when they come in contact with the projectile
  * finalize the game logic to ensure all the moving parts work together as intended. 
  
Day 4: Css and styling
  * style the character, monsters, and dungeons to be fliud and presentable.
