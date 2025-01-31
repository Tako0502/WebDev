// alert( null || 2 || undefined ); //2

// let res = alert(1);
// alert( alert(1) || 2 || alert(3) ); //1 => 2

// alert(1 && null && 2);// null

// alert( alert(1) && alert(2) ); //1 => undefined

// alert( null || 2 && 3 || 4 );// 3

// if (age >= 14 && age <= 90){}

// if (!(age >= 14 && age <= 90)){}

// if (-1 || 0) alert( 'first' );//-1, will be execute

// if (-1 && 0) alert( 'second' );//0, will not be execute

// if (null || -1 && 1) alert( 'third' );//1, will be execute

let userName = prompt("Who's there?", "");

if (!userName) {
  alert("Canceled");
} else {
  if (userName !== "Admin") {
    alert("I don't know you");
  } else {
    let pass = prompt("Password?", "");
    if (!pass) {
      alert("Canceled");
    } else {
      if (pass !== "TheMaster") {
        alert("Wrong password");
      } else {
        alert("Welcome!");
      }
    }
  }
}
