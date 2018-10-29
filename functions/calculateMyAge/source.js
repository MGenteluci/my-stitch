exports = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  if(currentDate.getMonth() + 1 >= 2 && currentDate.getDate() >= 6) {
    return String(currentYear - 1997);
  }
  
  return String(currentYear - 1997 - 1);
};
