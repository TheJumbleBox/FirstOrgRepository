/*
BASICS

var questions = 2;

var questionsLeft = '[' + questions + 'questions left]';
var thing = prompt('What is your favorite aniaml?' + questionsLeft);
questions -= 1;
var feeling = prompt('How do you feel about the the ' + thing + '?' + '[' + questions + 'questions left]');
*/

/*
var sentence = "<p>When I first saw my favorite aniaml the </p>" + thing;
sentence += "<p> I felt so </p>" + feeling + "<p> by the </p>" + thing;
sentence += "<p> . It seemed like it just knew so much more about life than the people watching it.</p>";
alert('Thank you for telling me how you felt about the ' + thing + '!');
document.write(sentence);
*/

/*
var inchespermeter = 39.37;
var metersperyard = 0.91;
var yardspermile = 1760;
var milesperkilometer = 0.62;
*/

/*
 var kilometersperlightyear =  9460528405000;

 var inchesinalightyear = inchespermeter * metersperyard * yardspermile * milesperkilometer * milesperkilometer;
 document.write(inchesinalightyear);


 var coastalCities = prompt('How many cities have you lived in on the coast?');
 var inlandCities = prompt('How many cities have you lived in not on the coast?');

 var totalCities = parseInt(coastalCities) + parseInt(inlandCities);
 alert('You have lived in a total of ' + totalCities + ' cities!');
 */




/*
 var usernumber = prompt('Give me a number between one and twn.');
 var confertednumber = parseInt(usernumber);
 var combined = Math.floor(Math.random() * confertednumber) + 1;
 alert('the randmly generted number is ' + combined + '!');
 */




/*
IF ELSE STATEMENTS & ELSE IF STATEMENTS

 var input = prompt('What month were you born in?');
 if (input === 'April') {
 alert('You are an Aries!');
 } else {
 alert('You are not an Aries!');
 }


 var randomNumber = Math.floor(Math.random() * 6 ) + 1;
 var guess = prompt('I am thinking of a number between one and ten, take a guess?');
 if (parseInt(guess) === randomNumber) { //You do not need to "math floor" here. You are already doing that on the first line!
 alert('You got the number right!');
 } else {
 alert('Sorry, but I was thinking of ' + randomNumber +'.');
 }



 var zodiac = {january: 'Aries', february: 'Taurus', .... };
 var userInput = prompt('In what month, were you born?');
 userinput = userInput.toLowerCase();
 if(userInput in zodiac)
 {
 alert('You are a ' + zodiac[userInput]  + '!');
 }
 else
 {
 alert("Month not found");
 }
 can assign variables through if, if else statements.



 if you want to have an if inside an if inside an if and so on you must have it written with "else if's", like so.
 if () {
 } else if () {
 } else if () {
 } else if () {
 } else {
 }
 */





/*
&& "and or" ||

 The two && mean if inputOne is equal to april AND inputTwo is equal to 9, then its true. If just one is false then the && is false.
 var inputOne = prompt ('Enter what you think the month I was born in was.');
 var inputTwo = prompt ('Enter what you think the day I was born on is.');

 if (inputOne.toLowerCase() === 'april' && parseInt(inputTwo) === 9 ) {
 alert('You got them both right!');
 } else {
 alert('Sorry but that was wrong!');
 }

 The || means OR. So We are seeing if the input is equal to countryOne OR countryTwo.

 var countryOne = 'united states';
 var countryTwo = 'china';
 var bothcountriesOne = 'united states china';
 var bothcountriesTwo = 'china united states'

 var input = prompt('Name any of the three listed countries that have a desert. United States, China, and the UK');

 if (input.toLowerCase() === countryOne || input.toLowerCase() === countryTwo || input.toLowerCase() === bothcountriesOne || input.toLowerCase() === bothcountriesTwo) {
 alert('Correct!');
 } else {
 alert('Incorrect.');
 }
 */






/*
MAKING A FUNCTION AN EXPRESSION

 Below is my finding out on my own that you can make a variable contain a function! This is called a function expression!

 function testone() {
 var randomNumber = Math.floor( Math.random() * 6 ) + 1;
 alert(randomNumber);
 }

 var testoneA = testone();

 return testoneA;


 OR


 var testoneA = function () {
 var randomNumber = Math.floor( Math.random() * 6 ) + 1;
 alert(randomNumber);
 }

 testoneA();
 Then you could think of this function expression like a veriable, opening up a whole new world of opportunities in coding!
 Make sure you are being smart with the "design" of your functions. You can make a function with a built in return, so everytime you "call:
 - the function it will return what you requested, this is just an example. Instead of return you could asign a vertiable, or document.write.
 You could even get really deep and mess with else if states in functions! The sky is the limity! Just make sure its clean and comprendhendable
 for you later on down the road or the next guy who may need to access it.


 Below is a way of giving the egg, bacon the values of 6 and 2.
 function one(egg, bacon, info) {
 var proteintotal = egg + bacon + info;
 return proteintotal;
 }
 document.write(one(6, 2, ' Grams of protein total!' ));
 */







