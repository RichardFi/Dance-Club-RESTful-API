const AccessControl = require('accesscontrol')
const ac = new AccessControl()

exports.roles = (function () {
  ac.grant('basic')
    .readOwn('user')
    .updateOwn('user')
    .updateOwn('class')
    .deleteOwn('class')
  // .readAny("course")
  // .readAny("class")
  // .readAny("teacher")

  // ac.grant("member")
  //    .extend("basic")
  //    .updateOwn("class")
  //    .deleteOwn('class')

  ac.grant('admin')
    .extend('basic')
    .readAny('user')
    .updateAny('user')
    .deleteAny('user')
    .createAny('course')
    .updateAny('course')
    .deleteAny('course')
    .createAny('class')
    .updateAny('class')
    .deleteAny('class')
    .createAny('teacher')
    .updateAny('teacher')
    .deleteAny('teacher')

  return ac
})()
