const round = (num, decimals) => {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export default round;
