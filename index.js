const rootURL = "https://api.github.com/search/repositories?q="

function searchRepositories(searchTerms) {
  const name = document.getElementById("username").value
  const uri = rootURL + searchTerms
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("load", displayRepositories)
  xhr.open("GET", uri)
  xhr.send()
  return false;
}
function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  const repoList = "<ul>" + repos.map(repo => {
    const dataUsername = 'data-username="' + repo.owner.login + '"'
    const dataRepoName = 'data-repository="' + repo.name + '"'
    return(`
          <li>
            <h2>${repo.name}</h2>
            <a href="${repo.html_url}">${repo.html_url}</a><br>
            <a href="#" ${dataRepoName} ${dataUsername} onclick="getCommits(this)">Get Commits</a><br>
            <a href="#" ${dataRepoName} ${dataUsername} onclick="getBranches(this)">Get Branches</a></li>
          </li>`
          )
  }).join('') + "</ul>";
  document.getElementById("repositories").innerHTML = repoList
}









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
