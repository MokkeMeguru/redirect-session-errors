(ns redirect-session-errors.routes.home
  (:require [redirect-session-errors.layout :as layout]
            [clojure.java.io :as io]
            [redirect-session-errors.middleware :as middleware]
            [ring.util.http-response :as response]))

(defn home-page [_]
  (layout/render "home.html"))

(defn home-routes []
  [["/" {:get {:handler    home-page
               :middleware [middleware/wrap-csrf
                            middleware/wrap-formats]}}]
   ["/docs" {:get {:handler (fn [_]
                              (-> (response/ok (-> "docs/docs.md" io/resource slurp))
                                  (response/header "Content-Type" "text/plain; charset=utf-8")))}}]
   ["/door" {:get {:handler (fn [_]
                              (let [send-message (-> (ring.util.response/redirect "/room")
                                                     (assoc-in [:session :identity] :key))]
                                (println "send-message\n"
                                         send-message)
                                send-message))}}]
   ["/room" {:get {:handler (fn [req]
                              (println "receive-message\n"
                                       req)
                              (home-page req))}}]])

