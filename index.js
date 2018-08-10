const rootURL = "https://api.github.com/search/repositories?q="

$(document).ready(searchRepositories());


$.get(rootURL, searchRepositories(searchTerms)).fail(displayError());

function searchRepositories(searchTerms) {
  $(document).ready(function() {
    $.get("https://api.github.com/search/repositories?q=", function(searchTerms) {
      const uri = "https://api.github.com/search/repositories?q=" + searchTerms
      const xhr = new XMLHttpRequest()
      //xhr.addEventListener("load", )


      $("#results").html(response);
    })
  })
}

function showCommits() {
  $(document).ready(function() {
    $.get(searchTerms, function(response) {
      $("#details").html(response);
    })
  })
}





function displayError() {
  console.log("I'm sorry, there's been an error. Please try again.")
}
