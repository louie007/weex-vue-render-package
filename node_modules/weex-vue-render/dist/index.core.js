
console.log('START WEEX VUE RENDER CORE: 0.12.3, Build 2017-08-04 17:22.');


(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.WeexVueRenderCore = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
__$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-root,\n.weex-root * {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.weex-root,\n.weex-root *,\n.weex-root *::before,\n.weex-root *::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n.weex-root a,\n.weex-root button,\n.weex-root [role=\"button\"],\n.weex-root input,\n.weex-root label,\n.weex-root select,\n.weex-root textarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\n.weex-root p,\n.weex-root ol,\n.weex-root ul,\n.weex-root dl {\n  margin: 0;\n  padding: 0;\n}\n\n.weex-root li {\n  list-style: none;\n}\n\n.weex-root figure {\n  margin: 0;\n}\n\n.weex-root textarea {\n  resize: none;\n}\n\n/* show no scroll bar. */\n::-webkit-scrollbar {\n  display: none;\n}\n",undefined);

__$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-root * {\n  border-width: 0;\n  border-color: inherit;\n  border-style: solid;\n}\n\n.weex-flex-ct {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.weex-ct {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  flex-basis: auto;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ct.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n\n.weex-el {\n  display: block;\n  box-sizing: border-box;\n  position: relative;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  flex-basis: auto;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ios-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.weex-fixed {\n  position: fixed;\n  z-index: 1;\n}\n\n.weex-sticky {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n}\n",undefined);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable */

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el
    }
    el = el.parentNode;
  }
  return null
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, false, true);

  if (typeof extra === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  /**
   * A flag to distinguish with other events with the same name generated
   * by another library in the same page.
   */ 
  event._for = 'weex';

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2)
    + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2)
    + Math.pow(x2 - x1, 2)));
  var translate = [
    x3
    - scale * x1 * Math.cos(rotate)
    + scale * y1 * Math.sin(rotate),
    y3
    - scale * y1 * Math.cos(rotate)
    - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [
      [scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]],
      [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]],
      [0, 0, 1]
    ]
  }
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {

  if (Object.keys(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, false);
    docEl.addEventListener('touchend', touchendHandler, false);
    docEl.addEventListener('touchcancel', touchcancelHandler, false);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for weex
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        }
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if (Object.keys(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time =  Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time)
      / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time)
      / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2)
      + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical
      ? displacementY >= 0 ? 'down' : 'up'
      : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing')
        && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if (Object.keys(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(
      position[0][0],
      position[0][1],
      position[1][0],
      position[1][1],
      current[0][0],
      current[0][1],
      current[1][0],
      current[1][1]
    );
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      // fire click, not tap.
      fireEvent(gesture.element, 'tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY
        + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && (now - gesture.lastTime) < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, false);
  isInitialized = true;
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number'){ __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number'){ __e = core; } // eslint-disable-line no-undef
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function(it){
  if(!isObject(it)){ throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!isObject$2(it)){ return it; }
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject       = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive    = _toPrimitive;
var dP$1             = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE){ try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ } }
  if('get' in Attributes || 'set' in Attributes){ throw TypeError('Accessors not supported!'); }
  if('value' in Attributes){ O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var dP         = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global    = _global
  , hide      = _hide
  , has       = _has
  , SRC       = _uid('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_core.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction){ has(val, 'name') || hide(val, 'name', key); }
  if(O[key] === val){ return; }
  if(isFunction){ has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key]){ O[key] = val; }
      else { hide(O, key, val); }
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function(it){
  if(typeof it != 'function'){ throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined){ return fn; }
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var global$1    = _global;
var core      = _core;
var hide      = _hide;
var redefine  = _redefine;
var ctx       = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function(type, name, source){
  var IS_FORCED = type & $export$1.F
    , IS_GLOBAL = type & $export$1.G
    , IS_STATIC = type & $export$1.S
    , IS_PROTO  = type & $export$1.P
    , IS_BIND   = type & $export$1.B
    , target    = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL){ source = name; }
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target){ redefine(target, key, out, type & $export$1.U); }
    // export
    if(exports[key] != out){ hide(exports, key, exp); }
    if(IS_PROTO && expProto[key] != out){ expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library` 
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function(it){
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined){ throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function(it){
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength  = _toLength;
var toIndex   = _toIndex;
var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject$1($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el){ while(length > index){
      value = O[index++];
      if(value != value){ return true; }
    // Array#toIndex ignores holes, Array#includes - not
    } } else { for(;length > index; index++){ if(IS_INCLUDES || index in O){
      if(O[index] === el){ return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store  = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid    = _uid;
var _sharedKey = function(key){
  return shared[key] || (shared[key] = uid(key));
};

var has          = _has;
var toIObject    = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O){ if(key != IE_PROTO){ has(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while(names.length > i){ if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function(it){
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = _objectKeys;
var gOPS     = _objectGops;
var pIE      = _objectPie;
var toObject = _toObject;
var IObject  = _iobject;
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments$1[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j){ if(isEnum.call(S, key = keys[j++])){ T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', {assign: _objectAssign});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , uid        = _uid
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
var ARG = cof$1(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test    = {};
test[_wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2   = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined$2(that))
      , i = toInteger$2(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l){ return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = false;

var _iterators = {};

var dP$2       = _objectDp;
var anObject$2 = _anObject;
var getKeys$1  = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  anObject$2(O);
  var keys   = getKeys$1(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i){ dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1    = _anObject;
var dPs         = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = enumBugKeys$1.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--){ delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$2 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has$2(it = stat ? it : it.prototype, TAG$1)){ def(it, TAG$1, {configurable: true, value: tag}); }
};

var create$1         = _objectCreate;
var descriptor     = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create$1(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3         = _has;
var toObject$1    = _toObject;
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject$1(O);
  if(has$3(O, IE_PROTO$2)){ return O[IE_PROTO$2]; }
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY        = _library;
var $export$2        = _export;
var redefine$1       = _redefine;
var hide$1           = _hide;
var has$1            = _has;
var Iterators      = _iterators;
var $iterCreate    = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto){ return proto[kind]; }
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has$1(IteratorPrototype, ITERATOR)){ hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED){ for(key in methods){
      if(!(key in proto)){ redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length){ return {value: undefined, done: true}; }
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined){ _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

var addToUnscopables = _addToUnscopables;
var step             = _iterStep;
var Iterators$2        = _iterators;
var toIObject$2        = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  ){ return step(0, index); }
  if(kind == 'values'){ return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators    = es6_array_iterator;
var redefine$2      = _redefine;
var global$3        = _global;
var hide$2          = _hide;
var Iterators$1     = _iterators;
var wks           = _wks;
var ITERATOR$1      = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues   = Iterators$1.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global$3[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR$1]){ hide$2(proto, ITERATOR$1, ArrayValues); }
    if(!proto[TO_STRING_TAG]){ hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    for(key in $iterators){ if(!proto[key]){ redefine$2(proto, key, $iterators[key], true); } }
  }
}

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined){ anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3  = _iterators;
var ITERATOR$2   = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2   = _classof;
var ITERATOR$3  = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined){ return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx         = _ctx
  , call        = _iterCall
  , isArrayIter = _isArrayIter
  , anObject    = _anObject
  , toLength    = _toLength
  , getIterFn   = core_getIteratorMethod
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function'){ throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn)){ for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN){ return result; }
  } } else { for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN){ return result; }
  } }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4  = _anObject;
var aFunction$2 = _aFunction;
var SPECIES   = _wks('species');
var _speciesConstructor = function(O, D){
  var C = anObject$4(O).constructor, S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var ctx$2                = _ctx;
var invoke             = _invoke;
var html               = _html;
var cel                = _domCreate;
var global$5             = _global;
var process$1            = global$5.process;
var setTask            = global$5.setImmediate;
var clearTask          = global$5.clearImmediate;
var MessageChannel     = global$5.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var arguments$1 = arguments;

    var args = [], i = 1;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_cof(process$1) == 'process'){
    defer = function(id){
      process$1.nextTick(ctx$2(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts){
    defer = function(id){
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};

var global$6    = _global;
var macrotask = _task.set;
var Observer  = global$6.MutationObserver || global$6.WebKitMutationObserver;
var process$2   = global$6.process;
var Promise$1   = global$6.Promise;
var isNode$1    = _cof(process$2) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$2.domain)){ parent.exit(); }
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head){ notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if(parent){ parent.enter(); }
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$6, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last){ last.next = task; }
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

var redefine$3 = _redefine;
var _redefineAll = function(target, src, safe){
  for(var key in src){ redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7      = _global;
var dP$3          = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1     = _wks('species');

var _setSpecies = function(KEY){
  var C = global$7[KEY];
  if(DESCRIPTORS && C && !C[SPECIES$1]){ dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  }); }
};

var ITERATOR$4     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING){ return false; }
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$4]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$4] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

var LIBRARY$1            = _library;
var global$4             = _global;
var ctx$1                = _ctx;
var classof$1            = _classof;
var $export$3            = _export;
var isObject$3           = _isObject;
var aFunction$1          = _aFunction;
var anInstance         = _anInstance;
var forOf              = _forOf;
var speciesConstructor = _speciesConstructor;
var task               = _task.set;
var microtask          = _microtask();
var PROMISE            = 'Promise';
var TypeError$1          = global$4.TypeError;
var process            = global$4.process;
var $Promise           = global$4[PROMISE];
var process            = global$4.process;
var isNode             = classof$1(process) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined){ throw TypeError$1('Bad Promise constructor'); }
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject  = aFunction$1(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n){ return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2){ onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if(handler === true){ result = value; }
          else {
            if(domain){ domain.enter(); }
            result = handler(value);
            if(domain){ domain.exit(); }
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i){ run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h){ onUnhandled(promise); }
  });
};
var onUnhandled = function(promise){
  task.call(global$4, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global$4.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$4.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt){ throw abrupt.error; }
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1){ return false; }
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise)){ return false; }
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$4, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global$4.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a){ promise._a = promise._c.slice(); }
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value){ throw TypeError$1("Promise can't be resolved itself"); }
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a){ this._a.push(reaction); }
      if(this._s){ notify(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject  = ctx$1($reject, promise, 1);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, {Promise: $Promise});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this)){ return x; }
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled){ return; }
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  }
});

var lib$1 = window.lib || (window.lib = {});

/**
 * Version class.
 * @class lib.env~Version
 * @param {String} v - version number.
 */
function Version (v) {
  Object.defineProperty(this, 'val', {
    value: v.toString(),
    enumerable: true
  });

  /**
   * larger than
   * @method gt
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.gt = function (v) {
    return Version.compare(this, v) > 0
  };

  /**
   * larger than or equal to.
   * @method gte
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.gte = function (v) {
    return Version.compare(this, v) >= 0
  };

  /**
   * less than.
   * @method lt
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.lt = function (v) {
    return Version.compare(this, v) < 0
  };

  /**
   * less than or equal to.
   * @method lte
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.lte = function (v) {
    return Version.compare(this, v) <= 0
  };

  /**
   * equal to.
   * @method eq
   * @param {String} v - version
   * @return {Boolean} equal to
   * @instance
   * @memberof Version
   */
  this.eq = function (v) {
    return Version.compare(this, v) === 0
  };
}

/**
 * version number string.
 * @method toString
 * @return {String} current version number string.
 * @instance
 * @memberof Version
 */
Version.prototype.toString = function () {
  return this.val
};

/**
 * return current version number.
 * @method valueOf
 * @return {Boolean} version number
 * @instance
 * @memberof Version
 */
Version.prototype.valueOf = function () {
  var v = this.val.split('.');
  var r = [];
  for (var i = 0; i < v.length; i++) {
    var n = parseInt(v[i], 10);
    if (isNaN(n)) {
      n = 0;
    }
    var s = n.toString();
    if (s.length < 5) {
      s = Array(6 - s.length).join('0') + s;
    }
    r.push(s);
    if (r.length === 1) {
      r.push('.');
    }
  }
  return parseFloat(r.join(''))
};

/**
 * compare two versions.
 * @method compare
 * @param {String} v1 - version1
 * @param {String} v2 - version2
 * @return {Number} 0 for equality，-1 for less than，1 for larger than.
 * @memberof Version
 */
Version.compare = function (v1, v2) {
  v1 = v1.toString().split('.');
  v2 = v2.toString().split('.');
  for (var i = 0; i < v1.length || i < v2.length; i++) {
    var n1 = parseInt(v1[i], 10);
    var n2 = parseInt(v2[i], 10);
    if (window.isNaN(n1)) {
      n1 = 0;
    }
    if (window.isNaN(n2)) {
      n2 = 0;
    }
    if (n1 < n2) {
      return -1
    }
    else if (n1 > n2) {
      return 1
    }
  }
  return 0
};

/**
 * 解析和操作版本号
 * @method version
 * @param {string} v - 需要解析的版本号
 * @return {lib.env~Version} Verson实例
 * @memberof lib
 */
lib$1.version = function (v) {
  return new Version(v)
};

var lib$2 = window.lib || (window.lib = {});
var env$1 = lib$2.env || (lib$2.env = {});

var search = window.location.search.replace(/^\?/, '');
env$1.params = {};
if (search) {
  var params = search.split('&');
  for (var i$1 = 0; i$1 < params.length; i$1++) {
    params[i$1] = params[i$1].split('=');
    try {
      env$1.params[params[i$1][0]] = decodeURIComponent(params[i$1][1]);
    }
    catch (e) {
      env$1.params[params[i$1][0]] = params[i$1][1];
    }
  }
}

var lib = window.lib || (window.lib = {});
var env = lib.env || (lib.env = {});

var ua = window.navigator.userAgent;
var match;

/**
 * os
 */

match = ua.match(/Windows\sPhone\s(?:OS\s)?([\d.]+)/);
if (match) {
  /**
   * @type {Object}
   * @memberof lib.env
   * @property {String} name - os name, e.g. Android/AndroidPad/iPhone/iPod/iPad/Windows Phone/unknown, etc.
   * @property {lib.env~Version} version - os version.
   * @property {Boolean} isWindowsPhone
   * @property {Boolean} isIPhone - is iPhone/iTouch
   * @property {Boolean} isIPad
   * @property {Boolean} isIOS
   * @property {Boolean} isAndroid
   * @property {Boolean} isAndroidPad
   */
  env.os = {
    name: 'Windows Phone',
    isWindowsPhone: true,
    version: match[1]
  };
}
else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
  env.os = {
    version: match[1]
  };

  if ((ua.match(/Mobile\s+Safari/))) {
    env.os.name = 'Android';
    env.os.isAndroid = true;
  }
  else {
    env.os.name = 'AndroidPad';
    env.os.isAndroidPad = true;
  }
}
else if ((match = ua.match(/(iPhone|iPad|iPod)/))) {
  var name = match[1];

  match = ua.match(/OS ([\d_.]+) like Mac OS X/);

  env.os = {
    name: name,
    isIPhone: (name === 'iPhone' || name === 'iPod'),
    isIPad: name === 'iPad',
    isIOS: true,
    version: match[1].split('_').join('.')
  };
}
else {
  env.os = {
    name: 'unknown',
    version: '0.0.0'
  };
}

if (lib.version) {
  env.os.version = lib.version(env.os.version);
}

/**
 * browser
 */

match = ua.match(/(?:UCWEB|UCBrowser\/)([\d.]+)/);

if (match) {
  /**
   * @type {Object}
   * @memberof env
   * @property {String} name - browser name，e.g. UC/QQ/Firefox/Chrome/Android/Safari/iOS Webview/Chrome Webview/IE/IEMobile/unknown, etc.
   * @property {env~Version} version - browser version.
   * @property {Boolean} isUC
   * @property {Boolean} isQQ
   * @property {Boolean} isIE
   * @property {Boolean} isIEMobile
   * @property {Boolean} isIELikeWebkit
   * @property {Boolean} isChrome
   * @property {Boolean} isAndroid
   * @property {Boolean} isSafari
   * @property {Boolean} isWebview
   */
  env.browser = {
    name: 'UC',
    isUC: true,
    version: match[1]
  };
}
else if ((match = ua.match(/MQQBrowser\/([\d.]+)/))) {
  env.browser = {
    name: 'QQ',
    isQQ: true,
    version: match[1]
  };
}
else if ((match = ua.match(/Firefox\/([\d.]+)/))) {
  env.browser = {
    name: 'Firefox',
    isFirefox: true,
    version: match[1]
  };
}
else if ((match = ua.match(/MSIE\s([\d.]+)/))
  || (match = ua.match(/IEMobile\/([\d.]+)/))) {
  env.browser = {
    version: match[1]
  };

  if (ua.match(/IEMobile/)) {
    env.browser.name = 'IEMobile';
    env.browser.isIEMobile = true;
  }
  else {
    env.browser.name = 'IE';
    env.browser.isIE = true;
  }

  if (ua.match(/Android|iPhone/)) {
    env.browser.isIELikeWebkit = true;
  }
}
else if ((match = ua.match(/(?:Chrome|CriOS)\/([\d.]+)/))) {
  env.browser = {
    name: 'Chrome',
    isChrome: true,
    version: match[1]
  };

  if (ua.match(/Version\/[\d+.]+\s*Chrome/)) {
    env.browser.name = 'Chrome Webview';
    env.browser.isWebview = true;
  }
}
else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
  env.browser = {
    name: 'Android',
    isAndroid: true,
    version: match[1]
  };
}
else if (ua.match(/iPhone|iPad|iPod/)) {
  if (ua.match(/Safari/)) {
    match = ua.match(/Version\/([\d.]+)/);
    env.browser = {
      name: 'Safari',
      isSafari: true,
      version: match[1]
    };
  }
  else {
    match = ua.match(/OS ([\d_.]+) like Mac OS X/);
    env.browser = {
      name: 'iOS Webview',
      isWebview: true,
      version: match[1].replace(/_/g, '.')
    };
  }
}
else {
  env.browser = {
    name: 'unknown',
    version: '0.0.0'
  };
}

if (lib.version) {
  env.browser.version = lib.version(env.browser.version);
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

var toString$2 = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString$2.call(obj) === OBJECT_STRING
}

var ARRAY_STRING = '[object Array]';
function isArray (arr) {
  return toString$2.call(arr) === ARRAY_STRING
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// 
/**
 * Mix properties into target object.
 * the rightest object's value has the highest priority.
 */
function extend (to) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  if (!args || args.length <= 0) {
    return to
  }
  args.forEach(function (from) {
    if (typeof from !== 'object') {
      return
    }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to
}
/**
 * Mix truthy or '' property values into target object.
 * mostly for merging styles. (that's why '' is falsy but still should be counted in.)
 * the rightest object's value has the highest priority.
 */
function extendTruthy (to) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  if (!args || args.length <= 0) {
    return to
  }
  args.forEach(function (from) {
    if (typeof from !== 'object') {
      return
    }
    var i;
    for (var key in from) {
      if (((i = from[key]) || i === '' || i === 0) && i !== 'undefined') {
        to[key] = i;
      }
    }
  });
  return to
}
/**
 * Mix specified properties into target object.
 */
function extendKeys (to, from, keys) {
  if ( from === void 0 ) from = {};

  (keys || []).forEach(function (key) {
    from && (to[key] = from[key]);
  });
  return to
}
/**
 * Extract specified properties from src to target object.
 */
function extractKeys (to, from, keys) {
  if ( from === void 0 ) from = {};

  if (!from) {
    return to
  }
  (keys || []).forEach(function (key) {
    from && (to[key] = from[key]);
    from && (delete from[key]);
  });
  return to
}
/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */
function bind (fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx)
  }
}
/**
 * Only call the func the last time before it's not that frequently called.
 */
function debounce (func, wait) {
  var timerId;
  function later () {
    timerId = null;
    func.apply(null);
  }
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}
/**
 * Only call the func the first time before a series frequently function calls happen.
 */
function depress (func, wait) {
  var timerId;

  function later () {
    timerId = null;
  }
  return function () {
    if (!timerId) {
      func.apply();
    }
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}
/**
 * Only call the func every time after a wait milliseconds if it's too frequently called.
 */
function throttle (func, wait, callLastTime) {
  var last = 0;
  var lastTimer = null;
  var lastTimeDuration = wait + (wait > 25 ? wait : 25); // plus half wait time.
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    var time = new Date().getTime();
    if (time - last > wait) {
      if (callLastTime) {
        lastTimer && clearTimeout(lastTimer);
        lastTimer = setTimeout(function () {
          lastTimer = null;
          func.apply(context, args);
        }, lastTimeDuration);
      }
      func.apply(context, args);
      last = time;
    }
  }
}
// direction: 'l' | 'r', default is 'r'
// num: how many times to loop, should be a positive integer
function loopArray (arr, num, direction) {
  if (!isArray(arr)) {
    return
  }
  var isLeft = (direction + '').toLowerCase() === 'l';
  var len = arr.length;
  num = num % len;
  if (num < 0) {
    num = -num;
    isLeft = !isLeft;
  }
  if (num === 0) {
    return arr
  }
  var lp, rp;
  if (isLeft) {
    lp = arr.slice(0, num);
    rp = arr.slice(num);
  }
  else {
    lp = arr.slice(0, len - num);
    rp = arr.slice(len - num);
  }
  return rp.concat(lp)
}
/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}
/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c.toUpperCase(); })
});
function camelizeKeys (obj) {
  var res = {};
  for (var key in obj) {
    res[camelize(key)] = obj[key];
  }
  return res
}
/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});
  /**
   * Hyphenate a camelCase string.
   */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase()
});
function hyphenateKeys (obj) {
  var res = {};
  for (var key in obj) {
    res[hyphenate(key)] = obj[key];
  }
  return res
}
var vendorsReg = /webkit-|moz-|o-|ms-/;
function hyphenateStyleKeys (obj) {
  var res = {};
  for (var key in obj) {
    var hk = hyphenate(key).replace(vendorsReg, function ($0) {
      return '-' + $0
    });
    res[hk] = obj[key];
  }
  return res
}
function camelToKebab (name) {
  if (!name) {
    return ''
  }
  return name.replace(/([A-Z])/g, function (g, g1) {
    return ("-" + (g1.toLowerCase()))
  })
}
function appendCss (css, cssId, replace) {
  var style = document.getElementById(cssId);
  if (style && replace) {
    style.parentNode.removeChild(style);
    style = null;
  }
  if (!style) {
    style = document.createElement('style');
    style.type = 'text/css';
    cssId && (style.id = cssId);
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.appendChild(document.createTextNode(css));
}
function nextFrame (callback) {
  var runner = window.requestAnimationFrame || window.webkitRequestAnimationFrame || (function (cb) { return setTimeout(cb, 16); });
  runner(callback);
}
function toCSSText (object) {
  if (!object) {
    return
  }
  var obj = hyphenateStyleKeys(object);
  var cssText = '';
  for (var key in obj) {
    cssText += key + ":" + (obj[key]) + ";";
  }
  return cssText
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// 

/**
 * viewport priority:
 *
 * 1. meta weex-viewport (developer custom)
 * 2. setViewport(config) := config.width (private code) @deprecated
 * 3. 750 (buid time)
 *
 */
var isInited = false;
var DEFAULT_VIEWPORT_WIDTH = 750;

/**
 * get viewport width from weex-viewport meta.
 */
var envViewportWidth = parseInt(750);
var width = !isNaN(envViewportWidth) && envViewportWidth > 0
  ? envViewportWidth
  : DEFAULT_VIEWPORT_WIDTH;

var wxViewportMeta = document.querySelector('meta[name="weex-viewport"]');
var metaWidth = wxViewportMeta && parseInt(wxViewportMeta.getAttribute('content'));
if (metaWidth && !isNaN(metaWidth) && metaWidth > 0) {
  width = metaWidth;
}

var dpr = 0;
var screenWidth = 0;
var screenHeight = 0;

var info = {
  dpr: dpr,
  scale: 0,
  rem: 0,
  deviceWidth: 0,
  deviceHeight: 0
};

/**
 * set root font-size for rem units. If already been set, just skip this.
 */
function setRootFont (width) {
  var doc = window.document;
  var rem = width / 10;
  if (!doc.documentElement) { return }
  var rootFontSize = doc.documentElement.style.fontSize;
  if (!rootFontSize) {
    doc.documentElement.style.fontSize = rem + 'px';
    info.rem = rem;
  }
}

function setMetaViewport (width) {
  if (!wxViewportMeta) {
    wxViewportMeta = document.createElement('meta');
    wxViewportMeta.setAttribute('name', 'weex-viewport');
  }
  else {
    var metaWidth = parseInt(wxViewportMeta.getAttribute('content'));
    if (metaWidth === width) {
      return
    }
  }
  wxViewportMeta.setAttribute('content', width + '');
}

/**
 * export viewport info.
 */
function init$2 (viewportWidth) {
  if ( viewportWidth === void 0 ) viewportWidth = width;

  if (!isInited) {
    isInited = true;

    var doc = window.document;
    if (!doc) {
      console.error('[vue-render] window.document is undfined.');
      return
    }
    if (!doc.documentElement) {
      console.error('[vue-render] document.documentElement is undfined.');
      return
    }

    dpr = info.dpr = window.devicePixelRatio;
    screenWidth = doc.documentElement.clientWidth;
    screenHeight = doc.documentElement.clientHeight;

    // set root font for rem.
    setRootFont(screenWidth);
    setMetaViewport(viewportWidth);

    /**
     * why not to use window.screen.width to get screenWidth ? Because in some
     * old webkit browser on android system it get the device pixel width, which
     * is the screenWidth multiply by the device pixel ratio.
     * e.g. ip6 -> get 375 for virtual screen width.
     */
    var scale = screenWidth / viewportWidth;
    /**
     * 1. if set initial/maximum/mimimum-scale some how the page will have a bounce
     * effect when user drag the page towards horizontal axis.
     * 2. Due to compatibility reasons, not to use viewport meta anymore. Just bring
     * a parameter scale into the style value processing.
     */

    // const contents = [
    //   `width=${viewportWidth}`,
    //   `initial-scale=${scale}`,
    //   `maximum-scale=${scale}`,
    //   `minimum-scale=${scale}`,
    //   `user-scalable=no`
    // ]

    // let meta = doc.querySelector('meta[name="viewport"]')
    // if (!meta) {
    //   meta = doc.createElement('meta')
    //   meta.setAttribute('name', 'viewport')
    //   document.querySelector('head').appendChild(meta)
    // }
    // meta.setAttribute('content', contents.join(','))

    extend(info, {
      scale: scale,
      deviceWidth: screenWidth * dpr,
      deviceHeight: screenHeight * dpr
    });
  }

  return info
}

/**
 * reset viewport width and scale.
 * @return new scale.
 */


function getViewportInfo () {
  return info
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function extend$1 (to) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  if (!args || args.length <= 0) { return to }
  args.forEach(function (from) {
    if (typeof from !== 'object') { return }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createEvent (target, type, props) {
  var event = new Event(type, { bubbles: false });
  // event.preventDefault()
  // event.stopPropagation()

  extend$1(event, props);
  //  phantomjs don't support customer event
  if (window.navigator.userAgent.indexOf('PhantomJS') !== -1) {
    return event
  }
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target || null
    });
  }
  catch (err) {
    return extend$1({}, event, { target: target || null })
  }
  return event
}

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createCustomEvent (target, type, props) {
  // compatibility: http://caniuse.com/#search=customevent
  // const event = new CustomEvent(type)
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, false, true, {});
  // event.preventDefault()
  // event.stopPropagation()

  extend$1(event, props);

  // event.target is readonly
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target || null
    });
  }
  catch (err) {
    return extend$1({}, event, { target: target || null })
  }

  return event
}

/**
 * dispatch a event on a dom element.
 * @param  {HTMLElement} dom
 * @param  {Event} event
 */
function dispatchEvent (dom, event) {
  dom.dispatchEvent(event);
}

function mapFormEvents (context) {
  var eventMap = {};['input', 'change', 'focus', 'blur'].forEach(function (type) {
    eventMap[type] = function (event) {
      if (context.$el) {
        event.value = context.$el.value;
      }
      context.$emit(type, event);
    };
  });
  return eventMap
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var config = {
  scrollableTypes: ['scroller', 'list', 'waterfall'],
  gestureEvents: [
    'longpress',
    'panstart',
    'panmove',
    'panend',
    'swipe',
    'longpress',
    'tap'
  ]
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function getParentScroller (vm) {
  if (!vm) { return null }
  if (vm._parentScroller) {
    return vm._parentScroller
  }
  function _getParentScroller (parent) {
    if (!parent) { return }
    if (config.scrollableTypes.indexOf(parent.weexType) > -1) {
      vm._parentScroller = parent;
      return parent
    }
    return _getParentScroller(parent.$parent)
  }
  return _getParentScroller(vm.$parent)
}

function hasIntersection (rect, ctRect) {
  return (rect.left < ctRect.right && rect.right > ctRect.left)
    && (rect.top < ctRect.bottom && rect.bottom > ctRect.top)
}

/**
 * isElementVisible
 * @param  {HTMLElement}  el    a dom element.
 * @param  {HTMLElement}  container  optional, the container of this el.
 */
function isElementVisible (el, container) {
  if (!el.getBoundingClientRect) { return false }
  var bodyRect = {
    top: 0,
    left: 0,
    bottom: window.innerHeight,
    right: window.innerWidth
  };
  var ctRect = (container === document.body)
    ? bodyRect : container
    ? container.getBoundingClientRect() : bodyRect;
  return hasIntersection(
    el.getBoundingClientRect(),
    ctRect)
}

function isComponentVisible (component) {
  if (component.$el) {
    var scroller = getParentScroller(component);
    if (scroller && scroller.$el) {
      return hasIntersection(
        component.$el.getBoundingClientRect(),
        scroller.$el.getBoundingClientRect()
      )
    }
    else {
      return isElementVisible(component.$el)
    }
  }
  return false
}

// to trigger the appear/disappear event.
function triggerEvent (elm, handlers, isShow, dir) {
  var evt = isShow ? 'appear' : 'disappear';
  var listener = handlers[evt];
  if (listener && listener.fn) {
    listener = listener.fn;
  }
  if (listener) {
    listener(createEvent(elm, evt, {
      direction: dir
    }));
  }
}

/**
 * get all event listeners. including bound handlers in all parent vnodes.
 */
function getEventHandlers (context) {
  var vnode = context.$vnode;
  var handlers = {};
  var attachedVnodes = [];
  while (vnode) {
    attachedVnodes.push(vnode);
    vnode = vnode.parent;
  }
  attachedVnodes.forEach(function (vnode) {
    var parentListeners = vnode.componentOptions && vnode.componentOptions.listeners;
    var dataOn = vnode.data && vnode.data.on;
    extend(handlers, parentListeners, dataOn);
  });
  return handlers
}

/**
 * Watch element's visibility to tell whether should trigger a appear/disappear
 * event in scroll handler.
 */
function watchAppear (context) {
  var el = context && context.$el;
  if (!el) { return }

  var handlers = getEventHandlers(context);
  if (!handlers.appear && !handlers.disappear) {
    return
  }

  var isWindow = false;
  var container = window;
  var scroller = getParentScroller(context);
  if (scroller && scroller.$el) {
    container = scroller.$el;
  }
  else {
    isWindow = true;
  }

  // add current vm to the container's appear watch list.
  if (!container._watchAppearList) {
    container._watchAppearList = [];
  }
  container._watchAppearList.push(context);
  if (container._scrollWatched) { return }

  /**
   * Code below will only exec once for binding scroll handler for parent container.
   */
  container._scrollWatched = true;
  var scrollHandler = throttle(function (event) {
    /**
     * detect scrolling direction.
     * direction only support up & down yet.
     * TODO: direction support left & right.
     */
    var scrollTop = isWindow ? window.pageYOffset : container.scrollTop;
    var preTop = container._lastScrollTop;
    container._lastScrollTop = scrollTop;
    var dir = scrollTop < preTop
      ? 'down' : scrollTop > preTop
      ? 'up' : null;

    var watchAppearList = container._watchAppearList || [];
    var len = watchAppearList.length;
    for (var i = 0; i < len; i++) {
      var vm = watchAppearList[i];
      var visible = isElementVisible(vm.$el, isWindow ? document.body : container);
      detectAppear(vm, visible, dir);
    }
  }, 25, true);
  container.addEventListener('scroll', scrollHandler, false);
}

/**
 * trigger a appear event.
 */
function triggerAppear (context, visible) {
  if (!context || !context.$el) { return }
  if (!visible) {
    var container = document.body;
    var scroller = getParentScroller(context);
    if (scroller && scroller.$el) {
      container = scroller.$el;
    }
    visible = isElementVisible(context.$el, container);
  }
  return detectAppear(context, visible)
}

/**
 * trigger a disappear event.
 */
function triggerDisappear (context) {
  return detectAppear(context, false)
}

/**
 * decide whether to trigger a appear/disappear event.
 * @param {VueComponent} context
 * @param {boolean} visible
 * @param {string} dir
 */
function detectAppear (context, visible, dir) {
  if ( dir === void 0 ) dir = null;

  var el = context && context.$el;
  if (!el) { return }
  var handlers = getEventHandlers(context);
  if (!handlers[visible ? 'appear' : 'disappear']) { return }
  /**
   * if the component hasn't appeared for once yet, then it shouldn't trigger
   * a disappear event at all.
   */
  if (!visible && !context._appearedOnce) { return }
  if (!context._visible === visible) {
    if (!context._appearedOnce) {
      context._appearedOnce = true;
    }
    context._visible = visible;
    triggerEvent(el, handlers, visible, dir);
  }
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

function preLoadImg (src,
    loadCallback,
    errorCallback) {
  var img = new Image();
  img.onload = loadCallback ? loadCallback.bind(img) : null;
  img.onerror = errorCallback ? errorCallback.bind(img) : null;
  img.src = src;
}

function applySrc (item, src, placeholderSrc) {
  if (!src) { return }
  function finallCb () {
    delete item._src_loading;
  }
  if (item._src_loading) {
    return
  }
  /**
   * 1. apply src immediately in case javscript blocks the image loading
   *  before next tick.
   */
  item.style.backgroundImage = "url(" + (src || '') + ")";
  item.removeAttribute('img-src');
  /**
   * 2. then load the img src with Image constructor (but would not post
   *  a request again), just to trigger the load event.
   */
  item._src_loading = true;
  preLoadImg(src, function (evt) {
    item.style.backgroundImage = "url(" + (src || '') + ")";
    var ref = this;
    var naturalWidth = ref.width;
    var naturalHeight = ref.height;
    var params = {
      success: true,
      size: { naturalWidth: naturalWidth, naturalHeight: naturalHeight }
    };
    dispatchEvent(item, createEvent(item, 'load', params));
    finallCb();
  }, function (evt) {
    var params = {
      success: false,
      size: { naturalWidth: 0, naturalHeight: 0 }
    };
    dispatchEvent(item, createEvent(item, 'load', params));
    if (placeholderSrc) {
      preLoadImg(placeholderSrc, function () {
        item.style.backgroundImage = "url(" + (placeholderSrc || '') + ")";
      });
    }
    finallCb();
  });
}

function fireLazyload (el, ignoreVisibility) {
  if (Array.isArray(el)) {
    return el.forEach(function (ct) { return fireLazyload(ct); })
  }
  el = el || document.body;
  if (!el) { return }
  var imgs = (el || document.body).querySelectorAll('[img-src]');
  if (el.getAttribute('img-src')) { imgs = [el]; }
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    if (typeof ignoreVisibility === 'boolean' && ignoreVisibility) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
    else if (isElementVisible(img, el)) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
  }
}

/**
 * cache a throttle lazyload function for every container element
 * once for different wait times separate.
 *   the architecture of this cache:
 *      cache: {
 *        el.id: {
 *          wait: throttledFunction () { ... }
 *        }
 *      }
 */
var cache = {};
var _uid$2 = 1;
function getThrottleLazyload (wait, el) {
  if ( wait === void 0 ) wait = 16;
  if ( el === void 0 ) el = document.body;

  var id = +(el && el.dataset.throttleId);
  if (isNaN(id) || id <= 0) {
    id = _uid$2++;
    el && el.setAttribute('data-throttle-id', id + '');
  }

  !cache[id] && (cache[id] = {});
  var throttled = cache[id][wait] ||
    (cache[id][wait] = throttle(
      fireLazyload.bind(this, el),
      parseFloat(wait),
      // true for callLastTime.
      // to trigger once more time after the last throttled function called with a little more delay.
      true)
    );
  return throttled
}

var capitalizeString_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];
});

var prefixProperty_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = capitalizeString_1;

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];
});

var prefixValue_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    );if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];
});

var addNewValuesOnly_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];
});

var isObject_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];
});

var createPrefixer_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = prefixProperty_1;

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = prefixValue_1;

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = addNewValuesOnly_1;

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = isObject_1;

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value
        // handle array values
        );
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        );if (_processedValue) {
          style[property] = _processedValue;
        }

        (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];
});

var staticData = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

exports.default = {
  plugins: [],
  prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
};
module.exports = exports["default"];
});

var cursor_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var isPrefixedValue_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;

var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];
});

var isPrefixedValue = unwrapExports(isPrefixedValue_1);

var crossFade_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];
});

var filter_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];
});

var flex_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];
});

var flexboxOld_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];
});

/*  */
// direction to replace
var directions = {
  top: 'bottom',
  left: 'right',
  bottom: 'top',
  right: 'left'
};

var prefixes = ['-webkit-', '-moz-'];
var values$1 = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

/**
 * covert valStr into deg through full angle.
 */
function normalizeAngleUnit(valStr, full) {
  var val = parseFloat(valStr);
  return val / full * 360
}

function wrapRange(min, max, value) {
  var maxLessMin = max - min;
  return ((value - min) % maxLessMin + maxLessMin) % maxLessMin + min;
}

/**
 * normalize angle value.
 */
function normalize (value) {
  if (!value) {
    return value
  }
  return value
    .trim()
    .replace(/^([+-]?\d+(?:.\d+)?)grad/, function ($0, $1) {
      return ((normalizeAngleUnit($1, 400)) + "deg")
    })
    .replace(/^([+-]?\d+(?:.\d+)?)rad/, function ($0, $1) {
      return ((normalizeAngleUnit($1, 2 * Math.PI)) + "deg")
    })
    .replace(/^([+-]?\d+(?:.\d+)?)turn/, function ($0, $1) {
      return ((normalizeAngleUnit($1, 1)) + "deg")
    })
    .replace(/^([+-]?\d+(?:.\d+)?)deg/, function ($0, $1) {
      var val = (wrapRange(0, 360, parseFloat($1))) + "deg";
      switch (val) {
        case '0deg':
          val = 'to top';
          break
        case '90deg':
          val = 'to right';
          break
        case '180deg':
          val = 'to bottom';
          break
        case '270deg':
          val = 'to left';
          break
      }
      return val
    })
}

/**
 * convert directions to old version.
 */
function convertDirection (value) {
  return value
    .replace(/^to\s(top|left|bottom|right)(?:\s+(top|left|bottom|right))?/, function ($0, $1, $2) {
      var dir2 = $2 && (" " + (directions[$2])) || '';
      return ("" + (directions[$1]) + dir2)
    })
    .replace(/^([+-]?\d+(?:.\d+)?)deg/, function ($0, $1) {
      var val = Math.abs(450 - parseFloat($1)) % 360;
      val = parseFloat(val.toFixed(3));
      return (val + "deg")
    })
}

/**
 * fix radial direction syntax.
 * e.g.
 *  farthest-side at 0 50%, white, black
 *   -> 0 50%, farthest-side, white, black
 */
function fixRadial (value) {
  return value.replace(/^(\S+)\sat\s([^,]+)/, function ($0, $1, $2) {
    return ($2 + ", " + $1)
  })
}

function transformValue (value) {
  value = normalize(value);
  value = convertDirection(value);
  value = fixRadial(value);
  return value
}

function gradient(property, value) {
  if (typeof value === 'string' && !isPrefixedValue(value) && values$1.test(value)) {
    var insertPrefixFlag = '@@@';
    var reg = new RegExp(
      ("(" + (values$1.toString().substr(1).replace(/\/$/, '')) + ")\\(([^)]+)\\)"),
      'g'
    );
    var newValue = value.replace(
      reg,
      function ($0, $1, $2) {
        return ("" + insertPrefixFlag + $1 + "(" + (transformValue($2)) + ")")
      });
    var results = prefixes.map(function (prefix) { return newValue.replace(
        new RegExp(insertPrefixFlag, 'g'),
        prefix
      ); });
    results.push(value);
    return results
  }
}


var gradient$1 = Object.freeze({
	default: gradient
});

var imageSet_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];
});

var position_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];
});

var sizing_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache$1 = {};

function hyphenateStyleName(string) {
    return string in cache$1
    ? cache$1[string]
    : cache$1[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

var index$1 = hyphenateStyleName;

var hyphenateProperty_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = index$1;

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];
});

var transition_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = hyphenateProperty_1;

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = capitalizeString_1;

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap
    // if the property is already prefixed
    );var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];
});

var require$$4$7 = ( gradient$1 && gradient$1['default'] ) || gradient$1;

var index = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPrefixer = createPrefixer_1;

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _staticData = staticData;

var _staticData2 = _interopRequireDefault(_staticData);

var _cursor = cursor_1;

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = crossFade_1;

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = filter_1;

var _filter2 = _interopRequireDefault(_filter);

var _flex = flex_1;

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = flexboxOld_1;

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = require$$4$7;

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = imageSet_1;

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = position_1;

var _position2 = _interopRequireDefault(_position);

var _sizing = sizing_1;

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = transition_1;

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

exports.default = (0, _createPrefixer2.default)({
  prefixMap: _staticData2.default.prefixMap,
  plugins: plugins
});
module.exports = exports['default'];
});

var addPrefix = unwrapExports(index);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

var noUnitsNumberKeys = [
  'flex',
  'opacity',
  'zIndex',
  'fontWeight',
  'lines'
];

// whether to support using 0.5px to paint 1px width border.
var _supportHairlines;
function supportHairlines () {
  if (typeof _supportHairlines === 'undefined') {
    var dpr = window.devicePixelRatio;
    if (dpr && dpr >= 2 && document.documentElement) {
      var docElm = document.documentElement;
      var testElm = document.createElement('div');
      var fakeBody = document.createElement('body');
      var beforeNode = docElm.firstElementChild || docElm.firstChild;
      testElm.style.border = '0.5px solid transparent';
      fakeBody.appendChild(testElm);
      docElm.insertBefore(fakeBody, beforeNode);
      _supportHairlines = testElm.offsetHeight === 1;
      docElm.removeChild(fakeBody);
    }
    else {
      _supportHairlines = false;
    }
  }
  return _supportHairlines
}

/**
 * remove comments from a cssText.
 */
function trimComment (cssText) {
  return cssText.replace(/(?:\/\*)[\s\S]*?\*\//g, '')
}

var support = null;

function supportSticky () {
  if (support !== null) {
    return support
  }
  var element = window.document.createElement('div');
  var elementStyle = element.style;
  elementStyle.cssText = 'position:-webkit-sticky;position:sticky;';
  support = elementStyle.position.indexOf('sticky') !== -1;
  return support
}

var regPercentage = /^[+-]?\d+(\.\d+)?%$/;
function isPercentage (val) {
  return regPercentage.test(val)
}

var regUnitsNum = /^([+-]?\d+(?:\.\d+)?)([p,w]x)?$/; // support units: px, wx.
function normalizeUnitsNum (val) {
  var match = val.match(regUnitsNum);
  if (!match) { return '' }
  var unit = 'px'; // px by default.
  if (match[2]) {
    unit = match[2];
  }
  return parseScale(parseFloat(match[1]), unit)
}

function getUnitScaleMap () {
  var ref = getViewportInfo();
  var scale = ref.scale;
  var dpr = ref.dpr;
  return {
    px: scale,
    wx: scale * dpr
  }
}

function limitScale (val, limit) {
  limit = limit || 1;
  var sign = val === 0 ? 0 : val > 0 ? 1 : -1;
  var newVal = Math.abs(val) > limit ? val : sign * limit;
  // support 1px device width.
  if (newVal === 1 && val < 1 && supportHairlines()) {
    newVal = 0.5;
  }
  return newVal
}

function parseScale (val, unit) {
  var unitScaleMap = getUnitScaleMap();
  return limitScale(val * unitScaleMap[unit]) + 'px'
}

function normalizeString (styleKey, styleVal) {
  if (isPercentage(styleVal)) {
    return styleVal
  }

  /**
   * 1. test if is a regular scale css. e.g. `width: 100px;`
   *  this should be a standalone number value with or without unit, otherwise
   *  it shouldn't be changed.
   */
  var unitsNum = normalizeUnitsNum(styleVal);
  if (unitsNum) { return unitsNum }

  /**
   * 2. if a string contains multiple px values, than they should be all normalized.
   *  values should have wx or px units, otherwise they should be left unchanged.
   *  e.g.
   *    transform: translate(10px, 6px, 0)
   *    border: 2px solid red
   */
  var numReg = /([+-]?[\d.]+)([p,w]x)/ig;
  if (numReg.test(styleVal)) {
    var unitScaleMap = getUnitScaleMap();
    var val = styleVal.replace(numReg, function (m, $0, $1) {
      var res = parseFloat($0) * unitScaleMap[$1];
      return limitScale(res) + 'px'
    });
    return val
  }

  // otherwise
  return styleVal
}

function autoPrefix (style) {
  var prefixed = addPrefix(style);
  // flex only added WebkitFlex. Should add WebkitBoxFlex also.
  var flex = prefixed.flex;
  if (flex) {
    prefixed.WebkitBoxFlex = flex;
  }
  return prefixed
}

function normalizeNumber (styleKey, styleVal) {
  var ref = getViewportInfo();
  var scale = ref.scale;
  return styleVal * scale + 'px'
}

/**
 * normalize style to adapte to current viewport by multiply current scale.
 * @param  {object} style: should be camelCase.
 */
function normalizeStyle (style) {
  var res = {};
  for (var key in style) {
    var val = style[key];
    if (noUnitsNumberKeys.indexOf(key) > -1) {
      res[key] = val;
      continue
    }
    switch (typeof val) {
      case 'string':
        res[key] = normalizeString(key, val);
        break
      case 'number':
        res[key] = normalizeNumber(key, val);
        break
      default:
        res[key] = val;
        break
    }
  }
  return res
}

/**
 * get transformObj
 */
function getTransformObj (elm) {
  var styleObj = {};
  if (!elm) { return styleObj }
  var transformStr = elm.style.webkitTransform || elm.style.transform;
  if (transformStr && transformStr.match(/(?: *(?:translate|rotate|scale)[^(]*\([^(]+\))+/i)) {
    styleObj = transformStr.trim().replace(/, +/g, ',').split(' ').reduce(function (pre, str) {
      ['translate', 'scale', 'rotate'].forEach(function (name) {
        if (new RegExp(name, 'i').test(str)) {
          pre[name] = str;
        }
      });
      return pre
    }, {});
  }
  return styleObj
}

/**
 * translate a transform string from a transformObj.
 */
function getTransformStr (obj) {
  return Object.keys(obj).reduce(function (pre, key) {
    return pre + obj[key] + ' '
  }, '')
}

/**
 * add transform style to element.
 * @param {HTMLElement} elm
 * @param {object} style: transform object, format is like this:
 *   {
 *     translate: 'translate3d(2px, 2px, 2px)',
 *     scale: 'scale(0.2)',
 *     rotate: 'rotate(30deg)'
 *   }
 * @param {boolean} replace: whether to replace all transform properties.
 */
function addTransform (elm, style, replace) {
  if (!style) { return }
  var styleObj = {};
  if (!replace) {
    styleObj = getTransformObj(elm);
  }
  for (var key in style) {
    var val = style[key];
    if (val) {
      styleObj[key] = val;
    }
  }
  var resStr = getTransformStr(styleObj);
  elm.style.webkitTransform = resStr;
  elm.style.transform = resStr;
}

/**
 * add translate X to the element.
 */
function addTranslateX (elm, toAdd) {
  if (!toAdd) { return }
  var styleObj = getTransformObj(elm);
  if (!styleObj.translate) {
    styleObj.translate = 'translate3d(0px, 0px, 0px)';
  }
  styleObj.translate = styleObj.translate.replace(/[+-\d.]+[pw]x/, function ($0) {
    return (parseFloat($0) + toAdd) + 'px'
  });
  var resStr = getTransformStr(styleObj);
  elm.style.webkitTransform = resStr;
  elm.style.transform = resStr;
}

/**
 * copy a transform behaviour from one element to another.
 * key could be: 'translate' | 'scale' | 'rotate'
 */
function copyTransform (from, to, key) {
  var str;
  if (!key) {
    str = from.style.webkitTransform || from.style.transform;
  }
  else {
    var fromObj = getTransformObj(from);
    if (!fromObj[key]) { return }
    var toObj = getTransformObj(to);
    toObj[key] = fromObj[key];
    str = getTransformStr(toObj);
  }
  to.style.webkitTransform = str;
  to.style.transform = str;
}

/**
 * get color's r, g, b value.
 * @param {string} color support all kinds of value of color.
 */
function getRgb (color) {
  var haxReg = /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/;
  var rgbReg = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  var span = document.createElement('span');
  var body = document.body;
  span.style.cssText = "color: " + color + "; width: 0px; height: 0px;";
  body && body.appendChild(span);
  color = window.getComputedStyle(span).color + '';
  body && body.removeChild(span);

  var match;
  match = color.match(haxReg);
  if (match) {
    return {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16)
    }
  }
  match = color.match(rgbReg);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3])
    }
  }
}

/**
 * get style sheet with owner node's id
 * @param {string} id owner node id.
 */
function getStyleSheetById (id) {
  if (!id) { return }
  var styleSheets = document.styleSheets;
  var len = styleSheets.length;
  for (var i = 0; i < len; i++) {
    var styleSheet = styleSheets[i];
    if (styleSheet.ownerNode.id === id) {
      return styleSheet
    }
  }
}

function getChildrenTotalWidth (children) {
  var len = children.length;
  var total = 0;
  for (var i = 0; i < len; i++) {
    total += children[i].getBoundingClientRect().width;
  }
  return total
}
/**
 * get total content width of the element.
 * @param {HTMLElement} elm
 */
function getRangeWidth (elm) {
  var children = elm.children;
  if (!children) {
    return elm.getBoundingClientRect().width
  }
  if (!Range) {
    return getChildrenTotalWidth(children)
  }
  var range = document.createRange();
  if (!range.selectNodeContents) {
    return getChildrenTotalWidth(children)
  }
  range.selectNodeContents(elm);
  return range.getBoundingClientRect().width
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



var utils = Object.freeze({
	extend: extend,
	extendTruthy: extendTruthy,
	extendKeys: extendKeys,
	extractKeys: extractKeys,
	bind: bind,
	debounce: debounce,
	depress: depress,
	throttle: throttle,
	loopArray: loopArray,
	cached: cached,
	camelize: camelize,
	camelizeKeys: camelizeKeys,
	capitalize: capitalize,
	hyphenate: hyphenate,
	hyphenateKeys: hyphenateKeys,
	hyphenateStyleKeys: hyphenateStyleKeys,
	camelToKebab: camelToKebab,
	appendCss: appendCss,
	nextFrame: nextFrame,
	toCSSText: toCSSText,
	createEvent: createEvent,
	createCustomEvent: createCustomEvent,
	dispatchEvent: dispatchEvent,
	mapFormEvents: mapFormEvents,
	getParentScroller: getParentScroller,
	hasIntersection: hasIntersection,
	isElementVisible: isElementVisible,
	isComponentVisible: isComponentVisible,
	getEventHandlers: getEventHandlers,
	watchAppear: watchAppear,
	triggerAppear: triggerAppear,
	triggerDisappear: triggerDisappear,
	detectAppear: detectAppear,
	applySrc: applySrc,
	fireLazyload: fireLazyload,
	getThrottleLazyload: getThrottleLazyload,
	supportHairlines: supportHairlines,
	trimComment: trimComment,
	supportSticky: supportSticky,
	isPercentage: isPercentage,
	normalizeUnitsNum: normalizeUnitsNum,
	normalizeString: normalizeString,
	autoPrefix: autoPrefix,
	normalizeNumber: normalizeNumber,
	normalizeStyle: normalizeStyle,
	getTransformObj: getTransformObj,
	getTransformStr: getTransformStr,
	addTransform: addTransform,
	addTranslateX: addTranslateX,
	copyTransform: copyTransform,
	getRgb: getRgb,
	getStyleSheetById: getStyleSheetById,
	getRangeWidth: getRangeWidth,
	isPlainObject: isPlainObject,
	isArray: isArray
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * get WXEnvironment info.
 * @param  {object} viewportInfo: info about viewport.
 * @param  {object} envInfo: info parsed from lib.env.
 */
function initEnv (viewportInfo, envInfo) {
  var browserName = envInfo.browser ? envInfo.browser.name : navigator.appName;
  var browserVersion = envInfo.browser ? envInfo.browser.version.val : null;
  var osName = envInfo.os.name;
  if (osName.match(/(iPhone|iPad|iPod)/i)) {
    osName = 'iOS';
  }
  else if (osName.match(/Android/i)) {
    osName = 'android';
  }
  var osVersion = envInfo.os.version.val;
  var env = {
    platform: 'Web',
    weexVersion: '0.12.3',
    userAgent: navigator.userAgent,
    appName: browserName,
    appVersion: browserVersion,
    osName: osName,
    osVersion: osVersion,
    deviceModel: envInfo.os.name || null
  };
  /**
   * viewportInfo: scale, deviceWidth, deviceHeight. dpr
   */
  return extend(env, viewportInfo)
}

// const viewportInfo = initViewport()

// 750 by default currently
// const scale = viewportInfo.scale

// const units = {
//   REM: 12 * scale,
//   VW: viewportInfo.deviceWidth / 100,
//   VH: viewportInfo.deviceHeight / 100,
//   VMIN: Math.min(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
//   VMAX: Math.max(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
//   CM: 96 / 2.54 * scale,
//   MM: 96 / 25.4 * scale,
//   Q: 96 / 25.4 / 4 * scale,
//   IN: 96 * scale,
//   PT: 96 / 72 * scale,
//   PC: 96 / 6 * scale,
//   PX: scale
// }

// Object.freeze(units)
// Object.freeze(env)

// window.CSS_UNIT = units
window.WXEnvironment = initEnv(init$2(), window.lib.env);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* global Vue */

var weexModules = {};
var _roots = [];

var weex$4 = {
  __vue__: null,
  utils: utils,
  // units: window.CSS_UNIT,
  config: {
    env: window.WXEnvironment,
    bundleUrl: location.href
  },

  _components: {},

  document: {
    body: {}
  },

  requireModule: function requireModule (moduleName) {
    return weexModules[moduleName]
  },

  registerModule: function registerModule () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return (ref = this).registerApiModule.apply(ref, args)
    var ref;
  },

  /**
   * Register a new vue instance in this weex instance. Put its root element into weex.document.body.children, so
   * that user can use weex.document.body to walk through all dom structures in all vue instances in the page.
   */
  registerVueInstance: function registerVueInstance (instance) {
    if (!instance instanceof Vue) {
      {
        console.error("[vue-render] registerVueInstance: invalid instance, not a vue instance.");
      }
      return
    }
    var root = instance.$root;
    if (!root || !root.$el) {
      {
        console.error("[vue-render] registerVueInstance: instance has no root.");
      }
      return
    }
    this.document.body.children.push(root.$el);
  },

  // @deprecated
  require: function require () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
    return (ref = this).requireModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  // TODO: rename to registerModule
  registerApiModule: function registerApiModule (name, module, meta) {
    var this$1 = this;

    if (!weexModules[name]) {
      weexModules[name] = {};
    }
    if (!!meta && meta.mountType === 'full') {
      weexModules[name] = module;
    }
    for (var key in module) {
      if (module.hasOwnProperty(key)) {
        weexModules[name][key] = bind(module[key], this$1);
      }
    }
  },

  registerComponent: function registerComponent (name, component) {
    if (!this.__vue__) {
      return console.log('[Vue Render] Vue is not found. Please import Vue.js before register a component.')
    }
    this._components[name] = 1;
    if (component._css) {
      var css = component._css.replace(/\b[+-]?[\d.]+rem;?\b/g, function (m) {
        return parseFloat(m) * 75 * weex$4.config.env.scale + 'px'
      });
      appendCss(css, ("weex-cmp-" + name));
      delete component._css;
    }
    this.__vue__.component(name, component);
  },

  // @deprecated
  getRoot: function getRoot () {},

  // @deprecated
  sender: {
    performCallback: function performCallback (callback, data, keepAlive) {
      if (typeof callback === 'function') {
        return callback(data)
      }
      return null
    }
  },

  // @deprecated
  install: function install (module) {
    module.init(this);
  }
};

Object.defineProperty(weex$4.document.body, 'children', {
  get: function get () { return _roots }
})

; ['on', 'once', 'off', 'emit'].forEach(function (method) {
  weex$4[method] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (!this._vue) {
      this._vue = new this.__vue__();
    }
    return (ref = this._vue)[("$" + method)].apply(ref, args)
    var ref;
  };
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 
/**
 * @fileOverview: perf data recorder.
 */

var perf = window._weex_perf = {
  time: {}
};

var tmp = {};

function getNow () {
  var performance = window.performance;
  return performance && performance.now ? performance.now() : new Date().getTime()
}

function tagBegin (name) {
  tmp[name] = getNow();
}

function tagEnd (name) {
  var pre = perf.time[name];
  if (!pre) {
    pre = 0;
  }
  perf.time[name] = pre + getNow() - tmp[name];
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* istanbul ignore next */

var pseudoId = 0;
/**
 * get scoped class style map from stylesheets in <head>.
 */
function getHeadStyleMap () {
  {
    tagBegin('getHeadStyleMap');
  }
  var needToRemoveStyleSheetNodes = [];
  var styleSheetsArr = Array.from(document.styleSheets || []).filter(function (styleSheet) {
    return styleSheet.ownerNode.getAttribute('weex-scanned') !== '1'
  });

  var res = Array.from(styleSheetsArr)
    .reduce(function (pre, styleSheet) {
      styleSheet.ownerNode.setAttribute('weex-scanned', 1);
      /**
       * why not using styleSheet.rules || styleSheet.cssRules to get css rules ?
       * because weex's components defined non-standard style attributes, which is
       * auto ignored when access rule.cssText.
       * another reason not to use cssRules directy:
       * @issue: https://stackoverflow.com/questions/21642277/security-error-the-operation-is-insecure-in-firefox-document-stylesheets
       */
      if (
        // css in a link. just ignore this. probably a link stylesheet.
        (styleSheet.ownerNode.tagName.toLowerCase() === 'link')
        || !styleSheet.ownerNode.textContent
        // pseudo class styleSheet node is generated by weex. just ignore it.
        || styleSheet.ownerNode.id.match(/weex-pseudo-\d+/)) {
        return pre
      }
      /**
       * start to analyze it's content.
       */
      var strArr = trimComment(styleSheet.ownerNode.textContent.trim()).split(/}/);
      var len = strArr.length;
      var rules = [];
      for (var i = 0; i < len; i++) {
        var str = strArr[i];
        if (!str || str.match(/^\s*$/)) {
          continue
        }
        /**
         * should match these cases:
         * .a[data-v-xxx] { color: red; }
         * .a[data-v-xxx]:active { color: green; }
         * .a[data-v-xxx], .b[data-v-xxx] { color: red; }
         *
         * should not match these cases:
         * .a { color: red; }
         * etc.
         */
        var match = str.match(/((?:,?\s*\.[\w-]+\[data-v-\w+\](?::\w+)?)+)\s*({[^}]+)/);
        if (!match) {
          // not the vue static class styles map. so acquire no rules for this styleSheet.
          // just jump through this styleSheet and go to analyzing next.
          return pre
        }
        var clsNms = match[1].split(',').map(function (n) { return n.trim(); });
        var cssText = match[2].replace(/[{}]/g, '').trim();
        var clsNmsIdx = 0;
        var clsNmsLen = clsNms.length;
        while (clsNmsIdx < clsNmsLen) {
          rules.push({
            selectorText: clsNms[clsNmsIdx],
            cssText: cssText
          });
          clsNmsIdx++;
        }
      }
      Array.from(rules).forEach(function (rule) {
        var selector = rule.selectorText || '';
        var isPseudo = false;
        if (selector.match(/:(?:active|focus|enabled|disabled)/)) {
          isPseudo = true;
        }
        var styleObj = trimComment(rule.cssText).split(';')
          .reduce(function (styleObj, statement) {
            statement = statement.trim();
            if (statement && statement.indexOf('/*') <= -1) {
              var resArr = statement.split(':').map(function (part) { return part.trim(); });
              styleObj[resArr[0]] = resArr[1];
            }
            return styleObj
          }, {});
        if (isPseudo) {
          var txt = Object.keys(styleObj).reduce(function (pre, cur) {
            return pre + cur + ":" + (styleObj[cur]) + "!important;"
          }, '');
          appendCss((selector + "{" + txt + "}"), ("weex-pseudo-" + (pseudoId++)));
        }
        var objMap = !isPseudo ? pre : pre.pseudo;
        var res = objMap[selector];
        if (!res) {
          objMap[selector] = styleObj;
        }
        else {
          extend(objMap[selector], styleObj);
        }
      });
      /**
       * remove this styleSheet node since it's in the styleMap already. And this style
       * should only be fetched and used from styleMap to generate the final combined
       * component style, not from the stylesheet itself.
       */
      needToRemoveStyleSheetNodes.push(styleSheet.ownerNode);
      return pre
    }, { pseudo: {}});
  if (!window._no_remove_style_sheets) {
    needToRemoveStyleSheetNodes.forEach(function (node) {
      node.parentNode.removeChild(node);
    });
  }
  else {
    console.warn("[vue-render] you've defined '_no_remove_style_sheets' and the v-data-xx stylesheets will not be removed.");
  }
  {
    tagEnd('getHeadStyleMap');
  }
  return res
}

// export function getScopeIds (context) {
//   const arr = []
//   let ctx = context
//   let scopeId
//   while (ctx) {
//     scopeId = ctx.$options._scopeId
//     scopeId && arr.push(scopeId)
//     ctx = ctx.$options.parent
//   }
//   return arr
// }

function getScopeId (vnode) {
  return vnode.context.$options._scopeId
}

/**
 * get style in <style scoped> tags for this component.
 */
function getScopeStyle (vnode, classNames) {
  var scopeId = getScopeId(vnode);
  var style = {};
  var styleMap = weex._styleMap || {};
  var clsNmsIdx = 0;
  var clsNmsLen = classNames.length;
  while (clsNmsIdx < clsNmsLen) {
    var cls = "." + (classNames[clsNmsIdx]) + "[" + scopeId + "]";
    var map = styleMap[cls];
    map && extendTruthy(style, map);
    clsNmsIdx++;
  }
  return camelizeKeys(style)
}

function getStyle (vnode, extract) {
  var data = vnode.data || {};
  var staticClassNames = (typeof data.staticClass === 'string') ? data.staticClass.split(' ') : (data.staticClass || []);
  var classNames = (typeof data.class === 'string') ? data.class.split(' ') : (data.class || []);
  var clsNms = staticClassNames.concat(classNames);
  var style = normalizeStyle(getScopeStyle(vnode, clsNms));
  /**
   * cache static style and bind style.
   * cached staticStyle (including style and staticStyle) has already been normalized
   * in $processStyle. So there's no need to normalize it again.
   */
  if (!data.cached) {
    // cache staticStyle once in the beginning.
    data.cached = extendTruthy({}, data.staticStyle);
  }
  // cache binding style every time since the binding style is variable.
  extendTruthy(data.cached, data.style);
  extend(style, data.cached);
  data.staticStyle = style;
  if (extract) {
    delete data.staticStyle;
    delete data.style;
  }
  return style
}

/**
 * get style merged with static styles, binding styles, and scoped class styles,
 * with keys in camelcase.
 */
function getComponentStyle (context, extract) {
  if (!context.$vnode) {
    {
      return console.error('[vue-render] getComponentStyle failed: no $vnode in context.')
    }
    return {}
  }
  var style = {};
  var vnode = context.$vnode;
  while (vnode) {
    extend(style, getStyle(vnode, extract));
    vnode = vnode.parent;
  }
  style = autoPrefix(style);
  /**
   * when prefixed value is a array, it should be applied to element
   * during the next tick.
   * e.g.
   *  background-image:  linear-gradient(to top,#f5fefd,#ffffff);
   *  will generate:
   *  {
   *    backgroundImage: [
   *      "-webkit-linear-gradient(to top,#f5fefd,#ffffff)",
   *      "-moz-linear-gradient(to top,#f5fefd,#ffffff)",
   *      "linear-gradient(to top,#f5fefd,#ffffff)"]
   *  }
   */
  var loop = function ( k ) {
    if (Array.isArray(style[k])) {
      var vals = style[k];
      context.$nextTick(function () {
        var el = context.$el;
        if (el) {
          for (var i = 0; i < vals.length; i++) {
            el.style[k] = vals[i];
          }
        }
      });
      if (k !== 'position') { delete style[k]; }
    }
  };

  for (var k in style) loop( k );

  /**
   * If position is 'sticky', then add it to the stickyChildren of the parent scroller.
   */
  var pos = style.position;
  var reg = /sticky$/;
  if (pos === 'fixed') {
    context.$nextTick(function () {
      var el = context.$el;
      if (el) {
        el.classList.add('weex-fixed');
      }
    });
  }
  else if (isArray(pos) && pos[0].match(reg) || (pos + '').match(reg)) {
    delete style.position;
    // use native sticky.
    if (supportSticky()) {
      context.$nextTick(function () {
        var el = context.$el;
        if (el) {
          el.classList.add('weex-ios-sticky');
        }
      });
    }
    // use re-implementation of sticky.
    else if (!context._stickyAdded) {
      var uid = context._uid;
      var scroller = getParentScroller(context);
      if (scroller) {
        context._stickyAdded = true;
        if (!scroller._stickyChildren) {
          scroller._stickyChildren = {};
        }
        scroller._stickyChildren[uid] = context;
      }
      context.$nextTick(function () {
        var el = context.$el;
        if (el) {
          context._initOffsetTop = el.offsetTop;
        }
      });
    }
  }

  return style
}

function extractComponentStyle (context) {
  return getComponentStyle(context, true)
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * remove text nodes in the nodes array.
 * @param  {Array} nodes
 * @return {Array} nodes without text nodes.
 */
function trimTextVNodes (vnodes) {
  if (isArray(vnodes)) {
    return vnodes.filter(function (vnode) { return !!vnode.tag; })
  }
  return vnodes
}

/**
 * get listeners from on config and v-on binding.
 * v-on binding has a priority over on config.
 * @param {vnode} vnode
 * @param {String} evt: event name.
 */
function getListeners (vnode, evt) {
  var handlers = [];
  while (vnode) {
    if (vnode.data && vnode.data.on) {
      var handler = vnode.data.on[evt];
      handler && handlers.push(handler);
    }
    if (vnode.componentOptions && vnode.componentOptions.listeners) {
      var handler$1 = vnode.componentOptions.listeners[evt];
      handler$1 && handlers.push(handler$1);
    }
    vnode = vnode.parent;
  }
  return handlers
}

var supportedEvents = [
  'longpress', 'appear', 'disappear',
  'touchstart', 'touchmove', 'touchend',
  'panstart', 'panmove', 'panend', 'swipe', 'longpress'
];

/**
 * is a element in a '<a>' tag?
 * @param {HTMLElement} el
 */
function isInANode (el) {
  var parent = el.parentNode;
  while (parent && parent !== document.body) {
    if (parent.tagName.toLowerCase() === 'a') {
      return true
    }
    parent = parent.parentNode;
  }
}

/**
 * emit native events to enable v-on.
 * @param {VComponent} context: which one to emit a event on.
 * @param {array | object} extras: extra events. You can pass in multiple arguments here.
 */
function createEventMap (context) {
  var extras = [], len$1 = arguments.length - 1;
  while ( len$1-- > 0 ) extras[ len$1 ] = arguments[ len$1 + 1 ];

  var eventMap = {};
  var gestureEvents = config.gestureEvents;
  /**
   * Bind some original type event to your specified type event handler.
   * e.g. bind 'tap' event to 'click' event listener: bindFunc('tap')('click').
   * Or bind certian event with your specified handler: bindFunc('click', someFunction)
   */
  var bindFunc = function (originalType) {
    return function (listenTo) {
      var handler;
      var evtName = originalType || listenTo;
      if (typeof listenTo === 'function') {
        handler = listenTo;
      }
      else if (typeof listenTo === 'string') {
        handler = function (e) {
          /**
           * 1. use '_triggered' to control actural bubbling (allow original bubbling).
           * 2. use '_for' to distinguish from gesture events generated by other
           *    not-vue-render librarys.
           */
          if (e._triggered
            || gestureEvents.indexOf(originalType) > -1
            && e._for !== 'weex') {
            return
          }

          // but should trigger the closest parent which has bound the
          // event handler.
          var vm = context;
          while (vm) {
            var ons = getListeners(vm.$vnode, listenTo);
            var len = ons.length;
            if (len > 0) {
              var idx = 0;
              while (idx < len) {
                var on = ons[idx];
                if (on && on.fn) {
                  on = on.fn;
                }
                var evt = e;
                if (originalType && evtName !== listenTo) {
                  evt = createEvent(e.target, listenTo);
                }
                on && on.call(vm, evt);
                idx++;
              }
              // once a parent node (or self node) has triggered the handler, then
              // it stops bubbling immediately, and a '_triggered' object is set.
              e._triggered = {
                el: vm.$el
              };
              return
            }
            vm = vm.$parent;
          }
        };
      }
      if (!eventMap[evtName]) {
        eventMap[evtName] = [];
      }
      eventMap[evtName].push(handler);
    }
  };

  /**
   * 1. Dispatch default supported events directly to user's event listeners. These
   * listeners will be triggered before extras event handlers.
   */
  supportedEvents.forEach(bindFunc());

  /**
   * 2. component's extra event bindings. This is mostly for the needs of component's
   * own special behaviours. These handlers will be processed after the user's
   * corresponding event handlers.
   */
  if (extras) {
    var len = extras.length;
    for (var i = 0; i < len; i++) {
      var extra = extras[i];
      if (isArray(extra)) {
        extra.forEach(bindFunc());
      }
      else if (typeof extra === 'object') {
        for (var key in extra) {
          bindFunc(key)(extra[key]);
        }
      }
    }
  }

  /**
   * 3. special binding for click event, which should be a fastclick event without
   * 300ms latency.
   */
  bindFunc('tap')('click');
  /**
   * Special treatment for click event:
   * we already use tap to trigger click event, so the click event should:
   * 1. trigger none of any vm's click listeners.
   * 2. prevent default behaviour for a `<a>` element.
   * 3. stop propagation if triggered already.
   * 4. set a _triggered flag to the event object if triggered already.
   * This means the click event should always be swallowed in silence.
   */
  bindFunc('click')(function (e) {
    if (e._triggered) {
      return
    }
    var vm = context;
    while (vm) {
      var ons = getListeners(vm.$vnode, 'click');
      var len = ons.length;
      if (len > 0 && vm.$el) {
        e.stopPropagation();
        e._triggered = { el: vm.$el };
        return isInANode(vm.$el) && e.preventDefault()
      }
      vm = vm.$parent;
    }
  });

  return eventMap
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



var core$1 = Object.freeze({
	getHeadStyleMap: getHeadStyleMap,
	getScopeId: getScopeId,
	getScopeStyle: getScopeStyle,
	getComponentStyle: getComponentStyle,
	extractComponentStyle: extractComponentStyle,
	trimTextVNodes: trimTextVNodes,
	createEventMap: createEventMap
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var lazyloadWatched = false;
function watchLazyload () {
  lazyloadWatched = true
  ; [
    'scroll' ].forEach(function (evt) {
    window.addEventListener(evt, getThrottleLazyload(25, document.body));
  });
}

var warned = false;
var notePage = 'https://gist.github.com/MrRaindrop/5a805a067146609e5cfd4d64d775d693#file-weex-vue-render-config-for-vue-loader-js';
function warnProcessStyle () {
  if (!warned) {
    warned = true;
    var page = window._process_style_note_page || notePage;
    console.warn("[vue-render]: you should add vue-loader config with $processStyle to enable inline styles's "
      + "normalization. see " + page + " If you already did this, please ignore this message.");
  }
}

var base$1 = {
  beforeCreate: function beforeCreate () {
    if (!lazyloadWatched) {
      watchLazyload();
    }
  },

  mounted: function mounted () {
    if (!weex._root) {
      weex._root = this.$root.$el;
      weex._root.classList.add('weex-root');
    }

    // give warning for not using $processStyle in vue-loader config.
    if (!warned && !window._style_processing_added) {
      warnProcessStyle();
    }

    // bind attrs to $el.
    var i, j;
    if (this.$el && (i = j = this.$vnode) && (i = i.data) && (j = j.componentOptions)) {
      this.$el.attrs = extend({}, i.attrs, j.propsData);
    }
    triggerAppear(this);
    watchAppear(this);
  },

  destroyed: function destroyed () {
    triggerDisappear(this);
  },

  methods: {
    _fireLazyload: function _fireLazyload (el) {
      getThrottleLazyload(25)();
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * get a beforeCreate hook, which has a mark to identify the hook function itself.
 */
function getIdentifiedBeforeCreate () {
  var disposed = {}; // disposed components. Already scanned.
  function beforeCreate () {
    /**
     * get static class style map from document's styleSheets.
     * Weex.on will create a Vue instance. In this case we'll ignore it, since
     * it's not sure whether the scoped style has already attached to head or not.
     */
    var tagName = this.$options && this.$options._componentTag;
    /**
     * For vue-loader ^11.3.x, there's no injectStyle function. The styleSheet
     * is already injected into the head. Just scan it.
     */
    // async component.
    if ((this.$vnode && this.$vnode.data && this.$vnode.data.tag === 'component')
      || (this === this.$root && this.$options && !this._firstScanned)) {
      this._firstScanned = true;
      extend(weex._styleMap, getHeadStyleMap());
    }
    /**
     * For vue-loader ^12.0, the injectStyle function is hooked. We should scan
     * style map after the injectStyle hook called.
     */
    if (((this === this.$root && this.$options)
      || (tagName
      && !weex._components[tagName]
      && !disposed[tagName]))
      && !this._secondScanned) {
      disposed[tagName] = 1;
      this._secondScanned = true;
      var hooks = this.$options.beforeCreate;
      var len = hooks.length;
      var thisHookIdx = 0; // index of this hook in the hooks array.
      for (; thisHookIdx < len; thisHookIdx++) {
        if (hooks[thisHookIdx]._styleMixin) { break }
      }
      var loop = function ( i ) {
        var func = hooks[i];
        if (func.name === 'injectStyle') {
          hooks[i] = function () {
            // call the original injectStyle hook.
            func.call(this);
            // scan the new appended styleSheet.
            extend(weex._styleMap, getHeadStyleMap());
            hooks[i] = func;
          };
        }
      };

      for (var i = thisHookIdx + 1; i < len; i++) loop( i );
    }
  }
  beforeCreate._styleMixin = true;
  return beforeCreate
}

var style = {
  beforeCreate: getIdentifiedBeforeCreate(),

  methods: {
    $processStyle: function $processStyle (style) {
      window._style_processing_added = true;
      if (!style) {
        return
      }
      return normalizeStyle(camelizeKeys(style))
    },

    _extractComponentStyle: function _extractComponentStyle () {
      return extractComponentStyle(this)
    },

    /**
     * get style from class, staticClass, style and staticStyle.
     * merge styles priority: high -> low
     *  1. data.style (bound style).
     *  2. data.staticStyle (inline styles).
     *  3. data.class style (bound class names).
     *  4. data.staticClass style (scoped styles or static classes).
     */
    _getComponentStyle: function _getComponentStyle (data) {
      return getComponentStyle(this)
    },

    _getParentRect: function _getParentRect () {
      var parentElm = this.$options._parentElm;
      return parentElm && parentElm.getBoundingClientRect()
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

// input and textare has some common api and event
var findEnterKeyType = function (key) {
  var keys = ['default', 'go', 'next', 'search', 'send'];
  if (keys.indexOf(key) > -1) {
    return key
  }
  return 'done'
};

var inputCommon = {
  methods: {
    focus: function focus () {
      this.$el && this.$el.focus();
    },
    blur: function blur () {
      this.$el && this.$el.blur();
    },
    // support enter key event
    createKeyboardEvent: function createKeyboardEvent (events) {
      var customKeyType = this.returnKeyType;
      var self = this;
      if (this._events['return']) {
        var keyboardEvents = {
          'keyup': function (ev) {
            var code = ev.keyCode;
            var key = ev.key;
            if (code === 13) {
              if (key.toLowerCase() === 'tab') {
                key = 'next';
              }
              var rightKeyType = findEnterKeyType(customKeyType);
              ev.returnKeyType = rightKeyType;
              ev.value = ev.target.value;
              self.$emit('return', ev);
            }
          }
        };
        events = extend(events, keyboardEvents);
      }
      return events
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var sticky = {
  destroyed: function destroyed () {
    if (!this._stickyAdded) { return }
    var scroller = getParentScroller(this);
    if (!scroller) { return }
    delete scroller._stickyChildren[this._uid];
  },

  methods: {
    _addSticky: function _addSticky () {
      var el = this.$el;
      if (!el || el.nodeType === 1) {
        {
          console.error("[vue-render] $el doesn't exist to add sticky.");
        }
        return
      }
      el.classList.add('sticky');
      if (!this._placeholder) {
        this._placeholder = el.cloneNode(true);
      }
      this._placeholder.style.display = 'block';
      this._placeholder.style.width = this.$el.offsetWidth + 'px';
      this._placeholder.style.height = this.$el.offsetHeight + 'px';
      el.parentNode.insertBefore(this._placeholder, this.$el);
    },

    _removeSticky: function _removeSticky () {
      var el = this.$el;
      if (!el || el.nodeType === 1) {
        {
          console.error("[vue-render] $el doesn't exist to remove sticky.");
        }
        return
      }
      el.classList.remove('sticky');
      if (this._placeholder) {
        this._placeholder.parentNode.removeChild(this._placeholder);
      }
      this._placeholder = null;
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
window.global = window;
window.weex = weex$4;

weex$4._styleMap = {}

; ['getComponentStyle',
  'extractComponentStyle',
  'createEventMap',
  'trimTextVNodes'].forEach(function (method) {
    weex$4[method] = core$1[method].bind(weex$4);
  });

weex$4.mixins = {
  inputCommon: inputCommon
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function setVue (vue) {
  if (!vue) {
    throw new Error('[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.')
  }
  global.weex.__vue__ = vue;
  console.log(("[Vue Render] install Vue " + (vue.version) + "."));
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * init weex.
 * @param  {Vue$2} Vue: Vue Constructor.
 * @param  {object} options: extend weex plugins.
 *         - components.
 *         - modules.
 */
var _inited = false;
function init$1 (Vue/*, options = {}*/) {
  if (_inited) { return }
  _inited = true;

  setVue(Vue);

  Vue.prototype.$getConfig = function () {
    console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
    return weex.config
  };

  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) { return htmlRegex.test(tag); };
  Vue.config.parsePlatformTagName = function (tag) { return tag.replace(htmlRegex, ''); };

  Vue.mixin(base$1);
  Vue.mixin(style);
  Vue.mixin(sticky);
}

// auto init in dist mode.
if (typeof window !== 'undefined' && window.Vue) {
  init$1(window.Vue);
}

weex.init = init$1;

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var _css = "\nbody > .weex-div {\n  min-height: 100%;\n}\n";

function getDiv (weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var trimTextVNodes = weex.trimTextVNodes;
  var createEventMap = weex.createEventMap;

  return {
    name: 'weex-div',
    render: function render (createElement) {
      return createElement('html:div', {
        attrs: { 'weex-type': 'div' },
        on: createEventMap(this),
        staticClass: 'weex-div weex-ct',
        staticStyle: extractComponentStyle(this)
      }, trimTextVNodes(this.$slots.default))
    },
    _css: _css
  }
}

var div = {
  init: function init (weex) {
    var div = getDiv(weex);
    weex.registerComponent('div', div);
    weex.registerComponent('container', div);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileOverview Impl of text component.
 *
 * Notes about the style 'height' and 'lines':
 * if the computed value of 'height' is bigger than 'lines', than the text will
 * be clipped according to the 'lines'. Otherwise, it'll be the 'height'.
 */

var _css$1 = "\n.weex-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;  /* not using 'pre': support auto line feed. */\n  font-size: 0.426667rem;\n  word-wrap: break-word;\n  overflow: hidden; /* it'll be clipped if the height is not high enough. */\n}\n";

/**
 * Get text special styles (lines and text-overflow).
 */
function getTextSpecStyle (ms) {
  if ( ms === void 0 ) ms = {};

  var lines = parseInt(ms.lines) || 0;
  var overflow = ms['text-overflow'] || 'ellipsis';
  if (lines > 0) {
    return {
      overflow: 'hidden',
      'text-overflow': overflow,
      '-webkit-line-clamp': lines
    }
  }
}

function getText (weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;
  var ref = weex.utils;
  var extend = ref.extend;

  return {
    name: 'weex-text',
    props: {
      lines: [Number, String],
      value: [String]
    },

    render: function render (createElement) {
      var style = extractComponentStyle(this);
      var textSpecStyle = getTextSpecStyle(style);
      return createElement('p', {
        attrs: { 'weex-type': 'text' },
        on: createEventMap(this),
        staticClass: 'weex-text weex-el',
        staticStyle: extend(style, textSpecStyle)
      }, this.$slots.default || [this.value])
    },
    _css: _css$1
  }
}

var text = {
  init: function init (weex) {
    weex.registerComponent('text', getText(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var extractComponentStyle$1;
var createEventMap$1;
var extend$2;

var IMG_NAME_BITS = 15;

var _css$2 = "\n.weex-image, .weex-img {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n";
/**
 * get resize (stetch|cover|contain) related styles.
 */
function getResizeStyle (context) {
  var stretch = '100% 100%';
  var resize = context.resize || stretch;
  var bgSize = ['cover', 'contain', stretch].indexOf(resize) > -1 ? resize : stretch;
  // compatibility: http://caniuse.com/#search=background-size
  return { 'background-size': bgSize }
}

function preProcessSrc (context, url, mergedStyle) {
  // somehow the merged style in _prerender hook is gone.
  // just return the original src.
  if (!mergedStyle || !mergedStyle.width || !mergedStyle.height) {
    return url
  }
  var width = mergedStyle.width;
  var height = mergedStyle.height;
  return context.processImgSrc && context.processImgSrc(url, {
    width: parseFloat(width),
    height: parseFloat(height),
    quality: context.quality,
    sharpen: context.sharpen,
    original: context.original
  }) || url
}

function download (url, callback) {
  function success () {
    callback && callback({
      success: true
    });
  }
  function fail (err) {
    callback && callback({
      success: false,
      errorDesc: err + ''
    });
  }
  try {
    var isDataUrl = false;
    var parts;
    var name;
    if (url.match(/data:image\/[^;]+;base64,/)) {
      isDataUrl = true;
      parts = url.split(',');
    }
    if (!isDataUrl) {
      name = url
        .replace(/\?[^?]+/, '')
        .replace(/#[^#]+/, '')
        .match(/([^/]+)$/);
    }
    else {
      name = parts[1].substr(0, IMG_NAME_BITS);
    }
    var aEl = document.createElement('a');
    aEl.href = url;
    /**
     * Not all browser support this 'download' attribute. In these browsers it'll jump
     * to the photo url page and user have to longpress the photo to save it.
     */
    aEl.download = name;
    var clickEvt = new Event('click', { bubbles: false });
    aEl.dispatchEvent(clickEvt);
    success();
  }
  catch (err) {
    fail(err);
  }
}

var image = {
  name: 'weex-image',
  props: {
    src: String,
    placeholder: String,
    resize: String,
    quality: String,
    sharpen: String,
    original: [String, Boolean]
  },

  updated: function updated () {
    this._fireLazyload();
  },

  mounted: function mounted () {
    this._fireLazyload();
  },

  methods: {
    save: function save (callback) {
      download(this.src, callback);
    }
  },

  render: function render (createElement) {
    var resizeStyle = getResizeStyle(this);
    var style = extractComponentStyle$1(this);
    return createElement('figure', {
      attrs: {
        'weex-type': 'image',
        'img-src': preProcessSrc(this, this.src, style),
        'img-placeholder': preProcessSrc(this, this.placeholder, style)
      },
      on: createEventMap$1(this, ['load', 'error']),
      staticClass: 'weex-image weex-el',
      staticStyle: extend$2(style, resizeStyle)
    })
  },
  _css: _css$2
};

var image$1 = {
  init: function init (weex) {
    extractComponentStyle$1 = weex.extractComponentStyle;
    createEventMap$1 = weex.createEventMap;
    extend$2 = weex.utils.extend;

    weex.registerComponent('image', image);
    weex.registerComponent('img', image);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var DEFAULT_OFFSET_ACCURACY = 10;
var DEFAULT_LOADMORE_OFFSET = 0;

function getThrottledScroll (context) {
  var scale = weex.config.env.scale;
  if (!context._throttleScroll) {
    var wrapper = context.$refs.wrapper;
    var inner = context.$refs.inner;
    var preOffset = (context.scrollDirection === 'horizontal'
        ? wrapper.scrollLeft
        : wrapper.scrollTop)
      || 0;
    context._throttleScroll = weex.utils.throttle(function (evt) {
      var offset = context.scrollDirection === 'horizontal'
        ? wrapper.scrollLeft
        : wrapper.scrollTop;
      var indent = parseInt(context.offsetAccuracy) * scale;
      function triggerScroll () {
        var rect = inner.getBoundingClientRect();
        evt.contentSize = { width: rect.width, height: rect.height };
        evt.contentOffset = {
          x: wrapper.scrollLeft,
          /**
           * positive direciton for y-axis is down.
           * so should use negative operation on scrollTop.
           *
           *  (0,0)---------------> x
           *       |
           *       |
           *       |
           *       |
           *       v y
           *
           */
          y: -wrapper.scrollTop
        };
        context.$emit('scroll', evt);
      }
      if (Math.abs(offset - preOffset) >= indent) {
        triggerScroll();
        preOffset = offset;
      }
    }, 16, true);
  }
  return context._throttleScroll
}

var scrollable$1 = {
  props: {
    loadmoreoffset: {
      type: [String, Number],
      default: DEFAULT_LOADMORE_OFFSET,
      validator: function validator (value) {
        var val = parseInt(value);
        return !isNaN(val) && val >= DEFAULT_LOADMORE_OFFSET
      }
    },

    offsetAccuracy: {
      type: [Number, String],
      default: DEFAULT_OFFSET_ACCURACY,
      validator: function validator$1 (value) {
        var val = parseInt(value);
        return !isNaN(val) && val >= DEFAULT_OFFSET_ACCURACY
      }
    }
  },

  created: function created () {
    // should call resetLoadmore() to enable loadmore event.
    this._loadmoreReset = true;
  },

  methods: {
    updateLayout: function updateLayout () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this._wrapperWidth = rect.width;
        this._wrapperHeight = rect.height;
      }
      var inner = this.$refs.inner;
      var children = inner && inner.children;
      if (inner) {
        var rect$1 = inner.getBoundingClientRect();
        this._innerWidth = rect$1.width;
        this._innerHeight = rect$1.height;
      }
      var loadingEl = this._loading && this._loading.$el;
      var refreshEl = this._refresh && this._refresh.$el;
      if (loadingEl) {
        this._innerHeight -= loadingEl.getBoundingClientRect().height;
      }
      if (refreshEl) {
        this._innerHeight -= refreshEl.getBoundingClientRect().height;
      }
      // inner width is always the viewport width somehow in horizontal
      // scoller, therefore the inner width should be reclaculated.
      if (this.scrollDirection === 'horizontal' && children) {
        this._innerWidth = weex.utils.getRangeWidth(inner);
      }
    },

    resetLoadmore: function resetLoadmore () {
      this._loadmoreReset = true;
    },

    /**
     * process sticky children in scrollable components.
     * current only support list and vertical scroller.
     */
    processSticky: function processSticky () {
      /**
       * current browser support 'sticky' or '-webkit-sticky', so there's no need
       * to do further more.
       */
      if (weex.utils.supportSticky()) {
        return
      }
      // current only support list and vertical scroller.
      if (this.scrollDirection === 'horizontal') {
        return
      }
      var stickyChildren = this._stickyChildren;
      var len = stickyChildren && stickyChildren.length || 0;
      if (len <= 0) { return }

      var container = this.$el;
      if (!container) { return }
      var scrollTop = container.scrollTop;

      var stickyChild;
      for (var i = 0; i < len; i++) {
        stickyChild = stickyChildren[i];
        if (stickyChild._initOffsetTop < scrollTop) {
          stickyChild._addSticky();
        }
        else {
          stickyChild._removeSticky();
        }
      }
    },

    handleScroll: function handleScroll (event) {
      weex.utils.getThrottleLazyload(25, this.$el, 'scroll')();
      getThrottledScroll(this)(event);

      this.processSticky();

      // fire loadmore event.
      var inner = this.$refs.inner;
      if (inner) {
        var innerLength = this.scrollDirection === 'horizontal'
          ? this._innerWidth
          : this._innerHeight;
        if (!this._innerLength) {
          this._innerLength = innerLength;
        }
        if (this._innerLength !== innerLength) {
          this._innerLength = innerLength;
          this._loadmoreReset = true;
        }
        if (this._loadmoreReset && this.reachBottom(this.loadmoreoffset)) {
          this._loadmoreReset = false;
          this.$emit('loadmore', event);
        }
      }
    },

    reachTop: function reachTop () {
      var wrapper = this.$refs.wrapper;
      return (!!wrapper) && (wrapper.scrollTop <= 0)
    },

    reachBottom: function reachBottom (offset) {
      var wrapper = this.$refs.wrapper;
      var inner = this.$refs.inner;
      offset = parseInt(offset || 0) * weex.config.env.scale;

      if (wrapper && inner) {
        var key = this.scrollDirection === 'horizontal'
          ? 'width'
          : 'height';
        var innerLength = this[("_inner" + (key[0].toUpperCase()) + (key.substr(1)))];
        var wrapperLength = this[("_wrapper" + (key[0].toUpperCase()) + (key.substr(1)))];
        var scrollOffset = this.scrollDirection === 'horizontal'
          ? wrapper.scrollLeft
          : wrapper.scrollTop;
        return scrollOffset >= innerLength - wrapperLength - offset
      }
      return false
    },

    handleTouchStart: function handleTouchStart (event) {
      // event.preventDefault()
      // event.stopPropagation()
      if (this._loading || this._refresh) {
        var touch = event.changedTouches[0];
        this._touchParams = {
          reachTop: this.reachTop(),
          reachBottom: this.reachBottom(),
          startTouchEvent: touch,
          startX: touch.pageX,
          startY: touch.pageY,
          timeStamp: event.timeStamp
        };
      }
    },

    handleTouchMove: function handleTouchMove (event) {
      // event.preventDefault()
      // event.stopPropagation()
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          this._touchParams.offsetY = offsetY;
          if (reachTop && this._refresh) {
            this._refresh.pullingDown(offsetY);
          }
          else if (reachBottom && this._loading) {
            this._loading.pullingUp(-offsetY);
          }
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      // event.preventDefault()
      // event.stopPropagation()
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          if (reachTop && this._refresh) {
            this._refresh.pullingEnd();
          }
          else if (reachBottom && this._loading) {
            this._loading.pullingEnd();
          }
        }
      }
      delete this._touchParams;
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var listMixin = {
  methods: {
    handleListScroll: function handleListScroll (event) {
      this.handleScroll(event);

      if (weex.utils.supportSticky()) {
        return
      }

      var scrollTop = this.$el.scrollTop;
      var h = this.$children.filter(function (vm) { return vm.$refs.header; });

      if (h.length <= 0) {
        return
      }

      for (var i = 0; i < h.length; i++) {
        if (h[i].initTop < scrollTop) {
          h[i].addSticky();
        }
        else {
          h[i].removeSticky();
        }
      }
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function getList (weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;

  return {
    name: 'weex-list',
    mixins: [scrollable$1, listMixin],
    computed: {
      wrapperClass: function wrapperClass () {
        var classArray = ['weex-list', 'weex-list-wrapper', 'weex-ct'];
        this._refresh && classArray.push('with-refresh');
        this._loading && classArray.push('with-loading');
        return classArray.join(' ')
      }
    },

    methods: {
      createChildren: function createChildren (h) {
        var slots = this.$slots.default || [];
        this._cells = slots.filter(function (vnode) {
          if (!vnode.tag || !vnode.componentOptions) { return false }
          return true
        });
        return [
          h('html:div', {
            ref: 'inner',
            staticClass: 'weex-list-inner weex-ct'
          }, this._cells)
        ]
      }
    },

    render: function render (createElement) {
      var this$1 = this;

      this.weexType = 'list';

      this.$nextTick(function () {
        this$1.updateLayout();
      });

      return createElement('main', {
        ref: 'wrapper',
        attrs: { 'weex-type': 'list' },
        staticClass: this.wrapperClass,
        on: createEventMap(this, {
          scroll: this.handleListScroll,
          touchstart: this.handleTouchStart,
          touchmove: this.handleTouchMove,
          touchend: this.handleTouchEnd
        }),
        staticStyle: extractComponentStyle(this)
      }, this.createChildren(createElement))
    }
  }
}

var list$$1 = {
  init: function init (weex) {
    weex.registerComponent('list', getList(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getScroller (weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;

  return {
    name: 'weex-scroller',
    mixins: [scrollable$1, listMixin],
    props: {
      scrollDirection: {
        type: [String],
        default: 'vertical',
        validator: function validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) !== -1
        }
      },
      scrollable: {
        type: [Boolean],
        default: true
      }
    },
    computed: {
      wrapperClass: function wrapperClass () {
        var classArray = ['weex-scroller', 'weex-scroller-wrapper', 'weex-ct'];
        if (this.scrollDirection === 'horizontal') {
          classArray.push('weex-scroller-horizontal');
        }
        else {
          classArray.push('weex-scroller-vertical');
        }
        if (!this.scrollable) {
          classArray.push('weex-scroller-disabled');
        }
        return classArray.join(' ')
      }
    },

    methods: {
      createChildren: function createChildren (h) {
        var slots = this.$slots.default || [];
        this._cells = slots.filter(function (vnode) {
          if (!vnode.tag || !vnode.componentOptions) { return false }
          return true
        });
        return [
          h('html:div', {
            ref: 'inner',
            staticClass: 'weex-scroller-inner weex-ct'
          }, this._cells)
        ]
      }
    },

    render: function render (createElement) {
      var this$1 = this;

      this.weexType = 'scroller';

      /* istanbul ignore next */
      // if ("development" === 'development') {
      //   validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle)
      // }

      this._cells = this.$slots.default || [];
      this.$nextTick(function () {
        this$1.updateLayout();
      });

      return createElement('main', {
        ref: 'wrapper',
        attrs: { 'weex-type': 'scroller' },
        on: createEventMap(this, {
          scroll: this.handleScroll,
          touchstart: this.handleTouchStart,
          touchmove: this.handleTouchMove,
          touchend: this.handleTouchEnd
        }),
        staticClass: this.wrapperClass,
        staticStyle: extractComponentStyle(this)
      }, this.createChildren(createElement))
    }
  }
}

var scroller = {
  init: function init (weex) {
    weex.registerComponent('scroller', getScroller(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND,  either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileoverview waterfall
 * NOTE: only support full screen width waterfall.
 */

var NORMAL_GAP_SIZE = 32;
var DEFAULT_COLUMN_COUNT = 1;

function getWaterfall (weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;

  return {
    name: 'weex-waterfall',
    mixins: [scrollable$1],
    props: {
      /**
       * specified gap size.
       * value can be number or 'normal'. 'normal' (32px) by default.
       */
      columnGap: {
        type: [String, Number],
        default: 'normal',
        validator: function validator (val) {
          if (!val || val === 'normal') {
            return true
          }
          val = parseInt(val);
          return !isNaN(val) && val > 0
        }
      },
      /**
       * the maximum column counts.
       * value can be number or 'auto'. 1 by default.
       */
      columnCount: {
        type: [String, Number],
        default: DEFAULT_COLUMN_COUNT,
        validator: function validator$1 (val) {
          val = parseInt(val);
          return !isNaN(val) && val > 0
        }
      },
      /**
       * the mimimum column width.
       * value can be number or 'auto'. 'auto' by default.
       */
      columnWidth: {
        type: [String, Number],
        default: 'auto',
        validator: function validator$2 (val) {
          if (!val || val === 'auto') {
            return true
          }
          val = parseInt(val);
          return !isNaN(val) && val > 0
        }
      }
    },

    mounted: function mounted () {
      this._nextTick();
    },

    updated: function updated () {
      this.$nextTick(this._nextTick());
    },

    methods: {
      _createChildren: function _createChildren (h, rootStyle) {
        var this$1 = this;

        var slots = this.$slots.default || [];
        this._headers = [];
        this._others = [];
        this._cells = slots.filter(function (vnode) {
          if (!vnode.tag || !vnode.componentOptions) { return false }
          var tag = vnode.componentOptions.tag;
          if (tag === 'refresh' || tag === 'loading') {
            this$1[("_" + tag)] = vnode;
            return false
          }
          if (tag === 'header') {
            this$1._headers.push(vnode);
            return false
          }
          if (tag !== 'cell') {
            this$1._others.push(vnode);
            return false
          }
          return true
        });
        this._reCalc(rootStyle);
        this._genColumns(h);
        var children = [];
        this._refresh && children.push(this._refresh);
        children = children
          .concat(this._headers)
          .concat(this._others);
        children.push(h('html:div', {
          ref: 'columns',
          staticClass: 'weex-waterfall-inner-columns weex-ct'
        }, this._columns));
        this._loading && children.push(this._loading);
        return [
          h('html:div', {
            ref: 'inner',
            staticClass: 'weex-waterfall-inner weex-ct'
          }, children)
        ]
      },

      _reCalc: function _reCalc (rootStyle) {
        /**
         * NOTE: columnGap and columnWidth can't both be auto.
         * NOTE: the formula:
         *  totalWidth = n * w + (n - 1) * gap
         * 1. if columnCount = n then calc w
         * 2. if columnWidth = w then calc n
         * 3. if columnWidth = w and columnCount = n then calc totalWidth
         *    3.1 if totalWidth < ctWidth then increase columnWidth
         *    3.2 if totalWidth > ctWidth then decrease columnCount
         */
        var width, gap, cnt, ctWidth;
        var scale = weex.config.env.scale;
        var el = this.$el;
        function getCtWidth (width, style) {
          var padding = style.padding
            ? parseInt(style.padding) * 2
            : parseInt(style.paddingLeft || 0) + parseInt(style.paddingRight || 0);
          return width - padding
        }
        if (el && el.nodeType === 1) {  // already mounted
          var cstyle = window.getComputedStyle(el);
          ctWidth = getCtWidth(el.getBoundingClientRect().width, cstyle);
        }
        else {  // not mounted.
          // only support full screen width for waterfall component.
          ctWidth = getCtWidth(document.documentElement.clientWidth, rootStyle);
        }

        gap = this.columnGap;
        if (gap && gap !== 'normal') {
          gap = parseInt(gap);
        }
        else {
          gap = NORMAL_GAP_SIZE;
        }
        gap = gap * scale;

        width = this.columnWidth;
        cnt = this.columnCount;
        if (width && width !== 'auto') {
          width = parseInt(width) * scale;
        }
        if (cnt && cnt !== 'auto') {
          cnt = parseInt(cnt);
        }

        // 0. if !columnCount && !columnWidth
        if (cnt === 'auto' && width === 'auto') {
          {
            console.warn("[vue-render] waterfall's columnWidth and columnCount shouldn't"
            + " both be auto at the same time.");
            cnt = DEFAULT_COLUMN_COUNT;
            width = ctWidth;
          }
        }
        // 1. if columnCount = n then calc w.
        else if (cnt !== 'auto' && width === 'auto') {
          width = (ctWidth - (cnt - 1) * gap) / cnt;
        }
        // 2. if columnWidth = w then calc n.
        else if (cnt === 'auto' && width !== 'auto') {
          cnt = (ctWidth + gap) / (width + gap);
        }
        // 3. if columnWidth = w and columnCount = n then calc totalWidth
        else if (cnt !== 'auto' && width !== 'auto') {
          var totalWidth;
          var adjustCountAndWidth = function () {
            totalWidth = cnt * width + (cnt - 1) * gap;
            if (totalWidth < ctWidth) {
              width += (ctWidth - totalWidth) / cnt;
            }
            else if (totalWidth > ctWidth && cnt > 1) {
              cnt--;
              adjustCountAndWidth();
            }
            else if (totalWidth > ctWidth) {  // cnt === 1
              width = ctWidth;
            }
          };
          adjustCountAndWidth();
        }
        this._columnCount = cnt;
        this._columnWidth = width;
        this._columnGap = gap;
      },

      _genColumns: function _genColumns (createElement) {
        var this$1 = this;

        this._columns = [];
        var cells = this._cells;
        var columnCnt = this._columnCount;
        var len = cells.length;
        var columnCells = this._columnCells = Array(columnCnt).join('.').split('.').map(function () { return [] });
        // spread cells to the columns using simpole polling algorithm.
        for (var i = 0; i < len; i++) {
          (cells[i].data.attrs || (cells[i].data.attrs = {}))['data-cell'] = i;
          columnCells[i % columnCnt].push(cells[i]);
        }
        for (var i$1 = 0; i$1 < columnCnt; i$1++) {
          this$1._columns.push(createElement('html:div', {
            ref: ("column" + i$1),
            attrs: {
              'data-column': i$1
            },
            staticClass: 'weex-ct',
            staticStyle: {
              width: this$1._columnWidth + 'px',
              marginLeft: i$1 === 0 ? 0 : this$1._columnGap + 'px'
            }
          }, columnCells[i$1]));
        }
      },

      _nextTick: function _nextTick () {
        this._reLayoutChildren();
      },

      _reLayoutChildren: function _reLayoutChildren () {
        var this$1 = this;

        /**
         * treat the shortest column bottom as the match standard.
         * whichever cell exceeded it would be rearranged.
         * 1. m = shortest column bottom.
         * 2. get all cell ids who is below m.
         * 3. calculate which cell should be in which column.
         */
        var columnCnt = this._columnCount;
        var columnDoms = [];
        var columnAppendFragments = [];
        var columnBottoms = [];
        var minBottom = Number.MAX_SAFE_INTEGER;
        var minBottomColumnIndex = 0;

        // 1. find the shortest column bottom.
        for (var i = 0; i < columnCnt; i++) {
          var columnDom = this$1._columns[i].elm;
          var lastChild = columnDom.lastElementChild;
          var bottom = lastChild ? lastChild.getBoundingClientRect().bottom : 0;
          columnDoms.push(columnDom);
          columnBottoms[i] = bottom;
          columnAppendFragments.push(document.createDocumentFragment());
          if (bottom < minBottom) {
            minBottom = bottom;
            minBottomColumnIndex = i;
          }
        }

        // 2. get all cell ids who is below m.
        var belowCellIds = [];
        var belowCells = {};
        for (var i$1 = 0; i$1 < columnCnt; i$1++) {
          if (i$1 === minBottomColumnIndex) {
            continue
          }
          var columnDom$1 = columnDoms[i$1];
          var cellsInColumn = columnDom$1.querySelectorAll('section.weex-cell');
          var len = cellsInColumn.length;
          for (var j = len - 1; j >= 0; j--) {
            var cellDom = cellsInColumn[j];
            var cellRect = cellDom.getBoundingClientRect();
            if (cellRect.top > minBottom) {
              var id = ~~cellDom.getAttribute('data-cell');
              belowCellIds.push(id);
              belowCells[id] = { elm: cellDom, height: cellRect.height };
              columnBottoms[i$1] -= cellRect.height;
            }
          }
        }

        // 3. calculate which cell should be in which column and rearrange them
        //  in the dom tree.
        belowCellIds.sort(function (a, b) { return a > b });
        var cellIdsLen = belowCellIds.length;
        function addToShortestColumn (belowCell) {
          // find shortest bottom.
          minBottom = Math.min.apply(Math, columnBottoms);
          minBottomColumnIndex = columnBottoms.indexOf(minBottom);
          var cellElm = belowCell.elm;
          var cellHeight = belowCell.height;
          columnAppendFragments[minBottomColumnIndex].appendChild(cellElm);
          columnBottoms[minBottomColumnIndex] += cellHeight;
        }
        for (var i$2 = 0; i$2 < cellIdsLen; i$2++) {
          addToShortestColumn(belowCells[belowCellIds[i$2]]);
        }
        for (var i$3 = 0; i$3 < columnCnt; i$3++) {
          columnDoms[i$3].appendChild(columnAppendFragments[i$3]);
        }
      }
    },

    render: function render (createElement) {
      var this$1 = this;

      this.weexType = 'waterfall';
      this._cells = this.$slots.default || [];
      this.$nextTick(function () {
        this$1.updateLayout();
      });
      var mergedStyle = extractComponentStyle(this);
      return createElement('main', {
        ref: 'wrapper',
        attrs: { 'weex-type': 'waterfall' },
        on: createEventMap(this, {
          scroll: this.handleScroll,
          touchstart: this.handleTouchStart,
          touchmove: this.handleTouchMove,
          touchend: this.handleTouchEnd
        }),
        staticClass: 'weex-waterfall weex-waterfall-wrapper weex-ct',
        staticStyle: mergedStyle
      }, this._createChildren(createElement, mergedStyle))
    }
  }
}

var waterfall = {
  init: function init (weex) {
    weex.registerComponent('waterfall', getWaterfall(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getCell (weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;
  return {
    name: 'weex-cell',
    render: function render (createElement) {
      return createElement('section', {
        attrs: { 'weex-type': 'cell' },
        on: createEventMap(this),
        staticClass: 'weex-cell weex-ct',
        staticStyle: extractComponentStyle(this)
      }, this.$slots.default)
    }
  }
}

var cell = {
  init: function init (weex) {
    weex.registerComponent('cell', getCell(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getHeader (weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var createEventMap = weex.createEventMap;
  var ref = weex.utils;
  var supportSticky = ref.supportSticky;

  return {
    data: function data () {
      return {
        sticky: false,
        initTop: 0,
        placeholder: null,
        supportSticky: supportSticky()
      }
    },

    mounted: function mounted () {
      this.initTop = this.$el.offsetTop;
      this.placeholder = window.document.createElement('div');
    },

    updated: function updated () {
      if (!this.sticky) {
        this.initTop = this.$el.offsetTop;
      }
    },

    methods: {
      addSticky: function addSticky () {
        this.sticky = true;
        this.placeholder.style.display = 'block';
        this.placeholder.style.width = this.$el.offsetWidth + 'px';
        this.placeholder.style.height = this.$el.offsetHeight + 'px';
        this.$el.parentNode.insertBefore(this.placeholder, this.$el);
      },

      removeSticky: function removeSticky () {
        this.sticky = false;
        try {
          this.$el.parentNode.removeChild(this.placeholder);
        }
        catch (e) {
        }
      }
    },

    render: function render (createElement) {
      /* istanbul ignore next */
      // if ("development" === 'development') {
      //   validateStyles('header', this.$vnode.data && this.$vnode.data.staticStyle)
      // }
      return createElement('html:header', {
        attrs: { 'weex-type': 'header' },
        on: createEventMap(this),
        ref: 'header',
        staticClass: 'weex-header weex-ct',
        class: { 'weex-sticky': this.sticky, 'weex-ios-sticky': this.supportSticky },
        staticStyle: extractComponentStyle(this)
      }, this.$slots.default)
    }
  }
}

var header = {
  init: function init (weex) {
    weex.registerComponent('header', getHeader(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getLoading () {
  var extractComponentStyle = weex.extractComponentStyle;

  return {
    name: 'weex-loading',
    props: {
      display: {
        type: String,
        default: 'show',
        validator: function validator (value) {
          return ['show', 'hide'].indexOf(value) !== -1
        }
      }
    },
    data: function data () {
      return {
        height: -1,
        viewHeight: 0
      }
    },
    mounted: function mounted () {
      this.viewHeight = this.$el.offsetHeight;
      if (this.display === 'hide') {
        this.height = 0;
      }
      else {
        this.height = this.viewHeight;
      }
    },
    watch: {
      height: function height (val) {
        this.$el.style.height = val + "px";
      },
      display: function display (val) {
        if (val === 'hide') {
          this.height = 0;
        }
        else {
          this.height = this.viewHeight;
        }
      }
    },
    methods: {
      pulling: function pulling (offsetY) {
        if ( offsetY === void 0 ) offsetY = 0;

        this.height = offsetY;
      },
      pullingUp: function pullingUp (offsetY) {
        this.$el.style.transition = "height 0s";
        this.pulling(offsetY);
      },
      pullingEnd: function pullingEnd () {
        this.$el.style.transition = "height .2s";
        if (this.height >= this.viewHeight) {
          this.pulling(this.viewHeight);
          this.$emit('loading');
        }
        else {
          this.pulling(0);
        }
      },
      getChildren: function getChildren () {
        var children = this.$slots.default || [];
        if (this.display === 'show') {
          return children
        }
        return children.filter(function (vnode) {
          return vnode.componentOptions
            && vnode.componentOptions.tag !== 'loading-indicator'
        })
      }
    },
    render: function render (createElement) {
      this.$parent._loading = this;
      return createElement('aside', {
        ref: 'loading',
        attrs: { 'weex-type': 'loading' },
        staticClass: 'weex-loading weex-ct',
        staticStyle: extractComponentStyle(this)
      }, this.getChildren())
    }
  }
}

var loading = {
  init: function init (weex) {
    weex.registerComponent('loading', getLoading(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getRefresh (weex) {
  var extractComponentStyle = weex.extractComponentStyle;
  var ref = weex.utils;
  var createEvent = ref.createEvent;

  return {
    name: 'weex-refresh',
    props: {
      display: {
        type: String,
        default: 'show',
        validator: function validator (value) {
          return ['show', 'hide'].indexOf(value) !== -1
        }
      }
    },
    data: function data () {
      return {
        lastDy: 0,
        viewHeight: 0,
        height: -1
      }
    },
    mounted: function mounted () {
      this.viewHeight = this.$el.offsetHeight;
      if (this.display === 'hide') {
        this.height = 0;
      }
      else {
        this.height = this.viewHeight;
      }
    },
    watch: {
      height: function height (val) {
        this.$el.style.height = val + "px";
      },
      display: function display (val) {
        if (val === 'hide') {
          this.height = 0;
        }
        else {
          this.height = this.viewHeight;
        }
      }
    },
    methods: {
      pulling: function pulling (offsetY) {
        if ( offsetY === void 0 ) offsetY = 0;

        this.height = offsetY;
        this.$emit('pullingdown', createEvent(this, 'pullingdown', {
          dy: offsetY - this.lastDy,
          pullingDistance: offsetY,
          viewHeight: this.viewHeight
        }));
        this.lastDy = offsetY;
      },
      pullingDown: function pullingDown (offsetY) {
        this.$el.style.transition = "height 0s";
        this.pulling(offsetY);
      },
      pullingEnd: function pullingEnd () {
        this.$el.style.transition = "height .2s";
        if (this.height >= this.viewHeight) {
          this.pulling(this.viewHeight);
          this.$emit('refresh');
        }
        else {
          this.pulling(0);
        }
      },
      getChildren: function getChildren () {
        var children = this.$slots.default || [];
        if (this.display === 'show') {
          return children
        }
        return children.filter(function (vnode) {
          return vnode.componentOptions
            && vnode.componentOptions.tag !== 'loading-indicator'
        })
      }
    },
    render: function render (createElement) {
      this.$parent._refresh = this;
      return createElement('aside', {
        ref: 'refresh',
        attrs: { 'weex-type': 'refresh' },
        staticClass: 'weex-refresh weex-ct',
        staticStyle: extractComponentStyle(this)
      }, this.getChildren())
    }
  }
}

var refresh = {
  init: function init (weex) {
    weex.registerComponent('refresh', getRefresh(weex));
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var extractComponentStyle$2;
var getRgb$1;
var loopArray$1;
var getStyleSheetById$1;

var _css$3 = "\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  width: 1rem !important;\n  height: 1rem !important;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  width: 0.5em;\n  height: 0.5em;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n          animation: weex-spinner 1.1s infinite ease;\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n";

function getStyleSheet (spinnerVm) {
  if (spinnerVm._styleSheet) {
    return
  }
  spinnerVm._styleSheet = getStyleSheetById$1('weex-cmp-loading-indicator');
}

function setKeyframeColor (spinnerVm, val) {
  getStyleSheet(spinnerVm);
  var keyframeRules = computeKeyFrameRules(val);
  var rules = spinnerVm._styleSheet.rules || spinnerVm._styleSheet.cssRules;
  for (var i = 0, l = rules.length; i < l; i++) {
    var item = rules.item(i);
    if ((item.type === CSSRule.KEYFRAMES_RULE
          || item.type === CSSRule.WEBKIT_KEYFRAMES_RULE)
        && item.name === 'weex-spinner') {
      var cssRules = item.cssRules;
      for (var j = 0, m = cssRules.length; j < m; j++) {
        var keyframe = cssRules[j];
        if (keyframe.type === CSSRule.KEYFRAME_RULE
          || keyframe.type === CSSRule.WEBKIT_KEYFRAME_RULE) {
          keyframe.style.boxShadow = keyframeRules[j];
        }
      }
    }
  }
}

function computeKeyFrameRules (rgb) {
  if (!rgb) {
    return
  }
  var scaleArr = [
    '0em -1.3em 0em 0em',
    '0.9em -0.9em 0 0em',
    '1.25em 0em 0 0em',
    '0.875em 0.875em 0 0em',
    '0em 1.25em 0 0em',
    '-0.9em 0.9em 0 0em',
    '-1.3em 0em 0 0em',
    '-0.9em -0.9em 0 0em'];
  var colorArr = [
    '1',
    '0.2',
    '0.2',
    '0.2',
    '0.2',
    '0.2',
    '0.5',
    '0.7'].map(function (e) {
      return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + e + ')'
    });
  var rules = [];
  var loop = function ( i ) {
    var tmpColorArr = loopArray$1(colorArr, i, 'r');
    rules.push(scaleArr.map(function (scaleStr, i) {
      return scaleStr + ' ' + tmpColorArr[i]
    }).join(', '));
  };

  for (var i = 0; i < scaleArr.length; i++) loop( i );
  return rules
}

function processStyle (vm) {
  var style = extractComponentStyle$2(vm);
  var color = style.color;
  var rgb = color && getRgb$1(color);
  if (rgb) {
    setKeyframeColor(vm, rgb);
  }
  return style
}

var loadingIndicator = {
  name: 'weex-loading-indicator',
  render: function render (createElement) {
    this.weexType = 'loading-indicator';
    return createElement('mark', {
      attrs: { 'weex-type': 'loading-indicator' },
      staticClass: 'weex-loading-indicator weex-ct',
      staticStyle: processStyle(this)
    })
  },
  _css: _css$3
};

var loadingIndicator$1 = {
  init: function init (weex) {
    extractComponentStyle$2 = weex.extractComponentStyle;
    getRgb$1 = weex.utils.getRgb;
    loopArray$1 = weex.utils.loopArray;
    getStyleSheetById$1 = weex.utils.getStyleSheetById;
    weex.registerComponent('loading-indicator', loadingIndicator);
  }
};

__$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\nbody > .weex-list,\nbody > .weex-scroller,\nbody > .weex-waterfall {\n  max-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-scroller-wrapper,\n.weex-waterfall-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-list-wrapper,\n.weex-waterfall-wrapper {\n  overflow-y: scroll !important;\n  overflow-x: hidden !important;\n}\n\n.weex-list-inner,\n.weex-scroller-inner,\n.weex-waterfall-inner {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-waterfall-inner-columns {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-scroller-wrapper.weex-scroller-vertical {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.weex-scroller-wrapper.weex-scroller-disabled {\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-orient: horizontal;\n  height: 100%;\n}\n\n.weex-cell {\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  overflow: hidden;\n}\n",undefined);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var modules = [
  list$$1,
  scroller,
  waterfall,
  cell,
  header,
  loading,
  refresh,
  loadingIndicator$1
];

var scrollable = {
  init: function init (weex) {
    modules.forEach(function (mod) {
      weex.install(mod);
    });
  }
};

weex.install(div);
weex.install(text);
weex.install(image$1);
weex.install(scrollable);

return weex;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbGliL2dlc3R1cmUuanMiLCIuLi8uLi8uLi9odG1sNS9zaGFyZWQvYXJyYXlGcm9tLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCIuLi8uLi8uLi9odG1sNS9zaGFyZWQvb2JqZWN0QXNzaWduLmpzIiwiLi4vLi4vLi4vaHRtbDUvc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9saWIvZW52ZC92ZXJzaW9uLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9saWIvZW52ZC9wYXJhbXMuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2xpYi9lbnZkL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS91dGlscy90eXBlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS91dGlscy9mdW5jLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9lbnYvdmlld3BvcnQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL2V2ZW50LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb25maWcuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvbGF6eWxvYWQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL3ByZWZpeFByb3BlcnR5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9wcmVmaXhWYWx1ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvYWRkTmV3VmFsdWVzT25seS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvaXNPYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9jcmVhdGVQcmVmaXhlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3N0YXRpY0RhdGEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2N1cnNvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvY3Jvc3NGYWRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9maWx0ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ZsZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ZsZXhib3hPbGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2dyYWRpZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9pbWFnZVNldC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvcG9zaXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3NpemluZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9oeXBoZW5hdGUtc3R5bGUtbmFtZS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaW4tanMtdXRpbHMvbGliL2h5cGhlbmF0ZVByb3BlcnR5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy90cmFuc2l0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvaW5kZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL3N0eWxlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS91dGlscy9pbmRleC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvZW52L3d4LWVudi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvZW52L3dlZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL3BlcmYuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvcmUvc3R5bGUuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvcmUvbm9kZS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29yZS9pbmRleC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbWl4aW5zL2Jhc2UuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21peGlucy9zdHlsZS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbWl4aW5zL2lucHV0LWNvbW1vbi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbWl4aW5zL3N0aWNreS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbWl4aW5zL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9lbnYvZ2xvYmFsLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9lbnYvaW5kZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2Rpdi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy90ZXh0LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2ltYWdlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvbWl4aW5zL3Njcm9sbGFibGUuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9taXhpbnMvbGlzdC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL21peGlucy9pbmRleC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2xpc3QuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9zY3JvbGxlci5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL3dhdGVyZmFsbC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2NlbGwuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9oZWFkZXIuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9sb2FkaW5nLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvcmVmcmVzaC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2xvYWRpbmctaW5kaWNhdG9yLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvaW5kZXguanMiLCIuLi9zcmMvaW5kZXguY29yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgaXNJbml0aWFsaXplZCA9IGZhbHNlXG5cbi8vIG1ham9yIGV2ZW50cyBzdXBwb3J0ZWQ6XG4vLyAgIHBhbnN0YXJ0XG4vLyAgIHBhbm1vdmVcbi8vICAgcGFuZW5kXG4vLyAgIHN3aXBlXG4vLyAgIGxvbmdwcmVzc1xuLy8gZXh0cmEgZXZlbnRzIHN1cHBvcnRlZDpcbi8vICAgZHVhbHRvdWNoc3RhcnRcbi8vICAgZHVhbHRvdWNoXG4vLyAgIGR1YWx0b3VjaGVuZFxuLy8gICB0YXBcbi8vICAgZG91YmxldGFwXG4vLyAgIHByZXNzZW5kXG5cbnZhciBkb2MgPSB3aW5kb3cuZG9jdW1lbnRcbnZhciBkb2NFbCA9IGRvYy5kb2N1bWVudEVsZW1lbnRcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxudmFyIGdlc3R1cmVzID0ge31cbnZhciBsYXN0VGFwID0gbnVsbFxuXG4vKipcbiAqIGZpbmQgdGhlIGNsb3Nlc3QgY29tbW9uIGFuY2VzdG9yXG4gKiBpZiB0aGVyZSdzIG5vIG9uZSwgcmV0dXJuIG51bGxcbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbDEgZmlyc3QgZWxlbWVudFxuICogQHBhcmFtICB7RWxlbWVudH0gZWwyIHNlY29uZCBlbGVtZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fSAgICAgY29tbW9uIGFuY2VzdG9yXG4gKi9cbmZ1bmN0aW9uIGdldENvbW1vbkFuY2VzdG9yKGVsMSwgZWwyKSB7XG4gIHZhciBlbCA9IGVsMVxuICB3aGlsZSAoZWwpIHtcbiAgICBpZiAoZWwuY29udGFpbnMoZWwyKSB8fCBlbCA9PSBlbDIpIHtcbiAgICAgIHJldHVybiBlbFxuICAgIH1cbiAgICBlbCA9IGVsLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG4vKipcbiAqIGZpcmUgYSBIVE1MRXZlbnRcbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IHdoaWNoIGVsZW1lbnQgdG8gZmlyZSBhIGV2ZW50IG9uXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0eXBlICAgIHR5cGUgb2YgZXZlbnRcbiAqIEBwYXJhbSAge29iamVjdH0gIGV4dHJhICAgZXh0cmEgZGF0YSBmb3IgdGhlIGV2ZW50IG9iamVjdFxuICovXG5mdW5jdGlvbiBmaXJlRXZlbnQoZWxlbWVudCwgdHlwZSwgZXh0cmEpIHtcbiAgdmFyIGV2ZW50ID0gZG9jLmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJylcbiAgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGZhbHNlLCB0cnVlKVxuXG4gIGlmICh0eXBlb2YgZXh0cmEgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgcCBpbiBleHRyYSkge1xuICAgICAgZXZlbnRbcF0gPSBleHRyYVtwXVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGZsYWcgdG8gZGlzdGluZ3Vpc2ggd2l0aCBvdGhlciBldmVudHMgd2l0aCB0aGUgc2FtZSBuYW1lIGdlbmVyYXRlZFxuICAgKiBieSBhbm90aGVyIGxpYnJhcnkgaW4gdGhlIHNhbWUgcGFnZS5cbiAgICovIFxuICBldmVudC5fZm9yID0gJ3dlZXgnXG5cbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxufVxuXG4vKipcbiAqIGNhbGMgdGhlIHRyYW5zZm9ybVxuICogYXNzdW1lIDQgcG9pbnRzIEFCQ0Qgb24gdGhlIGNvb3JkaW5hdGUgc3lzdGVtXG4gKiA+IHJvdGF0Ze+8mmFuZ2xlIHJvdGF0aW5nIGZyb20gQUIgdG8gQ0RcbiAqID4gc2NhbGXvvJpzY2FsZSByYXRpbyBmcm9tIEFCIHRvIENEXG4gKiA+IHRyYW5zbGF0Ze+8mnRyYW5zbGF0ZSBzaGlmdCBmcm9tIEEgdG8gQ1xuICpcbiAqIEBwYXJhbSAge251bWJlcn0geDEgYWJzY2lzc2Egb2YgQVxuICogQHBhcmFtICB7bnVtYmVyfSB5MSBvcmRpbmF0ZSBvZiBBXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHgyIGFic2Npc3NhIG9mIEJcbiAqIEBwYXJhbSAge251bWJlcn0geTIgb3JkaW5hdGUgb2YgQlxuICogQHBhcmFtICB7bnVtYmVyfSB4MyBhYnNjaXNzYSBvZiBDXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHkzIG9yZGluYXRlIG9mIENcbiAqIEBwYXJhbSAge251bWJlcn0geDQgYWJzY2lzc2Egb2YgRFxuICogQHBhcmFtICB7bnVtYmVyfSB5NCBvcmRpbmF0ZSBvZiBEXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgIHRyYW5zZm9ybSBvYmplY3QgbGlrZVxuICogICB7cm90YXRlLCBzY2FsZSwgdHJhbnNsYXRlWzJdLCBtYXRyaXhbM11bM119XG4gKi9cbmZ1bmN0aW9uIGNhbGMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgeDQsIHk0KSB7XG4gIHZhciByb3RhdGUgPSBNYXRoLmF0YW4yKHk0IC0geTMsIHg0IC0geDMpIC0gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKVxuICB2YXIgc2NhbGUgPSBNYXRoLnNxcnQoKE1hdGgucG93KHk0IC0geTMsIDIpXG4gICAgKyBNYXRoLnBvdyh4NCAtIHgzLCAyKSkgLyAoTWF0aC5wb3coeTIgLSB5MSwgMilcbiAgICArIE1hdGgucG93KHgyIC0geDEsIDIpKSlcbiAgdmFyIHRyYW5zbGF0ZSA9IFtcbiAgICB4M1xuICAgIC0gc2NhbGUgKiB4MSAqIE1hdGguY29zKHJvdGF0ZSlcbiAgICArIHNjYWxlICogeTEgKiBNYXRoLnNpbihyb3RhdGUpLFxuICAgIHkzXG4gICAgLSBzY2FsZSAqIHkxICogTWF0aC5jb3Mocm90YXRlKVxuICAgIC0gc2NhbGUgKiB4MSAqIE1hdGguc2luKHJvdGF0ZSldXG5cbiAgcmV0dXJuIHtcbiAgICByb3RhdGU6IHJvdGF0ZSxcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgdHJhbnNsYXRlOiB0cmFuc2xhdGUsXG4gICAgbWF0cml4OiBbXG4gICAgICBbc2NhbGUgKiBNYXRoLmNvcyhyb3RhdGUpLCAtc2NhbGUgKiBNYXRoLnNpbihyb3RhdGUpLCB0cmFuc2xhdGVbMF1dLFxuICAgICAgW3NjYWxlICogTWF0aC5zaW4ocm90YXRlKSwgc2NhbGUgKiBNYXRoLmNvcyhyb3RhdGUpLCB0cmFuc2xhdGVbMV1dLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXVxuICB9XG59XG5cbi8qKlxuICogdGFrZSBvdmVyIHRoZSB0b3VjaHN0YXJ0IGV2ZW50cy4gQWRkIG5ldyB0b3VjaGVzIHRvIHRoZSBnZXN0dXJlcy5cbiAqIElmIHRoZXJlIGlzIG5vIHByZXZpb3VzIHJlY29yZHMsIHRoZW4gYmluZCB0b3VjaG1vdmUsIHRvY2hlbmRcbiAqIGFuZCB0b3VjaGNhbmNlbCBldmVudHMuXG4gKiBuZXcgdG91Y2hlcyBpbml0aWFsaXplZCB3aXRoIHN0YXRlICd0YXBwaW5nJywgYW5kIHdpdGhpbiA1MDAgbWlsbGlzZWNvbmRzXG4gKiBpZiB0aGUgc3RhdGUgaXMgc3RpbGwgdGFwcGluZywgdGhlbiB0cmlnZ2VyIGdlc3R1cmUgJ3ByZXNzJy5cbiAqIElmIHRoZXJlIGFyZSB0d28gdG91Y2hlIHBvaW50cywgdGhlbiB0aGUgJ2R1YWx0b3VjaHN0YXJ0JyBpcyB0cmlnZ2VyZC4gVGhlXG4gKiBub2RlIG9mIHRoZSB0b3VjaCBnZXN0dXJlIGlzIHRoZWlyIGNsb2VzdCBjb21tb24gYW5jZXN0b3IuXG4gKlxuICogQGV2ZW50XG4gKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gdG91Y2hzdGFydEhhbmRsZXIoZXZlbnQpIHtcblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgIGRvY0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNobW92ZUhhbmRsZXIsIGZhbHNlKVxuICAgIGRvY0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hlbmRIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoY2FuY2VsSGFuZGxlciwgZmFsc2UpXG4gIH1cblxuICAvLyByZWNvcmQgZXZlcnkgdG91Y2hcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgdmFyIHRvdWNoUmVjb3JkID0ge31cblxuICAgIGZvciAodmFyIHAgaW4gdG91Y2gpIHtcbiAgICAgIHRvdWNoUmVjb3JkW3BdID0gdG91Y2hbcF1cbiAgICB9XG5cbiAgICB2YXIgZ2VzdHVyZSA9IHtcbiAgICAgIHN0YXJ0VG91Y2g6IHRvdWNoUmVjb3JkLFxuICAgICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgc3RhdHVzOiAndGFwcGluZycsXG4gICAgICBlbGVtZW50OiBldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50LnRhcmdldCxcbiAgICAgIHByZXNzaW5nSGFuZGxlcjogc2V0VGltZW91dChmdW5jdGlvbiAoZWxlbWVudCwgdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICd0YXBwaW5nJykge1xuICAgICAgICAgICAgZ2VzdHVyZS5zdGF0dXMgPSAncHJlc3NpbmcnXG5cbiAgICAgICAgICAgIGZpcmVFdmVudChlbGVtZW50LCAnbG9uZ3ByZXNzJywge1xuICAgICAgICAgICAgICAvLyBhZGQgdG91Y2ggZGF0YSBmb3Igd2VleFxuICAgICAgICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgICAgICAgIHRvdWNoZXM6IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgICAgICAgIGNoYW5nZWRUb3VjaGVzOiBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKVxuICAgICAgICAgIGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9KGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQudGFyZ2V0LCBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXSksIDUwMClcbiAgICB9XG4gICAgZ2VzdHVyZXNbdG91Y2guaWRlbnRpZmllcl0gPSBnZXN0dXJlXG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PSAyKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW11cblxuICAgIGZvciAodmFyIHAgaW4gZ2VzdHVyZXMpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZ2VzdHVyZXNbcF0uZWxlbWVudClcbiAgICB9XG5cbiAgICBmaXJlRXZlbnQoZ2V0Q29tbW9uQW5jZXN0b3IoZWxlbWVudHNbMF0sIGVsZW1lbnRzWzFdKSwgJ2R1YWx0b3VjaHN0YXJ0Jywge1xuICAgICAgdG91Y2hlczogc2xpY2UuY2FsbChldmVudC50b3VjaGVzKSxcbiAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIHRha2Ugb3ZlciB0b3VjaG1vdmUgZXZlbnRzLCBhbmQgaGFuZGxlIHBhbiBhbmQgZHVhbCByZWxhdGVkIGdlc3R1cmVzLlxuICpcbiAqIDEuIHRyYXZlcnNlIGV2ZXJ5IHRvdWNoIHBvaW5077yaXG4gKiA+IGlmICd0YXBwaW5nJyBhbmQgdGhlIHNoaWZ0IGlzIG92ZXIgMTAgcGl4bGVzLCB0aGVuIGl0J3MgYSAncGFubmluZycuXG4gKiAyLiBpZiB0aGVyZSBhcmUgdHdvIHRvdWNoIHBvaW50cywgdGhlbiBjYWxjIHRoZSB0cmFuZm9ybSBhbmQgdHJpZ2dlclxuICogICAnZHVhbHRvdWNoJy5cbiAqXG4gKiBAZXZlbnRcbiAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICovXG5mdW5jdGlvbiB0b3VjaG1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIHZhciBnZXN0dXJlID0gZ2VzdHVyZXNbdG91Y2guaWRlbnRpZmllcl1cblxuICAgIGlmICghZ2VzdHVyZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLmxhc3RUb3VjaCkge1xuICAgICAgZ2VzdHVyZS5sYXN0VG91Y2ggPSBnZXN0dXJlLnN0YXJ0VG91Y2hcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLmxhc3RUaW1lKSB7XG4gICAgICBnZXN0dXJlLmxhc3RUaW1lID0gZ2VzdHVyZS5zdGFydFRpbWVcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLnZlbG9jaXR5WCkge1xuICAgICAgZ2VzdHVyZS52ZWxvY2l0eVggPSAwXG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS52ZWxvY2l0eVkpIHtcbiAgICAgIGdlc3R1cmUudmVsb2NpdHlZID0gMFxuICAgIH1cbiAgICBpZiAoIWdlc3R1cmUuZHVyYXRpb24pIHtcbiAgICAgIGdlc3R1cmUuZHVyYXRpb24gPSAwXG4gICAgfVxuXG4gICAgdmFyIHRpbWUgPSAgRGF0ZS5ub3coKSAtIGdlc3R1cmUubGFzdFRpbWVcbiAgICB2YXIgdnggPSAodG91Y2guY2xpZW50WCAtIGdlc3R1cmUubGFzdFRvdWNoLmNsaWVudFgpIC8gdGltZVxuICAgIHZhciB2eSA9ICh0b3VjaC5jbGllbnRZIC0gZ2VzdHVyZS5sYXN0VG91Y2guY2xpZW50WSkgLyB0aW1lXG5cbiAgICB2YXIgUkVDT1JEX0RVUkFUSU9OID0gNzBcbiAgICBpZiAodGltZSA+IFJFQ09SRF9EVVJBVElPTikge1xuICAgICAgdGltZSA9IFJFQ09SRF9EVVJBVElPTlxuICAgIH1cbiAgICBpZiAoZ2VzdHVyZS5kdXJhdGlvbiArIHRpbWUgPiBSRUNPUkRfRFVSQVRJT04pIHtcbiAgICAgIGdlc3R1cmUuZHVyYXRpb24gPSBSRUNPUkRfRFVSQVRJT04gLSB0aW1lXG4gICAgfVxuXG4gICAgZ2VzdHVyZS52ZWxvY2l0eVggPSAoZ2VzdHVyZS52ZWxvY2l0eVggKiBnZXN0dXJlLmR1cmF0aW9uICsgdnggKiB0aW1lKVxuICAgICAgLyAoZ2VzdHVyZS5kdXJhdGlvbiArIHRpbWUpXG4gICAgZ2VzdHVyZS52ZWxvY2l0eVkgPSAoZ2VzdHVyZS52ZWxvY2l0eVkgKiBnZXN0dXJlLmR1cmF0aW9uICsgdnkgKiB0aW1lKVxuICAgICAgLyAoZ2VzdHVyZS5kdXJhdGlvbiArIHRpbWUpXG4gICAgZ2VzdHVyZS5kdXJhdGlvbiArPSB0aW1lXG5cbiAgICBnZXN0dXJlLmxhc3RUb3VjaCA9IHt9XG5cbiAgICBmb3IgKHZhciBwIGluIHRvdWNoKSB7XG4gICAgICBnZXN0dXJlLmxhc3RUb3VjaFtwXSA9IHRvdWNoW3BdXG4gICAgfVxuICAgIGdlc3R1cmUubGFzdFRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICB2YXIgZGlzcGxhY2VtZW50WCA9IHRvdWNoLmNsaWVudFggLSBnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WFxuICAgIHZhciBkaXNwbGFjZW1lbnRZID0gdG91Y2guY2xpZW50WSAtIGdlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRZXG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KGRpc3BsYWNlbWVudFgsIDIpXG4gICAgICArIE1hdGgucG93KGRpc3BsYWNlbWVudFksIDIpKVxuICAgIHZhciBpc1ZlcnRpY2FsID0gIShNYXRoLmFicyhkaXNwbGFjZW1lbnRYKSA+IE1hdGguYWJzKGRpc3BsYWNlbWVudFkpKVxuICAgIHZhciBkaXJlY3Rpb24gPSBpc1ZlcnRpY2FsXG4gICAgICA/IGRpc3BsYWNlbWVudFkgPj0gMCA/ICdkb3duJyA6ICd1cCdcbiAgICAgIDogZGlzcGxhY2VtZW50WCA+PSAwID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuXG4gICAgLy8gbWFnaWMgbnVtYmVyIDEwOiBtb3ZpbmcgMTBweCBtZWFucyBwYW4sIG5vdCB0YXBcbiAgICBpZiAoKGdlc3R1cmUuc3RhdHVzID09PSAndGFwcGluZycgfHwgZ2VzdHVyZS5zdGF0dXMgPT09ICdwcmVzc2luZycpXG4gICAgICAgICYmIGRpc3RhbmNlID4gMTApIHtcbiAgICAgIGdlc3R1cmUuc3RhdHVzID0gJ3Bhbm5pbmcnXG4gICAgICBnZXN0dXJlLmlzVmVydGljYWwgPSBpc1ZlcnRpY2FsXG4gICAgICBnZXN0dXJlLmRpcmVjdGlvbiA9IGRpcmVjdGlvblxuXG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncGFuc3RhcnQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudCxcbiAgICAgICAgaXNWZXJ0aWNhbDogZ2VzdHVyZS5pc1ZlcnRpY2FsLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICdwYW5uaW5nJykge1xuICAgICAgZ2VzdHVyZS5wYW5UaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncGFubW92ZScsIHtcbiAgICAgICAgZGlzcGxhY2VtZW50WDogZGlzcGxhY2VtZW50WCxcbiAgICAgICAgZGlzcGxhY2VtZW50WTogZGlzcGxhY2VtZW50WSxcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50LFxuICAgICAgICBpc1ZlcnRpY2FsOiBnZXN0dXJlLmlzVmVydGljYWwsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09IDIpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBbXVxuICAgIHZhciBjdXJyZW50ID0gW11cbiAgICB2YXIgZWxlbWVudHMgPSBbXVxuICAgIHZhciB0cmFuc2Zvcm1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQudG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRvdWNoID0gZXZlbnQudG91Y2hlc1tpXVxuICAgICAgdmFyIGdlc3R1cmUgPSBnZXN0dXJlc1t0b3VjaC5pZGVudGlmaWVyXVxuICAgICAgcG9zaXRpb24ucHVzaChbZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFgsIGdlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRZXSlcbiAgICAgIGN1cnJlbnQucHVzaChbdG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WV0pXG4gICAgfVxuXG4gICAgZm9yICh2YXIgcCBpbiBnZXN0dXJlcykge1xuICAgICAgZWxlbWVudHMucHVzaChnZXN0dXJlc1twXS5lbGVtZW50KVxuICAgIH1cblxuICAgIHRyYW5zZm9ybSA9IGNhbGMoXG4gICAgICBwb3NpdGlvblswXVswXSxcbiAgICAgIHBvc2l0aW9uWzBdWzFdLFxuICAgICAgcG9zaXRpb25bMV1bMF0sXG4gICAgICBwb3NpdGlvblsxXVsxXSxcbiAgICAgIGN1cnJlbnRbMF1bMF0sXG4gICAgICBjdXJyZW50WzBdWzFdLFxuICAgICAgY3VycmVudFsxXVswXSxcbiAgICAgIGN1cnJlbnRbMV1bMV1cbiAgICApXG4gICAgZmlyZUV2ZW50KGdldENvbW1vbkFuY2VzdG9yKGVsZW1lbnRzWzBdLCBlbGVtZW50c1sxXSksICdkdWFsdG91Y2gnLCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIHRvdWNoZXM6IGV2ZW50LnRvdWNoZXMsXG4gICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBoYW5kbGUgdG91Y2hlbmQgZXZlbnRcbiAqXG4gKiAxLiBpZiB0aGVyZSBhcmUgdG93IHRvdWNoIHBvaW50cywgdGhlbiB0cmlnZ2VyICdkdWFsdG91Y2hlbmQn5aaCXG4gKlxuICogMi4gdHJhdmVyc2UgZXZlcnkgdG91Y2ggcGlvbnTvvJpcbiAqID4gaWYgdGFwcGluZywgdGhlbiB0cmlnZ2VyICd0YXAnLlxuICogSWYgdGhlcmUgaXMgYSB0YXAgMzAwIG1pbGxpc2Vjb25kcyBiZWZvcmUsIHRoZW4gaXQncyBhICdkb3VibGV0YXAnLlxuICogPiBpZiBwYWRkaW5nLCB0aGVuIGRlY2lkZSB0byB0cmlnZ2VyICdwYW5lbmQnIG9yICdzd2lwZSdcbiAqID4gaWYgcHJlc3NpbmcsIHRoZW4gdHJpZ2dlciAncHJlc3NlbmQnLlxuICpcbiAqIDMuIHJlbW92ZSBsaXN0ZW5lcnMuXG4gKlxuICogQGV2ZW50XG4gKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gdG91Y2hlbmRIYW5kbGVyKGV2ZW50KSB7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT0gMikge1xuICAgIHZhciBlbGVtZW50cyA9IFtdXG4gICAgZm9yICh2YXIgcCBpbiBnZXN0dXJlcykge1xuICAgICAgZWxlbWVudHMucHVzaChnZXN0dXJlc1twXS5lbGVtZW50KVxuICAgIH1cbiAgICBmaXJlRXZlbnQoZ2V0Q29tbW9uQW5jZXN0b3IoZWxlbWVudHNbMF0sIGVsZW1lbnRzWzFdKSwgJ2R1YWx0b3VjaGVuZCcsIHtcbiAgICAgIHRvdWNoZXM6IHNsaWNlLmNhbGwoZXZlbnQudG91Y2hlcyksXG4gICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgIH0pXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB2YXIgaWQgPSB0b3VjaC5pZGVudGlmaWVyXG4gICAgdmFyIGdlc3R1cmUgPSBnZXN0dXJlc1tpZF1cblxuICAgIGlmICghZ2VzdHVyZSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcilcbiAgICAgIGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnN0YXR1cyA9PT0gJ3RhcHBpbmcnKSB7XG4gICAgICBnZXN0dXJlLnRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgICAgIC8vIGZpcmUgY2xpY2ssIG5vdCB0YXAuXG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAndGFwJywge1xuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICB9KVxuXG4gICAgICBpZiAobGFzdFRhcCAmJiBnZXN0dXJlLnRpbWVzdGFtcCAtIGxhc3RUYXAudGltZXN0YW1wIDwgMzAwKSB7XG4gICAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdkb3VibGV0YXAnLCB7XG4gICAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGxhc3RUYXAgPSBnZXN0dXJlXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpXG4gICAgICB2YXIgZHVyYXRpb24gPSBub3cgLSBnZXN0dXJlLnN0YXJ0VGltZVxuICAgICAgdmFyIGRpc3BsYWNlbWVudFggPSB0b3VjaC5jbGllbnRYIC0gZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFhcbiAgICAgIHZhciBkaXNwbGFjZW1lbnRZID0gdG91Y2guY2xpZW50WSAtIGdlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRZXG5cbiAgICAgIHZhciB2ZWxvY2l0eSA9IE1hdGguc3FydChnZXN0dXJlLnZlbG9jaXR5WSAqIGdlc3R1cmUudmVsb2NpdHlZXG4gICAgICAgICsgZ2VzdHVyZS52ZWxvY2l0eVggKiBnZXN0dXJlLnZlbG9jaXR5WClcbiAgICAgIHZhciBpc1N3aXBlID0gdmVsb2NpdHkgPiAwLjUgJiYgKG5vdyAtIGdlc3R1cmUubGFzdFRpbWUpIDwgMTAwXG4gICAgICB2YXIgZXh0cmEgPSB7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgaXNTd2lwZTogaXNTd2lwZSxcbiAgICAgICAgdmVsb2NpdHlYOiBnZXN0dXJlLnZlbG9jaXR5WCxcbiAgICAgICAgdmVsb2NpdHlZOiBnZXN0dXJlLnZlbG9jaXR5WSxcbiAgICAgICAgZGlzcGxhY2VtZW50WDogZGlzcGxhY2VtZW50WCxcbiAgICAgICAgZGlzcGxhY2VtZW50WTogZGlzcGxhY2VtZW50WSxcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50LFxuICAgICAgICBpc1ZlcnRpY2FsOiBnZXN0dXJlLmlzVmVydGljYWwsXG4gICAgICAgIGRpcmVjdGlvbjogZ2VzdHVyZS5kaXJlY3Rpb25cbiAgICAgIH1cblxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3BhbmVuZCcsIGV4dHJhKVxuICAgICAgaWYgKGlzU3dpcGUpIHtcbiAgICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3N3aXBlJywgZXh0cmEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKSB7XG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncHJlc3NlbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVsZXRlIGdlc3R1cmVzW2lkXVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT09IDApIHtcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoZW5kSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaGNhbmNlbEhhbmRsZXIsIGZhbHNlKVxuICB9XG59XG5cbi8qKlxuICogaGFuZGxlIHRvdWNoY2FuY2VsXG4gKlxuICogMS4gaWYgdGhlcmUgYXJlIHR3byB0b3VjaCBwb2ludHMsIHRoZW4gdHJpZ2dlciAnZHVhbHRvdWNoZW5kJ1xuICpcbiAqIDIuIHRyYXZlcnNlIGV2ZXJ0eSB0b3VjaCBwb2ludDpcbiAqID4gaWYgcGFubm5pZywgdGhlbiB0cmlnZ2VyICdwYW5lbmQnXG4gKiA+IGlmIHByZXNzaW5nLCB0aGVuIHRyaWdnZXIgJ3ByZXNzZW5kJ1xuICpcbiAqIDMuIHJlbW92ZSBsaXN0ZW5lcnNcbiAqXG4gKiBAZXZlbnRcbiAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICovXG5mdW5jdGlvbiB0b3VjaGNhbmNlbEhhbmRsZXIoZXZlbnQpIHtcblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PSAyKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW11cbiAgICBmb3IgKHZhciBwIGluIGdlc3R1cmVzKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGdlc3R1cmVzW3BdLmVsZW1lbnQpXG4gICAgfVxuICAgIGZpcmVFdmVudChnZXRDb21tb25BbmNlc3RvcihlbGVtZW50c1swXSwgZWxlbWVudHNbMV0pLCAnZHVhbHRvdWNoZW5kJywge1xuICAgICAgdG91Y2hlczogc2xpY2UuY2FsbChldmVudC50b3VjaGVzKSxcbiAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgfSlcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIHZhciBpZCA9IHRvdWNoLmlkZW50aWZpZXJcbiAgICB2YXIgZ2VzdHVyZSA9IGdlc3R1cmVzW2lkXVxuXG4gICAgaWYgKCFnZXN0dXJlKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKVxuICAgICAgZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdwYW5lbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKSB7XG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncHJlc3NlbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgIH0pXG4gICAgfVxuICAgIGRlbGV0ZSBnZXN0dXJlc1tpZF1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09PSAwKSB7XG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2htb3ZlSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaGVuZEhhbmRsZXIsIGZhbHNlKVxuICAgIGRvY0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hjYW5jZWxIYW5kbGVyLCBmYWxzZSlcbiAgfVxufVxuXG5pZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgZG9jRWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoc3RhcnRIYW5kbGVyLCBmYWxzZSlcbiAgaXNJbml0aWFsaXplZCA9IHRydWVcbn1cblxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8vIFByb2R1Y3Rpb24gc3RlcHMgb2YgRUNNQS0yNjIsIEVkaXRpb24gNiwgMjIuMS4yLjFcbi8vIFJlZmVyZW5jZTogaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFycmF5LmZyb21cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoIUFycmF5LmZyb20pIHtcbiAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgIHZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gICAgfTtcbiAgICB2YXIgdG9JbnRlZ2VyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBudW1iZXIgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICBpZiAobnVtYmVyID09PSAwIHx8ICFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcbiAgICB9O1xuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBsZW4gPSB0b0ludGVnZXIodmFsdWUpO1xuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGxlbiwgMCksIG1heFNhZmVJbnRlZ2VyKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiB0aGUgZnJvbSBtZXRob2QgaXMgMS5cbiAgICByZXR1cm4gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICAgIC8vIDEuIExldCBDIGJlIHRoZSB0aGlzIHZhbHVlLlxuICAgICAgdmFyIEMgPSB0aGlzO1xuXG4gICAgICAvLyAyLiBMZXQgaXRlbXMgYmUgVG9PYmplY3QoYXJyYXlMaWtlKS5cbiAgICAgIHZhciBpdGVtcyA9IE9iamVjdChhcnJheUxpa2UpO1xuXG4gICAgICAvLyAzLiBSZXR1cm5JZkFicnVwdChpdGVtcykuXG4gICAgICBpZiAoYXJyYXlMaWtlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBJZiBtYXBmbiBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IG1hcHBpbmcgYmUgZmFsc2UuXG4gICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkO1xuICAgICAgdmFyIFQ7XG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA1LiBlbHNlXG4gICAgICAgIC8vIDUuIGEgSWYgSXNDYWxsYWJsZShtYXBmbikgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKCFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA1LiBiLiBJZiB0aGlzQXJnIHdhcyBzdXBwbGllZCwgbGV0IFQgYmUgdGhpc0FyZzsgZWxzZSBsZXQgVCBiZSB1bmRlZmluZWQuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgLy8gMTEuIExldCBsZW4gYmUgVG9MZW5ndGgobGVuVmFsdWUpLlxuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgIC8vIDEzLiBJZiBJc0NvbnN0cnVjdG9yKEMpIGlzIHRydWUsIHRoZW5cbiAgICAgIC8vIDEzLiBhLiBMZXQgQSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIEMgd2l0aCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGxlbi5cbiAgICAgIC8vIDE0LiBhLiBFbHNlLCBMZXQgQSBiZSBBcnJheUNyZWF0ZShsZW4pLlxuICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbik7XG5cbiAgICAgIC8vIDE2LiBMZXQgayBiZSAwLlxuICAgICAgdmFyIGsgPSAwO1xuICAgICAgLy8gMTcuIFJlcGVhdCwgd2hpbGUgayA8IGxlbuKApiAoYWxzbyBzdGVwcyBhIC0gaClcbiAgICAgIHZhciBrVmFsdWU7XG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXTtcbiAgICAgICAgaWYgKG1hcEZuKSB7XG4gICAgICAgICAgQVtrXSA9IHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKGtWYWx1ZSwgaykgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQVtrXSA9IGtWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBrICs9IDE7XG4gICAgICB9XG4gICAgICAvLyAxOC4gTGV0IHB1dFN0YXR1cyBiZSBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cbiAgICAgIEEubGVuZ3RoID0gbGVuO1xuICAgICAgLy8gMjAuIFJldHVybiBBLlxuICAgICAgcmV0dXJuIEE7XG4gICAgfTtcbiAgfSgpKTtcbn1cbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFNSQyAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKVxuICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG4gICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZihPW2tleV0gPT09IHZhbClyZXR1cm47XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKXtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoT1trZXldKU9ba2V5XSA9IHZhbDtcbiAgICAgIGVsc2UgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmKHRhcmdldClyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbidcbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uLzU1OTM1NTRcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoIU9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YgPSAoZnVuY3Rpb24oT2JqZWN0LCBtYWdpYykge1xuICAgIHZhciBzZXQ7XG4gICAgZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgIHNldC5jYWxsKE8sIHByb3RvKTtcbiAgICAgIHJldHVybiBPO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gdGhpcyB3b3JrcyBhbHJlYWR5IGluIEZpcmVmb3ggYW5kIFNhZmFyaVxuICAgICAgc2V0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCBtYWdpYykuc2V0O1xuICAgICAgc2V0LmNhbGwoe30sIG51bGwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gSUUgPCAxMSBjYW5ub3QgYmUgc2hpbW1lZFxuICAgICAgICBPYmplY3QucHJvdG90eXBlICE9PSB7fVttYWdpY10gfHxcbiAgICAgICAgLy8gbmVpdGhlciBjYW4gYW55IGJyb3dzZXIgdGhhdCBhY3R1YWxseVxuICAgICAgICAvLyBpbXBsZW1lbnRlZCBfX3Byb3RvX18gY29ycmVjdGx5XG4gICAgICAgIC8vIChhbGwgYnV0IG9sZCBWOCB3aWxsIHJldHVybiBoZXJlKVxuICAgICAgICB7X19wcm90b19fOiBudWxsfS5fX3Byb3RvX18gPT09IHZvaWQgMFxuICAgICAgICAvLyB0aGlzIGNhc2UgbWVhbnMgbnVsbCBvYmplY3RzIGNhbm5vdCBiZSBwYXNzZWRcbiAgICAgICAgLy8gdGhyb3VnaCBzZXRQcm90b3R5cGVPZiBpbiBhIHJlbGlhYmxlIHdheVxuICAgICAgICAvLyB3aGljaCBtZWFucyBoZXJlIGEgKipTaGFtKiogaXMgbmVlZGVkIGluc3RlYWRcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBub2RlanMgMC44IGFuZCAwLjEwIGFyZSAoYnVnZ3kgYW5kLi4pIGZpbmUgaGVyZVxuICAgICAgLy8gcHJvYmFibHkgQ2hyb21lIG9yIHNvbWUgb2xkIE1vYmlsZSBzdG9jayBicm93c2VyXG4gICAgICBzZXQgPSBmdW5jdGlvbihwcm90bykge1xuICAgICAgICB0aGlzW21hZ2ljXSA9IHByb3RvO1xuICAgICAgfTtcbiAgICAgIC8vIHBsZWFzZSBub3RlIHRoYXQgdGhpcyB3aWxsICoqbm90Kiogd29ya1xuICAgICAgLy8gaW4gdGhvc2UgYnJvd3NlcnMgdGhhdCBkbyBub3QgaW5oZXJpdFxuICAgICAgLy8gX19wcm90b19fIGJ5IG1pc3Rha2UgZnJvbSBPYmplY3QucHJvdG90eXBlXG4gICAgICAvLyBpbiB0aGVzZSBjYXNlcyB3ZSBzaG91bGQgcHJvYmFibHkgdGhyb3cgYW4gZXJyb3JcbiAgICAgIC8vIG9yIGF0IGxlYXN0IGJlIGluZm9ybWVkIGFib3V0IHRoZSBpc3N1ZVxuICAgICAgc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPSBzZXRQcm90b3R5cGVPZihcbiAgICAgICAgc2V0UHJvdG90eXBlT2Yoe30sIG51bGwpLFxuICAgICAgICBPYmplY3QucHJvdG90eXBlXG4gICAgICApIGluc3RhbmNlb2YgT2JqZWN0O1xuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IHRydWUgbWVhbnMgaXQgd29ya3MgYXMgbWVhbnRcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSBmYWxzZSBtZWFucyBpdCdzIG5vdCAxMDAlIHJlbGlhYmxlXG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdW5kZWZpbmVkXG4gICAgICAvLyBvclxuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT0gIG51bGwgbWVhbnMgaXQncyBub3QgYSBwb2x5ZmlsbFxuICAgICAgLy8gd2hpY2ggbWVhbnMgaXQgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICAgIC8vIHdlIGNhbiBldmVuIGRlbGV0ZSBPYmplY3QucHJvdG90eXBlLl9fcHJvdG9fXztcbiAgICB9XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mO1xuICB9KE9iamVjdCwgJ19fcHJvdG9fXycpKTtcbn1cbiIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTsiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsImNvbnN0IGxpYiA9IHdpbmRvdy5saWIgfHwgKHdpbmRvdy5saWIgPSB7fSlcblxuLyoqXG4gKiBWZXJzaW9uIGNsYXNzLlxuICogQGNsYXNzIGxpYi5lbnZ+VmVyc2lvblxuICogQHBhcmFtIHtTdHJpbmd9IHYgLSB2ZXJzaW9uIG51bWJlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVyc2lvbiAodikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3ZhbCcsIHtcbiAgICB2YWx1ZTogdi50b1N0cmluZygpLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSlcblxuICAvKipcbiAgICogbGFyZ2VyIHRoYW5cbiAgICogQG1ldGhvZCBndFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdiAtIHZlcnNpb25cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgVmVyc2lvblxuICAgKi9cbiAgdGhpcy5ndCA9IGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIFZlcnNpb24uY29tcGFyZSh0aGlzLCB2KSA+IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBsYXJnZXIgdGhhbiBvciBlcXVhbCB0by5cbiAgICogQG1ldGhvZCBndGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHYgLSB2ZXJzaW9uXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdFxuICAgKiBAaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIFZlcnNpb25cbiAgICovXG4gIHRoaXMuZ3RlID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gVmVyc2lvbi5jb21wYXJlKHRoaXMsIHYpID49IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBsZXNzIHRoYW4uXG4gICAqIEBtZXRob2QgbHRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHYgLSB2ZXJzaW9uXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdFxuICAgKiBAaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIFZlcnNpb25cbiAgICovXG4gIHRoaXMubHQgPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBWZXJzaW9uLmNvbXBhcmUodGhpcywgdikgPCAwXG4gIH1cblxuICAvKipcbiAgICogbGVzcyB0aGFuIG9yIGVxdWFsIHRvLlxuICAgKiBAbWV0aG9kIGx0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdiAtIHZlcnNpb25cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgVmVyc2lvblxuICAgKi9cbiAgdGhpcy5sdGUgPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBWZXJzaW9uLmNvbXBhcmUodGhpcywgdikgPD0gMFxuICB9XG5cbiAgLyoqXG4gICAqIGVxdWFsIHRvLlxuICAgKiBAbWV0aG9kIGVxXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2IC0gdmVyc2lvblxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBlcXVhbCB0b1xuICAgKiBAaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIFZlcnNpb25cbiAgICovXG4gIHRoaXMuZXEgPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBWZXJzaW9uLmNvbXBhcmUodGhpcywgdikgPT09IDBcbiAgfVxufVxuXG4vKipcbiAqIHZlcnNpb24gbnVtYmVyIHN0cmluZy5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gY3VycmVudCB2ZXJzaW9uIG51bWJlciBzdHJpbmcuXG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXJvZiBWZXJzaW9uXG4gKi9cblZlcnNpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy52YWxcbn1cblxuLyoqXG4gKiByZXR1cm4gY3VycmVudCB2ZXJzaW9uIG51bWJlci5cbiAqIEBtZXRob2QgdmFsdWVPZlxuICogQHJldHVybiB7Qm9vbGVhbn0gdmVyc2lvbiBudW1iZXJcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlcm9mIFZlcnNpb25cbiAqL1xuVmVyc2lvbi5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdiA9IHRoaXMudmFsLnNwbGl0KCcuJylcbiAgY29uc3QgciA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgIGxldCBuID0gcGFyc2VJbnQodltpXSwgMTApXG4gICAgaWYgKGlzTmFOKG4pKSB7XG4gICAgICBuID0gMFxuICAgIH1cbiAgICBsZXQgcyA9IG4udG9TdHJpbmcoKVxuICAgIGlmIChzLmxlbmd0aCA8IDUpIHtcbiAgICAgIHMgPSBBcnJheSg2IC0gcy5sZW5ndGgpLmpvaW4oJzAnKSArIHNcbiAgICB9XG4gICAgci5wdXNoKHMpXG4gICAgaWYgKHIubGVuZ3RoID09PSAxKSB7XG4gICAgICByLnB1c2goJy4nKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyc2VGbG9hdChyLmpvaW4oJycpKVxufVxuXG4vKipcbiAqIGNvbXBhcmUgdHdvIHZlcnNpb25zLlxuICogQG1ldGhvZCBjb21wYXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gdjEgLSB2ZXJzaW9uMVxuICogQHBhcmFtIHtTdHJpbmd9IHYyIC0gdmVyc2lvbjJcbiAqIEByZXR1cm4ge051bWJlcn0gMCBmb3IgZXF1YWxpdHnvvIwtMSBmb3IgbGVzcyB0aGFu77yMMSBmb3IgbGFyZ2VyIHRoYW4uXG4gKiBAbWVtYmVyb2YgVmVyc2lvblxuICovXG5WZXJzaW9uLmNvbXBhcmUgPSBmdW5jdGlvbiAodjEsIHYyKSB7XG4gIHYxID0gdjEudG9TdHJpbmcoKS5zcGxpdCgnLicpXG4gIHYyID0gdjIudG9TdHJpbmcoKS5zcGxpdCgnLicpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdjEubGVuZ3RoIHx8IGkgPCB2Mi5sZW5ndGg7IGkrKykge1xuICAgIGxldCBuMSA9IHBhcnNlSW50KHYxW2ldLCAxMClcbiAgICBsZXQgbjIgPSBwYXJzZUludCh2MltpXSwgMTApXG4gICAgaWYgKHdpbmRvdy5pc05hTihuMSkpIHtcbiAgICAgIG4xID0gMFxuICAgIH1cbiAgICBpZiAod2luZG93LmlzTmFOKG4yKSkge1xuICAgICAgbjIgPSAwXG4gICAgfVxuICAgIGlmIChuMSA8IG4yKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgZWxzZSBpZiAobjEgPiBuMikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDBcbn1cblxuLyoqXG4gKiDop6PmnpDlkozmk43kvZzniYjmnKzlj7dcbiAqIEBtZXRob2QgdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmd9IHYgLSDpnIDopoHop6PmnpDnmoTniYjmnKzlj7dcbiAqIEByZXR1cm4ge2xpYi5lbnZ+VmVyc2lvbn0gVmVyc29u5a6e5L6LXG4gKiBAbWVtYmVyb2YgbGliXG4gKi9cbmxpYi52ZXJzaW9uID0gZnVuY3Rpb24gKHYpIHtcbiAgcmV0dXJuIG5ldyBWZXJzaW9uKHYpXG59XG4iLCJjb25zdCBsaWIgPSB3aW5kb3cubGliIHx8ICh3aW5kb3cubGliID0ge30pXG5jb25zdCBlbnYgPSBsaWIuZW52IHx8IChsaWIuZW52ID0ge30pXG5cbmNvbnN0IHNlYXJjaCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKVxuZW52LnBhcmFtcyA9IHt9XG5pZiAoc2VhcmNoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHNlYXJjaC5zcGxpdCgnJicpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFyYW1zW2ldID0gcGFyYW1zW2ldLnNwbGl0KCc9JylcbiAgICB0cnkge1xuICAgICAgZW52LnBhcmFtc1twYXJhbXNbaV1bMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtc1tpXVsxXSlcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGVudi5wYXJhbXNbcGFyYW1zW2ldWzBdXSA9IHBhcmFtc1tpXVsxXVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICcuL3ZlcnNpb24nXG5pbXBvcnQgJy4vcGFyYW1zJ1xuXG5jb25zdCBsaWIgPSB3aW5kb3cubGliIHx8ICh3aW5kb3cubGliID0ge30pXG5jb25zdCBlbnYgPSBsaWIuZW52IHx8IChsaWIuZW52ID0ge30pXG5cbmNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbmxldCBtYXRjaFxuXG4vKipcbiAqIG9zXG4gKi9cblxubWF0Y2ggPSB1YS5tYXRjaCgvV2luZG93c1xcc1Bob25lXFxzKD86T1NcXHMpPyhbXFxkLl0rKS8pXG5pZiAobWF0Y2gpIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBtZW1iZXJvZiBsaWIuZW52XG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBuYW1lIC0gb3MgbmFtZSwgZS5nLiBBbmRyb2lkL0FuZHJvaWRQYWQvaVBob25lL2lQb2QvaVBhZC9XaW5kb3dzIFBob25lL3Vua25vd24sIGV0Yy5cbiAgICogQHByb3BlcnR5IHtsaWIuZW52flZlcnNpb259IHZlcnNpb24gLSBvcyB2ZXJzaW9uLlxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGlzV2luZG93c1Bob25lXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaXNJUGhvbmUgLSBpcyBpUGhvbmUvaVRvdWNoXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaXNJUGFkXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaXNJT1NcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBpc0FuZHJvaWRcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBpc0FuZHJvaWRQYWRcbiAgICovXG4gIGVudi5vcyA9IHtcbiAgICBuYW1lOiAnV2luZG93cyBQaG9uZScsXG4gICAgaXNXaW5kb3dzUGhvbmU6IHRydWUsXG4gICAgdmVyc2lvbjogbWF0Y2hbMV1cbiAgfVxufVxuZWxzZSBpZiAoISF1YS5tYXRjaCgvU2FmYXJpLykgJiYgKG1hdGNoID0gdWEubWF0Y2goL0FuZHJvaWRbXFxzL10oW1xcZC5dKykvKSkpIHtcbiAgZW52Lm9zID0ge1xuICAgIHZlcnNpb246IG1hdGNoWzFdXG4gIH1cblxuICBpZiAoKHVhLm1hdGNoKC9Nb2JpbGVcXHMrU2FmYXJpLykpKSB7XG4gICAgZW52Lm9zLm5hbWUgPSAnQW5kcm9pZCdcbiAgICBlbnYub3MuaXNBbmRyb2lkID0gdHJ1ZVxuICB9XG4gIGVsc2Uge1xuICAgIGVudi5vcy5uYW1lID0gJ0FuZHJvaWRQYWQnXG4gICAgZW52Lm9zLmlzQW5kcm9pZFBhZCA9IHRydWVcbiAgfVxufVxuZWxzZSBpZiAoKG1hdGNoID0gdWEubWF0Y2goLyhpUGhvbmV8aVBhZHxpUG9kKS8pKSkge1xuICBjb25zdCBuYW1lID0gbWF0Y2hbMV1cblxuICBtYXRjaCA9IHVhLm1hdGNoKC9PUyAoW1xcZF8uXSspIGxpa2UgTWFjIE9TIFgvKVxuXG4gIGVudi5vcyA9IHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGlzSVBob25lOiAobmFtZSA9PT0gJ2lQaG9uZScgfHwgbmFtZSA9PT0gJ2lQb2QnKSxcbiAgICBpc0lQYWQ6IG5hbWUgPT09ICdpUGFkJyxcbiAgICBpc0lPUzogdHJ1ZSxcbiAgICB2ZXJzaW9uOiBtYXRjaFsxXS5zcGxpdCgnXycpLmpvaW4oJy4nKVxuICB9XG59XG5lbHNlIHtcbiAgZW52Lm9zID0ge1xuICAgIG5hbWU6ICd1bmtub3duJyxcbiAgICB2ZXJzaW9uOiAnMC4wLjAnXG4gIH1cbn1cblxuaWYgKGxpYi52ZXJzaW9uKSB7XG4gIGVudi5vcy52ZXJzaW9uID0gbGliLnZlcnNpb24oZW52Lm9zLnZlcnNpb24pXG59XG5cbi8qKlxuICogYnJvd3NlclxuICovXG5cbm1hdGNoID0gdWEubWF0Y2goLyg/OlVDV0VCfFVDQnJvd3NlclxcLykoW1xcZC5dKykvKVxuXG5pZiAobWF0Y2gpIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBtZW1iZXJvZiBlbnZcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IG5hbWUgLSBicm93c2VyIG5hbWXvvIxlLmcuIFVDL1FRL0ZpcmVmb3gvQ2hyb21lL0FuZHJvaWQvU2FmYXJpL2lPUyBXZWJ2aWV3L0Nocm9tZSBXZWJ2aWV3L0lFL0lFTW9iaWxlL3Vua25vd24sIGV0Yy5cbiAgICogQHByb3BlcnR5IHtlbnZ+VmVyc2lvbn0gdmVyc2lvbiAtIGJyb3dzZXIgdmVyc2lvbi5cbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBpc1VDXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaXNRUVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGlzSUVcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBpc0lFTW9iaWxlXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaXNJRUxpa2VXZWJraXRcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBpc0Nocm9tZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGlzQW5kcm9pZFxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGlzU2FmYXJpXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaXNXZWJ2aWV3XG4gICAqL1xuICBlbnYuYnJvd3NlciA9IHtcbiAgICBuYW1lOiAnVUMnLFxuICAgIGlzVUM6IHRydWUsXG4gICAgdmVyc2lvbjogbWF0Y2hbMV1cbiAgfVxufVxuZWxzZSBpZiAoKG1hdGNoID0gdWEubWF0Y2goL01RUUJyb3dzZXJcXC8oW1xcZC5dKykvKSkpIHtcbiAgZW52LmJyb3dzZXIgPSB7XG4gICAgbmFtZTogJ1FRJyxcbiAgICBpc1FROiB0cnVlLFxuICAgIHZlcnNpb246IG1hdGNoWzFdXG4gIH1cbn1cbmVsc2UgaWYgKChtYXRjaCA9IHVhLm1hdGNoKC9GaXJlZm94XFwvKFtcXGQuXSspLykpKSB7XG4gIGVudi5icm93c2VyID0ge1xuICAgIG5hbWU6ICdGaXJlZm94JyxcbiAgICBpc0ZpcmVmb3g6IHRydWUsXG4gICAgdmVyc2lvbjogbWF0Y2hbMV1cbiAgfVxufVxuZWxzZSBpZiAoKG1hdGNoID0gdWEubWF0Y2goL01TSUVcXHMoW1xcZC5dKykvKSlcbiAgfHwgKG1hdGNoID0gdWEubWF0Y2goL0lFTW9iaWxlXFwvKFtcXGQuXSspLykpKSB7XG4gIGVudi5icm93c2VyID0ge1xuICAgIHZlcnNpb246IG1hdGNoWzFdXG4gIH1cblxuICBpZiAodWEubWF0Y2goL0lFTW9iaWxlLykpIHtcbiAgICBlbnYuYnJvd3Nlci5uYW1lID0gJ0lFTW9iaWxlJ1xuICAgIGVudi5icm93c2VyLmlzSUVNb2JpbGUgPSB0cnVlXG4gIH1cbiAgZWxzZSB7XG4gICAgZW52LmJyb3dzZXIubmFtZSA9ICdJRSdcbiAgICBlbnYuYnJvd3Nlci5pc0lFID0gdHJ1ZVxuICB9XG5cbiAgaWYgKHVhLm1hdGNoKC9BbmRyb2lkfGlQaG9uZS8pKSB7XG4gICAgZW52LmJyb3dzZXIuaXNJRUxpa2VXZWJraXQgPSB0cnVlXG4gIH1cbn1cbmVsc2UgaWYgKChtYXRjaCA9IHVhLm1hdGNoKC8oPzpDaHJvbWV8Q3JpT1MpXFwvKFtcXGQuXSspLykpKSB7XG4gIGVudi5icm93c2VyID0ge1xuICAgIG5hbWU6ICdDaHJvbWUnLFxuICAgIGlzQ2hyb21lOiB0cnVlLFxuICAgIHZlcnNpb246IG1hdGNoWzFdXG4gIH1cblxuICBpZiAodWEubWF0Y2goL1ZlcnNpb25cXC9bXFxkKy5dK1xccypDaHJvbWUvKSkge1xuICAgIGVudi5icm93c2VyLm5hbWUgPSAnQ2hyb21lIFdlYnZpZXcnXG4gICAgZW52LmJyb3dzZXIuaXNXZWJ2aWV3ID0gdHJ1ZVxuICB9XG59XG5lbHNlIGlmICghIXVhLm1hdGNoKC9TYWZhcmkvKSAmJiAobWF0Y2ggPSB1YS5tYXRjaCgvQW5kcm9pZFtcXHMvXShbXFxkLl0rKS8pKSkge1xuICBlbnYuYnJvd3NlciA9IHtcbiAgICBuYW1lOiAnQW5kcm9pZCcsXG4gICAgaXNBbmRyb2lkOiB0cnVlLFxuICAgIHZlcnNpb246IG1hdGNoWzFdXG4gIH1cbn1cbmVsc2UgaWYgKHVhLm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kLykpIHtcbiAgaWYgKHVhLm1hdGNoKC9TYWZhcmkvKSkge1xuICAgIG1hdGNoID0gdWEubWF0Y2goL1ZlcnNpb25cXC8oW1xcZC5dKykvKVxuICAgIGVudi5icm93c2VyID0ge1xuICAgICAgbmFtZTogJ1NhZmFyaScsXG4gICAgICBpc1NhZmFyaTogdHJ1ZSxcbiAgICAgIHZlcnNpb246IG1hdGNoWzFdXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1hdGNoID0gdWEubWF0Y2goL09TIChbXFxkXy5dKykgbGlrZSBNYWMgT1MgWC8pXG4gICAgZW52LmJyb3dzZXIgPSB7XG4gICAgICBuYW1lOiAnaU9TIFdlYnZpZXcnLFxuICAgICAgaXNXZWJ2aWV3OiB0cnVlLFxuICAgICAgdmVyc2lvbjogbWF0Y2hbMV0ucmVwbGFjZSgvXy9nLCAnLicpXG4gICAgfVxuICB9XG59XG5lbHNlIHtcbiAgZW52LmJyb3dzZXIgPSB7XG4gICAgbmFtZTogJ3Vua25vd24nLFxuICAgIHZlcnNpb246ICcwLjAuMCdcbiAgfVxufVxuXG5pZiAobGliLnZlcnNpb24pIHtcbiAgZW52LmJyb3dzZXIudmVyc2lvbiA9IGxpYi52ZXJzaW9uKGVudi5icm93c2VyLnZlcnNpb24pXG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcblxuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqPzogbWl4ZWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gT0JKRUNUX1NUUklOR1xufVxuXG5jb25zdCBBUlJBWV9TVFJJTkcgPSAnW29iamVjdCBBcnJheV0nXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSAoYXJyPzogbWl4ZWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gQVJSQVlfU1RSSU5HXG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8vIEBmbG93XG5pbXBvcnQge1xuICBpc0FycmF5XG59IGZyb20gJy4vdHlwZSdcbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICogdGhlIHJpZ2h0ZXN0IG9iamVjdCdzIHZhbHVlIGhhcyB0aGUgaGlnaGVzdCBwcmlvcml0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCAodG86IHt9LCAuLi5hcmdzOiBBcnJheTx7fT4pOiB7fSB7XG4gIGlmICghYXJncyB8fCBhcmdzLmxlbmd0aCA8PSAwKSB7XG4gICAgcmV0dXJuIHRvXG4gIH1cbiAgYXJncy5mb3JFYWNoKGZyb20gPT4ge1xuICAgIGlmICh0eXBlb2YgZnJvbSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tKSB7XG4gICAgICB0b1trZXldID0gZnJvbVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gdG9cbn1cbi8qKlxuICogTWl4IHRydXRoeSBvciAnJyBwcm9wZXJ0eSB2YWx1ZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICogbW9zdGx5IGZvciBtZXJnaW5nIHN0eWxlcy4gKHRoYXQncyB3aHkgJycgaXMgZmFsc3kgYnV0IHN0aWxsIHNob3VsZCBiZSBjb3VudGVkIGluLilcbiAqIHRoZSByaWdodGVzdCBvYmplY3QncyB2YWx1ZSBoYXMgdGhlIGhpZ2hlc3QgcHJpb3JpdHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRUcnV0aHkgKHRvOiB7fSwgLi4uYXJnczogQXJyYXk8e30+KToge30ge1xuICBpZiAoIWFyZ3MgfHwgYXJncy5sZW5ndGggPD0gMCkge1xuICAgIHJldHVybiB0b1xuICB9XG4gIGFyZ3MuZm9yRWFjaChmcm9tID0+IHtcbiAgICBpZiAodHlwZW9mIGZyb20gIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGlcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tKSB7XG4gICAgICBpZiAoKChpID0gZnJvbVtrZXldKSB8fCBpID09PSAnJyB8fCBpID09PSAwKSAmJiBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0b1trZXldID0gaVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHRvXG59XG4vKipcbiAqIE1peCBzcGVjaWZpZWQgcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRLZXlzICh0bzoge30sIGZyb206IHt9ID0ge30sIGtleXM6IEFycmF5PHN0cmluZz4pOiB7fSB7XG4gIChrZXlzIHx8IFtdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgZnJvbSAmJiAodG9ba2V5XSA9IGZyb21ba2V5XSlcbiAgfSlcbiAgcmV0dXJuIHRvXG59XG4vKipcbiAqIEV4dHJhY3Qgc3BlY2lmaWVkIHByb3BlcnRpZXMgZnJvbSBzcmMgdG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RLZXlzICh0bzoge30sIGZyb206IHt9ID0ge30sIGtleXM6IEFycmF5PHN0cmluZz4pIHtcbiAgaWYgKCFmcm9tKSB7XG4gICAgcmV0dXJuIHRvXG4gIH1cbiAgKGtleXMgfHwgW10pLmZvckVhY2goa2V5ID0+IHtcbiAgICBmcm9tICYmICh0b1trZXldID0gZnJvbVtrZXldKVxuICAgIGZyb20gJiYgKGRlbGV0ZSBmcm9tW2tleV0pXG4gIH0pXG4gIHJldHVybiB0b1xufVxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZCAoZm46IEZ1bmN0aW9uLCBjdHg6IG1peGVkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYTogbWl4ZWQpIHtcbiAgICBjb25zdCBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIHJldHVybiBsID8gbCA+IDEgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cykgOiBmbi5jYWxsKGN0eCwgYSkgOiBmbi5jYWxsKGN0eClcbiAgfVxufVxuLyoqXG4gKiBPbmx5IGNhbGwgdGhlIGZ1bmMgdGhlIGxhc3QgdGltZSBiZWZvcmUgaXQncyBub3QgdGhhdCBmcmVxdWVudGx5IGNhbGxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlIChmdW5jOiBGdW5jdGlvbiwgd2FpdDogbnVtYmVyKSB7XG4gIGxldCB0aW1lcklkXG4gIGZ1bmN0aW9uIGxhdGVyICgpIHtcbiAgICB0aW1lcklkID0gbnVsbFxuICAgIGZ1bmMuYXBwbHkobnVsbClcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcklkKVxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuICB9XG59XG4vKipcbiAqIE9ubHkgY2FsbCB0aGUgZnVuYyB0aGUgZmlyc3QgdGltZSBiZWZvcmUgYSBzZXJpZXMgZnJlcXVlbnRseSBmdW5jdGlvbiBjYWxscyBoYXBwZW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXByZXNzIChmdW5jOiBGdW5jdGlvbiwgd2FpdDogbnVtYmVyKSB7XG4gIGxldCB0aW1lcklkXG5cbiAgZnVuY3Rpb24gbGF0ZXIgKCkge1xuICAgIHRpbWVySWQgPSBudWxsXG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRpbWVySWQpIHtcbiAgICAgIGZ1bmMuYXBwbHkoKVxuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGltZXJJZClcbiAgICB0aW1lcklkID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcbiAgfVxufVxuLyoqXG4gKiBPbmx5IGNhbGwgdGhlIGZ1bmMgZXZlcnkgdGltZSBhZnRlciBhIHdhaXQgbWlsbGlzZWNvbmRzIGlmIGl0J3MgdG9vIGZyZXF1ZW50bHkgY2FsbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUgKGZ1bmM6IEZ1bmN0aW9uLCB3YWl0OiBudW1iZXIsIGNhbGxMYXN0VGltZTogYm9vbGVhbikge1xuICBsZXQgbGFzdCA9IDBcbiAgbGV0IGxhc3RUaW1lciA9IG51bGxcbiAgY29uc3QgbGFzdFRpbWVEdXJhdGlvbiA9IHdhaXQgKyAod2FpdCA+IDI1ID8gd2FpdCA6IDI1KSAvLyBwbHVzIGhhbGYgd2FpdCB0aW1lLlxuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3M6IEFycmF5PG1peGVkPikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgaWYgKHRpbWUgLSBsYXN0ID4gd2FpdCkge1xuICAgICAgaWYgKGNhbGxMYXN0VGltZSkge1xuICAgICAgICBsYXN0VGltZXIgJiYgY2xlYXJUaW1lb3V0KGxhc3RUaW1lcilcbiAgICAgICAgbGFzdFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGFzdFRpbWVyID0gbnVsbFxuICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgICAgfSwgbGFzdFRpbWVEdXJhdGlvbilcbiAgICAgIH1cbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGxhc3QgPSB0aW1lXG4gICAgfVxuICB9XG59XG4vLyBkaXJlY3Rpb246ICdsJyB8ICdyJywgZGVmYXVsdCBpcyAncidcbi8vIG51bTogaG93IG1hbnkgdGltZXMgdG8gbG9vcCwgc2hvdWxkIGJlIGEgcG9zaXRpdmUgaW50ZWdlclxuZXhwb3J0IGZ1bmN0aW9uIGxvb3BBcnJheSAoYXJyOiBhbnksIG51bTogbnVtYmVyLCBkaXJlY3Rpb246IHN0cmluZykge1xuICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgIHJldHVyblxuICB9XG4gIGxldCBpc0xlZnQgPSAoZGlyZWN0aW9uICsgJycpLnRvTG93ZXJDYXNlKCkgPT09ICdsJ1xuICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoXG4gIG51bSA9IG51bSAlIGxlblxuICBpZiAobnVtIDwgMCkge1xuICAgIG51bSA9IC1udW1cbiAgICBpc0xlZnQgPSAhaXNMZWZ0XG4gIH1cbiAgaWYgKG51bSA9PT0gMCkge1xuICAgIHJldHVybiBhcnJcbiAgfVxuICBsZXQgbHAsIHJwXG4gIGlmIChpc0xlZnQpIHtcbiAgICBscCA9IGFyci5zbGljZSgwLCBudW0pXG4gICAgcnAgPSBhcnIuc2xpY2UobnVtKVxuICB9XG4gIGVsc2Uge1xuICAgIGxwID0gYXJyLnNsaWNlKDAsIGxlbiAtIG51bSlcbiAgICBycCA9IGFyci5zbGljZShsZW4gLSBudW0pXG4gIH1cbiAgcmV0dXJuIHJwLmNvbmNhdChscClcbn1cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkIChmbjogYW55KSB7XG4gIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cjogc3RyaW5nKSB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXVxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9XG59XG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbG1pdGVkIHN0cmluZy5cbiAqL1xuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZ1xuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYy50b1VwcGVyQ2FzZSgpKVxufSlcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbGl6ZUtleXMgKG9iajogYW55KSB7XG4gIGNvbnN0IHJlcyA9IHt9XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIHJlc1tjYW1lbGl6ZShrZXkpXSA9IG9ialtrZXldXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuLyoqXG4gKiBDYXBpdGFsaXplIGEgc3RyaW5nLlxuICovXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG59KVxuICAvKipcbiAgICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAgICovXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2dcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKS5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpXG59KVxuZXhwb3J0IGZ1bmN0aW9uIGh5cGhlbmF0ZUtleXMgKG9iajogYW55KSB7XG4gIGNvbnN0IHJlcyA9IHt9XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIHJlc1toeXBoZW5hdGUoa2V5KV0gPSBvYmpba2V5XVxuICB9XG4gIHJldHVybiByZXNcbn1cbmNvbnN0IHZlbmRvcnNSZWcgPSAvd2Via2l0LXxtb3otfG8tfG1zLS9cbmV4cG9ydCBmdW5jdGlvbiBoeXBoZW5hdGVTdHlsZUtleXMgKG9iajogYW55KSB7XG4gIGNvbnN0IHJlcyA9IHt9XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGNvbnN0IGhrID0gaHlwaGVuYXRlKGtleSkucmVwbGFjZSh2ZW5kb3JzUmVnLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgIHJldHVybiAnLScgKyAkMFxuICAgIH0pXG4gICAgcmVzW2hrXSA9IG9ialtrZXldXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9LZWJhYiAobmFtZTogc3RyaW5nKSB7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiAnJ1xuICB9XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKGcsIGcxKSB7XG4gICAgcmV0dXJuIGAtJHtnMS50b0xvd2VyQ2FzZSgpfWBcbiAgfSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDc3MgKGNzczogc3RyaW5nLCBjc3NJZDogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuKSB7XG4gIGxldCBzdHlsZTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3NzSWQpXG4gIGlmIChzdHlsZSAmJiByZXBsYWNlKSB7XG4gICAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSlcbiAgICBzdHlsZSA9IG51bGxcbiAgfVxuICBpZiAoIXN0eWxlKSB7XG4gICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2NzcydcbiAgICBjc3NJZCAmJiAoc3R5bGUuaWQgPSBjc3NJZClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKVxuICB9XG4gIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG59XG5leHBvcnQgZnVuY3Rpb24gbmV4dEZyYW1lIChjYWxsYmFjazogYW55KSB7XG4gIGNvbnN0IHJ1bm5lciA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAoY2IgPT4gc2V0VGltZW91dChjYiwgMTYpKVxuICBydW5uZXIoY2FsbGJhY2spXG59XG5leHBvcnQgZnVuY3Rpb24gdG9DU1NUZXh0IChvYmplY3Q6IGFueSkge1xuICBpZiAoIW9iamVjdCkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IG9iaiA9IGh5cGhlbmF0ZVN0eWxlS2V5cyhvYmplY3QpXG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgY3NzVGV4dCArPSBgJHtrZXl9OiR7b2JqW2tleV19O2BcbiAgfVxuICByZXR1cm4gY3NzVGV4dFxufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlscy9mdW5jJ1xuXG4vKipcbiAqIHZpZXdwb3J0IHByaW9yaXR5OlxuICpcbiAqIDEuIG1ldGEgd2VleC12aWV3cG9ydCAoZGV2ZWxvcGVyIGN1c3RvbSlcbiAqIDIuIHNldFZpZXdwb3J0KGNvbmZpZykgOj0gY29uZmlnLndpZHRoIChwcml2YXRlIGNvZGUpIEBkZXByZWNhdGVkXG4gKiAzLiBwcm9jZXNzLmVudi5WSUVXUE9SVF9XSURUSCAoYnVpZCB0aW1lKVxuICpcbiAqL1xubGV0IGlzSW5pdGVkID0gZmFsc2VcbmNvbnN0IERFRkFVTFRfVklFV1BPUlRfV0lEVEggPSA3NTBcblxuLyoqXG4gKiBnZXQgdmlld3BvcnQgd2lkdGggZnJvbSB3ZWV4LXZpZXdwb3J0IG1ldGEuXG4gKi9cbmNvbnN0IGVudlZpZXdwb3J0V2lkdGggPSBwYXJzZUludChwcm9jZXNzLmVudi5WSUVXUE9SVF9XSURUSClcbmxldCB3aWR0aDogbnVtYmVyID0gIWlzTmFOKGVudlZpZXdwb3J0V2lkdGgpICYmIGVudlZpZXdwb3J0V2lkdGggPiAwXG4gID8gZW52Vmlld3BvcnRXaWR0aFxuICA6IERFRkFVTFRfVklFV1BPUlRfV0lEVEhcblxubGV0IHd4Vmlld3BvcnRNZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwid2VleC12aWV3cG9ydFwiXScpXG5jb25zdCBtZXRhV2lkdGggPSB3eFZpZXdwb3J0TWV0YSAmJiBwYXJzZUludCh3eFZpZXdwb3J0TWV0YS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSlcbmlmIChtZXRhV2lkdGggJiYgIWlzTmFOKG1ldGFXaWR0aCkgJiYgbWV0YVdpZHRoID4gMCkge1xuICB3aWR0aCA9IG1ldGFXaWR0aFxufVxuXG5sZXQgZHByOiBudW1iZXIgPSAwXG5sZXQgc2NyZWVuV2lkdGg6IG51bWJlciA9IDBcbmxldCBzY3JlZW5IZWlnaHQ6IG51bWJlciA9IDBcblxuY29uc3QgaW5mbzoge1xuICBkcHI6IG51bWJlcixcbiAgc2NhbGU6IG51bWJlcixcbiAgcmVtOiBudW1iZXIsXG4gIGRldmljZVdpZHRoOiBudW1iZXIsXG4gIGRldmljZUhlaWdodDogbnVtYmVyXG59ID0ge1xuICBkcHIsXG4gIHNjYWxlOiAwLFxuICByZW06IDAsXG4gIGRldmljZVdpZHRoOiAwLFxuICBkZXZpY2VIZWlnaHQ6IDBcbn1cblxuLyoqXG4gKiBzZXQgcm9vdCBmb250LXNpemUgZm9yIHJlbSB1bml0cy4gSWYgYWxyZWFkeSBiZWVuIHNldCwganVzdCBza2lwIHRoaXMuXG4gKi9cbmZ1bmN0aW9uIHNldFJvb3RGb250ICh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudFxuICBjb25zdCByZW0gPSB3aWR0aCAvIDEwXG4gIGlmICghZG9jLmRvY3VtZW50RWxlbWVudCkgeyByZXR1cm4gfVxuICBjb25zdCByb290Rm9udFNpemUgPSBkb2MuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplXG4gIGlmICghcm9vdEZvbnRTaXplKSB7XG4gICAgZG9jLmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHJlbSArICdweCdcbiAgICBpbmZvLnJlbSA9IHJlbVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldE1ldGFWaWV3cG9ydCAod2lkdGg6IG51bWJlcik6IHZvaWQge1xuICBpZiAoIXd4Vmlld3BvcnRNZXRhKSB7XG4gICAgd3hWaWV3cG9ydE1ldGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgICB3eFZpZXdwb3J0TWV0YS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnd2VleC12aWV3cG9ydCcpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgbWV0YVdpZHRoID0gcGFyc2VJbnQod3hWaWV3cG9ydE1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpXG4gICAgaWYgKG1ldGFXaWR0aCA9PT0gd2lkdGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICB3eFZpZXdwb3J0TWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB3aWR0aCArICcnKVxufVxuXG4vKipcbiAqIGV4cG9ydCB2aWV3cG9ydCBpbmZvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAodmlld3BvcnRXaWR0aDogbnVtYmVyID0gd2lkdGgpOiA/e1xuICBkcHI6IG51bWJlcixcbiAgc2NhbGU6IG51bWJlcixcbiAgcmVtOiBudW1iZXIsXG4gIGRldmljZVdpZHRoOiBudW1iZXIsXG4gIGRldmljZUhlaWdodDogbnVtYmVyXG59IHtcbiAgaWYgKCFpc0luaXRlZCkge1xuICAgIGlzSW5pdGVkID0gdHJ1ZVxuXG4gICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50XG4gICAgaWYgKCFkb2MpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1t2dWUtcmVuZGVyXSB3aW5kb3cuZG9jdW1lbnQgaXMgdW5kZmluZWQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1t2dWUtcmVuZGVyXSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgaXMgdW5kZmluZWQuJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGRwciA9IGluZm8uZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW9cbiAgICBzY3JlZW5XaWR0aCA9IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICBzY3JlZW5IZWlnaHQgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgLy8gc2V0IHJvb3QgZm9udCBmb3IgcmVtLlxuICAgIHNldFJvb3RGb250KHNjcmVlbldpZHRoKVxuICAgIHNldE1ldGFWaWV3cG9ydCh2aWV3cG9ydFdpZHRoKVxuXG4gICAgLyoqXG4gICAgICogd2h5IG5vdCB0byB1c2Ugd2luZG93LnNjcmVlbi53aWR0aCB0byBnZXQgc2NyZWVuV2lkdGggPyBCZWNhdXNlIGluIHNvbWVcbiAgICAgKiBvbGQgd2Via2l0IGJyb3dzZXIgb24gYW5kcm9pZCBzeXN0ZW0gaXQgZ2V0IHRoZSBkZXZpY2UgcGl4ZWwgd2lkdGgsIHdoaWNoXG4gICAgICogaXMgdGhlIHNjcmVlbldpZHRoIG11bHRpcGx5IGJ5IHRoZSBkZXZpY2UgcGl4ZWwgcmF0aW8uXG4gICAgICogZS5nLiBpcDYgLT4gZ2V0IDM3NSBmb3IgdmlydHVhbCBzY3JlZW4gd2lkdGguXG4gICAgICovXG4gICAgY29uc3Qgc2NhbGUgPSBzY3JlZW5XaWR0aCAvIHZpZXdwb3J0V2lkdGhcbiAgICAvKipcbiAgICAgKiAxLiBpZiBzZXQgaW5pdGlhbC9tYXhpbXVtL21pbWltdW0tc2NhbGUgc29tZSBob3cgdGhlIHBhZ2Ugd2lsbCBoYXZlIGEgYm91bmNlXG4gICAgICogZWZmZWN0IHdoZW4gdXNlciBkcmFnIHRoZSBwYWdlIHRvd2FyZHMgaG9yaXpvbnRhbCBheGlzLlxuICAgICAqIDIuIER1ZSB0byBjb21wYXRpYmlsaXR5IHJlYXNvbnMsIG5vdCB0byB1c2Ugdmlld3BvcnQgbWV0YSBhbnltb3JlLiBKdXN0IGJyaW5nXG4gICAgICogYSBwYXJhbWV0ZXIgc2NhbGUgaW50byB0aGUgc3R5bGUgdmFsdWUgcHJvY2Vzc2luZy5cbiAgICAgKi9cblxuICAgIC8vIGNvbnN0IGNvbnRlbnRzID0gW1xuICAgIC8vICAgYHdpZHRoPSR7dmlld3BvcnRXaWR0aH1gLFxuICAgIC8vICAgYGluaXRpYWwtc2NhbGU9JHtzY2FsZX1gLFxuICAgIC8vICAgYG1heGltdW0tc2NhbGU9JHtzY2FsZX1gLFxuICAgIC8vICAgYG1pbmltdW0tc2NhbGU9JHtzY2FsZX1gLFxuICAgIC8vICAgYHVzZXItc2NhbGFibGU9bm9gXG4gICAgLy8gXVxuXG4gICAgLy8gbGV0IG1ldGEgPSBkb2MucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKVxuICAgIC8vIGlmICghbWV0YSkge1xuICAgIC8vICAgbWV0YSA9IGRvYy5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgICAvLyAgIG1ldGEuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ZpZXdwb3J0JylcbiAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5hcHBlbmRDaGlsZChtZXRhKVxuICAgIC8vIH1cbiAgICAvLyBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIGNvbnRlbnRzLmpvaW4oJywnKSlcblxuICAgIGV4dGVuZChpbmZvLCB7XG4gICAgICBzY2FsZSxcbiAgICAgIGRldmljZVdpZHRoOiBzY3JlZW5XaWR0aCAqIGRwcixcbiAgICAgIGRldmljZUhlaWdodDogc2NyZWVuSGVpZ2h0ICogZHByXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBpbmZvXG59XG5cbi8qKlxuICogcmVzZXQgdmlld3BvcnQgd2lkdGggYW5kIHNjYWxlLlxuICogQHJldHVybiBuZXcgc2NhbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldFZpZXdwb3J0ICh2aWV3cG9ydFdpZHRoOiBudW1iZXIpOiBudW1iZXIge1xuICBzZXRNZXRhVmlld3BvcnQodmlld3BvcnRXaWR0aClcbiAgY29uc3QgbmV3U2NhbGUgPSBzY3JlZW5XaWR0aCAvIHZpZXdwb3J0V2lkdGhcbiAgaW5mby5zY2FsZSA9IG5ld1NjYWxlXG4gIHJldHVybiBuZXdTY2FsZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRJbmZvICgpOiB7XG4gIGRwcjogbnVtYmVyLFxuICBzY2FsZTogbnVtYmVyLFxuICByZW06IG51bWJlcixcbiAgZGV2aWNlV2lkdGg6IG51bWJlcixcbiAgZGV2aWNlSGVpZ2h0OiBudW1iZXJcbn0ge1xuICByZXR1cm4gaW5mb1xufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmZ1bmN0aW9uIGV4dGVuZCAodG8sIC4uLmFyZ3MpIHtcbiAgaWYgKCFhcmdzIHx8IGFyZ3MubGVuZ3RoIDw9IDApIHsgcmV0dXJuIHRvIH1cbiAgYXJncy5mb3JFYWNoKGZyb20gPT4ge1xuICAgIGlmICh0eXBlb2YgZnJvbSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tKSB7XG4gICAgICB0b1trZXldID0gZnJvbVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBDcmVhdGUgRXZlbnQuXG4gKiBAcGFyYW0ge0RPTVN0cmluZ30gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFdmVudCAodGFyZ2V0LCB0eXBlLCBwcm9wcykge1xuICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0eXBlLCB7IGJ1YmJsZXM6IGZhbHNlIH0pXG4gIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICBleHRlbmQoZXZlbnQsIHByb3BzKVxuICAvLyAgcGhhbnRvbWpzIGRvbid0IHN1cHBvcnQgY3VzdG9tZXIgZXZlbnRcbiAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1BoYW50b21KUycpICE9PSAtMSkge1xuICAgIHJldHVybiBldmVudFxuICB9XG4gIHRyeSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAndGFyZ2V0Jywge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiB0YXJnZXQgfHwgbnVsbFxuICAgIH0pXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBleHRlbmQoe30sIGV2ZW50LCB7IHRhcmdldDogdGFyZ2V0IHx8IG51bGwgfSlcbiAgfVxuICByZXR1cm4gZXZlbnRcbn1cblxuLyoqXG4gKiBDcmVhdGUgQ3VzdG9tIEV2ZW50LlxuICogQHBhcmFtIHtET01TdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQgKHRhcmdldCwgdHlwZSwgcHJvcHMpIHtcbiAgLy8gY29tcGF0aWJpbGl0eTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9Y3VzdG9tZXZlbnRcbiAgLy8gY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSlcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICBldmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIHRydWUsIHt9KVxuICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgZXh0ZW5kKGV2ZW50LCBwcm9wcylcblxuICAvLyBldmVudC50YXJnZXQgaXMgcmVhZG9ubHlcbiAgdHJ5IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHRhcmdldCB8fCBudWxsXG4gICAgfSlcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGV4dGVuZCh7fSwgZXZlbnQsIHsgdGFyZ2V0OiB0YXJnZXQgfHwgbnVsbCB9KVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50XG59XG5cbi8qKlxuICogZGlzcGF0Y2ggYSBldmVudCBvbiBhIGRvbSBlbGVtZW50LlxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGRvbVxuICogQHBhcmFtICB7RXZlbnR9IGV2ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50IChkb20sIGV2ZW50KSB7XG4gIGRvbS5kaXNwYXRjaEV2ZW50KGV2ZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwRm9ybUV2ZW50cyAoY29udGV4dCkge1xuICBjb25zdCBldmVudE1hcCA9IHt9XG4gIDtbJ2lucHV0JywgJ2NoYW5nZScsICdmb2N1cycsICdibHVyJ10uZm9yRWFjaCh0eXBlID0+IHtcbiAgICBldmVudE1hcFt0eXBlXSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmIChjb250ZXh0LiRlbCkge1xuICAgICAgICBldmVudC52YWx1ZSA9IGNvbnRleHQuJGVsLnZhbHVlXG4gICAgICB9XG4gICAgICBjb250ZXh0LiRlbWl0KHR5cGUsIGV2ZW50KVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGV2ZW50TWFwXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWFwRm9ybUV2ZW50c1xufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjcm9sbGFibGVUeXBlczogWydzY3JvbGxlcicsICdsaXN0JywgJ3dhdGVyZmFsbCddLFxuICBnZXN0dXJlRXZlbnRzOiBbXG4gICAgJ2xvbmdwcmVzcycsXG4gICAgJ3BhbnN0YXJ0JyxcbiAgICAncGFubW92ZScsXG4gICAgJ3BhbmVuZCcsXG4gICAgJ3N3aXBlJyxcbiAgICAnbG9uZ3ByZXNzJyxcbiAgICAndGFwJ1xuICBdXG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IHRocm90dGxlLCBleHRlbmQgfSBmcm9tICcuL2Z1bmMnXG5pbXBvcnQgeyBjcmVhdGVFdmVudCB9IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudFNjcm9sbGVyICh2bSkge1xuICBpZiAoIXZtKSByZXR1cm4gbnVsbFxuICBpZiAodm0uX3BhcmVudFNjcm9sbGVyKSB7XG4gICAgcmV0dXJuIHZtLl9wYXJlbnRTY3JvbGxlclxuICB9XG4gIGZ1bmN0aW9uIF9nZXRQYXJlbnRTY3JvbGxlciAocGFyZW50KSB7XG4gICAgaWYgKCFwYXJlbnQpIHsgcmV0dXJuIH1cbiAgICBpZiAoY29uZmlnLnNjcm9sbGFibGVUeXBlcy5pbmRleE9mKHBhcmVudC53ZWV4VHlwZSkgPiAtMSkge1xuICAgICAgdm0uX3BhcmVudFNjcm9sbGVyID0gcGFyZW50XG4gICAgICByZXR1cm4gcGFyZW50XG4gICAgfVxuICAgIHJldHVybiBfZ2V0UGFyZW50U2Nyb2xsZXIocGFyZW50LiRwYXJlbnQpXG4gIH1cbiAgcmV0dXJuIF9nZXRQYXJlbnRTY3JvbGxlcih2bS4kcGFyZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW50ZXJzZWN0aW9uIChyZWN0LCBjdFJlY3QpIHtcbiAgcmV0dXJuIChyZWN0LmxlZnQgPCBjdFJlY3QucmlnaHQgJiYgcmVjdC5yaWdodCA+IGN0UmVjdC5sZWZ0KVxuICAgICYmIChyZWN0LnRvcCA8IGN0UmVjdC5ib3R0b20gJiYgcmVjdC5ib3R0b20gPiBjdFJlY3QudG9wKVxufVxuXG4vKipcbiAqIGlzRWxlbWVudFZpc2libGVcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSAgZWwgICAgYSBkb20gZWxlbWVudC5cbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSAgY29udGFpbmVyICBvcHRpb25hbCwgdGhlIGNvbnRhaW5lciBvZiB0aGlzIGVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50VmlzaWJsZSAoZWwsIGNvbnRhaW5lcikge1xuICBpZiAoIWVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgeyByZXR1cm4gZmFsc2UgfVxuICBjb25zdCBib2R5UmVjdCA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICByaWdodDogd2luZG93LmlubmVyV2lkdGhcbiAgfVxuICBjb25zdCBjdFJlY3QgPSAoY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5KVxuICAgID8gYm9keVJlY3QgOiBjb250YWluZXJcbiAgICA/IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IGJvZHlSZWN0XG4gIHJldHVybiBoYXNJbnRlcnNlY3Rpb24oXG4gICAgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgY3RSZWN0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wb25lbnRWaXNpYmxlIChjb21wb25lbnQpIHtcbiAgaWYgKGNvbXBvbmVudC4kZWwpIHtcbiAgICBjb25zdCBzY3JvbGxlciA9IGdldFBhcmVudFNjcm9sbGVyKGNvbXBvbmVudClcbiAgICBpZiAoc2Nyb2xsZXIgJiYgc2Nyb2xsZXIuJGVsKSB7XG4gICAgICByZXR1cm4gaGFzSW50ZXJzZWN0aW9uKFxuICAgICAgICBjb21wb25lbnQuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBzY3JvbGxlci4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gaXNFbGVtZW50VmlzaWJsZShjb21wb25lbnQuJGVsKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gdG8gdHJpZ2dlciB0aGUgYXBwZWFyL2Rpc2FwcGVhciBldmVudC5cbmZ1bmN0aW9uIHRyaWdnZXJFdmVudCAoZWxtLCBoYW5kbGVycywgaXNTaG93LCBkaXIpIHtcbiAgY29uc3QgZXZ0ID0gaXNTaG93ID8gJ2FwcGVhcicgOiAnZGlzYXBwZWFyJ1xuICBsZXQgbGlzdGVuZXIgPSBoYW5kbGVyc1tldnRdXG4gIGlmIChsaXN0ZW5lciAmJiBsaXN0ZW5lci5mbikge1xuICAgIGxpc3RlbmVyID0gbGlzdGVuZXIuZm5cbiAgfVxuICBpZiAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcihjcmVhdGVFdmVudChlbG0sIGV2dCwge1xuICAgICAgZGlyZWN0aW9uOiBkaXJcbiAgICB9KSlcbiAgfVxufVxuXG4vKipcbiAqIGdldCBhbGwgZXZlbnQgbGlzdGVuZXJzLiBpbmNsdWRpbmcgYm91bmQgaGFuZGxlcnMgaW4gYWxsIHBhcmVudCB2bm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudEhhbmRsZXJzIChjb250ZXh0KSB7XG4gIGxldCB2bm9kZSA9IGNvbnRleHQuJHZub2RlXG4gIGNvbnN0IGhhbmRsZXJzID0ge31cbiAgY29uc3QgYXR0YWNoZWRWbm9kZXMgPSBbXVxuICB3aGlsZSAodm5vZGUpIHtcbiAgICBhdHRhY2hlZFZub2Rlcy5wdXNoKHZub2RlKVxuICAgIHZub2RlID0gdm5vZGUucGFyZW50XG4gIH1cbiAgYXR0YWNoZWRWbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnRMaXN0ZW5lcnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzXG4gICAgY29uc3QgZGF0YU9uID0gdm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLm9uXG4gICAgZXh0ZW5kKGhhbmRsZXJzLCBwYXJlbnRMaXN0ZW5lcnMsIGRhdGFPbilcbiAgfSlcbiAgcmV0dXJuIGhhbmRsZXJzXG59XG5cbi8qKlxuICogV2F0Y2ggZWxlbWVudCdzIHZpc2liaWxpdHkgdG8gdGVsbCB3aGV0aGVyIHNob3VsZCB0cmlnZ2VyIGEgYXBwZWFyL2Rpc2FwcGVhclxuICogZXZlbnQgaW4gc2Nyb2xsIGhhbmRsZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaEFwcGVhciAoY29udGV4dCkge1xuICBjb25zdCBlbCA9IGNvbnRleHQgJiYgY29udGV4dC4kZWxcbiAgaWYgKCFlbCkgeyByZXR1cm4gfVxuXG4gIGNvbnN0IGhhbmRsZXJzID0gZ2V0RXZlbnRIYW5kbGVycyhjb250ZXh0KVxuICBpZiAoIWhhbmRsZXJzLmFwcGVhciAmJiAhaGFuZGxlcnMuZGlzYXBwZWFyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgaXNXaW5kb3cgPSBmYWxzZVxuICBsZXQgY29udGFpbmVyID0gd2luZG93XG4gIGNvbnN0IHNjcm9sbGVyID0gZ2V0UGFyZW50U2Nyb2xsZXIoY29udGV4dClcbiAgaWYgKHNjcm9sbGVyICYmIHNjcm9sbGVyLiRlbCkge1xuICAgIGNvbnRhaW5lciA9IHNjcm9sbGVyLiRlbFxuICB9XG4gIGVsc2Uge1xuICAgIGlzV2luZG93ID0gdHJ1ZVxuICB9XG5cbiAgLy8gYWRkIGN1cnJlbnQgdm0gdG8gdGhlIGNvbnRhaW5lcidzIGFwcGVhciB3YXRjaCBsaXN0LlxuICBpZiAoIWNvbnRhaW5lci5fd2F0Y2hBcHBlYXJMaXN0KSB7XG4gICAgY29udGFpbmVyLl93YXRjaEFwcGVhckxpc3QgPSBbXVxuICB9XG4gIGNvbnRhaW5lci5fd2F0Y2hBcHBlYXJMaXN0LnB1c2goY29udGV4dClcbiAgaWYgKGNvbnRhaW5lci5fc2Nyb2xsV2F0Y2hlZCkgeyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiBDb2RlIGJlbG93IHdpbGwgb25seSBleGVjIG9uY2UgZm9yIGJpbmRpbmcgc2Nyb2xsIGhhbmRsZXIgZm9yIHBhcmVudCBjb250YWluZXIuXG4gICAqL1xuICBjb250YWluZXIuX3Njcm9sbFdhdGNoZWQgPSB0cnVlXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSB0aHJvdHRsZShldmVudCA9PiB7XG4gICAgLyoqXG4gICAgICogZGV0ZWN0IHNjcm9sbGluZyBkaXJlY3Rpb24uXG4gICAgICogZGlyZWN0aW9uIG9ubHkgc3VwcG9ydCB1cCAmIGRvd24geWV0LlxuICAgICAqIFRPRE86IGRpcmVjdGlvbiBzdXBwb3J0IGxlZnQgJiByaWdodC5cbiAgICAgKi9cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBpc1dpbmRvdyA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IGNvbnRhaW5lci5zY3JvbGxUb3BcbiAgICBjb25zdCBwcmVUb3AgPSBjb250YWluZXIuX2xhc3RTY3JvbGxUb3BcbiAgICBjb250YWluZXIuX2xhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3BcbiAgICBjb25zdCBkaXIgPSBzY3JvbGxUb3AgPCBwcmVUb3BcbiAgICAgID8gJ2Rvd24nIDogc2Nyb2xsVG9wID4gcHJlVG9wXG4gICAgICA/ICd1cCcgOiBudWxsXG5cbiAgICBjb25zdCB3YXRjaEFwcGVhckxpc3QgPSBjb250YWluZXIuX3dhdGNoQXBwZWFyTGlzdCB8fCBbXVxuICAgIGNvbnN0IGxlbiA9IHdhdGNoQXBwZWFyTGlzdC5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCB2bSA9IHdhdGNoQXBwZWFyTGlzdFtpXVxuICAgICAgY29uc3QgdmlzaWJsZSA9IGlzRWxlbWVudFZpc2libGUodm0uJGVsLCBpc1dpbmRvdyA/IGRvY3VtZW50LmJvZHkgOiBjb250YWluZXIpXG4gICAgICBkZXRlY3RBcHBlYXIodm0sIHZpc2libGUsIGRpcilcbiAgICB9XG4gIH0sIDI1LCB0cnVlKVxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwgZmFsc2UpXG59XG5cbi8qKlxuICogdHJpZ2dlciBhIGFwcGVhciBldmVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXJBcHBlYXIgKGNvbnRleHQsIHZpc2libGUpIHtcbiAgaWYgKCFjb250ZXh0IHx8ICFjb250ZXh0LiRlbCkgeyByZXR1cm4gfVxuICBpZiAoIXZpc2libGUpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keVxuICAgIGNvbnN0IHNjcm9sbGVyID0gZ2V0UGFyZW50U2Nyb2xsZXIoY29udGV4dClcbiAgICBpZiAoc2Nyb2xsZXIgJiYgc2Nyb2xsZXIuJGVsKSB7XG4gICAgICBjb250YWluZXIgPSBzY3JvbGxlci4kZWxcbiAgICB9XG4gICAgdmlzaWJsZSA9IGlzRWxlbWVudFZpc2libGUoY29udGV4dC4kZWwsIGNvbnRhaW5lcilcbiAgfVxuICByZXR1cm4gZGV0ZWN0QXBwZWFyKGNvbnRleHQsIHZpc2libGUpXG59XG5cbi8qKlxuICogdHJpZ2dlciBhIGRpc2FwcGVhciBldmVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXJEaXNhcHBlYXIgKGNvbnRleHQpIHtcbiAgcmV0dXJuIGRldGVjdEFwcGVhcihjb250ZXh0LCBmYWxzZSlcbn1cblxuLyoqXG4gKiBkZWNpZGUgd2hldGhlciB0byB0cmlnZ2VyIGEgYXBwZWFyL2Rpc2FwcGVhciBldmVudC5cbiAqIEBwYXJhbSB7VnVlQ29tcG9uZW50fSBjb250ZXh0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZpc2libGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdEFwcGVhciAoY29udGV4dCwgdmlzaWJsZSwgZGlyID0gbnVsbCkge1xuICBjb25zdCBlbCA9IGNvbnRleHQgJiYgY29udGV4dC4kZWxcbiAgaWYgKCFlbCkgeyByZXR1cm4gfVxuICBjb25zdCBoYW5kbGVycyA9IGdldEV2ZW50SGFuZGxlcnMoY29udGV4dClcbiAgaWYgKCFoYW5kbGVyc1t2aXNpYmxlID8gJ2FwcGVhcicgOiAnZGlzYXBwZWFyJ10pIHsgcmV0dXJuIH1cbiAgLyoqXG4gICAqIGlmIHRoZSBjb21wb25lbnQgaGFzbid0IGFwcGVhcmVkIGZvciBvbmNlIHlldCwgdGhlbiBpdCBzaG91bGRuJ3QgdHJpZ2dlclxuICAgKiBhIGRpc2FwcGVhciBldmVudCBhdCBhbGwuXG4gICAqL1xuICBpZiAoIXZpc2libGUgJiYgIWNvbnRleHQuX2FwcGVhcmVkT25jZSkgeyByZXR1cm4gfVxuICBpZiAoIWNvbnRleHQuX3Zpc2libGUgPT09IHZpc2libGUpIHtcbiAgICBpZiAoIWNvbnRleHQuX2FwcGVhcmVkT25jZSkge1xuICAgICAgY29udGV4dC5fYXBwZWFyZWRPbmNlID0gdHJ1ZVxuICAgIH1cbiAgICBjb250ZXh0Ll92aXNpYmxlID0gdmlzaWJsZVxuICAgIHRyaWdnZXJFdmVudChlbCwgaGFuZGxlcnMsIHZpc2libGUsIGRpcilcbiAgfVxufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IGlzRWxlbWVudFZpc2libGUgfSBmcm9tICcuL2NvbXBvbmVudCdcbmltcG9ydCB7IGNyZWF0ZUV2ZW50LCBkaXNwYXRjaEV2ZW50IH0gZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnLi9mdW5jJ1xuXG5mdW5jdGlvbiBwcmVMb2FkSW1nIChzcmM6IHN0cmluZyxcbiAgICBsb2FkQ2FsbGJhY2s6ID8oRXZlbnQpID0+IHZvaWQsXG4gICAgZXJyb3JDYWxsYmFjazogPyhFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICBpbWcub25sb2FkID0gbG9hZENhbGxiYWNrID8gbG9hZENhbGxiYWNrLmJpbmQoaW1nKSA6IG51bGxcbiAgaW1nLm9uZXJyb3IgPSBlcnJvckNhbGxiYWNrID8gZXJyb3JDYWxsYmFjay5iaW5kKGltZykgOiBudWxsXG4gIGltZy5zcmMgPSBzcmNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3JjIChpdGVtOiBhbnksIHNyYzogP3N0cmluZywgcGxhY2Vob2xkZXJTcmM6ID9zdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFzcmMpIHsgcmV0dXJuIH1cbiAgZnVuY3Rpb24gZmluYWxsQ2IgKCkge1xuICAgIGRlbGV0ZSBpdGVtLl9zcmNfbG9hZGluZ1xuICB9XG4gIGlmIChpdGVtLl9zcmNfbG9hZGluZykge1xuICAgIHJldHVyblxuICB9XG4gIC8qKlxuICAgKiAxLiBhcHBseSBzcmMgaW1tZWRpYXRlbHkgaW4gY2FzZSBqYXZzY3JpcHQgYmxvY2tzIHRoZSBpbWFnZSBsb2FkaW5nXG4gICAqICBiZWZvcmUgbmV4dCB0aWNrLlxuICAgKi9cbiAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c3JjIHx8ICcnfSlgXG4gIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdpbWctc3JjJylcbiAgLyoqXG4gICAqIDIuIHRoZW4gbG9hZCB0aGUgaW1nIHNyYyB3aXRoIEltYWdlIGNvbnN0cnVjdG9yIChidXQgd291bGQgbm90IHBvc3RcbiAgICogIGEgcmVxdWVzdCBhZ2FpbiksIGp1c3QgdG8gdHJpZ2dlciB0aGUgbG9hZCBldmVudC5cbiAgICovXG4gIGl0ZW0uX3NyY19sb2FkaW5nID0gdHJ1ZVxuICBwcmVMb2FkSW1nKHNyYywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NyYyB8fCAnJ30pYFxuICAgIGNvbnN0IHsgd2lkdGg6IG5hdHVyYWxXaWR0aCwgaGVpZ2h0OiBuYXR1cmFsSGVpZ2h0IH0gPSB0aGlzXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHNpemU6IHsgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0IH1cbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChpdGVtLCBjcmVhdGVFdmVudChpdGVtLCAnbG9hZCcsIHBhcmFtcykpXG4gICAgZmluYWxsQ2IoKVxuICB9LCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBzaXplOiB7IG5hdHVyYWxXaWR0aDogMCwgbmF0dXJhbEhlaWdodDogMCB9XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQoaXRlbSwgY3JlYXRlRXZlbnQoaXRlbSwgJ2xvYWQnLCBwYXJhbXMpKVxuICAgIGlmIChwbGFjZWhvbGRlclNyYykge1xuICAgICAgcHJlTG9hZEltZyhwbGFjZWhvbGRlclNyYywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtwbGFjZWhvbGRlclNyYyB8fCAnJ30pYFxuICAgICAgfSlcbiAgICB9XG4gICAgZmluYWxsQ2IoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyZUxhenlsb2FkIChlbDogQXJyYXk8YW55PiB8IGFueSB8IG51bGwsIGlnbm9yZVZpc2liaWxpdHk6ID9ib29sZWFuKTogdm9pZCB7XG4gIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xuICAgIHJldHVybiBlbC5mb3JFYWNoKGN0ID0+IGZpcmVMYXp5bG9hZChjdCkpXG4gIH1cbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5ib2R5XG4gIGlmICghZWwpIHsgcmV0dXJuIH1cbiAgbGV0IGltZ3M6IE5vZGVMaXN0IHwgQXJyYXk8YW55PiA9IChlbCB8fCBkb2N1bWVudC5ib2R5KS5xdWVyeVNlbGVjdG9yQWxsKCdbaW1nLXNyY10nKVxuICBpZiAoZWwuZ2V0QXR0cmlidXRlKCdpbWctc3JjJykpIHsgaW1ncyA9IFtlbF0gfVxuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGltZyA9IGltZ3NbaV1cbiAgICBpZiAodHlwZW9mIGlnbm9yZVZpc2liaWxpdHkgPT09ICdib29sZWFuJyAmJiBpZ25vcmVWaXNpYmlsaXR5KSB7XG4gICAgICBhcHBseVNyYyhpbWcsIGltZy5nZXRBdHRyaWJ1dGUoJ2ltZy1zcmMnKSwgaW1nLmdldEF0dHJpYnV0ZSgnaW1nLXBsYWNlaG9sZGVyJykpXG4gICAgfVxuICAgIGVsc2UgaWYgKGlzRWxlbWVudFZpc2libGUoaW1nLCBlbCkpIHtcbiAgICAgIGFwcGx5U3JjKGltZywgaW1nLmdldEF0dHJpYnV0ZSgnaW1nLXNyYycpLCBpbWcuZ2V0QXR0cmlidXRlKCdpbWctcGxhY2Vob2xkZXInKSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBjYWNoZSBhIHRocm90dGxlIGxhenlsb2FkIGZ1bmN0aW9uIGZvciBldmVyeSBjb250YWluZXIgZWxlbWVudFxuICogb25jZSBmb3IgZGlmZmVyZW50IHdhaXQgdGltZXMgc2VwYXJhdGUuXG4gKiAgIHRoZSBhcmNoaXRlY3R1cmUgb2YgdGhpcyBjYWNoZTpcbiAqICAgICAgY2FjaGU6IHtcbiAqICAgICAgICBlbC5pZDoge1xuICogICAgICAgICAgd2FpdDogdGhyb3R0bGVkRnVuY3Rpb24gKCkgeyAuLi4gfVxuICogICAgICAgIH1cbiAqICAgICAgfVxuICovXG5jb25zdCBjYWNoZSA9IHt9XG5sZXQgX3VpZDogbnVtYmVyID0gMVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRocm90dGxlTGF6eWxvYWQgKHdhaXQ6IG51bWJlciA9IDE2LCBlbDogYW55IHwgbnVsbCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgbGV0IGlkOiBudW1iZXIgPSArKGVsICYmIGVsLmRhdGFzZXQudGhyb3R0bGVJZClcbiAgaWYgKGlzTmFOKGlkKSB8fCBpZCA8PSAwKSB7XG4gICAgaWQgPSBfdWlkKytcbiAgICBlbCAmJiBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhyb3R0bGUtaWQnLCBpZCArICcnKVxuICB9XG5cbiAgIWNhY2hlW2lkXSAmJiAoY2FjaGVbaWRdID0ge30pXG4gIGNvbnN0IHRocm90dGxlZCA9IGNhY2hlW2lkXVt3YWl0XSB8fFxuICAgIChjYWNoZVtpZF1bd2FpdF0gPSB0aHJvdHRsZShcbiAgICAgIGZpcmVMYXp5bG9hZC5iaW5kKHRoaXMsIGVsKSxcbiAgICAgIHBhcnNlRmxvYXQod2FpdCksXG4gICAgICAvLyB0cnVlIGZvciBjYWxsTGFzdFRpbWUuXG4gICAgICAvLyB0byB0cmlnZ2VyIG9uY2UgbW9yZSB0aW1lIGFmdGVyIHRoZSBsYXN0IHRocm90dGxlZCBmdW5jdGlvbiBjYWxsZWQgd2l0aCBhIGxpdHRsZSBtb3JlIGRlbGF5LlxuICAgICAgdHJ1ZSlcbiAgICApXG4gIHJldHVybiB0aHJvdHRsZWRcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FwaXRhbGl6ZVN0cmluZztcbmZ1bmN0aW9uIGNhcGl0YWxpemVTdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZWZpeFByb3BlcnR5O1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwcmVmaXhQcm9wZXJ0eShwcmVmaXhQcm9wZXJ0aWVzLCBwcm9wZXJ0eSwgc3R5bGUpIHtcbiAgaWYgKHByZWZpeFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgdmFyIHJlcXVpcmVkUHJlZml4ZXMgPSBwcmVmaXhQcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcmVxdWlyZWRQcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgc3R5bGVbcmVxdWlyZWRQcmVmaXhlc1tpXSArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpXSA9IHN0eWxlW3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJlZml4VmFsdWU7XG5mdW5jdGlvbiBwcmVmaXhWYWx1ZShwbHVnaW5zLCBwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBtZXRhRGF0YSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGx1Z2lucy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9IHBsdWdpbnNbaV0ocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgbWV0YURhdGFcblxuICAgIC8vIHdlIGNhbiBzdG9wIHByb2Nlc3NpbmcgaWYgYSB2YWx1ZSBpcyByZXR1cm5lZFxuICAgIC8vIGFzIGFsbCBwbHVnaW4gY3JpdGVyaWEgYXJlIHVuaXF1ZVxuICAgICk7aWYgKHByb2Nlc3NlZFZhbHVlKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc2VkVmFsdWU7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkTmV3VmFsdWVzT25seTtcbmZ1bmN0aW9uIGFkZElmTmV3KGxpc3QsIHZhbHVlKSB7XG4gIGlmIChsaXN0LmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGxpc3QucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTmV3VmFsdWVzT25seShsaXN0LCB2YWx1ZXMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGFkZElmTmV3KGxpc3QsIHZhbHVlc1tpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFkZElmTmV3KGxpc3QsIHZhbHVlcyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc09iamVjdDtcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVByZWZpeGVyO1xuXG52YXIgX3ByZWZpeFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJlZml4UHJvcGVydHknKTtcblxudmFyIF9wcmVmaXhQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhQcm9wZXJ0eSk7XG5cbnZhciBfcHJlZml4VmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9wcmVmaXhWYWx1ZScpO1xuXG52YXIgX3ByZWZpeFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeFZhbHVlKTtcblxudmFyIF9hZGROZXdWYWx1ZXNPbmx5ID0gcmVxdWlyZSgnLi4vdXRpbHMvYWRkTmV3VmFsdWVzT25seScpO1xuXG52YXIgX2FkZE5ld1ZhbHVlc09ubHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkTmV3VmFsdWVzT25seSk7XG5cbnZhciBfaXNPYmplY3QgPSByZXF1aXJlKCcuLi91dGlscy9pc09iamVjdCcpO1xuXG52YXIgX2lzT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzT2JqZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3JlYXRlUHJlZml4ZXIoX3JlZikge1xuICB2YXIgcHJlZml4TWFwID0gX3JlZi5wcmVmaXhNYXAsXG4gICAgICBwbHVnaW5zID0gX3JlZi5wbHVnaW5zO1xuXG4gIGZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZSkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHN0eWxlKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wZXJ0eV07XG5cbiAgICAgIC8vIGhhbmRsZSBuZXN0ZWQgb2JqZWN0c1xuICAgICAgaWYgKCgwLCBfaXNPYmplY3QyLmRlZmF1bHQpKHZhbHVlKSkge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSBwcmVmaXhBbGwodmFsdWVcbiAgICAgICAgLy8gaGFuZGxlIGFycmF5IHZhbHVlc1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YXIgY29tYmluZWRWYWx1ZSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9ICgwLCBfcHJlZml4VmFsdWUyLmRlZmF1bHQpKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZVtpXSwgc3R5bGUsIHByZWZpeE1hcCk7XG4gICAgICAgICAgKDAsIF9hZGROZXdWYWx1ZXNPbmx5Mi5kZWZhdWx0KShjb21iaW5lZFZhbHVlLCBwcm9jZXNzZWRWYWx1ZSB8fCB2YWx1ZVtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgd2FzIHRvdWNoZWRcbiAgICAgICAgLy8gYnkgYW55IHBsdWdpbiB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uc1xuICAgICAgICBpZiAoY29tYmluZWRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3R5bGVbcHJvcGVydHldID0gY29tYmluZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9wcm9jZXNzZWRWYWx1ZSA9ICgwLCBfcHJlZml4VmFsdWUyLmRlZmF1bHQpKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIHByZWZpeE1hcFxuXG4gICAgICAgIC8vIG9ubHkgbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCB3YXMgdG91Y2hlZFxuICAgICAgICAvLyBieSBhbnkgcGx1Z2luIHRvIHByZXZlbnQgdW5uZWNlc3NhcnkgbXV0YXRpb25zXG4gICAgICAgICk7aWYgKF9wcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IF9wcm9jZXNzZWRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICgwLCBfcHJlZml4UHJvcGVydHkyLmRlZmF1bHQpKHByZWZpeE1hcCwgcHJvcGVydHksIHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICByZXR1cm4gcHJlZml4QWxsO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciB3ID0gW1wiV2Via2l0XCJdO1xudmFyIG0gPSBbXCJNb3pcIl07XG52YXIgbXMgPSBbXCJtc1wiXTtcbnZhciB3bSA9IFtcIldlYmtpdFwiLCBcIk1velwiXTtcbnZhciB3bXMgPSBbXCJXZWJraXRcIiwgXCJtc1wiXTtcbnZhciB3bW1zID0gW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcGx1Z2luczogW10sXG4gIHByZWZpeE1hcDogeyBcImFwcGVhcmFuY2VcIjogd20sIFwidXNlclNlbGVjdFwiOiB3bW1zLCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IHcsIFwidGV4dEVtcGhhc2lzXCI6IHcsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogdywgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiB3LCBcImJveERlY29yYXRpb25CcmVha1wiOiB3LCBcImNsaXBQYXRoXCI6IHcsIFwibWFza0ltYWdlXCI6IHcsIFwibWFza01vZGVcIjogdywgXCJtYXNrUmVwZWF0XCI6IHcsIFwibWFza1Bvc2l0aW9uXCI6IHcsIFwibWFza0NsaXBcIjogdywgXCJtYXNrT3JpZ2luXCI6IHcsIFwibWFza1NpemVcIjogdywgXCJtYXNrQ29tcG9zaXRlXCI6IHcsIFwibWFza1wiOiB3LCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogdywgXCJtYXNrQm9yZGVyTW9kZVwiOiB3LCBcIm1hc2tCb3JkZXJTbGljZVwiOiB3LCBcIm1hc2tCb3JkZXJXaWR0aFwiOiB3LCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogdywgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IHcsIFwibWFza0JvcmRlclwiOiB3LCBcIm1hc2tUeXBlXCI6IHcsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiB3LCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiB3LCBcInRleHREZWNvcmF0aW9uTGluZVwiOiB3LCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogdywgXCJmaWx0ZXJcIjogdywgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IHcsIFwiYnJlYWtBZnRlclwiOiB3bW1zLCBcImJyZWFrQmVmb3JlXCI6IHdtbXMsIFwiYnJlYWtJbnNpZGVcIjogd21tcywgXCJjb2x1bW5Db3VudFwiOiB3bSwgXCJjb2x1bW5GaWxsXCI6IHdtLCBcImNvbHVtbkdhcFwiOiB3bSwgXCJjb2x1bW5SdWxlXCI6IHdtLCBcImNvbHVtblJ1bGVDb2xvclwiOiB3bSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogd20sIFwiY29sdW1uUnVsZVdpZHRoXCI6IHdtLCBcImNvbHVtbnNcIjogd20sIFwiY29sdW1uU3BhblwiOiB3bSwgXCJjb2x1bW5XaWR0aFwiOiB3bSwgXCJmbGV4XCI6IHcsIFwiZmxleEJhc2lzXCI6IHcsIFwiZmxleERpcmVjdGlvblwiOiB3LCBcImZsZXhHcm93XCI6IHcsIFwiZmxleEZsb3dcIjogdywgXCJmbGV4U2hyaW5rXCI6IHcsIFwiZmxleFdyYXBcIjogdywgXCJhbGlnbkNvbnRlbnRcIjogdywgXCJhbGlnbkl0ZW1zXCI6IHcsIFwiYWxpZ25TZWxmXCI6IHcsIFwianVzdGlmeUNvbnRlbnRcIjogdywgXCJvcmRlclwiOiB3LCBcInRyYW5zZm9ybVwiOiB3LCBcInRyYW5zZm9ybU9yaWdpblwiOiB3LCBcInRyYW5zZm9ybU9yaWdpblhcIjogdywgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IHcsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IHcsIFwicGVyc3BlY3RpdmVcIjogdywgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiB3LCBcInRyYW5zZm9ybVN0eWxlXCI6IHcsIFwidHJhbnNmb3JtT3JpZ2luWlwiOiB3LCBcImFuaW1hdGlvblwiOiB3LCBcImFuaW1hdGlvbkRlbGF5XCI6IHcsIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IHcsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogdywgXCJhbmltYXRpb25EdXJhdGlvblwiOiB3LCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHcsIFwiYW5pbWF0aW9uTmFtZVwiOiB3LCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiB3LCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IHcsIFwiYmFja2Ryb3BGaWx0ZXJcIjogdywgXCJmb250S2VybmluZ1wiOiB3LCBcInNjcm9sbFNuYXBUeXBlXCI6IHdtcywgXCJzY3JvbGxTbmFwUG9pbnRzWFwiOiB3bXMsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogd21zLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiB3bXMsIFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjogd21zLCBcInNoYXBlSW1hZ2VUaHJlc2hvbGRcIjogdywgXCJzaGFwZUltYWdlTWFyZ2luXCI6IHcsIFwic2hhcGVJbWFnZU91dHNpZGVcIjogdywgXCJoeXBoZW5zXCI6IHdtbXMsIFwiZmxvd0ludG9cIjogd21zLCBcImZsb3dGcm9tXCI6IHdtcywgXCJyZWdpb25GcmFnbWVudFwiOiB3bXMsIFwidGV4dEFsaWduTGFzdFwiOiBtLCBcInRhYlNpemVcIjogbSwgXCJ3cmFwRmxvd1wiOiBtcywgXCJ3cmFwVGhyb3VnaFwiOiBtcywgXCJ3cmFwTWFyZ2luXCI6IG1zLCBcImdyaWRUZW1wbGF0ZUNvbHVtbnNcIjogbXMsIFwiZ3JpZFRlbXBsYXRlUm93c1wiOiBtcywgXCJncmlkVGVtcGxhdGVBcmVhc1wiOiBtcywgXCJncmlkVGVtcGxhdGVcIjogbXMsIFwiZ3JpZEF1dG9Db2x1bW5zXCI6IG1zLCBcImdyaWRBdXRvUm93c1wiOiBtcywgXCJncmlkQXV0b0Zsb3dcIjogbXMsIFwiZ3JpZFwiOiBtcywgXCJncmlkUm93U3RhcnRcIjogbXMsIFwiZ3JpZENvbHVtblN0YXJ0XCI6IG1zLCBcImdyaWRSb3dFbmRcIjogbXMsIFwiZ3JpZFJvd1wiOiBtcywgXCJncmlkQ29sdW1uXCI6IG1zLCBcImdyaWRDb2x1bW5FbmRcIjogbXMsIFwiZ3JpZENvbHVtbkdhcFwiOiBtcywgXCJncmlkUm93R2FwXCI6IG1zLCBcImdyaWRBcmVhXCI6IG1zLCBcImdyaWRHYXBcIjogbXMsIFwidGV4dFNpemVBZGp1c3RcIjogd21zLCBcImJvcmRlckltYWdlXCI6IHcsIFwiYm9yZGVySW1hZ2VPdXRzZXRcIjogdywgXCJib3JkZXJJbWFnZVJlcGVhdFwiOiB3LCBcImJvcmRlckltYWdlU2xpY2VcIjogdywgXCJib3JkZXJJbWFnZVNvdXJjZVwiOiB3LCBcImJvcmRlckltYWdlV2lkdGhcIjogdywgXCJ0cmFuc2l0aW9uRGVsYXlcIjogdywgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogdywgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogdywgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogdyB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjdXJzb3I7XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJyddO1xuXG52YXIgdmFsdWVzID0ge1xuICAnem9vbS1pbic6IHRydWUsXG4gICd6b29tLW91dCc6IHRydWUsXG4gIGdyYWI6IHRydWUsXG4gIGdyYWJiaW5nOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2N1cnNvcicgJiYgdmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1ByZWZpeGVkVmFsdWU7XG5cbnZhciByZWdleCA9IC8td2Via2l0LXwtbW96LXwtbXMtLztcblxuZnVuY3Rpb24gaXNQcmVmaXhlZFZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHJlZ2V4LnRlc3QodmFsdWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3Jvc3NGYWRlO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWNyb3NzLWZhZGVcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnJ107XG5mdW5jdGlvbiBjcm9zc0ZhZGUocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YoJ2Nyb3NzLWZhZGUoJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2Nyb3NzLWZhZGVcXCgvZywgcHJlZml4ICsgJ2Nyb3NzLWZhZGUoJyk7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZpbHRlcjtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBodHRwOi8vY2FuaXVzZS5jb20vI2ZlYXQ9Y3NzLWZpbHRlci1mdW5jdGlvblxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICcnXTtcbmZ1bmN0aW9uIGZpbHRlcihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZignZmlsdGVyKCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9maWx0ZXJcXCgvZywgcHJlZml4ICsgJ2ZpbHRlcignKTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleDtcbnZhciB2YWx1ZXMgPSB7XG4gIGZsZXg6IFsnLXdlYmtpdC1ib3gnLCAnLW1vei1ib3gnLCAnLW1zLWZsZXhib3gnLCAnLXdlYmtpdC1mbGV4JywgJ2ZsZXgnXSxcbiAgJ2lubGluZS1mbGV4JzogWyctd2Via2l0LWlubGluZS1ib3gnLCAnLW1vei1pbmxpbmUtYm94JywgJy1tcy1pbmxpbmUtZmxleGJveCcsICctd2Via2l0LWlubGluZS1mbGV4JywgJ2lubGluZS1mbGV4J11cbn07XG5cbmZ1bmN0aW9uIGZsZXgocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWVzW3ZhbHVlXTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleGJveE9sZDtcbnZhciBhbHRlcm5hdGl2ZVZhbHVlcyA9IHtcbiAgJ3NwYWNlLWFyb3VuZCc6ICdqdXN0aWZ5JyxcbiAgJ3NwYWNlLWJldHdlZW4nOiAnanVzdGlmeScsXG4gICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgJ2ZsZXgtZW5kJzogJ2VuZCcsXG4gICd3cmFwLXJldmVyc2UnOiAnbXVsdGlwbGUnLFxuICB3cmFwOiAnbXVsdGlwbGUnXG59O1xuXG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25JdGVtczogJ1dlYmtpdEJveEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdXZWJraXRCb3hQYWNrJyxcbiAgZmxleFdyYXA6ICdXZWJraXRCb3hMaW5lcydcbn07XG5cbmZ1bmN0aW9uIGZsZXhib3hPbGQocHJvcGVydHksIHZhbHVlLCBzdHlsZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEpIHtcbiAgICAgIHN0eWxlLldlYmtpdEJveE9yaWVudCA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLldlYmtpdEJveE9yaWVudCA9ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xKSB7XG4gICAgICBzdHlsZS5XZWJraXRCb3hEaXJlY3Rpb24gPSAncmV2ZXJzZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLldlYmtpdEJveERpcmVjdGlvbiA9ICdub3JtYWwnO1xuICAgIH1cbiAgfVxuICBpZiAoYWx0ZXJuYXRpdmVQcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICBzdHlsZVthbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XV0gPSBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWU7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIEBmbG93ICovXG5pbXBvcnQgaXNQcmVmaXhlZFZhbHVlIGZyb20gJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJ1xuXG5jb25zdCBpc0RpcmVjdGlvbiA9IC90b3B8bGVmdHxyaWdodHxib3R0b20vZ2lcblxuY29uc3QgbmFtZXMgPSBbXG4gICdsaW5lYXItZ3JhZGllbnQnLFxuICAncmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCcsXG4gICdyYWRpYWwtZ3JhZGllbnQnLFxuICAncmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCdcbl1cblxuLy8gZGlyZWN0aW9uIHRvIHJlcGxhY2VcbmNvbnN0IGRpcmVjdGlvbnMgPSB7XG4gIHRvcDogJ2JvdHRvbScsXG4gIGxlZnQ6ICdyaWdodCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHJpZ2h0OiAnbGVmdCdcbn1cblxuY29uc3QgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJ11cbmNvbnN0IHZhbHVlcyA9IC9saW5lYXItZ3JhZGllbnR8cmFkaWFsLWdyYWRpZW50fHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnR8cmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudC9cblxuLyoqXG4gKiBjb3ZlcnQgdmFsU3RyIGludG8gZGVnIHRocm91Z2ggZnVsbCBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplQW5nbGVVbml0KHZhbFN0cjogc3RyaW5nLCBmdWxsOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCB2YWwgPSBwYXJzZUZsb2F0KHZhbFN0cilcbiAgcmV0dXJuIHZhbCAvIGZ1bGwgKiAzNjBcbn1cblxuZnVuY3Rpb24gd3JhcFJhbmdlKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuICB2YXIgbWF4TGVzc01pbiA9IG1heCAtIG1pbjtcbiAgcmV0dXJuICgodmFsdWUgLSBtaW4pICUgbWF4TGVzc01pbiArIG1heExlc3NNaW4pICUgbWF4TGVzc01pbiArIG1pbjtcbn1cblxuLyoqXG4gKiBub3JtYWxpemUgYW5nbGUgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICByZXR1cm4gdmFsdWVcbiAgICAudHJpbSgpXG4gICAgLnJlcGxhY2UoL14oWystXT9cXGQrKD86LlxcZCspPylncmFkLywgZnVuY3Rpb24gKCQwLCAkMSkge1xuICAgICAgcmV0dXJuIGAke25vcm1hbGl6ZUFuZ2xlVW5pdCgkMSwgNDAwKX1kZWdgXG4gICAgfSlcbiAgICAucmVwbGFjZSgvXihbKy1dP1xcZCsoPzouXFxkKyk/KXJhZC8sIGZ1bmN0aW9uICgkMCwgJDEpIHtcbiAgICAgIHJldHVybiBgJHtub3JtYWxpemVBbmdsZVVuaXQoJDEsIDIgKiBNYXRoLlBJKX1kZWdgXG4gICAgfSlcbiAgICAucmVwbGFjZSgvXihbKy1dP1xcZCsoPzouXFxkKyk/KXR1cm4vLCBmdW5jdGlvbiAoJDAsICQxKSB7XG4gICAgICByZXR1cm4gYCR7bm9ybWFsaXplQW5nbGVVbml0KCQxLCAxKX1kZWdgXG4gICAgfSlcbiAgICAucmVwbGFjZSgvXihbKy1dP1xcZCsoPzouXFxkKyk/KWRlZy8sIGZ1bmN0aW9uICgkMCwgJDEpIHtcbiAgICAgIGxldCB2YWwgPSBgJHt3cmFwUmFuZ2UoMCwgMzYwLCBwYXJzZUZsb2F0KCQxKSl9ZGVnYFxuICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgY2FzZSAnMGRlZyc6XG4gICAgICAgICAgdmFsID0gJ3RvIHRvcCdcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICc5MGRlZyc6XG4gICAgICAgICAgdmFsID0gJ3RvIHJpZ2h0J1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJzE4MGRlZyc6XG4gICAgICAgICAgdmFsID0gJ3RvIGJvdHRvbSdcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICcyNzBkZWcnOlxuICAgICAgICAgIHZhbCA9ICd0byBsZWZ0J1xuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSlcbn1cblxuLyoqXG4gKiBjb252ZXJ0IGRpcmVjdGlvbnMgdG8gb2xkIHZlcnNpb24uXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnREaXJlY3Rpb24gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVcbiAgICAucmVwbGFjZSgvXnRvXFxzKHRvcHxsZWZ0fGJvdHRvbXxyaWdodCkoPzpcXHMrKHRvcHxsZWZ0fGJvdHRvbXxyaWdodCkpPy8sIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XG4gICAgICBjb25zdCBkaXIyID0gJDIgJiYgYCAke2RpcmVjdGlvbnNbJDJdfWAgfHwgJydcbiAgICAgIHJldHVybiBgJHtkaXJlY3Rpb25zWyQxXX0ke2RpcjJ9YFxuICAgIH0pXG4gICAgLnJlcGxhY2UoL14oWystXT9cXGQrKD86LlxcZCspPylkZWcvLCBmdW5jdGlvbiAoJDAsICQxKSB7XG4gICAgICBsZXQgdmFsID0gTWF0aC5hYnMoNDUwIC0gcGFyc2VGbG9hdCgkMSkpICUgMzYwXG4gICAgICB2YWwgPSBwYXJzZUZsb2F0KHZhbC50b0ZpeGVkKDMpKVxuICAgICAgcmV0dXJuIGAke3ZhbH1kZWdgXG4gICAgfSlcbn1cblxuLyoqXG4gKiBmaXggcmFkaWFsIGRpcmVjdGlvbiBzeW50YXguXG4gKiBlLmcuXG4gKiAgZmFydGhlc3Qtc2lkZSBhdCAwIDUwJSwgd2hpdGUsIGJsYWNrXG4gKiAgIC0+IDAgNTAlLCBmYXJ0aGVzdC1zaWRlLCB3aGl0ZSwgYmxhY2tcbiAqL1xuZnVuY3Rpb24gZml4UmFkaWFsICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL14oXFxTKylcXHNhdFxccyhbXixdKykvLCBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuICAgIHJldHVybiBgJHskMn0sICR7JDF9YFxuICB9KVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1WYWx1ZSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHZhbHVlID0gbm9ybWFsaXplKHZhbHVlKVxuICB2YWx1ZSA9IGNvbnZlcnREaXJlY3Rpb24odmFsdWUpXG4gIHZhbHVlID0gZml4UmFkaWFsKHZhbHVlKVxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3JhZGllbnQocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSk6ID9BcnJheTxzdHJpbmc+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzUHJlZml4ZWRWYWx1ZSh2YWx1ZSkgJiYgdmFsdWVzLnRlc3QodmFsdWUpKSB7XG4gICAgY29uc3QgaW5zZXJ0UHJlZml4RmxhZyA9ICdAQEAnXG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChcbiAgICAgIGAoJHt2YWx1ZXMudG9TdHJpbmcoKS5zdWJzdHIoMSkucmVwbGFjZSgvXFwvJC8sICcnKX0pXFxcXFxcKChbXildKylcXFxcXFwpYCxcbiAgICAgICdnJ1xuICAgIClcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoXG4gICAgICByZWcsXG4gICAgICBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuICAgICAgICByZXR1cm4gYCR7aW5zZXJ0UHJlZml4RmxhZ30keyQxfSgke3RyYW5zZm9ybVZhbHVlKCQyKX0pYFxuICAgICAgfSlcbiAgICBjb25zdCByZXN1bHRzID0gcHJlZml4ZXMubWFwKHByZWZpeCA9PiBuZXdWYWx1ZS5yZXBsYWNlKFxuICAgICAgICBuZXcgUmVnRXhwKGluc2VydFByZWZpeEZsYWcsICdnJyksXG4gICAgICAgIHByZWZpeFxuICAgICAgKSlcbiAgICByZXN1bHRzLnB1c2godmFsdWUpXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaW1hZ2VTZXQ7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gaHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PWNzcy1pbWFnZS1zZXRcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnJ107XG5mdW5jdGlvbiBpbWFnZVNldChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZignaW1hZ2Utc2V0KCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9pbWFnZS1zZXRcXCgvZywgcHJlZml4ICsgJ2ltYWdlLXNldCgnKTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcG9zaXRpb247XG5mdW5jdGlvbiBwb3NpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAncG9zaXRpb24nICYmIHZhbHVlID09PSAnc3RpY2t5Jykge1xuICAgIHJldHVybiBbJy13ZWJraXQtc3RpY2t5JywgJ3N0aWNreSddO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzaXppbmc7XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJyddO1xuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgbWF4SGVpZ2h0OiB0cnVlLFxuICBtYXhXaWR0aDogdHJ1ZSxcbiAgd2lkdGg6IHRydWUsXG4gIGhlaWdodDogdHJ1ZSxcbiAgY29sdW1uV2lkdGg6IHRydWUsXG4gIG1pbldpZHRoOiB0cnVlLFxuICBtaW5IZWlnaHQ6IHRydWVcbn07XG52YXIgdmFsdWVzID0ge1xuICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAnbWF4LWNvbnRlbnQnOiB0cnVlLFxuICAnZmlsbC1hdmFpbGFibGUnOiB0cnVlLFxuICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAnY29udGFpbi1mbG9hdHMnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBzaXppbmcocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiB2YWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG52YXIgY2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcgaW4gY2FjaGVcbiAgICA/IGNhY2hlW3N0cmluZ11cbiAgICA6IGNhY2hlW3N0cmluZ10gPSBzdHJpbmdcbiAgICAgIC5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJCYnKVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGVTdHlsZU5hbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoeXBoZW5hdGVQcm9wZXJ0eTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUgPSByZXF1aXJlKCdoeXBoZW5hdGUtc3R5bGUtbmFtZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZU5hbWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBoeXBoZW5hdGVQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICByZXR1cm4gKDAsIF9oeXBoZW5hdGVTdHlsZU5hbWUyLmRlZmF1bHQpKHByb3BlcnR5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zaXRpb247XG5cbnZhciBfaHlwaGVuYXRlUHJvcGVydHkgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2h5cGhlbmF0ZVByb3BlcnR5Jyk7XG5cbnZhciBfaHlwaGVuYXRlUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlUHJvcGVydHkpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgdHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICBXZWJraXRUcmFuc2l0aW9uOiB0cnVlLFxuICBXZWJraXRUcmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gIE1velRyYW5zaXRpb246IHRydWUsXG4gIE1velRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZVxufTtcblxuXG52YXIgcHJlZml4TWFwcGluZyA9IHtcbiAgV2Via2l0OiAnLXdlYmtpdC0nLFxuICBNb3o6ICctbW96LScsXG4gIG1zOiAnLW1zLSdcbn07XG5cbmZ1bmN0aW9uIHByZWZpeFZhbHVlKHZhbHVlLCBwcm9wZXJ0eVByZWZpeE1hcCkge1xuICBpZiAoKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8vIG9ubHkgc3BsaXQgbXVsdGkgdmFsdWVzLCBub3QgY3ViaWMgYmV6aWVyc1xuICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSB2YWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbXVsdGlwbGVWYWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgc2luZ2xlVmFsdWUgPSBtdWx0aXBsZVZhbHVlc1tpXTtcbiAgICB2YXIgdmFsdWVzID0gW3NpbmdsZVZhbHVlXTtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0eVByZWZpeE1hcCkge1xuICAgICAgdmFyIGRhc2hDYXNlUHJvcGVydHkgPSAoMCwgX2h5cGhlbmF0ZVByb3BlcnR5Mi5kZWZhdWx0KShwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChzaW5nbGVWYWx1ZS5pbmRleE9mKGRhc2hDYXNlUHJvcGVydHkpID4gLTEgJiYgZGFzaENhc2VQcm9wZXJ0eSAhPT0gJ29yZGVyJykge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSBwcm9wZXJ0eVByZWZpeE1hcFtwcm9wZXJ0eV07XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBwTGVuID0gcHJlZml4ZXMubGVuZ3RoOyBqIDwgcExlbjsgKytqKSB7XG4gICAgICAgICAgLy8gam9pbiBhbGwgcHJlZml4ZXMgYW5kIGNyZWF0ZSBhIG5ldyB2YWx1ZVxuICAgICAgICAgIHZhbHVlcy51bnNoaWZ0KHNpbmdsZVZhbHVlLnJlcGxhY2UoZGFzaENhc2VQcm9wZXJ0eSwgcHJlZml4TWFwcGluZ1twcmVmaXhlc1tqXV0gKyBkYXNoQ2FzZVByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtdWx0aXBsZVZhbHVlc1tpXSA9IHZhbHVlcy5qb2luKCcsJyk7XG4gIH1cblxuICByZXR1cm4gbXVsdGlwbGVWYWx1ZXMuam9pbignLCcpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIHByb3BlcnR5UHJlZml4TWFwKSB7XG4gIC8vIGFsc28gY2hlY2sgZm9yIGFscmVhZHkgcHJlZml4ZWQgdHJhbnNpdGlvbnNcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICB2YXIgb3V0cHV0VmFsdWUgPSBwcmVmaXhWYWx1ZSh2YWx1ZSwgcHJvcGVydHlQcmVmaXhNYXBcbiAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYWxyZWFkeSBwcmVmaXhlZFxuICAgICk7dmFyIHdlYmtpdE91dHB1dCA9IG91dHB1dFZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gIS8tbW96LXwtbXMtLy50ZXN0KHZhbCk7XG4gICAgfSkuam9pbignLCcpO1xuXG4gICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ1dlYmtpdCcpID4gLTEpIHtcbiAgICAgIHJldHVybiB3ZWJraXRPdXRwdXQ7XG4gICAgfVxuXG4gICAgdmFyIG1vek91dHB1dCA9IG91dHB1dFZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gIS8td2Via2l0LXwtbXMtLy50ZXN0KHZhbCk7XG4gICAgfSkuam9pbignLCcpO1xuXG4gICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ01veicpID4gLTEpIHtcbiAgICAgIHJldHVybiBtb3pPdXRwdXQ7XG4gICAgfVxuXG4gICAgc3R5bGVbJ1dlYmtpdCcgKyAoMCwgX2NhcGl0YWxpemVTdHJpbmcyLmRlZmF1bHQpKHByb3BlcnR5KV0gPSB3ZWJraXRPdXRwdXQ7XG4gICAgc3R5bGVbJ01veicgKyAoMCwgX2NhcGl0YWxpemVTdHJpbmcyLmRlZmF1bHQpKHByb3BlcnR5KV0gPSBtb3pPdXRwdXQ7XG4gICAgcmV0dXJuIG91dHB1dFZhbHVlO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlUHJlZml4ZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVByZWZpeGVyJyk7XG5cbnZhciBfY3JlYXRlUHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUHJlZml4ZXIpO1xuXG52YXIgX3N0YXRpY0RhdGEgPSByZXF1aXJlKCcuL3N0YXRpY0RhdGEnKTtcblxudmFyIF9zdGF0aWNEYXRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRpY0RhdGEpO1xuXG52YXIgX2N1cnNvciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jdXJzb3InKTtcblxudmFyIF9jdXJzb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Vyc29yKTtcblxudmFyIF9jcm9zc0ZhZGUgPSByZXF1aXJlKCcuL3BsdWdpbnMvY3Jvc3NGYWRlJyk7XG5cbnZhciBfY3Jvc3NGYWRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nyb3NzRmFkZSk7XG5cbnZhciBfZmlsdGVyID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZpbHRlcicpO1xuXG52YXIgX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9maWx0ZXIpO1xuXG52YXIgX2ZsZXggPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleCcpO1xuXG52YXIgX2ZsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleCk7XG5cbnZhciBfZmxleGJveE9sZCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94T2xkJyk7XG5cbnZhciBfZmxleGJveE9sZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGV4Ym94T2xkKTtcblxudmFyIF9ncmFkaWVudCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFkaWVudCcpO1xuXG52YXIgX2dyYWRpZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyYWRpZW50KTtcblxudmFyIF9pbWFnZVNldCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9pbWFnZVNldCcpO1xuXG52YXIgX2ltYWdlU2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltYWdlU2V0KTtcblxudmFyIF9wb3NpdGlvbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy9wb3NpdGlvbicpO1xuXG52YXIgX3Bvc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9uKTtcblxudmFyIF9zaXppbmcgPSByZXF1aXJlKCcuL3BsdWdpbnMvc2l6aW5nJyk7XG5cbnZhciBfc2l6aW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpemluZyk7XG5cbnZhciBfdHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy90cmFuc2l0aW9uJyk7XG5cbnZhciBfdHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHBsdWdpbnMgPSBbX2Nyb3NzRmFkZTIuZGVmYXVsdCwgX2N1cnNvcjIuZGVmYXVsdCwgX2ZpbHRlcjIuZGVmYXVsdCwgX2ZsZXhib3hPbGQyLmRlZmF1bHQsIF9ncmFkaWVudDIuZGVmYXVsdCwgX2ltYWdlU2V0Mi5kZWZhdWx0LCBfcG9zaXRpb24yLmRlZmF1bHQsIF9zaXppbmcyLmRlZmF1bHQsIF90cmFuc2l0aW9uMi5kZWZhdWx0LCBfZmxleDIuZGVmYXVsdF07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlUHJlZml4ZXIyLmRlZmF1bHQpKHtcbiAgcHJlZml4TWFwOiBfc3RhdGljRGF0YTIuZGVmYXVsdC5wcmVmaXhNYXAsXG4gIHBsdWdpbnM6IHBsdWdpbnNcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCB7IGdldFZpZXdwb3J0SW5mbyB9IGZyb20gJy4uL2Vudi92aWV3cG9ydCdcbmltcG9ydCBhZGRQcmVmaXggZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9pbmRleCdcblxuY29uc3Qgbm9Vbml0c051bWJlcktleXMgPSBbXG4gICdmbGV4JyxcbiAgJ29wYWNpdHknLFxuICAnekluZGV4JyxcbiAgJ2ZvbnRXZWlnaHQnLFxuICAnbGluZXMnXG5dXG5cbi8vIHdoZXRoZXIgdG8gc3VwcG9ydCB1c2luZyAwLjVweCB0byBwYWludCAxcHggd2lkdGggYm9yZGVyLlxubGV0IF9zdXBwb3J0SGFpcmxpbmVzOiA/Ym9vbGVhblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRIYWlybGluZXMgKCkge1xuICBpZiAodHlwZW9mIF9zdXBwb3J0SGFpcmxpbmVzID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG4gICAgaWYgKGRwciAmJiBkcHIgPj0gMiAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvY0VsbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgICAgY29uc3QgdGVzdEVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCBmYWtlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvZHknKVxuICAgICAgY29uc3QgYmVmb3JlTm9kZSA9IGRvY0VsbS5maXJzdEVsZW1lbnRDaGlsZCB8fCBkb2NFbG0uZmlyc3RDaGlsZFxuICAgICAgdGVzdEVsbS5zdHlsZS5ib3JkZXIgPSAnMC41cHggc29saWQgdHJhbnNwYXJlbnQnXG4gICAgICBmYWtlQm9keS5hcHBlbmRDaGlsZCh0ZXN0RWxtKVxuICAgICAgZG9jRWxtLmluc2VydEJlZm9yZShmYWtlQm9keSwgYmVmb3JlTm9kZSlcbiAgICAgIF9zdXBwb3J0SGFpcmxpbmVzID0gdGVzdEVsbS5vZmZzZXRIZWlnaHQgPT09IDFcbiAgICAgIGRvY0VsbS5yZW1vdmVDaGlsZChmYWtlQm9keSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBfc3VwcG9ydEhhaXJsaW5lcyA9IGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiBfc3VwcG9ydEhhaXJsaW5lc1xufVxuXG4vKipcbiAqIHJlbW92ZSBjb21tZW50cyBmcm9tIGEgY3NzVGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW1Db21tZW50IChjc3NUZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKC8oPzpcXC9cXCopW1xcc1xcU10qP1xcKlxcLy9nLCAnJylcbn1cblxubGV0IHN1cHBvcnQ6IGJvb2xlYW4gfCBudWxsID0gbnVsbFxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydFN0aWNreSAoKTogYm9vbGVhbiB7XG4gIGlmIChzdXBwb3J0ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRcbiAgfVxuICBjb25zdCBlbGVtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGVsZW1lbnRTdHlsZSA9IGVsZW1lbnQuc3R5bGVcbiAgZWxlbWVudFN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246LXdlYmtpdC1zdGlja3k7cG9zaXRpb246c3RpY2t5OydcbiAgc3VwcG9ydCA9IGVsZW1lbnRTdHlsZS5wb3NpdGlvbi5pbmRleE9mKCdzdGlja3knKSAhPT0gLTFcbiAgcmV0dXJuIHN1cHBvcnRcbn1cblxuY29uc3QgcmVnUGVyY2VudGFnZSA9IC9eWystXT9cXGQrKFxcLlxcZCspPyUkL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGVyY2VudGFnZSAodmFsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHJlZ1BlcmNlbnRhZ2UudGVzdCh2YWwpXG59XG5cbmNvbnN0IHJlZ1VuaXRzTnVtID0gL14oWystXT9cXGQrKD86XFwuXFxkKyk/KShbcCx3XXgpPyQvIC8vIHN1cHBvcnQgdW5pdHM6IHB4LCB3eC5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVVbml0c051bSAodmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBtYXRjaCA9IHZhbC5tYXRjaChyZWdVbml0c051bSlcbiAgaWYgKCFtYXRjaCkgeyByZXR1cm4gJycgfVxuICBsZXQgdW5pdCA9ICdweCcgLy8gcHggYnkgZGVmYXVsdC5cbiAgaWYgKG1hdGNoWzJdKSB7XG4gICAgdW5pdCA9IG1hdGNoWzJdXG4gIH1cbiAgcmV0dXJuIHBhcnNlU2NhbGUocGFyc2VGbG9hdChtYXRjaFsxXSksIHVuaXQpXG59XG5cbmZ1bmN0aW9uIGdldFVuaXRTY2FsZU1hcCAoKSB7XG4gIGNvbnN0IHsgc2NhbGUsIGRwciB9ID0gZ2V0Vmlld3BvcnRJbmZvKClcbiAgcmV0dXJuIHtcbiAgICBweDogc2NhbGUsXG4gICAgd3g6IHNjYWxlICogZHByXG4gIH1cbn1cblxuZnVuY3Rpb24gbGltaXRTY2FsZSAodmFsLCBsaW1pdCkge1xuICBsaW1pdCA9IGxpbWl0IHx8IDFcbiAgY29uc3Qgc2lnbiA9IHZhbCA9PT0gMCA/IDAgOiB2YWwgPiAwID8gMSA6IC0xXG4gIGxldCBuZXdWYWwgPSBNYXRoLmFicyh2YWwpID4gbGltaXQgPyB2YWwgOiBzaWduICogbGltaXRcbiAgLy8gc3VwcG9ydCAxcHggZGV2aWNlIHdpZHRoLlxuICBpZiAobmV3VmFsID09PSAxICYmIHZhbCA8IDEgJiYgc3VwcG9ydEhhaXJsaW5lcygpKSB7XG4gICAgbmV3VmFsID0gMC41XG4gIH1cbiAgcmV0dXJuIG5ld1ZhbFxufVxuXG5mdW5jdGlvbiBwYXJzZVNjYWxlICh2YWw6IG51bWJlciwgdW5pdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdW5pdFNjYWxlTWFwID0gZ2V0VW5pdFNjYWxlTWFwKClcbiAgcmV0dXJuIGxpbWl0U2NhbGUodmFsICogdW5pdFNjYWxlTWFwW3VuaXRdKSArICdweCdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZyAoc3R5bGVLZXk6IHN0cmluZywgc3R5bGVWYWw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChpc1BlcmNlbnRhZ2Uoc3R5bGVWYWwpKSB7XG4gICAgcmV0dXJuIHN0eWxlVmFsXG4gIH1cblxuICAvKipcbiAgICogMS4gdGVzdCBpZiBpcyBhIHJlZ3VsYXIgc2NhbGUgY3NzLiBlLmcuIGB3aWR0aDogMTAwcHg7YFxuICAgKiAgdGhpcyBzaG91bGQgYmUgYSBzdGFuZGFsb25lIG51bWJlciB2YWx1ZSB3aXRoIG9yIHdpdGhvdXQgdW5pdCwgb3RoZXJ3aXNlXG4gICAqICBpdCBzaG91bGRuJ3QgYmUgY2hhbmdlZC5cbiAgICovXG4gIGNvbnN0IHVuaXRzTnVtID0gbm9ybWFsaXplVW5pdHNOdW0oc3R5bGVWYWwpXG4gIGlmICh1bml0c051bSkgeyByZXR1cm4gdW5pdHNOdW0gfVxuXG4gIC8qKlxuICAgKiAyLiBpZiBhIHN0cmluZyBjb250YWlucyBtdWx0aXBsZSBweCB2YWx1ZXMsIHRoYW4gdGhleSBzaG91bGQgYmUgYWxsIG5vcm1hbGl6ZWQuXG4gICAqICB2YWx1ZXMgc2hvdWxkIGhhdmUgd3ggb3IgcHggdW5pdHMsIG90aGVyd2lzZSB0aGV5IHNob3VsZCBiZSBsZWZ0IHVuY2hhbmdlZC5cbiAgICogIGUuZy5cbiAgICogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgNnB4LCAwKVxuICAgKiAgICBib3JkZXI6IDJweCBzb2xpZCByZWRcbiAgICovXG4gIGNvbnN0IG51bVJlZyA9IC8oWystXT9bXFxkLl0rKShbcCx3XXgpL2lnXG4gIGlmIChudW1SZWcudGVzdChzdHlsZVZhbCkpIHtcbiAgICBjb25zdCB1bml0U2NhbGVNYXAgPSBnZXRVbml0U2NhbGVNYXAoKVxuICAgIGNvbnN0IHZhbCA9IHN0eWxlVmFsLnJlcGxhY2UobnVtUmVnLCBmdW5jdGlvbiAobSwgJDAsICQxKSB7XG4gICAgICBjb25zdCByZXMgPSBwYXJzZUZsb2F0KCQwKSAqIHVuaXRTY2FsZU1hcFskMV1cbiAgICAgIHJldHVybiBsaW1pdFNjYWxlKHJlcykgKyAncHgnXG4gICAgfSlcbiAgICByZXR1cm4gdmFsXG4gIH1cblxuICAvLyBvdGhlcndpc2VcbiAgcmV0dXJuIHN0eWxlVmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvUHJlZml4IChzdHlsZToge30pOiB7fSB7XG4gIGNvbnN0IHByZWZpeGVkID0gYWRkUHJlZml4KHN0eWxlKVxuICAvLyBmbGV4IG9ubHkgYWRkZWQgV2Via2l0RmxleC4gU2hvdWxkIGFkZCBXZWJraXRCb3hGbGV4IGFsc28uXG4gIGNvbnN0IGZsZXggPSBwcmVmaXhlZC5mbGV4XG4gIGlmIChmbGV4KSB7XG4gICAgcHJlZml4ZWQuV2Via2l0Qm94RmxleCA9IGZsZXhcbiAgfVxuICByZXR1cm4gcHJlZml4ZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZU51bWJlciAoc3R5bGVLZXk6IHN0cmluZywgc3R5bGVWYWw6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHsgc2NhbGUgfSA9IGdldFZpZXdwb3J0SW5mbygpXG4gIHJldHVybiBzdHlsZVZhbCAqIHNjYWxlICsgJ3B4J1xufVxuXG4vKipcbiAqIG5vcm1hbGl6ZSBzdHlsZSB0byBhZGFwdGUgdG8gY3VycmVudCB2aWV3cG9ydCBieSBtdWx0aXBseSBjdXJyZW50IHNjYWxlLlxuICogQHBhcmFtICB7b2JqZWN0fSBzdHlsZTogc2hvdWxkIGJlIGNhbWVsQ2FzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlIChzdHlsZToge30pIHtcbiAgY29uc3QgcmVzID0ge31cbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBjb25zdCB2YWwgPSBzdHlsZVtrZXldXG4gICAgaWYgKG5vVW5pdHNOdW1iZXJLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXNba2V5XSA9IHZhbFxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICByZXNba2V5XSA9IG5vcm1hbGl6ZVN0cmluZyhrZXksIHZhbClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJlc1trZXldID0gbm9ybWFsaXplTnVtYmVyKGtleSwgdmFsKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzW2tleV0gPSB2YWxcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKipcbiAqIGdldCB0cmFuc2Zvcm1PYmpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zZm9ybU9iaiAoZWxtOiBIVE1MRWxlbWVudCk6IGFueSB7XG4gIGxldCBzdHlsZU9iaiA9IHt9XG4gIGlmICghZWxtKSB7IHJldHVybiBzdHlsZU9iaiB9XG4gIGNvbnN0IHRyYW5zZm9ybVN0ciA9IGVsbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gfHwgZWxtLnN0eWxlLnRyYW5zZm9ybVxuICBpZiAodHJhbnNmb3JtU3RyICYmIHRyYW5zZm9ybVN0ci5tYXRjaCgvKD86ICooPzp0cmFuc2xhdGV8cm90YXRlfHNjYWxlKVteKF0qXFwoW14oXStcXCkpKy9pKSkge1xuICAgIHN0eWxlT2JqID0gdHJhbnNmb3JtU3RyLnRyaW0oKS5yZXBsYWNlKC8sICsvZywgJywnKS5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAocHJlLCBzdHIpIHtcbiAgICAgIFsndHJhbnNsYXRlJywgJ3NjYWxlJywgJ3JvdGF0ZSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKG5ldyBSZWdFeHAobmFtZSwgJ2knKS50ZXN0KHN0cikpIHtcbiAgICAgICAgICBwcmVbbmFtZV0gPSBzdHJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBwcmVcbiAgICB9LCB7fSlcbiAgfVxuICByZXR1cm4gc3R5bGVPYmpcbn1cblxuLyoqXG4gKiB0cmFuc2xhdGUgYSB0cmFuc2Zvcm0gc3RyaW5nIGZyb20gYSB0cmFuc2Zvcm1PYmouXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1TdHIgKG9iajoge30pOiBzdHJpbmcge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKHByZSwga2V5KSB7XG4gICAgcmV0dXJuIHByZSArIG9ialtrZXldICsgJyAnXG4gIH0sICcnKVxufVxuXG4vKipcbiAqIGFkZCB0cmFuc2Zvcm0gc3R5bGUgdG8gZWxlbWVudC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsbVxuICogQHBhcmFtIHtvYmplY3R9IHN0eWxlOiB0cmFuc2Zvcm0gb2JqZWN0LCBmb3JtYXQgaXMgbGlrZSB0aGlzOlxuICogICB7XG4gKiAgICAgdHJhbnNsYXRlOiAndHJhbnNsYXRlM2QoMnB4LCAycHgsIDJweCknLFxuICogICAgIHNjYWxlOiAnc2NhbGUoMC4yKScsXG4gKiAgICAgcm90YXRlOiAncm90YXRlKDMwZGVnKSdcbiAqICAgfVxuICogQHBhcmFtIHtib29sZWFufSByZXBsYWNlOiB3aGV0aGVyIHRvIHJlcGxhY2UgYWxsIHRyYW5zZm9ybSBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVHJhbnNmb3JtIChlbG06IEhUTUxFbGVtZW50LCBzdHlsZToge30sIHJlcGxhY2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgaWYgKCFzdHlsZSkgeyByZXR1cm4gfVxuICBsZXQgc3R5bGVPYmogPSB7fVxuICBpZiAoIXJlcGxhY2UpIHtcbiAgICBzdHlsZU9iaiA9IGdldFRyYW5zZm9ybU9iaihlbG0pXG4gIH1cbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBjb25zdCB2YWwgPSBzdHlsZVtrZXldXG4gICAgaWYgKHZhbCkge1xuICAgICAgc3R5bGVPYmpba2V5XSA9IHZhbFxuICAgIH1cbiAgfVxuICBjb25zdCByZXNTdHIgPSBnZXRUcmFuc2Zvcm1TdHIoc3R5bGVPYmopXG4gIGVsbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSByZXNTdHJcbiAgZWxtLnN0eWxlLnRyYW5zZm9ybSA9IHJlc1N0clxufVxuXG4vKipcbiAqIGFkZCB0cmFuc2xhdGUgWCB0byB0aGUgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRyYW5zbGF0ZVggKGVsbTogSFRNTEVsZW1lbnQsIHRvQWRkOiBudW1iZXIpOiB2b2lkIHtcbiAgaWYgKCF0b0FkZCkgeyByZXR1cm4gfVxuICBjb25zdCBzdHlsZU9iaiA9IGdldFRyYW5zZm9ybU9iaihlbG0pXG4gIGlmICghc3R5bGVPYmoudHJhbnNsYXRlKSB7XG4gICAgc3R5bGVPYmoudHJhbnNsYXRlID0gJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpJ1xuICB9XG4gIHN0eWxlT2JqLnRyYW5zbGF0ZSA9IHN0eWxlT2JqLnRyYW5zbGF0ZS5yZXBsYWNlKC9bKy1cXGQuXStbcHddeC8sIGZ1bmN0aW9uICgkMCkge1xuICAgIHJldHVybiAocGFyc2VGbG9hdCgkMCkgKyB0b0FkZCkgKyAncHgnXG4gIH0pXG4gIGNvbnN0IHJlc1N0ciA9IGdldFRyYW5zZm9ybVN0cihzdHlsZU9iailcbiAgZWxtLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHJlc1N0clxuICBlbG0uc3R5bGUudHJhbnNmb3JtID0gcmVzU3RyXG59XG5cbi8qKlxuICogY29weSBhIHRyYW5zZm9ybSBiZWhhdmlvdXIgZnJvbSBvbmUgZWxlbWVudCB0byBhbm90aGVyLlxuICoga2V5IGNvdWxkIGJlOiAndHJhbnNsYXRlJyB8ICdzY2FsZScgfCAncm90YXRlJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29weVRyYW5zZm9ybSAoZnJvbTogSFRNTEVsZW1lbnQsIHRvOiBIVE1MRWxlbWVudCwga2V5OiBzdHJpbmcgfCB2b2lkKTogdm9pZCB7XG4gIGxldCBzdHJcbiAgaWYgKCFrZXkpIHtcbiAgICBzdHIgPSBmcm9tLnN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBmcm9tLnN0eWxlLnRyYW5zZm9ybVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZyb21PYmogPSBnZXRUcmFuc2Zvcm1PYmooZnJvbSlcbiAgICBpZiAoIWZyb21PYmpba2V5XSkgeyByZXR1cm4gfVxuICAgIGNvbnN0IHRvT2JqID0gZ2V0VHJhbnNmb3JtT2JqKHRvKVxuICAgIHRvT2JqW2tleV0gPSBmcm9tT2JqW2tleV1cbiAgICBzdHIgPSBnZXRUcmFuc2Zvcm1TdHIodG9PYmopXG4gIH1cbiAgdG8uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gc3RyXG4gIHRvLnN0eWxlLnRyYW5zZm9ybSA9IHN0clxufVxuXG4vKipcbiAqIGdldCBjb2xvcidzIHIsIGcsIGIgdmFsdWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3Igc3VwcG9ydCBhbGwga2luZHMgb2YgdmFsdWUgb2YgY29sb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZ2IgKGNvbG9yOiBzdHJpbmcpIHtcbiAgY29uc3QgaGF4UmVnID0gLyMoW1xcZGEtZkEtRl17Mn0pKFtcXGRhLWZBLUZdezJ9KShbXFxkYS1mQS1GXXsyfSkvXG4gIGNvbnN0IHJnYlJlZyA9IC9yZ2JcXCgoXFxkKyksXFxzKihcXGQrKSxcXHMqKFxcZCspXFwpL1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG4gIHNwYW4uc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjogJHtjb2xvcn07IHdpZHRoOiAwcHg7IGhlaWdodDogMHB4O2BcbiAgYm9keSAmJiBib2R5LmFwcGVuZENoaWxkKHNwYW4pXG4gIGNvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3BhbikuY29sb3IgKyAnJ1xuICBib2R5ICYmIGJvZHkucmVtb3ZlQ2hpbGQoc3BhbilcblxuICBsZXQgbWF0Y2hcbiAgbWF0Y2ggPSBjb2xvci5tYXRjaChoYXhSZWcpXG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICByOiBwYXJzZUludChtYXRjaFsxXSwgMTYpLFxuICAgICAgZzogcGFyc2VJbnQobWF0Y2hbMl0sIDE2KSxcbiAgICAgIGI6IHBhcnNlSW50KG1hdGNoWzNdLCAxNilcbiAgICB9XG4gIH1cbiAgbWF0Y2ggPSBjb2xvci5tYXRjaChyZ2JSZWcpXG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICByOiBwYXJzZUludChtYXRjaFsxXSksXG4gICAgICBnOiBwYXJzZUludChtYXRjaFsyXSksXG4gICAgICBiOiBwYXJzZUludChtYXRjaFszXSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBnZXQgc3R5bGUgc2hlZXQgd2l0aCBvd25lciBub2RlJ3MgaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBvd25lciBub2RlIGlkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVTaGVldEJ5SWQgKGlkPzogc3RyaW5nKSB7XG4gIGlmICghaWQpIHsgcmV0dXJuIH1cbiAgY29uc3Qgc3R5bGVTaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1xuICBjb25zdCBsZW4gPSBzdHlsZVNoZWV0cy5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHN0eWxlU2hlZXQgPSBzdHlsZVNoZWV0c1tpXVxuICAgIGlmIChzdHlsZVNoZWV0Lm93bmVyTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiBzdHlsZVNoZWV0XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldENoaWxkcmVuVG90YWxXaWR0aCAoY2hpbGRyZW4pIHtcbiAgY29uc3QgbGVuID0gY2hpbGRyZW4ubGVuZ3RoXG4gIGxldCB0b3RhbCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHRvdGFsICs9IGNoaWxkcmVuW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gIH1cbiAgcmV0dXJuIHRvdGFsXG59XG4vKipcbiAqIGdldCB0b3RhbCBjb250ZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZVdpZHRoIChlbG06IEhUTUxFbGVtZW50KSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gZWxtLmNoaWxkcmVuXG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gIH1cbiAgaWYgKCFSYW5nZSkge1xuICAgIHJldHVybiBnZXRDaGlsZHJlblRvdGFsV2lkdGgoY2hpbGRyZW4pXG4gIH1cbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gIGlmICghcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKSB7XG4gICAgcmV0dXJuIGdldENoaWxkcmVuVG90YWxXaWR0aChjaGlsZHJlbilcbiAgfVxuICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxtKVxuICByZXR1cm4gcmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9mdW5jJ1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudCdcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50J1xuZXhwb3J0ICogZnJvbSAnLi9sYXp5bG9hZCdcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnXG5leHBvcnQgKiBmcm9tICcuL3R5cGUnXG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCAnLi4vbGliL2VudmQnXG5cbmltcG9ydCB7IGluaXQgYXMgaW5pdFZpZXdwb3J0IH0gZnJvbSAnLi92aWV3cG9ydCdcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIGdldCBXWEVudmlyb25tZW50IGluZm8uXG4gKiBAcGFyYW0gIHtvYmplY3R9IHZpZXdwb3J0SW5mbzogaW5mbyBhYm91dCB2aWV3cG9ydC5cbiAqIEBwYXJhbSAge29iamVjdH0gZW52SW5mbzogaW5mbyBwYXJzZWQgZnJvbSBsaWIuZW52LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdEVudiAodmlld3BvcnRJbmZvLCBlbnZJbmZvKSB7XG4gIGNvbnN0IGJyb3dzZXJOYW1lID0gZW52SW5mby5icm93c2VyID8gZW52SW5mby5icm93c2VyLm5hbWUgOiBuYXZpZ2F0b3IuYXBwTmFtZVxuICBjb25zdCBicm93c2VyVmVyc2lvbiA9IGVudkluZm8uYnJvd3NlciA/IGVudkluZm8uYnJvd3Nlci52ZXJzaW9uLnZhbCA6IG51bGxcbiAgbGV0IG9zTmFtZSA9IGVudkluZm8ub3MubmFtZVxuICBpZiAob3NOYW1lLm1hdGNoKC8oaVBob25lfGlQYWR8aVBvZCkvaSkpIHtcbiAgICBvc05hbWUgPSAnaU9TJ1xuICB9XG4gIGVsc2UgaWYgKG9zTmFtZS5tYXRjaCgvQW5kcm9pZC9pKSkge1xuICAgIG9zTmFtZSA9ICdhbmRyb2lkJ1xuICB9XG4gIGNvbnN0IG9zVmVyc2lvbiA9IGVudkluZm8ub3MudmVyc2lvbi52YWxcbiAgY29uc3QgZW52ID0ge1xuICAgIHBsYXRmb3JtOiAnV2ViJyxcbiAgICB3ZWV4VmVyc2lvbjogJ3Byb2Nlc3MuZW52LldFRVhfVkVSU0lPTicsXG4gICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgIGFwcE5hbWU6IGJyb3dzZXJOYW1lLFxuICAgIGFwcFZlcnNpb246IGJyb3dzZXJWZXJzaW9uLFxuICAgIG9zTmFtZSxcbiAgICBvc1ZlcnNpb24sXG4gICAgZGV2aWNlTW9kZWw6IGVudkluZm8ub3MubmFtZSB8fCBudWxsXG4gIH1cbiAgLyoqXG4gICAqIHZpZXdwb3J0SW5mbzogc2NhbGUsIGRldmljZVdpZHRoLCBkZXZpY2VIZWlnaHQuIGRwclxuICAgKi9cbiAgcmV0dXJuIGV4dGVuZChlbnYsIHZpZXdwb3J0SW5mbylcbn1cblxuLy8gY29uc3Qgdmlld3BvcnRJbmZvID0gaW5pdFZpZXdwb3J0KClcblxuLy8gNzUwIGJ5IGRlZmF1bHQgY3VycmVudGx5XG4vLyBjb25zdCBzY2FsZSA9IHZpZXdwb3J0SW5mby5zY2FsZVxuXG4vLyBjb25zdCB1bml0cyA9IHtcbi8vICAgUkVNOiAxMiAqIHNjYWxlLFxuLy8gICBWVzogdmlld3BvcnRJbmZvLmRldmljZVdpZHRoIC8gMTAwLFxuLy8gICBWSDogdmlld3BvcnRJbmZvLmRldmljZUhlaWdodCAvIDEwMCxcbi8vICAgVk1JTjogTWF0aC5taW4odmlld3BvcnRJbmZvLmRldmljZVdpZHRoLCB2aWV3cG9ydEluZm8uZGV2aWNlSGVpZ2h0KSAvIDEwMCxcbi8vICAgVk1BWDogTWF0aC5tYXgodmlld3BvcnRJbmZvLmRldmljZVdpZHRoLCB2aWV3cG9ydEluZm8uZGV2aWNlSGVpZ2h0KSAvIDEwMCxcbi8vICAgQ006IDk2IC8gMi41NCAqIHNjYWxlLFxuLy8gICBNTTogOTYgLyAyNS40ICogc2NhbGUsXG4vLyAgIFE6IDk2IC8gMjUuNCAvIDQgKiBzY2FsZSxcbi8vICAgSU46IDk2ICogc2NhbGUsXG4vLyAgIFBUOiA5NiAvIDcyICogc2NhbGUsXG4vLyAgIFBDOiA5NiAvIDYgKiBzY2FsZSxcbi8vICAgUFg6IHNjYWxlXG4vLyB9XG5cbi8vIE9iamVjdC5mcmVlemUodW5pdHMpXG4vLyBPYmplY3QuZnJlZXplKGVudilcblxuLy8gd2luZG93LkNTU19VTklUID0gdW5pdHNcbndpbmRvdy5XWEVudmlyb25tZW50ID0gaW5pdEVudihpbml0Vmlld3BvcnQoKSwgd2luZG93LmxpYi5lbnYpXG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qIGdsb2JhbCBWdWUgKi9cblxuaW1wb3J0ICcuL3d4LWVudidcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCB3ZWV4TW9kdWxlcyA9IHt9XG5jb25zdCBfcm9vdHMgPSBbXVxuXG5jb25zdCB3ZWV4ID0ge1xuICBfX3Z1ZV9fOiBudWxsLFxuICB1dGlscyxcbiAgLy8gdW5pdHM6IHdpbmRvdy5DU1NfVU5JVCxcbiAgY29uZmlnOiB7XG4gICAgZW52OiB3aW5kb3cuV1hFbnZpcm9ubWVudCxcbiAgICBidW5kbGVVcmw6IGxvY2F0aW9uLmhyZWZcbiAgfSxcblxuICBfY29tcG9uZW50czoge30sXG5cbiAgZG9jdW1lbnQ6IHtcbiAgICBib2R5OiB7fVxuICB9LFxuXG4gIHJlcXVpcmVNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgICByZXR1cm4gd2VleE1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgfSxcblxuICByZWdpc3Rlck1vZHVsZSAoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyQXBpTW9kdWxlKC4uLmFyZ3MpXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbmV3IHZ1ZSBpbnN0YW5jZSBpbiB0aGlzIHdlZXggaW5zdGFuY2UuIFB1dCBpdHMgcm9vdCBlbGVtZW50IGludG8gd2VleC5kb2N1bWVudC5ib2R5LmNoaWxkcmVuLCBzb1xuICAgKiB0aGF0IHVzZXIgY2FuIHVzZSB3ZWV4LmRvY3VtZW50LmJvZHkgdG8gd2FsayB0aHJvdWdoIGFsbCBkb20gc3RydWN0dXJlcyBpbiBhbGwgdnVlIGluc3RhbmNlcyBpbiB0aGUgcGFnZS5cbiAgICovXG4gIHJlZ2lzdGVyVnVlSW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCFpbnN0YW5jZSBpbnN0YW5jZW9mIFZ1ZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFt2dWUtcmVuZGVyXSByZWdpc3RlclZ1ZUluc3RhbmNlOiBpbnZhbGlkIGluc3RhbmNlLCBub3QgYSB2dWUgaW5zdGFuY2UuYClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCByb290ID0gaW5zdGFuY2UuJHJvb3RcbiAgICBpZiAoIXJvb3QgfHwgIXJvb3QuJGVsKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgW3Z1ZS1yZW5kZXJdIHJlZ2lzdGVyVnVlSW5zdGFuY2U6IGluc3RhbmNlIGhhcyBubyByb290LmApXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5kb2N1bWVudC5ib2R5LmNoaWxkcmVuLnB1c2gocm9vdC4kZWwpXG4gIH0sXG5cbiAgLy8gQGRlcHJlY2F0ZWRcbiAgcmVxdWlyZSAoLi4uYXJncykge1xuICAgIGNvbnNvbGUubG9nKGBbVnVlIFJlbmRlcl0gXCJ3ZWV4LnJlcXVpcmVcIiBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFwid2VleC5yZXF1aXJlTW9kdWxlXCIgaW5zdGVhZC5gKVxuICAgIHJldHVybiB0aGlzLnJlcXVpcmVNb2R1bGUoLi4uYXJncylcbiAgfSxcblxuICAvLyBAZGVwcmVjYXRlZFxuICAvLyBUT0RPOiByZW5hbWUgdG8gcmVnaXN0ZXJNb2R1bGVcbiAgcmVnaXN0ZXJBcGlNb2R1bGUgKG5hbWUsIG1vZHVsZSwgbWV0YSkge1xuICAgIGlmICghd2VleE1vZHVsZXNbbmFtZV0pIHtcbiAgICAgIHdlZXhNb2R1bGVzW25hbWVdID0ge31cbiAgICB9XG4gICAgaWYgKCEhbWV0YSAmJiBtZXRhLm1vdW50VHlwZSA9PT0gJ2Z1bGwnKSB7XG4gICAgICB3ZWV4TW9kdWxlc1tuYW1lXSA9IG1vZHVsZVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtb2R1bGUpIHtcbiAgICAgIGlmIChtb2R1bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB3ZWV4TW9kdWxlc1tuYW1lXVtrZXldID0gdXRpbHMuYmluZChtb2R1bGVba2V5XSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVnaXN0ZXJDb21wb25lbnQgKG5hbWUsIGNvbXBvbmVudCkge1xuICAgIGlmICghdGhpcy5fX3Z1ZV9fKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ1tWdWUgUmVuZGVyXSBWdWUgaXMgbm90IGZvdW5kLiBQbGVhc2UgaW1wb3J0IFZ1ZS5qcyBiZWZvcmUgcmVnaXN0ZXIgYSBjb21wb25lbnQuJylcbiAgICB9XG4gICAgdGhpcy5fY29tcG9uZW50c1tuYW1lXSA9IDFcbiAgICBpZiAoY29tcG9uZW50Ll9jc3MpIHtcbiAgICAgIGNvbnN0IGNzcyA9IGNvbXBvbmVudC5fY3NzLnJlcGxhY2UoL1xcYlsrLV0/W1xcZC5dK3JlbTs/XFxiL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG0pICogNzUgKiB3ZWV4LmNvbmZpZy5lbnYuc2NhbGUgKyAncHgnXG4gICAgICB9KVxuICAgICAgdXRpbHMuYXBwZW5kQ3NzKGNzcywgYHdlZXgtY21wLSR7bmFtZX1gKVxuICAgICAgZGVsZXRlIGNvbXBvbmVudC5fY3NzXG4gICAgfVxuICAgIHRoaXMuX192dWVfXy5jb21wb25lbnQobmFtZSwgY29tcG9uZW50KVxuICB9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIGdldFJvb3QgKCkge30sXG5cbiAgLy8gQGRlcHJlY2F0ZWRcbiAgc2VuZGVyOiB7XG4gICAgcGVyZm9ybUNhbGxiYWNrIChjYWxsYmFjaywgZGF0YSwga2VlcEFsaXZlKSB7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG5cbiAgLy8gQGRlcHJlY2F0ZWRcbiAgaW5zdGFsbCAobW9kdWxlKSB7XG4gICAgbW9kdWxlLmluaXQodGhpcylcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2VleC5kb2N1bWVudC5ib2R5LCAnY2hpbGRyZW4nLCB7XG4gIGdldCAoKSB7IHJldHVybiBfcm9vdHMgfVxufSlcblxuOyBbJ29uJywgJ29uY2UnLCAnb2ZmJywgJ2VtaXQnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgd2VleFttZXRob2RdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuX3Z1ZSkge1xuICAgICAgdGhpcy5fdnVlID0gbmV3IHRoaXMuX192dWVfXygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl92dWVbYCQke21ldGhvZH1gXSguLi5hcmdzKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCB3ZWV4XG4iLCIgLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG4vKipcbiAqIEBmaWxlT3ZlcnZpZXc6IHBlcmYgZGF0YSByZWNvcmRlci5cbiAqL1xuXG5leHBvcnQgY29uc3QgcGVyZjoge1xuICB0aW1lOiB7fVxufSA9IHdpbmRvdy5fd2VleF9wZXJmID0ge1xuICB0aW1lOiB7fVxufVxuXG5jb25zdCB0bXAgPSB7fVxuXG5mdW5jdGlvbiBnZXROb3cgKCk6IG51bWJlciB7XG4gIGNvbnN0IHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlXG4gIHJldHVybiBwZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdCZWdpbiAobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIHRtcFtuYW1lXSA9IGdldE5vdygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdFbmQgKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICBsZXQgcHJlID0gcGVyZi50aW1lW25hbWVdXG4gIGlmICghcHJlKSB7XG4gICAgcHJlID0gMFxuICB9XG4gIHBlcmYudGltZVtuYW1lXSA9IHByZSArIGdldE5vdygpIC0gdG1wW25hbWVdXG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7XG4gIGNhbWVsaXplS2V5cyxcbiAgLy8gaHlwaGVuYXRlS2V5cyxcbiAgZXh0ZW5kLFxuICBleHRlbmRUcnV0aHksXG4gIHRyaW1Db21tZW50LFxuICBub3JtYWxpemVTdHlsZSxcbiAgYXV0b1ByZWZpeCxcbiAgaXNBcnJheSxcbiAgZ2V0UGFyZW50U2Nyb2xsZXIsXG4gIHN1cHBvcnRTdGlja3ksXG4gIGFwcGVuZENzc1xufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IHRhZ0JlZ2luLCB0YWdFbmQgfSBmcm9tICcuLi91dGlscy9wZXJmJ1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxubGV0IHBzZXVkb0lkID0gMFxuLyoqXG4gKiBnZXQgc2NvcGVkIGNsYXNzIHN0eWxlIG1hcCBmcm9tIHN0eWxlc2hlZXRzIGluIDxoZWFkPi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEhlYWRTdHlsZU1hcCAoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHRhZ0JlZ2luKCdnZXRIZWFkU3R5bGVNYXAnKVxuICB9XG4gIGNvbnN0IG5lZWRUb1JlbW92ZVN0eWxlU2hlZXROb2RlcyA9IFtdXG4gIGNvbnN0IHN0eWxlU2hlZXRzQXJyID0gQXJyYXkuZnJvbShkb2N1bWVudC5zdHlsZVNoZWV0cyB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uIChzdHlsZVNoZWV0KSB7XG4gICAgcmV0dXJuIHN0eWxlU2hlZXQub3duZXJOb2RlLmdldEF0dHJpYnV0ZSgnd2VleC1zY2FubmVkJykgIT09ICcxJ1xuICB9KVxuXG4gIGNvbnN0IHJlcyA9IEFycmF5LmZyb20oc3R5bGVTaGVldHNBcnIpXG4gICAgLnJlZHVjZSgocHJlLCBzdHlsZVNoZWV0KSA9PiB7XG4gICAgICBzdHlsZVNoZWV0Lm93bmVyTm9kZS5zZXRBdHRyaWJ1dGUoJ3dlZXgtc2Nhbm5lZCcsIDEpXG4gICAgICAvKipcbiAgICAgICAqIHdoeSBub3QgdXNpbmcgc3R5bGVTaGVldC5ydWxlcyB8fCBzdHlsZVNoZWV0LmNzc1J1bGVzIHRvIGdldCBjc3MgcnVsZXMgP1xuICAgICAgICogYmVjYXVzZSB3ZWV4J3MgY29tcG9uZW50cyBkZWZpbmVkIG5vbi1zdGFuZGFyZCBzdHlsZSBhdHRyaWJ1dGVzLCB3aGljaCBpc1xuICAgICAgICogYXV0byBpZ25vcmVkIHdoZW4gYWNjZXNzIHJ1bGUuY3NzVGV4dC5cbiAgICAgICAqIGFub3RoZXIgcmVhc29uIG5vdCB0byB1c2UgY3NzUnVsZXMgZGlyZWN0eTpcbiAgICAgICAqIEBpc3N1ZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjE2NDIyNzcvc2VjdXJpdHktZXJyb3ItdGhlLW9wZXJhdGlvbi1pcy1pbnNlY3VyZS1pbi1maXJlZm94LWRvY3VtZW50LXN0eWxlc2hlZXRzXG4gICAgICAgKi9cbiAgICAgIGlmIChcbiAgICAgICAgLy8gY3NzIGluIGEgbGluay4ganVzdCBpZ25vcmUgdGhpcy4gcHJvYmFibHkgYSBsaW5rIHN0eWxlc2hlZXQuXG4gICAgICAgIChzdHlsZVNoZWV0Lm93bmVyTm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsaW5rJylcbiAgICAgICAgfHwgIXN0eWxlU2hlZXQub3duZXJOb2RlLnRleHRDb250ZW50XG4gICAgICAgIC8vIHBzZXVkbyBjbGFzcyBzdHlsZVNoZWV0IG5vZGUgaXMgZ2VuZXJhdGVkIGJ5IHdlZXguIGp1c3QgaWdub3JlIGl0LlxuICAgICAgICB8fCBzdHlsZVNoZWV0Lm93bmVyTm9kZS5pZC5tYXRjaCgvd2VleC1wc2V1ZG8tXFxkKy8pKSB7XG4gICAgICAgIHJldHVybiBwcmVcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogc3RhcnQgdG8gYW5hbHl6ZSBpdCdzIGNvbnRlbnQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHN0ckFyciA9IHRyaW1Db21tZW50KHN0eWxlU2hlZXQub3duZXJOb2RlLnRleHRDb250ZW50LnRyaW0oKSkuc3BsaXQoL30vKVxuICAgICAgY29uc3QgbGVuID0gc3RyQXJyLmxlbmd0aFxuICAgICAgY29uc3QgcnVsZXMgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBzdHIgPSBzdHJBcnJbaV1cbiAgICAgICAgaWYgKCFzdHIgfHwgc3RyLm1hdGNoKC9eXFxzKiQvKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNob3VsZCBtYXRjaCB0aGVzZSBjYXNlczpcbiAgICAgICAgICogLmFbZGF0YS12LXh4eF0geyBjb2xvcjogcmVkOyB9XG4gICAgICAgICAqIC5hW2RhdGEtdi14eHhdOmFjdGl2ZSB7IGNvbG9yOiBncmVlbjsgfVxuICAgICAgICAgKiAuYVtkYXRhLXYteHh4XSwgLmJbZGF0YS12LXh4eF0geyBjb2xvcjogcmVkOyB9XG4gICAgICAgICAqXG4gICAgICAgICAqIHNob3VsZCBub3QgbWF0Y2ggdGhlc2UgY2FzZXM6XG4gICAgICAgICAqIC5hIHsgY29sb3I6IHJlZDsgfVxuICAgICAgICAgKiBldGMuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvKCg/Oiw/XFxzKlxcLltcXHctXStcXFtkYXRhLXYtXFx3K1xcXSg/OjpcXHcrKT8pKylcXHMqKHtbXn1dKykvKVxuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgLy8gbm90IHRoZSB2dWUgc3RhdGljIGNsYXNzIHN0eWxlcyBtYXAuIHNvIGFjcXVpcmUgbm8gcnVsZXMgZm9yIHRoaXMgc3R5bGVTaGVldC5cbiAgICAgICAgICAvLyBqdXN0IGp1bXAgdGhyb3VnaCB0aGlzIHN0eWxlU2hlZXQgYW5kIGdvIHRvIGFuYWx5emluZyBuZXh0LlxuICAgICAgICAgIHJldHVybiBwcmVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbHNObXMgPSBtYXRjaFsxXS5zcGxpdCgnLCcpLm1hcChuID0+IG4udHJpbSgpKVxuICAgICAgICBjb25zdCBjc3NUZXh0ID0gbWF0Y2hbMl0ucmVwbGFjZSgvW3t9XS9nLCAnJykudHJpbSgpXG4gICAgICAgIGxldCBjbHNObXNJZHggPSAwXG4gICAgICAgIGNvbnN0IGNsc05tc0xlbiA9IGNsc05tcy5sZW5ndGhcbiAgICAgICAgd2hpbGUgKGNsc05tc0lkeCA8IGNsc05tc0xlbikge1xuICAgICAgICAgIHJ1bGVzLnB1c2goe1xuICAgICAgICAgICAgc2VsZWN0b3JUZXh0OiBjbHNObXNbY2xzTm1zSWR4XSxcbiAgICAgICAgICAgIGNzc1RleHRcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNsc05tc0lkeCsrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEFycmF5LmZyb20ocnVsZXMpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gcnVsZS5zZWxlY3RvclRleHQgfHwgJydcbiAgICAgICAgbGV0IGlzUHNldWRvID0gZmFsc2VcbiAgICAgICAgaWYgKHNlbGVjdG9yLm1hdGNoKC86KD86YWN0aXZlfGZvY3VzfGVuYWJsZWR8ZGlzYWJsZWQpLykpIHtcbiAgICAgICAgICBpc1BzZXVkbyA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZU9iaiA9IHRyaW1Db21tZW50KHJ1bGUuY3NzVGV4dCkuc3BsaXQoJzsnKVxuICAgICAgICAgIC5yZWR1Y2UoKHN0eWxlT2JqLCBzdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC50cmltKClcbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnQgJiYgc3RhdGVtZW50LmluZGV4T2YoJy8qJykgPD0gLTEpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzQXJyID0gc3RhdGVtZW50LnNwbGl0KCc6JykubWFwKChwYXJ0KSA9PiBwYXJ0LnRyaW0oKSlcbiAgICAgICAgICAgICAgc3R5bGVPYmpbcmVzQXJyWzBdXSA9IHJlc0FyclsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlT2JqXG4gICAgICAgICAgfSwge30pXG4gICAgICAgIGlmIChpc1BzZXVkbykge1xuICAgICAgICAgIGNvbnN0IHR4dCA9IE9iamVjdC5rZXlzKHN0eWxlT2JqKS5yZWR1Y2UoZnVuY3Rpb24gKHByZSwgY3VyKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlICsgYCR7Y3VyfToke3N0eWxlT2JqW2N1cl19IWltcG9ydGFudDtgXG4gICAgICAgICAgfSwgJycpXG4gICAgICAgICAgYXBwZW5kQ3NzKGAke3NlbGVjdG9yfXske3R4dH19YCwgYHdlZXgtcHNldWRvLSR7cHNldWRvSWQrK31gKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9iak1hcCA9ICFpc1BzZXVkbyA/IHByZSA6IHByZS5wc2V1ZG9cbiAgICAgICAgY29uc3QgcmVzID0gb2JqTWFwW3NlbGVjdG9yXVxuICAgICAgICBpZiAoIXJlcykge1xuICAgICAgICAgIG9iak1hcFtzZWxlY3Rvcl0gPSBzdHlsZU9ialxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGV4dGVuZChvYmpNYXBbc2VsZWN0b3JdLCBzdHlsZU9iailcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8qKlxuICAgICAgICogcmVtb3ZlIHRoaXMgc3R5bGVTaGVldCBub2RlIHNpbmNlIGl0J3MgaW4gdGhlIHN0eWxlTWFwIGFscmVhZHkuIEFuZCB0aGlzIHN0eWxlXG4gICAgICAgKiBzaG91bGQgb25seSBiZSBmZXRjaGVkIGFuZCB1c2VkIGZyb20gc3R5bGVNYXAgdG8gZ2VuZXJhdGUgdGhlIGZpbmFsIGNvbWJpbmVkXG4gICAgICAgKiBjb21wb25lbnQgc3R5bGUsIG5vdCBmcm9tIHRoZSBzdHlsZXNoZWV0IGl0c2VsZi5cbiAgICAgICAqL1xuICAgICAgbmVlZFRvUmVtb3ZlU3R5bGVTaGVldE5vZGVzLnB1c2goc3R5bGVTaGVldC5vd25lck5vZGUpXG4gICAgICByZXR1cm4gcHJlXG4gICAgfSwgeyBwc2V1ZG86IHt9fSlcbiAgaWYgKCF3aW5kb3cuX25vX3JlbW92ZV9zdHlsZV9zaGVldHMpIHtcbiAgICBuZWVkVG9SZW1vdmVTdHlsZVNoZWV0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGNvbnNvbGUud2FybihgW3Z1ZS1yZW5kZXJdIHlvdSd2ZSBkZWZpbmVkICdfbm9fcmVtb3ZlX3N0eWxlX3NoZWV0cycgYW5kIHRoZSB2LWRhdGEteHggc3R5bGVzaGVldHMgd2lsbCBub3QgYmUgcmVtb3ZlZC5gKVxuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHRhZ0VuZCgnZ2V0SGVhZFN0eWxlTWFwJylcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRTY29wZUlkcyAoY29udGV4dCkge1xuLy8gICBjb25zdCBhcnIgPSBbXVxuLy8gICBsZXQgY3R4ID0gY29udGV4dFxuLy8gICBsZXQgc2NvcGVJZFxuLy8gICB3aGlsZSAoY3R4KSB7XG4vLyAgICAgc2NvcGVJZCA9IGN0eC4kb3B0aW9ucy5fc2NvcGVJZFxuLy8gICAgIHNjb3BlSWQgJiYgYXJyLnB1c2goc2NvcGVJZClcbi8vICAgICBjdHggPSBjdHguJG9wdGlvbnMucGFyZW50XG4vLyAgIH1cbi8vICAgcmV0dXJuIGFyclxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NvcGVJZCAodm5vZGUpIHtcbiAgcmV0dXJuIHZub2RlLmNvbnRleHQuJG9wdGlvbnMuX3Njb3BlSWRcbn1cblxuLyoqXG4gKiBnZXQgc3R5bGUgaW4gPHN0eWxlIHNjb3BlZD4gdGFncyBmb3IgdGhpcyBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY29wZVN0eWxlICh2bm9kZSwgY2xhc3NOYW1lcykge1xuICBjb25zdCBzY29wZUlkID0gZ2V0U2NvcGVJZCh2bm9kZSlcbiAgY29uc3Qgc3R5bGUgPSB7fVxuICBjb25zdCBzdHlsZU1hcCA9IHdlZXguX3N0eWxlTWFwIHx8IHt9XG4gIGxldCBjbHNObXNJZHggPSAwXG4gIGNvbnN0IGNsc05tc0xlbiA9IGNsYXNzTmFtZXMubGVuZ3RoXG4gIHdoaWxlIChjbHNObXNJZHggPCBjbHNObXNMZW4pIHtcbiAgICBjb25zdCBjbHMgPSBgLiR7Y2xhc3NOYW1lc1tjbHNObXNJZHhdfVske3Njb3BlSWR9XWBcbiAgICBjb25zdCBtYXAgPSBzdHlsZU1hcFtjbHNdXG4gICAgbWFwICYmIGV4dGVuZFRydXRoeShzdHlsZSwgbWFwKVxuICAgIGNsc05tc0lkeCsrXG4gIH1cbiAgcmV0dXJuIGNhbWVsaXplS2V5cyhzdHlsZSlcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGUgKHZub2RlLCBleHRyYWN0KSB7XG4gIGNvbnN0IGRhdGEgPSB2bm9kZS5kYXRhIHx8IHt9XG4gIGNvbnN0IHN0YXRpY0NsYXNzTmFtZXMgPSAodHlwZW9mIGRhdGEuc3RhdGljQ2xhc3MgPT09ICdzdHJpbmcnKSA/IGRhdGEuc3RhdGljQ2xhc3Muc3BsaXQoJyAnKSA6IChkYXRhLnN0YXRpY0NsYXNzIHx8IFtdKVxuICBjb25zdCBjbGFzc05hbWVzID0gKHR5cGVvZiBkYXRhLmNsYXNzID09PSAnc3RyaW5nJykgPyBkYXRhLmNsYXNzLnNwbGl0KCcgJykgOiAoZGF0YS5jbGFzcyB8fCBbXSlcbiAgY29uc3QgY2xzTm1zID0gc3RhdGljQ2xhc3NOYW1lcy5jb25jYXQoY2xhc3NOYW1lcylcbiAgY29uc3Qgc3R5bGUgPSBub3JtYWxpemVTdHlsZShnZXRTY29wZVN0eWxlKHZub2RlLCBjbHNObXMpKVxuICAvKipcbiAgICogY2FjaGUgc3RhdGljIHN0eWxlIGFuZCBiaW5kIHN0eWxlLlxuICAgKiBjYWNoZWQgc3RhdGljU3R5bGUgKGluY2x1ZGluZyBzdHlsZSBhbmQgc3RhdGljU3R5bGUpIGhhcyBhbHJlYWR5IGJlZW4gbm9ybWFsaXplZFxuICAgKiBpbiAkcHJvY2Vzc1N0eWxlLiBTbyB0aGVyZSdzIG5vIG5lZWQgdG8gbm9ybWFsaXplIGl0IGFnYWluLlxuICAgKi9cbiAgaWYgKCFkYXRhLmNhY2hlZCkge1xuICAgIC8vIGNhY2hlIHN0YXRpY1N0eWxlIG9uY2UgaW4gdGhlIGJlZ2lubmluZy5cbiAgICBkYXRhLmNhY2hlZCA9IGV4dGVuZFRydXRoeSh7fSwgZGF0YS5zdGF0aWNTdHlsZSlcbiAgfVxuICAvLyBjYWNoZSBiaW5kaW5nIHN0eWxlIGV2ZXJ5IHRpbWUgc2luY2UgdGhlIGJpbmRpbmcgc3R5bGUgaXMgdmFyaWFibGUuXG4gIGV4dGVuZFRydXRoeShkYXRhLmNhY2hlZCwgZGF0YS5zdHlsZSlcbiAgZXh0ZW5kKHN0eWxlLCBkYXRhLmNhY2hlZClcbiAgZGF0YS5zdGF0aWNTdHlsZSA9IHN0eWxlXG4gIGlmIChleHRyYWN0KSB7XG4gICAgZGVsZXRlIGRhdGEuc3RhdGljU3R5bGVcbiAgICBkZWxldGUgZGF0YS5zdHlsZVxuICB9XG4gIHJldHVybiBzdHlsZVxufVxuXG4vKipcbiAqIGdldCBzdHlsZSBtZXJnZWQgd2l0aCBzdGF0aWMgc3R5bGVzLCBiaW5kaW5nIHN0eWxlcywgYW5kIHNjb3BlZCBjbGFzcyBzdHlsZXMsXG4gKiB3aXRoIGtleXMgaW4gY2FtZWxjYXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50U3R5bGUgKGNvbnRleHQsIGV4dHJhY3QpIHtcbiAgaWYgKCFjb250ZXh0LiR2bm9kZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1t2dWUtcmVuZGVyXSBnZXRDb21wb25lbnRTdHlsZSBmYWlsZWQ6IG5vICR2bm9kZSBpbiBjb250ZXh0LicpXG4gICAgfVxuICAgIHJldHVybiB7fVxuICB9XG4gIGxldCBzdHlsZSA9IHt9XG4gIGxldCB2bm9kZSA9IGNvbnRleHQuJHZub2RlXG4gIHdoaWxlICh2bm9kZSkge1xuICAgIGV4dGVuZChzdHlsZSwgZ2V0U3R5bGUodm5vZGUsIGV4dHJhY3QpKVxuICAgIHZub2RlID0gdm5vZGUucGFyZW50XG4gIH1cbiAgc3R5bGUgPSBhdXRvUHJlZml4KHN0eWxlKVxuICAvKipcbiAgICogd2hlbiBwcmVmaXhlZCB2YWx1ZSBpcyBhIGFycmF5LCBpdCBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50XG4gICAqIGR1cmluZyB0aGUgbmV4dCB0aWNrLlxuICAgKiBlLmcuXG4gICAqICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjZjVmZWZkLCNmZmZmZmYpO1xuICAgKiAgd2lsbCBnZW5lcmF0ZTpcbiAgICogIHtcbiAgICogICAgYmFja2dyb3VuZEltYWdlOiBbXG4gICAqICAgICAgXCItd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsI2Y1ZmVmZCwjZmZmZmZmKVwiLFxuICAgKiAgICAgIFwiLW1vei1saW5lYXItZ3JhZGllbnQodG8gdG9wLCNmNWZlZmQsI2ZmZmZmZilcIixcbiAgICogICAgICBcImxpbmVhci1ncmFkaWVudCh0byB0b3AsI2Y1ZmVmZCwjZmZmZmZmKVwiXVxuICAgKiAgfVxuICAgKi9cbiAgZm9yIChjb25zdCBrIGluIHN0eWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVba10pKSB7XG4gICAgICBjb25zdCB2YWxzID0gc3R5bGVba11cbiAgICAgIGNvbnRleHQuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZWwgPSBjb250ZXh0LiRlbFxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVsLnN0eWxlW2tdID0gdmFsc1tpXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmIChrICE9PSAncG9zaXRpb24nKSB7IGRlbGV0ZSBzdHlsZVtrXSB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIElmIHBvc2l0aW9uIGlzICdzdGlja3knLCB0aGVuIGFkZCBpdCB0byB0aGUgc3RpY2t5Q2hpbGRyZW4gb2YgdGhlIHBhcmVudCBzY3JvbGxlci5cbiAgICovXG4gIGNvbnN0IHBvcyA9IHN0eWxlLnBvc2l0aW9uXG4gIGNvbnN0IHJlZyA9IC9zdGlja3kkL1xuICBpZiAocG9zID09PSAnZml4ZWQnKSB7XG4gICAgY29udGV4dC4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZWwgPSBjb250ZXh0LiRlbFxuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3dlZXgtZml4ZWQnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZWxzZSBpZiAoaXNBcnJheShwb3MpICYmIHBvc1swXS5tYXRjaChyZWcpIHx8IChwb3MgKyAnJykubWF0Y2gocmVnKSkge1xuICAgIGRlbGV0ZSBzdHlsZS5wb3NpdGlvblxuICAgIC8vIHVzZSBuYXRpdmUgc3RpY2t5LlxuICAgIGlmIChzdXBwb3J0U3RpY2t5KCkpIHtcbiAgICAgIGNvbnRleHQuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZWwgPSBjb250ZXh0LiRlbFxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCd3ZWV4LWlvcy1zdGlja3knKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICAvLyB1c2UgcmUtaW1wbGVtZW50YXRpb24gb2Ygc3RpY2t5LlxuICAgIGVsc2UgaWYgKCFjb250ZXh0Ll9zdGlja3lBZGRlZCkge1xuICAgICAgY29uc3QgdWlkID0gY29udGV4dC5fdWlkXG4gICAgICBjb25zdCBzY3JvbGxlciA9IGdldFBhcmVudFNjcm9sbGVyKGNvbnRleHQpXG4gICAgICBpZiAoc2Nyb2xsZXIpIHtcbiAgICAgICAgY29udGV4dC5fc3RpY2t5QWRkZWQgPSB0cnVlXG4gICAgICAgIGlmICghc2Nyb2xsZXIuX3N0aWNreUNoaWxkcmVuKSB7XG4gICAgICAgICAgc2Nyb2xsZXIuX3N0aWNreUNoaWxkcmVuID0ge31cbiAgICAgICAgfVxuICAgICAgICBzY3JvbGxlci5fc3RpY2t5Q2hpbGRyZW5bdWlkXSA9IGNvbnRleHRcbiAgICAgIH1cbiAgICAgIGNvbnRleHQuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZWwgPSBjb250ZXh0LiRlbFxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBjb250ZXh0Ll9pbml0T2Zmc2V0VG9wID0gZWwub2Zmc2V0VG9wXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0Q29tcG9uZW50U3R5bGUgKGNvbnRleHQpIHtcbiAgcmV0dXJuIGdldENvbXBvbmVudFN0eWxlKGNvbnRleHQsIHRydWUpXG59XG5cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBpc0FycmF5LCBjcmVhdGVFdmVudCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbi8qKlxuICogcmVtb3ZlIHRleHQgbm9kZXMgaW4gdGhlIG5vZGVzIGFycmF5LlxuICogQHBhcmFtICB7QXJyYXl9IG5vZGVzXG4gKiBAcmV0dXJuIHtBcnJheX0gbm9kZXMgd2l0aG91dCB0ZXh0IG5vZGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpbVRleHRWTm9kZXMgKHZub2Rlcykge1xuICBpZiAoaXNBcnJheSh2bm9kZXMpKSB7XG4gICAgcmV0dXJuIHZub2Rlcy5maWx0ZXIodm5vZGUgPT4gISF2bm9kZS50YWcpXG4gIH1cbiAgcmV0dXJuIHZub2Rlc1xufVxuXG4vKipcbiAqIGdldCBsaXN0ZW5lcnMgZnJvbSBvbiBjb25maWcgYW5kIHYtb24gYmluZGluZy5cbiAqIHYtb24gYmluZGluZyBoYXMgYSBwcmlvcml0eSBvdmVyIG9uIGNvbmZpZy5cbiAqIEBwYXJhbSB7dm5vZGV9IHZub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZ0OiBldmVudCBuYW1lLlxuICovXG5mdW5jdGlvbiBnZXRMaXN0ZW5lcnMgKHZub2RlLCBldnQpIHtcbiAgY29uc3QgaGFuZGxlcnMgPSBbXVxuICB3aGlsZSAodm5vZGUpIHtcbiAgICBpZiAodm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLm9uKSB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gdm5vZGUuZGF0YS5vbltldnRdXG4gICAgICBoYW5kbGVyICYmIGhhbmRsZXJzLnB1c2goaGFuZGxlcilcbiAgICB9XG4gICAgaWYgKHZub2RlLmNvbXBvbmVudE9wdGlvbnMgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnMpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zLmxpc3RlbmVyc1tldnRdXG4gICAgICBoYW5kbGVyICYmIGhhbmRsZXJzLnB1c2goaGFuZGxlcilcbiAgICB9XG4gICAgdm5vZGUgPSB2bm9kZS5wYXJlbnRcbiAgfVxuICByZXR1cm4gaGFuZGxlcnNcbn1cblxuY29uc3Qgc3VwcG9ydGVkRXZlbnRzID0gW1xuICAnbG9uZ3ByZXNzJywgJ2FwcGVhcicsICdkaXNhcHBlYXInLFxuICAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLFxuICAncGFuc3RhcnQnLCAncGFubW92ZScsICdwYW5lbmQnLCAnc3dpcGUnLCAnbG9uZ3ByZXNzJ1xuXVxuXG4vKipcbiAqIGlzIGEgZWxlbWVudCBpbiBhICc8YT4nIHRhZz9cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKi9cbmZ1bmN0aW9uIGlzSW5BTm9kZSAoZWwpIHtcbiAgbGV0IHBhcmVudCA9IGVsLnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICBpZiAocGFyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG59XG5cbi8qKlxuICogZW1pdCBuYXRpdmUgZXZlbnRzIHRvIGVuYWJsZSB2LW9uLlxuICogQHBhcmFtIHtWQ29tcG9uZW50fSBjb250ZXh0OiB3aGljaCBvbmUgdG8gZW1pdCBhIGV2ZW50IG9uLlxuICogQHBhcmFtIHthcnJheSB8IG9iamVjdH0gZXh0cmFzOiBleHRyYSBldmVudHMuIFlvdSBjYW4gcGFzcyBpbiBtdWx0aXBsZSBhcmd1bWVudHMgaGVyZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50TWFwIChjb250ZXh0LCAuLi5leHRyYXMpIHtcbiAgY29uc3QgZXZlbnRNYXAgPSB7fVxuICBjb25zdCBnZXN0dXJlRXZlbnRzID0gY29uZmlnLmdlc3R1cmVFdmVudHNcbiAgLyoqXG4gICAqIEJpbmQgc29tZSBvcmlnaW5hbCB0eXBlIGV2ZW50IHRvIHlvdXIgc3BlY2lmaWVkIHR5cGUgZXZlbnQgaGFuZGxlci5cbiAgICogZS5nLiBiaW5kICd0YXAnIGV2ZW50IHRvICdjbGljaycgZXZlbnQgbGlzdGVuZXI6IGJpbmRGdW5jKCd0YXAnKSgnY2xpY2snKS5cbiAgICogT3IgYmluZCBjZXJ0aWFuIGV2ZW50IHdpdGggeW91ciBzcGVjaWZpZWQgaGFuZGxlcjogYmluZEZ1bmMoJ2NsaWNrJywgc29tZUZ1bmN0aW9uKVxuICAgKi9cbiAgY29uc3QgYmluZEZ1bmMgPSAob3JpZ2luYWxUeXBlKSA9PiB7XG4gICAgcmV0dXJuIGxpc3RlblRvID0+IHtcbiAgICAgIGxldCBoYW5kbGVyXG4gICAgICBjb25zdCBldnROYW1lID0gb3JpZ2luYWxUeXBlIHx8IGxpc3RlblRvXG4gICAgICBpZiAodHlwZW9mIGxpc3RlblRvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGhhbmRsZXIgPSBsaXN0ZW5Ub1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIGxpc3RlblRvID09PSAnc3RyaW5nJykge1xuICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiAxLiB1c2UgJ190cmlnZ2VyZWQnIHRvIGNvbnRyb2wgYWN0dXJhbCBidWJibGluZyAoYWxsb3cgb3JpZ2luYWwgYnViYmxpbmcpLlxuICAgICAgICAgICAqIDIuIHVzZSAnX2ZvcicgdG8gZGlzdGluZ3Vpc2ggZnJvbSBnZXN0dXJlIGV2ZW50cyBnZW5lcmF0ZWQgYnkgb3RoZXJcbiAgICAgICAgICAgKiAgICBub3QtdnVlLXJlbmRlciBsaWJyYXJ5cy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoZS5fdHJpZ2dlcmVkXG4gICAgICAgICAgICB8fCBnZXN0dXJlRXZlbnRzLmluZGV4T2Yob3JpZ2luYWxUeXBlKSA+IC0xXG4gICAgICAgICAgICAmJiBlLl9mb3IgIT09ICd3ZWV4Jykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYnV0IHNob3VsZCB0cmlnZ2VyIHRoZSBjbG9zZXN0IHBhcmVudCB3aGljaCBoYXMgYm91bmQgdGhlXG4gICAgICAgICAgLy8gZXZlbnQgaGFuZGxlci5cbiAgICAgICAgICBsZXQgdm0gPSBjb250ZXh0XG4gICAgICAgICAgd2hpbGUgKHZtKSB7XG4gICAgICAgICAgICBjb25zdCBvbnMgPSBnZXRMaXN0ZW5lcnModm0uJHZub2RlLCBsaXN0ZW5UbylcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IG9ucy5sZW5ndGhcbiAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICAgIGxldCBpZHggPSAwXG4gICAgICAgICAgICAgIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgb24gPSBvbnNbaWR4XVxuICAgICAgICAgICAgICAgIGlmIChvbiAmJiBvbi5mbikge1xuICAgICAgICAgICAgICAgICAgb24gPSBvbi5mblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgZXZ0ID0gZVxuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFR5cGUgJiYgZXZ0TmFtZSAhPT0gbGlzdGVuVG8pIHtcbiAgICAgICAgICAgICAgICAgIGV2dCA9IGNyZWF0ZUV2ZW50KGUudGFyZ2V0LCBsaXN0ZW5UbylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb24gJiYgb24uY2FsbCh2bSwgZXZ0KVxuICAgICAgICAgICAgICAgIGlkeCsrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gb25jZSBhIHBhcmVudCBub2RlIChvciBzZWxmIG5vZGUpIGhhcyB0cmlnZ2VyZWQgdGhlIGhhbmRsZXIsIHRoZW5cbiAgICAgICAgICAgICAgLy8gaXQgc3RvcHMgYnViYmxpbmcgaW1tZWRpYXRlbHksIGFuZCBhICdfdHJpZ2dlcmVkJyBvYmplY3QgaXMgc2V0LlxuICAgICAgICAgICAgICBlLl90cmlnZ2VyZWQgPSB7XG4gICAgICAgICAgICAgICAgZWw6IHZtLiRlbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm0gPSB2bS4kcGFyZW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWV2ZW50TWFwW2V2dE5hbWVdKSB7XG4gICAgICAgIGV2ZW50TWFwW2V2dE5hbWVdID0gW11cbiAgICAgIH1cbiAgICAgIGV2ZW50TWFwW2V2dE5hbWVdLnB1c2goaGFuZGxlcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogMS4gRGlzcGF0Y2ggZGVmYXVsdCBzdXBwb3J0ZWQgZXZlbnRzIGRpcmVjdGx5IHRvIHVzZXIncyBldmVudCBsaXN0ZW5lcnMuIFRoZXNlXG4gICAqIGxpc3RlbmVycyB3aWxsIGJlIHRyaWdnZXJlZCBiZWZvcmUgZXh0cmFzIGV2ZW50IGhhbmRsZXJzLlxuICAgKi9cbiAgc3VwcG9ydGVkRXZlbnRzLmZvckVhY2goYmluZEZ1bmMoKSlcblxuICAvKipcbiAgICogMi4gY29tcG9uZW50J3MgZXh0cmEgZXZlbnQgYmluZGluZ3MuIFRoaXMgaXMgbW9zdGx5IGZvciB0aGUgbmVlZHMgb2YgY29tcG9uZW50J3NcbiAgICogb3duIHNwZWNpYWwgYmVoYXZpb3Vycy4gVGhlc2UgaGFuZGxlcnMgd2lsbCBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHVzZXInc1xuICAgKiBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgKi9cbiAgaWYgKGV4dHJhcykge1xuICAgIGNvbnN0IGxlbiA9IGV4dHJhcy5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBleHRyYSA9IGV4dHJhc1tpXVxuICAgICAgaWYgKGlzQXJyYXkoZXh0cmEpKSB7XG4gICAgICAgIGV4dHJhLmZvckVhY2goYmluZEZ1bmMoKSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBleHRyYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXh0cmEpIHtcbiAgICAgICAgICBiaW5kRnVuYyhrZXkpKGV4dHJhW2tleV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogMy4gc3BlY2lhbCBiaW5kaW5nIGZvciBjbGljayBldmVudCwgd2hpY2ggc2hvdWxkIGJlIGEgZmFzdGNsaWNrIGV2ZW50IHdpdGhvdXRcbiAgICogMzAwbXMgbGF0ZW5jeS5cbiAgICovXG4gIGJpbmRGdW5jKCd0YXAnKSgnY2xpY2snKVxuICAvKipcbiAgICogU3BlY2lhbCB0cmVhdG1lbnQgZm9yIGNsaWNrIGV2ZW50OlxuICAgKiB3ZSBhbHJlYWR5IHVzZSB0YXAgdG8gdHJpZ2dlciBjbGljayBldmVudCwgc28gdGhlIGNsaWNrIGV2ZW50IHNob3VsZDpcbiAgICogMS4gdHJpZ2dlciBub25lIG9mIGFueSB2bSdzIGNsaWNrIGxpc3RlbmVycy5cbiAgICogMi4gcHJldmVudCBkZWZhdWx0IGJlaGF2aW91ciBmb3IgYSBgPGE+YCBlbGVtZW50LlxuICAgKiAzLiBzdG9wIHByb3BhZ2F0aW9uIGlmIHRyaWdnZXJlZCBhbHJlYWR5LlxuICAgKiA0LiBzZXQgYSBfdHJpZ2dlcmVkIGZsYWcgdG8gdGhlIGV2ZW50IG9iamVjdCBpZiB0cmlnZ2VyZWQgYWxyZWFkeS5cbiAgICogVGhpcyBtZWFucyB0aGUgY2xpY2sgZXZlbnQgc2hvdWxkIGFsd2F5cyBiZSBzd2FsbG93ZWQgaW4gc2lsZW5jZS5cbiAgICovXG4gIGJpbmRGdW5jKCdjbGljaycpKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUuX3RyaWdnZXJlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCB2bSA9IGNvbnRleHRcbiAgICB3aGlsZSAodm0pIHtcbiAgICAgIGNvbnN0IG9ucyA9IGdldExpc3RlbmVycyh2bS4kdm5vZGUsICdjbGljaycpXG4gICAgICBjb25zdCBsZW4gPSBvbnMubGVuZ3RoXG4gICAgICBpZiAobGVuID4gMCAmJiB2bS4kZWwpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBlLl90cmlnZ2VyZWQgPSB7IGVsOiB2bS4kZWwgfVxuICAgICAgICByZXR1cm4gaXNJbkFOb2RlKHZtLiRlbCkgJiYgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgICB2bSA9IHZtLiRwYXJlbnRcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGV2ZW50TWFwXG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnXG5leHBvcnQgKiBmcm9tICcuL25vZGUnXG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7XG4gIGdldFRocm90dGxlTGF6eWxvYWQsXG4gIHdhdGNoQXBwZWFyLFxuICB0cmlnZ2VyQXBwZWFyLFxuICB0cmlnZ2VyRGlzYXBwZWFyLFxuICBleHRlbmRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmxldCBsYXp5bG9hZFdhdGNoZWQgPSBmYWxzZVxuZnVuY3Rpb24gd2F0Y2hMYXp5bG9hZCAoKSB7XG4gIGxhenlsb2FkV2F0Y2hlZCA9IHRydWVcbiAgOyBbXG4gICAgJ3Njcm9sbCdcbiAgICAvLyAndHJhbnNpdGlvbmVuZCcsXG4gICAgLy8gJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIC8vICdhbmltYXRpb25lbmQnLFxuICAgIC8vICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIC8vICdyZXNpemUnXG4gIF0uZm9yRWFjaChldnQgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2dCwgZ2V0VGhyb3R0bGVMYXp5bG9hZCgyNSwgZG9jdW1lbnQuYm9keSkpXG4gIH0pXG59XG5cbmxldCB3YXJuZWQgPSBmYWxzZVxuY29uc3Qgbm90ZVBhZ2UgPSAnaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vTXJSYWluZHJvcC81YTgwNWEwNjcxNDY2MDllNWNmZDRkNjRkNzc1ZDY5MyNmaWxlLXdlZXgtdnVlLXJlbmRlci1jb25maWctZm9yLXZ1ZS1sb2FkZXItanMnXG5mdW5jdGlvbiB3YXJuUHJvY2Vzc1N0eWxlICgpIHtcbiAgaWYgKCF3YXJuZWQpIHtcbiAgICB3YXJuZWQgPSB0cnVlXG4gICAgY29uc3QgcGFnZSA9IHdpbmRvdy5fcHJvY2Vzc19zdHlsZV9ub3RlX3BhZ2UgfHwgbm90ZVBhZ2VcbiAgICBjb25zb2xlLndhcm4oYFt2dWUtcmVuZGVyXTogeW91IHNob3VsZCBhZGQgdnVlLWxvYWRlciBjb25maWcgd2l0aCAkcHJvY2Vzc1N0eWxlIHRvIGVuYWJsZSBpbmxpbmUgc3R5bGVzJ3MgYFxuICAgICAgKyBgbm9ybWFsaXphdGlvbi4gc2VlICR7cGFnZX0gSWYgeW91IGFscmVhZHkgZGlkIHRoaXMsIHBsZWFzZSBpZ25vcmUgdGhpcyBtZXNzYWdlLmApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBiZWZvcmVDcmVhdGUgKCkge1xuICAgIGlmICghbGF6eWxvYWRXYXRjaGVkKSB7XG4gICAgICB3YXRjaExhenlsb2FkKClcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgaWYgKCF3ZWV4Ll9yb290KSB7XG4gICAgICB3ZWV4Ll9yb290ID0gdGhpcy4kcm9vdC4kZWxcbiAgICAgIHdlZXguX3Jvb3QuY2xhc3NMaXN0LmFkZCgnd2VleC1yb290JylcbiAgICB9XG5cbiAgICAvLyBnaXZlIHdhcm5pbmcgZm9yIG5vdCB1c2luZyAkcHJvY2Vzc1N0eWxlIGluIHZ1ZS1sb2FkZXIgY29uZmlnLlxuICAgIGlmICghd2FybmVkICYmICF3aW5kb3cuX3N0eWxlX3Byb2Nlc3NpbmdfYWRkZWQpIHtcbiAgICAgIHdhcm5Qcm9jZXNzU3R5bGUoKVxuICAgIH1cblxuICAgIC8vIGJpbmQgYXR0cnMgdG8gJGVsLlxuICAgIGxldCBpLCBqXG4gICAgaWYgKHRoaXMuJGVsICYmIChpID0gaiA9IHRoaXMuJHZub2RlKSAmJiAoaSA9IGkuZGF0YSkgJiYgKGogPSBqLmNvbXBvbmVudE9wdGlvbnMpKSB7XG4gICAgICB0aGlzLiRlbC5hdHRycyA9IGV4dGVuZCh7fSwgaS5hdHRycywgai5wcm9wc0RhdGEpXG4gICAgfVxuICAgIHRyaWdnZXJBcHBlYXIodGhpcylcbiAgICB3YXRjaEFwcGVhcih0aGlzKVxuICB9LFxuXG4gIGRlc3Ryb3llZCAoKSB7XG4gICAgdHJpZ2dlckRpc2FwcGVhcih0aGlzKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBfZmlyZUxhenlsb2FkIChlbCkge1xuICAgICAgZ2V0VGhyb3R0bGVMYXp5bG9hZCgyNSkoKVxuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge1xuICBnZXRIZWFkU3R5bGVNYXAsXG4gIGdldENvbXBvbmVudFN0eWxlLFxuICBleHRyYWN0Q29tcG9uZW50U3R5bGVcbn0gZnJvbSAnLi4vY29yZSdcblxuaW1wb3J0IHtcbiAgbm9ybWFsaXplU3R5bGUsXG4gIGNhbWVsaXplS2V5cyxcbiAgZXh0ZW5kXG59IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIGdldCBhIGJlZm9yZUNyZWF0ZSBob29rLCB3aGljaCBoYXMgYSBtYXJrIHRvIGlkZW50aWZ5IHRoZSBob29rIGZ1bmN0aW9uIGl0c2VsZi5cbiAqL1xuZnVuY3Rpb24gZ2V0SWRlbnRpZmllZEJlZm9yZUNyZWF0ZSAoKSB7XG4gIGNvbnN0IGRpc3Bvc2VkID0ge30gLy8gZGlzcG9zZWQgY29tcG9uZW50cy4gQWxyZWFkeSBzY2FubmVkLlxuICBmdW5jdGlvbiBiZWZvcmVDcmVhdGUgKCkge1xuICAgIC8qKlxuICAgICAqIGdldCBzdGF0aWMgY2xhc3Mgc3R5bGUgbWFwIGZyb20gZG9jdW1lbnQncyBzdHlsZVNoZWV0cy5cbiAgICAgKiBXZWV4Lm9uIHdpbGwgY3JlYXRlIGEgVnVlIGluc3RhbmNlLiBJbiB0aGlzIGNhc2Ugd2UnbGwgaWdub3JlIGl0LCBzaW5jZVxuICAgICAqIGl0J3Mgbm90IHN1cmUgd2hldGhlciB0aGUgc2NvcGVkIHN0eWxlIGhhcyBhbHJlYWR5IGF0dGFjaGVkIHRvIGhlYWQgb3Igbm90LlxuICAgICAqL1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLiRvcHRpb25zICYmIHRoaXMuJG9wdGlvbnMuX2NvbXBvbmVudFRhZ1xuICAgIC8qKlxuICAgICAqIEZvciB2dWUtbG9hZGVyIF4xMS4zLngsIHRoZXJlJ3Mgbm8gaW5qZWN0U3R5bGUgZnVuY3Rpb24uIFRoZSBzdHlsZVNoZWV0XG4gICAgICogaXMgYWxyZWFkeSBpbmplY3RlZCBpbnRvIHRoZSBoZWFkLiBKdXN0IHNjYW4gaXQuXG4gICAgICovXG4gICAgLy8gYXN5bmMgY29tcG9uZW50LlxuICAgIGlmICgodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnRhZyA9PT0gJ2NvbXBvbmVudCcpXG4gICAgICB8fCAodGhpcyA9PT0gdGhpcy4kcm9vdCAmJiB0aGlzLiRvcHRpb25zICYmICF0aGlzLl9maXJzdFNjYW5uZWQpKSB7XG4gICAgICB0aGlzLl9maXJzdFNjYW5uZWQgPSB0cnVlXG4gICAgICBleHRlbmQod2VleC5fc3R5bGVNYXAsIGdldEhlYWRTdHlsZU1hcCgpKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb3IgdnVlLWxvYWRlciBeMTIuMCwgdGhlIGluamVjdFN0eWxlIGZ1bmN0aW9uIGlzIGhvb2tlZC4gV2Ugc2hvdWxkIHNjYW5cbiAgICAgKiBzdHlsZSBtYXAgYWZ0ZXIgdGhlIGluamVjdFN0eWxlIGhvb2sgY2FsbGVkLlxuICAgICAqL1xuICAgIGlmICgoKHRoaXMgPT09IHRoaXMuJHJvb3QgJiYgdGhpcy4kb3B0aW9ucylcbiAgICAgIHx8ICh0YWdOYW1lXG4gICAgICAmJiAhd2VleC5fY29tcG9uZW50c1t0YWdOYW1lXVxuICAgICAgJiYgIWRpc3Bvc2VkW3RhZ05hbWVdKSlcbiAgICAgICYmICF0aGlzLl9zZWNvbmRTY2FubmVkKSB7XG4gICAgICBkaXNwb3NlZFt0YWdOYW1lXSA9IDFcbiAgICAgIHRoaXMuX3NlY29uZFNjYW5uZWQgPSB0cnVlXG4gICAgICBjb25zdCBob29rcyA9IHRoaXMuJG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBjb25zdCBsZW4gPSBob29rcy5sZW5ndGhcbiAgICAgIGxldCB0aGlzSG9va0lkeCA9IDAgLy8gaW5kZXggb2YgdGhpcyBob29rIGluIHRoZSBob29rcyBhcnJheS5cbiAgICAgIGZvciAoOyB0aGlzSG9va0lkeCA8IGxlbjsgdGhpc0hvb2tJZHgrKykge1xuICAgICAgICBpZiAoaG9va3NbdGhpc0hvb2tJZHhdLl9zdHlsZU1peGluKSB7IGJyZWFrIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSB0aGlzSG9va0lkeCArIDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBmdW5jID0gaG9va3NbaV1cbiAgICAgICAgaWYgKGZ1bmMubmFtZSA9PT0gJ2luamVjdFN0eWxlJykge1xuICAgICAgICAgIGhvb2tzW2ldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY2FsbCB0aGUgb3JpZ2luYWwgaW5qZWN0U3R5bGUgaG9vay5cbiAgICAgICAgICAgIGZ1bmMuY2FsbCh0aGlzKVxuICAgICAgICAgICAgLy8gc2NhbiB0aGUgbmV3IGFwcGVuZGVkIHN0eWxlU2hlZXQuXG4gICAgICAgICAgICBleHRlbmQod2VleC5fc3R5bGVNYXAsIGdldEhlYWRTdHlsZU1hcCgpKVxuICAgICAgICAgICAgaG9va3NbaV0gPSBmdW5jXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGJlZm9yZUNyZWF0ZS5fc3R5bGVNaXhpbiA9IHRydWVcbiAgcmV0dXJuIGJlZm9yZUNyZWF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJlZm9yZUNyZWF0ZTogZ2V0SWRlbnRpZmllZEJlZm9yZUNyZWF0ZSgpLFxuXG4gIG1ldGhvZHM6IHtcbiAgICAkcHJvY2Vzc1N0eWxlIChzdHlsZSkge1xuICAgICAgd2luZG93Ll9zdHlsZV9wcm9jZXNzaW5nX2FkZGVkID0gdHJ1ZVxuICAgICAgaWYgKCFzdHlsZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiBub3JtYWxpemVTdHlsZShjYW1lbGl6ZUtleXMoc3R5bGUpKVxuICAgIH0sXG5cbiAgICBfZXh0cmFjdENvbXBvbmVudFN0eWxlICgpIHtcbiAgICAgIHJldHVybiBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZ2V0IHN0eWxlIGZyb20gY2xhc3MsIHN0YXRpY0NsYXNzLCBzdHlsZSBhbmQgc3RhdGljU3R5bGUuXG4gICAgICogbWVyZ2Ugc3R5bGVzIHByaW9yaXR5OiBoaWdoIC0+IGxvd1xuICAgICAqICAxLiBkYXRhLnN0eWxlIChib3VuZCBzdHlsZSkuXG4gICAgICogIDIuIGRhdGEuc3RhdGljU3R5bGUgKGlubGluZSBzdHlsZXMpLlxuICAgICAqICAzLiBkYXRhLmNsYXNzIHN0eWxlIChib3VuZCBjbGFzcyBuYW1lcykuXG4gICAgICogIDQuIGRhdGEuc3RhdGljQ2xhc3Mgc3R5bGUgKHNjb3BlZCBzdHlsZXMgb3Igc3RhdGljIGNsYXNzZXMpLlxuICAgICAqL1xuICAgIF9nZXRDb21wb25lbnRTdHlsZSAoZGF0YSkge1xuICAgICAgcmV0dXJuIGdldENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgfSxcblxuICAgIF9nZXRQYXJlbnRSZWN0ICgpIHtcbiAgICAgIGNvbnN0IHBhcmVudEVsbSA9IHRoaXMuJG9wdGlvbnMuX3BhcmVudEVsbVxuICAgICAgcmV0dXJuIHBhcmVudEVsbSAmJiBwYXJlbnRFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG4gIH1cbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG4vLyBpbnB1dCBhbmQgdGV4dGFyZSBoYXMgc29tZSBjb21tb24gYXBpIGFuZCBldmVudFxuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IGZpbmRFbnRlcktleVR5cGUgPSBmdW5jdGlvbiAoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBrZXlzID0gWydkZWZhdWx0JywgJ2dvJywgJ25leHQnLCAnc2VhcmNoJywgJ3NlbmQnXVxuICBpZiAoa2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgIHJldHVybiBrZXlcbiAgfVxuICByZXR1cm4gJ2RvbmUnXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIGZvY3VzICgpIHtcbiAgICAgIHRoaXMuJGVsICYmIHRoaXMuJGVsLmZvY3VzKClcbiAgICB9LFxuICAgIGJsdXIgKCkge1xuICAgICAgdGhpcy4kZWwgJiYgdGhpcy4kZWwuYmx1cigpXG4gICAgfSxcbiAgICAvLyBzdXBwb3J0IGVudGVyIGtleSBldmVudFxuICAgIGNyZWF0ZUtleWJvYXJkRXZlbnQgKGV2ZW50czoge30pIHtcbiAgICAgIGNvbnN0IGN1c3RvbUtleVR5cGUgPSB0aGlzLnJldHVybktleVR5cGVcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAodGhpcy5fZXZlbnRzWydyZXR1cm4nXSkge1xuICAgICAgICBjb25zdCBrZXlib2FyZEV2ZW50cyA9IHtcbiAgICAgICAgICAna2V5dXAnOiBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBldi5rZXlDb2RlXG4gICAgICAgICAgICBsZXQga2V5ID0gZXYua2V5XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSAndGFiJykge1xuICAgICAgICAgICAgICAgIGtleSA9ICduZXh0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IHJpZ2h0S2V5VHlwZSA9IGZpbmRFbnRlcktleVR5cGUoY3VzdG9tS2V5VHlwZSlcbiAgICAgICAgICAgICAgZXYucmV0dXJuS2V5VHlwZSA9IHJpZ2h0S2V5VHlwZVxuICAgICAgICAgICAgICBldi52YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICBzZWxmLiRlbWl0KCdyZXR1cm4nLCBldilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzID0gZXh0ZW5kKGV2ZW50cywga2V5Ym9hcmRFdmVudHMpXG4gICAgICB9XG4gICAgICByZXR1cm4gZXZlbnRzXG4gICAgfVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7XG4gIGdldFBhcmVudFNjcm9sbGVyXG59IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRlc3Ryb3llZCAoKSB7XG4gICAgaWYgKCF0aGlzLl9zdGlja3lBZGRlZCkgeyByZXR1cm4gfVxuICAgIGNvbnN0IHNjcm9sbGVyID0gZ2V0UGFyZW50U2Nyb2xsZXIodGhpcylcbiAgICBpZiAoIXNjcm9sbGVyKSB7IHJldHVybiB9XG4gICAgZGVsZXRlIHNjcm9sbGVyLl9zdGlja3lDaGlsZHJlblt0aGlzLl91aWRdXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIF9hZGRTdGlja3kgKCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLiRlbFxuICAgICAgaWYgKCFlbCB8fCBlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbdnVlLXJlbmRlcl0gJGVsIGRvZXNuJ3QgZXhpc3QgdG8gYWRkIHN0aWNreS5gKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnc3RpY2t5JylcbiAgICAgIGlmICghdGhpcy5fcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBlbC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICB0aGlzLl9wbGFjZWhvbGRlci5zdHlsZS53aWR0aCA9IHRoaXMuJGVsLm9mZnNldFdpZHRoICsgJ3B4J1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy4kZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgICAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5fcGxhY2Vob2xkZXIsIHRoaXMuJGVsKVxuICAgIH0sXG5cbiAgICBfcmVtb3ZlU3RpY2t5ICgpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy4kZWxcbiAgICAgIGlmICghZWwgfHwgZWwubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW3Z1ZS1yZW5kZXJdICRlbCBkb2Vzbid0IGV4aXN0IHRvIHJlbW92ZSBzdGlja3kuYClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpXG4gICAgICBpZiAodGhpcy5fcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9wbGFjZWhvbGRlcilcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gbnVsbFxuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgYmFzZSBmcm9tICcuL2Jhc2UnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcbmltcG9ydCBpbnB1dENvbW1vbiBmcm9tICcuL2lucHV0LWNvbW1vbidcbmltcG9ydCBzdGlja3kgZnJvbSAnLi9zdGlja3knXG5cbmV4cG9ydCB7XG4gIGJhc2UsXG4gIHN0eWxlLFxuICBpbnB1dENvbW1vbixcbiAgc3RpY2t5XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB3ZWV4IGZyb20gJy4vd2VleCdcbmltcG9ydCAqIGFzIGNvcmUgZnJvbSAnLi4vY29yZSdcblxuaW1wb3J0IHsgaW5wdXRDb21tb24gfSBmcm9tICcuLi9taXhpbnMnXG5cbndpbmRvdy5nbG9iYWwgPSB3aW5kb3dcbndpbmRvdy53ZWV4ID0gd2VleFxuXG53ZWV4Ll9zdHlsZU1hcCA9IHt9XG5cbjsgWydnZXRDb21wb25lbnRTdHlsZScsXG4gICdleHRyYWN0Q29tcG9uZW50U3R5bGUnLFxuICAnY3JlYXRlRXZlbnRNYXAnLFxuICAndHJpbVRleHRWTm9kZXMnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICB3ZWV4W21ldGhvZF0gPSBjb3JlW21ldGhvZF0uYmluZCh3ZWV4KVxuICB9KVxuXG53ZWV4Lm1peGlucyA9IHtcbiAgaW5wdXRDb21tb25cbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvcmVzZXQuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvYmFzZS5jc3MnXG5cbmltcG9ydCAnLi4vbGliL2dlc3R1cmUnXG5cbmltcG9ydCAnLi4vLi4vLi4vc2hhcmVkL2FycmF5RnJvbSdcbmltcG9ydCAnLi4vLi4vLi4vc2hhcmVkL29iamVjdEFzc2lnbidcbmltcG9ydCAnLi4vLi4vLi4vc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mJ1xuXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZydcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJ1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UnXG5cbmltcG9ydCAnLi9nbG9iYWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWdWUgKHZ1ZSkge1xuICBpZiAoIXZ1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignW1Z1ZSBSZW5kZXJdIFZ1ZSBub3QgZm91bmQuIFBsZWFzZSBtYWtlIHN1cmUgdnVlIDIueCBydW50aW1lIGlzIGltcG9ydGVkLicpXG4gIH1cbiAgZ2xvYmFsLndlZXguX192dWVfXyA9IHZ1ZVxuICBjb25zb2xlLmxvZyhgW1Z1ZSBSZW5kZXJdIGluc3RhbGwgVnVlICR7dnVlLnZlcnNpb259LmApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlZXhcbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHdlZXggZnJvbSAnLi9lbnYnXG5pbXBvcnQgeyBzZXRWdWUgfSBmcm9tICcuL2VudidcbmltcG9ydCB7IGJhc2UsIHN0eWxlLCBzdGlja3kgfSBmcm9tICcuL21peGlucydcblxuLyoqXG4gKiBpbml0IHdlZXguXG4gKiBAcGFyYW0gIHtWdWUkMn0gVnVlOiBWdWUgQ29uc3RydWN0b3IuXG4gKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnM6IGV4dGVuZCB3ZWV4IHBsdWdpbnMuXG4gKiAgICAgICAgIC0gY29tcG9uZW50cy5cbiAqICAgICAgICAgLSBtb2R1bGVzLlxuICovXG5sZXQgX2luaXRlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbml0IChWdWUvKiwgb3B0aW9ucyA9IHt9Ki8pIHtcbiAgaWYgKF9pbml0ZWQpIHsgcmV0dXJuIH1cbiAgX2luaXRlZCA9IHRydWVcblxuICBzZXRWdWUoVnVlKVxuXG4gIFZ1ZS5wcm90b3R5cGUuJGdldENvbmZpZyA9ICgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oJ1tWdWUgUmVuZGVyXSBcInRoaXMuJGdldENvbmZpZ1wiIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgXCJ3ZWV4LmNvbmZpZ1wiIGluc3RlYWQuJylcbiAgICByZXR1cm4gd2VleC5jb25maWdcbiAgfVxuXG4gIGNvbnN0IGh0bWxSZWdleCA9IC9eaHRtbDovaVxuICBWdWUuY29uZmlnLmlzUmVzZXJ2ZWRUYWcgPSB0YWcgPT4gaHRtbFJlZ2V4LnRlc3QodGFnKVxuICBWdWUuY29uZmlnLnBhcnNlUGxhdGZvcm1UYWdOYW1lID0gdGFnID0+IHRhZy5yZXBsYWNlKGh0bWxSZWdleCwgJycpXG5cbiAgVnVlLm1peGluKGJhc2UpXG4gIFZ1ZS5taXhpbihzdHlsZSlcbiAgVnVlLm1peGluKHN0aWNreSlcbn1cblxuLy8gYXV0byBpbml0IGluIGRpc3QgbW9kZS5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIGluaXQod2luZG93LlZ1ZSlcbn1cblxud2VleC5pbml0ID0gaW5pdFxuXG5leHBvcnQgZGVmYXVsdCB3ZWV4XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuY29uc3QgX2NzcyA9IGBcbmJvZHkgPiAud2VleC1kaXYge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuYFxuXG5mdW5jdGlvbiBnZXREaXYgKHdlZXgpIHtcbiAgY29uc3Qge1xuICAgIGV4dHJhY3RDb21wb25lbnRTdHlsZSxcbiAgICB0cmltVGV4dFZOb2RlcyxcbiAgICBjcmVhdGVFdmVudE1hcFxuICB9ID0gd2VleFxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3dlZXgtZGl2JyxcbiAgICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOmRpdicsIHtcbiAgICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdkaXYnIH0sXG4gICAgICAgIG9uOiBjcmVhdGVFdmVudE1hcCh0aGlzKSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWRpdiB3ZWV4LWN0JyxcbiAgICAgICAgc3RhdGljU3R5bGU6IGV4dHJhY3RDb21wb25lbnRTdHlsZSh0aGlzKVxuICAgICAgfSwgdHJpbVRleHRWTm9kZXModGhpcy4kc2xvdHMuZGVmYXVsdCkpXG4gICAgfSxcbiAgICBfY3NzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0ICh3ZWV4KSB7XG4gICAgY29uc3QgZGl2ID0gZ2V0RGl2KHdlZXgpXG4gICAgd2VleC5yZWdpc3RlckNvbXBvbmVudCgnZGl2JywgZGl2KVxuICAgIHdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ2NvbnRhaW5lcicsIGRpdilcbiAgfVxufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGZpbGVPdmVydmlldyBJbXBsIG9mIHRleHQgY29tcG9uZW50LlxuICpcbiAqIE5vdGVzIGFib3V0IHRoZSBzdHlsZSAnaGVpZ2h0JyBhbmQgJ2xpbmVzJzpcbiAqIGlmIHRoZSBjb21wdXRlZCB2YWx1ZSBvZiAnaGVpZ2h0JyBpcyBiaWdnZXIgdGhhbiAnbGluZXMnLCB0aGFuIHRoZSB0ZXh0IHdpbGxcbiAqIGJlIGNsaXBwZWQgYWNjb3JkaW5nIHRvIHRoZSAnbGluZXMnLiBPdGhlcndpc2UsIGl0J2xsIGJlIHRoZSAnaGVpZ2h0Jy5cbiAqL1xuXG5jb25zdCBfY3NzID0gYFxuLndlZXgtdGV4dCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgIC8qIG5vdCB1c2luZyAncHJlJzogc3VwcG9ydCBhdXRvIGxpbmUgZmVlZC4gKi9cbiAgZm9udC1zaXplOiAwLjQyNjY2N3JlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBpdCdsbCBiZSBjbGlwcGVkIGlmIHRoZSBoZWlnaHQgaXMgbm90IGhpZ2ggZW5vdWdoLiAqL1xufVxuYFxuXG4vKipcbiAqIEdldCB0ZXh0IHNwZWNpYWwgc3R5bGVzIChsaW5lcyBhbmQgdGV4dC1vdmVyZmxvdykuXG4gKi9cbmZ1bmN0aW9uIGdldFRleHRTcGVjU3R5bGUgKG1zID0ge30pIHtcbiAgY29uc3QgbGluZXMgPSBwYXJzZUludChtcy5saW5lcykgfHwgMFxuICBjb25zdCBvdmVyZmxvdyA9IG1zWyd0ZXh0LW92ZXJmbG93J10gfHwgJ2VsbGlwc2lzJ1xuICBpZiAobGluZXMgPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICd0ZXh0LW92ZXJmbG93Jzogb3ZlcmZsb3csXG4gICAgICAnLXdlYmtpdC1saW5lLWNsYW1wJzogbGluZXNcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGV4dCAod2VleCkge1xuICBjb25zdCB7IGV4dHJhY3RDb21wb25lbnRTdHlsZSwgY3JlYXRlRXZlbnRNYXAgfSA9IHdlZXhcbiAgY29uc3QgeyBleHRlbmQgfSA9IHdlZXgudXRpbHNcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd3ZWV4LXRleHQnLFxuICAgIHByb3BzOiB7XG4gICAgICBsaW5lczogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIHZhbHVlOiBbU3RyaW5nXVxuICAgIH0sXG5cbiAgICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gZXh0cmFjdENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgICBjb25zdCB0ZXh0U3BlY1N0eWxlID0gZ2V0VGV4dFNwZWNTdHlsZShzdHlsZSlcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdwJywge1xuICAgICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3RleHQnIH0sXG4gICAgICAgIG9uOiBjcmVhdGVFdmVudE1hcCh0aGlzKSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXRleHQgd2VleC1lbCcsXG4gICAgICAgIHN0YXRpY1N0eWxlOiBleHRlbmQoc3R5bGUsIHRleHRTcGVjU3R5bGUpXG4gICAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFt0aGlzLnZhbHVlXSlcbiAgICB9LFxuICAgIF9jc3NcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQgKHdlZXgpIHtcbiAgICB3ZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd0ZXh0JywgZ2V0VGV4dCh3ZWV4KSlcbiAgfVxufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmxldCBleHRyYWN0Q29tcG9uZW50U3R5bGUsIGNyZWF0ZUV2ZW50TWFwLCBleHRlbmRcblxuY29uc3QgSU1HX05BTUVfQklUUyA9IDE1XG5cbmNvbnN0IF9jc3MgPSBgXG4ud2VleC1pbWFnZSwgLndlZXgtaW1nIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbmBcbi8qKlxuICogZ2V0IHJlc2l6ZSAoc3RldGNofGNvdmVyfGNvbnRhaW4pIHJlbGF0ZWQgc3R5bGVzLlxuICovXG5mdW5jdGlvbiBnZXRSZXNpemVTdHlsZSAoY29udGV4dCkge1xuICBjb25zdCBzdHJldGNoID0gJzEwMCUgMTAwJSdcbiAgY29uc3QgcmVzaXplID0gY29udGV4dC5yZXNpemUgfHwgc3RyZXRjaFxuICBjb25zdCBiZ1NpemUgPSBbJ2NvdmVyJywgJ2NvbnRhaW4nLCBzdHJldGNoXS5pbmRleE9mKHJlc2l6ZSkgPiAtMSA/IHJlc2l6ZSA6IHN0cmV0Y2hcbiAgLy8gY29tcGF0aWJpbGl0eTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9YmFja2dyb3VuZC1zaXplXG4gIHJldHVybiB7ICdiYWNrZ3JvdW5kLXNpemUnOiBiZ1NpemUgfVxufVxuXG5mdW5jdGlvbiBwcmVQcm9jZXNzU3JjIChjb250ZXh0LCB1cmwsIG1lcmdlZFN0eWxlKSB7XG4gIC8vIHNvbWVob3cgdGhlIG1lcmdlZCBzdHlsZSBpbiBfcHJlcmVuZGVyIGhvb2sgaXMgZ29uZS5cbiAgLy8ganVzdCByZXR1cm4gdGhlIG9yaWdpbmFsIHNyYy5cbiAgaWYgKCFtZXJnZWRTdHlsZSB8fCAhbWVyZ2VkU3R5bGUud2lkdGggfHwgIW1lcmdlZFN0eWxlLmhlaWdodCkge1xuICAgIHJldHVybiB1cmxcbiAgfVxuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG1lcmdlZFN0eWxlXG4gIHJldHVybiBjb250ZXh0LnByb2Nlc3NJbWdTcmMgJiYgY29udGV4dC5wcm9jZXNzSW1nU3JjKHVybCwge1xuICAgIHdpZHRoOiBwYXJzZUZsb2F0KHdpZHRoKSxcbiAgICBoZWlnaHQ6IHBhcnNlRmxvYXQoaGVpZ2h0KSxcbiAgICBxdWFsaXR5OiBjb250ZXh0LnF1YWxpdHksXG4gICAgc2hhcnBlbjogY29udGV4dC5zaGFycGVuLFxuICAgIG9yaWdpbmFsOiBjb250ZXh0Lm9yaWdpbmFsXG4gIH0pIHx8IHVybFxufVxuXG5mdW5jdGlvbiBkb3dubG9hZCAodXJsLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBzdWNjZXNzICgpIHtcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh7XG4gICAgICBzdWNjZXNzOiB0cnVlXG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiBmYWlsIChlcnIpIHtcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yRGVzYzogZXJyICsgJydcbiAgICB9KVxuICB9XG4gIHRyeSB7XG4gICAgbGV0IGlzRGF0YVVybCA9IGZhbHNlXG4gICAgbGV0IHBhcnRzXG4gICAgbGV0IG5hbWVcbiAgICBpZiAodXJsLm1hdGNoKC9kYXRhOmltYWdlXFwvW147XSs7YmFzZTY0LC8pKSB7XG4gICAgICBpc0RhdGFVcmwgPSB0cnVlXG4gICAgICBwYXJ0cyA9IHVybC5zcGxpdCgnLCcpXG4gICAgfVxuICAgIGlmICghaXNEYXRhVXJsKSB7XG4gICAgICBuYW1lID0gdXJsXG4gICAgICAgIC5yZXBsYWNlKC9cXD9bXj9dKy8sICcnKVxuICAgICAgICAucmVwbGFjZSgvI1teI10rLywgJycpXG4gICAgICAgIC5tYXRjaCgvKFteL10rKSQvKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5hbWUgPSBwYXJ0c1sxXS5zdWJzdHIoMCwgSU1HX05BTUVfQklUUylcbiAgICB9XG4gICAgY29uc3QgYUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgYUVsLmhyZWYgPSB1cmxcbiAgICAvKipcbiAgICAgKiBOb3QgYWxsIGJyb3dzZXIgc3VwcG9ydCB0aGlzICdkb3dubG9hZCcgYXR0cmlidXRlLiBJbiB0aGVzZSBicm93c2VycyBpdCdsbCBqdW1wXG4gICAgICogdG8gdGhlIHBob3RvIHVybCBwYWdlIGFuZCB1c2VyIGhhdmUgdG8gbG9uZ3ByZXNzIHRoZSBwaG90byB0byBzYXZlIGl0LlxuICAgICAqL1xuICAgIGFFbC5kb3dubG9hZCA9IG5hbWVcbiAgICBjb25zdCBjbGlja0V2dCA9IG5ldyBFdmVudCgnY2xpY2snLCB7IGJ1YmJsZXM6IGZhbHNlIH0pXG4gICAgYUVsLmRpc3BhdGNoRXZlbnQoY2xpY2tFdnQpXG4gICAgc3VjY2VzcygpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGZhaWwoZXJyKVxuICB9XG59XG5cbmNvbnN0IGltYWdlID0ge1xuICBuYW1lOiAnd2VleC1pbWFnZScsXG4gIHByb3BzOiB7XG4gICAgc3JjOiBTdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICByZXNpemU6IFN0cmluZyxcbiAgICBxdWFsaXR5OiBTdHJpbmcsXG4gICAgc2hhcnBlbjogU3RyaW5nLFxuICAgIG9yaWdpbmFsOiBbU3RyaW5nLCBCb29sZWFuXVxuICB9LFxuXG4gIHVwZGF0ZWQgKCkge1xuICAgIHRoaXMuX2ZpcmVMYXp5bG9hZCgpXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5fZmlyZUxhenlsb2FkKClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgc2F2ZSAoY2FsbGJhY2spIHtcbiAgICAgIGRvd25sb2FkKHRoaXMuc3JjLCBjYWxsYmFjaylcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgY29uc3QgcmVzaXplU3R5bGUgPSBnZXRSZXNpemVTdHlsZSh0aGlzKVxuICAgIGNvbnN0IHN0eWxlID0gZXh0cmFjdENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAnaW1hZ2UnLFxuICAgICAgICAnaW1nLXNyYyc6IHByZVByb2Nlc3NTcmModGhpcywgdGhpcy5zcmMsIHN0eWxlKSxcbiAgICAgICAgJ2ltZy1wbGFjZWhvbGRlcic6IHByZVByb2Nlc3NTcmModGhpcywgdGhpcy5wbGFjZWhvbGRlciwgc3R5bGUpXG4gICAgICB9LFxuICAgICAgb246IGNyZWF0ZUV2ZW50TWFwKHRoaXMsIFsnbG9hZCcsICdlcnJvciddKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1pbWFnZSB3ZWV4LWVsJyxcbiAgICAgIHN0YXRpY1N0eWxlOiBleHRlbmQoc3R5bGUsIHJlc2l6ZVN0eWxlKVxuICAgIH0pXG4gIH0sXG4gIF9jc3Ncbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0ICh3ZWV4KSB7XG4gICAgZXh0cmFjdENvbXBvbmVudFN0eWxlID0gd2VleC5leHRyYWN0Q29tcG9uZW50U3R5bGVcbiAgICBjcmVhdGVFdmVudE1hcCA9IHdlZXguY3JlYXRlRXZlbnRNYXBcbiAgICBleHRlbmQgPSB3ZWV4LnV0aWxzLmV4dGVuZFxuXG4gICAgd2VleC5yZWdpc3RlckNvbXBvbmVudCgnaW1hZ2UnLCBpbWFnZSlcbiAgICB3ZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCdpbWcnLCBpbWFnZSlcbiAgfVxufVxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmNvbnN0IERFRkFVTFRfT0ZGU0VUX0FDQ1VSQUNZID0gMTBcbmNvbnN0IERFRkFVTFRfTE9BRE1PUkVfT0ZGU0VUID0gMFxuXG5mdW5jdGlvbiBnZXRUaHJvdHRsZWRTY3JvbGwgKGNvbnRleHQpIHtcbiAgY29uc3Qgc2NhbGUgPSB3ZWV4LmNvbmZpZy5lbnYuc2NhbGVcbiAgaWYgKCFjb250ZXh0Ll90aHJvdHRsZVNjcm9sbCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBjb250ZXh0LiRyZWZzLndyYXBwZXJcbiAgICBjb25zdCBpbm5lciA9IGNvbnRleHQuJHJlZnMuaW5uZXJcbiAgICBsZXQgcHJlT2Zmc2V0ID0gKGNvbnRleHQuc2Nyb2xsRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgICAgPyB3cmFwcGVyLnNjcm9sbExlZnRcbiAgICAgICAgOiB3cmFwcGVyLnNjcm9sbFRvcClcbiAgICAgIHx8IDBcbiAgICBjb250ZXh0Ll90aHJvdHRsZVNjcm9sbCA9IHdlZXgudXRpbHMudGhyb3R0bGUoZnVuY3Rpb24gKGV2dCkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gY29udGV4dC5zY3JvbGxEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgICA/IHdyYXBwZXIuc2Nyb2xsTGVmdFxuICAgICAgICA6IHdyYXBwZXIuc2Nyb2xsVG9wXG4gICAgICBjb25zdCBpbmRlbnQgPSBwYXJzZUludChjb250ZXh0Lm9mZnNldEFjY3VyYWN5KSAqIHNjYWxlXG4gICAgICBmdW5jdGlvbiB0cmlnZ2VyU2Nyb2xsICgpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGV2dC5jb250ZW50U2l6ZSA9IHsgd2lkdGg6IHJlY3Qud2lkdGgsIGhlaWdodDogcmVjdC5oZWlnaHQgfVxuICAgICAgICBldnQuY29udGVudE9mZnNldCA9IHtcbiAgICAgICAgICB4OiB3cmFwcGVyLnNjcm9sbExlZnQsXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogcG9zaXRpdmUgZGlyZWNpdG9uIGZvciB5LWF4aXMgaXMgZG93bi5cbiAgICAgICAgICAgKiBzbyBzaG91bGQgdXNlIG5lZ2F0aXZlIG9wZXJhdGlvbiBvbiBzY3JvbGxUb3AuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiAgKDAsMCktLS0tLS0tLS0tLS0tLS0+IHhcbiAgICAgICAgICAgKiAgICAgICB8XG4gICAgICAgICAgICogICAgICAgfFxuICAgICAgICAgICAqICAgICAgIHxcbiAgICAgICAgICAgKiAgICAgICB8XG4gICAgICAgICAgICogICAgICAgdiB5XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKi9cbiAgICAgICAgICB5OiAtd3JhcHBlci5zY3JvbGxUb3BcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LiRlbWl0KCdzY3JvbGwnLCBldnQpXG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnMob2Zmc2V0IC0gcHJlT2Zmc2V0KSA+PSBpbmRlbnQpIHtcbiAgICAgICAgdHJpZ2dlclNjcm9sbCgpXG4gICAgICAgIHByZU9mZnNldCA9IG9mZnNldFxuICAgICAgfVxuICAgIH0sIDE2LCB0cnVlKVxuICB9XG4gIHJldHVybiBjb250ZXh0Ll90aHJvdHRsZVNjcm9sbFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgbG9hZG1vcmVvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiBERUZBVUxUX0xPQURNT1JFX09GRlNFVCxcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gcGFyc2VJbnQodmFsdWUpXG4gICAgICAgIHJldHVybiAhaXNOYU4odmFsKSAmJiB2YWwgPj0gREVGQVVMVF9MT0FETU9SRV9PRkZTRVRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb2Zmc2V0QWNjdXJhY3k6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBERUZBVUxUX09GRlNFVF9BQ0NVUkFDWSxcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gcGFyc2VJbnQodmFsdWUpXG4gICAgICAgIHJldHVybiAhaXNOYU4odmFsKSAmJiB2YWwgPj0gREVGQVVMVF9PRkZTRVRfQUNDVVJBQ1lcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgLy8gc2hvdWxkIGNhbGwgcmVzZXRMb2FkbW9yZSgpIHRvIGVuYWJsZSBsb2FkbW9yZSBldmVudC5cbiAgICB0aGlzLl9sb2FkbW9yZVJlc2V0ID0gdHJ1ZVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVMYXlvdXQgKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgdGhpcy5fd3JhcHBlcldpZHRoID0gcmVjdC53aWR0aFxuICAgICAgICB0aGlzLl93cmFwcGVySGVpZ2h0ID0gcmVjdC5oZWlnaHRcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBpbm5lciAmJiBpbm5lci5jaGlsZHJlblxuICAgICAgaWYgKGlubmVyKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBpbm5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICB0aGlzLl9pbm5lcldpZHRoID0gcmVjdC53aWR0aFxuICAgICAgICB0aGlzLl9pbm5lckhlaWdodCA9IHJlY3QuaGVpZ2h0XG4gICAgICB9XG4gICAgICBjb25zdCBsb2FkaW5nRWwgPSB0aGlzLl9sb2FkaW5nICYmIHRoaXMuX2xvYWRpbmcuJGVsXG4gICAgICBjb25zdCByZWZyZXNoRWwgPSB0aGlzLl9yZWZyZXNoICYmIHRoaXMuX3JlZnJlc2guJGVsXG4gICAgICBpZiAobG9hZGluZ0VsKSB7XG4gICAgICAgIHRoaXMuX2lubmVySGVpZ2h0IC09IGxvYWRpbmdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmIChyZWZyZXNoRWwpIHtcbiAgICAgICAgdGhpcy5faW5uZXJIZWlnaHQgLT0gcmVmcmVzaEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgfVxuICAgICAgLy8gaW5uZXIgd2lkdGggaXMgYWx3YXlzIHRoZSB2aWV3cG9ydCB3aWR0aCBzb21laG93IGluIGhvcml6b250YWxcbiAgICAgIC8vIHNjb2xsZXIsIHRoZXJlZm9yZSB0aGUgaW5uZXIgd2lkdGggc2hvdWxkIGJlIHJlY2xhY3VsYXRlZC5cbiAgICAgIGlmICh0aGlzLnNjcm9sbERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIGNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuX2lubmVyV2lkdGggPSB3ZWV4LnV0aWxzLmdldFJhbmdlV2lkdGgoaW5uZXIpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlc2V0TG9hZG1vcmUgKCkge1xuICAgICAgdGhpcy5fbG9hZG1vcmVSZXNldCA9IHRydWVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcHJvY2VzcyBzdGlja3kgY2hpbGRyZW4gaW4gc2Nyb2xsYWJsZSBjb21wb25lbnRzLlxuICAgICAqIGN1cnJlbnQgb25seSBzdXBwb3J0IGxpc3QgYW5kIHZlcnRpY2FsIHNjcm9sbGVyLlxuICAgICAqL1xuICAgIHByb2Nlc3NTdGlja3kgKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydCAnc3RpY2t5JyBvciAnLXdlYmtpdC1zdGlja3knLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgICAgICAqIHRvIGRvIGZ1cnRoZXIgbW9yZS5cbiAgICAgICAqL1xuICAgICAgaWYgKHdlZXgudXRpbHMuc3VwcG9ydFN0aWNreSgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gY3VycmVudCBvbmx5IHN1cHBvcnQgbGlzdCBhbmQgdmVydGljYWwgc2Nyb2xsZXIuXG4gICAgICBpZiAodGhpcy5zY3JvbGxEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0aWNreUNoaWxkcmVuID0gdGhpcy5fc3RpY2t5Q2hpbGRyZW5cbiAgICAgIGNvbnN0IGxlbiA9IHN0aWNreUNoaWxkcmVuICYmIHN0aWNreUNoaWxkcmVuLmxlbmd0aCB8fCAwXG4gICAgICBpZiAobGVuIDw9IDApIHsgcmV0dXJuIH1cblxuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy4kZWxcbiAgICAgIGlmICghY29udGFpbmVyKSB7IHJldHVybiB9XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsVG9wXG5cbiAgICAgIGxldCBzdGlja3lDaGlsZFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBzdGlja3lDaGlsZCA9IHN0aWNreUNoaWxkcmVuW2ldXG4gICAgICAgIGlmIChzdGlja3lDaGlsZC5faW5pdE9mZnNldFRvcCA8IHNjcm9sbFRvcCkge1xuICAgICAgICAgIHN0aWNreUNoaWxkLl9hZGRTdGlja3koKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHN0aWNreUNoaWxkLl9yZW1vdmVTdGlja3koKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVNjcm9sbCAoZXZlbnQpIHtcbiAgICAgIHdlZXgudXRpbHMuZ2V0VGhyb3R0bGVMYXp5bG9hZCgyNSwgdGhpcy4kZWwsICdzY3JvbGwnKSgpXG4gICAgICBnZXRUaHJvdHRsZWRTY3JvbGwodGhpcykoZXZlbnQpXG5cbiAgICAgIHRoaXMucHJvY2Vzc1N0aWNreSgpXG5cbiAgICAgIC8vIGZpcmUgbG9hZG1vcmUgZXZlbnQuXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGlmIChpbm5lcikge1xuICAgICAgICBjb25zdCBpbm5lckxlbmd0aCA9IHRoaXMuc2Nyb2xsRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgICAgICA/IHRoaXMuX2lubmVyV2lkdGhcbiAgICAgICAgICA6IHRoaXMuX2lubmVySGVpZ2h0XG4gICAgICAgIGlmICghdGhpcy5faW5uZXJMZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9pbm5lckxlbmd0aCA9IGlubmVyTGVuZ3RoXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lubmVyTGVuZ3RoICE9PSBpbm5lckxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX2lubmVyTGVuZ3RoID0gaW5uZXJMZW5ndGhcbiAgICAgICAgICB0aGlzLl9sb2FkbW9yZVJlc2V0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9sb2FkbW9yZVJlc2V0ICYmIHRoaXMucmVhY2hCb3R0b20odGhpcy5sb2FkbW9yZW9mZnNldCkpIHtcbiAgICAgICAgICB0aGlzLl9sb2FkbW9yZVJlc2V0ID0gZmFsc2VcbiAgICAgICAgICB0aGlzLiRlbWl0KCdsb2FkbW9yZScsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlYWNoVG9wICgpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLiRyZWZzLndyYXBwZXJcbiAgICAgIHJldHVybiAoISF3cmFwcGVyKSAmJiAod3JhcHBlci5zY3JvbGxUb3AgPD0gMClcbiAgICB9LFxuXG4gICAgcmVhY2hCb3R0b20gKG9mZnNldCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICBvZmZzZXQgPSBwYXJzZUludChvZmZzZXQgfHwgMCkgKiB3ZWV4LmNvbmZpZy5lbnYuc2NhbGVcblxuICAgICAgaWYgKHdyYXBwZXIgJiYgaW5uZXIpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5zY3JvbGxEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgICAgID8gJ3dpZHRoJ1xuICAgICAgICAgIDogJ2hlaWdodCdcbiAgICAgICAgY29uc3QgaW5uZXJMZW5ndGggPSB0aGlzW2BfaW5uZXIke2tleVswXS50b1VwcGVyQ2FzZSgpfSR7a2V5LnN1YnN0cigxKX1gXVxuICAgICAgICBjb25zdCB3cmFwcGVyTGVuZ3RoID0gdGhpc1tgX3dyYXBwZXIke2tleVswXS50b1VwcGVyQ2FzZSgpfSR7a2V5LnN1YnN0cigxKX1gXVxuICAgICAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSB0aGlzLnNjcm9sbERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnXG4gICAgICAgICAgPyB3cmFwcGVyLnNjcm9sbExlZnRcbiAgICAgICAgICA6IHdyYXBwZXIuc2Nyb2xsVG9wXG4gICAgICAgIHJldHVybiBzY3JvbGxPZmZzZXQgPj0gaW5uZXJMZW5ndGggLSB3cmFwcGVyTGVuZ3RoIC0gb2Zmc2V0XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hTdGFydCAoZXZlbnQpIHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAodGhpcy5fbG9hZGluZyB8fCB0aGlzLl9yZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgdGhpcy5fdG91Y2hQYXJhbXMgPSB7XG4gICAgICAgICAgcmVhY2hUb3A6IHRoaXMucmVhY2hUb3AoKSxcbiAgICAgICAgICByZWFjaEJvdHRvbTogdGhpcy5yZWFjaEJvdHRvbSgpLFxuICAgICAgICAgIHN0YXJ0VG91Y2hFdmVudDogdG91Y2gsXG4gICAgICAgICAgc3RhcnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgICAgICBzdGFydFk6IHRvdWNoLnBhZ2VZLFxuICAgICAgICAgIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hNb3ZlIChldmVudCkge1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgICAgY29uc3QgeyBzdGFydFksIHJlYWNoVG9wLCByZWFjaEJvdHRvbSB9ID0gdGhpcy5fdG91Y2hQYXJhbXNcbiAgICAgICAgaWYgKGlubmVyKSB7XG4gICAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgICAgIGNvbnN0IG9mZnNldFkgPSB0b3VjaC5wYWdlWSAtIHN0YXJ0WVxuICAgICAgICAgIHRoaXMuX3RvdWNoUGFyYW1zLm9mZnNldFkgPSBvZmZzZXRZXG4gICAgICAgICAgaWYgKHJlYWNoVG9wICYmIHRoaXMuX3JlZnJlc2gpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2gucHVsbGluZ0Rvd24ob2Zmc2V0WSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAocmVhY2hCb3R0b20gJiYgdGhpcy5fbG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZy5wdWxsaW5nVXAoLW9mZnNldFkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoRW5kIChldmVudCkge1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgICAgY29uc3QgeyByZWFjaFRvcCwgcmVhY2hCb3R0b20gfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAgIGlmIChyZWFjaFRvcCAmJiB0aGlzLl9yZWZyZXNoKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoLnB1bGxpbmdFbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChyZWFjaEJvdHRvbSAmJiB0aGlzLl9sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nLnB1bGxpbmdFbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgfVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlTGlzdFNjcm9sbCAoZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKGV2ZW50KVxuXG4gICAgICBpZiAod2VleC51dGlscy5zdXBwb3J0U3RpY2t5KCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuJGVsLnNjcm9sbFRvcFxuICAgICAgY29uc3QgaCA9IHRoaXMuJGNoaWxkcmVuLmZpbHRlcih2bSA9PiB2bS4kcmVmcy5oZWFkZXIpXG5cbiAgICAgIGlmIChoLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGhbaV0uaW5pdFRvcCA8IHNjcm9sbFRvcCkge1xuICAgICAgICAgIGhbaV0uYWRkU3RpY2t5KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBoW2ldLnJlbW92ZVN0aWNreSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc2Nyb2xsYWJsZSBmcm9tICcuL3Njcm9sbGFibGUnXG5pbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QnXG5cbmV4cG9ydCB7XG4gIHNjcm9sbGFibGUsXG4gIGxpc3Rcbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgc2Nyb2xsYWJsZSwgbGlzdCBhcyBsaXN0TWl4aW4gfSBmcm9tICcuL21peGlucydcblxuZnVuY3Rpb24gZ2V0TGlzdCAod2VleCkge1xuICBjb25zdCB7XG4gICAgZXh0cmFjdENvbXBvbmVudFN0eWxlLFxuICAgIGNyZWF0ZUV2ZW50TWFwXG4gIH0gPSB3ZWV4XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnd2VleC1saXN0JyxcbiAgICBtaXhpbnM6IFtzY3JvbGxhYmxlLCBsaXN0TWl4aW5dLFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICB3cmFwcGVyQ2xhc3MgKCkge1xuICAgICAgICBjb25zdCBjbGFzc0FycmF5ID0gWyd3ZWV4LWxpc3QnLCAnd2VleC1saXN0LXdyYXBwZXInLCAnd2VleC1jdCddXG4gICAgICAgIHRoaXMuX3JlZnJlc2ggJiYgY2xhc3NBcnJheS5wdXNoKCd3aXRoLXJlZnJlc2gnKVxuICAgICAgICB0aGlzLl9sb2FkaW5nICYmIGNsYXNzQXJyYXkucHVzaCgnd2l0aC1sb2FkaW5nJylcbiAgICAgICAgcmV0dXJuIGNsYXNzQXJyYXkuam9pbignICcpXG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGNyZWF0ZUNoaWxkcmVuIChoKSB7XG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgICB0aGlzLl9jZWxscyA9IHNsb3RzLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgICAgaWYgKCF2bm9kZS50YWcgfHwgIXZub2RlLmNvbXBvbmVudE9wdGlvbnMpIHJldHVybiBmYWxzZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgaCgnaHRtbDpkaXYnLCB7XG4gICAgICAgICAgICByZWY6ICdpbm5lcicsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogJ3dlZXgtbGlzdC1pbm5lciB3ZWV4LWN0J1xuICAgICAgICAgIH0sIHRoaXMuX2NlbGxzKVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgICAgdGhpcy53ZWV4VHlwZSA9ICdsaXN0J1xuXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0KClcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYWluJywge1xuICAgICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdsaXN0JyB9LFxuICAgICAgICBzdGF0aWNDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MsXG4gICAgICAgIG9uOiBjcmVhdGVFdmVudE1hcCh0aGlzLCB7XG4gICAgICAgICAgc2Nyb2xsOiB0aGlzLmhhbmRsZUxpc3RTY3JvbGwsXG4gICAgICAgICAgdG91Y2hzdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICAgIHRvdWNobW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUsXG4gICAgICAgICAgdG91Y2hlbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgICAgfSksXG4gICAgICAgIHN0YXRpY1N0eWxlOiBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICAgIH0sIHRoaXMuY3JlYXRlQ2hpbGRyZW4oY3JlYXRlRWxlbWVudCkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCAod2VleCkge1xuICAgIHdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ2xpc3QnLCBnZXRMaXN0KHdlZXgpKVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgc2Nyb2xsYWJsZSwgbGlzdCBhcyBsaXN0TWl4aW4gfSBmcm9tICcuL21peGlucydcblxuZnVuY3Rpb24gZ2V0U2Nyb2xsZXIgKHdlZXgpIHtcbiAgY29uc3Qge1xuICAgIGV4dHJhY3RDb21wb25lbnRTdHlsZSxcbiAgICBjcmVhdGVFdmVudE1hcFxuICB9ID0gd2VleFxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3dlZXgtc2Nyb2xsZXInLFxuICAgIG1peGluczogW3Njcm9sbGFibGUsIGxpc3RNaXhpbl0sXG4gICAgcHJvcHM6IHtcbiAgICAgIHNjcm9sbERpcmVjdGlvbjoge1xuICAgICAgICB0eXBlOiBbU3RyaW5nXSxcbiAgICAgICAgZGVmYXVsdDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjcm9sbGFibGU6IHtcbiAgICAgICAgdHlwZTogW0Jvb2xlYW5dLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgd3JhcHBlckNsYXNzICgpIHtcbiAgICAgICAgY29uc3QgY2xhc3NBcnJheSA9IFsnd2VleC1zY3JvbGxlcicsICd3ZWV4LXNjcm9sbGVyLXdyYXBwZXInLCAnd2VleC1jdCddXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgY2xhc3NBcnJheS5wdXNoKCd3ZWV4LXNjcm9sbGVyLWhvcml6b250YWwnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNsYXNzQXJyYXkucHVzaCgnd2VleC1zY3JvbGxlci12ZXJ0aWNhbCcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICBjbGFzc0FycmF5LnB1c2goJ3dlZXgtc2Nyb2xsZXItZGlzYWJsZWQnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc0FycmF5LmpvaW4oJyAnKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBjcmVhdGVDaGlsZHJlbiAoaCkge1xuICAgICAgICBjb25zdCBzbG90cyA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgICAgdGhpcy5fY2VsbHMgPSBzbG90cy5maWx0ZXIodm5vZGUgPT4ge1xuICAgICAgICAgIGlmICghdm5vZGUudGFnIHx8ICF2bm9kZS5jb21wb25lbnRPcHRpb25zKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIGgoJ2h0bWw6ZGl2Jywge1xuICAgICAgICAgICAgcmVmOiAnaW5uZXInLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNjcm9sbGVyLWlubmVyIHdlZXgtY3QnXG4gICAgICAgICAgfSwgdGhpcy5fY2VsbHMpXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgICB0aGlzLndlZXhUeXBlID0gJ3Njcm9sbGVyJ1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAvLyAgIHZhbGlkYXRlU3R5bGVzKCdzY3JvbGxlcicsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAgIC8vIH1cblxuICAgICAgdGhpcy5fY2VsbHMgPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0KClcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYWluJywge1xuICAgICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdzY3JvbGxlcicgfSxcbiAgICAgICAgb246IGNyZWF0ZUV2ZW50TWFwKHRoaXMsIHtcbiAgICAgICAgICBzY3JvbGw6IHRoaXMuaGFuZGxlU2Nyb2xsLFxuICAgICAgICAgIHRvdWNoc3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgICB0b3VjaG1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuICAgICAgICAgIHRvdWNoZW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kXG4gICAgICAgIH0pLFxuICAgICAgICBzdGF0aWNDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MsXG4gICAgICAgIHN0YXRpY1N0eWxlOiBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICAgIH0sIHRoaXMuY3JlYXRlQ2hpbGRyZW4oY3JlYXRlRWxlbWVudCkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCAod2VleCkge1xuICAgIHdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3Njcm9sbGVyJywgZ2V0U2Nyb2xsZXIod2VleCkpXG4gIH1cbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IHdhdGVyZmFsbFxuICogTk9URTogb25seSBzdXBwb3J0IGZ1bGwgc2NyZWVuIHdpZHRoIHdhdGVyZmFsbC5cbiAqL1xuXG5pbXBvcnQgeyBzY3JvbGxhYmxlIH0gZnJvbSAnLi9taXhpbnMnXG5cbmNvbnN0IE5PUk1BTF9HQVBfU0laRSA9IDMyXG5jb25zdCBERUZBVUxUX0NPTFVNTl9DT1VOVCA9IDFcblxuZnVuY3Rpb24gZ2V0V2F0ZXJmYWxsICh3ZWV4KSB7XG4gIGNvbnN0IHtcbiAgICBleHRyYWN0Q29tcG9uZW50U3R5bGUsXG4gICAgY3JlYXRlRXZlbnRNYXBcbiAgfSA9IHdlZXhcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd3ZWV4LXdhdGVyZmFsbCcsXG4gICAgbWl4aW5zOiBbc2Nyb2xsYWJsZV0sXG4gICAgcHJvcHM6IHtcbiAgICAgIC8qKlxuICAgICAgICogc3BlY2lmaWVkIGdhcCBzaXplLlxuICAgICAgICogdmFsdWUgY2FuIGJlIG51bWJlciBvciAnbm9ybWFsJy4gJ25vcm1hbCcgKDMycHgpIGJ5IGRlZmF1bHQuXG4gICAgICAgKi9cbiAgICAgIGNvbHVtbkdhcDoge1xuICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICBkZWZhdWx0OiAnbm9ybWFsJyxcbiAgICAgICAgdmFsaWRhdG9yICh2YWwpIHtcbiAgICAgICAgICBpZiAoIXZhbCB8fCB2YWwgPT09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YWwgPSBwYXJzZUludCh2YWwpXG4gICAgICAgICAgcmV0dXJuICFpc05hTih2YWwpICYmIHZhbCA+IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogdGhlIG1heGltdW0gY29sdW1uIGNvdW50cy5cbiAgICAgICAqIHZhbHVlIGNhbiBiZSBudW1iZXIgb3IgJ2F1dG8nLiAxIGJ5IGRlZmF1bHQuXG4gICAgICAgKi9cbiAgICAgIGNvbHVtbkNvdW50OiB7XG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgIGRlZmF1bHQ6IERFRkFVTFRfQ09MVU1OX0NPVU5ULFxuICAgICAgICB2YWxpZGF0b3IgKHZhbCkge1xuICAgICAgICAgIHZhbCA9IHBhcnNlSW50KHZhbClcbiAgICAgICAgICByZXR1cm4gIWlzTmFOKHZhbCkgJiYgdmFsID4gMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiB0aGUgbWltaW11bSBjb2x1bW4gd2lkdGguXG4gICAgICAgKiB2YWx1ZSBjYW4gYmUgbnVtYmVyIG9yICdhdXRvJy4gJ2F1dG8nIGJ5IGRlZmF1bHQuXG4gICAgICAgKi9cbiAgICAgIGNvbHVtbldpZHRoOiB7XG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgIGRlZmF1bHQ6ICdhdXRvJyxcbiAgICAgICAgdmFsaWRhdG9yICh2YWwpIHtcbiAgICAgICAgICBpZiAoIXZhbCB8fCB2YWwgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsID0gcGFyc2VJbnQodmFsKVxuICAgICAgICAgIHJldHVybiAhaXNOYU4odmFsKSAmJiB2YWwgPiAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCAoKSB7XG4gICAgICB0aGlzLl9uZXh0VGljaygpXG4gICAgfSxcblxuICAgIHVwZGF0ZWQgKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2sodGhpcy5fbmV4dFRpY2soKSlcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgX2NyZWF0ZUNoaWxkcmVuIChoLCByb290U3R5bGUpIHtcbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICAgIHRoaXMuX2hlYWRlcnMgPSBbXVxuICAgICAgICB0aGlzLl9vdGhlcnMgPSBbXVxuICAgICAgICB0aGlzLl9jZWxscyA9IHNsb3RzLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgICAgaWYgKCF2bm9kZS50YWcgfHwgIXZub2RlLmNvbXBvbmVudE9wdGlvbnMpIHJldHVybiBmYWxzZVxuICAgICAgICAgIGNvbnN0IHRhZyA9IHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnXG4gICAgICAgICAgaWYgKHRhZyA9PT0gJ3JlZnJlc2gnIHx8IHRhZyA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgICB0aGlzW2BfJHt0YWd9YF0gPSB2bm9kZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0YWcgPT09ICdoZWFkZXInKSB7XG4gICAgICAgICAgICB0aGlzLl9oZWFkZXJzLnB1c2godm5vZGUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRhZyAhPT0gJ2NlbGwnKSB7XG4gICAgICAgICAgICB0aGlzLl9vdGhlcnMucHVzaCh2bm9kZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLl9yZUNhbGMocm9vdFN0eWxlKVxuICAgICAgICB0aGlzLl9nZW5Db2x1bW5zKGgpXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IFtdXG4gICAgICAgIHRoaXMuX3JlZnJlc2ggJiYgY2hpbGRyZW4ucHVzaCh0aGlzLl9yZWZyZXNoKVxuICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuXG4gICAgICAgICAgLmNvbmNhdCh0aGlzLl9oZWFkZXJzKVxuICAgICAgICAgIC5jb25jYXQodGhpcy5fb3RoZXJzKVxuICAgICAgICBjaGlsZHJlbi5wdXNoKGgoJ2h0bWw6ZGl2Jywge1xuICAgICAgICAgIHJlZjogJ2NvbHVtbnMnLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC13YXRlcmZhbGwtaW5uZXItY29sdW1ucyB3ZWV4LWN0J1xuICAgICAgICB9LCB0aGlzLl9jb2x1bW5zKSlcbiAgICAgICAgdGhpcy5fbG9hZGluZyAmJiBjaGlsZHJlbi5wdXNoKHRoaXMuX2xvYWRpbmcpXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgaCgnaHRtbDpkaXYnLCB7XG4gICAgICAgICAgICByZWY6ICdpbm5lcicsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogJ3dlZXgtd2F0ZXJmYWxsLWlubmVyIHdlZXgtY3QnXG4gICAgICAgICAgfSwgY2hpbGRyZW4pXG4gICAgICAgIF1cbiAgICAgIH0sXG5cbiAgICAgIF9yZUNhbGMgKHJvb3RTdHlsZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogTk9URTogY29sdW1uR2FwIGFuZCBjb2x1bW5XaWR0aCBjYW4ndCBib3RoIGJlIGF1dG8uXG4gICAgICAgICAqIE5PVEU6IHRoZSBmb3JtdWxhOlxuICAgICAgICAgKiAgdG90YWxXaWR0aCA9IG4gKiB3ICsgKG4gLSAxKSAqIGdhcFxuICAgICAgICAgKiAxLiBpZiBjb2x1bW5Db3VudCA9IG4gdGhlbiBjYWxjIHdcbiAgICAgICAgICogMi4gaWYgY29sdW1uV2lkdGggPSB3IHRoZW4gY2FsYyBuXG4gICAgICAgICAqIDMuIGlmIGNvbHVtbldpZHRoID0gdyBhbmQgY29sdW1uQ291bnQgPSBuIHRoZW4gY2FsYyB0b3RhbFdpZHRoXG4gICAgICAgICAqICAgIDMuMSBpZiB0b3RhbFdpZHRoIDwgY3RXaWR0aCB0aGVuIGluY3JlYXNlIGNvbHVtbldpZHRoXG4gICAgICAgICAqICAgIDMuMiBpZiB0b3RhbFdpZHRoID4gY3RXaWR0aCB0aGVuIGRlY3JlYXNlIGNvbHVtbkNvdW50XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgd2lkdGgsIGdhcCwgY250LCBjdFdpZHRoXG4gICAgICAgIGNvbnN0IHNjYWxlID0gd2VleC5jb25maWcuZW52LnNjYWxlXG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy4kZWxcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q3RXaWR0aCAod2lkdGgsIHN0eWxlKSB7XG4gICAgICAgICAgY29uc3QgcGFkZGluZyA9IHN0eWxlLnBhZGRpbmdcbiAgICAgICAgICAgID8gcGFyc2VJbnQoc3R5bGUucGFkZGluZykgKiAyXG4gICAgICAgICAgICA6IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0IHx8IDApICsgcGFyc2VJbnQoc3R5bGUucGFkZGluZ1JpZ2h0IHx8IDApXG4gICAgICAgICAgcmV0dXJuIHdpZHRoIC0gcGFkZGluZ1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbCAmJiBlbC5ub2RlVHlwZSA9PT0gMSkgeyAgLy8gYWxyZWFkeSBtb3VudGVkXG4gICAgICAgICAgY29uc3QgY3N0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpXG4gICAgICAgICAgY3RXaWR0aCA9IGdldEN0V2lkdGgoZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsIGNzdHlsZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgIC8vIG5vdCBtb3VudGVkLlxuICAgICAgICAgIC8vIG9ubHkgc3VwcG9ydCBmdWxsIHNjcmVlbiB3aWR0aCBmb3Igd2F0ZXJmYWxsIGNvbXBvbmVudC5cbiAgICAgICAgICBjdFdpZHRoID0gZ2V0Q3RXaWR0aChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHJvb3RTdHlsZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGdhcCA9IHRoaXMuY29sdW1uR2FwXG4gICAgICAgIGlmIChnYXAgJiYgZ2FwICE9PSAnbm9ybWFsJykge1xuICAgICAgICAgIGdhcCA9IHBhcnNlSW50KGdhcClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBnYXAgPSBOT1JNQUxfR0FQX1NJWkVcbiAgICAgICAgfVxuICAgICAgICBnYXAgPSBnYXAgKiBzY2FsZVxuXG4gICAgICAgIHdpZHRoID0gdGhpcy5jb2x1bW5XaWR0aFxuICAgICAgICBjbnQgPSB0aGlzLmNvbHVtbkNvdW50XG4gICAgICAgIGlmICh3aWR0aCAmJiB3aWR0aCAhPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCkgKiBzY2FsZVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbnQgJiYgY250ICE9PSAnYXV0bycpIHtcbiAgICAgICAgICBjbnQgPSBwYXJzZUludChjbnQpXG4gICAgICAgIH1cblxuICAgICAgICAvLyAwLiBpZiAhY29sdW1uQ291bnQgJiYgIWNvbHVtbldpZHRoXG4gICAgICAgIGlmIChjbnQgPT09ICdhdXRvJyAmJiB3aWR0aCA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFt2dWUtcmVuZGVyXSB3YXRlcmZhbGwncyBjb2x1bW5XaWR0aCBhbmQgY29sdW1uQ291bnQgc2hvdWxkbid0YFxuICAgICAgICAgICAgKyBgIGJvdGggYmUgYXV0byBhdCB0aGUgc2FtZSB0aW1lLmApXG4gICAgICAgICAgICBjbnQgPSBERUZBVUxUX0NPTFVNTl9DT1VOVFxuICAgICAgICAgICAgd2lkdGggPSBjdFdpZHRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIDEuIGlmIGNvbHVtbkNvdW50ID0gbiB0aGVuIGNhbGMgdy5cbiAgICAgICAgZWxzZSBpZiAoY250ICE9PSAnYXV0bycgJiYgd2lkdGggPT09ICdhdXRvJykge1xuICAgICAgICAgIHdpZHRoID0gKGN0V2lkdGggLSAoY250IC0gMSkgKiBnYXApIC8gY250XG4gICAgICAgIH1cbiAgICAgICAgLy8gMi4gaWYgY29sdW1uV2lkdGggPSB3IHRoZW4gY2FsYyBuLlxuICAgICAgICBlbHNlIGlmIChjbnQgPT09ICdhdXRvJyAmJiB3aWR0aCAhPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgY250ID0gKGN0V2lkdGggKyBnYXApIC8gKHdpZHRoICsgZ2FwKVxuICAgICAgICB9XG4gICAgICAgIC8vIDMuIGlmIGNvbHVtbldpZHRoID0gdyBhbmQgY29sdW1uQ291bnQgPSBuIHRoZW4gY2FsYyB0b3RhbFdpZHRoXG4gICAgICAgIGVsc2UgaWYgKGNudCAhPT0gJ2F1dG8nICYmIHdpZHRoICE9PSAnYXV0bycpIHtcbiAgICAgICAgICBsZXQgdG90YWxXaWR0aFxuICAgICAgICAgIGNvbnN0IGFkanVzdENvdW50QW5kV2lkdGggPSAoKSA9PiB7XG4gICAgICAgICAgICB0b3RhbFdpZHRoID0gY250ICogd2lkdGggKyAoY250IC0gMSkgKiBnYXBcbiAgICAgICAgICAgIGlmICh0b3RhbFdpZHRoIDwgY3RXaWR0aCkge1xuICAgICAgICAgICAgICB3aWR0aCArPSAoY3RXaWR0aCAtIHRvdGFsV2lkdGgpIC8gY250XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b3RhbFdpZHRoID4gY3RXaWR0aCAmJiBjbnQgPiAxKSB7XG4gICAgICAgICAgICAgIGNudC0tXG4gICAgICAgICAgICAgIGFkanVzdENvdW50QW5kV2lkdGgoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG90YWxXaWR0aCA+IGN0V2lkdGgpIHsgIC8vIGNudCA9PT0gMVxuICAgICAgICAgICAgICB3aWR0aCA9IGN0V2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYWRqdXN0Q291bnRBbmRXaWR0aCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29sdW1uQ291bnQgPSBjbnRcbiAgICAgICAgdGhpcy5fY29sdW1uV2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLl9jb2x1bW5HYXAgPSBnYXBcbiAgICAgIH0sXG5cbiAgICAgIF9nZW5Db2x1bW5zIChjcmVhdGVFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2NvbHVtbnMgPSBbXVxuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuX2NlbGxzXG4gICAgICAgIGNvbnN0IGNvbHVtbkNudCA9IHRoaXMuX2NvbHVtbkNvdW50XG4gICAgICAgIGNvbnN0IGxlbiA9IGNlbGxzLmxlbmd0aFxuICAgICAgICBjb25zdCBjb2x1bW5DZWxscyA9IHRoaXMuX2NvbHVtbkNlbGxzID0gQXJyYXkoY29sdW1uQ250KS5qb2luKCcuJykuc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfSlcbiAgICAgICAgLy8gc3ByZWFkIGNlbGxzIHRvIHRoZSBjb2x1bW5zIHVzaW5nIHNpbXBvbGUgcG9sbGluZyBhbGdvcml0aG0uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAoY2VsbHNbaV0uZGF0YS5hdHRycyB8fCAoY2VsbHNbaV0uZGF0YS5hdHRycyA9IHt9KSlbJ2RhdGEtY2VsbCddID0gaVxuICAgICAgICAgIGNvbHVtbkNlbGxzW2kgJSBjb2x1bW5DbnRdLnB1c2goY2VsbHNbaV0pXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5DbnQ7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2NvbHVtbnMucHVzaChjcmVhdGVFbGVtZW50KCdodG1sOmRpdicsIHtcbiAgICAgICAgICAgIHJlZjogYGNvbHVtbiR7aX1gLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgJ2RhdGEtY29sdW1uJzogaVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1jdCcsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICB3aWR0aDogdGhpcy5fY29sdW1uV2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBpID09PSAwID8gMCA6IHRoaXMuX2NvbHVtbkdhcCArICdweCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBjb2x1bW5DZWxsc1tpXSkpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9uZXh0VGljayAoKSB7XG4gICAgICAgIHRoaXMuX3JlTGF5b3V0Q2hpbGRyZW4oKVxuICAgICAgfSxcblxuICAgICAgX3JlTGF5b3V0Q2hpbGRyZW4gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogdHJlYXQgdGhlIHNob3J0ZXN0IGNvbHVtbiBib3R0b20gYXMgdGhlIG1hdGNoIHN0YW5kYXJkLlxuICAgICAgICAgKiB3aGljaGV2ZXIgY2VsbCBleGNlZWRlZCBpdCB3b3VsZCBiZSByZWFycmFuZ2VkLlxuICAgICAgICAgKiAxLiBtID0gc2hvcnRlc3QgY29sdW1uIGJvdHRvbS5cbiAgICAgICAgICogMi4gZ2V0IGFsbCBjZWxsIGlkcyB3aG8gaXMgYmVsb3cgbS5cbiAgICAgICAgICogMy4gY2FsY3VsYXRlIHdoaWNoIGNlbGwgc2hvdWxkIGJlIGluIHdoaWNoIGNvbHVtbi5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNvbHVtbkNudCA9IHRoaXMuX2NvbHVtbkNvdW50XG4gICAgICAgIGNvbnN0IGNvbHVtbkRvbXMgPSBbXVxuICAgICAgICBjb25zdCBjb2x1bW5BcHBlbmRGcmFnbWVudHMgPSBbXVxuICAgICAgICBjb25zdCBjb2x1bW5Cb3R0b21zID0gW11cbiAgICAgICAgbGV0IG1pbkJvdHRvbSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgICAgIGxldCBtaW5Cb3R0b21Db2x1bW5JbmRleCA9IDBcblxuICAgICAgICAvLyAxLiBmaW5kIHRoZSBzaG9ydGVzdCBjb2x1bW4gYm90dG9tLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNudDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY29sdW1uRG9tID0gdGhpcy5fY29sdW1uc1tpXS5lbG1cbiAgICAgICAgICBjb25zdCBsYXN0Q2hpbGQgPSBjb2x1bW5Eb20ubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IGxhc3RDaGlsZCA/IGxhc3RDaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gOiAwXG4gICAgICAgICAgY29sdW1uRG9tcy5wdXNoKGNvbHVtbkRvbSlcbiAgICAgICAgICBjb2x1bW5Cb3R0b21zW2ldID0gYm90dG9tXG4gICAgICAgICAgY29sdW1uQXBwZW5kRnJhZ21lbnRzLnB1c2goZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKVxuICAgICAgICAgIGlmIChib3R0b20gPCBtaW5Cb3R0b20pIHtcbiAgICAgICAgICAgIG1pbkJvdHRvbSA9IGJvdHRvbVxuICAgICAgICAgICAgbWluQm90dG9tQ29sdW1uSW5kZXggPSBpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gMi4gZ2V0IGFsbCBjZWxsIGlkcyB3aG8gaXMgYmVsb3cgbS5cbiAgICAgICAgY29uc3QgYmVsb3dDZWxsSWRzID0gW11cbiAgICAgICAgY29uc3QgYmVsb3dDZWxscyA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ250OyBpKyspIHtcbiAgICAgICAgICBpZiAoaSA9PT0gbWluQm90dG9tQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGNvbHVtbkRvbSA9IGNvbHVtbkRvbXNbaV1cbiAgICAgICAgICBjb25zdCBjZWxsc0luQ29sdW1uID0gY29sdW1uRG9tLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24ud2VleC1jZWxsJylcbiAgICAgICAgICBjb25zdCBsZW4gPSBjZWxsc0luQ29sdW1uLmxlbmd0aFxuICAgICAgICAgIGZvciAobGV0IGogPSBsZW4gLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbERvbSA9IGNlbGxzSW5Db2x1bW5bal1cbiAgICAgICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbERvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgaWYgKGNlbGxSZWN0LnRvcCA+IG1pbkJvdHRvbSkge1xuICAgICAgICAgICAgICBjb25zdCBpZCA9IH5+Y2VsbERvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2VsbCcpXG4gICAgICAgICAgICAgIGJlbG93Q2VsbElkcy5wdXNoKGlkKVxuICAgICAgICAgICAgICBiZWxvd0NlbGxzW2lkXSA9IHsgZWxtOiBjZWxsRG9tLCBoZWlnaHQ6IGNlbGxSZWN0LmhlaWdodCB9XG4gICAgICAgICAgICAgIGNvbHVtbkJvdHRvbXNbaV0gLT0gY2VsbFJlY3QuaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gMy4gY2FsY3VsYXRlIHdoaWNoIGNlbGwgc2hvdWxkIGJlIGluIHdoaWNoIGNvbHVtbiBhbmQgcmVhcnJhbmdlIHRoZW1cbiAgICAgICAgLy8gIGluIHRoZSBkb20gdHJlZS5cbiAgICAgICAgYmVsb3dDZWxsSWRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgPiBiIH0pXG4gICAgICAgIGNvbnN0IGNlbGxJZHNMZW4gPSBiZWxvd0NlbGxJZHMubGVuZ3RoXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRvU2hvcnRlc3RDb2x1bW4gKGJlbG93Q2VsbCkge1xuICAgICAgICAgIC8vIGZpbmQgc2hvcnRlc3QgYm90dG9tLlxuICAgICAgICAgIG1pbkJvdHRvbSA9IE1hdGgubWluKC4uLmNvbHVtbkJvdHRvbXMpXG4gICAgICAgICAgbWluQm90dG9tQ29sdW1uSW5kZXggPSBjb2x1bW5Cb3R0b21zLmluZGV4T2YobWluQm90dG9tKVxuICAgICAgICAgIGNvbnN0IHsgZWxtOiBjZWxsRWxtLCBoZWlnaHQ6IGNlbGxIZWlnaHQgfSA9IGJlbG93Q2VsbFxuICAgICAgICAgIGNvbHVtbkFwcGVuZEZyYWdtZW50c1ttaW5Cb3R0b21Db2x1bW5JbmRleF0uYXBwZW5kQ2hpbGQoY2VsbEVsbSlcbiAgICAgICAgICBjb2x1bW5Cb3R0b21zW21pbkJvdHRvbUNvbHVtbkluZGV4XSArPSBjZWxsSGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsSWRzTGVuOyBpKyspIHtcbiAgICAgICAgICBhZGRUb1Nob3J0ZXN0Q29sdW1uKGJlbG93Q2VsbHNbYmVsb3dDZWxsSWRzW2ldXSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNudDsgaSsrKSB7XG4gICAgICAgICAgY29sdW1uRG9tc1tpXS5hcHBlbmRDaGlsZChjb2x1bW5BcHBlbmRGcmFnbWVudHNbaV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgICB0aGlzLndlZXhUeXBlID0gJ3dhdGVyZmFsbCdcbiAgICAgIHRoaXMuX2NlbGxzID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dCgpXG4gICAgICB9KVxuICAgICAgY29uc3QgbWVyZ2VkU3R5bGUgPSBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYWluJywge1xuICAgICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICd3YXRlcmZhbGwnIH0sXG4gICAgICAgIG9uOiBjcmVhdGVFdmVudE1hcCh0aGlzLCB7XG4gICAgICAgICAgc2Nyb2xsOiB0aGlzLmhhbmRsZVNjcm9sbCxcbiAgICAgICAgICB0b3VjaHN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgdG91Y2htb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcbiAgICAgICAgICB0b3VjaGVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgICAgICB9KSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXdhdGVyZmFsbCB3ZWV4LXdhdGVyZmFsbC13cmFwcGVyIHdlZXgtY3QnLFxuICAgICAgICBzdGF0aWNTdHlsZTogbWVyZ2VkU3R5bGVcbiAgICAgIH0sIHRoaXMuX2NyZWF0ZUNoaWxkcmVuKGNyZWF0ZUVsZW1lbnQsIG1lcmdlZFN0eWxlKSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0ICh3ZWV4KSB7XG4gICAgd2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2F0ZXJmYWxsJywgZ2V0V2F0ZXJmYWxsKHdlZXgpKVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gZ2V0Q2VsbCAod2VleCkge1xuICBjb25zdCB7IGV4dHJhY3RDb21wb25lbnRTdHlsZSwgY3JlYXRlRXZlbnRNYXAgfSA9IHdlZXhcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnd2VleC1jZWxsJyxcbiAgICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywge1xuICAgICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2NlbGwnIH0sXG4gICAgICAgIG9uOiBjcmVhdGVFdmVudE1hcCh0aGlzKSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWNlbGwgd2VleC1jdCcsXG4gICAgICAgIHN0YXRpY1N0eWxlOiBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCAod2VleCkge1xuICAgIHdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ2NlbGwnLCBnZXRDZWxsKHdlZXgpKVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gZ2V0SGVhZGVyICh3ZWV4KSB7XG4gIGNvbnN0IHsgZXh0cmFjdENvbXBvbmVudFN0eWxlLCBjcmVhdGVFdmVudE1hcCB9ID0gd2VleFxuICBjb25zdCB7IHN1cHBvcnRTdGlja3kgfSA9IHdlZXgudXRpbHNcblxuICByZXR1cm4ge1xuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RpY2t5OiBmYWxzZSxcbiAgICAgICAgaW5pdFRvcDogMCxcbiAgICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXG4gICAgICAgIHN1cHBvcnRTdGlja3k6IHN1cHBvcnRTdGlja3koKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkICgpIHtcbiAgICAgIHRoaXMuaW5pdFRvcCA9IHRoaXMuJGVsLm9mZnNldFRvcFxuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIH0sXG5cbiAgICB1cGRhdGVkICgpIHtcbiAgICAgIGlmICghdGhpcy5zdGlja3kpIHtcbiAgICAgICAgdGhpcy5pbml0VG9wID0gdGhpcy4kZWwub2Zmc2V0VG9wXG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFkZFN0aWNreSAoKSB7XG4gICAgICAgIHRoaXMuc3RpY2t5ID0gdHJ1ZVxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIuc3R5bGUud2lkdGggPSB0aGlzLiRlbC5vZmZzZXRXaWR0aCArICdweCdcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlci5zdHlsZS5oZWlnaHQgPSB0aGlzLiRlbC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMucGxhY2Vob2xkZXIsIHRoaXMuJGVsKVxuICAgICAgfSxcblxuICAgICAgcmVtb3ZlU3RpY2t5ICgpIHtcbiAgICAgICAgdGhpcy5zdGlja3kgPSBmYWxzZVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wbGFjZWhvbGRlcilcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnaGVhZGVyJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgICAgLy8gfVxuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6aGVhZGVyJywge1xuICAgICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2hlYWRlcicgfSxcbiAgICAgICAgb246IGNyZWF0ZUV2ZW50TWFwKHRoaXMpLFxuICAgICAgICByZWY6ICdoZWFkZXInLFxuICAgICAgICBzdGF0aWNDbGFzczogJ3dlZXgtaGVhZGVyIHdlZXgtY3QnLFxuICAgICAgICBjbGFzczogeyAnd2VleC1zdGlja3knOiB0aGlzLnN0aWNreSwgJ3dlZXgtaW9zLXN0aWNreSc6IHRoaXMuc3VwcG9ydFN0aWNreSB9LFxuICAgICAgICBzdGF0aWNTdHlsZTogZXh0cmFjdENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQgKHdlZXgpIHtcbiAgICB3ZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCdoZWFkZXInLCBnZXRIZWFkZXIod2VleCkpXG4gIH1cbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5mdW5jdGlvbiBnZXRMb2FkaW5nICgpIHtcbiAgY29uc3QgeyBleHRyYWN0Q29tcG9uZW50U3R5bGUgfSA9IHdlZXhcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd3ZWV4LWxvYWRpbmcnLFxuICAgIHByb3BzOiB7XG4gICAgICBkaXNwbGF5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3Nob3cnLFxuICAgICAgICB2YWxpZGF0b3IgKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIFsnc2hvdycsICdoaWRlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiAtMSxcbiAgICAgICAgdmlld0hlaWdodDogMFxuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCAoKSB7XG4gICAgICB0aGlzLnZpZXdIZWlnaHQgPSB0aGlzLiRlbC5vZmZzZXRIZWlnaHRcbiAgICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdoaWRlJykge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlld0hlaWdodFxuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIGhlaWdodCAodmFsKSB7XG4gICAgICAgIHRoaXMuJGVsLnN0eWxlLmhlaWdodCA9IGAke3ZhbH1weGBcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5ICh2YWwpIHtcbiAgICAgICAgaWYgKHZhbCA9PT0gJ2hpZGUnKSB7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgcHVsbGluZyAob2Zmc2V0WSA9IDApIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvZmZzZXRZXG4gICAgICB9LFxuICAgICAgcHVsbGluZ1VwIChvZmZzZXRZKSB7XG4gICAgICAgIHRoaXMuJGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0IDBzYFxuICAgICAgICB0aGlzLnB1bGxpbmcob2Zmc2V0WSlcbiAgICAgIH0sXG4gICAgICBwdWxsaW5nRW5kICgpIHtcbiAgICAgICAgdGhpcy4kZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgLjJzYFxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPj0gdGhpcy52aWV3SGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5wdWxsaW5nKHRoaXMudmlld0hlaWdodClcbiAgICAgICAgICB0aGlzLiRlbWl0KCdsb2FkaW5nJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnB1bGxpbmcoMClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldENoaWxkcmVuICgpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdzaG93Jykge1xuICAgICAgICAgIHJldHVybiBjaGlsZHJlblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZHJlbi5maWx0ZXIodm5vZGUgPT4ge1xuICAgICAgICAgIHJldHVybiB2bm9kZS5jb21wb25lbnRPcHRpb25zXG4gICAgICAgICAgICAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zLnRhZyAhPT0gJ2xvYWRpbmctaW5kaWNhdG9yJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgICB0aGlzLiRwYXJlbnQuX2xvYWRpbmcgPSB0aGlzXG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXNpZGUnLCB7XG4gICAgICAgIHJlZjogJ2xvYWRpbmcnLFxuICAgICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2xvYWRpbmcnIH0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1sb2FkaW5nIHdlZXgtY3QnLFxuICAgICAgICBzdGF0aWNTdHlsZTogZXh0cmFjdENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgICB9LCB0aGlzLmdldENoaWxkcmVuKCkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCAod2VleCkge1xuICAgIHdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ2xvYWRpbmcnLCBnZXRMb2FkaW5nKHdlZXgpKVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gZ2V0UmVmcmVzaCAod2VleCkge1xuICBjb25zdCB7IGV4dHJhY3RDb21wb25lbnRTdHlsZSB9ID0gd2VleFxuICBjb25zdCB7IGNyZWF0ZUV2ZW50IH0gPSB3ZWV4LnV0aWxzXG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnd2VleC1yZWZyZXNoJyxcbiAgICBwcm9wczoge1xuICAgICAgZGlzcGxheToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdzaG93JyxcbiAgICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBbJ3Nob3cnLCAnaGlkZSddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhc3REeTogMCxcbiAgICAgICAgdmlld0hlaWdodDogMCxcbiAgICAgICAgaGVpZ2h0OiAtMVxuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCAoKSB7XG4gICAgICB0aGlzLnZpZXdIZWlnaHQgPSB0aGlzLiRlbC5vZmZzZXRIZWlnaHRcbiAgICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdoaWRlJykge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlld0hlaWdodFxuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIGhlaWdodCAodmFsKSB7XG4gICAgICAgIHRoaXMuJGVsLnN0eWxlLmhlaWdodCA9IGAke3ZhbH1weGBcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5ICh2YWwpIHtcbiAgICAgICAgaWYgKHZhbCA9PT0gJ2hpZGUnKSB7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgcHVsbGluZyAob2Zmc2V0WSA9IDApIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvZmZzZXRZXG4gICAgICAgIHRoaXMuJGVtaXQoJ3B1bGxpbmdkb3duJywgY3JlYXRlRXZlbnQodGhpcywgJ3B1bGxpbmdkb3duJywge1xuICAgICAgICAgIGR5OiBvZmZzZXRZIC0gdGhpcy5sYXN0RHksXG4gICAgICAgICAgcHVsbGluZ0Rpc3RhbmNlOiBvZmZzZXRZLFxuICAgICAgICAgIHZpZXdIZWlnaHQ6IHRoaXMudmlld0hlaWdodFxuICAgICAgICB9KSlcbiAgICAgICAgdGhpcy5sYXN0RHkgPSBvZmZzZXRZXG4gICAgICB9LFxuICAgICAgcHVsbGluZ0Rvd24gKG9mZnNldFkpIHtcbiAgICAgICAgdGhpcy4kZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgMHNgXG4gICAgICAgIHRoaXMucHVsbGluZyhvZmZzZXRZKVxuICAgICAgfSxcbiAgICAgIHB1bGxpbmdFbmQgKCkge1xuICAgICAgICB0aGlzLiRlbC5zdHlsZS50cmFuc2l0aW9uID0gYGhlaWdodCAuMnNgXG4gICAgICAgIGlmICh0aGlzLmhlaWdodCA+PSB0aGlzLnZpZXdIZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLnB1bGxpbmcodGhpcy52aWV3SGVpZ2h0KVxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3JlZnJlc2gnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucHVsbGluZygwKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0Q2hpbGRyZW4gKCkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheSA9PT0gJ3Nob3cnKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHZub2RlLmNvbXBvbmVudE9wdGlvbnNcbiAgICAgICAgICAgICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnICE9PSAnbG9hZGluZy1pbmRpY2F0b3InXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuJHBhcmVudC5fcmVmcmVzaCA9IHRoaXNcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdhc2lkZScsIHtcbiAgICAgICAgcmVmOiAncmVmcmVzaCcsXG4gICAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAncmVmcmVzaCcgfSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXJlZnJlc2ggd2VleC1jdCcsXG4gICAgICAgIHN0YXRpY1N0eWxlOiBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICAgIH0sIHRoaXMuZ2V0Q2hpbGRyZW4oKSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0ICh3ZWV4KSB7XG4gICAgd2VleC5yZWdpc3RlckNvbXBvbmVudCgncmVmcmVzaCcsIGdldFJlZnJlc2god2VleCkpXG4gIH1cbn1cbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xubGV0IGV4dHJhY3RDb21wb25lbnRTdHlsZSwgZ2V0UmdiLCBsb29wQXJyYXksIGdldFN0eWxlU2hlZXRCeUlkXG5cbmNvbnN0IF9jc3MgPSBgXG4ud2VleC1yZWZyZXNoLWluZGljYXRvcixcbi53ZWV4LWxvYWRpbmctaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDFyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53ZWV4LXJlZnJlc2gtaW5kaWNhdG9yOmJlZm9yZSxcbi53ZWV4LWxvYWRpbmctaW5kaWNhdG9yOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiAnJztcbiAgZm9udC1zaXplOiAwLjE2cmVtO1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2VleC1zcGlubmVyIDEuMXMgaW5maW5pdGUgZWFzZTtcbiAgICAgICAgICBhbmltYXRpb246IHdlZXgtc3Bpbm5lciAxLjFzIGluZmluaXRlIGVhc2U7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB3ZWV4LXNwaW5uZXIge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0xLjNlbSAwZW0gMGVtICNmZmZmZmYsIDAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDEuMjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwLjg3NWVtIDAuODc1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwZW0gMS4yNWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTAuOWVtIDAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTEuM2VtIDBlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIC0wLjllbSAtMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICB9XG4gIDExLjI1JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0xLjNlbSAwZW0gMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgMC45ZW0gLTAuOWVtIDAgMGVtICNmZmZmZmYsIDEuMjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwLjg3NWVtIDAuODc1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwZW0gMS4yNWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTAuOWVtIDAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTEuM2VtIDBlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIC0wLjllbSAtMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0xLjNlbSAwZW0gMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgMC45ZW0gLTAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgMS4yNWVtIDBlbSAwIDBlbSAjZmZmZmZmLCAwLjg3NWVtIDAuODc1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwZW0gMS4yNWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTAuOWVtIDAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTEuM2VtIDBlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIC0wLjllbSAtMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTEuM2VtIDBlbSAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwLjllbSAtMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAxLjI1ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgMC44NzVlbSAwLjg3NWVtIDAgMGVtICNmZmZmZmYsIDBlbSAxLjI1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMC45ZW0gMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMS4zZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTEuM2VtIDBlbSAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwLjllbSAtMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAxLjI1ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgMC44NzVlbSAwLjg3NWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgMGVtIDEuMjVlbSAwIDBlbSAjZmZmZmZmLCAtMC45ZW0gMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMS4zZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cbiAgNjEuMjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTEuM2VtIDBlbSAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwLjllbSAtMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAxLjI1ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMC44NzVlbSAwLjg3NWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgMGVtIDEuMjVlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIC0wLjllbSAwLjllbSAwIDBlbSAjZmZmZmZmLCAtMS4zZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTEuM2VtIDBlbSAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwLjllbSAtMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAxLjI1ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMC44NzVlbSAwLjg3NWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMGVtIDEuMjVlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIC0wLjllbSAwLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIC0xLjNlbSAwZW0gMCAwZW0gI2ZmZmZmZiwgLTAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cbiAgODcuNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtMS4zZW0gMGVtIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDEuMjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwLjg3NWVtIDAuODc1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwZW0gMS4yNWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTAuOWVtIDAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgLTEuM2VtIDBlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIC0wLjllbSAtMC45ZW0gMCAwZW0gI2ZmZmZmZjtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHdlZXgtc3Bpbm5lciB7XG4gIDAlLFxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTEuM2VtIDBlbSAwZW0gI2ZmZmZmZiwgMC45ZW0gLTAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMS4yNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAuODc1ZW0gMC44NzVlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDBlbSAxLjI1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMC45ZW0gMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMS4zZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgLTAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgMTEuMjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTEuM2VtIDBlbSAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCAwLjllbSAtMC45ZW0gMCAwZW0gI2ZmZmZmZiwgMS4yNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAuODc1ZW0gMC44NzVlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDBlbSAxLjI1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMC45ZW0gMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMS4zZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTEuM2VtIDBlbSAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAwLjllbSAtMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCAxLjI1ZW0gMGVtIDAgMGVtICNmZmZmZmYsIDAuODc1ZW0gMC44NzVlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDBlbSAxLjI1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMC45ZW0gMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMS4zZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgLTAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cbiAgMzcuNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtMS4zZW0gMGVtIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIDEuMjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCAwLjg3NWVtIDAuODc1ZW0gMCAwZW0gI2ZmZmZmZiwgMGVtIDEuMjVlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIC0wLjllbSAwLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIC0xLjNlbSAwZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMC45ZW0gLTAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtMS4zZW0gMGVtIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDEuMjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAwLjg3NWVtIDAuODc1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCAwZW0gMS4yNWVtIDAgMGVtICNmZmZmZmYsIC0wLjllbSAwLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIC0xLjNlbSAwZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMC45ZW0gLTAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxuICA2MS4yNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtMS4zZW0gMGVtIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDEuMjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwLjg3NWVtIDAuODc1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAwZW0gMS4yNWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgLTAuOWVtIDAuOWVtIDAgMGVtICNmZmZmZmYsIC0xLjNlbSAwZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMC45ZW0gLTAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtMS4zZW0gMGVtIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAuOWVtIC0wLjllbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDEuMjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwLjg3NWVtIDAuODc1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwZW0gMS4yNWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgLTAuOWVtIDAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgLTEuM2VtIDBlbSAwIDBlbSAjZmZmZmZmLCAtMC45ZW0gLTAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxuICA4Ny41JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0xLjNlbSAwZW0gMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMC45ZW0gLTAuOWVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMS4yNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAuODc1ZW0gMC44NzVlbSAwIDBlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDBlbSAxLjI1ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAtMC45ZW0gMC45ZW0gMCAwZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAtMS4zZW0gMGVtIDAgMGVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgLTAuOWVtIC0wLjllbSAwIDBlbSAjZmZmZmZmO1xuICB9XG59XG5gXG5cbmZ1bmN0aW9uIGdldFN0eWxlU2hlZXQgKHNwaW5uZXJWbSkge1xuICBpZiAoc3Bpbm5lclZtLl9zdHlsZVNoZWV0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgc3Bpbm5lclZtLl9zdHlsZVNoZWV0ID0gZ2V0U3R5bGVTaGVldEJ5SWQoJ3dlZXgtY21wLWxvYWRpbmctaW5kaWNhdG9yJylcbn1cblxuZnVuY3Rpb24gc2V0S2V5ZnJhbWVDb2xvciAoc3Bpbm5lclZtLCB2YWwpIHtcbiAgZ2V0U3R5bGVTaGVldChzcGlubmVyVm0pXG4gIGNvbnN0IGtleWZyYW1lUnVsZXMgPSBjb21wdXRlS2V5RnJhbWVSdWxlcyh2YWwpXG4gIGNvbnN0IHJ1bGVzID0gc3Bpbm5lclZtLl9zdHlsZVNoZWV0LnJ1bGVzIHx8IHNwaW5uZXJWbS5fc3R5bGVTaGVldC5jc3NSdWxlc1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBydWxlcy5pdGVtKGkpXG4gICAgaWYgKChpdGVtLnR5cGUgPT09IENTU1J1bGUuS0VZRlJBTUVTX1JVTEVcbiAgICAgICAgICB8fCBpdGVtLnR5cGUgPT09IENTU1J1bGUuV0VCS0lUX0tFWUZSQU1FU19SVUxFKVxuICAgICAgICAmJiBpdGVtLm5hbWUgPT09ICd3ZWV4LXNwaW5uZXInKSB7XG4gICAgICBjb25zdCBjc3NSdWxlcyA9IGl0ZW0uY3NzUnVsZXNcbiAgICAgIGZvciAobGV0IGogPSAwLCBtID0gY3NzUnVsZXMubGVuZ3RoOyBqIDwgbTsgaisrKSB7XG4gICAgICAgIGNvbnN0IGtleWZyYW1lID0gY3NzUnVsZXNbal1cbiAgICAgICAgaWYgKGtleWZyYW1lLnR5cGUgPT09IENTU1J1bGUuS0VZRlJBTUVfUlVMRVxuICAgICAgICAgIHx8IGtleWZyYW1lLnR5cGUgPT09IENTU1J1bGUuV0VCS0lUX0tFWUZSQU1FX1JVTEUpIHtcbiAgICAgICAgICBrZXlmcmFtZS5zdHlsZS5ib3hTaGFkb3cgPSBrZXlmcmFtZVJ1bGVzW2pdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZUtleUZyYW1lUnVsZXMgKHJnYikge1xuICBpZiAoIXJnYikge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHNjYWxlQXJyID0gW1xuICAgICcwZW0gLTEuM2VtIDBlbSAwZW0nLFxuICAgICcwLjllbSAtMC45ZW0gMCAwZW0nLFxuICAgICcxLjI1ZW0gMGVtIDAgMGVtJyxcbiAgICAnMC44NzVlbSAwLjg3NWVtIDAgMGVtJyxcbiAgICAnMGVtIDEuMjVlbSAwIDBlbScsXG4gICAgJy0wLjllbSAwLjllbSAwIDBlbScsXG4gICAgJy0xLjNlbSAwZW0gMCAwZW0nLFxuICAgICctMC45ZW0gLTAuOWVtIDAgMGVtJ11cbiAgY29uc3QgY29sb3JBcnIgPSBbXG4gICAgJzEnLFxuICAgICcwLjInLFxuICAgICcwLjInLFxuICAgICcwLjInLFxuICAgICcwLjInLFxuICAgICcwLjInLFxuICAgICcwLjUnLFxuICAgICcwLjcnXS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAncmdiYSgnICsgcmdiLnIgKyAnLCcgKyByZ2IuZyArICcsJyArIHJnYi5iICsgJywnICsgZSArICcpJ1xuICAgIH0pXG4gIGNvbnN0IHJ1bGVzID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2FsZUFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRtcENvbG9yQXJyID0gbG9vcEFycmF5KGNvbG9yQXJyLCBpLCAncicpXG4gICAgcnVsZXMucHVzaChzY2FsZUFyci5tYXAoZnVuY3Rpb24gKHNjYWxlU3RyLCBpKSB7XG4gICAgICByZXR1cm4gc2NhbGVTdHIgKyAnICcgKyB0bXBDb2xvckFycltpXVxuICAgIH0pLmpvaW4oJywgJykpXG4gIH1cbiAgcmV0dXJuIHJ1bGVzXG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NTdHlsZSAodm0pIHtcbiAgY29uc3Qgc3R5bGUgPSBleHRyYWN0Q29tcG9uZW50U3R5bGUodm0pXG4gIGNvbnN0IGNvbG9yID0gc3R5bGUuY29sb3JcbiAgY29uc3QgcmdiID0gY29sb3IgJiYgZ2V0UmdiKGNvbG9yKVxuICBpZiAocmdiKSB7XG4gICAgc2V0S2V5ZnJhbWVDb2xvcih2bSwgcmdiKVxuICB9XG4gIHJldHVybiBzdHlsZVxufVxuXG5jb25zdCBsb2FkaW5nSW5kaWNhdG9yID0ge1xuICBuYW1lOiAnd2VleC1sb2FkaW5nLWluZGljYXRvcicsXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIHRoaXMud2VleFR5cGUgPSAnbG9hZGluZy1pbmRpY2F0b3InXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ21hcmsnLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2xvYWRpbmctaW5kaWNhdG9yJyB9LFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWxvYWRpbmctaW5kaWNhdG9yIHdlZXgtY3QnLFxuICAgICAgc3RhdGljU3R5bGU6IHByb2Nlc3NTdHlsZSh0aGlzKVxuICAgIH0pXG4gIH0sXG4gIF9jc3Ncbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0ICh3ZWV4KSB7XG4gICAgZXh0cmFjdENvbXBvbmVudFN0eWxlID0gd2VleC5leHRyYWN0Q29tcG9uZW50U3R5bGVcbiAgICBnZXRSZ2IgPSB3ZWV4LnV0aWxzLmdldFJnYlxuICAgIGxvb3BBcnJheSA9IHdlZXgudXRpbHMubG9vcEFycmF5XG4gICAgZ2V0U3R5bGVTaGVldEJ5SWQgPSB3ZWV4LnV0aWxzLmdldFN0eWxlU2hlZXRCeUlkXG4gICAgd2VleC5yZWdpc3RlckNvbXBvbmVudCgnbG9hZGluZy1pbmRpY2F0b3InLCBsb2FkaW5nSW5kaWNhdG9yKVxuICB9XG59XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IGxpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHNjcm9sbGVyIGZyb20gJy4vc2Nyb2xsZXInXG5pbXBvcnQgd2F0ZXJmYWxsIGZyb20gJy4vd2F0ZXJmYWxsJ1xuaW1wb3J0IGNlbGwgZnJvbSAnLi9jZWxsJ1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBsb2FkaW5nIGZyb20gJy4vbG9hZGluZydcbmltcG9ydCByZWZyZXNoIGZyb20gJy4vcmVmcmVzaCdcbmltcG9ydCBsb2FkaW5nSW5kaWNhdG9yIGZyb20gJy4vbG9hZGluZy1pbmRpY2F0b3InXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIGxpc3QsXG4gIHNjcm9sbGVyLFxuICB3YXRlcmZhbGwsXG4gIGNlbGwsXG4gIGhlYWRlcixcbiAgbG9hZGluZyxcbiAgcmVmcmVzaCxcbiAgbG9hZGluZ0luZGljYXRvclxuXVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQgKHdlZXgpIHtcbiAgICBtb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZCkge1xuICAgICAgd2VleC5pbnN0YWxsKG1vZClcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgd2VleCBmcm9tICcuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlJ1xuXG5pbXBvcnQgZGl2IGZyb20gJy4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9kaXYnXG5pbXBvcnQgdGV4dCBmcm9tICcuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCBpbWFnZSBmcm9tICcuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvaW1hZ2UnXG5pbXBvcnQgc2Nyb2xsYWJsZSBmcm9tICcuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZSdcblxud2VleC5pbnN0YWxsKGRpdilcbndlZXguaW5zdGFsbCh0ZXh0KVxud2VleC5pbnN0YWxsKGltYWdlKVxud2VleC5pbnN0YWxsKHNjcm9sbGFibGUpXG5cbmV4cG9ydCBkZWZhdWx0IHdlZXhcbiJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwiaXNPYmplY3QiLCJyZXF1aXJlJCQxIiwiZG9jdW1lbnQiLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsImRQIiwicmVxdWlyZSQkNCIsImdsb2JhbCIsIiRleHBvcnQiLCJ0b1N0cmluZyIsIklPYmplY3QiLCJ0b0ludGVnZXIiLCJtaW4iLCJ0b0lPYmplY3QiLCJkZWZpbmVkIiwicmVxdWlyZSQkNSIsImFyZ3VtZW50cyIsImNvZiIsImFuT2JqZWN0IiwiZ2V0S2V5cyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJQUk9UT1RZUEUiLCJoYXMiLCJUQUciLCJjcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsInRvT2JqZWN0IiwicmVxdWlyZSQkOSIsInJlcXVpcmUkJDgiLCJyZWRlZmluZSIsInJlcXVpcmUkJDciLCJoaWRlIiwicmVxdWlyZSQkNiIsIkl0ZXJhdG9ycyIsIklURVJBVE9SIiwiQXJyYXlQcm90byIsImNsYXNzb2YiLCJhRnVuY3Rpb24iLCJjdHgiLCJwcm9jZXNzIiwiUHJvbWlzZSIsImlzTm9kZSIsIlNQRUNJRVMiLCJMSUJSQVJZIiwicmVxdWlyZSQkMTciLCJyZXF1aXJlJCQxNiIsInJlcXVpcmUkJDE1IiwicmVxdWlyZSQkMTQiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDEyIiwicmVxdWlyZSQkMTEiLCJyZXF1aXJlJCQxMCIsIlR5cGVFcnJvciIsImNvbnN0IiwibGliIiwibGV0IiwiZW52IiwiaSIsImluaXQiLCJleHRlbmQiLCJfdWlkIiwidmFsdWVzIiwiY2FjaGUiLCJpbml0Vmlld3BvcnQiLCJ3ZWV4IiwidXRpbHMuYmluZCIsInRoaXMiLCJ1dGlscy5hcHBlbmRDc3MiLCJoYW5kbGVyIiwiY29yZSIsImJhc2UiLCJfY3NzIiwiZXh0cmFjdENvbXBvbmVudFN0eWxlIiwiY3JlYXRlRXZlbnRNYXAiLCJyZWN0Iiwic2Nyb2xsYWJsZSIsImNvbHVtbkRvbSIsImdldFJnYiIsImxvb3BBcnJheSIsImdldFN0eWxlU2hlZXRCeUlkIiwibGlzdCIsImxvYWRpbmdJbmRpY2F0b3IiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLEFBRUEsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J6QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFBO0FBQ3pCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUE7QUFDL0IsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUE7QUFDakMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFBO0FBQ2pCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQTs7Ozs7Ozs7OztBQVVsQixTQUFTLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7RUFDbkMsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFBO0VBQ1osT0FBTyxFQUFFLEVBQUU7SUFDVCxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRTtNQUNqQyxPQUFPLEVBQUU7S0FDVjtJQUNELEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFBO0dBQ25CO0VBQ0QsT0FBTyxJQUFJO0NBQ1o7Ozs7Ozs7OztBQVNELFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ3ZDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7RUFDekMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBOztFQUVsQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtJQUM3QixLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtNQUNuQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3BCO0dBQ0Y7Ozs7OztFQU1ELEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBOztFQUVuQixPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO0NBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CRCxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0VBQzVDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtFQUN4RSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtFQUMxQixJQUFJLFNBQVMsR0FBRztJQUNkLEVBQUU7TUFDQSxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzdCLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDL0IsRUFBRTtNQUNBLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDN0IsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7O0VBRWxDLE9BQU87SUFDTCxNQUFNLEVBQUUsTUFBTTtJQUNkLEtBQUssRUFBRSxLQUFLO0lBQ1osU0FBUyxFQUFFLFNBQVM7SUFDcEIsTUFBTSxFQUFFO01BQ04sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNuRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNsRSxDQUFDLENB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LENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3BELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbkMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTs7SUFFeEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtNQUNaLE1BQU07S0FDUDs7SUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtNQUN0QixPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUE7S0FDdkM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtNQUNyQixPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUE7S0FDckM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtNQUN0QixPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtLQUN0QjtJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO01BQ3RCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0tBQ3RCO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7TUFDckIsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7S0FDckI7O0lBRUQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUE7SUFDekMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFBO0lBQzNELElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQTs7SUFFM0QsSUFBSSxlQUFl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