/*
LOOPS

 WHILE LOOP


 var secret;
 while (secret !== 'sesame') {
 secret = prompt("What is the secret password?")
 }
 document.write("You know the secret password. Welcome.");




 so THIS is use for COMPLETELY different situations than the while loop.
 You use it like this

 do {
 this would contain code to pop up something
 } while (this would contain a condition stating what they entered has to be, so like an email or something)
 If what they entered is not an email, then this will "recall" the original do section.
 If they did enter an email, whatever is after the "do while loop" will run.
 The "do while" loop gets it name from do {this} while (taking this into consideration for the do). So the do
 while loop is mainly for prompts. It is meant to pop something up with the "do" section of code and then confirm what was
 enter to be what is instructed to only be entered with the "while" section of code.



 DO WHILE LOOP

 var secret;

 do {
 secret = prompt("What is the secret password?");
 }while(secret !== "sesame")

 document.write("You know the secret password. Welcome.");


//always use i, never use the actual name, even though you can. It is just not good coding to do so.
 FOR LOOP
 for ( var i = [starts.at]; i <= [increments.to]; i += [increments.by] )
 for ( var i = 1; i <= 10; i += 1 ) {
 alert(i);
 }
*/

/*
 Another way to end a infinite loop is to use a "break;" statement, in your loop
 Here is an example of using a "break;" statement, to break out of an infinite "while" loop.

while (true) {
    answer = prompt('What do you think my name is?');
    if (answer.toLowerCase() === 'seth') {
        alert('You guessed my name, dont wear it out!');
        break;

    }
}
 Here is another example of how you could use a "break;" statement, any only this time we will be breaking out of a "do while" loop.


 do {
 answer = prompt('Can you guess what my name is?');

 } while (answer.toLowerCase !== 'seth')

 */




/* This is the "WHILE" loop
var counter = 0;
while (counter < 10){
    console.logcounter);
    counter += 1;
}


This is the "FOR" loop  //i should always be used in the contion, this is just an example of what i is standing for.
for (var counter = 0; counter < 100; counter += 1) {
    console.log(counter);
}


This is the "DO WHILE" loop
var counter = 0;
do {
    console.log(counter);
    counter += 1;
} while (counter < 100)
*/




/*
ARRAYS

var data = [
    3,
    4,
    6
];

 AND OR
var assorted = [
     4,
    'word',
     true
];
 They have hold integers, strings, and or booleans.

In order to "target" / "call" / "use" a certain value within an array, you must simply use the arrays variable name,
followed by the needed values index position within the array, like so. Keep in mind that the index is a zero based index, thus meaning
1 is 2, 3 is 4, 5 is six and so on.

var arrayone = [
   'cat',
   true,
   9
];

if (arrayone[0] === 'cat') {
console.log('Yes, the 0 based index position is indeed equal to the pattern cat');

}

OR

 if (arrayone['cat'] === 'cat')
 PERSON QUESTION - Cant you use .length on an array varbile, and have it return the amount of values within the array? YES, you can.





 ADDING VALUES TO AN ARRAY

 var arrayname = [
     'dog',
     'cat',
     'fish'

];

arrayname.push('lizard', 'bird', 'genie pig');

NOTE this will add the values at the end of the array.


arrayname.unshift('cow', 'manatee', 'elk');

NOTE this will add the vales at the beginning of the array.




var arrayone = [];

arrayone.push('this string will be imputed into the end of arrayone');
arrayone.unshift('this string will be imputed into the beginning of arrayone');




REMOVING VALUES FROM AN ARRAY

arrayone.pop(); This will remove the "last" value off the array named arrayone, and it will return that value as well.
arrayone.shift(); This will remove the "first" value off the array named arrayone, and it will return that value as well.

The ".push" and ".shift" methods are used "together" a lot. They are refereed to as "fefo".

var blah = poop.pop(); This will take the last value away from the poop array and add it to the blah array.
var jibberJabbger = poop.shift(); This will take the first value from the poop array and add it to the jibberJabber array.


*/


/*
Using an Array with a for loop
We have "arrayName < 4" set so it runs just enough times to run each value, without running the first one twice.
That being said, if we have 8 values inside the array, we want to make sure we run each value through the function, so we change the loop process to "arrayName < 8".
That also being said, instead of just typing the number of values inside the function, each time we update the array, we can just put "arrayName < arrayName.length".


var arrayName = [
    '[valueone]',
    '[valuetwo]',
    '[valuethree'
];

for  (arrayName = 0; arrayName < 4; arrayName += 1) {

document.write(arrayName);

}
*/




/*
Now we will pass an Array to a string with the .join(); method. Then we will concat both strings together from separate arrays.
This will display them both as a single array. Which every array is is the concat([here]);, Will be attached, and not having one attached to it.
So its values will come after the array it is attached it.


var arrayOne = [
    '[valueone]',
    '[valuetwo]',
    '[valuethree]',
    '[valuefour]',
    '[valuefive]'
];

var arrayOneString = arrayOne.join(',');

var arrayTwo  = [
    '[valueonee]',
    '[valuetwoo]',
    '[valuethreee]',
    '[valuefourr]'

];

var arrayTwoString = arrayTwo.join(',');

var bothArrays = arrayOneString.concat(arrayTwoString);

console.log(bothArrays);

*/


