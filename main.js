function data(){
    var x = 10
    var y = 20
    if (x === 10){
        console.log('x = '+ x);
    }
}


function AF(){
    answer = (x , y) => x = y
    console.log('answer is ' + answer(x , y));
}

function docc(){
    const doc = {
        Name     : 'Safe',
        Fname    : 'Setthasat',
        Lname    : 'Sirikomosning',
        BrithDay : '22/2/2550',
        ID       :  12916
    };
}

function arr(){
    //const Ex1 = [3,4]
    //const Ex2 = [1,2,Ex1]
    //console.log(Ex2)
    //output : [1,2,[3,4]](array length = 3)
    const son = ['safe','sui','sun']
    const family = ['Papa','mom',...son]
    console.log(family)
};

function LV(){
    {
        let x  = 10  //chai dan nok block mai dai
        var y = 20   //chai dai tang file
        const z = 30 //mai sa mard change data dai (chai dan nok block kor mai dai)
    };
    console.log("Data check => " + y);
}

function dude(){
    let user = prompt("Please enter your name");
    if (user != null) {
      console.log('hello ' + user)
    } 
}

function wh(){ 
    //while ja tum pai leryๆ jon kua condition ja pen jing
    let i = 0
    while(i <= 20){
        console.log(i)
        i++   
    }
}

console.log("Hello world");
wh()


//NaN = Not a Number
