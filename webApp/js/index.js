/**
 * 
 * @authors zxhuan(you@example.org)
 * @date    2016-03-04 16:25:39
 * @version $Id$
 */

 $(function(){
    /**
     * 主页
     */
    // 搜索
    $('#search_clear').on('click',function(){
        $('#search_input').val("");
        $('#search_clear').css('display','none')
    })
    $("#search_input").on('keyup',function(){
        if($('#search_input').val()==''){
            $('#search_clear').css('display','none')
        }else if($('#search_input').val()){
            $('#search_clear').css('display','block')
        }
    })
    // 筛选
     $('#weui-toggle').toggle(function(){
         $('#toggle-switch').show();
         $("#weui-toggle .toggle-btn").css({
           " transform": "rotate(90deg)",
            "-webkit-transform": "rotate(90deg)",
            "-ms-transform": "rotate(90deg)"
         })
     },function(){
         $('#toggle-switch').hide();
         $("#weui-toggle .toggle-btn").css({
           " transform": "rotate(0deg)",
            "-webkit-transform": "rotate(0deg)",
            "-ms-transform": "rotate(0deg)"
         })
     })
     // 加载更多
     $('#more-btn').on('click',function(){
         $('#loadingToast').show();
     })
 })
