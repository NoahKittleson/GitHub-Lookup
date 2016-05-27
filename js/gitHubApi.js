var apiKey = require('./../.env').apiKey;

exports.gitUser = function(username, displayFunction) {
  $.get('http://api.github.com/users/' + username  + '/repos?page=1&per_page=100&access_token=' + apiKey).then(function(response)  {
    console.log(response);
    displayFunction(username, response.length);

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
}
