$(document).ready(function (){
});

function showCommits() {
  $(document).ready(function() {
    $.get(searchTerms, function(response) {
      $("#details").html(response);
    })
  })
}

function searchRepositories(searchTerms) {
  $(document).ready(function() {
    $.get(searchTerms, function(response) {
      $("#results").html(response);
    })
  })
}

$.get(searchTerms, searchRepositories()).fail(displayError());

function displayError() {
  console.log("I'm sorry, there's been an error. Please try again.")
}
