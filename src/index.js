module.exports = function toReadable (number) {
    var a = [];
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