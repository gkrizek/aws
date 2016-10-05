Tinytest.add('aws', function (test) {
  var isDefined = false;
  try {
    AWS;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "AWS is not defined");
  test.isTrue(Package['gkrizek:aws'].AWS, "Package gkrizek:aws is not defined");

  var s3 = new AWS.S3();
  test.isTrue(s3);
  test.isTrue(s3.getObjectSync);
  test.isTrue(s3.uploadSync);
});