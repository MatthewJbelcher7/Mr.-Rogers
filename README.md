# _{Mr-Rogers}_

#### By _**{Matthew J Belcher}**_

#### _{Practice using strings, loops, arrays with TDD}_

## Technologies Used

* {List}

## Description

_{This is a demonstration on how to use strings, loops and arrays with an emphasis on TDD done to emulate Mr Rodgers and return numbers input by a user as words}_

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Open index.html in your browser_
* _Input a number to get a response that replaces certain numbers with a variety of robo responses_
## Known Bugs

_{need to work out why my image wont scale to background}_
_{need to test for more possible errors based on user submit}_
_{needs cleaner CSS/Html to style into desired appearance and add special interactions}_
_{broke my nan at the end of the night and need to re-address it}

## License

_[MIT License](https://opensource.org/licenses/MIT)_

Copyright (c) _<2/11/2023>_ {Matthew Belcher}

## Tests

Describe: beepBoop()

Test: "It will replace 1 with the word 'Beep'."
Code: beepBoop(1)
Expected Output: "Beep"

Test: "It will replace 2 with the word 'Boop'."
Code: beepBoop(2)
Expected Output: "Boop"

Test:"It will replace 3 with the phrase 'Won't you be my neighbor?'"
Code:beepBoop(3)
Expected Output:'Won't you be my neighbor?'

Test: "It will replace all and list numbers up untill the choosen number"
Code: beepBoop(3)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor"]

Test: "It will return an error if anythign but a number is entered"
Code: beepBoop("one")
Expected Output: "What are you doing neighbor"


<!-- Describe: roboRogers()

Test: Don't Test UI
Code: Nevermind
Expected Output: -->