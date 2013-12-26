$(document).ready(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto({
			show_title: false,
			theme: 'facebook',
			social_tools: false
		});
      
    $('#link-home').click(function (e) {
    	$('#active').attr('id','');
    	$('#link-home').parent().attr('id','active');
	    $('.panelShow').removeClass("panelShow");
	    $('#home').addClass("panelShow");
	  });
	  $('#link-news').click(function (e) {
    	$('#active').attr('id','');
    	$('#link-news').parent().attr('id','active');
	    $('.panelShow').removeClass("panelShow");
	    $('#news').addClass("panelShow");
	  });
	  $('#link-support').click(function (e) {
    	$('#active').attr('id','');
    	$('#link-support').parent().attr('id','active');
	    $('.panelShow').removeClass("panelShow");
	    $('#support').addClass("panelShow");
	  });
	  $('#link-about').click(function (e) {
    	$('#active').attr('id','');
    	$('#link-about').parent().attr('id','active');
	    $('.panelShow').removeClass("panelShow");
	    $('#about').addClass("panelShow");
	  });
});
