grade_to_point = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F' : 0.0
}
major_total_score = 0
total_credits = 0
total_score = 0
for _ in range(20):
    course,credit,grade = input().split()
    credit = float(credit)
    if grade == 'P':
        continue
    total_credits += credit
    total_score += grade_to_point[grade] * credit
major_total_score = total_score / total_credits
print(major_total_score)