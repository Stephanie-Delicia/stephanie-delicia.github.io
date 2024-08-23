<?php
$action=$_REQUEST['action'];
if ($action=="") /* if no action made, just display */
    {
    ?>
        <div class="contact-form-container">
            <form id="contactForm" action="#" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label class="required" for="name"> Name </label>
                    <br>
                    <input type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    value=""required>
                    <span class="error-message" id="nameError"></span>
                </div>

                <div class="form-group">
                    <label class="required" for="subject">Subject</label>
                    <br>
                    <input type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    value=""required>
                    <span class="error-message" id="subjectError"></span>
                </div>
                
                <div class="form-group">
                    <label class="required" for="email_name">Email Address</label>
                    <br>
                    <input type="text" 
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value=""required>
                    <span class="error-message" id="emailError"></span>
                </div>

                <div class="form-group">
                    <label class="required" for="message">Message</label>
                    <br>
                    <textarea id="message"class="input"type="text"name="message"placeholder="Enter message"rows="5"required></textarea>
                    <span class="error-message" id="messageError"></span>
                </div>
                <br>
                <div class="submit-button">
                    <input type="submit" value="Submit">
                </div>
                
                <div id="sprite2"> </div> 
                <br>
                </form>
        </div>
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