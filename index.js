function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  return (katzDeliLine.index)f(customer) + 1);
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
