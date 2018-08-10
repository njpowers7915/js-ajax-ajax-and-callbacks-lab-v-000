const rootURL = "https://api.github.com/search/repositories?q="

$.get(rootURL, searchRepositories(searchTerms)).fail(displayError());

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



function displayError() {
  console.log("I'm sorry, there's been an error. Please try again.")
}
