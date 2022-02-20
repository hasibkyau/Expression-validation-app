function CheckExpression() {
    let expressionType = document.getElementById("select").value;
    let string = document.querySelector('input').value;
    let re;
    let result;

    switch (expressionType) {
        case "email":
            re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
            break;
        case "phone":
            re = /^(?:\+88|88)?(01[3-9]\d{8})$/
            break;
        case "post_code":
            re = /^[0-9]{4}$/;
            break;
        default:
            console.log("nothing selected");
    }
    result = re.test(string);
    
    if (result) {
        window.alert("Valid Expression!")
    }
    else
        window.alert("Not valid :(")
}