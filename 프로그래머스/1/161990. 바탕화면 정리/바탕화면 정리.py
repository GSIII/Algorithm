def solution(wallpaper):
    lux, luy = 51, 51
    rdx, rdy = 0, 0
    for i in range(len(wallpaper)):
        for j in range(len(wallpaper[i])):
            if wallpaper[i][j] == '#':
                lux = min(i,lux)
                luy = min(j,luy)
                rdx = max(i+1, rdx)
                rdy = max(j+1, rdy)
    return [lux,luy,rdx,rdy]