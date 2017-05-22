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
        $post = fopen("php://input", "r");
        $postParams = json_decode(urldecode(stream_get_contents($post)), true);
        fclose($post);
        $todo = [
            'id' => $postParams['id'],
            'text' => $postParams['text'],
            'completed' => false
        ];
        array_push($data, $todo);
        setData($data);
        echo json_encode($todo);
        break;

    case 'PUT':
        $todo = [];
        $put = fopen("php://input", "r");
        $putParams = json_decode(urldecode(stream_get_contents($put)), true);
        fclose($put);
        $data = getData();
        foreach ($data as $index => &$item) {
            if ($item['id'] == $putParams['id']) {
                if (isset($putParams['text'])) {
                    //edit
                    $item['text'] = $putParams['text'];
                } else {
                    //toggle
                    $item['completed'] = !$item['completed'];
                }
                break;
            }
        }
        setData($data);
        echo json_encode($putParams);
        break;

    case 'DELETE':
        $deletedata = fopen("php://input", "r");
        $str = stream_get_contents($deletedata);
        list($indexId) = explode('=', $str);
        fclose($deletedata);

        $data = getData();
        if($indexId) {
            //del one by id
            foreach ($data as $index => $item) {
                if ($item['id'] == $indexId) {
                    unset($data[$index]);
                    break;
                }
            }
            setData($data);

            echo json_encode(['id' => $indexId]);
        } else {
            //del completed
            $deletedIds = [];
            foreach ($data as $index => $item) {
                if ($item['completed'] === true) {
                    $deletedIds[]= $item['id'];
                    unset($data[$index]);
               }
            }
            setData($data);
            echo json_encode(['ids' => $deletedIds]);
        }
        break;
}
