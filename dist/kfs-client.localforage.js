/*global localforage*/
//*global localStorage*/

(function(global) {

    var optionsDefault = {
        url: '/kfs/sync',
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
        
        var prePromise=null;
        var driver,_kfs_;
        
        if (options['driver'] === "localforage") {
            var lf = localforage.createInstance(options['localforage'] || {});
            driver = {
                set: lf.setItem,
                get: lf.getItem,
                remove: lf.removeItem,
                clear: lf.clear
            };
        }
        else /*if (options['driver'] === "localSorage")*/ {
            //TODO: Implement driver for localStorage ...
        }

        this.storage = {
            //
        };
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

    KFSClient.prototype.sync = function sync(url, callback) {
        if (typeof url === "string") {
            url = url || this.options.url;
        }
        else /*if (typeof url === "function")*/ {
            callback = url;
            url = this.options.url;
        }
        (typeof callback !== "function") && (callback = undefined);

        // body...
    };

    global["kfsClient"] = new KFSClient( /**/ );

    function callbackizePromise(promise, callback) {
        if (typeof callback === "function") {
            return promise.then(function(data) {
                callback(null, data);
            }, function(err) {
                callback(err);
            });
        }
        else {
            return promise;
        }
    }

})(this);