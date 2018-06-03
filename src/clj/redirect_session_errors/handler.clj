(ns redirect-session-errors.handler
  (:require 
            [redirect-session-errors.layout :refer [error-page]]
            [redirect-session-errors.routes.home :refer [home-routes]]
            [redirect-session-errors.routes.services :refer [service-routes]]
            [reitit.ring :as ring]
            [ring.util.http-response :as response]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.webjars :refer [wrap-webjars]]
            [redirect-session-errors.env :refer [defaults]]
            [mount.core :as mount]
            [redirect-session-errors.middleware :as middleware]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))


(mount/defstate app
  :start
  (ring/ring-handler
    (ring/router
      (home-routes)
      {:data {:middleware [middleware/wrap-base]}})
    (ring/routes
      (ring/create-resource-handler {:path "/"})
      (wrap-content-type (wrap-webjars (constantly nil)))
      (ring/create-default-handler
        {:not-found
         (constantly (error-page {:status 404, :title "404 - Page not found"}))
         :method-not-allowed
         (constantly (error-page {:status 405, :title "405 - Not allowed"}))
         :not-acceptable
         (constantly (error-page {:status 406, :title "406 - Not acceptable"}))}))))
