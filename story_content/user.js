function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Y1TqIW1yGC":
        Script1();
        break;
      case "5xzRhrzHxXI":
        Script2();
        break;
      case "6SJrMyr4Hge":
        Script3();
        break;
      case "5gmirf85flD":
        Script4();
        break;
      case "6Uzj8iYKRO7":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  window.print();
}

