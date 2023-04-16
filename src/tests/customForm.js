const fields = [
    {name: "fieldA", defaultLabel: "Field A", fieldType: "text"}, 
    {name: "fieldB", defaultLabel: "Field B", fieldType: "checkbox"}, 
    {name: "fieldC", defaultLabel: "Field C", fieldType: "checkbox"}, 
    {name: "fieldD", defaultLabel: "Field D", fieldType: "select"}, 
    {name: "fieldE", defaultLabel: "Field E", fieldType: "text"}, 
    {name: "partnerID", defaultLabel: "ID", fieldType: "text"}]


const fieldOptions = [
    {oeName: "UK", fieldId: 3, options: ["Option A", "Option B", "Option C"]},
    {oeName: "Germany", fieldId: 3, options: ["Option A", "Option B", "Option C"]},
]

const OEConfig = [
    {
        name:"UK", 
        fields:[
            {id:0, section: 0, order:2, label: ""},
            {id:2, section: 0, order:1, label: ""},
            {id:4, section: 1, order:4, label: ""},
            {id:5, section: 1, order:3, label: "UK ID"}
        ],
        sections: [
            {id:0, name: "Section A", order:1},
            {id:1, name: "Section B", order:2},
            {id:2, name: "Section C", order:3},
        ]
    },
    {
        name:"Germany", 
        fields:[
            {id:0, section: 0, order:1, label: "German custom label"},
            {id:1, section: 1, order:2, label: ""},
            {id:3, section: 1, order:1, label: ""},
            {id:4, section: 2, order:1, label: ""},
            {id:5, section: 2, order:2, label: "German ID"}
        ],
        sections: [
            {id:0, name: "Section A", order:1},
            {id:1, name: "Section B", order:2},
            {id:2, name: "Section CC", order:3},
        ]
    },
]

function selectFields(oe) {
    
    //const OE = "UK"
    const selectedOE = OEConfig.find(x => x.name === oe)
    
    const formFields = []
    
    for (i=0; i < selectedOE.fields.length; i++){
        const selectedField = {
            fieldName: fields[selectedOE.fields[i].id].name,
            fieldId: selectedOE.fields[i].id,
            fieldSection: selectedOE.sections[selectedOE.fields[i].section].name,
            fieldOrder: selectedOE.sections[selectedOE.fields[i].section].order.toString() + selectedOE.fields[i].order.toString(),
            fieldLabel: selectedOE.fields[i].label === "" ? fields[selectedOE.fields[i].id].defaultLabel : selectedOE.fields[i].label,
            fieldType: fields[selectedOE.fields[i].id].fieldType
        }
        formFields.push(selectedField)
    }

    formFields.sort((first, second) => {
        if (first.fieldOrder < second.fieldOrder){
            return -1
        }
        if ( first.fieldOrder > second.fieldOrder){
            return +1
        }
        return 0
    })
    
    return formFields
}



function structureForm(){
    const oeName = "UK"
    const fields = selectFields(oeName)

    const divForm = document.getElementById("customForm")
    
    divForm.innerHTML = "<h3>Custom Form</h3>"
    divForm.innerHTML += `<form onsubmit="formSubmission()">`

    let currentSection = ""

    fields.forEach(field => {
        
        if (field.fieldSection != currentSection){

            divForm.innerHTML += `<h4>${field.fieldSection}</h4>`
            currentSection = field.fieldSection
        }

        divForm.innerHTML += `<div>`
        divForm.innerHTML += `<span><b>${field.fieldLabel}: </b></span>`
        
        if (field.fieldType === "select"){
            let selectField = ""
            const options = fieldOptions.find(optionLabel => optionLabel.fieldId === field.fieldId && optionLabel.oeName === oeName)
            selectField += `<select id="cars" name="cars">`

            for (let i = 0;i<options.options.length;i++){

                selectField += `<option value="${options.options[i]}">${options.options[i]}</option>`
            }

            selectField += `</select><br>`
            divForm.innerHTML += selectField
        }else{
            divForm.innerHTML += `<input type="${field.fieldType}"></input><br>`
        }

        divForm.innerHTML += `</div>`


    });

    divForm.innerHTML += `<input name="Submit" type="submit" value="Submit">`
    divForm.innerHTML += "</form>"
    
}

function formSubmission(){
    alert('Form sumitted!!!')
    console.log("Form Submitted!!")

    return false
}
