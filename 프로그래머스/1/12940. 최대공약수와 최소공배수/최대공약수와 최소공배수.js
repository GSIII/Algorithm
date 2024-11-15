function solution(n, m) {
    let gcd;
    for (let i=1;i<=m;i++) {
        if (n%i===0 && m%i===0) {
            gcd = Math.max(i)
        }
    }
    let lcm = (n/gcd)*(m/gcd)*gcd
    return [gcd,lcm]
}