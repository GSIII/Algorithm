class MinHeap {
    constructor(){
        this.heap=[null]
    }
    
    push(value){
        this.heap.push(value);
        
        let currentIndex = this.heap.length-1;
        let parentIndex = Math.floor(currentIndex/2)
        
        while(parentIndex!==0 && this.heap[parentIndex]>value) {
            let temp = this.heap[parentIndex];
            this.heap[parentIndex] = value
            this.heap[currentIndex] = temp;
            
            currentIndex = parentIndex
            parentIndex = Math.floor(currentIndex/2)
        }
    }
    
    pop(){
        if (this.heap.length===2) return this.heap.pop();
        const returnValue = this.heap[1]
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = currentIndex*2;
        let rightIndex = currentIndex*2+1
        
        while(this.heap[leftIndex]!==undefined) {
            let smallerIndex = leftIndex;
            if (this.heap[rightIndex]!==undefined && this.heap[leftIndex]>this.heap[rightIndex]) {
             smallerIndex = rightIndex
            }
            if (this.heap[currentIndex]>this.heap[smallerIndex]) {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[smallerIndex];
                this.heap[smallerIndex] = temp;
                
                currentIndex = smallerIndex;
                leftIndex = currentIndex*2;
                rightIndex = currentIndex*2+1
            } else {
                break
            }
        }
        return returnValue
    }
}

function solution(scoville, K) {
    let minHeap = new MinHeap();
    scoville.forEach((score)=>minHeap.push(score))
    
    let count = 0
    
    while (minHeap.heap.length>2 && minHeap.heap[1]<K) {
        let first = minHeap.pop();
        let second = minHeap.pop();
        
        let newScore = first+(second*2)
        minHeap.push(newScore)
        count++
    }
    return minHeap.heap[1]>=K ? count:-1
}