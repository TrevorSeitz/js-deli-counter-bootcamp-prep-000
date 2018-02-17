function takeANumber(katzDeliLine, customer) {
  var place = katzDeliLine.indexOf(customer);

  katzDeliLine.push(customer);
  return 'Welcome, Ada. You are number ' + place + ' in line.';

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = katzDeliLine[1];
    katzDeliLine.slice(1);
    return serving;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
    return katzDeliLine;
  }
}
