// JavaScript Document



 /*-------------------------------------------------------------个人资料页-------------------------------------------------------*/
var MyValidator03 = function() {  
    var handleSubmit = function() {  
        $('#form03').validate({  
            errorElement : 'span',  
            errorClass : 'help-block',  
            focusInvalid : false,  
            rules : {  
                name : {  
                    required : true 
                },
                 ture_names: {  
                    required : true 
                },
                email : {  
                    required : true ,
                    email : true
                },
                tell:{
                     required : true  
                     },
             },  
            messages : {  
                name: {  
                    required : "必须填写姓名"  
                },  
                ture_names: {  
                    required : "必须填写真实姓名"  
                },
                 email: {  
                    required : "必须填写邮箱",
                    email : "请正确的填写邮箱"
                 }, 
                tell:{
                     required : "请填写手机号"  
                    },
             },  
            highlight : function(element) {  
                $(element).closest('.form-group').addClass('has-error');  
            },  
            success : function(label) {  
                label.closest('.form-group').removeClass('has-error');  
                label.remove();  
            },  
            errorPlacement : function(error, element) {  
                element.parent('div').append(error);  
            },  
            submitHandler : function(form) {  
                form.submit();  
            }  
        });  
        $('#form03 input').keypress(function(e) {  
            if (e.which == 13) {  
                if ($('#form03').validate().form()) {  
                    $('#form03').submit();  
                }  
                return false;  
            }  
        });  
    }  
    return {  
        init : function() {  
            handleSubmit();  
        }  
    };  
}();   
 /*-------------------------------------------------------------手机绑定页-------------------------------------------------------*/
var MyValidator05 = function() {  
    var handleSubmit = function() {  
        $('#form05').validate({  
            errorElement : 'span',  
            errorClass : 'help-block',  
            focusInvalid : false,  
            rules : {  
                verification : {  
                    required : true 
                },
              },  
            messages : {  
                verification: {  
                    required : "请输入验证码"  
                },  
              },  
            highlight : function(element) {  
                $(element).closest('.form-group').addClass('has-error');  
            },  
            success : function(label) {  
                label.closest('.form-group').removeClass('has-error');  
                label.remove();  
            },  
            errorPlacement : function(error, element) {  
                element.parent('div').append(error);  
            },  
            submitHandler : function(form) {  
                form.submit();  
            }  
        });  
        $('#form05 input').keypress(function(e) {  
            if (e.which == 13) {  
                if ($('#form05').validate().form()) {  
                    $('#form05').submit();  
                }  
                return false;  
            }  
        });  
    }  
    return {  
        init : function() {  
            handleSubmit();  
        }  
    };  
}();   

 


 /*-------------------------------------------------------------密码修改页-------------------------------------------------------*/
var MyValidator04 = function() {  
    var handleSubmit = function() {  
        $('#form04').validate({  
            errorElement : 'span',  
            errorClass : 'help-block',  
            focusInvalid : false,  
            rules : {  
                 now_password : {  
                    required : true ,
                    
                },
                  amend_password : {  
                    required : true ,
                    minlength: 5,
                    
                },
                  comfirm_password : {  
                    required : true ,
                    minlength: 5,
                    equalTo: "#comfirm_password"

                },
            },  
            messages : {  
                 now_password : {  
                    required : "请输入当前密码" 
                },
                  new_password : {  
                    required : "请输入新的密码" ,
                     minlength: jQuery.format("密码不能小于{0}个字符") 

                },
                  comfirm_password : {  
                    required : "没确认新密码" ,
                    minlength: "确认密码不能小于{0}个字符",
                    equalTo: "两次输入密码不一致嘛"
                },
            },  
            highlight : function(element) {  
                $(element).closest('.form-group').addClass('has-error');  
            },  
            success : function(label) {  
                label.closest('.form-group').removeClass('has-error');  
                label.remove();  
            },  
            errorPlacement : function(error, element) {  
                element.parent('div').append(error);  
            },  
            submitHandler : function(form) {  
                form.submit();  
            }  
        });  
        $('#form02 input').keypress(function(e) {  
            if (e.which == 13) {  
                if ($('#form02').validate().form()) {  
                    $('#form02').submit();  
                }  
                return false;  
            }  
        });  
    }  
    return {  
        init : function() {  
            handleSubmit();  
        }  
    };  
}();   
