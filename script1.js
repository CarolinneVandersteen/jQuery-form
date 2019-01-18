$(function(){
    var send = $("#send");
    var reset = $("#reset");
    var test1=true;
    HideError();

    function HideError() {
        if(test1){$("#mistake").css('display', 'none');}else{$("#mistake").css('display', 'block')};
    }

    function BoxColor(element,color){
        element.css("background-color", color);
        element.css("border","2px solid "+color);

    }

    function NotEmptyTest(Name,Pass,PassC,Email) {
        if(Name=="" && Pass=="" && PassC=="" && Email==""){
            return false;
        }else {
            return true;
        };
    };

    function PassCheck(Pass,PassC) {
        if (Pass==PassC) {
            return true;
        }
        return false;
    };

    function LengthTest(StringLength){
        if(StringLength<5){
            return false;
        }
        return true;
    };


    $("#display-name").focusin(function(){
        BoxColor($("#display-name"),"#FFF");
    });
    $("#pass").focusin(function(){
        BoxColor($("#pass"),"#FFF")
    });
    $("#pass-confirm").focusin(function(){
        BoxColor($("#pass-confirm"),"#FFF");
    });
    $("#email").focusin(function(){
        BoxColor($("#email"),"#FFF");
    });



    reset.click(function(event){
        event.preventDefault();
        $("#display-name").val("");
        $("#pass").val("");
        $("#pass-confirm").val("");
        $("#email").val("");
        BoxColor($("#display-name"),"#FFF");
        BoxColor($("#pass"),"#FFF")
        BoxColor($("#pass-confirm"),"#FFF");
        BoxColor($("#email"),"#FFF");
        $("#mistake").css('display', 'none');
    });

    send.click(function(event){
        event.preventDefault();
        var Name = $("#display-name").val();
        var Pass = $("#pass").val();
        var PassC = $("#pass-confirm").val();
        var Email = $("#email").val();

        test1=NotEmptyTest(Name,Pass,PassC,Email);
        HideError();

        var test2=PassCheck(Pass,PassC);

        if (LengthTest(Name.length)) {
            BoxColor($("#display-name"),"#C7EA46");
        } else {
            BoxColor($("#display-name"),"#ED4337");
        };
        if (LengthTest(Pass.length) && test2) {
            BoxColor($("#pass"),"#C7EA46");
        } else {
            BoxColor($("#pass"),"#ED4337");
        };

        if (LengthTest(PassC.length) && test2) {
            BoxColor($("#pass-confirm"),"#C7EA46");
        } else {
            BoxColor($("#pass-confirm"),"#ED4337");
        };
        if (LengthTest(Email.length)) {
            BoxColor($("#email"),"#C7EA46");
        } else {
            BoxColor($("#email"),"#ED4337");
        };
    });
});
