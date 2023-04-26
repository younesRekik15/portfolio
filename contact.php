<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cnx=mysqli_connect('localhost','root','','contact');
        $name=$_POST['fullName'];
        $email=$_POST['email'];
        $message=$_POST['message'];
        $req="INSERT INTO person VALUES('$name','$email','$message')";
        $res=mysqli_query($cnx,$req);
        if(num_affected_rows($res)==-1){
            echo "email is alerady exist";
        }else{
            echo "the message sent successfully"
        }
        mysqli_close($cnx);
    ?>
</body>
</html>