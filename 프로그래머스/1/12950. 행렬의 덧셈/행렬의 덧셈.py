def solution(arr1, arr2):
    answer = []
    for i in range(len(arr1)):
        temp_row = []
        for j in range(len(arr1[i])):
            sum_row = arr1[i][j] + arr2[i][j]
            temp_row.append(sum_row)
        answer.append(temp_row)
    return answer