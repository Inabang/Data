// Day4 Code (Page 110~119 , 프로그래머스 완주하지못한선수)
/* --------------------------------------------------------------------------------------------------- */


// 이중 연결 리스트

// function DoublyLinkedList(){
  
//   let Node = function(element){
//     this.element = element
//     this.next = null
//     this.prev = null
//   }

//   let length = 0
//   let head = null
//   let tail = null 

//   // 이하 Methods ....
//   this.append = function(element){
//     let node = new Node(element),
//         current
//     if(head===null){//리스트가 비어있다면
//       head = node
//       tail = node
//     } else {
//       // 테일 node를 붙인다
//       tail.next = node
//       node.prev = tail
//       tail = node
//     }
//     length++ // 리스트의 크기를 업데이트
//   }

//   this.insert = function(position, element){
//     // 범위 외의 값인지 체크
//     if(position >= 0 && position <= length){
//       let node = new Node(element),
//         current = head,
//         previous,
//         index = 0
//       if (position === 0){ // 첫번째 위치에 추가
//         if (!head){  //(1)
//           head = node
//           tail = node
//         } else {
//           node.next = current
//           current.prev = node  //(2)
//           head = node
//         }
//       } else if (position === length) {  // 마지막 원소
//           current = tail  //(3)
//           current.next = node
//           node.prev = current
//           tail = node
//       } else {
//         while (index++ < position){  //(4)
//           previous = current
//           current = current.next
//         }
//         node.next = current  //(5)
//         previous.next = node
//         current.prev = node
//         node.prev = previous
//       }
//       length++
//       return true
//     }else{
//       return false
//     }
//   }

//   this.removeAt = function(position){
    
//     // 범위 외의 값인지 체크한다
//     if(position > -1 && position < length){

//       let current = head,
//         previous,
//         index = 0
      
//       // 첫번째 원소를 삭제한다
//       if(position === 0){
//         head = current.next //(1)

//         // 원소가 하나뿐이라면 tail을 업데이트한다.
//         if (length === 1){  //(2)
//           tail = null
//         }else {
//           head.prev = null  //(3)
//         }
//       } else if (position === length - 1){  // 마지막 원소
        
//         current = tail  //(4)
//         tail = current.prev
//         tail.next = null   
//       } else {

//         while (index++ < position){  //(5)
//           previous = current
//           current = current.next
//         }

//         previous.next =current.next // (6) (이전 것을 현재의 다음으로 링크한다)
//         current.next.prev = previous 
//       }
//       length--
//       return current.element
//     }else{
//       return null
//     }
//   }
//   this.remove = function(element){
//     let index = this.indexOf(element)
//     return this.removeAt(index)
//   }

//   this.indexOf = function(element){
//     let current = head,
//         index = -1
//     // 첫번째 원소 체크
//     if (element == current.element){
//       return 0
//     }
//     index++
//     // 중간 원소 체크
//     while(current.next){
//       if(element === current.element){
//         return index
//       }
//       current = current.next
//       index++ 
//     }

//     if(element === current.element){
//       return index
//     }
//     return -1
//   }
//   this.isEmpty = function() {
//     return length === 0;
//   };

//   this. size = function() {
//     return length;
//   };
//   this.toString = function(){
//     let current = head,
//         s = current ? current.element : ''
    
//     while(current && current.next){
//       current = current.next
//       s += ', ' + current.element
//     }
//     return s 
//   }

//   this.inverseToString = function() {

//     var current = tail,
//     s = current ? current.element : '';

//     while(current && current.prev){
//       current = current.prev;
//       s += ', ' + current.element;
//     }

//       return s;
//     };

// this.print = function(){
//     console.log(this.toString());
// };

// this.printInverse = function(){
//   console.log(this.inverseToString());
// };

// this.getHead = function(){
//   return head;
// };

// this.getTail = function(){
//   return tail;
// }
// }
// 이중연결 리스트에서는 처음에서 끝, 끝에서 처음, 양방향으로 리스트 순회가 가능하다. 
// 어떤 노드의 이전, 이후 노드를 찾아갈 수 있기 때문이다. 한 방향으로만
// 링크된 연결리스트는 순회 시 원소를 찾지 못하면 다시 맨 처음으로 돌아가야 했엇다.

