def solution(nums):
    max_can_take = len(nums) // 2
    
    unique_type_cnt = len(set(nums))
    
    return min(max_can_take, unique_type_cnt)