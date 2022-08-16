function mix(s1, s2) {
  const s1Dictionary = {}
  const s2Dictionary = {}

  const noWhiteSpacesS1 = s1.replace(/\s/g, '')
  const noWhiteSpacesS2 = s2.replace(/\s/g, '')

  const arrS1 = noWhiteSpacesS1.split('')
  const arrS2 = noWhiteSpacesS2.split('')

  arrS1.forEach(char => {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) return
    if (!s1Dictionary[char]) {
      s1Dictionary[char] = 1
      return
    }
    s1Dictionary[char] += 1
  })

  arrS2.forEach(char => {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) return
    if (!s2Dictionary[char]) {
      s2Dictionary[char] = 1
      return
    }
    s2Dictionary[char] += 1
  })

  const s1DictionaryLength = Object.entries(s1Dictionary).length
  const s2DictionaryLength = Object.entries(s2Dictionary).length

  const longestDictionary =
    s1DictionaryLength > s2DictionaryLength ? s1Dictionary : s2Dictionary

  const dictionaryArray = []

  const createArrayOfStrings = (
    letter,
    length,
    mayorityArray,
    bothEqual = false
  ) => {
    const repeatedLetters = new Array(length).fill(letter).join('')
    return bothEqual ? ['=', repeatedLetters] : [mayorityArray, repeatedLetters]
  }

  let maxRepetitions = 0

  for (let char in longestDictionary) {
    const letter = char
    const s1repetitionNumber = s1Dictionary[letter]
    const s2repetitionNumber = s2Dictionary[letter]
    if (s1repetitionNumber > maxRepetitions) maxRepetitions = s1repetitionNumber
    if (s2repetitionNumber > maxRepetitions) maxRepetitions = s2repetitionNumber

    if (s2repetitionNumber < 2 || letter === ',') () => {}
    else {
      // console.log(letter, s1repetitionNumber)
      if (!s1repetitionNumber)
        dictionaryArray.push(
          createArrayOfStrings(letter, s2repetitionNumber, 2)
        )
      if (s1repetitionNumber > s2repetitionNumber)
        dictionaryArray.push(
          createArrayOfStrings(letter, s1repetitionNumber, 1)
        )
      else {
        if (s1repetitionNumber === s2repetitionNumber)
          dictionaryArray.push(
            createArrayOfStrings(letter, s2repetitionNumber, 2, true)
          )
        else
          dictionaryArray.push(
            createArrayOfStrings(letter, s2repetitionNumber, 2)
          )
      }
    }
  }

  const sortedDictionary = dictionaryArray.sort((a, b) => {
    return b[1].length - a[1].length
  })

  const result = sortedDictionary.join('/').replace(/,/g, ':')

  console.log({
    s1Dictionary,
    s2Dictionary,
    dictionaryArray,
    sortedDictionary,
    result
  })

  return result
}

const cases = {
  first: ['Are they here', 'yes, they are here'],
  second: ['looping is fun but dangerous', 'less dangerous than coding']
}

mix(...cases.second)
