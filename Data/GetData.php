<?php

$data = "";
$id = $_GET['id'] ?? null;
$getAll = $_GET["all"] ?? false;



if ($id) {
    $jsdata = json_decode(file_get_contents("../movie.json"), true);
    echo json_encode($jsdata['scienceFictionInterface'][$id - 1]);
} else if ($getAll) {
    echo file_get_contents("../movie.json");
} else {
    $data = json_decode(file_get_contents("./movie.json"), true);
}