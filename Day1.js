// Day1 Code (Page 1 ~ 66 )

/* --------------------------------------------------------------------------------------------------- */
// let Days = []
// Days = ['일','월','화','수','목','금','토']

// for(let i=1; i<Days.length; i++){
//   console.log(Days[i])
// } 
//  for 루프문을 사용해서 Days 인덱스의 전체원소 출력

/* --------------------------------------------------------------------------------------------------- */

// Fibonacci 수열의 처음 20개 숫자를 구하는 코드
// Fibonacci 수열은 1과 2로시작하고 이후의 숫자는 앞의 두 숫자의 합
// let Fibonacci = [] // 1
// Fibonacci[1] = 1 // 2
// Fibonacci[2] = 2 // 3

// for(let i = 3; i < 20; i++){
//   Fibonacci[i] = Fibonacci[i-1] + Fibonacci[i-2] //4
// }

// for(let i = 1; i<Fibonacci.length; i++){ //5
//   console.log(Fibonacci[i]) //6
// } 

// 1에서 배열을 선언 2,3에서 피보나치의수열 첫숫자를 배열의 두번째(1),세번째(2)원소에 할당
// 피보나치의 수열의 세번째부터 스무 번째까지 숫자를 찾는다 
// 루프문으로 배열의 이전 원소를 더하고 그결과를 현재 원소에 셋팅한다 (4)
// 완성된 수열을 콘솔에서 각각찍기위해 처음부터 루프를 돌려 5->6 형식으로 출력한다

/* --------------------------------------------------------------------------------------------------- */

// javascript에는 Array.unshift라는 메소드가있어 배열 앞부분에 삽입할 값들을 넘겨준다
// 이는 push 메소드가 마지막위치부터 추가하기때문이다
// push,pop은 배열로 기본스택자료구조를 모방한 메소드이다 (배열의 마지막부분을 추가,제거)
//unshift,shift 는 배열로 기본 큐 자료 구조를 모방한 메소드이다 (배열의 앞부분을 추가,제거)

// splice는 두번째 인자값으로 0을 넘기면 원소를 추가하겠다는 의미다 
// number.splice(5,0,1,2) --> nubmer배열의 index5번부터 0개의 인자를 제거하고 1,2를 추가하겠다는뜻

/* --------------------------------------------------------------------------------------------------- */

// 2,3일동안 시간별 온도를 측정한다
// 2일동안 측정한 온도는 다음과 같이 간단히 나타낼 수 있다.
let avTemp = []
avTemp[0] = [72,75,79,79,81,81]
avTemp[1] = [81,79,75,75,73,72]
// 이는 matirx (행렬)을 이용해 2차원배열을 만든것이다
// 1일째


// 전체의 행과 열을 순회 하기위해 for루프를 중첩시킨다

// function printMatrix(x){
//   for(let i=0; i<x.length; i++){
//     for(let j=0; j<x[i].length; j++){
//       console.log(x[i][j])
//     }
//   }
// }

// printMatrix(avTemp)
// 2차원 배열의 모든값을 출력한다
// 3차원 이상의 다차원 배열도 가능하다 
/* --------------------------------------------------------------------------------------------------- */
// Day1 Code (Page 1 ~ 66 )