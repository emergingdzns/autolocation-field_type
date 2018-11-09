<?php

return [
    'google_maps_api_key' => [
        'type'  => 'anomaly.field_type.text'
    ],
    'ask_for_user_location' => [
        'type'  => 'anomaly.field_type.boolean',
        "config" => [
            "default_value" => true,
        ]
    ]
];
