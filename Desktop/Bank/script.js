//business logic
var newCount;
var balance;
function Vava(personnelNumber, Personnel, amount, personnelDate) {
  this.personnelNumber = personnelNumber;
  this.Personnel = Personnel;
  this.amount = amount;
  this.personnelDate = personnelDate;
}

Vava.prototype.fullVava = function() {
  return (
    this.personnelNumber +
    " " +
    this.Personnel +
    " " +
    this.amount +
    " " +
    this.personnelDate
  );
};

//user interface logic
$(document).ready(function() {
  $("#initForm").hide();
  $("#personnelForm").submit(function(event) {
    event.preventDefault();
    var inputtedpersonnelNumber = $("input#personnelNumber").val();
    var inputtedPersonnel = $("input#Personnel").val();
    var inputtedAmount = parseInt($("input#amount").val());
    var inputtedpersonnelDate = $("input#personnelDate").val();
    newCount = new Vava(
      inputtedpersonnelNumber,
      inputtedPersonnel,
      inputtedAmount,
      inputtedpersonnelDate
    );
    $("#initForm").show();
    $("#personnelForm").hide();

    $("#initVava").text(newCount.personnelNumber);
    $("#initPersonnel").text(newCount.Personnel);
    $("#initialAmout").text(newCount.amount);
    $("#initialpersonnelDate").text(newCount.personnelDate);
    $("button#submit").click(function() {});
    $("#deposit").click(function() {
      $("#depForm").show();
      $("#initForm").hide();
      $("input#depositPersonnel").val(newCount.Personnel);
      $("input#personnelVava").val(newCount.personnelNumber);
    });
    $("#dep").click(function() {
      var deposit = parseInt($("input#depVava").val());
      balance = deposit + newCount.amount;
      console.log(balance);
      $("#VavaForm").show();
      $("#depForm").hide();
      $("#VavaPersonnel").text(newCount.Personnel);
      $("#Vava").text(newCount.personnelNumber);
      $("#VavapersonnelDate").text(newCount.personnelDate);
      $("#VavaAmout").text(balance);
    });
    $("#withd").click(function() {
      $("#withdForm").show();
      $("#initForm").hide();
      $("input#withdPersonnel").val(newCount.Personnel);
      $("input#withdVava").val(newCount.personnelNumber);
    });
    $("#withd").click(function() {
      var withd = parseInt($("input#withdAmout").val());
      balance = newCount.amount - withd;
      console.log(balance);
      var personnelDate = $("input#depositpersonnelDate").val();
      $("#VavaForm").show();
      $("#withdForm").hide();
      $("#VavaPersonnel").text(newCount.Personnel);
      $("#Vava").text(newCount.personnelNumber);
      $("#VavapersonnelDate").text(newCount.personnelDate);
      $("#VavaAmout").text(balance);
    });
  });
});
