var alist=document.getElementsByClassName('nav1a') //导航栏选项卡
console.log(alist)
for(var i=0;i<alist.length;i++){
    //动态增加属性
    // alist[i].setAttribute('index',i)
    alist[i].onclick=function(){
    //获取属性
        // var c=this.getAttribute('index')
        for(var t=0;t<alist.length;t++){
            alist[t].setAttribute('class','nav1a')
        }
       this.setAttribute('class','nav1a current')
    //    return false;
    }
}
var banner=document.getElementById('banner') //轮播图
var box=document.getElementById('box')
var olo=document.getElementById('slider').children
var num=0;
var timer;
function go(){
    timer=setInterval(function(){
        num++
        if(num==6){num=0};
        box.style.transform='translateX('+-num+'00vw)'
        for(i=0;i<olo.length;i++){
            olo[i].removeAttribute('class')
        }
        olo[num].setAttribute('class','current1')
    },1000)
}
go()
$(function(){
	//""内表示需要获取的元素
    $(".d2_left_head_left_u1_li").mouseenter(function(){
    	 //先将所有选项卡都恢复到未点击的样式
         $(".d2_left_head_left_u1_li").removeClass("active1");
         //改变点击的li标签的样式
         $(this).addClass("active1");
         //获取当前点击li标签的索引
         var $index = $(this).index();
         //根据索引找到对应的内容
         var $content = $(".d2_left_song").eq($index)
         //先将所有选项卡内容都隐藏
         $(".d2_left_song").removeClass("active2");
         //展示所点击选项的内容
         $content.addClass("active2");
    });
});
$(function(){
	//""内表示需要获取的元素
    $(".d3_head_left_l1").mouseenter(function(){
    	 //先将所有选项卡都恢复到未点击的样式
         $(".d3_head_left_l1").removeClass("active1");
         //改变点击的li标签的样式
         $(this).addClass("active1");
         //获取当前点击li标签的索引
         var $index = $(this).index();
         //根据索引找到对应的内容
         var $content = $(".d3_storybox").eq($index)
         //先将所有选项卡内容都隐藏
         $(".d3_storybox").removeClass("active2");
         //展示所点击选项的内容
         $content.addClass("active2");
    });
});
$(function(){
    $('.return').click(function(){
        $('.d2_left_song_u1').removeClass('active3')
        $(".d2_left_song_u1").addClass("active3");
    })
})
$(function(){
    $('.next').click(function(){
        $('.d2_left_song_u1').removeClass('active3')
        $(".d2_left_song_u1").addClass("active3");
    })
})

