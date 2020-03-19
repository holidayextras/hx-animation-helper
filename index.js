'use strict';
function hxAnimationHelper (target, animationClasses) {
  if (!target || !animationClasses) return null
  var transitionEvent = function () {
    var t, el = document.createElement("fakeelement")

	  var transitions = {
      "animation": "animationend",
      "OAnimation": "oAnimationEnd",
      "MozAnimation": "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in transitions){
 	    if (el.style[t] !== undefined){
  	    return transitions[t];
      }
    }
  }
  target.toggleClass(animationClasses)
  target.one(transitionEvent(), () => {
    target.toggleClass(animationClasses)
  })
}

module.exports = hxAnimationHelper
