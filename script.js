function onProcess() {
    var input = document.getElementById("input1").value;
    if (!input) {
      alert("Invalid input");
    }
   function replaceUnderscores(match) {
        return match.replace(/\\_/g,'_');
    }
     var output = "";
    output = input.replace(/(?:\r\n|\r|\n)/g, "\\n");
    output =output.replace(/_/g, '\\_');
    output = output.replace(/"/g, '\\"');
    output = output.replace(/(`)(.*?)(`)/gs, replaceUnderscores);
    document.getElementById("output1").value = output;
  }
  
  function offProcess() {
    var input = document.getElementById("input2").value;
    if (!input) {
      alert("Invalid input");
    }
    var output = "";
    output = input.replace(/\\n/g, "\n");
      output = output.replace(/\\_/g,'_');
      output = output.replace(/\\"/g,'"');
    document.getElementById("output2").value = output;
  }
  function offonProcess() {
    function replaceUnderscores(match) {
        return match.replace(/\\_/g,'_');
    }
    var input = document.getElementById("input3").value;
    if (!input) {
      alert("Invalid input");
    }
    var output = "";
    output =input.replace(/_/g, '\\_');
    output = output.replace(/(`)(.*?)(`)/gs, replaceUnderscores);
    document.getElementById("output3").value = output;
  }