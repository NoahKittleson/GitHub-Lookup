var gitUser = require('./../js/gitHubApi.js').gitUser;

var displayInfo = function(username, profileData) {
  $('.showProfile').text("Here are " + username + "'s first " + profileData + " repositories:");
}


$(document).ready(function(){
  $(".userSearch").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    gitUser(username, displayInfo);
  });
});
