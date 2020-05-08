// https://github.com/mozilla/ssl-config-generator/blob/master/src/static/guidelines/5.0.json
export default {
    modern: {
        name: 'Mozilla Modern',
        protocols: [
            'TLSv1.3',
        ],
        ciphers: [
            // 'TLS_AES_256_GCM_SHA384',
            // 'TLS_AES_128_GCM_SHA256',
            // 'TLS_CHACHA20_POLY1305_SHA256',
        ],
        server_preferred_order: false,
        dh_param_size: false,
        oldest_clients: ['Firefox 63', 'Android 10.0', 'Chrome 70', 'Edge 75', 'Java 11', 'OpenSSL 1.1.1', 'Opera 57', 'Safari 12.1'],
    },
    intermediate: {
        name: 'Mozilla Intermediate',
        protocols: [
            'TLSv1.2',
            'TLSv1.3',
        ],
        ciphers: [
            // 'TLS_AES_256_GCM_SHA384',
            // 'TLS_AES_128_GCM_SHA256',
            // 'TLS_CHACHA20_POLY1305_SHA256',
            'ECDHE-ECDSA-AES128-GCM-SHA256',
            'ECDHE-RSA-AES128-GCM-SHA256',
            'ECDHE-ECDSA-AES256-GCM-SHA384',
            'ECDHE-RSA-AES256-GCM-SHA384',
            'ECDHE-ECDSA-CHACHA20-POLY1305',
            'ECDHE-RSA-CHACHA20-POLY1305',
            'DHE-RSA-AES128-GCM-SHA256',
            'DHE-RSA-AES256-GCM-SHA384',
        ],
        server_preferred_order: false,
        dh_param_size: 2048,
        oldest_clients: ['Firefox 27', 'Android 4.4.2', 'Chrome 31', 'Edge', 'IE 11 on Windows 7', 'Java 8u31', 'OpenSSL 1.0.1', 'Opera 20', 'Safari 9'],
    },
    old: {
        name: 'Mozilla Old',
        protocols: [
            'TLSv1',
            'TLSv1.1',
            'TLSv1.2',
            'TLSv1.3',
        ],
        ciphers: [
            // 'TLS_AES_256_GCM_SHA384',
            // 'TLS_AES_128_GCM_SHA256',
            // 'TLS_CHACHA20_POLY1305_SHA256',
            'ECDHE-ECDSA-AES128-GCM-SHA256',
            'ECDHE-RSA-AES128-GCM-SHA256',
            'ECDHE-ECDSA-AES256-GCM-SHA384',
            'ECDHE-RSA-AES256-GCM-SHA384',
            'ECDHE-ECDSA-CHACHA20-POLY1305',
            'ECDHE-RSA-CHACHA20-POLY1305',
            'DHE-RSA-AES128-GCM-SHA256',
            'DHE-RSA-AES256-GCM-SHA384',
            'DHE-RSA-CHACHA20-POLY1305',
            'ECDHE-ECDSA-AES128-SHA256',
            'ECDHE-RSA-AES128-SHA256',
            'ECDHE-ECDSA-AES128-SHA',
            'ECDHE-RSA-AES128-SHA',
            'ECDHE-ECDSA-AES256-SHA384',
            'ECDHE-RSA-AES256-SHA384',
            'ECDHE-ECDSA-AES256-SHA',
            'ECDHE-RSA-AES256-SHA',
            'DHE-RSA-AES128-SHA256',
            'DHE-RSA-AES256-SHA256',
            'AES128-GCM-SHA256',
            'AES256-GCM-SHA384',
            'AES128-SHA256',
            'AES256-SHA256',
            'AES128-SHA',
            'AES256-SHA',
            'DES-CBC3-SHA',
        ],
        server_preferred_order: true,
        dh_param_size: 1024,
        oldest_clients: ['Firefox 1', 'Android 2.3', 'Chrome 1', 'Edge 12', 'IE8 on Windows XP', 'Java 6', 'OpenSSL 0.9.8', 'Opera 5', 'Safari 1'],
    },
};
