(ns user
  (:require [redirect-session-errors.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [redirect-session-errors.figwheel :refer [start-fw stop-fw cljs]]
            [redirect-session-errors.core :refer [start-app]]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'redirect-session-errors.core/repl-server))

(defn stop []
  (mount/stop-except #'redirect-session-errors.core/repl-server))

(defn restart []
  (stop)
  (start))


