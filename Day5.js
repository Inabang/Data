// Day5 Code (Page 119~142)
/* --------------------------------------------------------------------------------------------------- */


// 집합

// 집합은 정렬되지않은 컬렉션으로 원소는 반복되지 않는다 (중복된 원소가 없다.)
// 집합 자료 구조는 유한 집합의 개념을 CS 에 적용한 것이다.
// 널집합은 원소가 하나도 없는 집합을 null set 또는 empty set이라고 한다. 가령 24와 29 사이의 소수의 집합은 널 집합이다.
// 널집합은 nullSet = {} // 이런식으로 표현한다

/* --------------------------------------------------------------------------------------------------- */


// Set 클래스는 ES6 문법.

// function Set(){
//   let items = {}

//   this.has = function(value){
//     // return value in items (1)
//     return items.hasOwnProperty(value)
//   }
//   this.add = function(value){
//     if(!this.has(value)){
//       items[value] = value//(1)
//       return true
//     }
//     return false
//   }
//   this.remove = function(value){
//     if(this.has(value)){
//       delete items[value] //(2)
//       return true
//     }
//     return false
//   }
//   this.clear = function(){
//     items = {} //(3)
//   }
//   this.size = function(){
//     return Object.keys(items).length //(4)
//   }
//   this.values = function(){
//     return Object.keys(items)
//   }
//   this.union = function(otherSet){
//     const unionSet = new Set() // (1)

//     let values = this.values() // (2)
//     for (let i=0; i<values.length; i++){
//       unionSet.add(values[i])
//     }
//     values = otherSet.values() //(3)
//     for (let i=0; i<values.length; i++){
//       unionSet.add(values[i])
//     }
//     return unionSet
//   }
//   this.intersection = function(otherSet){
//     const intersectionSet = new Set() //(1)

//     let values = this.values()
//     for (let i=0; i<values.length; i++){ //(2)
//       if(otherSet.has(values[i])){ //(3)
//         intersectionSet.add(values[i]) //(4)
//       }
//     }
//     return intersectionSet
//   }
//   this.difference = function(otherSet){
//     const differenceSet = new Set() //(1)

//     let values = this.values()
//     for(let i=0; i<values.length; i++){ //(2)
//       if(!otherSet.has(values[i])){ //(3)
//         differenceSet.add(values[i]) //(4)
//       }
//     }
//     return differenceSet
//   }
//   this.subset = function(otherSet){
//     // 기존의 집합의 크기가 타집합의 크기보다 큰경우
//     if(this.size() > otherSet.size()){ //(1)
//       return false // false로 리턴
//     }else{
//       let values = this.values() 
//       for(let i=0; i<values.length; i++){ //(2)
//         if(!otherSet.has(values[i])){ //(3)
//           return false //(4)
//         }
//       }
//       return true //(5)
//     }
//   }
// }

// '배열이 아닌, 객체로 집합을 표현한다'
// 물론 배열로 구현해도 안 될 건 없지만, 이전과 다른 방법으로, 유사한 자료 구조를 구현하는 새로운 방법도 익혀야한다
// 그리고 자바스크립트의 Object는 동일한 key로 여러 property를 가질 수는 없으니
// 집합에서 원소가 중복되지 않는 특성이 그대로 보장된다.
// 아래 Methods들은 ES6 클래스를 모방한것이다

// add -> 원소를 추가한다 , remove -> 원소를 삭제한다
// has -> 어떤 원소가 집합에 포함되어 있는지 여부를 true/false 로 반환한다.
// clear -> 모든 원소 삭제 , size -> 원소 개수를 반환한다. (length와 비슷)
// values -> 집합의 모든 원소를 배열 형태로 반환한다.

// this.has
//집합의 모든 원소는 Object에 담겨 있으므로 in 연산자로 해당 원소가 items의 프로퍼티인지 확인한다
// (1) 보다 좋은방법이 있다.
// hasOwnProperty() 메소드를 상속한다는 사실을 응용한것이다. Obejct가 어떤 property를 가지고있는지 여부를 조사한다.

// this.add
// value가 이미 집합에 포함되어 있는지 확인한다
// 없는 원소라면 value를 넣고 //(1)
// 이미 있는 원소라면 false를 각각 반환해 성공 여부를 표시한다.

// this.remove 
// 삭제할 원소가 집합에 존재하는지 먼저 확인하고,
// 있다면 원소를 삭제한후 return true //(2)
// 그 외의 경우에는 false다 .
// 집합의 원소는 모두 items 객체에 있으므로, 삭제시 간단히 delete 연산자로 items에서 해당 property를 지운다. //(2)


