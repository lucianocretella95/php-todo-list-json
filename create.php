<?php
$fileContent = file_get_contents("todo.json");
$list = json_decode($fileContent, true);






header('Content-Type: application/json');

echo $fileContent;