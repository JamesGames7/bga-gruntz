interface GruntzPlayer extends Player {

}

interface GruntzGamedatas extends Gamedatas<GruntzPlayer> {
    // Add here variables you set up in getAllDatas
}

/*
 * Describe here the types for your state args
 */
interface PlayerTurnArgs {
    
}

/*
 * Describe here the types for your notif args
 */

interface Unit {
    type: "grunt" | "captain" | "truck" | "tank" | "plane";
    location: [number, number];
    attachment: "cannon" | "anti-air" | "transport" | "bomber" | "fighter";
}