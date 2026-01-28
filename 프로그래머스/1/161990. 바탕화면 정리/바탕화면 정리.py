def solution(wallpaper):
    lux, luy = 51, 51
    rdx, rdy = 0, 0
    for i in range(len(wallpaper)):
        for j in range(len(wallpaper[i])):
            if wallpaper[i][j] == '#':
                lux = min(lux,i)
                luy = min(luy,j)
                rdx = max(rdx,i+1)
                rdy = max(rdy,j+1)
    return [lux,luy,rdx,rdy]