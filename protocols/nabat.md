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
