const multiLib = require("libs/multi-lib");
const frijoles = multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"burner",[
    {
        input: {
            items: ["es-sulphur/1"],
            power: 4,
        },
        output: {
            items: ["es-sulphur-dioxide/10"]
        },
        craftTime: 120,
    },
    {
        input: {
            items: ["lead/1"],
            power: 4,
        },
        output: {
            items: ["es-sulphur-dioxide/5"]
        },
        craftTime: 200,
    },
    {
        input: {
            items: ["copper/1"],
            power: 4,
        },
        output: {
            items: ["es-sulphur-dioxide/4"]
        },
        craftTime: 160,
    }
]);