/*
Searching an array for a value's index number by its value name.
The console will have printed whatever the index number is assigned to the value you searched for via its pattern, its name.

var indexNumber = arrayName.indexOf(['the.value.you.are.searching.for]');

console.log(indexNumber);

*/

/*
You can even put an "Array inside an Array". These are called Two dimensional Arrays. You may have an array contain many arrays!
Just wrap each array, inside of the array, in their very own array [], like a normal array, and separate them each with ,.
Just as you would with values, so these arrrays ARE INDEED values.
Now in order to get an idea how the indexing works with multi dimensional arrays, you would target values by there arrays index number,
then the values index number inside that array. So lets say you wanted to target "array.two.value.two". Its index would be "1,1".
Remember it is still a zero based index!

var arrayName = [
['array.one.value.one', 'array.one.value.two', 'array.one.value.three'],
['array.two.value.one', 'array.two.value.two', 'array.two.value.three'],
['array.three.value.one', 'array.three.value.two', 'array.three.value.three']

];

 */




/*
document.write(); is the Legacy Code for the new way of writing to the view, called "Document Object Model", refereed to as "D.O.M."!
the DOM is the browsers model of the page, how it sees and displays all the html tags in a document.
Using javascript, you use the browsers to talk to the DOM, adding, removing, editing content right onto the page.
Now that "document.write();" is considered legacy code, its time to start using whats relevant to this Era.
And that is listed below as "document.getElementById();".
What is going on here is that we are selecting a section oh html code, in the html file this javascript file is "src'ed" to, and working with
it in our javascript file, with the "document.getElementById();" tag, by  specifying the name of the id, from the html file, in the "document.getElementById();"
method. So instead of writing your code onto the view the old fashion way of document.write('Hello World! My name is etc..'); You literally write whats in your
html file instead.

_____in the javascript_____

document.getElementById('helloWorld');

_____in the html file_____

<div id="helloWorld">
<h2> Hello world! </h2>
<p> My name is Seth, I am a young programmer, learning to code so I can produce my own business! </p>
</div>

 */


/*
An Object contains "properties" & "methods". It could contain booleans, functions, arrays, and so on.
A property is "like" a variable that belongs to the object and a method is what is can do or what can be "done"
to the object.
The value can be a string, number, boolean and or an array. Here's a good way to look at it.
Just as the multidimensional array holds multiple arrays, an object holds multiple
variables, the "Key" is like the variable name, but don't get them confused, just as schema to frameworks!
Objects let you stay data in the form of "Key" value pairs or "property" value pairs, they are on in the same.
Each value is separated with a a coma, just like in an array. When you come to the end of values for any given key
make sure you end it with a coma. If you do not, the key will treat all code underneath it as a value.
To make an object, write out what would be the beginning of an array, and instead of using the [], use the {} instead.
You name this object just as you would a variable or an array, like so.

var objectName = {
  keyName: "value", "valueTwo",
  keyNameTwo: true,
  KeyNameThree: ['Hank', 'Sally'],
  KeyNameFour: 3,


};

Here is an example of how to access, change, or create an objects values.
Its simply the objects name followed by the value you wish to create, access, or edit.
In order to edit a value you need to use and equal sign! So it would be like this

objectName.valueName = whatever you want to change the value to


Here is an example of how you can use a object value in a sentence.
var hello = "<p>Here their " + objectOne.nameValue + '</p>';


You can even add .length to the end of a value that is being accessed by a object name like so
objectOne.valueOne.length


 */

/*
A "For In" loop is only usable with objects.
The for in loop will simply loop through each of the specified properties associated with objectName. It is storing these properties within a  variable named "associatedName".
The console.log(objectName[associatedName]); is printing each of the properties to the console. Note, you can not use dot notation in the for in loop. You must
use [].
So we are simply making calling the variable associatedName, since associatedName holds the properties from object name, we are printing those properties to the
console.log();.

for (var associatedName in objectName) {
console.log(objectName[associatedName]);

}

In order to select certain values in the properties being called, do the following.

 for (var associatedName in objectName) {
 console.log(objectName[associatedName]);

 }

A good thing to practice would be to make as clear as possible what values belong to which properties, visually that is, like so.


for (var associatedName in objectName) {
alert(associatedName, ': ', objectName[associatedName]);

The , ': ' is simply giving each a : and space between each of the properties and their values displayed this way, this is simple cosmetic.
The [] are what is calling the values and the associatedName before the [] is just printing the property name.

 */

/*
Array containing objects. Just like a Multidimensional array can contain arrays, you simply change the [] for each individual array inside to {}, like so.

var arrayOfObjects = [
{keyOnee: 'valueOne, keyNameTwo: 'valueTwo'},
{keyThree: 'valueThree', keyFour: 'valueFour'}

];

 */





/*
Javasctipt Object Notation, also know as Json
Json is just a string. Json can be viewed in a cleaner format by using the safari Json extension, you have already downloaded it.

 */

