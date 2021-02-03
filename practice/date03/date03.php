<?php
    //output HTML using php:-
    echo '<strong>output HTML using php:</strong>';
    echo '<br>';
    echo '<input type="text" value="Hello.">';
    echo '<br><br>';

    //variables:-
    echo '<strong>variables:</strong>';
    echo '<br>';
    $text = 'Mihir';
    $num = 100;
    echo $text;
    echo '<br>';
    echo $num;
    echo '<br><br>';

    //concatenation:-
    echo '<strong>concatenation:</strong>';
    echo '<br>';
    $surname = 'SHAH';
    $name = 'MIHIR';
    echo "My name is $surname $name";
    echo '<br><br>';

    //if-else statement:-
    echo '<strong>if-else statement:</strong>';
    echo '<br>';
    if(1){
        echo 'TRUE.';
    }
    else{
        echo 'FALSE.';
    }
    echo '<br><br>';

    //if-else if statement:-
    echo '<strong>if- else if statement:</strong>';
    echo '<br>';
    $num = 1;
    if($num==10){
        echo 'equal to ten.';
    }
    else if($num==2){
        echo 'equal to two.';
    }
    else{
        echo 'Not equal to ten.';
    }
    echo '<br><br>';

    //Assignment operater:-
    echo '<strong>Assignment operater:</strong>';
    echo '<br>';
    $num = 20;
    $num += 5;
    echo $num;
    echo '<br><br>';

    //Comparison operater:-
    //> , < , >= , <= , == , !=
    echo '<strong>Comparison operater:</strong>';
    echo '<br>';
    $num = 20;
    if($num==20){
        echo 'value match.';
    }
    else{
        echo 'value not match.';
    } 
    echo '<br><br>';

    
    //Logical operater:-
    //&& , ||
    echo '<strong>Logical operater:</strong>';
    echo '<br>';
    $number = 990;
    $upper = 1000;
    $lower = 500;
    if($number>=$lower && $number<=$upper){
        echo 'value is between 500 & 1000';
    }
    else{
        echo 'value is not between 500 & 1000';
    }
    echo '<br><br>';

    
    //Triple equal:-
    // In triple equal it is consider their datatype.
    echo '<strong>Triple equal:</strong>';
    echo '<br>';
    $numm1 = '20';
    $numm2 = 20;
    if($numm1===$numm2){
        echo 'same.';
    }
    else{
        echo 'not same.';
    }
    echo '<br><br>';
?>

<?php
    //Embedding php inside HTML.
    echo '<strong>Embedding php inside HTML:</strong>';
    echo '<br>';
    $text = 'Mihir';
?>
<input type="text" value="<?php echo $text;?>">