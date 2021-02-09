<?php
include 'navbar.php';
?>


<div class="container">
    <h1>Update Contact</h1>
    <hr style="border-color: black;">
    <form action="" method="POST">

        <?php
        include 'dbcon.php';

        $id = $_GET['id'];
        $selectquery = " select * from registration where id=$id";
        $query = mysqli_query($con, $selectquery);

        $result = mysqli_fetch_assoc($query);

        if (isset($_POST['submit'])) {
            $id = $_GET['id'];
            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $title = $_POST['title'];
            $created = $_POST['created'];

            $updatequery = "update registration set id=$id, name='$name', email='$email', phone='$phone', title='$title', created='$created' where id=$id";

            $query = mysqli_query($con, $updatequery);


            if ($query) {
                header('location:contacts.php');
            } else {
        ?>
                <script>
                    alert('no updated data!!!');
                </script>
        <?php
            }
        }
        ?>


        <div class="row">
            <div class="col">
                <label>Name</label>
                <input type="text" class="form-control" name="name" placeholder="Name" value="<?php echo $result['name']; ?>" autocomplete="off">
            </div>
            <div class="col">
                <label>Email</label>
                <input type="email" class="form-control" name="email" placeholder="Email" value="<?php echo $result['email']; ?>" autocomplete="off">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label>Phone</label>
                <input type="text" class="form-control" name="phone" placeholder="Phone" value="<?php echo $result['phone']; ?>" autocomplete="off">
            </div>
            <div class="col">
                <label>Title</label>
                <input type="text" class="form-control" name="title" placeholder="Title" value="<?php echo $result['title']; ?>" autocomplete="off">
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <label>Created</label>
                <input type="date" class="form-control" name="created" placeholder="Date" value="<?php echo $result['created']; ?>" autocomplete="off">
            </div>
        </div>

        <input type="submit" class="btn btn-primary create" name="submit" value="Update" />
    </form>
</div>