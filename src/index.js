module.exports = function solveEquation(equation) {
  // your implementation
   var str=equation.split(" ").join("");
   var a_kvadr=str.match(/-?\d+\*x\^2/)[0];
   var b_kvadr= (str.match(/[-\+]\d+\*x/g)[1]) ? str.match(/[-\+]\d+\*x/g)[1] : str.match(/[-\+]\d+\*x/g)[0];
   var c=str.match(/[-\+]\d+$/)[0];
   a_kvadr=parseInt(a_kvadr);
   b_kvadr=parseInt(b_kvadr);

   var res1=(-1*b_kvadr+Math.sqrt(Math.pow(b_kvadr,2)-4*a_kvadr*c))/(2*a_kvadr);
   var res2=(-1*b_kvadr-Math.sqrt(Math.pow(b_kvadr,2)-4*a_kvadr*c))/(2*a_kvadr);
   res1=Math.round(res1);
   res2=Math.round(res2);
   if (res1<res2)
      return [res1, res2];
   else
      return [res2, res1];
}
