module.exports = function toReadable (number) {
    /*var a = [];
    a.unshift ('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine');
    var b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; 
    var c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var d =['hundred']; 
    for ( var i = 0; i < a.length, i < b.length, i < c.length, i < d.length; i++);
     if (number == 0) {
        return 'zero';
     }   else if(number >=1 && number <=9) {
        return(a[i]);
     }   else if(number >=10 && number <=19) {
            return(b[i]);
     } else if(number >=100) {
        return(a[i++] + ' ' + d);
     };
    };
    */
   var a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   var b = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; 
   var c = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   var d = ['hundred'];

   var tReadable = (num) => {
   let i = toArray(num);
   let h = i[0];
   let t = i[1];
   let o = i[2];

   return `${a[h]} hundred ${c[t]} ${a[o]}`;
   }
   
   function toArray(num){
      return String(num).split('').map((val) => Number(val) -1 );
   }

   return (tReadable(number)).replace(" undefined", "");
}
    