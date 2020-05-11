export default function ChangeImg(nb) {
    if (nb === 0) {
        document
            .getElementById("Tetris")
            .style
            .opacity = 1;
        document
            .getElementById("Rpg")
            .style
            .opacity = 0;
        document
            .getElementById("_42sh")
            .style
            .opacity = 0;
    }
    if (nb === 1) {
        document
            .getElementById("Rpg")
            .style
            .opacity = 1;
        document
            .getElementById("Tetris")
            .style
            .opacity = 0;
        document
            .getElementById("_42sh")
            .style
            .opacity = 0;
    }
    if (nb === 2) {
        document
            .getElementById("_42sh")
            .style
            .opacity = 1;
        document
            .getElementById("Tetris")
            .style
            .opacity = 0;
        document
            .getElementById("Rpg")
            .style
            .opacity = 0;
    }
}