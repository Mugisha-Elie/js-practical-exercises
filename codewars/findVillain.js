function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  
  // your code here
  const monthIndex = birthday.getMonth();
  const day = birthday.getDate();

  const dayLastDigit = day % 10;

  const firstName = `The ${m[monthIndex]} ${d[day]}`

  return `${firstName} ${lastName}`;
}


console.log(getVillainName("March 3"))