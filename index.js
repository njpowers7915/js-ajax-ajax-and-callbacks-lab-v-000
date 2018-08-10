$(document).ready(function (){
});

function searchRepositories(searchTerms) {

}

$.get(searchTerms, searchRepositories()).fail(displayError());

function displayError (error) {
  return error
}
