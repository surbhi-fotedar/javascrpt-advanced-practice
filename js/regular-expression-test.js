(function() {
  var quotedText = /'([^']*)'/;
  console.log(quotedText.exec("she said 'hello'"));
  console.log(/abc/.test('supabc((t'));

  function findDate(string) {
    var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
    var match = dateTime.exec(string);
    return new Date(Number(match[3]),
      Number(match[2]) - 1,
      Number(match[1]));
  }
  console.log(findDate("30-1-2003"));

})();