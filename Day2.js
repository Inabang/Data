// Day2 Code (Page 66~98 )

/* --------------------------------------------------------------------------------------------------- */


// 배열합치기
// concat메소드

// let zero = 0
// let plusNum = [1,2,3]
// let orNum = [-3,-2,-1]
// let numbers = orNum.concat(zero,plusNum)

// console.log(numbers)
// 이는 concat 메소드가 배열과 배열을 합쳐주는 메소드라 가능하다


// let isEven = function (x) {
//   // x가 2의 배수라면 true를 반환
//   console.log(x)
//   return (x % 2 == 0) ? true : false;
// }

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// numbers.every(isEven)
// every 메소드는 함수의 결과값이 false가 될때까지 배열의 모든 원소를 반복한다 즉 1이후 2가나와 false처리 -> 루프종료
// numbers.some(isEven)
// some 메소드는 함수의 결과값이 true가 될때까지 배열의 모든 원소를 반복한다 즉 2는 짝수라 true - > 루프종료
// numbers.forEach(function(x){
//   console.log((x % 2 === 0))
// })
// forEach 메소드는 배열의 모든 원소를 반복한다 기능적으로는 for와 같다

// let Tmap = numbers.map(isEven)
// Tmap 배열은 [false,true, ....] 가된다 
// map 메소드에 인자로 넘겨진 isEven 함수의 결과값이 이 배열에 담긴것이다.
// 이런식으로하면 어떤숫자가 짝수인지 아닌지 쉽게 알 수 있다. 이를테면 Tmap[0]은 1이 짝수가 아니므로 false, [1]은 2가 짝수이므로 true다

// let evenNum = numbers.filter(isEven)
// console.log(evenNum)
// filter메소드는 함수의 결과 값을 true로 만드는 원소로 새 배열을 반환한다
// 즉 [2,4,6,8,10,12,14] 이런식으로 짝수(true)의 배열을 만든다
/* --------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------- */
// 검색과 정렬
// numbers.reverse()
// console.log(numbers)
// reverse 메소드는 배열의 마지막 원소가 첫번째 원소로 옮겨지는식으로 원소들의 순서가 반대가 된다.

// numbers.sort()
// console.log(numbers)
// sort 메소드는 모든 원소를 문자열로 취급해 사전적으로 정렬한다
// 그래서 [ 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ---> [ 1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9 ] 이런식으로 순서가 엉망이된다
// 비교함수를 만들어 정렬로직을 구현해야한다

// numbers.sort(function(a,b){
//   return a-b
// })
// console.log(numbers)
// b가 a보다 크면 양수, a가 b보다 크면 음수 a와 b가 같으면 0을 반환하는 함수이다 
// 즉 함수의 결과 값이 음수이면 a가 b보다 작다는뜻
/* --------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------- */
// 사용자 정의 정렬

// let friends = [
//   {name:'John',age:34},
//   {name:'Camila',age:21},
//   {name:'Jack',age:30}
// ]

// function comparePerson(a,b){
//   if (a.age < b.age){
//     return -1
//   }
//   if (a.age > b.age){
//     return 1
//   }
//   return 0
// }

// console.log(friends.sort(comparePerson))
/* --------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------- */
// 문자 정렬
// let names = ['Ana','ana','john','John']
// console.log(names.sort())
// a가 알파벳순서로 앞이지만 ana가 John뒤에 가는이유는 문자의 ASCII 값을 비교하기 때문이다.
// 대소문자 구별없이 문자를 비교하는 compare 함수를 넘겨주면 결과는 Ana,ana,John,john이 될것이다

// names.sort(function(a,b){
//   if (a.toLowerCase() < b.toLowerCase()){
//     return -1
//   }
//   if (a.toLowerCase() > b.toLowerCase()){
//     return 1
//   }
//   return 0
// })
// console.log(names)
/* --------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------- */
//검색
// 인자로 전달된 문자열과 매치되는 첫번째 원소의 인덱스는 indexOf, 마지막원소는 lastIndexOf 두 메소드로 구할 수 있다.

// console.log(numbers.indexOf(10))
// console.log(numbers.lastIndexOf(100))
// 100은 없는 원소이므로 -1이 나온다 

// numbers.push(10)
// console.log(numbers.lastIndexOf(10))
// console.log(numbers.lastIndexOf(100))
// 처음에 10을 배열 끝에 추가했으므로 두 번째 행의 실행 결과는 15 세번째는 위와같이 -1이나온다 

// 배열을 문자열로 변환

// console.log(numbers.toString())
// 배열의 모든 원소를 단일 문자열로 바꾼다
// 각원소 사이에 '-' 같은 구분자를 두고싶다면 join 메소드를 쓴다

// let numString = numbers.join('*')
// console.log(numString)
// 배열의 내용을 서버로 전달하거나 디코딩할때 편하다
/* --------------------------------------------------------------------------------------------------- */




