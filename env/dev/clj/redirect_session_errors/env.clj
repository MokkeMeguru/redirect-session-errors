(ns redirect-session-errors.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [redirect-session-errors.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[redirect-session-errors started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[redirect-session-errors has shut down successfully]=-"))
   :middleware wrap-dev})
