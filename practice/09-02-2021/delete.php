<?php
include 'dbcon.php';

$id = $_GET['id'];

$deletequery = "delete from registration where id=$id";
$query = mysqli_query($con, $deletequery);

if ($query) {
    header('location:contacts.php');
} else {
?>
    <script>
        alert('no deleted data!!!');
    </script>
<?php
}
?>