/*
Refresher on array objects. Lets say you want to make profile in the form of a Javascript Object Notation, here's an example.

First have a js file that holds the data

 var sethsEducation = [
 {mainSkillSet: 'Php & MySQL', 'Javascript', 'Html & CSS'},
 {timeFrameOfCompletion: 'sixty days', 'forty days', 'thirty days'},
 {academicCurriculums: 'Team Treehouse', 'Team Treehouse', 'Codecadmey', 'Brent Ozar'},
 {extraSkillsObtained&Obtaining: 'Sass', 'Gulp', 'Elixir', 'Vue' 'Grunt', 'Bower', 'Composer', 'Home Brew', 'Git', 'Github', 'Virtual Box', 'Vagrant',
 'Laravel', 'Homestead', 'Compass', 'PhpStorm', 'WebStorm', 'MAMP', 'Asana', 'Screen Hero', 'UI design', 'UX design', 'Web Design', 'Jquery', 'Ajax', 'Indexing',
 'Sketch', 'Terminal', 'Restful Practice', 'MVC layouts', 'and Partial Coding'}

 ];

Then, in a separate file, write out the function that will spit the data to the screen, using the data from the other js. file. In order for this work you must put the <script src="file></script>, that holds the data, before the js file's <script src="file></script> that spits that data to the html file.

Use a "for" loop like so, to run through the data in the other js file, printing it to the html, view. Make sure you wrap your printed data in an html list, if you want the data in the form of an <ol>.
Note: you may not understand exactly how the function "print" works, until you take the Ajax and Jquery courses.

var message = '';
var curriculum;

 function print(message) {
 var outputDiv = document.getElementById('output');
 outputDive.innerHTML = message;

 }

 for (i = 0; i < sethsEducation.length; i += 1;) {
      curriculum = sethsEducation[i];
      message +='<h2>Major Skills:' + curriculum.mainSkillSet + '</h2>';
      message +='<p>Academic Time Frame:' + curriculum.timeFrameOfCompletion + '<p>';
      message +='<p>Institutions:' + curriculum.academicCurriculums + '</p>';
      message +='</p>Areas of specialty:' + curriculum.extraSkillsObtained&Obtaining + '</p>';
}

print(message);

//Remember that the, in this case background, is just a place holder for each key within the, in this case sethsEducation, object.


Refresher, if you create a variable inside a function, it is only available e inside that function, if you create a variable outside a function, this is called the "global scope", it can be accessed anywhere!
Refresher, if Javascript can not find a value being searched for in an array or object it will return a -1!

 */

