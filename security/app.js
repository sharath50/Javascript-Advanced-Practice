// very important section about securities and vulnarabilities

/*
    Don't store passwords, secrets, or other sensitive information on js file
    don't use global vaiables
    Assume hackers can read your js code and access all the data sent to a browser
*/

// eval()
let input = "console.log('hello')";
eval(input);
// avoid eval in our code...

/*
    -   while the content coming from the server some times it has 
        to come through several servers, so the attack can be done 
        in the middle of transportation to inject some scripts into 
        the page
    *** prevent man in the middle attack

    use ssl
    use HTTP Header : strict-Transport-Security
    use cookie attributes : Secure and HttpOnly
*/

/*
    -   the cross site scripting can also happen in the same way
    while page is coming from another server, inject the script tag into html page
    *** prevent xss cross site scripting

    use HTTP Header : Content-Security-Policy
    use HTTP Header : Access-Control-Allow-Origin
*/

/*
    *** preparing for production

    webpack
    
    minifying
    uglyfying
    bundling
    https://javascriptobfuscator.com/
*/
