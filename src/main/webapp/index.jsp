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
    <c:url value="/UserPopup.js" var="UserPopupUrl"/>
    <c:url value="/schedules.js" var="schedulesScriptUrl"/>
    <c:url value="/profile.js" var="profileScriptUrl"/>
    <c:url value="/tasks.js" var="tasksScriptUrl"/>
    <c:url value="/viewSchedule.js" var="viewScheduleScriptUrl"/>
    <link rel="stylesheet" type="text/css" href="${styleUrl}">
    <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    <script src="${indexScriptUrl}"></script>
    <script src="${profileScriptUrl}"></script>
    <script src="${loginScriptUrl}"></script>
    <script src="${logoutScriptUrl}"></script>
    <script src="${UserPopupUrl}"></script>
    <script src="${schedulesScriptUrl}"></script>
    <script src="${tasksScriptUrl}"></script>
    <script src="${viewScheduleScriptUrl}"></script>
    <title>Schedule-Master-9000</title>
</head>
<body>

<div class="container content" id="container">
    <div class="login" id="loginDiv">
        <div class="row">
            <div class="col-sm-12 col-md">
                <div class="login-left" id="login">
                    <span>I have an account</span>
                    <h2>Login !</h2>
                    <form id="login-form" onsubmit="return false;">
                        <input type="email" name="email" required/>
                        <label for="email">E-mail</label>
                        <input type="password" name="password" placeholder="" required/>
                        <label for="email">password</label>
                        <input type="submit" id="login-button" value="Login"/>
                        <input type="checkbox" name="" id="check1"/>
                        <label class="check" for="check1">Remember me </label>
                        <span><a href="#">Forgot Password?</a></span>
                    </form>
                </div>
            </div>
            <div class="col-sm-12 col-md">
                <div class="login-right" id="register">
                    <span>Not a member</span>
                    <h2>Signup !</h2>
                    <form id="register-form" onsubmit="return false;">
                        <input type="text" name="name" placeholder="" required/>
                        <label for="email">Full name</label>
                        <input type="email" name="email" placeholder="" required/>
                        <label for="email">E-mail</label>
                        <input type="password" name="password" placeholder="" required/>
                        <label for="email">password</label>
                        <input type="submit" value="Sign in" id="register-button"/>
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
<div class="content hidden" id="main">
    <nav>
        <ul id="nav-ul">
            <img data-modal-target="#modali" id="list-logo"
                 src="https://cdn3.iconfinder.com/data/icons/business-and-finance-icons/512/Business_Man-512.png"/>
            <li id="nav-home" class="nav-li">Home</li>
            <li id="nav-task-editor" class="nav-li">Task Editor</li>
            <li id="nav-schedule-editor" class="nav-li">Schedule Editor</li>
            <li id="nav-view-schedule" class="nav-li">View Schedule</li>
            <li id="nav-logout" class="nav-li">Logout</li>
        </ul>
    </nav>
    <div id="modali" class="modali" style="display: none;">
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
    <div id="banner" class="content">
        <img src="https://i.pinimg.com/originals/ea/00/0c/ea000cc6fb9375b14a7b21d55dcf9745.jpg">
        <div id="banner-text">
            <h1>Schedule-Master-2000</h1>
            <p>Made by: Karesz, Lali, Dénes</p>
        </div>
    </div>

    <div id="schedule-editor" class="content hidden">
        <div id="schedule-table">
            <table id="schedule-table-id" ondrop="drop(event)" ondragover="allowDrop(event)">
                <thead>
                    <p style="font-size: 25px; margin-bottom: 0px; padding:20px; background: coral; border: 5px solid black; border-bottom: 0px; ">
                        <b>Schedules</b></p>
                </thead>
                <tbody>
                </tbody>
            </table>
            <br>
            <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"
                 style="margin: 0 auto; width: 30px; padding: 20px; height: 30px;">
                <img src="https://unixtitan.net/images/poop-clipart-horse-2.png" alt="Szar" style="width: 120px;">
            </div>
        </div>
        <div id="schedule-parameters">
            <h2 id="schedule-h1">Create new schedule</h2>
            <label id="schedule-label-title" for="schedule-title"><b>Title</b><br></label>
            <input type="text" name="schedule-title" required><br>
            <div id="schedule-days"><b>Days</b><br>
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
                <option value="true">Published</option>
                <option value="false">Unpublished</option>
            </select><br>
            <button id="schedule-submit">Submit</button>
        </div>
    </div>

    <div id="task-editor" class="content hidden">
        <div id="task-table">
            <table id="task-table-id" ondrop="drop(event)" ondragover="allowDrop(event)">
                <thead>
                    <p style="font-size: 25px; margin-bottom: 0px; padding:20px; background: coral; border: 5px solid black; border-bottom: 0px; ">
                        <b>Tasks</b></p>
                </thead>
                <tbody>
                </tbody>
            </table>
            <br>
            <div id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"
                 style="margin: 0 auto; width: 30px; padding: 20px; height: 30px;">
                <img src="https://cdn.iconscout.com/icon/free/png-512/recycle-bin-1-461646.png" alt="Bin"
                     style="width: 120px;">
            </div>
        </div>
        <div id="task-parameters" class="content hidden">
            <h2 id="task-h1">Create new task</h2>
            <label id="task-label-title"><b>Title</b></label><br>
            <input type="text" name="task-title" required><br>
            <div id="task-text" class="form-group shadow-textarea"><br>
                <label for="exampleFormControlTextarea6"><b>Text</b></label>
                <textarea name="task-textarea" class="form-control z-depth-1 task-textarea"
                          id="exampleFormControlTextarea6" rows="3" cols="10" placeholder="Write something here..."
                          required></textarea><br>
                <button id="task-submit">Submit</button>
            </div>
        </div>
        <div id="task-modifier" class="content hidden">
            <h2 id="task-modifier-h1">Modify task</h2>
            <label id="task-modifier-label-title"><b>Title</b></label><br>
            <input type="text" id="task-modifier-title" name="task-modifier-title" required><br>
            <div id="task-modifier-text" class="form-group shadow-textarea"><br>
                <label for="exampleFormControlTextarea6"><b>Text</b></label>
                <textarea name="task-textarea" class="form-control z-depth-1 task-textarea"
                          id="exampleFormControlTextarea" rows="3" cols="10" required></textarea><br>
                <button id="task-modifier-submit">Submit</button>
            </div>
        </div>
    </div>
    <div id="view-schedule" class="content hidden">
        <div id="view-schedule-tasks"></div>
        <div id="view-schedule-table"></div>
        <div id="schedule-table2">
            <table id="schedule-table-id2">
                <thead><p style="font-size: 25px; margin-bottom: 0px; padding:20px; background: coral; border: 5px solid black; border-bottom: 0px; ">
                    <b>Schedules</b></p></thead>
                <tbody>
                </tbody>
            </table>
        <div id="task-table2">
            <table id="task-table-id2" ondrop="drop(event)" ondragover="allowDrop(event)">
                <thead>
                <p style="font-size: 25px; margin-bottom: 0px; padding:20px; background: coral; border: 5px solid black; border-bottom: 0px; ">
                    <b>Tasks</b></p>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>
</body>
</html>
