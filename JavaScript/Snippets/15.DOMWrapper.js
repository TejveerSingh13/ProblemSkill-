/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
    // your code here
    return {
      css: function(property, value){
        el.style[property] = value
        return this
      }
    }
  }

// This code is imp to understand method chaing and the use of context
// The function $() returns an object with css() method
// the return this is the method returning self for future chaining