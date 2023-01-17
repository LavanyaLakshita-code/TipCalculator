function calculateBill() {
    var billInput = Number(document.getElementById("billTotalInput").value);
    var noOfPeople = Number(document.getElementById("numberOfPeople").value);
    perPersonTot = Number(document.getElementById("perPersonTotal").innerText);
    perPersTip = Number(document.getElementById("perPersonTip").innerText);
    var tipInp = Number(document.getElementById("tipInput").value);
    var tipPer = tipInp / 100;
    var totalTip = billInput * tipPer;
    var total = billInput + totalTip;
    var totalPerPerson = total / noOfPeople;
    perPersonTotal.innerText = `$${totalPerPerson.toFixed(2)}`;
    perPerTip = totalTip / noOfPeople;
    perPersonTip.innerText = `$${perPerTip.toFixed(2)}`;
  }
  
  function calculateButton() {
    var billInput = Number(document.getElementById("billTotalInput").value);
    var tipPer = tipInput / 100;
    var totalTip = billInput * tipPer;
    var total = billInput + totalTip;
    var noOfPeople = Number(document.getElementById("numberOfPeople").value);
    var totalPerPerson = total / noOfPeople;
    perPersonTot = Number(document.getElementById("perPersonTotal").innerText);
    perPersonTotal.innerText = totalPerPerson;
    perPerTip = totalTip / noOfPeople;
    perPersTip = Number(document.getElementById("perPersonTip").innerText);
    perPersonTip.innerText = perPerTip;
  }
  
  function tip5() {
    tipInput = 5;
    calculateButton();
  }
  
  function tip10() {
    tipInput = 10;
    calculateButton();
  }
  
  function tip15() {
    tipInput = 15;
    calculateButton();
  }
  
  function tip25() {
    tipInput = 25;
    calculateButton();
  }
  
  function tip50() {
    tipInput = 50;
    calculateButton();
  }
  
  function numOfPpl() {
    var noOfPeople = Number(document.getElementById("numberOfPeople").value);
    if (noOfPeople <= 0) {
      return;
    }
    calculateBill();
  }
  
  function resetAll() {
    document.getElementById("billTotalInput").value = "";
    document.getElementById("numberOfPeople").value = 1;
    document.getElementById("perPersonTip").innerText = "$0.00";
    document.getElementById("perPersonTotal").innerText = "$0.00";
    document.getElementById("tipInput").value = "";
  }
  