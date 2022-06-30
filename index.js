function hoverg(element) {
    element.setAttribute('src', 'gearIconBlue.svg');
}

function unhoverg(element) {
    element.setAttribute('src', 'gearIcon.svg');
}
function hovers(element) {
    element.setAttribute('src', 'userIconBlue.svg');
}
function unhovers(element) {
    element.setAttribute('src', 'userIcon.svg')
}
function show(shown, hidden, hidden1, hidden2, hidden3) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  document.getElementById(hidden1).style.display='none';
  document.getElementById(hidden2).style.display='none';
  document.getElementById(hidden3).style.display='none';
  return false;
}
