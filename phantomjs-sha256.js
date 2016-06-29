var webPage = require('webpage').create(); /*<! Once loading is complete, we can interact with the web page using this variable */

var url = 'http://myWebSite.com'; /*<! URL used to load the device */

/**
 * @brief After the page is loaded, inject the sha256.min.js code and process to the encryption using value from our script and strings. You can also use values from the web page. 
 */
webpage.onLoadFinished = function(){
    //Have to use injectJs because the code is not accessible by the web page. 
    //If the code is accessible by the web page (code retrieved using an url), then you should use webpage.includeJs instead
    if(pageLogin.injectJs('absolute/path/to/sha256.min.js')){

        //We use webpage.evaluate to process the encryption in the webpage environment. This way we can use data from the web page itself.
        //the external parameter is optional, it's an example to show how to import a value from our script into the web page environment
        valueFromWebPage = webPage.evaluate(function(externalParameter){
            var hashKey = 'hello'+externalParameter+'somethingElse';
            var hashChain = sha256(hashKey);
            //Now do what you must with the hash chain, like fill a form or use it for some other process
            //In this case, we simply return it
            return hashChain;
        },externalParameter);
    }
};

webpage.open(url,function(status){
    console.log(status+' at opening the web page');
};
