const brightness = require("brightness");
const battery = require("battery-level");
let interval;
let main = () => {
    battery().then(level => {
        if (level > 0.7) { level = 0.7 }
        brightness.set(level).then(() => {
            // Set brightness
            console.log("Set brightness to " + level)
        });
    });
}
exports.start = () => {
    main()
    interval = setInterval(() => {
            main()
        }, 1000 * 60) // 300000 is 5 minutes
}