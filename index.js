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

function show() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><h3>' + commit.commit.author.name + ' (' + commit.author.login + ')</h3>' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = commitsList
}

function getCommits(el) {
  const repoName = el.dataset.repository
  const uri = rootURL + "/repos/" + el.dataset.username + "/" + repoName + "/commits"
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("load", displayCommits)
  xhr.open("GET", uri)
  xhr.send()
}





function displayError() {
  document.getElementById("errors").innerHTML = "I'm sorry, there's been an error. Please try again."
}
