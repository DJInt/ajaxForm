# ajaxForm
Simple shortcut to transform regular form into ajax form
## Installation
Just include the script file wihtin your HTML page after including JQuery
```html
<script src="/path/to/ajaxForm.js"></script>
```

The script will automatically generate a new ajax object with the form data (using form.serialize()), the form action will be used as the URL and form method will be used as ajax type property.

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
