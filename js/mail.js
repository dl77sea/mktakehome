document.querySelector('#mail').addEventListener('submit', function(event) {
  event.preventDefault()
  sendMail()
})

//submit email form data formatted for sendgrid
//to aws lamda method that invokes sendgrid's API send call
//with data supplied from client
function sendMail() {
  let formToEmail = document.querySelector('input[name="to"]').value
  let formSubject = document.querySelector('input[name="subject"]').value
  let formContent = document.querySelector('textarea[name="content"]').value

  console.log(formToEmail,formSubject,formContent)

  alert("See commented placeholder ajax code in mail.js"+"\n\nTo: "+formToEmail+"\nSubject: "+formSubject+"\nContent: "+formContent)

  /*
  $.ajax({
      method: "POST"
      url: "https://awsLambdaServicePlaceholder.execute-api.us-east-1.amazonaws.com/prod/sendgrid-send"
      data: {
        {
          "personalizations": [{
            "to": [{
              "email": formToEmail,
            }],
          }],
          "subject": formSubject,
          "content": [{
            "type": "text/html",
            "value": "<html><p>"+formContent+"</p></html>"
          }]
        }
      }
    })
    .then(function(res) {
      console.log("done: ", res)
    })
    .catch(function(err) {
      console.log("error", err)
    })
    */
}
