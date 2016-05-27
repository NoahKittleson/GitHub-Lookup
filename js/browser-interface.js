var gitUser = require('./../js/gitHubApi.js').gitUser;

var displayInfo = function(username, profileData, pageNo) {
  $('.showProfile').text("Here is page " + pageNo + " of " + username + "'s repositories.  Showing " + profileData + " results.");
}


$(document).ready(function(){
  $(".userSearch").submit(function(event) {
    event.preventDefault();
    $(".navArrows").show();
    var username = $("#username").val();
    gitUser(username, displayInfo, 1);
  });
});
