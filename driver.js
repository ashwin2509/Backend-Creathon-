var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE NEBULUS2", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

var form = ''; 

form = '<div class="login-page"> \
  <div class="form"> \
    <form class="register-form"> \
      <link rel="stylesheet" href="login.css"> \
      <input type="text" placeholder="name"/> \
      <input type="password" placeholder="password"/> \
      <input type="text" placeholder="email address"/> \
      <button>create</button> \

    </form> \
    <form class="login-form"> \
<h3>Pick Car</h3> \
<form name="myform" action="http://www.mydomain.com/myformhandler.cgi" method="POST"> \
<div align="center"> \
<select name="mydropdown">
<option value="1"> </option> \
<option value="2"> </option> \
<option value="3"> </option> \
<option value="4"> </option> \
<option value="5"> </option> \
<option value="6"> </option> \
</select> \
<h3>Space available:</h3> \


      <input type="text" placeholder=""/> \
<h3>Destination:</h3> \
<input type="text" placeholder=""/> \

<button type="button" onclick="location.href='riderlist.html';">DONE </button> \
    </form> \
  </div> \
  <script src="login.js"></script> \
</div> \



