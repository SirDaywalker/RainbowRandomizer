// function go(){
//     //splitting nach ","
//     const shuffleArray = shuffle().split(",")

//     //zuweisung
//     let operator = shuffleArray[0]
//     const primary = shuffleArray[1]
//     const Grip = shuffleArray[2]
//     const Scope = shuffleArray[3]
//     const Barrel = shuffleArray[4]
//     const UnderBarrel = shuffleArray[5]
//     const secondary = shuffleArray[6]
//     const SecondaryGrip = shuffleArray[7]
//     const SecondaryScope = shuffleArray[8]
//     const SecondaryBarrel = shuffleArray[9]
//     const SecondaryUnderBarrel = shuffleArray[10]
//     const gadget = shuffleArray[11]
//     const taktik = shuffleArray[12]

//     //images
//     document.getElementById("opPic").src="./images/Ops/" + operator.toLowerCase() + ".png";
//     document.getElementById("icon").src="./images/icons/" + operator.toLowerCase() + ".png";

//     //anzeigen
//     writeById("OpName", operator)
//     writeById("primary", primary)
//     writeById("Grip", Grip)
//     writeById("Scope", Scope)
//     writeById("Barrel", Barrel)
//     writeById("UnderBarrel", UnderBarrel)
//     writeById("secondary", secondary)
//     writeById("SecondaryGrip", SecondaryGrip)
//     writeById("SecondaryScope", SecondaryScope)
//     writeById("SecondaryBarrel", SecondaryBarrel)
//     writeById("SecondaryUnderBarrel", SecondaryUnderBarrel)
//     writeById("gadget", gadget)
//     writeById("TaktikH", taktik)
// }
// //-------------------------------------e-n-d---o-f---g-o---------------------------------//


// //-------------------------------------d-i-s-a-b-l-e-r---------------------------------------//
// function getOps(operators) {
//     let ops = document.getElementsByClassName('filterImgDis')

//     for (let i = 0; i < ops.length; i++) {
//         for (let j = 0; j < operators.length; j++) {
//             if (ops[i].id === operators[j]){
//                 let x = j
//                 if(j === 0){x = 1}
//                 operators.splice(j, x)
//                 break
//             }
//         }
//     }
//     return operators
// }
// //-------------------------------------e-n-d---o-f---d-i-s-a-b-l-e-r-------------------------//


// //-------------------------------------s-e-t-t-e-r---------------------------------------//
// function writeById(id, message) {return document.getElementById(id).innerHTML = message;}
// //-------------------------------------e-n-d---o-f---s-e-t-t-e-r---------------------------//


// //-------------------------------------g-e-t-e-r-------------------------------------------//
// function getValue(){
//     if (document.getElementById('atk').checked) {
//         return 1
//     }
//     else if (document.getElementById('def').checked) {
//         return 2
//     }
//     else if (document.getElementById('both').checked) {
//         return 0
//     }
// }
// //-------------------------------------e-n-d---o-f---g-e-t-e-r-----------------------------//


// //-------------------------------------r-a-n-d-o-m-----------------------------------------//
// function random(max){return Math.floor(Math.random() * max)}
// //-------------------------------------e-n-d---o-f---r-a-n-d-o-m---------------------------//


// //-------------------------------------s-h-u-f-f-l-e---------------------------------------//
// function shuffle() {
//     // Operator
//     let AttackerArray = ["AtkRecruit", "Sledge", "Thatcher","Ash", "Thermite", "Twitch", "Montagne", "Glaz", "Fuze", "Blitz", "IQ",
//         "Buck","Blackbeard", "Capitão", "Hibana", "Jackal", "Ying", "Zofia", "Dokkaebi", "Lion", "Finka", "Maverick",
//         "Nomad", "Gridlock", "Nøkk", "Amaru", "Kali", "Iana", "Ace", "Zero", "Flores", "Osa", "Sens"]

//     AttackerArray = getOps(AttackerArray)

//     let DefenderArray = ["DefRecruit", "Smoke", "Mute", "Castle", "Pulse", "Doc", "Rook", "Kapkan", "Tachanka", "Jäger", "Bandit",
//         "Frost", "Valkyrie", "Caveira", "Echo", "Mira", "Lesion", "Ela", "Vigil", "Maestro", "Alibi", "Clash", "Kaid",
//         "Mozzie", "Warden", "Goyo", "Wamai", "Oryx", "Melusi", "Aruni", "Thunderbird", "Thorn", "Azami"]

