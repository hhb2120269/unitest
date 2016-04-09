/**
 * Created by 贺弘博 on 2016/3/7.
 */
angular.module('starter').animation('.name-of-animation)',function(<injectables>){

  return {
    event: function(elem,done) {
      //logic of animation
      done();
    }
  };
});
