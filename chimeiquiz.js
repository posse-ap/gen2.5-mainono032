"use strict"

const correctChoice = document.getElementById('correctChoice');

function correctChange(){
correctChoice.classList.add('option_correct_after')
wrongChoice.classList.add('cantClick')

correctBox.style.display = 'block';

};

const wrongChoice = document.getElementById('wrongChoice');

function wrongChange(){
wrongChoice.classList.add('option_wrong_after')
correctChoice.classList.add('cantClick')

}

const correctBox=document.getElementById('correctBox')
const wrongBox=document.getElementById('wrongBox')