//Sleep debt Calculator

//how many hours of sleep got each week.
// eg : 1 day = 8 hours // 1 week = 56hours

const getSleepHours = (day) => {
  //funct should accept a day and return numofhours you slept

  // if (day==='Monday'){
  //   return 8
  // } else if (day==='Tuesday'){
  //   return 7
  // }else{
  //   console.log('Please enter valid days')
  // }
  // }

  switch (day) {
    case (day = 'Monday'):
      return 8
      break
    case (day = 'Tuesday'):
      return 7
      break
    case (day = 'Wednesday'):
      return 6
      break
    case (day = 'Thursday'):
      return 9
      break
    case (day = 'Friday'):
      return 4
      break
    case (day = 'Saturday'):
      return 10
      break
    case (day = 'Sunday'):
      return 11
      break
    default:
      console.log('Please enter valid days')
      break
  }
}

//test purpose only
// console.log(getSleepHours('Sunday'))

//get the total sleep hours that you actually slept
const getActualSleepHours = () => {
  //call the getActualSleepHours
  return (
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday')
  )
}

//print sum ofthe getactualsleephours
// console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  let idealHours = 8
  return idealHours * 7
}

console.log(`This is your actual sleep hours : ${getActualSleepHours()} hours`)
console.log(`This is your ideal sleep hours : ${getIdealSleepHours()} hours`)

//its time to calculate sleep debt
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()

  //write if else  to output the result to the console.
  if (actualSleepHours === idealSleepHours) {
    console.log('You got perfect hour(s) sleep. ItS PERFECT !.')
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      'You got ' +
        (actualSleepHours - idealSleepHours) +
        ' hour(s) sleep than you needed this week. Work Out !.'
    )
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      'You got ' +
        (idealSleepHours - actualSleepHours) +
        ' hour(s) less sleep than you needed this week. Get some rest.'
    )
  } else {
    console.log('Error!')
  }
}

calculateSleepDebt()
