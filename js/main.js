$(function(){
	var maxMenu=$(".admin-ul");
	var li=$(".admin-ul-li");
	console.log(maxMenu.length);
	if(maxMenu.length>0){
		li.each(function(){
				var max = $(this);
				//detect change in the input[type="checkbox"] value
				max.on('change', 'input[type="checkbox"]', function(){
					var checkbox = $(this);
					console.log(checkbox);
					console.log(checkbox.prop('checked'));
					( checkbox.prop('checked') ) ?checkbox.parent('div').siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.parent('div').siblings('ul').attr('style', 'display:block;').slideUp(300);
					( checkbox.prop('checked') ) ?checkbox.siblings('.off-on1').attr('style', 'display:none;') && checkbox.siblings('.off-on2').attr('style', 'display:block;'): checkbox.siblings('.off-on2').attr('style', 'display:none;') && checkbox.siblings('.off-on1').attr('style', 'display:block;');
					( checkbox.prop('checked') ) ?checkbox.siblings('.show-listA').attr('style', 'transform: rotate(90deg)') : checkbox.siblings('.show-listA').attr('style', 'transform: rotate(0deg)');
					( checkbox.prop('checked') ) ? checkbox.parent('.ul-btn').attr('style','background-color: white;color: black;') : checkbox.parent('.ul-btn').attr('style','background-color: rgb(28,175,154);color: white;')
//					( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
				});
			});
	}
})
$(function(){
	var ctrlMenu=$('.toggle-menu');
	ctrlMenu.click(function(){
		$('.content-menu').fadeToggle('slow',3000);
	})
})

//全选
$(function(){
   $(".all").change(function() {
   	//console.log($(".one").length);
     for (var i = 0; i < $(".one").length; i++) {
         var checkbox = $(".one")[i];
         checkbox.checked = this.checked;
     }
   }); 
   var one=$('.one').change(function(){
   		check(this);
   })
});
//取消全选
var check=function(box){
	var flag=box.checked;
	if(!box.checked){
		$(".all").prop("checked",flag);
	}
}
