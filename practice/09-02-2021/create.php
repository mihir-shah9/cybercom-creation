<?php
include 'navbar.php';
?>


<div class="container">
    <h1>Create Contact</h1>
    <hr style="border-color: black;">
    <form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="POST">
        <div class="row">
            <div class="col">
                <label>Name</label>
                <input type="text" class="form-control" name="name" placeholder="Name" autocomplete="off" required>
            </div>
            <div class="col">
                <label>Email</label>
                <input type="email" class="form-control" name="email" placeholder="Email" autocomplete="off" required>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label>Phone</label>
                <input type="text" class="form-control" name="phone" placeholder="Phone" autocomplete="off" required>
            </div>
            <div class="col">
                <label>Title</label>
                <input type="text" class="form-control" name="title" placeholder="Title" autocomplete="off" required>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <label>Created</label>
                <input type="date" class="form-control" name="created" placeholder="Date" autocomplete="off" required>
            </div>
        </div>

        <input type="submit" class="btn btn-primary create" name="submit" value="Create" />
    </form>
</div>

<?php

include 'dbcon.php';

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $title = $_POST['title'];
    $created = $_POST['created'];

    $insertquery = "insert into registration(name, email, phone, title, created) values('$name', '$email', '$phone', '$title', '$created')";

    $query = mysqli_query($con, $insertquery);

    if ($query) {
        header('location:contacts.php');
    } else {
?>
        <script>
            alert('no data inserted!!!');
        </script>
<?php
    }
}

?>