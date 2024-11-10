class MinHeap {
  constructor() {
      this.heap = [null];
  }
  
  push(value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
      let parentIndex = Math.floor(currentIndex / 2);
      
      while (parentIndex !== 0 && this.heap[parentIndex] > value) {
          const temp = this.heap[parentIndex];
          this.heap[parentIndex] = value;
          this.heap[currentIndex] = temp;
          
          currentIndex = parentIndex;
          parentIndex = Math.floor(currentIndex / 2);
      }
  }
  
  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // 힙에 값이 하나만 있을 때 처리

    const returnValue = this.heap[1]; // 반환할 값은 항상 1번 인덱스
    this.heap[1] = this.heap.pop(); // 마지막 요소를 1번 인덱스로 이동

    let currentIndex = 1; // 1번 인덱스부터 시작
    let leftIndex = currentIndex * 2; // 왼쪽 자식 인덱스
    let rightIndex = currentIndex * 2 + 1; // 오른쪽 자식 인덱스

    // 자식 노드가 둘 다 존재하는지 확인
    while (this.heap[leftIndex] !== undefined) {
      // 자식 노드들이 있을 때, 더 작은 값을 찾음
      let smallerIndex = leftIndex; // 기본적으로 왼쪽 자식으로 설정
      if (this.heap[rightIndex] !== undefined && this.heap[rightIndex] < this.heap[leftIndex]) {
        smallerIndex = rightIndex; // 오른쪽 자식이 더 작으면 교체
      }

      // 부모와 더 작은 자식 노드를 비교하여 교환
      if (this.heap[currentIndex] > this.heap[smallerIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[smallerIndex];
        this.heap[smallerIndex] = temp;

        currentIndex = smallerIndex; // 교환한 자식 노드로 인덱스를 갱신
        leftIndex = currentIndex * 2; // 왼쪽 자식 인덱스 갱신
        rightIndex = currentIndex * 2 + 1; // 오른쪽 자식 인덱스 갱신
      } else {
        break; // 부모가 더 작으면 종료
      }
    }

    return returnValue; // 반환할 값
  }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();

    // 모든 스코빌 지수를 최소 힙에 넣기
    for (let score of scoville) {
        minHeap.push(score);
    }

    let mixCount = 0;

    // 최소 힙에서 두 개의 음식을 섞기
    while (minHeap.heap.length > 2 && minHeap.heap[1] < K) { // 힙에 2개 이상의 값이 있어야 섞을 수 있음
        let first = minHeap.pop();  // 가장 작은 값
        let second = minHeap.pop(); // 두 번째로 작은 값

        // 두 음식을 섞은 새로운 스코빌 지수
        let newScoville = first + (second * 2);
        minHeap.push(newScoville);
        mixCount++;

        // 섞은 후, 가장 작은 음식이 K 이상이면 종료
        if (minHeap.heap[1] >= K) {
            return mixCount;
        }
    }

    // 더 이상 섞을 수 없다면 -1 반환
    return minHeap.heap[1] >= K ? mixCount : -1;
}