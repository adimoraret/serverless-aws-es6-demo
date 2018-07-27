export function news(event, context, callback) {

  const happyDay = () => 'Friday'
  const buildColor = 'green'
  const goodNews = [`Today is ${happyDay()}`, `Build is ${buildColor}`]

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(goodNews),
  })
}