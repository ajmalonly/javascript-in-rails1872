# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "bootstrap", to: "bootstrap.min.js", preload: true
pin "@popperjs/core", to: "popper.js", preload: true
pin "flatpickr" # @4.6.13
pin "chess" # @1.2.2
pin "crypto" # @2.1.0
pin "anime" # @0.1.2
pin "ajv" # @6.12.6
pin "ajv/lib/refs/json-schema-draft-06.json", to: "ajv--lib--refs--json-schema-draft-06.json.js" # @6.12.6
pin "asn1" # @0.2.6
pin "assert" # @2.1.0
pin "assert-plus" # @1.0.0
pin "aws-sign2" # @0.7.0
pin "aws4" # @1.13.2
pin "bcrypt-pbkdf" # @1.0.2
pin "buffer" # @2.1.0
pin "caseless" # @0.12.0
pin "combined-stream" # @1.0.8
pin "core-util-is" # @1.0.2
pin "delayed-stream" # @1.0.0
pin "ecc-jsbn" # @0.1.2
pin "ecc-jsbn/lib/ec", to: "ecc-jsbn--lib--ec.js" # @0.1.2
pin "events" # @2.1.0
pin "extend" # @3.0.2
pin "extsprintf" # @1.3.0
pin "fast-deep-equal" # @3.1.3
pin "fast-json-stable-stringify" # @2.1.0
pin "forever-agent" # @0.6.1
pin "form-data" # @2.3.3
pin "fs" # @2.1.0
pin "har-schema" # @2.0.0
pin "har-validator" # @5.1.5
pin "http" # @2.1.0
pin "http-signature" # @1.2.0
pin "https" # @2.1.0
pin "is-typedarray" # @1.0.0
pin "isstream" # @0.1.2
pin "jsbn" # @0.1.1
pin "json-schema" # @0.4.0
pin "json-schema-traverse" # @0.4.1
pin "json-stringify-safe" # @5.0.1
pin "jsprim" # @1.4.2
pin "mime-db" # @1.52.0
pin "mime-types" # @2.1.35
pin "net" # @2.1.0
pin "oauth-sign" # @0.9.0
pin "path" # @2.1.0
pin "performance-now" # @2.1.0
pin "process" # @2.1.0
pin "psl" # @1.13.0
pin "punycode" # @2.3.1
pin "qs" # @6.5.3
pin "querystring" # @2.1.0
pin "request" # @2.88.2
pin "safe-buffer" # @5.2.1
pin "safer-buffer" # @2.1.2
pin "sax" # @1.4.1
pin "sshpk" # @1.18.0
pin "stream" # @2.1.0
pin "string_decoder" # @2.1.0
pin "timers" # @2.1.0
pin "tls" # @2.1.0
pin "tough-cookie" # @2.5.0
pin "tunnel-agent" # @0.6.0
pin "tweetnacl" # @0.14.5
pin "uri-js" # @4.4.1
pin "url" # @2.1.0
pin "util" # @2.1.0
pin "uuid/lib/rng.js", to: "uuid--lib--rng.js.js" # @3.4.0
pin "uuid/v4", to: "uuid--v4.js" # @3.4.0
pin "verror" # @1.10.0
pin "xml2js" # @0.4.23
pin "xmlbuilder" # @11.0.1
pin "zlib" # @2.1.0