//     DefenderArray = getOps(DefenderArray)


//     //attachments
//     let GripArray = ["no Grip", "vertical Grip", "angled Grip"]
//     let ScopeArray = ["no Scope", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C"]
//     let SecondaryScopeArray = ["no Scope", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C"]
//     let Scopes2_5 = ["Scope 2.5x A", "Scope 2.5x B"]
//     let Scopes3 = ["Scope 3x"]
//     let Scopes2 = ["Scope 2x"]
//     let Scopes1_5 =["Scope 1.5x"]
//     let ScopeReflexD = ["Reflex D"]
//     let BarrelArray = ["no Barrel", "Suppressor", "Muzzle Brake", "Compensator", "Flash Hider"]
//     let SniperBarrelArray = ["no Barrel", "Suppressor", "Muzzle Brake", "Flash Hider"]
//     let extendedBarrel =["extended Barrel"]
//     let UnderBarrelArray = ["no Laser", "Laser"]

//     let operator

//     // atk
//     if (getValue() === 1) {
//         operator = AttackerArray[random(AttackerArray.length)]
//     }

//     // def
//     else if (getValue() === 2) {
//         operator = DefenderArray[random(DefenderArray.length)]
//     }

//     // both
//     else if (getValue() === 0) {
//         const OpArray = AttackerArray.concat(DefenderArray)
//         operator = OpArray[random(OpArray.length)]
//     }


//     let Primary
//     let Secondary
//     let Gadget
//     let Taktik
//     let rtrn

//     let Grip
//     let Scope
//     let Barrel
//     let UnderBarrel

//     let SecondaryBarrelArray = BarrelArray.slice(0, 3)

//     let SecondaryGrip
//     let SecondaryScope
//     let SecondaryBarrel
//     let SecondaryUnderBarrel

//     //-------------------------------------a-t-k--------------------------------------//
//     switch (operator) {
//         case "AtkRecruit":
//             Primary = randomizeLoadout("M249", "Mk 14 EBR", "L85A2")

//             Grip = ""
//             Scope = ""
//             UnderBarrel = ""
//             Barrel = ""

//             Secondary = randomizeLoadout("P12", "Super Shorty", "C75 Auto")

//             SecondaryGrip = ""
//             SecondaryScope = ""
//             SecondaryUnderBarrel = ""
//             SecondaryBarrel = ""

//             Gadget = randomizeLoadout("Frag Grenades", "Smoke Grenade", "Hard Breach Charge")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Sledge":
//             Primary = randomizeLoadout("M590A1", "L85A2")
//             switch (Primary){
//                 case "M590A1":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break

//                 case "L85A2":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2_5, Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }

//             Secondary = randomizeLoadout("P226 Mk 25")
//             switch (Secondary){
//                 case "P226 Mk 25":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }

//             Gadget = randomizeLoadout("Frag Grenades", "Stun Grenades")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Thatcher":
//             Primary = randomizeLoadout("AR33","L85A2","M590A1")
//             switch (Primary){
//                 case "AR33":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2_5, Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "L85A2":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel =randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M590A1":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }

//             Secondary = randomizeLoadout("P226 Mk 25")
//             switch (Secondary){
//                 case "P226 Mk 25":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }

//             Gadget = randomizeLoadout("Claymore", "Breach Charges")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Ash":
//             Primary = randomizeLoadout("G36C","R4-C")
//             switch (Primary){
//                 case "G36C":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "R4-C":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("M45 MEUSOC", "5.7 USG")
//             switch (Secondary){
//                 case "M45 MEUSOC":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "5.7 USG":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Claymore", "Breach Charges")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Thermite":
//             Primary = randomizeLoadout("M1014","556xi")
//             switch (Primary){
//                 case "M1014":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break

//                 case "556xi":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2_5, Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("M45 MEUSOC", "5.7 USG")
//             switch (Secondary){
//                 case "M45 MEUSOC":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "5.7 USG":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Stun Grenade", "Smoke Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Twitch":
//             Primary = randomizeLoadout("F2", "417", "SG-CQB")
//             switch (Primary){
//                 case "F2":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "417":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5, Scopes3)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SG-CQB":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("P9", "LFP586")
//             switch (Secondary){
//                 case "P9":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "LFP586":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Claymore", "Smoke Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Montagne":
//             Primary = randomizeLoadout("\"Le Roc\" Extendable Shield")
//             switch (Primary){
//                 case "\"Le Roc\" Extendable Shield":
//                     Grip = ""
//                     Scope = ""
//                     UnderBarrel = ""
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("P9", "LFP586")
//             switch (Secondary){
//                 case "P9":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "LFP586":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Hard Breach Charge", "Smoke Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Glaz":
//             Primary = randomizeLoadout("OTs-03")
//             switch (Primary){
//                 case "OTs-03":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = ""
//                     BarrelArray  = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("PMM", "GONNE-6", "Bearing 9")
//             switch (Secondary){
//                 case "PMM":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "GONNE-6":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel =""
//                     SecondaryBarrel = ""
//                     break

