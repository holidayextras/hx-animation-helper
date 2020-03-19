'use strict';
function hxAnimationHelper (target, animationClasses) {
  if (!target || !animationClasses) return null

  var element = document.querySelector(target) || null;
  if (!element) return null

  var transitionEvent = function () {
    var t, el = document.createElement("fakeElement")

    var transitions = {
      "animation": "animationend",
      "OAnimation": "oAnimationEnd",
      "MozAnimation": "animationend",
      "WebkitAnimation": "webkitAnimationEnd",
      "transition":"transitionend",
      "OTransition":"oTransitionEnd",
      "MozTransition":"transitionend",
      "WebkitTransition":"webkitTransitionEnd"
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }

  var waitForAnimations = transitionEvent();
  element.toggle(animationClasses);

  waitForAnimations && e.addEventListener(waitForAnimations, function() {
    element.toggle(animationClasses);
  });
}

module.exports = hxAnimationHelper