/* --------------------------------------------------------------------------------------------------- */
// 3장 스택
// 스택은 후입선출 원리에따라 정렬된 컬렉션이다 
// 스택의 자료는 항상 동일한 종단점에서 추가/삭제된다. 스택에서 종단점은 top , base (맨위와 바닥)
// 가장 최근 자료는 top의 근처에 가장 오래된 자료는 base의 근처에 위치한다
// 스택을 구현하려면 필요한 메소드들
// push(꼭대기에있는 새원소를 추가한다), pop(꼭대기에있는 새원소를 반환한다),peek(꼭대기에있는 원소를 반환한다(원소를 삭제하지않는다),isEmpty(스택에 원소가 없으면 true,0보다크면 false))
// clear(모든원소삭제) , size(원소 갯수를 반환 배열의length와비슷하다)


// let items = [];

// function Stack(){
//   this.push = function(element){
//     items.push(element) // 원소하나를 마지막에(꼭대기에)추가한다
//   } 
//   this.pop = function(){
//     return items.pop() // 가장 마지막에추가된(꼭대기) 원소를 삭제한다
//   }
//   this.peek = function(){
//     return items[items.length-1] // 가장 마지막에 추가된 원소를 반환한다 * 삭제하지않음
//   }
//   this.isEmpty = function(){
//     return items.length === 0; // 내부배열의 길이를 0인지 확인한다
//   }
//   this.size = function(){
//     return items.length // 아이템의 length (size로 호출한다)
//   }
//   this.clear = function(){
//     items = []; // 아이템을 비운다
//   }
//   this.print = function(){
//     console.log(items.toString()) // 스택에 쌓인 내용물을 콘솔에서 확인하는 메소드 print
//   }
// }

// let stack = new Stack()

//console.log(stack.isEmpty()) --> true
// stack.push(5)
// stack.push(8)
//console.log(stack.peek()) --> 가장 마지막에 추가된 10을 불러온다
// stack.push(11)
// console.log(stack.size()) --> 3
// console.log(stack.isEmpty()) --> false
// stack.push(15)

// stack.pop()
// stack.pop()
// console.log(stack.size())
// stack.print()

// 10진수를 2진수로 바꾸려면 나눗셈의 몫이 0이 될 때까지 2로 나누면된다

// function dividBy2(decNumber){
//   let remStack = new Stack(),
//   rem,
//   binaryString = ''

//   while(decNumber > 0){ //(1)
//     rem = Math.floor(decNumber % 2) //(2)
//     remStack.push(rem) // (3)
//     decNumber = Math.floor(decNumber / 2) //(4)
//   }
//   while(!remStack.isEmpty()){ //(5)
//     binaryString += remStack.pop().toString()
//   }
//   return binaryString
// }

// 나눗셈의 몫이 0이 아닐때까지  (1)나머지를 스택에 밀어넣고 (2)(3) decNumber는 스스로 2로 나눈 몫으로 업데이트한다 (4)
// 따라서 나눗셈의 몫만을 얻으려면 Math.floor를 사용해 부동소수점을 없애야한다
// 마지막으로 스택이 텅 빌 때까지 pop하여 문자열로 연결하면 2진수가 완성된다(5)

// console.log(dividBy2(233))

//이 알고리즘을 약간 수정하면 2진법 외의 진법으로도 변환할수있다

// function baseConverter(decNumber,base){
//   let remStack = new Stack(),
//   rem,
//   baseString = '',
//   digits = '0123456789ABCDEF' //(6)

//   while(decNumber > 0){ 
//     rem = Math.floor(decNumber % base) 
//     remStack.push(rem) 
//     decNumber = Math.floor(decNumber / base) 
//   }
//   while(!remStack.isEmpty()){ 
//     baseString += digits[remStack.pop()] // (7)
//   }
//   return baseString
// }

// console.log(baseConverter(100345,2))
// console.log(baseConverter(100345,8))
// console.log(baseConverter(100345,16))
/* --------------------------------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------------------------------- */
// Queue는 선입선출방식
// enqueue (뒤쪽에 원소들을 추가한다) , dequeue(앞에서 첫번째 원소를 반환하고 큐에서 삭제한다)) , front(첫번째 원소를 반환하지만 삭제를 하진않는다))
// isEmpty (stack에서의 isEmpty와 같다) , size(이하동일)


//  let items = []

// function Queue(){
//   this.enqueue = function(element){
//     items.push(element)
//   }
//   this.dequeue = function(){
//     return items.shift()
//   }
//   this.front = function(){
//     return items[0]
//   }
//   this.isEmpty = function(){
//     return items.length === 0; // 내부배열의 길이를 0인지 확인한다
//   }
//   this.size = function(){
//    return items.length // 아이템의 length (size로 호출한다)
//   }
//   this.print = function(){
//     console.log(items.toString())
//   }
// }

// let queue = new Queue()
//console.log(queque.isEmpty())

// queue.enqueue("John")
// queue.enqueue("Jack")
// queue.enqueue("Camila")

// queue.print()
// console.log(queue.size())
// console.log(queue.isEmpty())

