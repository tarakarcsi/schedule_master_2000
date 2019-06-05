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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="${indexScriptUrl}"></script>
    <script src="${loginScriptUrl}"></script>
    <script src="${logoutScriptUrl}"></script>
    <title>Schedule-Master-9000</title>
</head>
<body>

<%--LOGIN-SIGN IN--%>

<div class="container">
    <div class="login">
        <div class="row">
            <div class="col-sm-12 col-md">
                <div class="login-left" id = "login">
                    <span>I have an account</span>
                    <h2>Login !</h2>
                    <form action="">
                        <input type="email" name="email" />
                        <label for="email">E-mail</label>
                        <input type="password" name="password" placeholder="" />
                        <label for="email">password</label> 
                        <input type="submit" value="Login" />
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
                    <form action="">
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

<%--                ------------------------------------------------------------%>
<%--                    EZEKET ÁTIRJUK JO LESZ PÉLDÁNAK AZÉRT NEM TÖRÖLTEM    --%>
<%--                ------------------------------------------------------------%>


<%--<div id="profile-content" class="hidden content">--%>
<%--    <h1>Profile</h1>--%>
<%--    <p>Email: <span id="user-email"></span></p>--%>
<%--    <p>Password: <span id="user-password"></span></p>--%>
<%--    <h2>Links</h2>--%>
<%--    <ul>--%>
<%--        <li><a href="javascript:void(0);" onclick="onShopsClicked();">Shops</a></li>--%>
<%--        <li><a href="javascript:void(0);" onclick="onCouponsClicked();">Coupons</a></li>--%>
<%--    </ul>--%>
<%--</div>--%>
<%--<div id="shops-content" class="hidden content">--%>
<%--    <h1>Shops</h1>--%>
<%--    <table id="shops">--%>
<%--        <thead>--%>
<%--        <tr>--%>
<%--            <th>ID</th>--%>
<%--            <th>Name</th>--%>
<%--        </tr>--%>
<%--        </thead>--%>
<%--        <tbody>--%>
<%--        </tbody>--%>
<%--    </table>--%>
<%--    <h2>Add new shop</h2>--%>
<%--    <form id="shop-form" onsubmit="return false;">--%>
<%--        <input type="text" name="name">--%>
<%--        <button onclick="onShopAddClicked();">Add</button>--%>
<%--    </form>--%>
<%--</div>--%>
<%--<div id="shop-content" class="hidden content">--%>
<%--    <h1>Shop</h1>--%>
<%--    <p>ID: <span id="shop-id"></span></p>--%>
<%--    <p>Name: <span id="shop-name"></span></p>--%>
<%--</div>--%>
<%--<div id="coupons-content" class="hidden content">--%>
<%--    <h1>Coupons</h1>--%>
<%--    <table id="coupons">--%>
<%--        <thead>--%>
<%--        <tr>--%>
<%--            <th>ID</th>--%>
<%--            <th>Name</th>--%>
<%--            <th>Percentage (%)</th>--%>
<%--        </tr>--%>
<%--        </thead>--%>
<%--        <tbody>--%>
<%--        </tbody>--%>
<%--    </table>--%>
<%--    <h2>Add new coupon</h2>--%>
<%--    <form id="coupon-form" onsubmit="return false;">--%>
<%--        <input type="text" name="name">--%>
<%--        <input type="range" min="0" max="100" name="percentage">--%>
<%--        <button onclick="onCouponAddClicked();">Add</button>--%>
<%--    </form>--%>
<%--</div>--%>
<%--<div id="coupon-content" class="hidden content">--%>
<%--    <h1>Coupon</h1>--%>
<%--    <p>ID: <span id="coupon-id"></span></p>--%>
<%--    <p>Name: <span id="coupon-name"></span></p>--%>
<%--    <p>Percentage: <span id="coupon-percentage"></span>%</p>--%>
<%--    <p>Shops: <span id="coupon-shops"></span></p>--%>
<%--    <h2>Add to shops</h2>--%>
<%--    <form id="coupon-shops-form" onsubmit="return false">--%>
<%--        <select name="shopIds" multiple>--%>
<%--        </select>--%>
<%--        <button onclick="onCouponShopsAddClicked();">Add</button>--%>
<%--    </form>--%>
<%--</div>--%>
<%--<div id="logout-content" class="hidden content">--%>
<%--    <button id="logout-button">Logout</button>--%>
<%--</div>--%>
</body>
</html>
