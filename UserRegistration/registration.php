<!DOCTYPE html>
<html>
    <head>
        <title>Meal Planner</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/lux/bootstrap.min.css" rel="stylesheet" integrity="sha384-oOs/gFavzADqv3i5nCM+9CzXe3e5vXLXZ5LZ7PplpsWpTCufB7kqkTlC9FtZ5nJo" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/fbf0bdf9df.js"></script>
        <link rel="shortcut icon" type="image/png" href="/Page Templates/Images/favicon.png"/>
    </head>

    <body>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top">
        <a class="navbar-brand" href="#">Meal Planner</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">

            <!-- User dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true"><span><i class="fas fa-user-circle text-white fa-2x"></i></span></a>
              <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 37px, 0px); top: 0px; left: 0px; will-change: transform;">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="#">My recipes</a>
                <a class="dropdown-item" href="#">My meal plan</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Logout</a>
              </div>
            </li>
            <!-- /User Dropdown -->

            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Recipes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Register</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- /Navbar -->

      <!-- body -->
 <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>User profile form </title>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha256-3dkvEK0WLHRJ7/Csr0BZjAWxERc5WH7bdeUya2aXxdU= sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==" crossorigin="anonymous">
    <!-- Bootstrap Core CSS -->
<!--     <link href="css/bootstrap.min.css" rel="stylesheet"> -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==" crossorigin="anonymous">

    <!-- Custom CSS -->
    <style>
    body {
        padding-top: 70px;
        /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */
    }

    .othertop{margin-top:10px;}
    </style>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

   <div class="container">
<div class="row">
<div class="col-md-10 ">
<form class="form-horizontal">
<fieldset>

<!-- Form Name -->

<legend class="table table-hover"> </legend>
  
<legend class="card text-white bg-primary mb-3">User profile form </legend>

<!-- Text input-->

<div class="form-group">
  <label class="col-md-4 control-label" for="Name (Full name)">Name (Full name)</label>  
  <div class="col-md-4">
 <div class="input-group">
       <div class="input-group-addon">
        <i class="fa fa-user">
        </i>
       </div>
       <input id="Username" name="UserName" type="text" placeholder="Username" class="form-control input-md"require
    >
    <input id="Name (First name)" name="FirstName" type="text" placeholder="Name (First name)" class="form-control input-md"
    >
    <input id="Name (Last name)" name="LastName" type="text" placeholder="Name (Last name)" class="form-control input-md"
    >
      </div>

    
  </div>

  
</div>

<!-- File Button --> 
<div class="form-group">
  <label class="col-md-4 control-label" for="Upload photo">Upload photo</label>
  <div class="col-md-4">
    <input id="Upload photo" name="Upload photo" class="input-file" type="file">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="Date Of Birth">Date Of Birth</label>  
  <div class="col-md-4">

  <div class="input-group">
       <div class="input-group-addon">
     <i class="fa fa-birthday-cake"></i>
        
       </div>
       <input id="Date Of Birth" name="Date Of Birth" type="text" placeholder="Date Of Birth" class="form-control input-md"require>
      </div>
  
    
  </div>
</div>




<!-- Multiple Radios (inline) -->
<div class="form-group">
  <label class="col-md-4 control-label" for="Gender">Gender</label>
  <div class="col-md-4"> 
    <label class="radio-inline" for="Gender-0">
      <input type="radio" name="Gender" id="Gender-0" value="1" checked="checked">
      Male
    </label> 
    <label class="radio-inline" for="Gender-1">
      <input type="radio" name="Gender" id="Gender-1" value="2">
      Female
    </label> 
    <label class="radio-inline" for="Gender-2">
      <input type="radio" name="Gender" id="Gender-2" value="3">
      Other
    </label>
  </div>
</div>

<!-- Text input-->



<!-- Text input-->


<!-- Text input-->


<!-- Text input-->

<!-- Text input-->


