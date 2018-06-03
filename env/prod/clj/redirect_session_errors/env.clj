(ns redirect-session-errors.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[redirect-session-errors started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[redirect-session-errors has shut down successfully]=-"))
   :middleware identity})
