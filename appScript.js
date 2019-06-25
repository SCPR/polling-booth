function doPost(e){
  return handleResponse(e);
}

var SHEET_NAME = "Sheet1";

var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service

function handleResponse(e) {
  var lock = LockService.getPublicLock();
  lock.waitLock(30000);  // wait 30 seconds before conceding defeat.

  try {
    var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
    var sheet = doc.getSheetByName(SHEET_NAME);
    var cellLocation = e.parameter.column + e.parameter.row;
    var cell = sheet.getRange(cellLocation);
    var value = cell.getValue() || 0;
    cell.setValue(value + 1);

    return ContentService
      .createTextOutput(JSON.stringify({"result":"success", "values": e}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(e){
    // if error return this
    return ContentService
      .createTextOutput(JSON.stringify({"result":"error", "error": e}))
      .setMimeType(ContentService.MimeType.JSON);
  } finally { //release lock
    lock.releaseLock();
  }
}

function setup() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  SCRIPT_PROP.setProperty("key", doc.getId());
}