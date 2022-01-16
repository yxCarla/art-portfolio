function openNav() {
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

function closeNav() {
  var links = document.getElementById("myLinks");
    if (links.style.display === "none") {
      links.style.display = "block";
    } else {
      links.style.display = "none";
    }
}

function checkNav() {
  var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      closeNav();
      //links.style.textDecoration = "none";
    } else {
      links.style.display = "none";
    }
}

function changeColumns() {
  var rangeOutput = document.getElementById('rangeOutput');
  rangeOutput.innerHTML = myRange.value;

// code for 2 columns  
  var columnSize = document.getElementById('columnSizing');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing2');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing3');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing4');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing5');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing6');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing7');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing8');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }  
  var columnSize = document.getElementById('columnSizing9');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing10');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing11');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing12');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing13');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing14');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing15');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing16');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing17');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing18');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing19');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing20');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing21');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing22');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing23');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing24');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing25');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing26');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing27');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  }
  var columnSize = document.getElementById('columnSizing28');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 
  var columnSize = document.getElementById('columnSizing29');
  if(myRange.value == '2') {
    columnSize.classList.add('col-6');
  } 

  



// code for 3 columns
  var columnSize = document.getElementById('columnSizing');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing2');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing3');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing4');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing5');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing6');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing7');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing8');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing9');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing10');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing11');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing12');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing13');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing14');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing15');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing16');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing17');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing18');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing19');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing20');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing21');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing22');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing23');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing24');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing25');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing26');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing27');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  }
  var columnSize = document.getElementById('columnSizing28');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  var columnSize = document.getElementById('columnSizing29');
  if(myRange.value == '3') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-3');
    columnSize.classList.add('col-4');
  } 
  




// code for 4 columns
  var columnSize = document.getElementById('columnSizing');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing2');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing3');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing4');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing5');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing6');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing7');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing8');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing9');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing10');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing11');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing12');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing13');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing14');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing15');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing16');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing17');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing18');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing19');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing20');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing21');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing22');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing23');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing24');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing25');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing26');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing27');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  }
  var columnSize = document.getElementById('columnSizing28');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  var columnSize = document.getElementById('columnSizing29');
  if(myRange.value == '4') {
    columnSize.classList.remove('col-6');
    columnSize.classList.remove('col-4');
    columnSize.classList.add('col-3');
  } 
  

}

