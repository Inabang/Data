// Day3 Code (Page 98~110)

/* --------------------------------------------------------------------------------------------------- */

/// 연결 리스트

// 연결 리스트는 원소 추가/삭제시 다른 원소들을 이동하지 않아도 된다는 점에서 Array(배열) 보다 낫다.
// 연결리스트의 포인터 덕분인데, 하지만 그 때문에 약간 주의해야할 부분이 있다.
// Array는 특정 원소에 index로 바로 접근할 수 있는 반면, 연결 리스트에서는 원소를 찾을 때까지 처음부터 루프를 반복해야한다.

// 연결 리스트는 서로 손잡고 원을 그리는것에 비유할 수 있다.
// 사람들 각자가 원소이며 자신의 손이 옆사람과 연결되는 포인터라 할 수 있다.
// 기차 역시 연결 리스트다. 객차가 모두 서로 연결되어 있으므로 어떤 객차의 위치를 바꾸거나 추가/삭제하려면 연결을 잠시 끊어야한다. 

function LinkedList() {
  let Node = function(element){ //(1)
    this.element = element
    this.next = null
    }
  let length = 0 //(2)  
  let head = null // (3) 
  
  this.append = function(element){
    let node = new Node(),  //(1)
        current //(2)
    if (head === null){ // 리스트가 비어있다면 // (3)
      head = node
    }else{
      current = head //(4)
    // 마지막 원소를 발견할 때까지 계속 루프 순환한다.
    while(current.next){
      current= current.next
    }
    // 마지막 원소를 링크할 수 있게 노드에 할당한다.
    current.next = node
    }
    length++ // 리스트의 크기를 업데이트한다. (6)
  }
  this.insert = function(postion, element){
    // 범위 외의 값인지 체크한다
    if(postion >= 0 && postion <= length ){ //(1)
      let node = new Node(element),
      current = head,
      previous,
      index = 0

      if(postion === 0){
        node.next = current //(2)
        head = node
      }else{
        while(index++ < postion){ //(3)
          previous = current
          current = current.next
        }
        node.next = current //(4)
        previous.next = node //(5)
      }
      length++ // 리스트의 크기를 업데이트한다.
      return true
    }else{
      return false //(6)
    }

  }
  this.removeAt = function(postion){ 
    if(postion > -1 && postion < length){ //(1)
      let current = head, //(2)
      previous, //(3)
      index= 0 //(4)
      
      // 첫 원소 삭제
      if(postion === 0){ //(5)
        head = current.next
      }else{
        while(index++ < postion){ //(6) 
          previous = current //(7)
          current = current.next //(8)
        }
        // 현재의 다음과 이전것을 연결한다: 삭제하기 위해 건너뛴다
        previous.next = current.next //(9)
      }
      length-- //(10)
    }else{
      return null //(11)
    }
  }
  this.remove = function(element){
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
  this.indexOf = function(element){
    let current = head, //(1)
    index = -1

    while(current){ //(2)
      if(element === current.element){
        return index //(3)
      }
      index++ //(4)
      current = current.next //(5)
    }
    return -1
  }
  this.isEmpty = function() {
    return length === 0
  }
  this.size = function() {
    return length
  }
  this.toString = function() {
    let current = head, //(1)
    string = '' //(2)

    while(current){ //(3)
      string = current.element //(4)   
      current = current.next //(5)
    }
    return string //(6)
  } 
  this.print = function() {
    console.log(this.toString());
  }
  this.getHead = function() {
    return head
  }
  // head는 LinkedList의 프라이빗 변수지만 인스턴스 밖에서도 리스트를 반복시킬때 첫번째 원소를 참조할 필요는 있다.
  }
  // 연결리스트는 Node 라는 헬퍼 클래스가 우선 필요하다 (1) 연결리스트에 추가되는 원소가 바로 Node다 
  // element가 바로 원소에 해당되며, next 프로퍼티는 다음 노드를 가리키는 포인터다.
  // (2) length는 LinkedList의 내부 프라이빗 프로퍼티로 연결 리스트에 담긴 원소의 개수다.
  // (3) head는 연결이 시작되는 지점을 참조한다.
  // append -> 리스트의 맨끝에 원소를 추가한다 
  // insert(위치, 원소) -> 해당 위치에 원소를 삽입한다.
  // remove(원소) -> 원소를 삭제한다
  // indexOf -> 해당 원소의 위치를 반환한다. 존재하지 않은 경우 결과 값은 -1이다.
  // toString -> 연결리스트는 원소를 Node에 담아두기 때문에 원소의 값만을 출력하려면 자바스크립트 기본 객체로부터 상속한 toString메소드를 재정의(오버라이드) 해야한다.

  // 리스트 끝에 원소 추가하기 (append 구현하기)
  // 우선 인자 element로 Node를 생성한다 (1)
  // 리스트가 처음부터 비어 있다면. LinkedList객체가 처음 생성될 당시 head값은 null 일것이다.
  // head가 null 이라면 리스트에 첫 원소를 추가하고 head가 node를 가리키면 된다. 그럼 node.next는 자동으로 null 이 될것이다.

  // ** 연결 리스트에서 마지막 노드의 next는 항상 null이다.

  // 이미 리스트에 원소가 들어 있는 경우라면
  // 끝에 새 원소를 추가하고. 먼저 리스트의 마지막 원소를 찾아야 한다. 유일한 단서는 첫번째 원소를 가리키고 있는 참조 변수 (4) 이므로 
  // 마지막 원소를 찾을때까지 루프로 순회한다 
  // 리스트의 현재 원소는 current에 담아두고 (2) current.next가 null이 되는 지점에서 루프를 끝낸다.
  // current가 바로 마지막 원소 이므로 current.next를 새로 추가한 원소를 가리키게하면 성공이다.
  // 나중에 리스트 크기를 참조할 수 있으니 length 값을 하나 증가시켜야한다 (6)

  var list = new LinkedList()

  list.append(15)
  list.print()
  list.append(10)
  list.print()
  list.remove(15)
  list.print()
  console.log(list.size())
  // 원소 삭제

// 삭제하려는 원소가 리스트의 첫 번째 원소인지 아닌지에 따라 두 가지 경우를 생각해야 한다. 그래서 remove 메소드를,
//  원소의 위치를 기준으로 삭제하는 메소드와 원소의 값을 기준으로 삭제하는 메소드, 두가리조 나누어 구현한다

// 그중 원소의 위치를 기준으로 삭제하는 removeAt 메소드를 보자
// 원소의 위치를 (postion)을 인자로 받는데 우선 이 값이 유효한지 따져야한다 (1)
// 여기서 유효하다는 말은 0부터 리스트크기(인덱스는 0에서 시작하므로 크기 -1)사이의 숫자여야 한다는 뜻이다.
// 유효하지 않다면 결과 값은 null 을 반환한다 (삭제된 원소가 없다는뜻.)

// 임의의 값 추가하기 (insert)
// 항상 인덱스가 개입되면 범위체크는 필수 (1)
// 범위를 벗어났다면 false를 반환하여 리스트에 아무것도 추가되지 않았음을 분명히한다 (6)
// 여기서도 몇가지 경우가 있다.

// 1. 리스트의 맨앞에 원소를 추가하는경우
// current는 리스트의 첫 번재 원소를 가리키는 변수이므로 head = current 다
// node.next를 current(리스트의 첫 번째 원소)로 바꾸고 head를 node로 세팅하면(2) 리스트의 첫번째 위치에 원소가 삽입된다.

// 2. 원소를 리스트의 중간 또는 맨 끝에 추가하는 경우다
// 원하는 위치까지 루프를 반복한다 (3)
// current는 삽입할 위치 바로 다음의 원소, previous는 그 이전의 원소를 각각 가리킬것이다.
// 이때 삽입할원소(node)와 current를 연결하고 (4) previous와 current의 연결을 바꿔준다
// 즉 previous.next 가 node를 바라보게 한다 (5)

// 다음은 원소를 마지막 위치에 삽입하는 과정이다.
// 루프가 끝난 후 previous는 리스트의 마지막 원소를 가리키고, current는 null 이 될것이다.
// node.next 는 current를, previous.next 는 node를 바라보게 하면 된다.


// 그밖의 메소드 구현하기

// toString()
// 리스트의 모든 원소를 순회하기 위해 head를 시작점으로, current 변수를 index삼아 //(1) 루프문을 실행한다
// 그 전에 결과를 담아둘 변수를 초기화한다 //(2)
// 원소별로 순회할 때 //(3) current 변수로 원소의 존재 여부를 체크한다 (원소가 비었거나 마지막 원소의 다음(null)이면 while루프는 바로 빠져나온다.)
// 그 다음, 원소 값을 추출해 string에 이어붙이고 (4) 다음 원소를 순회한다(5)
// 순회를 마치고 결과를 반환한다(6)

// indexOf()
// 원소 값을 인자로 받아 리스트에서 해당 원소의 index를 반환한다. 없는 원소라면 -1을 반환한다
// 리스트 순회전 current를 head로 초기화한다 //(1)
// 원소를 차례로 순회하면서 //(2) 인자로 받은 원소 값과 일치하는지 본다.
// 원소가 같다면 위치를 반환 //(3) 다르면 index를 하나씩 증가시키고
// 다음 노드를 찾는다 //(5)
// 리스트가 비어 있거나 리스트 끝까지 도달하면 (current = current.next -> null 일때)
// 루프는 끝난다. 발견된 원소가 없다면 결과 값은 -1 이다.

// 이 메소드를 이용하면 remove 메소드를 다음과 같이 구현할수 있다
// 이미 앞에서 특정 위치의 원소를 삭제하는 메소드 (removeAt)을 구현했다.
// 그러므로 indexOf로 인덱스를 찾고 이렇게 찾은 인덱스를 removeAt으로 넘겨주면 해당 원소를 삭제할수 있다. 
// removeAt 코드를 변경할 일이 생겨도 removeat 만 수정하면 remove와 removeAt 둘다 수정된다.



// 이중 연결 리스트
function DoublyLinkedList() {
  
  let Node = function(element){

    this.element = element
    this.next = null
    this.prev = null // NEW !
  }

  let length = 0
  let head = null
  let tail = null

  // Methods 

}

/* --------------------------------------------------------------------------------------------------- */
// Day3 Code (Page 98~110)