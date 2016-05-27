var apiKey = require('./../.env').apiKey;

exports.gitUser = function gitUser(username, displayFunction, page) {
  $.get('http://api.github.com/users/' + username + '/repos?page=' + page + '&per_page=40&access_token=' + apiKey).then(function(response)  {
    console.log("page " + page);
    displayFunction(username, response.length, page);

    response.forEach(function(repo) {
      $('.showProfile').append("<h3>" + repo.name + "</h3>" +
                               "<div class='container'>" +
                               "<p>Description: " + repo.description + "</p>" +
                               "<p>Language: " + repo.language + "</p>" +
                               "<p>Size: " + repo.size + "</p>" +
                               "</div><hr>");
    });


  }).fail(function(error) {
    $('.showProfile').text(error.responseJSON.message);
  });

  $("#more").unbind();
  $("#more").click(function() {
    gitUser(username, displayFunction, page+1);
  });
  $("#less").unbind();
  $("#less").click(function() {
    gitUser(username, displayFunction, page-1);
  });
}
