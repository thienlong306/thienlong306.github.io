
var button = document.querySelector("button");
button.addEventListener("click", function () {
 
    try {
        var data = "";
        var input = document.querySelectorAll("input");
        var text = document.querySelectorAll("textarea");
        var status =0;
        for (var index = 0; index < text[0].value.length; index++) {
            if(!input[6].checked){
                status =0;
            } 
            if (text[0].value.charAt(index) == input[0].value) {
                index++;
                if (text[0].value.charAt(index) == input[1].value) {
                    index++;
                    if (text[0].value.charAt(index) == input[2].value) {
                        index++;
                        if (text[0].value.charAt(index) == input[3].value) {
                            if (status == 0){
                            data+=input[5].value;
                            index++;
                            while (text[0].value.charAt(index) != input[4].value) {
                                data += text[0].value.charAt(index);
                                index++;
                            }
                            data +="\n";
                            status =1;
                            } else  status = 0;
                        
                        }
                    }
                }
            }
        }
    } catch (error) {
        
    }
    text[1].value = data;
    
})