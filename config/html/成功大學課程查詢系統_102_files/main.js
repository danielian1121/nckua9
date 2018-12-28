	var language = "<? echo $_lang['lang']; ?>";
    var option_temp = null ;    
	//$.blockUI.defaults.message = "Please be patient...";
	$.blockUI.defaults.applyPlatformOpacityRules = false;
	$().ajaxStop($.unblockUI);
	$(document).ready(function(){
		jQuery('#navigation').accordion();

		//news
		$("#msg ul li a").click(function(){
			//var target = $(this).html();
			var target = $(this).attr('href').replace('#','');
			var ns = newsItem[target];
			
			var msg = '';
			newsDialog.dialog('option', 'title', ns['title']);
			//set content
			msg += "<span style='font-size:15px'>公告日期:"+ns['release']+'</span>';
			msg += "<hr><span style='font-size:16px'>"+ns['content']+"</span>";
			$("#newsDialog").html(msg);
			newsDialog.dialog( 'open' );
			
			return false;
		});
		
		//news dialog
	    var newsDialog = $("#newsDialog").dialog({
	        autoOpen: false,
	        modal: true,
	        title: 'News',
	        width:'600px',
	        buttons: {
	            "Close": function() { $(this).dialog("close"); }
	        }
	    });
		
		$("#language_picker").bind('change',function(){
			window.location.href = $(this).val();
		});
		//關鍵字查詢
		$('#s_keyword').click(function() { 
		    jQuery.blockUI({ message: $('#f_keyword') });
		});
			
		$('#f_keyword #b_submit').click(function() {
			$.unblockUI();
		});
		//一般查詢
		$('#s_tab1').click(function() {
			jQuery.blockUI({ 
	        	centerY: 0,
        		css: { top: '30px'}, 	
			message: $('#f_general') });
			
		});
		//通識查詢
		$('#s_tab2').click(function() {
			jQuery.blockUI({ 
        		centerY: 0, 
        		css: { top: '150px'}, 	
			message: $('#f_general_courses') });
			
		});	
		//A9通識登記人數   
		$('#s_tab3').click(function() {
             // link_url('qry_a9_register_num.php');
			 //開新頁
			 window.open('qry_a9_register_num_02.php');
			 // window.location.href = 'qry_a9_register_num.php';
			//jQuery.blockUI({ 
        	//	centerY: 0, 
        	//	css: { top: '150px'}, 	
			//message: $('#f_A9_registered_num') });
			
		});	
		$('#qry02').bind('submit',function(){
		    $.unblockUI();
		    var queryString = $('#qry02').formSerialize();
		    link_url('qry002.php?'+queryString);
		    $("#dept_list").css('display','none');
		    $("#level2").css('display','none');
		    $("#level3").css('display','none');
		    return false;
		});
        $('#qry02').bind('reset',function(){
		    $('#dept_no_g').html(option_temp);
		});                
		$('#qry03').bind('submit',function(){
		    $.unblockUI();
		    var queryString = $('#qry03').formSerialize();
		    link_url('qry003.php?'+queryString);
		    $("#dept_list").css('display','none');
		    return false;
		});		
		$('#close_qry02,#close_qry03').bind('click',function(){
			$.unblockUI();
		    return false;
		});
		//彈性(密集)課程
		$("#flexible_link").click(function(){
		    $("#dept_list").css('display','none');	
		    link_url('qry011.php');		
		});
		//研究倫理
		$("#research_link").click(function(){
		    $("#dept_list").css('display','none');	
		    link_url('qry012.php');		
		});
		//英語授課
		$("#eng_talk_link").click(function(){
		    $("#dept_list").css('display','none');	
		    link_url('qry013.php');		
		});		
		$('#dept_no_g').bind('change',function(){
			if( this.value > 'K0' || this.value < 'B0'){  
				$("#stu_year").attr('disabled',true);
			} else {
				$("#stu_year").attr('disabled',false);
			}
		});
                //過濾學院
                $('#college_no').bind('change',function(){
                   if(option_temp == null){
                      option_temp = $('#dept_no_g').html();
                   }else{
                      $('#dept_no_g').html(option_temp);
                   }
                   $('.filter_All').show();
                   $('[class^=filter]').show();
                   if( this.value != ''){
                      var query_string = "[class^=filter]:not(.filter_"+this.value+")";
                      $(query_string).remove();
                   }
		});
                //sidebar effect
                /*
                $('#hideSidebar').bind('click',function(){
                   $('.sidebar').hide('show');
                   $('.content').css('left','10px');
                });
                */
	});

	//加入我的課表
	function c_add(dept_no,seq_no){
	  var target = $(".co"+dept_no+"-"+seq_no);

	  $.ajax({
	     type: "GET",
	     url: "add_course.php",
	     data: "dept_no="+dept_no+"&seq_no="+seq_no,
	     success: function(msg){
	        target.html("<img src='image/remove.png'>");
	        target.attr('href',"javascript:c_remove('"+dept_no+"','"+seq_no+"');");
	     }
	  });
	}
	
	//移除我的課表
	function c_remove(dept_no,seq_no){
	  var target = $(".co"+dept_no+"-"+seq_no);
	  $.ajax({
	     type: "GET",
	     url: "remove_course.php",
	     data: "dept_no="+dept_no+"&seq_no="+seq_no,
	     success: function(msg){
	        target.html("<img src='image/add.png'>");
	        target.attr('href',"javascript:c_add('"+dept_no+"','"+seq_no+"');");
	     }
	  });		
	}
		
	//過濾學系
	function filter_dept(url){
		for(var i=3;i<=5;i++){
			$("#level"+i).remove();
		}
		link_url(url);
	}
	
	//過濾年級
	function filter_Year(y){
		for(var i=0; i<=7;i++){
		   if(y != i){
		     $(".course_y"+i).remove();
		   }
		}
		$("#level3").remove();
		$("#nav").append('<span id=level3>›'+y+'</span>');
	}	
	/*
	 *	return link url to div
	 */
	function link_url(url){
	    //$.blockUI({message: $('#f_general') });
	    $.blockUI();
            $.ajax({
               type: "GET",
               url: url,
               success: function(msg){
                  $("#result_set").html(msg);
          	  $.unblockUI();
               }
            });		
	}
