<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <c:url value="/style.css" var="styleUrl"/>
    <c:url value="/index.js" var="indexScriptUrl"/>
    <c:url value="/loginSignup.js" var="loginScriptUrl"/>
    <c:url value="/logout.js" var="logoutScriptUrl"/>
    <link rel="stylesheet" type="text/css" href="${styleUrl}">
    <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="${indexScriptUrl}"></script>
    <script src="${loginScriptUrl}"></script>
    <script src="${logoutScriptUrl}"></script>
    <link rel="script" href="UserPopup.js">
    <title>Schedule-Master-9000</title>
</head>
<body>


<!-- <div class="container content">
    <div class="login" id="loginDiv">
        <div class="row">
            <div class="col-sm-12 col-md">
                <div class="login-left" id="login">
                    <span>I have an account</span>
                    <h2>Login !</h2>
                    <form id="login-form" onsubmit="return false;" >
                        <input type="email" name="email" />
                        <label for="email">E-mail</label>
                        <input type="password" name="password" placeholder="" />
                        <label for="email">password</label>
                        <input type="submit" id ="login-button" value="Login" onclick="onLoginButtonClicked()"/>
                        <input type="checkbox" name="" id="check1" />
                        <label class="check" for="check1">Remember me </label>
                        <span><a href="#">Forgot Password?</a></span>
                    </form>
                </div>
            </div>
            <div class="col-sm-12 col-md">
                <div class="login-right" id = "register">
                    <span>Not a member</span>
                    <h2>Signup !</h2>
                    <form id="register-form" onsubmit="return false;">
                        <input type="text" name="name" placeholder="" />
                        <label for="email">Full name</label>
                        <input type="email" name="email" placeholder="" />
                        <label for="email">E-mail</label>
                        <input type="password" name="password" placeholder="" />
                        <label for="email">password</label>
                        <input type="submit" value="Sign in" id = "register-button" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="profile-content" class="hidden content">
    <h1>User</h1><br>
    <table id="user">
        <thead>
        <tr>
            <th id='user-id-thead'>ID</th>
            <th id='user-name-thead'>Name</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody id="users-tbody">
        </tbody>
    </table>
</div>
<div class="content hidden" id="main"> -->
<nav>
    <ul id="nav-ul">
        <img data-modal-target="#modal" id="list-logo" src="http://www.pngall.com/wp-content/uploads/2016/06/Biohazard-Symbol-PNG-File.png"/>
        <li class="nav-li">Home</li>
        <li class="nav-li">Task Editor</li>
        <li class="nav-li">Schedule Editor</li>
        <li class="nav-li">View Schedule</li>
        <li class="nav-li">Logout</li>
    </ul>
</nav>
    <!-- <div id="banner">
        <img src="https://i.pinimg.com/originals/ea/00/0c/ea000cc6fb9375b14a7b21d55dcf9745.jpg">
        <div id="banner-text">
            <h1>Schedule-Master-2000</h1>
            <p>Made by: Karesz, Lali, Dénes</p>
        </div>
    </div> -->
    <div id="modal" class="modal">
        <div class="modal-header">
            <div class="title">Profile</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div class="modal-body">
            <p>Name: </p>
            <p>E-mail: </p>
            <p>Status: </p>
        </div>
    </div>

<div id="schedule-editor">
    <div id="schedule-table">
        <table id="schedule-table-id">
            <tr>
                <th>Schedules</th>
            </tr>
            <tr>
                <td>sched1</td>
            </tr>
            <tr>
                <td>sched2</td>
            </tr>
            <tr>
                <td>sched9000</td>
            </tr>
        </table>
    </div>
    <div id="schedule-parameters">
        <label id="schedule-label-title" for="schedule-title"><b>Title</b><br></label>
        <input type="text" name="schedule-title" required><br>
        <div id="schedule-days">Days<br>
            <select multiple name="days" id="schedule-days-list">
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
        </div>
        <select name="published-status" id="published-status">
            <option value="Published">Published</option>
            <option value="Unpublished">Unpublished</option>
        </select><br>
        <button id="schedule-submit">Submit</button>
    </div>
</div>
</body>
</html>
