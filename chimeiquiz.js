"use strict"

let optionTextArray = [
  ['たかなわ', 'こうわ', 'たかわ'],
  ['かめいど', 'かめど', 'かめと'],
  ['こうじまち', 'かゆまち', 'おかとまち'],
  ['おなりもん', 'ごせいもん', 'おかどもん'],
  ['とどろき', 'たたら', 'たたりき'],
  ['しゃくじい', 'いじい', 'せきこうい'],
  ['ぞうしき', 'ざっしき', 'ざっしょく'],
  ['おかちまち', 'みとちょう', 'ごしろちょう'],
  ['ししぼね', 'しこね', 'ろっこつ'],
  ['こぐれ', 'こしゃく', 'こばく'],

]

let images = [
  "https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png",
  "https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png",
  "https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png"

]

for (let i = 0; i < 10; i++) {
  let content = `<div class="container">
    <h1 class="title">${i + 1}. この地名はなんて読む？</h1>
    <img src="${images[i]}">
    <ul>
      <li id="correctChoice_${i}" class="option" onclick="correctChange(${i})">${optionTextArray[i][0]}</li>
      <li id="wrongChoice1_${i}" class="option" onclick="wrongChange(${i})">${optionTextArray[i][1]}</li>
      <li id="wrongChoice2_${i}" class="option"onclick="wrongChange2(${i})">${optionTextArray[i][2]}</li>
    </ul>

    <div id="correctBox_${i}" class="correct_box">
      <p class="congrats">正解</p>
      <p>正解は${optionTextArray[i][0]}です</p>

    </div>

    <div id="wrongBox_${i}" class="wrong_box">
      <p class="booo">不正解</p>
      <p>正解は${optionTextArray[i][0]}です</p>
    </div>

  </div>`
  document.write(content)

}

const correctBox = document.getElementById('correctBox')
const wrongBox = document.getElementById('wrongBox')

function correctChange(x) {
  const correctChoice = document.getElementById(`correctChoice_${x}`);
  const wrongChoice1 = document.getElementById(`wrongChoice1_${x}`);
  const wrongChoice2 = document.getElementById(`wrongChoice2_${x}`);
  wrongChoice1.classList.add('cantClick')
  correctChoice.classList.add('option_correct_after')
  wrongChoice2.classList.add('cantClick')
  document.getElementById(`correctBox_${x}`).style.display = 'block';

};



function wrongChange(x) {
  const correctChoice = document.getElementById(`correctChoice_${x}`);
  const wrongChoice1 = document.getElementById(`wrongChoice1_${x}`);
  const wrongChoice2 = document.getElementById(`wrongChoice2_${x}`);
  wrongChoice1.classList.add('cantClick')
  wrongChoice2.classList.add('cantClick')
  wrongChoice1.classList.add('option_wrong_after')
  correctChoice.classList.add('cantClick')
  document.getElementById(`wrongBox_${x}`).style.display = 'block';
  correctChoice.classList.add('option_correct_after')
}

function wrongChange2(x) {
  const correctChoice = document.getElementById(`correctChoice_${x}`);
  const wrongChoice1 = document.getElementById(`wrongChoice1_${x}`);
  const wrongChoice2 = document.getElementById(`wrongChoice2_${x}`);
  wrongChoice1.classList.add('cantClick')
  wrongChoice2.classList.add('cantClick')
  wrongChoice2.classList.add('option_wrong_after')
  correctChoice.classList.add('cantClick')
  document.getElementById(`wrongBox_${x}`).style.display = 'block';
  correctChoice.classList.add('option_correct_after')
}