export const objectSearchToSummary = (data) => {
    return data[0].data.map(item=>({
        date:item.date,
        total:item.value,
        risk:data[1].data.find(riskItem=>(item.date===riskItem.date)).value
    }))   
}
