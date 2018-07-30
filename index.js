function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const ranked = document.getElementById('app').querySelectorAll('ul.ranked-list li'); // returns a node list
  
  for (let i=0; i<ranked.length; i++) {
    lis[i].innerHTML = ()
  }
}