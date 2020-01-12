Init();




// 리사이즈
$(window).resize(function(){
	Init();
});




// 슬라이더
function Init() {
	if ($('#preview').length == 0) {
		$SlideHeight = $('#slider').height();
		$DivNum = $('#slider > div').length;
	} else {
		$SlideHeight = $('#items').height();
		$DivNum = $('#items > div > div').length;
	}
	$SliderHeight = $DivNum * $SlideHeight;
	$NewScrollTop = $CurrSl = 0;
	$SlNum = $DivNum - 1;
	$AnimInProgress = false;

	if($('#preview').length == 0) {
		
		$('#slider').wrapInner('<div id="items" class="col"><div></div></div>');
		$('<div id="preview" class="col"><div></div></div>').appendTo('#slider');
		
		for (ct = 1; ct <= $DivNum; ct++){
			Origine = $('#items').find('div > div:nth-child(' + ct + ')');
			ThisColor = Origine.attr('data-color');
			ThisImg = Origine.attr('data-img');
			Origine.find('strong').css('color', ThisColor);
			$('<div class="vis"><img src="'+ThisImg+'" alt=""></div>').prependTo('#preview > div');
		}
	}
	
	$('#items > div').scrollTop(0);
	$('#preview > div').scrollTop($SliderHeight);
	
	var indicator = new WheelIndicator({elem:document.querySelector('#slider'), callback: function(e){ ScrollMe(e.direction); }});
	indicator.getOption('preventMouse');	
}




// 슬라이더 스크롤
function ScrollMe(Direction) {
	if ($AnimInProgress == false) {
		if (Direction == 'down' && $CurrSl<$SlNum) {
			$AnimInProgress = true;
			$CurrSl += 1;
			$TranslateOrigin = '100%';
		} else if (Direction == 'up' && $CurrSl > 0) {
			$AnimInProgress = true;
			$CurrSl -= 1;
			$TranslateOrigin = '-100%';
		} else {
			$AnimInProgress = false;
		}		
		$NewScrollTop = $CurrSl * $SlideHeight;
		$NewAltScrollTop = $SliderHeight - (($CurrSl + 1) * $SlideHeight);

		if ($CurrSl == 0) {
            $('.date').html('INTERACTIVE<br>2019');
		} else if ($CurrSl == 1) {
            $('.date').html('INTERACTIVE<br>2019');
		} else if ($CurrSl == 2) {
            $('.date').html('INTERACTIVE<br>2019');
		} else if ($CurrSl == 3) {
            $('.date').html('WEB / VIDEO<br>2019');
		} else if ($CurrSl == 4) {
            $('.date').html('VIDEO<br>2018');
		} else if ($CurrSl == 5) {
			$('.date').html('VIDEO<br>2018');

		}

		//alert($CurrSl+1);
		$Percent = (100 / ($DivNum - 1)) * ($CurrSl);
		//$('.scrollBar').height($Percent+'%');
		$ColorCible = $('.col:nth-child(1) > div > div:nth-child(' + ($CurrSl + 1) + ')').attr('data-color');
		$('.num').html('0' + ($CurrSl + 1) +'<span>/ 06</span>').css('width', '500px');

		TweenMax.to($('.col:nth-child(1) > div'), 0.6, {scrollTo : {x : 0, y : $NewScrollTop}, ease : Expo.easeOut});
		TweenMax.to($('.col:nth-child(2) > div'), 0.6, {scrollTo : {x : 0, y : $NewAltScrollTop}, ease : Expo.easeOut , onComplete : function() {
		$AnimInProgress = false;
		}});
	}
}




// 스크롤 상태, 버튼 CSS 변경
$('.num').html('01' + '<span>/ 06</span>').css('width', '500px');
$('.date').html('INTERACTIVE<br>2019');



// // 버튼 호버 효과
// $('.seemore').on('mouseover', function() {
//     $('.seemore').html('Click');
// });

// $('.seemore').on('mouseout', function() {
//     $('.seemore').html('See More');
// });