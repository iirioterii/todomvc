<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');


function getData()
{
    $db = __DIR__ . '/db';
    $recoveredData = file_get_contents($db);
    return unserialize($recoveredData);
}

function setData($data)
{
    $db = __DIR__ . '/db';
    if (empty($data)) {
        file_put_contents($db, "");
    } else {
        $serializedData = serialize($data);
        file_put_contents($db, $serializedData);
    }
}

/**
 * @param array $data
 * @return string
 */
function getJsonEncoded($data = []){
    if(empty($data)){
        $data = getData()?: [];
    }
    return json_encode(array_values($data));
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        echo getJsonEncoded();
        break;

    case 'POST':
        $data = getData() ?: [];
        $todo = [
            'id' => $_POST['id'],
            'text' => $_POST['text'],
            'completed' => false
        ];
        array_push($data, $todo);
        setData($data);
        echo json_encode($todo);
        break;

    case 'PUT':
        $todo = [];
        $putdata = fopen("php://input", "r");
        $str = urldecode(stream_get_contents($putdata));
        fclose($putdata);
        $splittedPut = explode("&", $str);

        array_walk($splittedPut, function (&$value) use (&$todo) {
            $splitted = explode("=", $value);
            $todo[$splitted[0]] = $splitted[1];
        });


        $data = getData();
        foreach ($data as $index => &$item) {
            if ($item['id'] == $todo['id']) {
                if (isset($todo['text'])) {
                    //edit
                    $item['text'] = $todo['text'];
                } else {
                    //toggle
                    $item['completed'] = !$item['completed'];
                }
                break;
            }
        }
        setData($data);
        echo json_encode($todo);
        break;

    case 'DELETE':
        $deletedata = fopen("php://input", "r");
        $str = stream_get_contents($deletedata);
        list($indexId) = explode('=', $str);
        fclose($deletedata);

        $data = getData();

        foreach ($data as $index => $item) {
            if ($item['id'] == $indexId) {
                unset($data[$index]);
                break;
            }
        }
        setData($data);

        echo json_encode(['id'=>$indexId]);
        break;
}
