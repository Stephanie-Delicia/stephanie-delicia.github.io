<DOCTYPE! html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<head lang="en-US">
    <title>Stephanie Martinez</title>
    <link rel="stylesheet" href="/css/styles.css">
</head>
<!-- hamburger icon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!--------------------- Navigation --------------------->
<body>
    <div id="homeNav">
        <a href="#top"><tabName> Stephanie Martinez </tabName></a>
        <a href="#contact">    <tab onclick="tab_clicked(this);" id = "content_tab">                Contact     </tab></a>
        <a href="#experience"> <tab onclick="tab_clicked(this);" id = "exp_tab">                    Experience  </tab></a>
        <a href="#skills">     <tab onclick="tab_clicked(this);" id = "skills_tab">                 Skills      </tab></a>
        <a href="#aboutMe">    <tab class="active" onclick="tab_clicked(this);" id = "aboutMe_tab"> About Me    </tab></a>
    </div> 

    <!-- Sticky bar animation -->
    <script src="js/sticky_bar.js"></script> 

    <!-- Tab clicked animation -->
    <script src="js/nav_tab.js"></script> 

    <!-- Contact form php (DO NOT UNCOMMENT!)-->
    <!-- <script src="php/submit_form.php"></script>  -->

<!--------------------- Intro --------------------->
<div class="content" id="top">
    <div id="sprite"> </div> 
    <div class="introContent"> 
        I'm Stephanie Martinez. A recent graduate and enthusiast for applications of mathematics and programming.
        On this site, you can view both my skills and projects.
    </div>
<div>

<!--------------------- About Me page --------------------->
    <div class="generalContent" id="aboutMe">
        <header> About Me </header> 
        <line></line>
        <content>
            I recently graduated from Northeastern University with 
            a BS in Computer Science and Mathematics. 
            <br></br>

            At Northeastern, I 
            learned programming fundamentals (e.g., algorithms & data structures, object-oriented design) 
            as well as important practices in software engineering and mobile development (e.g., testing 
            (unit testing), version control, agile workflows).
            <br></br>
            
            The other half of my education focused on mathematics which provided a great base for higher-level 
            courses, such machine learning and data science.
            <br></br><smolContent> My personal favorite courses were Advanced Statistics & Probability, 
                Graph Theory, and Real Analysis!
            </smolContent>

            <br></br>
            
            I was also a research assistant at Northeastern University where I trained & evaluated large 
            language models, particularly multi-document summarization models. 
            <br></br>
            <smolContent> I highlight my project in the Experience section.</smolContent>

            <br></br>
            I am currently interested in positions within the realms of software engineering or data science.
        </content>
    </div> 

<!--------------------- Skills page --------------------->
    <div class="generalContent" id="skills">
        <header> Skills </header>
        <line></line>
        <content>
            Languages: Python, Java, R, MATLAB, TypeScript, Kotlin, React
            <br></br>

            Programming Concepts: Software Engineering Principles, Mobile Application Development, 
            MVC and MVVM patterns, Object-oriented principles, Version Control, Testing, Algorithms 
            <br></br>
        
            Mathematics: Adv. Statistics & Probability, Differential Calculus, Numerical Analysis, 
            Real Analysis, Complex Analysis, Graph Theory, Group Theory, Linear Algebra, Machine Learning

            <smolContent>
                <br></br>
                On my free time, I like to <a href="#art" text-decoration=none>draw</a>.
            </smolContent>
        </content>
    </div> 


<!--------------------- Experience page --------------------->
    <div class="generalContent" id="experience">
        <header> Experience </header>
        <line></line>
        <content>Under construction. Will be updated soon! :]]]]]]]]</content>
    </div> 

<!--------------------- Contact page --------------------->
    <div class="generalContent" id="contact">
        <header> Contact </header>
        <line></line>
        <div class="centerText"> Feel free to fill out this form or reach me at smartinezdelicia@gmail.com!</div>
        
        <?php include('php/submit_form.php') ?>


    </div>

</div>
</body>
</html>