// insert
// 리스트가 비어 있다면 (1) head와 tail이 삽입할 노드를 가리키게 하면 되고,
// 그 외에는 current에 첫 번째 원소를 담는다. 연결리스트와 마찬가지로 node.next를 current로, head를 node로 바꿔조면
// node는 첫 번째 원소가 된다.
// 이전 원소에 대한 포인터 세팅 작업이 추가됐다는 점만 다르다. current.prev는 이제 null이 아닌 node를 가리키고  //(2)
// node.prev는 null이었으니 그냥 놔두면 된다.

// 맨 끝에 원소를 추가하는 경우다
// 마지막 원소를 가리키는 tail 변수가 있음을 상기해 current에 마지막 원소를 담아두고  //(3)
// node.prev를 current로 세팅한다.
// current.next (null을 가리키고있던)는 이제 node(생성 당시 node.next는 null이다)가 된다.
// tail 자리는 이제 current가 아닌 node 가 차지한다.

// 임의에 위치에 삽입하는경우
// 앞서 했던것처럼 원하는 위치에 도달할 때까지 루프를 반복한뒤  //(4)
// current와 previous원소 사이에 node를 끼워 넣는다
// 먼저 node.next를 current로  //(5) previous.next를 node로 바꾸어 링크가 끊어지지 않게 조심하고
// 다음은 current.prev를 node로 node.prev를 previous로 링크를 수정한다.


// removeAt
// 삽입과 마찬가지로 3가지 경우(첫번째,마지막,중간)을 생각해야한다

// 첫번째 원소를 삭제하는경우
// current는 첫 번째 원소이고 이 원소를 삭제할 것이다. 따라서 current가 아닌, 다음 원소( //(1), current.next)로 head를 바꾼다.
// 물론 이전의 current.next 역시 바꾸어야한다 ( 첫번째 원소의 prev는 null 이므로)
// 그래서 head.prev를 null로 바꿔준다 ( //(3), head는 새로운 첫 번째 원소를 가리키고, current.next.prev와 같다 ) 
// 이렇게 삭제한 원소가 이 리스트의 하나뿐인 원소라면 tail은 null 이 될것이다.  //(2)

// 마지막 원소를 삭제하는경우
// 마지막 원소는 tail이 가리키고 있으므로 루프는 필요없다.
// 그래서 current를 tail로 바꾸고  //(4) tail은 끝에서 두번째 원소 (current.prev 또는 tail.prev)로 업데이트한다.
// tail은 끝에서 두 번째 원소이므로 tail.next는 null로 수정하면 된다.

// 중간의 원소를 삭제하는 경우
// 원하는 위치를 얻기위해 루프를 통해 //(5), 삭제할 원소를 current로 받는다
// 그리고 다음과 같이 previous.next는 current.next로 current.next.prev는 previous로 각각 바꿔준다
// 이러면 삭제하려는 원소의 앞뒤 연결이 끊긴다.

// let list = new DoublyLinkedList();


/* --------------------------------------------------------------------------------------------------- */




// 프로그래머스 완주하지못한선수 


// function solution(participant, completion) {
//     this.participant = participant;
//     this.completion = completion;
    
//     participant.sort()
//     completion.sort()

    
//     for(let i in participant){
//         if(participant[i] !== completion[i]){
//             return participant[i]
//         }
//     }
// }

// forEach로 하니까 효율성에서 걸림 
// 그래서 다른사람들꺼 풀이를봄 


// 두개를 정렬한이후 for문으로 participant의 length 만큼 찾아서  찾은 participant[i]를 반환하는식으로
// const solution = (p, c) => {
//     p.sort()
//     c.sort()
//     while (p.length) {
//         let pp = p.pop()
//         if (pp !== c.pop()) return pp
//     }
// } 

// while로 p.length 만큼 찾은후 p.pop이 만약 c의 끝값과 다르다면 pp를 반환했다

// participant와 completion이 서로 같은것을 공유하기때문에 정렬한다면 같이 정렬된다는걸 생각못했다
// 만약 같은 값을 공유하는 배열을 비교한다면 sort하고 for문으로 돌리는걸 생각하자


/* --------------------------------------------------------------------------------------------------- */
// Day4 Code (Page 110~119 , 프로그래머스 완주하지못한선수)