// this.clear 
// items에 빈 객체를 할당해 다시 초기화한다 //(3)
// 루프로 원소를 순회하면서 remove 메소드로 하나씩 지워도 되지만 
// 초기화하는게 가장빠르다.

// this.size
// Object에는 keys 라는 Method가 있는데 객체의 모든 property를 배열로 변환한다.
// 따라서 이 배열의 length로 //(4) 원소 개수를 파악할 수 있다. 
// 이 코드는 비교적 최신 브라우저에서만 제대로 작동한다.

// this.values
// 같은 방법으로 items의 모든 property를 추출해 배열 형태로 반환한다.



// 집합 연산

// 합집합
// set 클래스에 union 메소드를 구현한다.
// 먼저 합집합 unionSet을 생성한다. //(1) 첫번째 집합(현재 인스턴스)의 values메소드로
// 모든 원소를 추출한 뒤, 루프로 반복하면서 unionSet에 추가한다.//(2)
// 같은 로직을 두번째집합 (otherSet)//(3) 에 적용한후 unionSet을 반환한다 
// 이는 add로직에서 같은 원소가있다면 추가하지않기 때문에 서로의 집합중 중복되는값은 제외되기 때문이다.

// const set = new Set()

// set.add(1)
// console.log(set.values())
// console.log(set.has(1))
// console.log(set.size())

// set.add(2)
// console.log(set.values())
// console.log(set.has(2))
// console.log(set.size())

// set.remove(1)
// console.log(set.values())
// console.log(set.has(1))

// set.remove(2)
// console.log(set.values())

// union 문제가 없는지 test

// const setA = new Set()

// setA.add(1)
// setA.add(2)
// setA.add(3)

// const setB = new Set()

// setB.add(1)
// setB.add(4)
// setB.add(5)

// let unionAB = setA.union(setB)
// console.log(unionAB.values())
// 합집합이 잘된걸 볼수있다 ( 1은 모두 포함됐지만 한개만 들어가있는걸 확인할수 있다.)


//교집합
//A에도속하고 B에도 속하는 원소 x의 집합
// intersection 메소드는 현재 인스턴스(this)와 인자로 전달된 인스턴스(otherSet)
// 양쪽 모두 존재하는 원소를 담아야한다.
// 먼저, 교집합 intersectionSet을 생성한다.(1)
// 현재 인스턴스의 values 메소드로 모든 원소를 루프로 순회하면서 (2)
// 각 원소가 otherSet 에도 존재하는지 조사한다 (3)
// 원소의 존재 여부는 앞에서 배운 has 메소드를 이용하면 된다.
// 이런식으로 두 집합에 모두 존재하는 원소를 찾아 intersectionSet에 하나씩 담아(4)
// 마지막에 반환한다.

// intersection 잘되는지 test

// const setA = new Set()

// setA.add(1)
// setA.add(2)
// setA.add(3)

// const setB = new Set()

// setB.add(2)
// setB.add(3)
// setB.add(4)

// // Testcase => [ '2', '3' ]

// let intersectionAB = setA.intersection(setB)
// console.log(intersectionAB.values())

// A와 B에도 속한 2,3이 출력되는걸 확인할수 있다.


// 차집합 
// A에는 속하지만 B에는 속하지 않는 원소x의 집합이다.
// intersection 메소드는 두 집합 모두 포함된 원소를 values 메소드로 추출한 반면
// 이번에는 같은 방법으로 A에만 있고 B에는 없는 원소를 가려낼 것이다.
// 따라서 (3) 만 다를 뿐 나머지 코드는 intersection과 똑같다.
// 이렇게 otherSet에는 B에는 존재하지 않는 원소들만 뽑아낸다 (1),(2),(4)는 완전히 동일한 코드다.

// differenceSet Test

// const setA = new Set()

// setA.add(1)
// setA.add(2)
// setA.add(3)
// setA.add(4)

// const setB = new Set()

// setB.add(1)
// setB.add(2)
// setB.add(5)
// setB.add(6)

// Testcase => ['3','4'] (setA에만 존재하는 원소)

// let differenceAB = setA.difference(setB)
// console.log(differenceAB.values())


// 부분집합
// 가장먼저 현재 인스턴스의 크기를 확인해야한다 this가 otherSet보다 원소가 더많다면 이미 부분집합 조건이 맞지않는다 (3)

// 여기까지 문제가 없다면 (else)
// 원소를 순회하면서 (2) 각 원소가 otherSet에도 존재하는지 확인한다 (3)
// 하나라도 otherSet에 존재하지 않으면 부분집합이 아니므로 바로 false를 반환한다(4)
// 루프를 정상 종료했다면 this의 모든 원소가 otherSet에도 잇다는 뜻이므로 true를 반환한다.

// subset Test

// let setA = new Set()

// setA.add(1)
// setA.add(2)

