import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.round = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },

  roundIsAt(value) {
    return Template.instance().round.get() === value;
  },

  counterIsGreaterThan(value) {
    return Template.instance().counter.get() >= value;
  },

  counterIsAt(value) {
    return Template.instance().counter.get() === value;
  }

});

Template.hello.events({
  'click button'(event, instance) {
    var counter = instance.counter.get() + 1;
    if (counter > 4) {
      counter = 0;
      var round = instance.round.get() + 1;
      if (round > 2)
        round = 0;
      instance.round.set(round);
    }
    // increment the counter when button is clicked
    instance.counter.set(counter);
  },
});
