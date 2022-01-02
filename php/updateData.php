<?php
    if(isset($_POST['title'],$_POST['fileName'])){

        $title = $_POST['title'];
        $code = $_POST['code'];
        $text = $_POST['text'];
        $fileName = $_POST['fileName'];

        $file = file_get_contents('../'.$fileName.'.json', true);
        $data = json_decode($file,true);
        print_r($data);

        $arr['title'] = $title;
        $arr['text'] = $text;
        $arr['code'] = $code;

        array_push( $data['content'], $arr);
        $jsonData = json_encode($data);
        file_put_contents('../'.$fileName.'.json', $jsonData);
        print_r($data);
    }
?>