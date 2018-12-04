# ajaxForm
Simple shortcut to transform regular form into ajax form
## Installation
Just include the script file wihtin your HTML page after including JQuery
```html
<script src="/path/to/ajaxForm.js"></script>
```


## Usage
### Basic Usage - Keep an element on top of screen after scrolling pass it
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
