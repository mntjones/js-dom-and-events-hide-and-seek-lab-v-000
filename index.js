function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const ranked = document.getElementById('app').querySelectorAll('ul.ranked-list li'); // returns a node list
  
  for (let i=0; i<ranked.length; i++) {
    ranked[i].innerHTML = (parseInt(ranked[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  const grand = document.querySelector('#grand-node');
  let hold = 'yes';
  while (hold === 'yes') {
    
  }
}