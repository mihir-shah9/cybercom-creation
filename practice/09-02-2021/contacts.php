<?php
include 'navbar.php';
?>


<div class="container">
    <h1>Read Contacts</h1>
    <hr style="border-color: black;">
    <a class="btn btn-primary" href="create.php">Create Contact</a>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Title</th>
                <th scope="col">Created</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>

            <?php
            include 'dbcon.php';
            $selectquery = " select * from registration";
            $query = mysqli_query($con, $selectquery);
            while ($result = mysqli_fetch_assoc($query)) {
            ?>
                <tr>
                    <td><?php echo $result['id']; ?></td>
                    <td><?php echo $result['name']; ?></td>
                    <td><?php echo $result['email']; ?></td>
                    <td><?php echo $result['phone']; ?></td>
                    <td><?php echo $result['title']; ?></td>
                    <td><?php echo $result['created']; ?></td>
                    <td><a class="btn btn-success btn-sm" href="update.php?id=<?php echo $result['id']; ?>"><i class="fas fa-pencil-alt"></i></a> <a class="btn btn-danger btn-sm" href="delete.php?id=<?php echo $result['id']; ?>"><i class="fas fa-trash"></i></a></td>
                </tr>
            <?php
            }
            ?>

        </tbody>
    </table>
</div>