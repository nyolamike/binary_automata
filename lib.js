var bam = {
    rules:{
        r01: "010",
        r10: "101",
        r11: "11",
        r01: "00",
        r1: "01",
        r0: "1"
    },
    size: 2,
    seed: "101",
    nextDay:1,
    states:{},
    spanNextDay:function(){
        var prevDay = this.nextDay - 1;
        //if the previous day has no state then we seed that day
        if(this.states.hasOwnProperty("d"+prevDay) == false){
            this.states["d"+prevDay] = this.seed;
        }
        var prevState = this.states["d"+prevDay];
        var bits = prevState.split("");
        var ruleQuery = "";
        var dayState = "";
        for(var i=0;i<bits.length;i++){
            if(ruleQuery.length < this.size){
                ruleQuery = ruleQuery + bits[i];
            }

            if(ruleQuery.length == this.size){
                //execute
                var ruleValue = this.rules["r"+ruleQuery];
                dayState = dayState + ruleValue;
                ruleQuery = ""; //reset the query for the next day
            }
        }
        if(ruleQuery.length != 0){ //we have some left overs
            var ruleValue = this.rules["r"+ruleQuery];
            dayState = dayState + ruleValue;
            ruleQuery = "";
        }
        this.states["d"+this.nextDay] = dayState;
        this.nextDay = this.nextDay + 1;
    },
    live(daysToLive){
        for(var i = 0; i < daysToLive; i++){
            this.spanNextDay();
            
        }
    },
    reset: function(){
        this.nextDay = 1;
        this.states = {};
    }
};










