$(document).ready(function(){
	$(".institute a,.dept a").click(function(){
		var target_url = $(this).attr('href');
		var target_dept = $(this).text();
        link_url(target_url);
        $("#dept_list").css('display','none');
        $("#nav").append('<span id=level2>›<a href=\"javascript:filter_dept(\''+target_url+'\');\">'+target_dept+'</a></span>');
		return false;
	});
	
});
