# redirect-session-errors

generated using Luminus version "2.9.12.60"

FIXME

## Prerequisites

You will need [Leiningen][1] 2.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein run 

## License

Copyright © 2018 FIXME

## PROBLEM
ACCESS localhost:3000/door
session will be deleted

see :session {:identity :key} -> :session {}
```
send-message
 {:status 302, :headers {Location /room}, :body , :session {:identity :key}}
receive-message
 {:reitit.core/match #reitit.core.Match{:template /room, :data {:middleware [#function[redirect-session-errors.middleware/wrap-base]], :get {:handler #function[redirect-session-errors.routes.home/home-routes/fn--31254]}}, :result #reitit.ring.Methods{:get #reitit.ring.Endpoint{:data {:middleware [#function[redirect-session-errors.middleware/wrap-base]], :handler #function[redirect-session-errors.routes.home/home-routes/fn--31254]}, :handler #function[redirect-session-errors.middleware/wrap-internal-error/fn--31221], :path /room, :method :get, :middleware [#reitit.middleware.Middleware{:name nil, :wrap #function[redirect-session-errors.middleware/wrap-base], :spec nil}]}, :head nil, :post nil, :put nil, :delete nil, :connect nil, :options nil, :trace nil, :patch nil}, :path-params {}, :path /room}, :reitit.core/router #object[reitit.core$lookup_router$reify__32013 0x70c92097 reitit.core$lookup_router$reify__32013@70c92097], :cookies {JSESSIONID {:value zGYyHu24MS_SFbI4--gbWB_IVQJqrvyTg1jqqMbV}, 
ring-session {:value 22f2392c-3861-4863-bf8d-639dcee0b9cd}}, :remote-addr 0:0:0:0:0:0:0:1, :params {}, :flash nil, :headers {accept text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8, accept-encoding gzip, deflate, br, accept-language ja,en-US;q=0.9,en;q=0.8,pt;q=0.7,fr;q=0.6, connection keep-alive, cookie JSESSIONID=zGYyHu24MS_SFbI4--gbWB_IVQJqrvyTg1jqqMbV; ring-session=22f2392c-3861-4863-bf8d-639dcee0b9cd, host localhost:3000, upgrade-insecure-requests 1, user-agent Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36}, :async-channel #object[org.httpkit.server.AsyncChannel 0x411eee1b /0:0:0:0:0:0:0:1:3000<->/0:0:0:0:0:0:0:1:38828], :server-port 3000, :content-length 0, :form-params {}, :websocket? false, :session/key nil, :query-params {}, :content-type nil, :character-encoding utf8, :uri /room, :server-name localhost, :query-string nil, :path-params {}, :body nil, :multipart-params {}, :scheme :http, :request-method :get
, :session {}}
```
