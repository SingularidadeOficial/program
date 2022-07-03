import TableEditor from "./s-tableEditor.js";

let jsonTestUpdate = `{
    "init":true,
    "form":[
       "namePost1",
       "html",
       "html",
       "html",
       "html"
    ],
    "thead":[
       {
          "title":"Type Text",
          "custom":false,
          "textDefault":"standard"
       },
       {
          "title":"Type Text",
          "custom":true,
          "htmlDefault":"<div class='personalizado' style='text-decoration: underline;'>Singularidade</div>"
       },
       {
          "title":"Type Text",
          "custom":true,
          "htmlDefault":"<input type='radio' name='r1' value 'r1'>"
       },
       {
          "title":"Type Text",
          "custom":true,
          "htmlDefault":"<input type='checkbox' name='c1' value 'c1'>"
       },
       {
          "title":"Type Text",
          "custom":true,
          "htmlDefault":"<select name='cars' id='cars'><option value='volvo'>Volvo</option><option value='saab'>Saab</option><option value='mercedes'>Mercedes</option><option value='audi'>Audi</option></select>"
       }
    ],
    "tbody":[
       [
          {
             "text":"Texto",
             "rowspan":1,
             "colspan":1
          },
          {
             "html":"<input type='text' name='_username' value='' placeholder='nome'>",
             "rowspan":1,
             "colspan":1
          },
          {
             "html":"<input type='radio' name='r1' value='r1'><input type='radio' name='r1' value='r2'><input type='radio' name='r1' value='r3'>",
             "rowspan":1,
             "colspan":1
          },
          {
             "html":"<input type='checkbox' name='c1' value 'c1'>",
             "rowspan":1,
             "colspan":1
          },
          {
             "html":"<select name='cars' id='cars'><option value='volvo'>Volvo</option><option value='saab'>Saab</option><option value='mercedes'>Mercedes</option><option value='audi'>Audi</option></select>",
             "rowspan":1,
             "colspan":1
          }
       ]
    ]
 }`

 globalThis._tableEditor = new TableEditor(document.querySelector('table'), {
    table: {
        name: "_tableEditor",
        object: {},
        function: {
            name: [],
            all: {}
        },
        form: {
            init: true,
            element: [document.querySelector('#s-table-btn-sendform')],
            formData: []
        },
        editable: {
            init: true,
            clickEditable: true,
            clickOutSave: true,
        },
        button : {
            excel : {
                init: true,
                element: [document.querySelector('#s-table-btn-excel')],
            },
            searchTable: {
                init: true,
                element: [document.querySelector('#s-table-btn-search')],
            },
            sortTable: {
                init: true,
                element: [document.querySelector('#s-table-btn-sort')],
            },
            createDocument: {
                init: true,
                element: [document.querySelector('#s-table-btn-newdocument')],
            },
            createTitle: {
                init: true,
                initModal: true,
                element: [document.querySelector('#s-table-btn-newtitle')],
                thead: {
                    textTitle: "New Title",
                    custom: false,
                    textDefault: "standard",
                    htmlDefault: "<div>One State</div>",
                },
            },
            loadTable: {
                init: true,
                element: [document.querySelector('#s-table-btn-loadtable')],
                loadFile: true
            },
            saveTable: {
                init: true,
                element: [document.querySelector('#s-table-btn-savetable')],
                nameFile: "table.json"
            },
            removeRow: {
                init: true,
                element: [document.querySelector('#s-table-btn-removerow')]
            },
            loadFunction: {
                init: true,
                element: [document.querySelector('#s-table-btn-loadfunction')]
            },
            modal: {
                classModalContainer: "s-modal-container",
                classModalFrame: "s-modal-frame",
                classInputTitle: "s-modal-input-title",
                classInputTextDefault: "s-modal-input-textdefault",
                classDivCustom: "s-modal-div-custom",
                classDivForm: "s-modal-div-form",
                classButtonSaveTitle: "s-modal-button-savetitle",
                classButtonNewTitle: "s-modal-button-createtitle",
                classButtonClose: "s-modal-button-close"
            }
        }
    }
});

document.querySelector('#s-table-btn-updatetable').addEventListener('click', ev=>{
    _tableEditor.configInternal.table.object = JSON.parse(jsonTestUpdate);
    _tableEditor.updateTable();
});
