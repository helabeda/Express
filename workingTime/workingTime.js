const workinghours = (req, res, next) => {
    let date = new Date();
    let days = date.getDay();
    let hours = date.getHours();1
    // if(true){
    if (days == 0 || days == 5 || hours < 9 || hours > 17) {
      res.sendFile("workingTime.html", { root: __dirname });
    } else {
      next();
    }
  };
  
  module.exports = workinghours;