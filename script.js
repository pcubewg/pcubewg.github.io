function validate() {
  const forms = document.querySelectorAll('.needs-validation')
  const status = Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  });
  return status

}
function log(f) {
  var stauts = validate();
  if (stauts) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log("verifying...");
        var emails = [];
        for (let i = 0; i < JSON.parse(atob(this.responseText)).length; i++) {
          var d = JSON.parse(atob(this.responseText));
          emails.push(d[i].email);
        }

        if (document.getElementById(email).value in emails) {
          emails = emails.findIndex(document.getElementById(email).value);
        }
        if (d[emails].pass === document.getElementById("password").value) {
          localStorage.setItem('edata', '{"name":d[emails].name, "email":d[emails].email}');
          window.location.replace("https://pcubewg.github.io/testpage.html")
          window.location.href = "https://pcubewg.github.io/testpage.html"
        }
      };
      xhttp.open("GET", "emp.data", true);
      xhttp.send();
    }
  }
}