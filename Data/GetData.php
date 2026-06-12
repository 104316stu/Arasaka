<?php

$id = $_GET['id'] ?? null;
$getAll = $_GET["all"] ?? false;

if ($id) {
    $db = new SQLite3('../Data/movie.sqlite');
    // prepared query voor injections
    // specifiek id pakken van de database
    $preparedQuery = $db->prepare(
        'SELECT * FROM entities WHERE id = :id'
    );

    $preparedQuery->bindValue(
        ':id',
        (int)$id,
        SQLITE3_INTEGER
    );

    $queryResult = $preparedQuery->execute();

    $entityData = $queryResult->fetchArray(SQLITE3_ASSOC);

    echo json_encode($entityData);
} else if ($getAll) {
    $db = new SQLite3('../Data/movie.sqlite');
    // alles pakken sorteerd door id
    $result = $db->query('SELECT * FROM entities ORDER BY id');

    $rows = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $rows[] = $row;
    }

    echo json_encode(['scienceFictionInterface' => $rows]);

} else {
    $db = new SQLite3('./Data/movie.sqlite');
    $result = $db->query('SELECT * FROM entities ORDER BY id');

    $data = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $data[] = $row;
    }
}