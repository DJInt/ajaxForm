# ajaxForm
Simple script to transform regular form into ajax form
## Installation
Just include the script file wihtin your HTML page after including JQuery
```html
<script src="/path/to/ajaxForm.js"></script>
```

The script will automatically do:
- Create a new ajax object
- Assign form data (using .serialize() method) as the object's data attribute
- Assign form action as the object's url attribute (if set)
- Assign from method as the object's type attribute (if set)
- Return the ajax object

## Usage
### Basic Usage - Just send form data to server
```javascript
$("form.my-form").ajaxForm();
```

### Send ajax options - Login form simple example
```javascript
$("form.login-form").ajaxForm({
  dataType: 'json',
  success:function(data) {
    if(data.success == 'true') {
      location.href = '/';
    } else {
      alert("Wrong credentials");
    }
  }
});
```
