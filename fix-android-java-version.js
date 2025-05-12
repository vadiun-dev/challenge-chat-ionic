const fs = require("fs");
const path = require("path");

const files = [
  "android/app/capacitor.build.gradle",
  "node_modules/@capacitor/android/capacitor/build.gradle",
  "node_modules/@capacitor/core/scripts/native-run.js",
];

files.forEach((filePath) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");

    // Replace Java version 21 with 17
    content = content.replace(
      /sourceCompatibility JavaVersion\.VERSION_21/g,
      "sourceCompatibility JavaVersion.VERSION_17"
    );
    content = content.replace(
      /targetCompatibility JavaVersion\.VERSION_21/g,
      "targetCompatibility JavaVersion.VERSION_17"
    );

    // For script files that might reference Java versions
    content = content.replace(
      /JavaVersion\.VERSION_21/g,
      "JavaVersion.VERSION_17"
    );

    fs.writeFileSync(filePath, content);
    console.log(`Updated Java version in ${filePath}`);
  } else {
    console.log(`File does not exist: ${filePath}`);
  }
});

// Now let's try to run a more comprehensive search for files with Java 21 references
const searchDirectories = ["node_modules/@capacitor", "android"];

function searchAndFixJavaVersionInDir(dir) {
  try {
    if (!fs.existsSync(dir)) {
      console.log(`Directory doesn't exist: ${dir}`);
      return;
    }

    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        searchAndFixJavaVersionInDir(fullPath);
      } else if (
        stats.isFile() &&
        (fullPath.endsWith(".gradle") ||
          fullPath.endsWith(".java") ||
          fullPath.endsWith(".js"))
      ) {
        try {
          const content = fs.readFileSync(fullPath, "utf8");

          // Only process files that actually contain Java version references
          if (content.includes("VERSION_21")) {
            const updatedContent = content
              .replace(
                /sourceCompatibility JavaVersion\.VERSION_21/g,
                "sourceCompatibility JavaVersion.VERSION_17"
              )
              .replace(
                /targetCompatibility JavaVersion\.VERSION_21/g,
                "targetCompatibility JavaVersion.VERSION_17"
              )
              .replace(/JavaVersion\.VERSION_21/g, "JavaVersion.VERSION_17");

            if (content !== updatedContent) {
              fs.writeFileSync(fullPath, updatedContent);
              console.log(`Updated Java version in ${fullPath}`);
            }
          }
        } catch (e) {
          console.error(`Error processing file ${fullPath}: ${e.message}`);
        }
      }
    }
  } catch (e) {
    console.error(`Error searching directory ${dir}: ${e.message}`);
  }
}

// Run the recursive search for Java version references
searchDirectories.forEach((dir) => {
  searchAndFixJavaVersionInDir(dir);
});

console.log("Java version fix completed");
