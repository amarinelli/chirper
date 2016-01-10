// app/components/chirps-list/component.js

import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['card'],
  chirpsSorting: ['createdAt:desc'],
  sortedChirps: Ember.computed.sort('chirps', 'chirpsSorting')
});