//                 case "Bearing 9":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrelArray = SecondaryBarrelArray.concat("Compensator")
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Frag Grenade", "Smoke Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Fuze":
//             Primary = randomizeLoadout("Ballistic Shield", "6P41", "AK-12")
//             switch (Primary){
//                 case "Ballistic Shield":
//                     Grip = ""
//                     Scope = ""
//                     UnderBarrel = ""
//                     Barrel = ""
//                     break

//                 case "6P41":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "Flash Hider"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "AK-12":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("PMM", "GSh-18")
//             switch (Secondary){
//                 case "PMM":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "GSh-18":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Breach Charge", "Hard Breach Charge")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Blitz":
//             Primary = randomizeLoadout("G52-Tactical Shield")
//             switch (Primary){
//                 case "G52-Tactical Shield":
//                     Grip = ""
//                     Scope = ""
//                     UnderBarrel = ""
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("P12")
//             switch (Secondary){
//                 case "P12":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Breach Charge", "Smoke Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "IQ":
//             Primary = randomizeLoadout("AUG A2", "552 Commando", "G8A1")
//             switch (Primary){
//                 case "AUG A2":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "Compensator", "Flash Hider"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "552 Commando":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "G8A1":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = ""
//                     BarrelArray = ["no Barrel", "Suppressor", "Compensator", "Flash Hider"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("P12")
//             switch (Secondary){
//                 case "P12":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Breach Charge", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Buck":
//             Primary = randomizeLoadout("C8-SFW", "CAMRS")
//             switch (Primary){
//                 case "C8-SFW":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "CAMRS":
//                     Grip = ""
//                     ScopeArray = ["no Scope", "no Scope", "no Scope", "no Scope", "no Scope", "no Scope", "no Scope", "no Scope", "no Scope", "no Scope", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C"]
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("Mk1 9mm")
//             switch (Secondary){
//                 case "Mk1 9mm":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Stun Grenade", "Hard Breach Charge")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Blackbeard":
//             Primary = randomizeLoadout("Mk17 CQB", "SR-25")
//             switch (Primary){
//                 case "Mk17 CQB":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SR-25":
//                     GripArray  = GripArray.slice(0 ,2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5, Scopes3)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("D-50")
//             switch (Secondary){
//                 case "D-50":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Stun Grenade", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Capitão":
//             Primary = randomizeLoadout("PARA-308", "M249")
//             switch (Primary){
//                 case "PARA-308":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M249":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Compensator", "Flash Hider"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("PRB92")
//             switch (Secondary){
//                 case "PRB92":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Hard Breach Charge", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Hibana":
//             Primary = randomizeLoadout("Type-89", "SuperNova")
//             switch (Primary){
//                 case "Type-89":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SuperNova":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "Suppressor"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("P229", "Bearing 9")
//             switch (Secondary){
//                 case "P229":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "Bearing 9":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrelArray = SecondaryBarrelArray.concat("Compensator")
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Hard Breach Charge", "Breach Charge")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Jackal":
//             Primary = randomizeLoadout("C7E", "PDW9", "ITA12L")
//             switch (Primary){
//                 case "C7E":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "PDW9":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "ITA12L":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("ITA12S", "USP40")
//             switch (Secondary){
//                 case "USP40":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "ITA12S":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Claymore", "Smoke Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Ying":
//             Primary = randomizeLoadout("T-95 LSW", "SIX12")
//             switch (Primary){
//                 case "T-95 LSW":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SIX12":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("Q-929")
//             switch (Secondary){
//                 case "Q-929":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Hard Breach Charge", "Smoke Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Zofia":
//             Primary = randomizeLoadout("LMG-E", "M762")
//             switch (Primary){
//                 case "LMG-E":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M762":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("RG15")
//             switch (Secondary){
//                 case "RG15":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Breach Charge", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Dokkaebi":
//             Primary = randomizeLoadout("Mk 14 EBR", "BOSG.12.2")
//             switch (Primary){
//                 case "Mk 14 EBR":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5, Scopes3)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "BOSG.12.2":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("GONNE-6", "SMG-12", "C75-Auto")
//             switch (Secondary){
//                 case "GONNE-6":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = ""
//                     break

