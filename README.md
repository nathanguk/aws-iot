# aws-iot
AWS IoT - ESP32 Sensor

In the AWS console, update the device shadow with the new firmware url.

    {
      "desired": {
        "ota": {
          "url": "https://github.com/nathanguk/aws-iot/blob/master/alarm/build/fw_1_0_1.zip?raw=true"
        }
      },
      "reported": {
      }
    }
