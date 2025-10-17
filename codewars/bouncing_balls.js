function bouncingBall(h,  bounce,  window) {
  let count = 0;
  let newH = h;
  while(!(newH < 1.5)){
    newH = (h / bounce) - h;
    count++
  }
  return count;
}

console.log(bouncingBall(2, 0.5, 1));