// const { Generator } = require('./generate');
document.addEventListener('DOMContentLoaded', documentEvents, false);

function documentEvents() {
  document.getElementById('generate').addEventListener('click', myAction);
}

function myAction() {
  const className = document.getElementById('model.name').value;
  const fileName = document.getElementById('model.fileName').value;
  const pathNamePrifix = document.getElementById('model.pathNamePrefix').value;
  const author = document.getElementById('model.authorName').value;
  if (className === '') {
    alert('Please fill required fields');
  } else {
    alert(`The entered data is :  ${className},${fileName},${pathNamePrifix},${author}`);
  }
}