// let setB = new Set()

// setB.add(1)
// setB.add(2)
// setB.add(3)

// let setC = new Set()

// setC.add(2)
// setC.add(3)
// setC.add(4)

// console.log(setA.subset(setB))
// console.log(setA.subset(setC))

// 3개의 집합 a,b,c가 있다 a는 b의 부분집합이지만 (true) c의 부분집합이 아니므로 (c에는 a의 1이 없다)
// 결과는 false





/* --------------------------------------------------------------------------------------------------- */


// 딕셔너리와 해시

// 딕셔너리와 해시는 set과 같이 유일한값(unique)을 저장하기 위한 자료 구조다.
// 집합이 원소의 값에 초점을 두었다면, 딕셔너리(Map)은 값을 [Key : Value]형태로 저장한다.
// 해시 역시 [Key : Value]으로 저장하지만 자료 구조를 구현하는 방법이 Map과 다르다



//딕셔너리
// 딕셔너리는 데이터를 [Key : value] 쌍으로 다암두는 자료 구조로 Key는 원소를 찾기 위한 식별자다.
// 집합이 [Key, Key] 딕셔너리가 [Key, Value] 형태의 원소를 모아놓은 공간이라는 점에서 두 자료 구조는 비슷하다.
// 딕셔너리는 Map이라고도 한다


// 딕셔너리또한 ES6 Map Class로 구현 명세가 기록돼있다.
// 구현할 Dictionary Class도 Set Class와 상당히 흡사하다. 


// function Dictionary() {
//   let items = {} // Set 처럼 Dictionary도 Array 대신 Obejct에 원소를 보관한다.

//   this.has = function(key){
//     return key in items
//   }

//   this.set = function(key, value){
//     items[key] = value // items에 [key, value] 형식으로 원소를 세팅한다, 기존 원소를 수정할수있다.
//   }

//   this.remove = function(key){
//     if(this.has(key)){
//       delete items[key]
//       return true
//     }
//     return false // key값이 없다면 false를 반환한다.
//   }
//   this.get = function(key){
//     return this.has(key) ? items[key] : undefined
//   }
//   this.values = function(){
//     let values = []
//     for(let i in items){ // (1)
//       if(this.has(i)){
//         values.push(items[i]) // (2)
//       }
//     }
//     return values
//   }
//   this.size = function(){
//     return Object.keys(items).length
//   }
//   this.clear = function(){
//     return items = {}
//   }
//   this.keys = function(){
//     return Object.keys(items)
//   }
//   this.getItems = function(){
//     return items
//   }
// }


// set(key,value) -> 딕셔너리에 원소를 추가한다 , remove(key) -> Key에 해당하는 원소를 삭제한다.
// has(key) -> Key에 해당하는 원소가 딕셔너리에 존재한다면 true 아니라면 false
// get(key) -> key에 해당하는 원소의 value를 반환한다.
// clear() -> 모든원소를 삭제한다. , size() -> 원소의 개수를 반환한다.
// keys() -> 딕셔너리의 모든 key를 Array 형식으로 반환한다.
// values() -> 딕셔너리의 모든 value를 Array 형식으로 반환한다.



// has와 set 메소드
// Set의 has와 완전히 일치한다. 자바스크립트 in 연산자로 items에 key가 있는지 체크한다.
// set 메소드는 key와 value를 인자로 받아 items{} 에 [key,value]형식으로 원소를 세팅한다.


// remove
// value대신 key로 원소를 찾는다는 점만 다르지 나머지는 Set과 같다.
// items에서 key가 동일한 원소를 찾아 삭제한다.


// get과 values
// 딕셔너리에서 어떤 원소를 찾아 그 값을 알고 싶을 때 사용한다.
// get 메소드는 찾는 원소가 실제로 존재하는지 확인해(key로 검색)
// 있으면 그 값을 없으면 undefined를 각각 반환한다. -- > undefined와 null은 전혀 다른개념이다

// values 메소드
// items의 원소들을 차례로 순회하면서 // (1)
// has 메소드로 key  에 해당하는 원소가 있는지 확인하고 있으면 그 값을 values 배열에 넣는다 // (2)
// 순회가 끝나면 values를 return 한다.


// clear,size,keys,getItems는 set 과 동일하므로 코드는 상동.


// 딕셔너리 클래스 사용

// const dictionary = new Dictionary()

// dictionary.set('SWDevelop', 'mailuser01@mail.com')
// dictionary.set('SWManage', 'SwHelpdesk@mail.com')
// dictionary.set('Admin', 'Adminzz@mail.com')

// console.log(dictionary.has('Admin')) // -> Admin Key의 Obejct가 있기때문에 True

// // 추가한 원소가 3개이므로 다음코드는 3을 출력한다

