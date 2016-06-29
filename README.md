# phantomjs-sha256
##Code sample to perform sha256 encryption on a web page using phantomjs

This code show how to perfrom sha256 encryption in a website where the sha256 encryption code is not present or publicly available.
It can be useful when you need to perform sha256 encryption using both data from your local javascript environment and some data from the webpage.

###How to use

1. Read the code and comments.
2. Write your own script based on your need
3. Execute your script with the following command :
```
    phantomjs myscript.js
```
phantomjs must be accessible through your PATH envirnoment variable. If your script and the phantomjs are alongside, you can use :
```
    ./phantomjs myscript.js
``` 
