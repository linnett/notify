;(function ( window, document, undefined ) {

    this.Notify = function() {
        // Define option defaults
        this.defaults = {
            notificationTitle: "My Title",
            notificationOptions: {
                icon: 'http://www.arsenal.com/assets/images/structure/arsenal-crest.png',
                body: 'My notification body'
            },
            useAlertFallback: true
        }

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = _extend(this.defaults, arguments[0]);
        }
    }

    Notify.prototype = {

      	init: function () {
         // Notification fallback
          if (typeof Notification === 'undefined') {
              if (this.options.useAlertFallback) {
                  alert(this.options.notificationOptions.body);
              }
              return;
          }

          // Grant permissions for Notification
          if (Notification.permission !== "granted") {
              Notification.requestPermission();
          }

          // Create notification
          var notification = new Notification(this.options.notificationTitle, this.options.notificationOptions); 
        }
    }

    function _extend(out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;

            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
            }
        }

        return out;
    }
})( window, document );
