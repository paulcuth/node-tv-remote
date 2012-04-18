# node-tv-remote

Turn your tablet and mobile phone into a TV and remote control, using Node, Socket.io and [TVCatchup](http://www.tvcatchup.com).


##Prerequisites

* Node
* NPM
* Git
* A [TVCatchup account](http://signup.tvcatchup.com)


##Install

Clone the repo:

```
$> git clone http://github.com/paulcuth/node-tv-remote
```

Install the dependencies:

```
$> cd node-tv-remote
$> npm install
```

Run the server:

```
$> node server
```

Now you need to sign in to your TVCatchup account on BOTH devices. Once that's done, navigate to your server on the port shown for both devices, choose "Make me a TV" on one and "Make me a remote control" on the other.


##Acknowedgements

Obviously, this project heavily relies on the excellent services of [TVCatchup](http://www.tvcatchup.com).




## License 

(The MIT License)

Copyright (c) 2012 Paul Cuthbertson &lt;github@paulcuth.me.uk&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.