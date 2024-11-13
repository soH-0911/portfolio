AOS.init();

$(function(){
    // 메뉴 클릭시 해당 섹션으로 이동
    $('.gnb li > a').click(function(event){
        event.preventDefault();
    	$('html, body').animate({scrollTop: $(this.hash).offset().top}, 680);
    });
    
    // go-top 버튼 맨 위로 올라가기
    $('.go-top').bind('click', function() {
        $('html, body').animate({scrollTop: '0'}, 680);
      });


      
	// $("html").smoothWheel() 

    /**** isotope 라이브러리 ****/
    $('.grid').isotope({
    itemSelector: '.grid-item',
    });
    // filter items on button click
    $(".filter-button-group").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $(".grid").isotope({ filter: filterValue });
    $(".filter-button-group li").removeClass("active");
    $(this).addClass("active");
    });



     /****모달창 활성화****/
    // 모달 열기
    $(".openModalBtn").on("click", function () {
        var modalId = $(this).closest(".button-wrap").data("modal-id"); // 아티클의 data-modal-id 가져오기
        $("#" + modalId).fadeIn(); // 해당 ID의 모달 열기
        $("body").addClass("modal-open"); // body 스크롤 비활성화
        $('.modal-content').scrollTop(0);

      });

    // 모달 닫기 (닫기 버튼 클릭 시)
    $(".closeModalBtn").on("click", function () {
    $(this).closest(".modal-background").fadeOut(); // 해당 모달 닫기
    $("body").removeClass("modal-open"); // body 스크롤 활성화
    });

    // 모달 닫기 (배경 클릭 시)
    $(".modal-background").on("click", function (event) {
    if (event.target === this) {
        // 배경 클릭 여부 확인
        $(this).fadeOut(); // 배경 클릭 시 모달 닫기
        $("body").removeClass("modal-open"); // body 스크롤 활성화
    }
    });

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        if (scrollTop > 6000) {
          $('.section06-inner .sec06-text-area p strong').stop().animate({'color' : 'var(--color-primary500)'}, 500);
        } else {
          $('.section06-inner .sec06-text-area p strong').stop().animate({'color' : '#fff'}, 500);
        }
    });


});


/* 클립보드 */
let phoneClipboard = null;
let emailClipboard = null;

function initClipboard() {
    // phone-number에 대한 ClipboardJS 인스턴스 생성 (한 번만 생성)
    if (!phoneClipboard) {
        phoneClipboard = new ClipboardJS('.phone-number', {
            text: function(trigger) {
                return trigger.getAttribute('data-clipboard-text');
            }
        });

        phoneClipboard.on('success', function(e) {
            alert('휴대폰 번호가 복사되었습니다. 언제든 편하게 연락주세요 :)');
            console.log(e);
        });

        phoneClipboard.on('error', function(e) {
            console.error('복사에 실패했습니다. 다시 시도해주세요.');
            console.log(e);
        });
    }

    // email에 대한 ClipboardJS 인스턴스 생성 (한 번만 생성)
    if (!emailClipboard) {
        emailClipboard = new ClipboardJS('.email', {
            text: function(trigger) {
                return trigger.getAttribute('data-clipboard-text');
            }
        });

        emailClipboard.on('success', function(e) {
            alert('이메일 주소가 복사되었습니다. 메일 확인은 1~2일 이내 확인 가능합니다 :)');
            console.log(e);
        });

        emailClipboard.on('error', function(e) {
            console.error('복사에 실패했습니다. 다시 시도해주세요.');
            console.log(e);
        });
    }
}


// phoneCopy 함수와 emailCopy 함수
function phoneCopy() {
    if (!phoneClipboard) {
        initClipboard();
    }
}

function emailCopy() {
    if (!emailClipboard) {
        initClipboard();
    }
}

// 페이지 로드 시 ClipboardJS 초기화
$(function() {
    initClipboard();
});