//                 case "SMG-12":
//                     SecondaryGrip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break

//                 case "C75-Auto":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrelArray = ["no Barrel", "Suppressor"]
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Smoke Grenade", "Stun Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Lion":
//             Primary = randomizeLoadout("V308", "417", "SG-CQB")
//             switch (Primary){
//                 case "V308":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "417":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5, Scopes3)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SG-CQB":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("GONNE-6", "LFP586", "P9")
//             switch (Secondary){
//                 case "GONNE-6":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = ""
//                     break

//                 case "LFP586":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break

//                 case "P9":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Stun Grenade", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Finka":
//             Primary = randomizeLoadout("Spear .308", "6P41", "SASG-12")
//             switch (Primary){
//                 case "Spear .308":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "6P41":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     FinkaScopeArray = ScopeArray.concat(Scopes1_5, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "Flash Hider"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SASG-12":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "Suppressor", "Suppressor", "Suppressor"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("GONNE-6", "PMM", "GSh-18")
//             switch (Secondary){
//                 case "GONNE-6":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = ""
//                     break

//                 case "PMM":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "GSh-18":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Stun Grenade", "Frag Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Maverick":
//             Primary = randomizeLoadout("AR-15.50", "M4")
//             switch (Primary){
//                 case "AR-15.50":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5, Scopes3)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "Muzzle Break"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M4":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("1911 TACOPS")
//             switch (Secondary){
//                 case "1911 TACOPS":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Claymore", "Frag Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Nomad":
//             Primary = randomizeLoadout("AK-74M", "ARX200")
//             switch (Primary){
//                 case "AK-74M":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "ARX200":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes2, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout(".44 Mag Semi-Auto","PRB92")
//             switch (Secondary){
//                 case ".44 Mag Semi-Auto":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break

//                 case "PRB92":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Breach Charge", "Stun Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Gridlock":
//             Primary = randomizeLoadout("F90", "M249 SAW")
//             switch (Primary){
//                 case "F90":
//                     GripArray  =GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M249 SAW":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Flash Hider", "Compensator"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("Super Shorty","GONNE-6", "SDP 9mm")
//             switch (Secondary){
//                 case "GONNE-6":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = ""
//                     break

//                 case "Super Shorty":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break

//                 case "SDP 9mm":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Smoke Grenade", "Breach Charge")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Nøkk":
//             Primary = randomizeLoadout("FMG-9", "SIX12 SD")
//             switch (Primary){
//                 case "FMG-9":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "Muzzle Break"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SIX12 SD":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("5.7 USG","D-50")
//             switch (Secondary){
//                 case "5.7 USG":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "D-50":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Frag Grenades", "Hard Breach Charge")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Amaru":
//             Primary = randomizeLoadout("G8A1", "SuperNova")
//             switch (Primary){
//                 case "G8A1":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = ""
//                     BarrelArray = ["no Barrel", "Suppressor", "Compensator", "Flash Hider"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SuperNova":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "Suppressor"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("GONNE-6","SMG11", "ITA12S")
//             switch (Secondary){
//                 case "GONNE-6":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = ""
//                     break

//                 case "SMG11":
//                     SecondaryGrip = randomizeLoadout(GripArray.slice(0, 2)[random(GripArray.slice(0, 2).length)])
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrelArray = ["no Barrel", "Suppressor", "Compensator", "Flash Hider", "extended Barrel"]
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(SecondaryBarrelArray.length)])
//                     break

