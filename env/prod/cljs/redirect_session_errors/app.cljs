(ns redirect-session-errors.app
  (:require [redirect-session-errors.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
