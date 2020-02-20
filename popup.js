function generateFile() {
  chrome.tabs.executeScript({
    file: 'generate.js',
  });
}
document.getElementById('generate').addEventListener('click', myAction);

function myAction(input) {
  console.log('input value is : ' + input.value);
  alert('The entered data is : ' + input.value);
  // do processing with data
  // you need to right click the extension icon and choose "inspect popup"
  // to view the messages appearing on the console.
}
