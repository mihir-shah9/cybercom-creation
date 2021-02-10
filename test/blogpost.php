<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blog Post</title>
</head>

<body>
    <?php require_once 'postData.php';
    require_once 'config.php';
    require_once 'navbar.php';
    $dataGrid = listBlogPost($_SESSION['id']);
    $sid = $_SESSION['id'];
    if (isset($_GET['id'])) {
        (deleteData('blog_post', $_GET['id'])) ?
            header("location: blogPost.php ") : "";
    }
    ?>
    <?php isset($_SESSION['id']) ? " " : header("Location: login.php"); ?>

    <div class="container">
        <h1>Blog Posts</h1>
        <hr style="border-color: black;">
        <a class="btn btn-primary" href="addpost.php">Add Blog Post</a>
        <hr style="border-color: black;">
        <table border="3px">
            <?= (displayColumn($dataGrid)) ?>
            <?= (displayPostData($dataGrid)) ?>
        </table>
    </div>

</body>

</html>