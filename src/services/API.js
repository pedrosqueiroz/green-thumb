const getPlants = async data => {
  const url = `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${
    data.sunlight
  }&water=${data.water}&pets=${data.pets.toString()}`

  let results

  const handleErrors = response => {
    return !response.ok ? new Error(response.statusText) : response
  }

  await fetch(url)
    .then(handleErrors)
    .then(response => response.json())
    .then(json => {
      results = json
    })
    .catch(err => console.log("error here: ", err))
  return results
}
export default getPlants
