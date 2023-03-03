const mongoose = require('mongoose');
const Medium = require('../../models/Medium');

let deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
  let arTitle = document.querySelector('.title').innerText;
  Medium.deleteOne({title: arTitle});
});