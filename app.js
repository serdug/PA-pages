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
  // "https://s3.amazonaws.com/quantrake.com/pages/outtext.json"  // NOT WORKING
  // "https://quantrake.com/s3.eu-west-2.amazonaws.com/pages/outtext.json"  // NOT WORKING
  // "https://quantrake.com/pages/outtext.json"  // NOT WORKING
  // "https://raw.githubusercontent.com/serdug/PA-pages/master/outtext.json"  // TEST OK, latency
  // TO DO: GET from REST API
  $.getJSON("https://raw.githubusercontent.com/serdug/PA-pages/master/outtext.json", function(data) {
      // Regimes:
      var equityRegTxt = `${data.equity.signal}`;
      var tbondsRegTxt = `${data.tbonds.signal}`;
      var oilnf_RegTxt = `${data.oilnf_.signal}`;
      var oilwf_RegTxt = `${data.oilwf_.signal}`;
      var volmf_RegTxt = `${data.volmf_.signal}`;
      var volxw2RegTxt = `${data.volxw2.signal}`;
      
      // APM:
      var equityAPMTxt = `${data.equity.apm}`;
      var tbondsAPMTxt = `${data.tbonds.apm}`;
      var oilnf_APMTxt = `${data.oilnf_.apm}`;
      var oilwf_APMTxt = `${data.oilwf_.apm}`;
      var volmf_APMTxt = `${data.volmf_.apm}`;
      var volxw2APMTxt = `${data.volxw2.apm}`;
      
      // Dates:
      var equityDmyTxt = `${data.equity.dateSig_dmy}`;
      var tbondsDmyTxt = `${data.tbonds.dateSig_dmy}`;
      var oilnf_DmyTxt = `${data.oilnf_.dateSig_dmy}`;
      var oilwf_DmyTxt = `${data.oilwf_.dateSig_dmy}`;
      var volmf_DmyTxt = `${data.volmf_.dateSig_dmy}`;
      var volxw2DmyTxt = `${data.volxw2.dateSig_dmy}`;
      
      // Scaled limits:
      var equityPctTxt = `${data.equity.scalim_pct}`;
      var tbondsPctTxt = `${data.tbonds.scalim_pct}`;
      var oilnf_PctTxt = `${data.oilnf_.scalim_pct}`;
      var oilwf_PctTxt = `${data.oilwf_.scalim_pct}`;
      var volmf_PctTxt = `${data.volmf_.scalim_pct}`;
      var volxw2PctTxt = `${data.volxw2.scalim_pct}`;
      //var equityPctTxt = `${data.equity.SPY.scalim_pct}`;
      //var tbondsPctTxt = `${data.tbonds.TLT.scalim_pct}`;
      //var oilnf_PctTxt = `${data.oilnf_.USO.scalim_pct}`;
      //var oilwf_PctTxt = `${data.oilwf_.USO.scalim_pct}`;
      //var volmf_PctTxt = `${data.volmf_.VXXB.scalim_pct}`;
      //var volxw2PctTxt = `${data.volxw2.VXXB.scalim_pct}`;
      
      $(".equityReg").html(equityRegTxt);
      $(".tbondsReg").html(tbondsRegTxt);
      $(".oilnf_Reg").html(oilnf_RegTxt);
      $(".oilwf_Reg").html(oilwf_RegTxt);
      $(".volmf_Reg").html(volmf_RegTxt);
      $(".volxw2Reg").html(volxw2RegTxt);
      
      $(".equityAPM").html(equityAPMTxt);
      $(".tbondsAPM").html(tbondsAPMTxt);
      $(".oilnf_APM").html(oilnf_APMTxt);
      $(".oilwf_APM").html(oilwf_APMTxt);
      $(".volmf_APM").html(volmf_APMTxt);
      $(".volxw2APM").html(volxw2APMTxt);
      
      $(".equityDMY").html(equityDmyTxt);
      $(".tbondsDMY").html(tbondsDmyTxt);
      $(".oilnf_DMY").html(oilnf_DmyTxt);
      $(".oilwf_DMY").html(oilwf_DmyTxt);
      $(".volmf_DMY").html(volmf_DmyTxt);
      $(".volxw2DMY").html(volxw2DmyTxt);
      
      $(".equityPCT").html(equityPctTxt);
      $(".tbondsPCT").html(tbondsPctTxt);
      $(".oilnf_PCT").html(oilnf_PctTxt);
      $(".oilwf_PCT").html(oilwf_PctTxt);
      $(".volmf_PCT").html(volmf_PctTxt);
      $(".volxw2PCT").html(volxw2PctTxt);
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


