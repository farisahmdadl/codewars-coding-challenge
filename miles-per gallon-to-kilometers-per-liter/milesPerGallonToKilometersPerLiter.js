function converter (mpg) {
    let imperialGalon = 4.54609188
    let mile = 1.609344
    return (mpg*mile)/imperialGalon;
  }
  
  console.log(converter(300))
  console.log(converter(400))