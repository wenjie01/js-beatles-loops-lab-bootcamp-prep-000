function theBeatlesPlay(musicians,instruments) {
  var array = [];
  for (var i = 0; i < instruments.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var arrays = [];
  var i = 0
  while ( i < facts.length) {
    arrays.push(`${facts[i]}!!!`)
    i++
  }
  return arrays;
}

function iLoveTheBeatles(number){
  var item =[];
  var i = 0;
  do {
    item.push('I love the Beatles!');
    return item;
  }
  while ( i < 15 );
  
}
