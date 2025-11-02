def solution(price, money, count):
    result = 0
    total_price = 0
    for i in range(1,count+1):
        total_price += price * i
    result = total_price - money
    if result < 0:
        return 0
    return result