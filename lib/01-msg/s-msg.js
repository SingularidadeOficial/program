export default class slib_msg{
    constructor(div){
        this.msg = [];
        this.div = div;
        this.div.style = "display: none;"
        this.divhtml = "";

    }

    ValidateInput(inputsId){
        inputsId.forEach(input =>{
            if(document.querySelector(`#${input.id}`).value == ""){
                this.msg.push({text: input.text, class: input.class});
                document.querySelector(`#${input.id}`).style = "background-color: #ffecb5;";
            } else {
                document.querySelector(`#${input.id}`).style = "background-color: default;";
            }
        });

        this.ViewMsg();
    }

    ViewMsg(){
        this.msg.forEach(obj => {
            // Create new DIV
            this.divhtml += `
                <div class="${obj.class}" role="alert">
                    ${obj.text}
                </div>
            `;
        });
        this.div.innerHTML = this.divhtml;
        this.div.style = "display: block;"
        this.div.focus();
    }


    ClearMsg(){
        this.msg = [];
        this.divhtml = "";
        this.div.innerHTML = "";
        this.div.style = "display: none;"
    }
}