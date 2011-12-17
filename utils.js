/*
* Utils.js
* A simple utility library.
*
* * * * * *
* LICENSE
*
* The MIT License
*
* Copyright (c) 2011 Ian Gilman
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*
*/

Utils = {
  isIE: (navigator.userAgent.indexOf('MSIE') != -1),

  // ----------
  bind: function(element, eventName, handler) {
    if(this.isIE)
      element.attachEvent("on" + eventName, handler);
    else
      element.addEventListener(eventName, handler, true);
  },

  // ----------
  unbind: function(element, eventName, handler) {
    if(this.isIE)
      element.detachEvent("on" + eventName, handler);
    else
      element.removeEventListener(eventName, handler, true);
  },

  // ----------
  event: function(event) {
    return (this.isIE ? window.event : event);
  },

  // ----------
  position: function(event) {
    return {x: event.clientX, y: event.clientY};
  },

  // ----------
  preventDefault: function(event) {
    if(this.isIE) {
      event.cancelBubble = true;
      event.returnValue = false;
    } else
      event.preventDefault();
  },

  //------------------------------------------------------------------------------
  windowSize: function() {
    var w = 0;
    var h = 0;

    if(!window.innerWidth) { //IE
      if(!(document.documentElement.clientWidth == 0)) { //strict mode
        w = document.documentElement.clientWidth;
        h = document.documentElement.clientHeight;
      } else { //quirks mode
        w = document.body.clientWidth;
        h = document.body.clientHeight;
      }
    } else { //w3c
      w = window.innerWidth;
      h = window.innerHeight;
    }

    return {x:w, y:h};
  }
};