// queue.dequeue()
// queue.dequeue()
// queue.print()
/* --------------------------------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------------------------------- */
// 우선순위 큐
// 우선 순위큐는 우선순위를 설정해 원소를 정확한 위치에 추가하는것, 
// 그리고 순서대로 하되 삭제만 우선순위에 따르는것, 두가지 방법으로 구현할수있다.

// function PriorityQueue(){
//   let items = []

//   function QueueElement (element,priority){ //(1)
//     this.element = element
//     this.priority = priority
//   }

//   this.enqueue = function(element, priority){
//     let queueElement = new QueueElement(element,priority)

//     if(this.isEmpty()){
//       items.push(queueElement) //(2)
//     }else{
//       let added = false
//       for (let i = 0; i<items.length; i++){
//         if (queueElement.priority < items[i].priority){
//           items.splice(i,0,queueElement) //(3)
//           added = true
//           break //(4)
//         }
//       }
//       if(!added){ //(5)
//         items.push(queueElement)
//       }
//     }
//   }
//   this.dequeue = function(){
//     return items.shift()
//   }
//   this.front = function(){
//     return items[0]
//   }
//   this.isEmpty = function(){
//     return items.length === 0; // 내부배열의 길이를 0인지 확인한다
//   }
//   this.size = function(){
//    return items.length // 아이템의 length (size로 호출한다)
//   }
//   this.print = function(){
//     console.log(items)
//   }
//   // 그 밖의 메소드는 기본 큐의 구현체와 동일하다
// }


//(1)에 추가된 queueElement는 PriorityQueue가 기본 Queue 클래스에서 달라진 부분으로
// 큐 원소에 우선순위가 부가된, 새로운 형태의 원소다.
// 큐가 비어있다면 그냥 원소를 넣는다 (2) -> 큐가 비어 있지 않다면 먼저 기존 원소들과 우선순위를 비교한다.
// 만약 새 원소보다 우선순위가 더 높은 기존 원소가 있다면, 한 칸 앞에 새 원소를 추가한다.
// 구현은 Array.splice() 메소드를 사용한다 더높은 우선순위의 원소가 있다면 새 원소를 삽입하고 (3) 루프문을 종료한다 (4)
// 이런식으로 큐의 원소들을 웃너순위에 따라 정렬하는 것이다.
// 만약 새 원소의 우선순위가 가장 낮다면 큐의 맨 뒤편에 추가하면 끝이다. (5)

// let priorityQueue = new PriorityQueue()

// priorityQueue.enqueue("John",2)
// priorityQueue.enqueue("Jack",1)
// priorityQueue.enqueue("Camila",1)
// priorityQueue.print()
/* --------------------------------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------------------------------- */
// 환형 큐 (뜨거운 감자)

// function hotPotato(nameList,num){
//   let queue = new Queue() // (1)

//   for(let i = 0; i<nameList.length; i++){
//     queue.enqueue(nameList[i]) // (2)
//   }

//   let eliminated = ''

//   while(queue.size() >1){
//     for(let i=0; i<num; i++){
//       let isee = queue.enqueue(queue.dequeue()) //(3)
//     }
//     eliminated = queue.dequeue() //(4)
//     console.log(eliminated + ' (을)를 뜨거운 감자 게임에서 퇴장시킵니다.')
//   }
//   return queue.dequeue() //(5)
// }


// let names = ["John","Jack","Camila","Ingird","Carl"]
// let winner = hotPotato(names,7)
// console.log('승자는 ' + winner + ' 입니다.')

// Queue() 인스턴스를생성 (1) -> 게임참가자 전원의 이름을 배열로 읽어 큐에 추가한다.
// 일정횟수(num) 만큼 큐를 순회한다 맨앞의 원소를 꺼내어 맨 끝에 다시넣는다 (3)
// 지정된 횟수만큼 반복 됐을 때 뜨거운 감자를 들고 있던 사람을 퇴장시킨다(4) 큐에서 삭제된다.
// 그리고 마지막에 남은 사람이 승자가 된다. (5)
/* --------------------------------------------------------------------------------------------------- */

// 연결 리스트

// 연결 리스트는 원소 추가/삭제시 다른 원소들을 이동하지 않아도 된다는 점에서 Array(배열) 보다 낫다.
// 연결리스트의 포인터 덕분인데, 하지만 그 때문에 약간 주의해야할 부분이 있다.
// Array는 특정 원소에 index로 바로 접근할 수 있는 반면, 연결 리스트에서는 원소를 찾을 때까지 처음부터 루프를 반복해야한다.

// 연결 리스트는 서로 손잡고 원을 그리는것에 비유할 수 있다.
// 사람들 각자가 원소이며 자신의 손이 옆사람과 연결되는 포인터라 할 수 있다.
// 기차 역시 연결 리스트다. 객차가 모두 서로 연결되어 있으므로 어떤 객차의 위치를 바꾸거나 추가/삭제하려면 연결을 잠시 끊어야한다. 
// Day2 Code (Page 66~98 )