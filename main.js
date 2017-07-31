// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

for(var i = 0; i < formData.length; i++){
  var label = formData[i].label;
  var type = formData[i].type;
  var id = formData[i].id;
  var options = formData[i].options;

  console.log(type);
  if (type === 'textarea') {
    var input = document.createElement('textarea');
    console.log('testing');
    input.appendChild(document.createTextNode(label));
  }else if (type === 'select') {
    var input = document.createElement('select');

    for (var j = 0; j < options.length; j++) {
      var option = options[j];
      var opt = document.createElement('option');
      opt.setAttribute('value', option.value);
      opt.appendChild(document.createTextNode(option.label));
      input.appendChild(opt);

    }

  }else{
    var input = document.createElement("input");
    input.placeholder = label;
  }

  var container = document.getElementById('fields');

  input.type = type;
  input.id = id;

  container.appendChild(input);

}

  // var label = formData[0].label;
// console.log(input);
// console.log(container);
