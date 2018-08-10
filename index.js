$(document).ready(function (){
});

function searchRepositories(searchTerms) {
  $(document).ready(function() {
    $.get(searchTerms, function(response) {
      $("#results").html(response);
    })
  })
}

$.get(searchTerms, searchRepositories()).fail(displayError());

function displayError (error) {
  return error
}
