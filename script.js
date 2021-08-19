let descriptions =["Bored", "Smart", "Busy", "Pizza", "Playful", "Focus", "Noob", "Fortune", "Full","Free", "Focus", "First"];
let btn = document.getElementById('feeling-lucky');

 // changed text in button when hover over.
btn.addEventListener('mouseenter', event =>{
    let selectRandElem = randomNoRepeats(descriptions);

    btn.textContent = `I am Feeling ${selectRandElem()}`;
    btn.style.fontSize =  '12px';
 

});

btn.addEventListener('mouseleave', e => {
    btn.textContent = "I am Feeling Lucky";
    btn.style.fontSize =  '12px';
});


 /*
From stackoverflow: https://stackoverflow.com/a/17891411
*/
function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

 