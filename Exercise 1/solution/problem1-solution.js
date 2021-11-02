class TV{
    constructor (brand, model) {
        this.brand = brand;
        this.model = model;
        this.volume = 50;
        this.channel = 1;
        this.state = "off";
    }

    Turn_on(){
        if(this.state != "on"){
            this.state = "on";
        }
        else{
            console.log("Tv is already on");
        }
    }
    Turn_of(){
        if (this.state != "off"){
            this.state = "off";
        }
        else{
            console.log("Tv is already off");
        }
    }
    check_state(){
        if (this.state == "on"){
            return true;
        }
        else{
            return false;
        }
    }
    increase_volume(amount){
        if(this.check_state()){
            this.volume += amount;
            if (this.volume > 100){
                this.volume = 100;
            }
        }
        else {
            console.log("TV is off!");
        }
        
    }
    decrease_volume(amount){
        if(this.check_state()){
            this.volume -= amount;
            if (this.volume < 0){
                this.volume = 0;
            }
        }
        else{
            console.log("TV is off!");
        }
    }

    set_channel(number){
        if(this.check_state()){
            if (number <= 50 || number >= 0){
                this.channel = number;
            }
            else{
                console.log("channel not avaliable, please enter valid number");
            }
        }
        else{
            console.log("TV is off!");
        }
        
    }
    status(){
        return this.brand + " " + this.model + " " + " channel: " + this.channel + " volume: " +  this.volume;
    }
}

var tv1 = new TV("Samsung", "QLED 4K Q95T");
console.log("status: " + tv1.status());
tv1.Turn_on();
tv1.increase_volume(40);
console.log(tv1.status());
tv1.decrease_volume(400);
console.log(tv1.status());
tv1.increase_volume(80);
console.log(tv1.status());
tv1.increase_volume(300);
console.log(tv1.status());
tv1.decrease_volume(8);
console.log(tv1.status());
tv1.set_channel(25);
console.log(tv1.status());
tv1.set_channel(51);
console.log(tv1.status());
tv1.set_channel(0);
console.log(tv1.status());
tv1.set_channel(30);
console.log(tv1.status());