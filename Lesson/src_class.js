const carclass = class {
    constructor(x, y) { /* コンストラクタ */
        this.x = x
        this.y = y
    }

    sum() {  /* メソッド */
      return this.x + this.y  /* x と y を足した値を返却する */
    }

    get getX(){
        return this.x
    }

    set setY(y){
         this.y = y
    }
  }

var car = new carclass(100, 200)
var sum = car.sum()
console.log(sum)

car.setY = 300
var val = car.getX
console.log(val)

var sum2 = car.sum()
console.log(sum2)

/*
How to compile and Run JavaScript on Terminal 
1. node [FileName].js 

*/
