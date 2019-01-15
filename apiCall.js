function getInstitute(){
  var  e = document.getElementById ("sel-in"  );
  var  institute = e.options[e.selectedIndex].value;
  return institute
}
function getInsOther(){
  institute =   document.getElementById("ins").value;
  //console.log(institute);
  
  return institute
}
var name = document.getElementById("select").value;
function validateForm() {
  if (name == "Counter Strike" || name == "Dota 2" || name == "Soap Soccer") {


    f1 = document.getElementById("tname").value;
    f2 = document.getElementById("lname").value;
    f3 = document.getElementById("lcnic").value;
    f4 = getInstitute()
    if(f4 == "Other"){
      f4=""
      //console.log("fb="+f4)
      f4= getInsOther()
      //console.log(f4)
    }
    f5 = document.getElementById("pnumber").value;
    f6 = document.getElementById("select").value;
    f7 = document.getElementById("p1Name").value;
    f8 = document.getElementById("p1cnic").value;
    f9 = document.getElementById("p2Name").value;
    f10 = document.getElementById("p2cnic").value;
    f11 = document.getElementById("p3Name").value;
    f12 = document.getElementById("p3cnic").value;
    f13 = document.getElementById("p4Name").value;
    f14 = document.getElementById("p4cnic").value;
    //console.log(f1);

    if (
      f1 == "" ||
      f2 == "" ||
      f3 == "" ||
      f4 == "" ||
      f5 == "" ||
      f6 == "" ||
      f7 == "" ||
      f8 == "" ||
      f9 == "" ||
      f10 == "" ||
      f11 == "" ||
      f12 == "" ||
      f13 == "" ||
      f14 == ""
    ) {
      return false;
    } else {
      return true;
    }
  } else if (name == "Chess" || name == "Fifa 19" || name == "Sketch It") {
    f1 = document.getElementById("tname").value;
    f2 = document.getElementById("lname").value;
    f3 = document.getElementById("lcnic").value;
    f4 = getInstitute()
    
    if(f4 == "Other"){
      f4=""
      //console.log("fb="+f4)
      f4= getInsOther()
      //console.log(f4)
    }
    f5 = document.getElementById("pnumber").value;
    f6 = document.getElementById("select").value;
    if (f1 == "" || f2 == "" || f3 == "" || f4 == "" || f5 == "" || f6 == "") {
      return false;
    } else {
      return true;
    }
  } else if (name == "PUBG Mobile") {
    f1 = document.getElementById("tname").value;
    f2 = document.getElementById("lname").value;
    f3 = document.getElementById("lcnic").value;
    f4 = getInstitute()
    if(f4 == "Other"){
      f4=""
      //console.log("fb="+f4)
      f4= getInsOther()
      //console.log(f4)
    }
    f5 = document.getElementById("pnumber").value;
    f6 = document.getElementById("select").value;
    f7 = document.getElementById("p1Name").value;
    f8 = document.getElementById("p1cnic").value;
    f9 = document.getElementById("p2Name").value;
    f10 = document.getElementById("p2cnic").value;
    f11 = document.getElementById("p3Name").value;
    f12 = document.getElementById("p3cnic").value;
    if (
      f1 == "" ||
      f2 == "" ||
      f3 == "" ||
      f4 == "" ||
      f5 == "" ||
      f6 == "" ||
      f7 == "" ||
      f8 == "" ||
      f9 == "" ||
      f10 == "" ||
      f11 == "" ||
      f12 == ""
    ) {
      return false;
    } else {
      return true;
    }
  } else if (name == "Treasure Hunt" || name == "Fitness Challenge" ) {
    f1 = document.getElementById("tname").value;
    f2 = document.getElementById("lname").value;
    f3 = document.getElementById("lcnic").value;
    f4 = getInstitute()
    if(f4 == "Other"){
      f4=""
      //console.log("fb="+f4)
      f4= getInsOther()
      //console.log(f4)
    }
    f5 = document.getElementById("pnumber").value;
    f6 = document.getElementById("select").value;
    f7 = document.getElementById("p1Name").value;
    f8 = document.getElementById("p1cnic").value;
    f9 = document.getElementById("p2Name").value;
    f10 = document.getElementById("p2cnic").value;
    if (
      f1 == "" ||
      f2 == "" ||
      f3 == "" ||
      f4 == "" ||
      f5 == "" ||
      f6 == "" ||
      f7 == "" ||
      f8 == "" ||
      f9 == "" ||
      f10 == ""
    ) {
      return false;
    } else {
      return true;
    }
  }
}
function submitData() {
  document.getElementById("r-but").disabled = true;
  if (name == "Counter Strike" || name == "Dota 2" || name == "Soap Soccer") {
    var uni
    if (validateForm()) {
      uni=getInstitute()
        if(uni == "Other"){
          uni =  document.getElementById("ins").value
        }
      if(f3.length == 13 && f8.length == 13 && f10.length == 13 && f12.length == 13 && f14.length == 13 ){
      $.ajax({
        url:
          "https://script.google.com/macros/s/AKfycbw0G-iCIUji0i2IpfmMIDPkSqJk78Z6Ai1k3u2CfztF1u7IonU/exec",
        data: {
          "Team Name": document.getElementById("tname").value,
          "Team Lead Name": document.getElementById("lname").value,
          LeaderCNIC: document.getElementById("lcnic").value,
          LeaderEmail: document.getElementById("email").value,
          "Leader Institute": uni,
          "Contact #": document.getElementById("pnumber").value,
          "Competition Name": document.getElementById("select").value,
          Member1Name: document.getElementById("p1Name").value,
          Member1CNIC: document.getElementById("p1cnic").value,
          Member2Name: document.getElementById("p2Name").value,
          Member2CNIC: document.getElementById("p2cnic").value,
          Member3Name: document.getElementById("p3Name").value,
          Member3CNIC: document.getElementById("p3cnic").value,
          Member4Name: document.getElementById("p4Name").value,
          Member4CNIC: document.getElementById("p4cnic").value
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function() {
            window.location.href = "success.html";
          },
          200: function() {
            window.location.href = "success.html";
          }
        }
      });
    }
    else{
      document.getElementById("r-but").disabled = false;      
      document.getElementById("div11").innerHTML =
        '<p style="color:red">Please enter a valid CNIC</p>';
        
    }
    } else {
      document.getElementById("r-but").disabled = false;
      document.getElementById("div9").innerHTML =
        '<p style="color:red">Please fill all the fields</p>';
    }
  } else if (name == "Chess" || name == "Fifa 19" || name == "Sketch It") {
    var uni
    if (validateForm()) {
      if(f3.length == 13){
        uni=getInstitute()
        if(uni == "Other"){
          uni =  document.getElementById("ins").value
        }

      $.ajax({
        url:
          "https://script.google.com/macros/s/AKfycbw0G-iCIUji0i2IpfmMIDPkSqJk78Z6Ai1k3u2CfztF1u7IonU/exec",
        data: {
          "Team Name": document.getElementById("tname").value,
          "Team Lead Name": document.getElementById("lname").value,
          LeaderCNIC: document.getElementById("lcnic").value,
          LeaderEmail: document.getElementById("email").value,
          "Leader Institute": uni,
          "Contact #": document.getElementById("pnumber").value,
          "Competition Name": document.getElementById("select").value
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function() {
            window.location.href = "success.html";
          },
          200: function() {
            window.location.href = "success.html";
          }
        }
      });
    }
    else{
      document.getElementById("div11").innerHTML =
        '<p style="color:red">Please enter a valid CNIC</p>';
        document.getElementById("r-but").disabled = false;
    }
    }
    else {
      document.getElementById("r-but").disabled = false;
      document.getElementById("div9").innerHTML =
        '<p style="color:red">Please fill all the fields</p>';
       
    }
  } else if (name == "PUBG Mobile") {
    var uni
    if (validateForm()) {
      if(f3.length == 13 && f8.length == 13 && f10.length == 13 && f12.length == 13){
        uni=getInstitute()
        if(uni == "Other"){
          uni =  document.getElementById("ins").value
        }
        $.ajax({
        url:
          "https://script.google.com/macros/s/AKfycbw0G-iCIUji0i2IpfmMIDPkSqJk78Z6Ai1k3u2CfztF1u7IonU/exec",
        data: {
          "Team Name": document.getElementById("tname").value,
          "Team Lead Name": document.getElementById("lname").value,
          LeaderCNIC: document.getElementById("lcnic").value,
          LeaderEmail: document.getElementById("email").value,
          "Leader Institute":uni,
          "Contact #": document.getElementById("pnumber").value,
          "Competition Name": document.getElementById("select").value,
          Member1Name: document.getElementById("p1Name").value,
          Member1CNIC: document.getElementById("p1cnic").value,
          Member2Name: document.getElementById("p2Name").value,
          Member2CNIC: document.getElementById("p2cnic").value,
          Member3Name: document.getElementById("p3Name").value,
          Member3CNIC: document.getElementById("p3cnic").value
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function() {
            window.location.href = "success.html";
          },
          200: function() {
            window.location.href = "success.html";
          }
        }
      });
    }
    else{
      document.getElementById("div11").innerHTML =
      '<p style="color:red">Please enter a valid CNIC</p>';
      document.getElementById("r-but").disabled = false;
    }
    } else {
      document.getElementById("r-but").disabled = false;
      document.getElementById("div9").innerHTML =
        '<p style="color:red">Please fill all the fields</p>';
    }
  } else if (name == "Treasure Hunt" || name == "Fitness Challenge") {
    var uni
    if (validateForm()) {
      if(f3.length == 13 && f8.length == 13 && f10.length == 13){
        uni=getInstitute()
        if(uni == "Other"){
          uni =  document.getElementById("ins").value
        }
        $.ajax({
        url:
          "https://script.google.com/macros/s/AKfycbw0G-iCIUji0i2IpfmMIDPkSqJk78Z6Ai1k3u2CfztF1u7IonU/exec",
        data: {
          "Team Name": document.getElementById("tname").value,
          "Team Lead Name": document.getElementById("lname").value,
          LeaderCNIC: document.getElementById("lcnic").value,
          LeaderEmail: document.getElementById("email").value,
          "Leader Institute": uni,
          "Contact #": document.getElementById("pnumber").value,
          "Competition Name": document.getElementById("select").value,
          Member1Name: document.getElementById("p1Name").value,
          Member1CNIC: document.getElementById("p1cnic").value,
          Member2Name: document.getElementById("p2Name").value,
          Member2CNIC: document.getElementById("p2cnic").value
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function() {
            window.location.href = "success.html";
          },
          200: function() {
            window.location.href = "success.html";
          }
        }
      });
    }
      else{
        document.getElementById("div11").innerHTML =
        '<p style="color:red">Please enter a valid CNIC</p>';
        document.getElementById("r-but").disabled = false;
      }
    } else {
      document.getElementById("r-but").disabled = false;
      document.getElementById("div9").innerHTML =
        '<p style="color:red">Please fill all the fields</p>';
    }
  }
}
