$(document).ready(function (){
});

function searchRepositories(searchTerms) {

}

$.get(searchTerms, searchRepositories()).fail(function(error) {
  console.log('Something went wrong: ' + error);
});

function displayError (error) {
  return error
}
