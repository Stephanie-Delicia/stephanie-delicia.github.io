<?php
$action=$_REQUEST['action'];
if ($action=="") /* if no action made, just display */
    {
    ?>
    <form action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="action" value="submit">
    Your name:<br>
    <input name="name" type="text" value=""/><br>
    Your email:<br>
    <input name="email" type="text" value=""/><br>
    Your message:<br>
    <textarea name="message" rows="5"></textarea><br>
    <input type="submit" value="Send email"/>
    </form>
    <?php
    } 
else /* send the submitted data */
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
        echo "All fields are required, please fill <a href=\"\">the form</a> again.";
        }
    else {        
        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject=" Message sent using your contact form";
        mail("smartinezdelicia@gmail.com", $subject, $message, $from);
        echo "Email sent!";
        }
    }  
?>