"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'large', text = 'i love typescript') {
    console.log(`you have oder a ${size} ,  shirt that says ${text}`);
}
make_shirt();
make_shirt('medium');
// diffrent message
make_shirt('small', 'i neend a big shirt to wear');
