<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../test/style.css">
    <title>Blog Application</title>
</head>

<body>
    <?php require_once 'LoginRegOperation.php'; ?>
    <div>
        <form action="" method="POST" class="regi">
            <h2 style="margin-left: 160px;">Login</h2>
            <div>
                <label for="email">Email</label>
                <input type="email" name="user[email]" id="email">
                <?php if (ValidateData('user', 'email')) : ?>
                    <span>Enter valid Email<span>
                        <?php $validFlag++;
                    endif;  ?>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" name="user[password]" id="password">
                <?php if (ValidateData('user', 'password')) : ?>
                    <span>Enter valid password <span>
                        <?php $validFlag++;
                    endif;  ?>
            </div>

            <input type="submit" value="Login" name="submit">
            <button class="btn btn-primary"><a href="register.php">Register</a></button>
        </form>
    </div>

    <div>
        <?php LoginOp($validFlag) ?>
    </div>
</body>

</html>