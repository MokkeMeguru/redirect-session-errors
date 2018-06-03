(ns redirect-session-errors.core-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [pjstadig.humane-test-output]
            [reagent.core :as reagent :refer [atom]]
            [redirect-session-errors.core :as rc]))

(deftest test-home
  (is (= true true)))