// console.log(dictionary.size())

// console.log(dictionary.keys()) // -> items의 key값들을 console에 띄운다 
// console.log(dictionary.values()) // -> value값을 띄운다
// console.log(dictionary.get('SWDevelop')) // --> SWDevelop이라는 Key값을 받아 해당하는 value를 띄운다

// dictionary.remove('SWManage')

// console.log(dictionary.keys())
// console.log(dictionary.values())
// console.log(dictionary.getItems())

/* --------------------------------------------------------------------------------------------------- */ 
// 딕셔너리 끝



// 해시
// Dictionary 클래스의 Hash 구현이라고 할수있는 HashTable Class 이다.
// 이는 HashMap 이라고도한다

// 해싱은 자료 구조에서 특정 값을 가장 신속하게 찾는 방법이다.
// 이전 장에서 어떤 값을 찾으려고 (get)을 이용해 전체 원소에대한 루프문을 실행했다.
// 해시 함수는 어떤 키에 해당하는 값의 주소를 테이블에서 찾아주는 함수이므로 조회 속도가 가장빠르고 간단하다.
// 주소록을 예시로 해보자. 가장 흔한 해시함수는 lose lose 해시함수라고 하는데 key를 구성하는 문자의 ASCII 값을 단순히 더한것이다.



// function HashTable() {
//   let table = []
 
//   let loseloseHashCode = function(key){
//     let hash = 0 // (1)
//     for (let i = 0; i < key.length; i++){ // (2)
//       hash += key.charCodeAt(i) // (3)
//     }
//     return hash % 37 // (4)
//   }

//   this.put = function(key, value){
//     let position = loseloseHashCode(key) //(5)
//     console.log(position + ' - ' + key) // (6)
//     table[position] = value  // (7)
//   }
//   this.get = function(key){
//     return table[loseloseHashCode(key)]
//   }
//   this.remove = function(key){
//     table[loseloseHashCode(key)] = undefined
//   }
// }

//Methods..
// put(key,value) -> 원소를 추가한다.(또는 기존 원소를 수정한다)
// remove(key) -> key에 해당하는 원소를 찾아 삭제한다.
// get(key) -> key에 해당하는 원소를 찾아 value를 반환한다.


// 해시함수(loseloseHashCode HashTable의 프라이빗 메소드)
// key를 구성하는 각 문자의 아스키 값을 합하는함수.
// 결과 값을 저장할 변수를 선언하고 // (1)
// key 문자열의 길이만큼 루프를 반복하면서.// (2) 문자별 ASCII 값을 hash에 더한다 // (3)
// javascript의 String 클래스 내장메소드 charCodeAt을 사용한다
// 루프가 끝난 후 ASCII 수치가 작은 영영이 있음을 감안해 hash를 임의의 숫자로 나눈 나머지를
// 최종값으로 반환한다 // (4)

// this.put
// 인자 key를 해시 함수에 넣고 반환된 결과 값(position)으로 테이블에서 찾아야한다.//(5)
// 여기서는 확인 용도로 position을 콘솔에 표시하는데(6)
// 필요없으면 (6)은 삭제하거나 주석 처리해도 된다.
// table배열의 position인덱스에 value를 추가한다 
// HashTable 인스턴스에서 value를 찾는것은 다음 get Metohd가 할일이다.

// this.get
// 앞서 만든 loseloseHashCode함수로 key의 index를 찾고 
// 이 index에 해당하는 table 배열의 value를 반환한다.

// this.remove
// HashTable 인스턴스에서 어떤 원소를 삭제하려면 index를 찾아(loseloseHashCode함수를 이용해)
// table배열의 값을 undefined로 만들어주면 된다.

// HashTable은 ArrayList 처럼 table 배열의 원소 자체를 삭제할 필요는 없다. 배열 전체에 원소들이 고루 분포되어 있으므로
// 어떤 index엔 value 조차 할당되지 않은채 기본 값 undefined가 들어 있다. 
// 다음에 기존의 다른 원소를 조회/삭제 시 어차피 loseloseHashCode함수로 index를 찾을 수 없으니 문제는없다



// HashTable 사용

// const hash = new HashTable()

// hash.put('One', 'OneIsone@mail.com')
// hash.put('Two', 'TwoIsNotOne@mail.com')
// hash.put('Three', 'ThreeMan@mail.com')

// console.log(hash.get('One'))
// console.log(hash.get('Five')) // -> Five라는 key는 없으므로 undefined를 반환한다

// hash.remove('Two')
// console.log(hash.get('Two')) // -> Two라는 key를 위에서 삭제했으므로 undefined를 반환한다.

/* --------------------------------------------------------------------------------------------------- */
// Day5 Code (Page 119~142)