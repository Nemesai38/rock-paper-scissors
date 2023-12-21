const items = [
    {name: 'Bike', price: 100},
    {name: 'TV' , price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
  ]
  
  const filteredItems = items.filter((get) => {
    return get.price <= 100
  })

  const itemNames = items.map((names) => {
    return names.name
  })

  const itemPrices = items.map((cost) => {
    return cost.price 
  })

  const foundItem = items.find((item) => {
    return item.name === 'Album'
  })

  items.forEach((item) => {
    console.log(item.name)
  })

  const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
  })

  const checkEveryItem = items.every((item) => {
    return item.price <= 1000
  })

  const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
  }, 0)

  const numbers = [1, 2, 3, 5, 7, 9]
  
  const includes = numbers.includes(4)


  console.log(items)
  console.log(filteredItems)
  console.log(itemNames)
  console.log(itemPrices)
  console.log(foundItem)
  console.log(hasInexpensiveItems)
  console.log(checkEveryItem)
  console.log(total)
  console.log(includes)

