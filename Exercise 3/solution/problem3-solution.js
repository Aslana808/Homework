function iterate_name(names) {
    let count = 0;
    function Call() {
      if (count < names.length) {
        console.log(names[count]);
        count++;
      } else {
        console.log("Everyone accounted for");
      }
    }
    return Call;
  }
  const iterate = iterate_name(["Davit", "Jemali", "zaza", "ushangi"]);
  iterate();
  iterate(); 
  iterate(); 
  iterate();
  iterate();