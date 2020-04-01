function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "sample.txt", true);

  xhr.onload = function() {
    /*
       200 : correct
       403 : forbidden
       404 : not found
       */
    if (this.status === 200) {
      document.getElementById(
        "output"
      ).innerHTML = `<h1 class="h1">${this.responseText}</h1>`;
    }
  };

  //   OR WE CAN WRITE IT LIKE THIS...

  xhr.onreadystatechange = function() {
    /*
       0 = unsent
       1 = opened
       2 = received
       3 = loading
       4 = done
       */

    if (this.status === 200 && this.readyState === 4) {
      document.getElementById(
        "output"
      ).innerHTML = `<h1 class="h1">${this.responseText}</h1>`;
    }
  };

  xhr.send();
}

document.getElementById("button1").addEventListener("click", loademployeeData);

document.getElementById("button2").addEventListener("click", loademployeesData);

document.getElementById("button3").addEventListener("click", loadonlineData);

function loademployeeData() {
  //create new server request
  const xhr = new XMLHttpRequest();

  //get the file data
  xhr.open("GET", "employee.json", true);

  //read the data and output
  xhr.onload = function() {
    if (this.status === 200) {
      const dataArr1 = JSON.parse(this.responseText);
      let content = '<ul class="list-unstyled">';
      for (i in dataArr1) {
        content += `<li class="list-item">${i} : ${dataArr1[i]}</li>`;
      }
      content += "</ul>";
      document.getElementById("output1").innerHTML = content;
    }
  };

  xhr.send();
}

function loademployeesData() {
  //create new server request
  const xhr = new XMLHttpRequest();

  //get the file data
  xhr.open("GET", "employees.json", true);

  //read the data and output
  xhr.onload = function() {
    if (this.status === 200) {
      const dataArr1 = JSON.parse(this.responseText);

      dataArr1.forEach(item => {
        let content = '<ul class="list-unstyled">';
        for (i in item) {
          content += `<li class="list-item">${i} : ${item[i]}</li>`;
        }
        content += "</ul><hr/>";
        document.getElementById("output2").innerHTML += content;
      });
    }
  };

  xhr.send();
}

// receiving data from the online json placeholder website...
function loadonlineData() {
  //create new server request
  const xhr = new XMLHttpRequest();

  //get the file data
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  //read the data and output
  xhr.onload = function() {
    if (this.status === 200) {
      const dataArr1 = JSON.parse(this.responseText);

      //            console.log(dataArr1);
      let content = "";
      dataArr1.forEach(item => {
        content += `<h3 class='h3 text-secondary'>Post Id : ${item.id}</h3><h3 class='h3 text-primary'>${item.title}</h3><p class='lead text-muted'>${item.body}</p>`;
      });
      document.getElementById("output3").innerHTML += content;
    }
  };

  xhr.send();
}

document.getElementById("button4").addEventListener("click", loadData);

document.getElementById("button5").addEventListener("click", loadJsonData);

document.getElementById("button6").addEventListener("click", loadimageData);

function loadData() {
  fetch("js/sample.txt")
    .then(response => {
      return response.text();
    })
    .then(data => {
      document.getElementById("output4").innerHTML = data;
    })
    .catch(error => {
      console.log(error);
    });
}

function loadJsonData() {
  fetch("js/employees.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      let output = "";
      data.forEach(employee => {
        output += "<ul>";
        for (item in employee) {
          output += `<li>${item} == ${employee[item]}</li>`;
        }
        output += "</ul><hr/>";
      });
      document.getElementById("output5").innerHTML = output;
    })
    .catch(error => {
      console.log(error);
    });
}

function loadimageData() {
  fetch("https://picsum.photos/list")
    .then(response => {
      return response.json();
    })
    .then(data => {
      let output = "<ul>";
      data.forEach(data_content => {
        output += `<li> <a target=\'_blank\' href=\'${data_content.post_url}\'>${data_content.author}</a> 
               <h6>${data_content.author}</h6></li>`;
        output += "</ul><hr/>";
      });
      document.getElementById("output6").innerHTML = output;
    })
    .catch(error => {
      console.log(error);
    });
}
