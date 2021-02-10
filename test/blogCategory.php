<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blog Category</title>
</head>

<body>
    <?php require_once 'postData.php';
    require_once 'config.php';
    require_once 'navbar.php';
    $dataGrid = listCategory();
    $sid = $_SESSION['id'];
    if (isset($_GET['id'])) {
        (deleteData('category', $_GET['id'])) ?
            header("location: blogCategory.php ") : "";
    }
    ?>
    <?php isset($_SESSION['id']) ? " " : header("Location: login.php"); ?>

    <div class="container">
        <h1>Blog Category</h1>
        <hr style="border-color: black;">
        <a class="btn btn-primary" href="addcategory.php">Add Category</a>
        <hr style="border-color: black;">
        <table border="3px">
            <?= (displayColumn($dataGrid)) ?>
            <?= (displayPostData($dataGrid)) ?>
        </table>
    </div>
</body>

</html>