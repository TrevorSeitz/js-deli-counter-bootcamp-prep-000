function takeANumber(line, customer) {
  // console.log(customer,);
  line.push(customer);
  var place = line.indexOf(customer) + 1;
  // console.log(line.indexOf(customer));
  //
  // console.log(line);
  return 'Welcome, ' + customer + '. You are number ' + place + ' in line.';

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine = katzDeliLine.slice(1);
    console.log(katzDeliLine);
    return 'Currently serving ' + serving + '.';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
    return katzDeliLine;
  }
}
