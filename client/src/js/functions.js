/* Functions */


function sortArr (arr, prop) {
    arr.sort (
      function (a, b) {
        if (a[prop] < b[prop]){
            return -1;
        } else if (a[prop] > b[prop]){
            return 1;
        } else {
            return 0;   
        }
      }
    );
}