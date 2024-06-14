<?php

// $list = [
// 'spesa',
// 'meccanico',
// 'lavanderia',
// 'barbiere',
// 'andare in banca'
// ];
// header('Content-Type: application/json');

// echo json_encode($list);

$fileContent = file_get_contents("list.json");

header('Content-Type: application/json');

echo $fileContent;