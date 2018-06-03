(ns redirect-session-errors.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [redirect-session-errors.core-test]))

(doo-tests 'redirect-session-errors.core-test)

