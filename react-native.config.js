const path = require("path");

module.exports = {
  dependency: {
    platforms: {
      ios: {
        podspecPath: path.join(__dirname, "react-native-config.podspec")
      },
      android: {
        packageImportPath:
          "import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;",
        packageInstance: "new ReactNativeConfigPackage()"
      }
    }
  }
};