//                 case "ITA12S":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Hard Breach Charge", "Stun Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Kali":
//             Primary = randomizeLoadout("CSRX 300")
//             switch (Primary){
//                 case "CSRX 300":
//                     Grip = ""
//                     Scope = ""
//                     UnderBarrel = ""
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("C75 Auto", "SPSMG9" ,"P226 Mk 25")
//             switch (Secondary){
//                 case "SPSMG9":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrelArray = ["no Barrel", "Suppressor","Flash Hider"]
//                     SecondaryBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "C75 Auto":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrelArray = ["no Barrel", "Suppressor"]
//                     SecondaryBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "P226 Mk 25":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Breach Charge", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Iana":
//             Primary = randomizeLoadout("ARX200", "G36C")
//             switch (Primary){
//                 case "ARX200":
//                     GripArray = ["no Grip", "vertical Grip"]
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "G36C":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("Mk1 9mm","GONNE-6")
//             switch (Secondary){
//                 case "Mk1 9mm":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "GONNE-6":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel =""
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Frag Grenade", "Smoke Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Ace":
//             Primary = randomizeLoadout("AK-12", "M1014")
//             switch (Primary){
//                 case "AK-12":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M1014":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("P9")
//             switch (Secondary){
//                 case "P9":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Breach Charge", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Zero":
//             Primary = randomizeLoadout("SC3000K", "MP7")
//             switch (Primary){
//                 case "SC3000K":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "MP7":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("5.7 USG", "GONNE-6")
//             switch (Secondary){
//                 case "5.7 USG":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break

//                 case "GONNE-6":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel =""
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Hard Breach Charge", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Flores":
//             Primary = randomizeLoadout("AR33", "SR-25")
//             switch (Primary){
//                 case "AR33":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SR-25":
//                     GripArray  = GripArray.slice(0 ,2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5, Scopes3)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("GSh-18")
//             switch (Secondary){
//                 case "GSh-18":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Stun Grenade", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Osa":
//             Primary = randomizeLoadout("556XI", "PDW9")
//             switch (Primary){
//                 case "556XI":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2_5, Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "PDW9":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("PMM")
//             switch (Secondary){
//                 case "PMM":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Smoke Grenade", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//             case "Sens":
//             Primary = randomizeLoadout("POF9", "417")
//             switch (Primary){
//                 case "POF9":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "417":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2, Scopes2_5, Scopes3)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("SDP 9mm", "GONNE-6")
//             switch (Secondary){
//                 case "SDP 9mm":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "GONNE-6":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Hard Breach Charge", "Claymore")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         //-------------------------------------e-n-d---o-f---a-t-k----------------------------//
//         //----------------------------------------d-e-f---------------------------------------//
//         case "DefRecruit":
//             Primary = randomizeLoadout("MP5K", "M870")

//             Grip = ""
//             Scope = ""
//             UnderBarrel = ""
//             Barrel = ""

//             Secondary = randomizeLoadout("P9", "SMG-11")
//             switch (Secondary){
//                 case "P9":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = ""
//                     break

//                 case "SMG-11":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = ""
//                     break
//             }
//             SecondaryGrip = ""
//             SecondaryScope = ""
//             SecondaryUnderBarrel = ""
//             SecondaryBarrel = ""

