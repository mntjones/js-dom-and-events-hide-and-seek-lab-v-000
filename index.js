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
  let grand = document.querySelector('#grand-node');
  let child = grand.children[0];

  while (child) {
    grand = child;
    child = grand.children[0]
  }

  return grand
  
  // we want: '#grand-node div div div div'
}