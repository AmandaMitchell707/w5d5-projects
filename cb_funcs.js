class Clock {
  constructor(){
    let d = new Date(); // for now
    this.hours = d.getHours(); // => 9
    this.minutes = d.getMinutes(); // =>  30
    this.seconds = d.getSeconds();

    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime(){
    // if (this.hours < 10) {
    //   printHours = "0" + this.hours;
    // }
    // if (this.minutes < 10){
    //   printMinutes = "0" + this.mintues;
    // }
    // if (this.seconds < 10){
    //   printSeconds = '0' + this.seconds;
    // }
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick(){
    this.incrementSeconds();
    this.printTime();
  }

  incrementSeconds() {
    this.seconds ++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.incrementMinutes();
    }
  }

  incrementMinutes() {
    this.minutes ++;
    if (this.minutes === 60) {
      this.minutes = 0;
      this.incrementHours();
    }
  }

  incrementHours() {
    this.hours ++;
    if (this.hours === 24) {
      this.hours = 0;
    }
  }
}

// const clock = new Clock();

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Give me a number', function(res){
      const response = parseInt(res);
      sum += response;
      numsLeft --;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function absurdBubbleSort(arr, sortCompletionCallback) {
  let madeAnySwaps = false;

  function outerBubbleSortLoop (madeAnySwaps) {
    if (madeAnySwaps) {
      console.log(arr);
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
  return arr;
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
    console.log(isGreaterThan);
      if (isGreaterThan){
        console.log('we\'re in the if');
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Please compare ${el1} to ${el2} with > or <`, function(res) {
    if (res === '>') {
      console.log(`You inputed ${res}`);
      callback(true);
    } else if (res === '<') {
      console.log(`You inputed ${res}`);
      callback(false);
    } else {
      console.log('you goofed up');
    }
  });
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// innerBubbleSortLoop([3,2,1], 0, false, function(bool) {
//   console.log(`${bool}`);
// });

Function.prototype.myBind = function(context) {
  return () => this.apply(context);
};
