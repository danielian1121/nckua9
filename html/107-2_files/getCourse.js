$(document).ready(function(){
    $('#syear').html(Math.round($('#g_syear').val()));
    $('#sem').html($('#g_sem').val());
    $(".navBar a").click(function(){
        var target_url = $(this).attr('href');
        link_url(target_url);
        return false;
    });
	
    //教室資訊
    $('.room').click(function(){
    	var roomNo = $(this).attr('name');
    	
    	//read room information
		$.ajax({
			url: 'roominfo.php',
			data:'r='+roomNo,
			async: false,
			type:'POST',
			success:function(msg, textStatus, XMLHttpRequest){
				$('#roomInfo').html(msg);
			}
		});

		//Open dialog
    	$('#roomInfo').dialog({
    		modal:true,
    		width:1200,
    		height:620
    	});
    });
    
});
