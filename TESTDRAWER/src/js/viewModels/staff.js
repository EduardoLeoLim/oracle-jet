/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */

define(["../accUtils"], function (accUtils) {
  "use strict";
  function StaffViewModel() {
    this.connected = () => {
      accUtils.announce("Staff page loaded.");
      document.title = "Staff";
    };

    this.disconnected = () => {
      // Implement if needed
    };

    this.transitionCompleted = () => {
      // Implement if needed
    };
  }
  return StaffViewModel;
});
