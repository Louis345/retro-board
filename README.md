See, I created a new GitHub Repo


So, you want to understand my code.

Firstly, take a look at the app.js page. That is essentially the heart of my code.
It encompasses all of the javascript mechanisms, and is central to how the app works. 


I begin by importing all of the necessary packages from other parts of my code, react, and images that
I don't end up using. 

Then, I set up an array of objects: these are going to be card objects, the very basis of my code. 
They are an array of the cards values and id's that I use to properly display everything the user
wants to be displayed. There are some starting ones to be used as stock examples. 

Next, I set up the variable html portion of my code. Notice that it is wrapped in a function. This is so I can
call the function in the render later on. The function's perpose is to prevent hard coding, and allow for
the flexibility necessary for this project. The function loops through the array of card objects, and 
for each one that matches the category given to the function call, it displays that card in the given category.

After that, I set up my state, which consists of the last ID used in the array of objects, so that the program
can properly assign the ID of whatever card the user wants to add. It also includes the array of cards, so that I can 
change the array, delete from it, and add to it without hard coding, and so that anything the user adds to it or 
takes away from it is reflected in the app.

Next, I set up the various functions needed to do the things the app is supposed to do, like add a new card, delete 
a card, move cards between categories, and add likes or dislikes to a card. 

The first function is the moveRight function. It's job is to take whatever card it was clicked on, and switches the 
given category to the one to the right of it. If it is all the way to the right, in the "Action Points" category, it
doesn't change anything. To do this, the function puts the cards array through a .map, so that it can loop through and 
target only the card that the move button was clicked on. It uses an if statement to check this. It then uses an 
if/if else/else series of statements to decipher what category it is currently in, and appropriately change the category
to the one to the right of it. It then returns the changed card to state, and render is called again to reload the positions 
of the cards. 

The second function is the moveLeft function. It is identical to the moveRight function, except it moves the card selected
to the category to the left. 

The third function is the delete function. It's job is to remove whatever card was clicked on from the card object array. 
It does this very simply. It uses setState to change the state of the array, and uses a .filter to loop through the array
return only the cards that were not clicked on. 

The fourth function is the addItem function. It's job is to add a new card object to the array based on what category it 
was clicked in. It starts by creating a new object, the "newCard" object, and setting the text to a stock text to be changed
by the user later, the category to the category the button was clicked in, and the id to be one higher than the last ID of the
state. It then sets state to include the newest card and to increment the last ID value by 1 to account for the new card.

The fifth function is the like function. It's job is to increment the likes value of the targeted card object in the array. 
To do this, it loops through the array using a .map, and targets the card that the button was clicked on. It then increments
the likes value of that card object, sets the state to reflect the new likes value, and returns the card to the state. 

The sixth and final function is the dislike function. It is the same as the like function, but it increments the dislike value
of the desired card object. 

Finally, the render section returns a set of html to set up the basics of the page, and call the html function for each category. I assign the desired category, it's title, and all of the functions to be used in the category. 