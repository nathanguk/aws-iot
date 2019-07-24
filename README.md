# aws-iot
AWS IoT - ESP32 Sensor

In the AWS console, update the device shadow with the new firmware url.

{
  "desired": {
    "ota": {
      "url": "https://raw.githubusercontent.com/nathanguk/aws-iot/master/fw.zip"
    }
  },
  "reported": {
  }
}
