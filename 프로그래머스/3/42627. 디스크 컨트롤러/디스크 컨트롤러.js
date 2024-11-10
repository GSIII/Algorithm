class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex][1] > value[1]) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    while (this.heap[leftIndex] !== undefined) {
      let smallerIndex = leftIndex;
      if (this.heap[rightIndex] !== undefined && this.heap[rightIndex][1] < this.heap[leftIndex][1]) {
        smallerIndex = rightIndex;
      }

      if (this.heap[currentIndex][1] > this.heap[smallerIndex][1]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[smallerIndex];
        this.heap[smallerIndex] = temp;

        currentIndex = smallerIndex;
        leftIndex = currentIndex * 2;
        rightIndex = currentIndex * 2 + 1;
      } else {
        break;
      }
    }

    return returnValue;
  }
}

function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]); // 요청 시간을 기준으로 정렬

  let currentTime = 0; // 현재 시간
  let totalWaitTime = 0; // 총 대기 시간
  let jobIndex = 0; // 처리하지 않은 작업의 인덱스
  let heap = new MinHeap(); // 최소 힙
  let count = 0; // 처리한 작업 개수

  while (count < jobs.length) {
    // 현재 시간에 요청된 작업들을 힙에 추가
    while (jobIndex < jobs.length && jobs[jobIndex][0] <= currentTime) {
      heap.push(jobs[jobIndex]); // 작업의 요청 시간과 소요 시간을 힙에 추가
      jobIndex++;
    }

    // 힙에 작업이 있다면 가장 작은 소요 시간을 가진 작업을 처리
    if (heap.heap.length > 1) {
      const job = heap.pop(); // 최소 소요시간을 가진 작업을 꺼내서 처리
      const jobTime = job[1];
      totalWaitTime += currentTime - job[0] + jobTime; // 대기 시간 + 소요 시간
      currentTime += jobTime; // 작업 처리 후 시간 갱신
      count++; // 처리한 작업 개수 증가
    } else {
      currentTime++; // 처리할 작업이 없으면 시간을 하나씩 증가
    }
  }

  return Math.floor(totalWaitTime / jobs.length); // 평균 대기 시간 반환
}
