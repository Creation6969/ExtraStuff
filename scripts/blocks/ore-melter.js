const multiLib = require("libs/multi-lib");
const multi = multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"ore-melter",[
    {
        input: {
            items: ["coal/5","es-sulphur/1"],
            power: 1,
        },
        output: {
            liquids: ["es-molten-sulphur/18"]
        },
        craftTime: 120,
    },
    {
        input: {
            items: ["coal/5", "es-refined-cobalt/1"],
            power: 1,
        },
        output: {
            liquids: ["es-molten-cobalt/18"]
        },
        craftTime: 120,
    }
],{
    load(){
        this.super$load()
        this.liquidRegion = Core.atlas.find("es-ore-melter-liquid")
    }
},
/*this is Object constructor. This way is much better than literal way{a:123}
you can replace this with {} if you don't want to modify entity*/
function Extra(){
    this.draw = function(){
        this.super$draw()
        Drawf.liquid(multi.liquidRegion, this.x, this.y, this.liquids.total(), Liquids.oil.color)
    }
});

module.exports = {
     multi: multi
}
