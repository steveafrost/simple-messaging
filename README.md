_How to Run Simple Messaging_
* Clone Repo: `git clone git@github.com:steveafrost/simple-messaging.git`
* From within the folder, run a simple python server: `python -m SimpleHTTPServer 8000`
* Navigate to `localhost:8000`
* If you have any issues running, let me know!

_Overview of Design Decisions_
* Object Literal/Modular Pattern
    - I chose an object literal/modular pattern for the Javascript to keep things organized. As I started on the project, it was apparent that there would be three separate pieces of the product: companies, guests, and templates. I gravitated to these sections because each had it's own data flowing in from internal JSON and each had to populate fields and then feed the message upon submission - the isolation seemed natural.
* Barebones UI
    - One of the early steps I took was to make a quick, simple UI. This usually helps me fully conceptualize the product as a user might use it if I had to ship within a few days. The UI can always be improved later and a prototype one serves it's purpose in clarifying the project, for me.
* No build system
    - Although build systems are super common and many of my projects have them, I went without a build system on this one. I didn't need SASS because the UI was not a priority for this project. I stayed away (I believe completely) from ES6 so that I wouldn't need any kind of compiler or polyfills. Lastly, a hot reload system would've been nice for development though in the end I couldn't justify setting up build system setup just for a hot reload.

_Language Selected_
* I chose to use Javascript for this project. It is one of my two most comfortable languages, the other being Ruby, and I really appreciate the flexibility of JS when compared to Ruby. It is also quick to prototype with because it can be run with minimal setup, really all you need is the browser or the node REPL can be used.

_Verifying Correctness of Program_
* To verify correctness, I manually QA'ed the form several times and from a variety of clients: Mobile Emulator, PC, Mac & FF, Chrome, Safari, and IE.

_What Might I Do With More Time_
* Largest sore spot is that I am using full objects as form field values. It is proof of concept though those values need to be hidden away. I'd rather keep that info behind closed doors and only query for it when the form options are selected. Expanding on that, it'd be nice to pull in just names instead of the entire list of objects from each JSON. Having some kind of DB would make grabbing the data more efficient but out of the scope of this project.
* I'd also like to check for the correct type of input on each field. I have prepared the JSON for expanding in that direction by include a "type" on each parameter.
* Continuing from the above section about correctness, I would love to write some unit tests on the form to verify validity and all use cases.
* I'd refactor the `populateForm()` function in templatesModule.js because it is not as clean as the rest of the code. I'd love to use some higher level functions compared to each as well.
* It'd also be beneficial to remove the requirement for listing parameters separately from the message property in templates.json. If there were a unique wrapped given to each variable, i.e. {!firstName!}, then I could use RegEx and identify those and replace instead of separately declaring what parameters the message contains.
* Last on the list of priorities, I'd probably setup a build system w/ Babel in order to use some more efficient, modern ES6 code.
