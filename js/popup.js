$(document).ready(function () {
            $("#OpenDialog").click(function () {
                //$("#dialog").dialog({modal: true, height: 590, width: 1005 });
                var w = window.open("assets/historia.pdf", "popupWindow", "width=600, fullscreen=yes, scrollbars=yes");
                var $w = $(w.document.body);
                $w.html("<textarea></textarea>");
            });
        });