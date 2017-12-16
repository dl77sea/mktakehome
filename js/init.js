document.querySelector('#signin').addEventListener('submit', function(event) {
  event.preventDefault()

  let formUserName = document.querySelector('input[name="username"]').value
  let formPassWord = document.querySelector('input[name="password"]').value

  $.ajax({
      url: "https://s3.us-east-2.amazonaws.com/dl77seatest00/userid.json",
    })
    .then(function(res) {
      let userName = res.userid[0].userName
      let passWord = res.userid[0].passWord
      if (formUserName === userName && formPassWord === passWord) {
        window.location.assign("https://s3.us-east-2.amazonaws.com/dl77seatest00/mail.html")
      } else {
        console.log("no")
        document.querySelector('#error-text').style.display="block"
      }
    })
})
