/*global localStorage*/
/*global localforage*/

(function(global) {

    var optionsDefault = {
        //...
    };

    function KFSClient(options) {
        var options0 = JSON.parse(JSON.stringify(optionsDefault));
        if (typeof options === "object") {
            Object.keys(options).forEach(function(key) {
                options0[key] = options[key];
            });
        }
        else if (typeof options === "string") {
            options0['url'] = options;
        }
        options = options0;

        if (typeof options['localforage'] === "object") {
            var lf = localforage.createInstance(options['localforage']);
            //...
        }
        else /*localStorage*/ {
            //TODO:...
        }
    }

    KFSClient.prototype.set = function set(key, value, callback) {
        // body...
    };

    KFSClient.prototype.get = function get(key, callback) {
        // body...
    };

    KFSClient.prototype.remove = function remove(key, value, callback) {
        // body...
    };

    KFSClient.prototype.clear = function clear(key, value, callback) {
        // body...
    };

    global["kfsClient"] = new KFSClient( /**/ );

})(this);