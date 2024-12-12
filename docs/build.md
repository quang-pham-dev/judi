# Build instructions

## How to Build for Publishing

- iOS

  - Local machine

    1.  Add `iPhone Distribution Certificate` to `Keychain Access`
    2.  Run `npx pod-install`
    3.  Open `ios/judi.xcworkspace` with Xcode
    4.  Import App Store provisioning profile to `Signing & Capabilities` tab of `judi` target
    5.  Choose `judi > Any iOS device` as target for running/building
    6.  Select `Product -> Archive` from menu
    7.  On Organizer window after building process, select `Distribute App -> App Store Connect`, then

        - Select `Upload` for directly upload to App Store Connect -> Next
        - Select `Export` to generate .ipa file

    8.  Select App Store provisioning profile -> Next -> (Export)

  - AppCenter
    1.  Go to your organization
    2.  Choose `judi iOS app`
    3.  Select `Build` on menu
    4.  Select `develop` branch or select `Clone from existing configuration` on another branch and choose `develop` branch
    5.  Update configuration if needed
    6.  Choose `Build now`

- Android
  - Local machine
    1.  Open `android` folder with Android Studio
    2.  Select `Build -> Generated Signed Bundle/APK...` from menu
    3.  Select `Android App Bundle -> Next`
    4.  Choose keystore file and fill alias + password
    5.  Choose `Next`
    6.  Select `prodRelease -> Finish`
  - AppCenter
    1.  Go to your organization
    2.  Choose `judi Android` app
    3.  Select `Build` on menu
    4.  Select `develop` branch or select `Clone from existing configuration` on another branch and choose `develop` branch
    5.  Update configuration if needed
    6.  Choose `Build now`

## How to Publish

- iOS
  - Local machine: If `Export` is selected from build process, download `Transporter` app, open exported `.ipa` file and deliver to App Store Connect
  - AppCenter: build is uploaded automatically to App Store Connect
- Android
  - Local machine
    1. Create new release on Google Play Console
    2. Upload exported bundle (.aab) after building process and write changelog
    3. Enroll release
  - AppCenter:
    1. Download bundle (.aab) after building process
    2. Create new release on Google Play Console
    3. Upload downloaded bundle and write changelog
    4. Enroll release
