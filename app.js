//$(document).ready();

/*
  $.getJSON("http://time.jsontest.com", function(data) {
      var text = `Date: ${data.date}`;
      $(".mypanel").html(text);
  });
  
  // IT WORKS (via jQuery):
  $.getJSON("https://raw.githubusercontent.com/serdug/PA-pages/master/test.json", function(data) {
      var text = `Regime: ${data.latest.regimes.equity}<br>
                  Price: ${data.latest.prices.SPY}`;
      $(".tstsignal").html(text);
  });
*/

  $.getJSON("https://cdn.jsdelivr.net/gh/serdug/PA-pages/outtext.json", function(data) {
      // Regimes:
      var equityRegTxt = `${data.equity.signal}`;
      var tbondsRegTxt = `${data.tbonds.signal}`;
      
      // Dates:
      var equityDmyTxt = `${data.equity.dateSig_dmy}`;
      
      $(".equityReg").html(equityRegTxt);
      $(".tbondsReg").html(tbondsRegTxt);
      
      $(".equityDMY").html(equityDmyTxt);
  });

  /*
  // IT WORKS (via jQuery):
  $.ajax({
    type: 'GET',
    url: "http://time.jsontest.com",
    dataType: 'json',
    crossDomain: true,
    success: function(data) {
      var text = `Date: ${data.date}`;
      //$(".tstsignal").html(text);
      $(".mypanel").html(text);
    }
  }).fail(function() {
    console.log('Request failed, inspect arguments for details')
  })
  
  // IT WORKS (via jQuery):
  $.ajax({
    type: 'GET',
    url: "https://raw.githubusercontent.com/serdug/PA-pages/master/test.json",
    dataType: 'json',
    crossDomain: true,
    success: function(data) {
      //var text = `Test: ${data.latest.prices.SPY}`;
      var text = `Test: ${data.latest.regimes.equity}`;
      $(".tstsignal").html(text);
      //$(".mypanel").html(text);
    }
  }).fail(function() {
    console.log('Request failed, inspect arguments for details')
  })
  */


// the following works via html:
/*
<script>
  $(document).ready(pa.functions.initialize());
</script>
*/
/*
var pa = {
  functions: {
    initialize: function() {
  $.getJSON("http://time.jsontest.com", function(data) {
      var text = `Date: ${data.date}`;
      $(".mypanel").html(text);
  });
  
  // IT WORKS (via jQuery):
  $.getJSON("https://raw.githubusercontent.com/serdug/PA-pages/master/test.json", function(data) {
      var text = `Regime: ${data.latest.regimes.equity}<br>
                  Price: ${data.latest.prices.SPY}`;
      $(".tstsignal").html(text);
  });
  
  $.getJSON("https://raw.githubusercontent.com/serdug/PA-pages/master/outtext.json", function(data) {
      // Regimes:
      var equityRegTxt = `${data.equity.signal}`;
      var tbondsRegTxt = `${data.tbonds.signal}`;
      
      // Dates:
      var equityDmyTxt = `${data.equity.dateSig_dmy}`;
      
      $(".equityReg").html(equityRegTxt);
      $(".tbondsReg").html(tbondsRegTxt);
      
      $(".equityDMY").html(equityDmyTxt);
  });
}
},
};
*/


