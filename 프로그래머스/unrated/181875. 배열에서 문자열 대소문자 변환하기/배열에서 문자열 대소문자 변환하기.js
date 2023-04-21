function solution(strArr) {
    let newArr = strArr.map((item, index) => 
                            strArr.indexOf(item) % 2 === 0
                            ? item.toLowerCase()
                            : item.toUpperCase()
                           )

    return newArr
}