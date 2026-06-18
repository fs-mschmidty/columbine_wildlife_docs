# Song Meter Mini Bat Pairing & Configuration Settings

## Pairing 
1.  Open Song Meter Configuration app and turn on device
    - MiniBat device needs to have charged batteries
2. Device name will pop up on app under "Recorders"
3. Hold down PAIR button on device
4. Select Pair on the app to the right of the device name
5. Press Configure on app to the device settings

## Bat Settings

For bat recording, the acoustic microphone attachment is not required.

**Ultrasonic Settings**

- Recording format: Full Spectrum

- Full spectrum sample rate: Keep the 384 kHz default option. 
    - The other options are 256 kHz and 500 kHz, both of which aren't sufficient / necessary for SJNF NABat monitoring. 
- Non-triggered recording: keep this turned off so that the device only records when it has been triggered.
    - If this is turned on, the device will be continuously recording without a trigger, taking up unnecessary space.
- Minimum trigger frequency: 16 kHz is the recommended level for filtering out background noise.
    - Anything below the minimum trigger frequency will not trigger recordings. Generally speaking, NABats trigger at a higher frequency than 16 kHz. Therefore, we can eliminate extra background noise with a 16 kHz minimum trigger level.
- Maximum recording length: 5 seconds
    - A new file will be created if a bat is still present after 5 seconds.
- Trigger window: 3 seconds
    - Recorder stops saving data after a bat finishes its pass.
- Save noise files: Keep this turned off.
    - If this is turned on, background noise files won't be deleted, taking up unnecessary sapce.
- Left channel gain: 12 dB
    - Options are 0, 6 12 dB. We will stick with the default option 12 dB.

**Acoustic Settings**

These settings can only be adjusted when the acoustic microphone is attached, which will will not use for Bat monitoring. 

**Location & Time Zone**

Reset location the field when deploying. Colorado is in UTC-06:00 time zone.

**Delay Start**

A scheduled start date can be preprogrammed, but instead we will leave this field blank and configure at deployment.

**Send Bluetooth Beacons** 

Always keep this on.

**Schedule Editor:** Custom Schedule

Bat recordings need to start a minimum of 30 minutes before sunrise and 30 minutes after sunset.

- Mode: Ultrasonic

- Start time: Sunrise - 00:30

- Duty Cycle: Alwyas
    - Cycle is also an option, but since our recordings are triggered, we want to keep this always on. 

- End time: Sunset + 00:30

## Bird Settings

For bird recorings, the acoustic microphone needs to be attached and plugged in.

**Ultrasonic Settings:** Leave default

**Acoustic Settings:** Leave default

**Location & Time Zone:** Reset location in the field whne deploying. Colorado is in UTC-06:00 time zone.

**Delay Start:** Off

**Send Bluetooth Beacons** On

**Schedule Editor:** Custom Schedule
- Mode: Acoustic
- Start time: 1 hour 30 minutes before sunrise
- Duty Cycle: Cycle
    - On Duration: 30 minutes. Off Duration: 30 minutes.
- End Time: 1 hour 30 minutes after sunset. 