/*
TIME FOR Jquery!!

 "Unobtrusive" is the theory of making the users experience as smooth as possible, regardless of the users browser, device or connection.
 Jquery is a collection of Javascript code, called a Javascript library.
 Just like with Javascript or CSS, you must attach the jquery to the html page, with a pair of opening and closing script tags.
 Lets say you have a html class named "warning". Jquery uses html "Selectors" to apply its functionality to html code.

 Within your jquery folder, that is attached to the html folder that has the Selector you want to manipulate,

 jquery(".[selectorname]");

 So in our case, the Selector we would like to add functionality to is named "warning", the jquery file would look like this.

 jquery(".warning");

 Note: Remember within CSS "Classes" are started with a "." and "Id's" are started with a "#".
 At this point we can start adding some functionality to the Selector, in the jquery file.
 Note: Using the docs for any language is always recommended. However for Jquery, since it is literally a library, using the docs is essential.
 Simply go to "api.jquery.com".
 As our teacher, Andrew from Team Treehouse is showing us, lets try and hide something. The Jquery docs are very intuitive, simply by typing in the
 word "hide" in the jquery search menu will bring back a vast array of "methods" we can "call"!
 The results the search menu brings back to us will show the method and a short description of its functionality, click on it to get more information, there are also examples of how the method can be used, towards the bottom of the page!

 Now, back to that example!

 jquery(".[selectorname]").methodname();

 In our case

 jquery(".warning").hide();

 This is simply applying the "hide" methods functionality to al the code inside the "warning" Selector.

 Another example of a jquery method would be the "show();" method.
 jquery(".warning").hide();
 jquery(".warning").show();
 This will hide and then show the code inside the "warning" Selector.

 When the html selector"warning"'s code is being shown from being hidden, it just blinks right back on the screen super fast without any case of "phasing"
 onto the screen slowly. So lets add a bit of a "special effect" and make it "slowly" appear to the screen. Simply add "slowly" to the inside of the "show"
 method, to get this effect, like so.

 jquery(".warning").show("slowly");
 Something very pleasing you can do to quicken your pace would be to replace the word "jquery", in front of every method, with the $ symbol, like so.

 $(".[Selectorname]").[methodname]();

 Along with the $, there is another way we can minimise the size of our code, and in a way it applies the "DRY" theory of coding as well. This way of typing out
 a small amount of code is called "method chaining". Method chaining is the act of "chaining" two methods together to a single Selector, like so.

 $(".[Selectorname]").[methodonename]().[methodtwoname]();

 In our case it would look look things.

 $(".warning").hide().show("slow");

 oppose to looking like this

 $(".warning").hide();
 $(".warning").show("slow");

Just as we were talking about "The DOM" back in Javascript, The DOM is what jquery manipulates to add its functionality.
Lets touch base on exactly what the "DOM" is. The DOM stands for "Document Object Model", this is literally just the html page that is being displayed.
For instance this is the DOM.

<!--DOCTYPE html>
<html>

<head>
    <h2></h2>
</head>

<body>
    <p></p>
    <p></p>
    <p></p>
</body>

</html>

Javascript can "manipulates" the DOM just as Jquery can, Here are a few examples as to how you can do this with Javascript and NOT Jquery.
Remember "document.getElement.ById();"? Here are some more examples.

document.head.children;
document.body.children;
document.getElementsByClassName("[name]");
document.getElementsByName("[name]");
document.getElementsByTagName("[name]");
document.getElementsByTagNameNS("[name]");

When you are using "document.head.children;" or "document.body.children;", with several possible Selectors inside, you can treat it as an array and use the [0]
to select which selector inside those tags you wish to manipulate, like so.

document.body.children[2];

Note: We would be selecting the 3rd <p> this way. The <h2>, <p>, <ol> and so on are all considered Selectors, just as they are in CSS. So if you wish to
Select the 4th paragraph in a body, you would use the following index number, it is a zero based index, meaning 1 is really 0.

document.body.children[5];

Note: When we had .children, that meant to display in the form of an array all of the selectors nested in the body element, or head, whichever one.
The whole point of this lesson on accessing the DOM is to show you that you can access very specific things in the DOM with Javascript.

If you decide to use a method that is self explaining what we are "getting", like "document.getElementByClassName();", you don't need to put a "." in front of
the actual class name, or if you are "getting an Id, you don't need to put a "#".

NOW enough with the Javascript way of accessing the DOM, lets get back to Jquery!

Using some Jquery "DOM Manipulation Methods" you can manipulate the DOM by "adding" them or "removing" them, "updating", and "reading" attributes(their content) and
lastly by "transforming" them(hiding, showing, etc).
Other Jquery methods such as "Traverse Methods". This has to do with hopping from one element to another. This can refer to a child to parent element or
the opposite, and even "sibling" to sibling, meaning they have a common parent element.
Lastly, "Event Methods"! These have to do with the key "events" and mouse events. Event Methods have to do with key strokes on the mouse(or moving the mouse)
and finger presses on the keyboard or both.
Something nice about api.jquery.com is that is very well organised. If you go to the site, you'll notice on the left hand site that all of your methods are
grouped into categories and each category has its very own sub category, leading to a site that is very intuitive to use and find the information you need.

So now that we'eve dived a little into Jquery, we can tell that it is not exactly Javascript yet it is. Taking this into consideration we actually will place our
Jquery inside a different file than a our javascript file, yet still in public since they are ".js".

Just like with bootstrap, you must access the Jquery library per project with their CND link.

 <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>

On the Jquery site you will notice there is another CND that can be copied and pasted. This "migrate" link is for projects that have preexisting versions
of Jquery that are out of date.
Just as with the Javascript <script> tags, it dose indeed matter where you paste the file, in the view. Paste the Jquery <script> tags ~Above~ the Javascript
<script> tags, at the ~Bottom~ of the DOM.
Note: There is indeed some websites out there that have the Jquery link not at the bottom of the DOM, this is normal, however not sufficient. There may be some
cases were you wil have to do the same in order to get the "effect" you are looking for.

___The four p's of problem solving___

In the Team Treehouse Jquery course, Andrew talks about what is known as "the four p's".

Preparation: Comprehending what the problem is and thinking how we will fix it.
Planning: Planning how exactly the code will work, how it will fix the problem.
Perform: Performing what needs to be done in order for the new code to work successfully with the current code.
Perfect: Tweaking and increasing performance of the new new code, minimizing, increasing performance of the new code.



Preparation & Planning stage

"Pseudocode" is the term of being highly descriptive as to how exactly your computer program will work.
Just as you take your notes already in "Entire Laravel Review", Pseudocode is literally writing out the steps that the
code takes. For example, lets say you have a button that shows an image.
Note: Pseudocode is the code found in "doc blocks" of a project between code.

1. Hide the image
2. Add button
3. When the button is pressed, show the hidden image
4. Remove the Button
5. etc..

With the example above being taken into consideration you can tell that Pseudocode is just the steps in which the codes
functionality is written out.



Performing & Perfecting Stage
Now its time to actually write out the code to match the following Pseduocode steps.
Note: Remember that "Span" is just like "div" in html, yet different, they both are used to define a certain section
of html code. Before we get started you should know that ".name" is the selector name(div class="name"> and "Tag" could be li,
p, h2, span, button, etc, inside the div class="name">, but in this case will just use the word "tag" as its
placeholder for the examples below.


1. Hide the image
$(".name tag").hide();

The "name" is where you put the name of the selector, and the span is where you would define what kind of selector,
rather it be a div or a span tag. Now we must find a button from the Jquery library that will perform the Pseduo step
on line 3. So when searching in the Jquery library for something make sure you are searching for the functionality of
what you are looking for, so instead of just searching for a "button", search for manipulation, then find a button
that will manipulate how you need it to. When you are indeed searching throughout the Jquery library things may not
be self explanatory right away, not until you get more and more familiar with the language and how to use it. You can
always click on a method in the Jquery library to visit its personal page, providing a much more in depth detail as to
what it dose, how it works, and how to use it.


2. Add button
$(".name").append("<button>Reveal the image!</button>");

Here we are "appending" a button onto the string saying "Reveal the image!". So In a way, when thinking of code, you
must think of the outcome to determine what you need. So if you want a button with a string in it, what you really
want is a method that will append a button to your string. Then you just choose the string in your html, with a selector
and add the append method, like the above.


3. When the button is pressed, show the hidden image
$(".name button").click(function(){
$(".name tag").show();
});

Just as you would in CSS to specify exactly what button you are talking about with something like "div p {", in Jquery
you can have ".name button", so the "name" in ".name button" is the selector name. The "click" is the mouse event the
user uses to the create the event between the {}. The rest is pretty self explaning, but what is happening in the {}
is that the ".name selectorTag") is being show, to add some functionality you could always put the "slow" feature in
the show methods ().

4. Remove the Button
 $(".name button").click(function(){
 $(".name tag").show();
 $(this).remove();
 });

Now in order to remove the button that was just clicked you might be thinking what about finding a method such as
"remove();" to remove the button and specify which button we are removing by adding ".tagName button.". But your
only half way right. Instead of using the ".tagName button" to specify which, yes it will work but it will remove
any other buttons in that tag name. So instead just use "this". This means to effect the tagName it is in.


Bonus.
 $(".name tag").hide();
 $(".name").append("<button>Reveal the image!</button>");
 $(".name button").click(function(){
 $(this).prev().show();
 $(this).remove();
 });

Lets say we want to add another image to the page. We want to click one image and have the other image stay
hidden. In order to find a method that would work with two elements, we need to search under the "traversing" section
of methods in the Jquery library. By using the "prev" method it will allow us to use the "show()" method on a previous
sibling element and not effect the next element. Prev is applying the show event to each button before the next button,
thus not showing the next image until it is clicked, traversing the same functionality to the next button, and so on.
So in a way you could look at the "prev();" method as a protector and applying "show(); to the previous element.
Note: "next();" is the opposite of "prev();".




Lets learn how to click on a photo in a gallery and dim out all other photos, while enlarging the clicked on photo at
the same time.

 Solution:

1.
 $("#imageGallery a").click(function(event){
 event.preventDefault();
 var imageLocation = $(this).attr("href");

});

 whenever one of the photos
 `(this).attr("href");`
 in the html class imageGallery
 `("#imageGallery a")`
 is clicked,
 `.click`
 prevent
 `event.preventDefault();`
 the event default action from happening, in this case the browser opening a separate page for the photo.



2.
 var $overlay = $('div id="overlay"></div>')

 $("#imageGallery a").click(function(event){
 event.preventDefault();
 var imageLocation = $(this).attr("href");

 });

 We must now ~add an overlay
 to the body of the html view
 `var $overlay = $('div id="overlay"></div>');
 $("body").append($overlay);`
 in the form~ of a variable, so we can adjust its color and opacity once a photo has been clicked(darkening all other photos), and
 unclicked(undarkening the photos) by clicking again on the overlay. Think of an overlay as everything on the web page.
 What we are doing is excluding which ever photo is clicked from being effected by what the overlay will do(darken) once a photo has been clicked.
 Note: The .append is attaching the $overlay variable to the body page, thus inputting a layover into the body page since the variables value is a layover.
 Note: Since the overlay is a variable we can use it several times throughout our Jquery document, so once for the function that will darken upon click and
 once for the function that will undarken up clicking again.



3.
 var $overlay = $('div id="overlay"></div>')

 $("#imageGallery a").click(function(event){
 event.preventDefault();
 var imageLocation = $(this).attr("href");
 $overlay.show();

 });

 We added the
 `$overlay.show();`
 line because we want to show the overlay upon clicking. What you need to do now is go into the CSS folder and adjust the opacity of the overlay class to a lower
 percentage, thus giving a translucent hue effect, and make its color black. To do this you simply add a new line of CSS like the following.
 `#overlay {
   background:rgba(0,0,0,0.7);
   width:100%;
   height:100%;
   position:absolute;
   top:0;
   left:0;
   display:none;

 }`



4.
 var $overlay = $('div id="overlay"></div>')
 var $image = ("<img>");

 $overlay.append($image);

 $("#imageGallery a").click(function(event){
 event.preventDefault();
 var imageLocation = $(this).attr("href");
 $overlay.show();

 });

 We are adding the clicked on image to be excluded from the effect of the overlay. How we do that is actually by adding the effect to happen by clicking
 on the photo. We are making the clicked on photo a variable
 `var $image = ("<img>");`
 and appending it to the $overlay variable.
 `$overlay.append($image);`
 Thus becoming a part of the effect of the overlay. Think of it this way. The overlay will always show when an image is clicked. Which ever image is clicked
 is added to the effect of the showing of the overlay, thus giving the effect of darkening all other none clicked photos.



5.
 var $overlay = $('div id="overlay"></div>')
 var $image = ("<img>");

 $overlay.append($image);

 $("#imageGallery a").click(function(event){
 event.preventDefault();
 var imageLocation = $(this).attr("href");
 $image.attr("src", imageLocation);
 $overlay.show();

 });

 The
 `.attr`
 on line
 `$image.attr("src", imageLocation);`
 is making the "src" on line
 `$image.attr("src", imageLocation);`
 for $image from the $imageLocation variable, which in this case is whatever is being clicked, thus replacing the original
 `("<img>");`
 tag on the
 `var $image = ("<img>");`
 line, thus adding whatever image is being clicked on to the overlay effect since we are appending the $image variable to the $overlay variable on the
 $overlay.append($image);
 line.



6.
 `#overlay {
 background:rgba(0,0,0,0.7);
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 display:none;

 }

 #layover img {
 margin-top:10%;

 }`

 Inside your CSS folder you need to style the layovers image location. Simply add a new line of code in the preexisting CSS file and edit the arrangements
 of the photo and add one new line of code declaring the text-align for the layover class.






7.
 var $overlay = $('div id="overlay"></div>')
 var $image = ("<img>");

 $overlay.append($image);

 $("#imageGallery a").click(function(event){
 event.preventDefault();
 var imageLocation = $(this).attr("href");
 $image.attr("src", imageLocation);
 $overlay.show();

 });

 $overlay.click(function(){
 $overlay.hide();

 });

 We are adding a new function outside of the overlay, stating to hide the overlay effect. Once an image has been clicked again the overlay shall show
 and will exclude the clicked image from its effect. So clicking an image shows the over lay and click on the overlay will hide it.



8.
 var $overlay = $('div id="overlay"></div>')
 var $image = $("<img>");
 var $caption = $("<p></p>");

 $overlay.append($image);
 $overlay.append($caption);

 $("#imageGallery a").click(function(event){
 event.preventDefault();
 var imageLocation = $(this).attr("href");
 $image.attr("src", imageLocation);
 $overlay.show();

 var captionText = $(this).children("img").attr("alt");
 $caption.text(captionText);

 });

 $overlay.click(function(){
 $overlay.hide();

 });

 `#overlay {
 background:rgba(0,0,0,0.7);
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 display:none;

 }

 #overlay img {
 margin-top:10%;

 }

 #overlay p {
 color:whit;

 }`

 A "caption" is the details of the photo and we are going to have the caption show under the clicked photo when the overlay appears.
 `$overlay.append($caption);`
 line under the
 `$overlay.append($image);`
 line, so it dose not appear above the image, rather than under the image. The
 `var captionText = $(this).children("img").attr("alt");
 $caption.text(captionText);`
 is taking the children attributes from the img attribute and storing them in the captionText variable. We are then passing these children variables between
 a pair of <p> tags on line
 ` var $caption = $("<p></p>");`
 We are then appending the $caption variable to the $overlay variable after the $image variable so the caption is under the image in the overlay.
 Note: We then go inside the CSS folder once again to make a few minor adjustments to the color of the captions font for the <p> tags Remember the overlay
 background was black and we don't want our text in the <p> tags to have the same color as the background of the overlay!


*/



