## Installation
```
npm i
```

## Execution
- To run a script:
```
npm run android
npm run ios
```
## Reinstall
- To reinstall dependencies run a script:
```
npm run clean mac
npm run clean windows
```
## Report
- To open HTML report run a script:
```
npm run report
```
## Environment Variables Setup
## macOS
- Open .zhrc located in user folder, hidden. Open it and add these lines:
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_321.jdk/Contents/Home
export ANDROID_HOME=/Users/mekanhanov/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/emulator
export ANDROID_SDK_ROOT=/Users/mekanhanov/Library/Android/sdk
- source: https://stackoverflow.com/questions/33590300/recommended-zshrc-settings-for-android-sdk
- If .zhrc file is empty check .bash_profile in user folder too. 
- Repeat the process above
- 2015 and up macOS uses .zhrc


## Skeleton project src

```
├── features
│   ├── 
├── page-objects
│   ├── 
├── shared-objects
│   ├── 
└── step-definitions
    ├──
```
