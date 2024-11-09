class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 힙에 값을 삽입하는 메서드
    insert(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    // 가장 작은 값을 꺼내는 메서드
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // 마지막 요소를 루트로 교체
        this._heapifyDown();
        return min;
    }

    // 부모-자식 관계를 맞추기 위해 위로 올리는 메서드
    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    // 부모-자식 관계를 맞추기 위해 아래로 내리는 메서드
    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (index < length) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    // 힙이 비었는지 확인하는 메서드
    isEmpty() {
        return this.heap.length === 0;
    }
}

function solution(scoville, K) {
    let operations = 0;
    const heap = new MinHeap();

    // 스코빌 지수 배열을 힙에 삽입
    scoville.forEach(value => heap.insert(value));

    while (heap.heap[0] < K) {
        if (heap.heap.length < 2) return -1; // 두 개 이상의 요소가 없으면 -1 반환

        // 가장 작은 두 값을 추출
        const first = heap.extractMin();
        const second = heap.extractMin();

        // 새로운 스코빌 지수 계산
        const newScoville = first + (second * 2);

        // 새로운 스코빌 지수를 힙에 삽입
        heap.insert(newScoville);
        operations++; // 연산 횟수 증가
    }

    return operations;
}