/*
Its time to build a drop down menu.
Lets say we have a html view; this view contains a couple a href links to different pages for the site. They are all inside a pair of div tags, with the class
name of "menu". The a href links in the div tags are in the form of a unordered list. What is currently set up is that each time you click on one of the a href
tags, leading you to that page, <li> tags holding that a href link gain its own class called selected. When a page has the "selected" class applied, it gives an
effect to the tab in the nav bar you are under. For instance, all the other tabs in the nav bar have a black background, but when you click the tab you wish to
visit, its background turns white, letting the user know they are on that page. When you condense the screen, or perhaps view the web page on a small media device,
the menu tab bar gets small, and starts assembling its tabs under the actual tab bar, out of view, since the background of the menu tabs is traditionally black
and their font is white, when it starts to bring a few of the tabs under the tab bar, into the web pages background, which is white, you can't see them. At this
point you could start writing out you Psudocode.

_Prepare_
Problem: The menu bar is not meant to be used in a small view, such as a condensed window or on a phone or tablet.
Solution: Change the menu bar into a drop down menu, when viewing the web page in a smaller view, such as a condensed window or on a phone and or tablet device.


_Plan_
First Andrew is having us do is to hide the current menu, everything in the "menu" class, when the view is being shown on a small screen.
Then we will have everything in the "menu" class shown the menu in a drop down menu. This is where we will take advantage of the <select> tag in html.
To do this we will be taking advantage of the Jquery library. Instead of hand typing in the select tags in the html view, we will append everything in the "menu"
class inside a pair of <select> tags. Now inside these select tags are options. Just like there is <li> tags inside a <ol> or <ul>. So we would need to make sure
each of the original sources, the href links that were between <li> tags, are now going between a pair of <option> tags. The href links would be the options values
like so.

<select>
<option value ="index.html">
<option value ="about.html">
<option value ="support.html">
<option value ="contact.html">
</select>

So once again, we want to traverse over each of the href tags that are in the class "menu", and place them in a pair of <select> tags and inside the select tags
we are wrapping each of the attributes in the "menu" in a pair of <option> tags; applying the href links as the option tags values. The option tags texts will
be the text of the link. So another words whatever the menu bars tabs are will be the value of the option tags text attribute.

We will need to add a .click function that will take us to the href values in the option tags.
With the CSS we will need to hide the the normal menu bar when we are using the drop down menu bar and do the opposite for the drop down bar, so when we are
using the menu bar we will need to hide the drop menu bar. We will choose which to hide and show based of the width of the screen, and that will change between
the two different menus based off the screen the view is being shown on.

So back to the selected and options topic. When a tab is selected, we will run the href link through a single pair of <select> tags and add the href as the value
to a single pair of <option> tags inside that selected tag, and same with the text describing the tab, for the options tag text.


_Perform_

As mentioned before, the first thing to do is create a select menu(drop down menu), and append it to the "menu" class.

var $select = $("<select></select>");
$("#menu a").append($select);

Now that we have appended the <select> tags to the menu, we need to cycle through the href links.

$("#menu").each(function(){
var $anchor = $(this);
var $option = $("<option></option>");

$option.text($anchor.text());
$select.append($option);

 })

so for each anchor in the menu class, wrap them in a pair of <option> tags.
for the text of the $option tags, that's the $option.text, make it the $anchor.text's value.

Then append the $option to $select, thus putting all the $option tags inside the <select> tags.

Now we just need to set the value of the option tags. to find out how to do something like this take a peak under the attributes section of the Jquery library.

We need to get the href attribute from the $anchor tag.



 var $select = $("<select></select>");
 $(#menu a).append($select);

 $("#menu").each(function(){
 var $anchor = $(this);
 var $option = $("<option></option>");

 $option.val($anchor.attr("href"));

 $option.text($anchor.text());
 $select.append($option);

 })

So with the `$option.val($anchor.attr("href"));` line we are making the value for the option tags the href attribute of the anchor tags. And the .each is doing
this for EACH of the option tags values.

Now that the menu is in the form of a drop down menu, via the select tags, we now need to create a button that will go to the option value, which in our case is
the href link, lets add a "go" button now to do this.

 var $select = $("<select></select>");
 $(#menu a).append($select);

 $("#menu").each(function(){
 var $anchor = $(this);
 var $option = $("<option></option>");

 $option.val($anchor.attr("href"));

 $option.text($anchor.text());
 $select.append($option);

var $button = $(<button>Go</button>)
$("menu a").append($button);

$button.click(function(){
window.location = $select.val();
since the $select val holds the href links, when the button is clicked it will change the windows location, the browser screen, to the href link address.

})

})

Now its time to modify the CSS, so when the screen is a certain size only one of the two menus appears, depending on the screen size.

Inside the CSS folder we will use whats called media quires. It more or less allows you to enter the screen size and what you want to have done when that screen
size is met. What we will do is create a @media query for a phone and a regular screen. When the pixels exceed the maximum about of pixels associated with the phone
size it will hide the drop down menu. If the pixels are under the size then it will hide the menu bar, for the web page. So they are both being shown automatically,
and depending on what the pixel size is it will hide the specified one to hide if it is out of its number range.

@media (min-width: 320px) and (max-width: 568px) {


    #menu ul {
        display:none;

    }

 }


@media (mind-width: 568px) {
    #menu select, $menu button {
        display:none;

    }

}



 var $select = $("<select></select>");
 $(#menu a).append($select);

 $("#menu").each(function(){
 var $anchor = $(this);
 var $option = $("<option></option>");

 if$($anchor.parent().hasclass("selected")) {
 $option.prop("selected", true);

 }

 $option.val($anchor.attr("href"));

 $option.text($anchor.text());
 $select.append($option);

 var $button = $(<button>Go</button>)
 $("menu a").append($button);

 $button.click(function(){
 window.location = $select.val();

})

})

Quick overview!!!

 By looking at the code; we are appending $select to the menu class. The $option variable is appended to the $select variable.

 The $option variable is wrapping each of the menus attributes in option tags.
 The $option tags values are the menu classes attributes values and the option tags texts are the menu classes attributes texts.

 We are appending the $button variable, that's just a button with the word go in it, to the menu class as well.

 The if state is saying if the parent tag of the $anchor, which is this, and this is all the attribute tags in the menu class, has a class selected then get the
 vale of that selected attribute and place it in the option tag, and since the text of the option is the text of the attribute it is placing that in the option as well.

 In CSS we are technically showing both the drop down and nav bar at the same time. CSS will hide one or the other depending on what screen size is being used.
 If it's out of the specified range, in our case this would be the iPhone, it would chose to hide the smaller media query out of the two.
 If it is small then it would choose to hide the larger, in our car the regular webpage nav bar out of the two.

_Perfect_

We are going to now make a minor change. Instead of clicking on the go button to change the location of the page, the users have requested that right when you
select the page you wish to go to from the drop down menu, the location of the page will change along with it. We will remove the line of code listed here


 var $button = $(<button>Go</button>)
 $("menu a").append($button);

Instead of having the

 $button.click(function(){
 window.location = $select.val();

 change the page location, we want to have it change upon selection.

 $select.change(function(){
 window.location = $select.val();

Now since we had a go button the page before, we had placed the select drop down menu a little far to the left hand side, to make room for that go button. We
now need to readjust the CSS code a little to center the drop down menu, so there is just a little black space of web page where the go button use to be.
Just remove the button section of CSS and change the %84 width in the select selector to %94.


 */



/*





 */

