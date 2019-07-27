// Load Mongoose OS API
load('api_gpio.js');
load('api_mqtt.js');
load('api_sys.js');
load('api_config.js');
load('api_timer.js');
load('api_adc.js');
load('api_aws.js');
load('api_events.js');
load('api_gcp.js');
load('api_shadow.js');


let state = "inactive";
let deviceid = Cfg.get('device.id');

ADC.enable(36);
Timer.set(1000, true, function() {
  
  let date = Timer.now();

  let voltage = ADC.read(35);
  voltage = (voltage * (5.0 / 1023.0));

  //Change State to Active
  if(voltage > 0 && state === "inactive"){
    state = "active";
    let topic = deviceid + '/alarm_state';
    let message = JSON.stringify({
      device_id: deviceid,
      voltage: voltage,
      state: state,
      date: date
    });

    let ok = MQTT.pub(topic, message, 1);
    print('Published:', ok ? 'yes' : 'no', 'topic:', topic, 'message:', message);
  };

  //Change State to Inactive
  if(voltage === 0 && state === "active"){
    state = "inactive"
    let topic = deviceid + '/alarm_state';
    let message = JSON.stringify({
      device_id: deviceid,
      voltage: voltage,
      state: state,
      date: date
    });

    let ok = MQTT.pub(topic, message, 1);
    print('Published:', ok ? 'yes' : 'no', 'topic:', topic, 'message:', message);
  };
  
}, null);