//             Gadget = randomizeLoadout("Nitro Cell", "Impact Grenade", "Proximity Alarm")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Smoke":
//             Primary = randomizeLoadout("FMG-9", "M590A1")
//             switch (Primary){
//                 case "FMG-9":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M590A1":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("P226 Mk 25", "SMG-11")
//             switch (Secondary){
//                 case "P226 Mk 25":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "SMG-11":
//                     SecondaryGrip = randomizeLoadout(GripArray.slice(0, 2)[random(GripArray.slice(0, 2).length)])
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrelArray = ["no Barrel", "Suppressor", "Compensator", "Flash Hider", "extended Barrel"]
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(SecondaryBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Deployable Shield", "Barbed Wire")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Mute":
//             Primary = randomizeLoadout("MP5K", "M590A1")
//             switch (Primary){
//                 case "MP5K":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M590A1":
//                     Grip =""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("P226 Mk 25", "SMG-11")
//             switch (Secondary){
//                 case "P226 Mk 25":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "SMG-11":
//                     SecondaryGrip = randomizeLoadout(GripArray.slice(0, 2)[random(GripArray.slice(0, 2).length)])
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrelArray = ["no Barrel", "Suppressor", "Compensator", "Flash Hider", "extended Barrel"]
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(SecondaryBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Nitro Cell", "Bulletproof Camera")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Castle":
//             Primary = randomizeLoadout("UMP45", "M1014")
//             switch (Primary){
//                 case "UMP45":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M1014":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("5.7 USG", "Super Shorty")
//             switch (Secondary){
//                 case "5.7 USG":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "Super Shorty":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Proximity Alarm", "Bulletproof Camera")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Pulse":
//             Primary = randomizeLoadout("UMP45", "M1014")
//             switch (Primary){
//                 case "UMP45":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M1014":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("5.7 USG", "M45 MEUSOC")
//             switch (Secondary){
//                 case "M45 MEUSOC":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "5.7 USG":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Nitro Cell")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Doc":
//             Primary = randomizeLoadout("SG-CQB", "MP5", "P90")
//             switch (Primary){
//                 case "MP5":
//                     GripArray = GripArray.slice(0 ,2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "P90":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SG-CQB":
//                     GripArray = GripArray.slice(0 ,2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("P9", "LFP586")
//             switch (Secondary){
//                 case "P9":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "LFP586":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Bulletproof Camera")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Rook":
//             Primary = randomizeLoadout("SG-CQB", "MP5", "P90")
//             switch (Primary){
//                 case "MP5":
//                     GripArray = GripArray.slice(0 ,2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "P90":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SG-CQB":
//                     GripArray = GripArray.slice(0 ,2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("P9", "LFP586")
//             switch (Secondary){
//                 case "P9":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "LFP586":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Proximity Alarm", "Impact Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Kapkan":
//             Primary = randomizeLoadout("9×19VSN", "SASG-12")
//             switch (Primary){
//                 case "9×19VSN":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SASG-12":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("PMM", "GSh-18")
//             switch (Secondary){
//                 case "PMM":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "GSh-18":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Impact Grenade", "Nitro Cell")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Tachanka":
//             Primary = randomizeLoadout("DP27", "9×19VSN")
//             switch (Primary){
//                 case "9×19VSN":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "DP27":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(ScopeReflexD)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = ""
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("PMM", "GSh-18", "Bearing 9")
//             switch (Secondary){
//                 case "PMM":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "GSh-18":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "Bearing 9":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrelArray = SecondaryBarrelArray.concat("Compensator")
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Deployable Shield", "Barbed Wire")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Jäger":
//             Primary = randomizeLoadout("M870", "416-C Carbine")
//             switch (Primary){
//                 case "M870":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break

//                 case "416-C Carbine":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("P12")
//             switch (Secondary){
//                 case "P12":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Bulletproof Camera", "Barbed Wire")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Bandit":
//             Primary = randomizeLoadout("M870", "MP7")
//             switch (Primary){
//                 case "M870":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break

//                 case "MP7":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("P12")
//             switch (Secondary){
//                 case "P12":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Nitro Cell", "Barbed Wire")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Frost":
//             Primary = randomizeLoadout("Super 90", "9mm C1")
//             switch (Primary){
//                 case "Super 90":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break

//                 case "9mm C1":
//                     GripArray = ["no Grip", "angled Grip"]
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "extended Barrel"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("Mk1 9mm", "ITA12S")
//             switch (Secondary){
//                 case "Mk1 9mm":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "ITA12S":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Bulletproof Camera", "Deployable Shield")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Valkyrie":
//             Primary = randomizeLoadout("MPX", "SPAS-12")
//             switch (Primary){
//                 case "MPX":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SPAS-12":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("D-50")
//             switch (Secondary){
//                 case "D-50":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Impact Grenade", "Nitro Cell")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Caveira":
//             Primary = randomizeLoadout("M12", "SPAS-15")
//             switch (Primary){
//                 case "M12":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SPAS-15":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("Luison")
//             switch (Secondary){
//                 case "Luison":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel =""
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Impact Grenade", "Proximity Alarm")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Echo":
//             Primary = randomizeLoadout("SuperNova", "MP5SD")
//             switch (Primary){
//                 case "SuperNova":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "MP5SD":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("P229", "Bearing 9")
//             switch (Secondary){
//                 case "P229":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "Bearing 9":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrelArray = SecondaryBarrelArray.concat("Compensator")
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Impact Grenade", "Deployable Shield")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Mira":
//             Primary = randomizeLoadout("Vector .45 ACP", "ITA12L")
//             switch (Primary){
//                 case "Vector .45 ACP":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "ITA12L":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("ITA12S", "USP40")
//             switch (Secondary){
//                 case "USP40":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "ITA12S":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Proximity Alarm", "Nitro Cell")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Lesion":
//             Primary = randomizeLoadout("SIX12 SD", "T-5 SMG")
//             switch (Primary){
//                 case "SIX12 SD":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break

//                 case "T-5 SMG":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("Q-929")
//             switch (Secondary){
//                 case "Q-929":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Bulletproof Camera", "Impact Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Ela":
//             Primary = randomizeLoadout("Scorpion EVO 3 A1", "FO-12")
//             switch (Primary){
//                 case "Scorpion EVO 3 A1":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "FO-12":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "extended Barrel"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("RG15")
//             switch (Secondary){
//                 case "RG15":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Deployable Shield")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Vigil":
//             Primary = randomizeLoadout("K1A", "BOSG.12.2")
//             switch (Primary){
//                 case "K1A":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "BOSG.12.2":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("C75-Auto", "SMG-12")
//             switch (Secondary){
//                 case "C75-Auto":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrelArray = ["no Barrel", "Suppressor"]
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "SMG-12":
//                     SecondaryGrip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Bulletproof Camera", "Impact Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Maestro":
//             Primary = randomizeLoadout("ALDA 5.56", "ACS12")
//             switch (Primary){
//                 case "ALDA 5.56":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "ACS12":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5, Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("Bailiff 410", "Keratos .357")
//             switch (Secondary){
//                 case "Keratos .357":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "Bailiff 410":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Impact Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Alibi":
//             Primary = randomizeLoadout("Mx4 Storm", "ACS12")
//             switch (Primary){
//                 case "Mx4 Storm":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                     case "ACS12":
//                         Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                         ScopeArray = ScopeArray.concat(Scopes2)
//                         Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                         UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                         Barrel = ""
//                         break
//             }
//             Secondary = randomizeLoadout("Bailiff 410", "Keratos .357")
//             switch (Secondary){
//                 case "Keratos .357":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "Bailiff 410":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Deployable Shield", "Impact Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Clash":
//             Primary = randomizeLoadout("CCE Shield")
//             switch (Primary){
//                 case "CCE Shield":
//                     Grip = ""
//                     Scope = ""
//                     UnderBarrel = ""
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("Super Shorty", "SPSMG9", "P-10C")
//             switch (Secondary){
//                 case "SPSMG9":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrelArray = ["no Barrel", "Suppressor","Flash Hider"]
//                     SecondaryBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "P-10C":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "Super Shorty":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Impact Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Kaid":
//             Primary = randomizeLoadout("AUG A3", "TCSG12")
//             switch (Primary){
//                 case "AUG A3":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "TCSG12":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout(".44 Mag Semi-Auto", "LFP586")
//             switch (Secondary){
//                 case ".44 Mag Semi-Auto":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break

//                 case "LFP586":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Nitro Cell")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Mozzie":
//             Primary = randomizeLoadout("Commando 9", "P10 RONI")
//             switch (Primary){
//                 case "Commando 9":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "P10 RONI":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("SDP 9mm")
//             switch (Secondary){
//                 case "SDP 9mm":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Nitro Cell")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Warden":
//             Primary = randomizeLoadout("M590A1", "MPX")
//             switch (Primary){
//                 case "M590A1":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break

//                 case "MPX":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("P-10C", "SMG-12")
//             switch (Secondary){
//                 case "P-10C":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "SMG-12":
//                     SecondaryGrip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = ""
//                     break
//             }
//             Gadget = randomizeLoadout("Deployable Shield", "Nitro Cell")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Goyo":
//             Primary = randomizeLoadout("Vector .45 ACP", "TCSG12")
//             switch (Primary){
//                 case "Vector .45 ACP":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "TCSG12":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes2)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("P229")
//             switch (Secondary){
//                 case "P229":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//             }
//             Gadget = randomizeLoadout("Proximity Alarm", "Nitro Cell")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Wamai":
//             Primary = randomizeLoadout("AUG A2", "MP5K")
//             switch (Primary){
//                 case "AUG A2":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes2_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = ["no Barrel", "Suppressor", "Compensator", "Flash Hider"]
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "MP5K":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("Keratos .357", "P12")
//             switch (Secondary){
//                 case "Keratos .357":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "P12":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Proximity Alarm", "Impact Grenade")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Oryx":
//             Primary = randomizeLoadout("T-5 SMG", "SPAS-12")
//             switch (Primary){
//                 case "T-5 SMG":
//                     Grip = ""
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SPAS-12":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("Bailiff 410", "USP40")
//             switch (Secondary){
//                 case "USP40":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "Bailiff 410":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Proximity Alarm")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Melusi":
//             Primary = randomizeLoadout("MP5", "Super 90")
//             switch (Primary){
//                 case "MP5":
//                     GripArray = GripArray.slice(0 ,2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "Super 90":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("RG15")
//             switch (Secondary){
//                 case "RG15":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Impact Grenade", "Bulletproof Camera")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Aruni":
//             Primary = randomizeLoadout("P10 RONI", "Mk 14 EBR")
//             switch (Primary){
//                 case "P10 RONI":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = BarrelArray.concat(extendedBarrel)
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "Mk 14 EBR":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     BarrelArray = SniperBarrelArray
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break
//             }
//             Secondary = randomizeLoadout("PRB92")
//             switch (Secondary){
//                 case "PRB92":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Bulletproof Camera")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Thunderbird":
//             Primary = randomizeLoadout("Spear .308", "SPAS-15")
//             switch (Primary){
//                 case "Spear .308":
//                     GripArray = GripArray.slice(0, 2)
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "SPAS-15":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("Q-929", "Bearing 9")
//             switch (Secondary){
//                 case "P22Q-929":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "Bearing 9":
//                     SecondaryGrip = ""
//                     SecondaryScope = randomizeLoadout(SecondaryScopeArray[random(SecondaryScopeArray.length)])
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrelArray = SecondaryBarrelArray.concat("Compensator")
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Impact Grenade", "Nitro Cell")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Thorn":
//             Primary = randomizeLoadout("UZK50GI", "M870")
//             switch (Primary){
//                 case "UZK50GI":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "M870":
//                     Grip = ""
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("1911 TACOPS", "C75 Auto")
//             switch (Secondary){
//                 case "1911 TACOPS":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break

//                 case "C75 Auto":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = ""
//                     SecondaryBarrelArray = ["no Barrel", "Suppressor"]
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Deployable Shield")
//             Taktik = randomizeLoadout(taktik()[random(taktik().length)])

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         case "Azami":
//             Primary = randomizeLoadout("9×19VSN", "ACS12")
//             switch (Primary){
//                 case "9×19VSN":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = randomizeLoadout(BarrelArray[random(BarrelArray.length)])
//                     break

//                 case "ACS12":
//                     Grip = randomizeLoadout(GripArray[random(GripArray.length)])
//                     ScopeArray = ScopeArray.concat(Scopes1_5)
//                     Scope = randomizeLoadout(ScopeArray[random(ScopeArray.length)])
//                     UnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     Barrel = ""
//                     break
//             }
//             Secondary = randomizeLoadout("D-50")
//             switch (Secondary){
//                 case "D-50":
//                     SecondaryGrip = ""
//                     SecondaryScope = ""
//                     SecondaryUnderBarrel = randomizeLoadout(UnderBarrelArray[random(UnderBarrelArray.length)])
//                     SecondaryBarrel = randomizeLoadout(SecondaryBarrelArray[random(UnderBarrelArray.length)])
//                     break
//             }
//             Gadget = randomizeLoadout("Barbed Wire", "Impact Grenade")
//             Taktik = taktik()[random(taktik().length)]

//             rtrn = operator + "," + Primary + "," + Grip + "," + Scope + "," + Barrel + "," + UnderBarrel + "," +
//                 Secondary + "," + SecondaryGrip + "," +  SecondaryScope + "," +SecondaryUnderBarrel + "," +
//                 SecondaryBarrel + "," + Gadget + "," + Taktik
//             break
//         //-----------------------------------------------------------------------------------------------------------------------------------------------//
//         //-------------------------------------e-n-d---o-f---d-e-f----------------------------//
//     }
//     return rtrn
// }
// //-------------------------------------e-n-d---o-f---s-h-u-f-f-l-e------------------------//


// //------------------------------------r-a-n-d-o-m-i-z-e---L-o-a-d-o-u-t-------------------//
// function randomizeLoadout(...args){return args[random(args.length)]}
// //-------------------------------------e-n-d---o-f---L-o-a-d-o-u-t-----------------------//


// //-------------------------------------t-a-k-t-i-k----------------------------------------//
// function taktik() {
//     // atk
//     if (getValue() === 1) {
//         return ["Rush", "Slow Push"]
//     }
//     // def
//     if (getValue() === 2) {
//         return ["Roam", "Anchor"]
//     }
//     //both
//     if (getValue() === 0) {
//         return ["! ! DONT SHOOT ! !", "Knife Only", "Don't go into the Site", "Holo D","Secondary Only", "Only Run Out Kills", "Primary Only", "Controller Only",
//                  "TeeBag all the time", "Full Time ADS", "Q and E spam all the time", "Hipfire Only", "OneTap Only", "Just play Normal", "Just play Normal", "Just play Normal","Just play Normal", "Just play Normal", "Just play Normal",
//                  "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal", "Just play Normal",
//                  "Just play Normal", ]
//     }
// }
// //-------------------------------------e-n-d---o-f---t-a-k-t-i-k--------------------------//