def solution(phone_number):
    last_digit = phone_number[-4:]
    mask_digit = len(phone_number) - 4
    
    mask = '*' * mask_digit
    
    return mask + last_digit