<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="Email Address">Email Address</label>  
  <div class="col-md-4">
  <div class="input-group">
       <div class="input-group-addon">
     <i class="fa fa-envelope-o"></i>
        
       </div>
    <input id="Email Address" name="Email Address" type="text" placeholder="Email Address" class="form-control input-md"require>
    
      </div>
  
  </div>
</div>

<!-- Text input-->

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="Location">Location</label>  
  <div class="col-md-4">
  <div class="input-group">
       <div class="input-group-addon">
     <i class="fa fa-street-view"></i>
        
       </div>
   <input id="Location" name="Location" type="text" placeholder="Enter Location Here" class="form-control input-md">
    
      </div>
  </div>
  </div>

<!-- Text input-->

<!-- Multiple Checkboxes -->
  
<div class="form-group">
  <label class="col-md-4 control-label" for="Diet Orient">Diet Orientation</label>
  <div class="col-md-4">
  <div class="checkbox">
    
    <fieldset class="form-group">
      <legend>Special Dietary Routine?</legend>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="">
               <input type="checkbox" name="Diet Orient" id="Diet Orient-1" value="1">
          Pescetarian (no meat)
        </label>
      </div>
           <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="" >
               <input type="checkbox" name="Diet Orient" id="Diet Orient-2" value="2">
          Vegetarian (no meat, no fish)
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="" >
               <input type="checkbox" name="Diet Orient" id="Diet Orient-3" value="3">
          Vegan (no meat, no fish, diary)
        </label>
      </div>
     <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="4" >
               <input type="input" name="Diet Orient" id="Diet Orient-4"  placeholder="Other Dietary Routine">
        </label>
      </div>
    
  </div>
</div>
  </div>

<!-- Text input-->


<!-- Multiple Radios -->
<div class="form-group">
  <label class="col-md-4 control-label" for="FoodCOD">Allergies?</label>
  <div class="col-md-4">
  <div class="checkbox">
    <fieldset class="form-group">
      <legend>Special Dietary Restrictions?</legend>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="">
               <input type="checkbox" name="Allergy" id="Allergy-1" value="1">
          Peanuts
        </label>
      </div>
      
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="" >
               <input type="checkbox" name="Allergy" id="Allergy-2" value="2">
          Shellfish
        </label>
      </div>
     <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="" >
               <input type="checkbox" name="Allergy" id="Allergy-3" value="3">
          Dairy
        </label>
      </div>
     <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="" >
               <input type="checkbox" name="Allergy" id="Allergy-4" value="4">
          Gluten
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="" >
               <input type="checkbox" name="Allergy" id="Allergy-5" value="4">
          None
        </label>
      </div>
     <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="6" >
               <input type="input" name="Allergy" id="Allergy-6"  placeholder="Other Diet Restriction">
        </label>
      </div>
  </div>
</div>
  </div>


<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="ProfileWriteIn">Profile Description</label>  
  <div class="col-md-4">
  <div class="input-group">
        
    <div class="form-group">
      <label class="table-primary" for="ProfileBlurb">Write here below:</label>
      <textarea class="form-control" rows= "5" id="ProfileBlurb" rows="3"></textarea>
    </div>
    </div>

<!-- Textarea -->
  <div>
  </div>
<div class="form-group">
  <label class="col-md-4 control-label" ></label>  
  <div class="col-md-4">
  <a href="#" class="btn btn-success"><span class="glyphicon glyphicon-thumbs-up"></span> Submit</a>
  <a href="#" class="btn btn-danger" value=""><span class="glyphicon glyphicon-remove-sign"></span> Clear</a>
  </div>
</div>

</fieldset>
</form>
</div>
<div class="col-md-2 hidden-xs">
<img src="http://websamplenow.com/30/userprofile/images/avatar.jpg" class="img-responsive img-thumbnail ">
  </div>


</div>
   </div>
    <!-- jQuery Version 1.11.1 -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

      <!-- /body -->
    </body>
</html>