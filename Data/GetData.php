<?php

$data = "";
$id = $_GET['id'] ?? null;




if ($id) {
    $jsdata = json_decode(file_get_contents("../movie.json"), true);
    echo json_encode($jsdata['scienceFictionInterface'][$id - 1]);
} else {
    $data = json_decode(file_get_contents("./movie.json"), true);
}