import elements from './elements.json'


const serializeElementsOfPeriodicTable =  () => {

    return elements.rows.map((row)=>{
        const c = []
        const series = [...Array(19).keys()].slice(1)

        row.forEach((r) => {
            c.push({
                colIndex: r.colIndex,
                symbol: r.symbol,
                active: true,
                bgColor: r.bgColor,
                txColor: r.txColor,
                nameEs: r.name_es,
                atomicNumber: r.atomicNumber,
                atomicWeight: r.weight.toFixed(2)
            })
        })


        series.forEach(s => {
            if (!c.some(r => r.colIndex === s)) {
                c.push({
                    colIndex: s,
                    symbol: "",
                    active: false
                })
            }
        })

        c.sort((a, b) => a.colIndex - b.colIndex)

        return c
    })

}

export {
    serializeElementsOfPeriodicTable
}